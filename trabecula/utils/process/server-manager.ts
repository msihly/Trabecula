import path from "path";
import { ChildProcess, fork, ForkOptions } from "child_process";
import { randomUUID } from "crypto";
import type { ServerProcessState, ServerProcessStatus } from "trabecula/utils/common";
import type { ServerProcessMessage } from "trabecula/utils/process/lifecycle";
import { fileLog } from "trabecula/utils/server";

export interface ServerProcessDef {
  fileName: string;
  getEnv?: () => Record<string, string>;
  /** Asks the process to exit cleanly instead of terminating it, as durable state requires. */
  isGraceful?: boolean;
  label: string;
}

export interface ServerManagerOptions {
  /** Folder containing each process's built `<fileName>.js`. */
  base: string;
  configPath: string;
  isPackaged: boolean;
  logsPath: string;
  mainRequestHandlers?: Record<string, (args: any) => unknown>;
  onStatusChange: (statuses: ServerProcessStatus[]) => void;
  resourcesPath: string;
  /** Each stage starts together once the previous one is ready; stages stop in reverse. */
  stages: ServerProcessDef[][];
}

const BASE_RESTART_DELAY_MS = 2000;
const MAX_RESTARTS = 5;
const READY_TIMEOUT_MS = 30000;
const START_TIMEOUT_MS = 6 * 60 * 1000;

class ManagedProcess {
  private intentionalStop = false;
  private message: string = null;
  private proc: ChildProcess = null;
  private rejectStartup: (error: Error) => void = null;
  private resolveStartup: (message: ServerProcessMessage) => void = null;
  private restartCount = 0;
  private restartTimer: NodeJS.Timeout = null;
  private startup: Promise<ServerProcessMessage> = null;
  private state: ServerProcessState = "starting";

  constructor(
    private readonly def: ServerProcessDef,
    private readonly options: ServerManagerOptions,
    private readonly getPayload: () => Pick<ServerProcessMessage, "uri">,
    private readonly onStatusChange: () => void,
  ) {}

  getStatus(): ServerProcessStatus {
    return {
      label: this.def.label,
      message: this.message,
      restartCount: this.restartCount,
      state: this.state,
    };
  }

  private handleExit(child: ChildProcess, code: number | null) {
    if (this.proc !== child) return;

    this.proc = null;

    if (this.intentionalStop) return;

    fileLog(`${this.def.label} exited with code ${code}`, { type: "error" });
    this.scheduleRestart();
  }

  private async handleMainRequest(
    child: ChildProcess,
    { action, args, requestId }: ServerProcessMessage,
  ) {
    const reply = (response: Pick<ServerProcessMessage, "data" | "error">) => {
      if (!child.connected) return;

      child.send({ ...response, requestId, type: "main-response" }, (error) => {
        if (error)
          fileLog(`${this.def.label} main process response failed: ${error.message}`, {
            type: "error",
          });
      });
    };

    try {
      const handler = this.options.mainRequestHandlers?.[action];
      if (!handler) throw new Error(`Unknown main process request: ${action}`);

      reply({ data: await handler(args) });
    } catch (error) {
      reply({ error: error?.message ?? String(error) });
    }
  }

  prepareStop() {
    this.rejectStartup?.(new Error(`${this.def.label} startup was stopped.`));
    this.rejectStartup = null;
    this.resolveStartup = null;
    this.startup = null;
    clearTimeout(this.restartTimer);
    this.restartTimer = null;
    this.intentionalStop = true;
  }

  async reloadConfig() {
    await this.sendAndWait({ type: "reload-config" }, "config-reloaded");
  }

  private scheduleRestart() {
    if (this.intentionalStop || this.restartTimer) return;

    if (this.restartCount >= MAX_RESTARTS) {
      this.setState("failed");
      this.rejectStartup?.(new Error(`${this.def.label} failed after ${MAX_RESTARTS} restarts.`));
      fileLog(`${this.def.label} hit max restarts (${MAX_RESTARTS}). Giving up.`, {
        type: "error",
      });

      return;
    }

    const delay = BASE_RESTART_DELAY_MS * 2 ** this.restartCount;

    this.restartCount++;
    this.setState("restarting");

    fileLog(
      `Restarting ${this.def.label} in ${delay}ms (attempt ${this.restartCount}/${MAX_RESTARTS})...`,
      { type: "error" },
    );

    this.restartTimer = setTimeout(async () => {
      this.restartTimer = null;

      try {
        await this.spawn();
        fileLog(`${this.def.label} restarted successfully.`);
      } catch (error) {
        fileLog(`${this.def.label} failed to restart: ${error.message}`, { type: "error" });

        if (!this.proc) this.scheduleRestart();
      }
    }, delay);
  }

  private sendAndWait(
    message: ServerProcessMessage,
    successType: ServerProcessMessage["type"],
    timeoutMs = READY_TIMEOUT_MS,
  ): Promise<ServerProcessMessage> {
    return new Promise((resolve, reject) => {
      const child = this.proc;

      if (!child?.connected) return reject(new Error(`${this.def.label} process is unavailable.`));

      const requestId = randomUUID();

      const cleanup = () => {
        clearTimeout(timeout);
        child.off("error", handleError);
        child.off("exit", handleExit);
        child.off("message", handleMessage);
      };

      const handleError = (error: Error) => {
        cleanup();
        reject(error);
      };

      const handleExit = () => {
        cleanup();
        reject(new Error(`${this.def.label} process exited before responding.`));
      };

      const handleMessage = (response: ServerProcessMessage) => {
        if (response?.requestId !== requestId) return;

        if (response.type === "error") {
          cleanup();
          reject(new Error(response.error));
        } else if (response.type === successType) {
          cleanup();
          resolve(response);
        }
      };

      const timeout = setInterval(() => {
        if (message.type === "start") {
          fileLog(
            `${this.def.label} is still starting: ${this.message ?? "waiting for the service to report progress"}`,
          );
        } else {
          cleanup();
          reject(new Error(`${this.def.label} process response timed out; process retained.`));
        }
      }, timeoutMs);

      child.on("error", handleError);
      child.on("exit", handleExit);
      child.on("message", handleMessage);

      child.send({ ...message, requestId }, (error) => {
        if (error) handleError(error);
      });
    });
  }

  private setState(state: ServerProcessState) {
    this.state = state;
    this.onStatusChange();
  }

  private async spawn(): Promise<ServerProcessMessage> {
    if (this.intentionalStop) throw new Error(`${this.def.label} is stopping.`);

    this.message = null;
    this.setState(this.restartCount ? "restarting" : "starting");

    const { base, configPath, isPackaged, logsPath, resourcesPath } = this.options;

    const options: ForkOptions & { windowsHide: boolean } = {
      // Isolate terminal signals while keeping descendants inside the owner's Windows job.
      detached: true,
      env: {
        ...process.env,
        CONFIG_PATH: configPath,
        IS_PACKAGED: isPackaged ? "1" : "0",
        LOGS_PATH: logsPath,
        NODE_PATH: isPackaged
          ? path.join(resourcesPath, "app.asar", "node_modules")
          : path.resolve("node_modules"),
        RESOURCES_PATH: resourcesPath,
        ...this.def.getEnv?.(),
      },
      stdio: ["ignore", "pipe", "pipe", "ipc"],
      windowsHide: true,
    };

    const child = fork(path.resolve(base, `${this.def.fileName}.js`), [], options);

    this.proc = child;
    child.stdout?.on("data", (data) => fileLog(`[${this.def.label}] ${data}`));

    child.stderr?.on("data", (data) => {
      const output = String(data).replace(/\\"/g, '"');
      const isDebug = output.includes("MongoMS:") && !/"s"\s*:\s*"[EF]"|Error:/.test(output);

      fileLog(`[${this.def.label}] ${data}`, { type: isDebug ? "debug" : "error" });
    });

    child.on("error", (error) => {
      fileLog(`${this.def.label}: ${error.message}`, { type: "error" });

      if (!child.pid) this.handleExit(child, 1);
    });

    child.on("message", (message: ServerProcessMessage) => {
      if (message?.type === "main-request") this.handleMainRequest(child, message);
      else if (this.proc === child) {
        if (message?.type === "startup-progress" && !this.intentionalStop) {
          this.message = message.message;
          this.onStatusChange();
        } else if (message?.type === "error" || message?.type === "shutdown-error") {
          this.message = message.error?.split(/\r?\n/)[0];

          if (message.type === "shutdown-error") {
            this.setState("failed");
            this.rejectStartup?.(new Error(message.error));
          } else {
            this.onStatusChange();
          }
        }
      }
    });

    child.once("exit", (code) => this.handleExit(child, code));

    const message = await this.sendAndWait(
      { type: "start", ...this.getPayload() },
      "ready",
      START_TIMEOUT_MS,
    );

    this.restartCount = 0;
    this.message = null;
    this.setState("ready");
    this.resolveStartup?.(message);

    return message;
  }

  start(): Promise<ServerProcessMessage> {
    if (this.startup) return this.startup;

    this.intentionalStop = false;

    this.startup = new Promise((resolve, reject) => {
      this.rejectStartup = reject;
      this.resolveStartup = resolve;
    });

    this.spawn().catch((error) => {
      fileLog(`${this.def.label} failed to start: ${error.message}`, { type: "error" });

      if (!this.proc) this.scheduleRestart();
    });

    return this.startup;
  }

  async stop() {
    this.prepareStop();

    const child = this.proc;

    if (!child || child.exitCode !== null || child.signalCode !== null) return;

    // Client work is already journalled. Terminating its owner also stops native descendants.
    if (!this.def.isGraceful) {
      await new Promise<void>((resolve, reject) => {
        child.once("exit", () => resolve());
        child.once("error", reject);

        if (!child.kill()) reject(new Error(`Could not terminate ${this.def.label}.`));
      });
    } else {
      await new Promise<void>((resolve, reject) => {
        const requestId = randomUUID();

        const warning = setInterval(
          () => fileLog(`Waiting for ${this.def.label} to shut down cleanly...`),
          30000,
        );

        const cleanup = () => {
          clearInterval(warning);
          child.off("exit", onExit);
          child.off("message", onMessage);
        };

        const onExit = (code: number | null, signal: NodeJS.Signals | null) => {
          cleanup();

          if (code === 0) resolve();
          else
            reject(
              new Error(
                `${this.def.label} exited during shutdown (code: ${code}, signal: ${signal}).`,
              ),
            );
        };

        const fail = (error: Error) => {
          cleanup();
          reject(error);
        };

        const onMessage = (message: ServerProcessMessage) => {
          if (
            message?.type === "shutdown-error" ||
            (message?.requestId === requestId && message.type === "error")
          ) {
            fail(new Error(message.error));
          }
        };

        child.once("exit", onExit);
        child.on("message", onMessage);

        if (!child.connected) {
          fail(new Error(`${this.def.label} IPC is disconnected during shutdown.`));

          return;
        }

        child.send({ requestId, type: "stop" }, (error) => {
          if (error) fail(error);
        });
      });
    }
  }
}

export class ServerManager {
  private configRestartCount = 0;
  private isStopping = false;
  private lifecycleRevision = 0;
  private stages: ManagedProcess[][];
  private uri: string;

  constructor(private readonly options: ServerManagerOptions) {
    this.stages = options.stages.map((stage) =>
      stage.map(
        (def) =>
          new ManagedProcess(def, options, () => ({ uri: this.uri }), this.notifyStatusChange),
      ),
    );
  }

  getStatuses(): ServerProcessStatus[] {
    return this.stages
      .flat()
      .map((serverProcess) => ({
        ...serverProcess.getStatus(),
        isConfigRestart: this.configRestartCount > 0,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  async reloadConfig() {
    await Promise.all(this.stages.flat().map((serverProcess) => serverProcess.reloadConfig()));
  }

  async restart() {
    this.configRestartCount++;
    this.notifyStatusChange();

    try {
      const stopping = this.stop();
      const revision = this.lifecycleRevision;

      await stopping;

      if (revision !== this.lifecycleRevision)
        throw new Error("Restart cancelled by a later lifecycle request.");

      await this.start();
    } finally {
      this.configRestartCount--;
      this.notifyStatusChange();
    }
  }

  async start() {
    const revision = ++this.lifecycleRevision;

    this.isStopping = false;

    for (const stage of this.stages) {
      const responses = await Promise.all(stage.map((serverProcess) => serverProcess.start()));

      if (this.isStopping || revision !== this.lifecycleRevision)
        throw new Error("Startup cancelled by a later lifecycle request.");

      this.uri = responses.find((response) => response.uri)?.uri ?? this.uri;
    }

    fileLog("All services started.");
  }

  async stop() {
    const revision = ++this.lifecycleRevision;

    this.isStopping = true;

    for (const serverProcess of this.stages.flat()) serverProcess.prepareStop();

    const errors: unknown[] = [];

    for (const stage of [...this.stages].reverse()) {
      // A later lifecycle request owns the stages this stop has not reached.
      if (revision !== this.lifecycleRevision) return;

      const results = await Promise.allSettled(stage.map((serverProcess) => serverProcess.stop()));

      for (const result of results) {
        if (result.status === "rejected") errors.push(result.reason);
      }
    }

    if (errors.length)
      throw new AggregateError(errors, "One or more services failed to shut down.");
  }

  private notifyStatusChange = () => this.options.onStatusChange(this.getStatuses());
}
