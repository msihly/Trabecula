import {
  fileLog,
  setLogsPath
} from "./chunk-QLP6GQY4.mjs";
import {
  __async,
  __pow,
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-DM4QYMVJ.mjs";

// trabecula/utils/process/lifecycle.ts
import { randomUUID } from "crypto";
import { setMaxListeners } from "events";

// trabecula/utils/process/process-job.ts
import path from "path";
import { spawnSync } from "child_process";
var PROCESS_SHUTDOWN_TIMEOUT_MS = 3e4;
var ownedJobHandle;
var runProcessJob = (command) => {
  const options = {
    detached: true,
    env: __spreadProps(__spreadValues({}, process.env), { ELECTRON_RUN_AS_NODE: "1" }),
    stdio: "pipe",
    timeout: 3e4,
    windowsHide: true
  };
  const result = spawnSync(
    process.execPath,
    [
      "-e",
      `const { execFileSync } = require("child_process");

try {
  process.stdout.write(execFileSync(process.argv[1], [
    "-NoLogo", "-NoProfile", "-NonInteractive", "-EncodedCommand", process.argv[2]
  ], { stdio: "pipe", timeout: 25000, windowsHide: true }));
} catch (error) {
  process.stderr.write(String(error.stderr ?? error.message));
  process.exitCode = 1;
}`,
      path.join(process.env.SystemRoot, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"),
      Buffer.from(
        `$ErrorActionPreference = 'Stop'
Add-Type -TypeDefinition @'
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;

public static class TrabeculaProcessJob
{
    [StructLayout(LayoutKind.Sequential)]
    private struct BasicLimits
    {
        public long PerProcessUserTimeLimit;
        public long PerJobUserTimeLimit;
        public uint LimitFlags;
        public UIntPtr MinimumWorkingSetSize;
        public UIntPtr MaximumWorkingSetSize;
        public uint ActiveProcessLimit;
        public UIntPtr Affinity;
        public uint PriorityClass;
        public uint SchedulingClass;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct IoCounters
    {
        public ulong ReadOperationCount;
        public ulong WriteOperationCount;
        public ulong OtherOperationCount;
        public ulong ReadTransferCount;
        public ulong WriteTransferCount;
        public ulong OtherTransferCount;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct ExtendedLimits
    {
        public BasicLimits BasicLimitInformation;
        public IoCounters IoInfo;
        public UIntPtr ProcessMemoryLimit;
        public UIntPtr JobMemoryLimit;
        public UIntPtr PeakProcessMemoryUsed;
        public UIntPtr PeakJobMemoryUsed;
    }

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool AssignProcessToJobObject(IntPtr job, IntPtr process);

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool CloseHandle(IntPtr handle);

    [DllImport("kernel32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    private static extern IntPtr CreateJobObject(IntPtr attributes, string name);

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool DuplicateHandle(IntPtr sourceProcess, IntPtr sourceHandle,
        IntPtr targetProcess, out IntPtr targetHandle, uint access, bool inherit, uint options);

    [DllImport("kernel32.dll")]
    private static extern IntPtr GetCurrentProcess();

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern IntPtr OpenProcess(uint access, bool inherit, int processId);

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool SetInformationJobObject(IntPtr job, int informationClass,
        ref ExtendedLimits information, uint length);

    public static long Attach(int processId)
    {
        // PROCESS_TERMINATE | PROCESS_DUP_HANDLE | PROCESS_SET_QUOTA
        IntPtr owner = OpenProcess(0x141, false, processId);
        if (owner == IntPtr.Zero) throw new Win32Exception();

        IntPtr job = IntPtr.Zero;

        try
        {
            job = CreateJobObject(IntPtr.Zero, null);
            if (job == IntPtr.Zero) throw new Win32Exception();

            ExtendedLimits limits = new ExtendedLimits();
            limits.BasicLimitInformation.LimitFlags = 0x2000; // KILL_ON_JOB_CLOSE

            if (!SetInformationJobObject(job, 9, ref limits, (uint)Marshal.SizeOf(limits)))
                throw new Win32Exception();

            IntPtr ownedHandle;
            if (!DuplicateHandle(GetCurrentProcess(), job, owner, out ownedHandle, 0, false, 2))
                throw new Win32Exception();

            if (!AssignProcessToJobObject(job, owner)) throw new Win32Exception();

            return ownedHandle.ToInt64();
        }
        finally
        {
            if (job != IntPtr.Zero) CloseHandle(job);

            CloseHandle(owner);
        }
    }

    public static void ReleaseForRelaunch(int processId, long handle)
    {
        IntPtr owner = OpenProcess(0x40, false, processId); // PROCESS_DUP_HANDLE
        if (owner == IntPtr.Zero) throw new Win32Exception();

        IntPtr job = IntPtr.Zero;

        try
        {
            if (!DuplicateHandle(owner, new IntPtr(handle), GetCurrentProcess(), out job, 0, false, 2))
                throw new Win32Exception();

            ExtendedLimits limits = new ExtendedLimits();
            if (!SetInformationJobObject(job, 9, ref limits, (uint)Marshal.SizeOf(limits)))
                throw new Win32Exception();
        }
        finally
        {
            if (job != IntPtr.Zero) CloseHandle(job);

            CloseHandle(owner);
        }
    }
}
'@
[TrabeculaProcessJob]::${command}`,
        "utf16le"
      ).toString("base64")
    ],
    options
  );
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`Windows process ownership failed: ${result.stderr.toString().trim()}`);
  return result.stdout;
};
var ownProcessTree = () => {
  if (process.platform !== "win32" || ownedJobHandle) return;
  ownedJobHandle = Number(runProcessJob(`Attach(${process.pid})`).toString().trim());
  if (!Number.isSafeInteger(ownedJobHandle) || ownedJobHandle <= 0)
    throw new Error("Windows did not return the process ownership handle.");
};
var releaseProcessTreeForRelaunch = () => {
  if (process.platform !== "win32") return;
  if (!ownedJobHandle) throw new Error("The application does not own its process tree.");
  runProcessJob(`ReleaseForRelaunch(${process.pid}, ${ownedJobHandle})`);
};

// trabecula/utils/process/lifecycle.ts
var mainRequests = /* @__PURE__ */ new Map();
var stopping = false;
var shutdownController = new AbortController();
var serverShutdownSignal = shutdownController.signal;
var checkServerShutdown = () => {
  if (stopping) throw new Error("Server task cancelled for shutdown.");
};
var closeHttpServer = (server) => __async(null, null, function* () {
  if (!(server == null ? void 0 : server.listening)) return;
  yield new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
    server.closeAllConnections();
  });
});
var isServerStopping = () => stopping;
var makeMainRequester = () => (action, args) => new Promise((resolve, reject) => {
  if (!process.connected) return reject(new Error("The main process is unavailable."));
  const requestId = randomUUID();
  mainRequests.set(requestId, { reject, resolve });
  process.send(
    { action, args, requestId, type: "main-request" },
    (error) => {
      if (!error) return;
      mainRequests.delete(requestId);
      reject(error);
    }
  );
});
var reportStartupProgress = (message) => {
  fileLog(`[Startup] ${message}`);
  if (process.connected)
    process.send({ message, type: "startup-progress" }, (error) => {
      if (error) console.error("Startup progress could not be delivered:", error);
    });
};
var registerProcessLifecycle = ({
  reload,
  start,
  stop
}) => {
  ownProcessTree();
  setMaxListeners(0, serverShutdownSignal);
  let shutdown;
  let startup;
  const reply = (message) => {
    if (!process.connected) return;
    process.send(message, (error) => {
      if (error) console.error("Lifecycle response could not be delivered:", error);
    });
  };
  const shutdownProcess = (code = 0) => {
    if (shutdown) return shutdown;
    stopping = true;
    shutdownController.abort(new Error("Server is shutting down."));
    shutdown = (() => __async(null, null, function* () {
      yield stop();
      process.stdout.write("", () => process.stderr.write("", () => process.exit(code)));
    }))().catch((error) => {
      console.error("Graceful shutdown failed:", error);
      reply({ error: error.message, type: "shutdown-error" });
      process.exit(1);
    });
    return shutdown;
  };
  const startProcess = (message) => __async(null, null, function* () {
    if (process.env.LOGS_PATH) yield setLogsPath(process.env.LOGS_PATH);
    return yield start(message);
  });
  process.on("message", (message) => {
    if ((message == null ? void 0 : message.type) !== "main-response") return;
    const request = mainRequests.get(message.requestId);
    if (!request) return;
    mainRequests.delete(message.requestId);
    if (message.error !== void 0) request.reject(new Error(message.error));
    else request.resolve(message.data);
  });
  process.on("message", (message) => __async(null, null, function* () {
    var _a;
    try {
      if ((message == null ? void 0 : message.type) === "stop") yield shutdownProcess();
      else if ((message == null ? void 0 : message.type) === "start") {
        if (stopping) throw new Error("Process is shutting down.");
        startup != null ? startup : startup = startProcess(message);
        const response = yield startup;
        if (!shutdown) reply(__spreadProps(__spreadValues({}, response), { requestId: message.requestId, type: "ready" }));
      } else if ((message == null ? void 0 : message.type) === "reload-config") {
        if (stopping) throw new Error("Process is shutting down.");
        yield reload == null ? void 0 : reload();
        reply({ requestId: message.requestId, type: "config-reloaded" });
      }
    } catch (error) {
      console.error(`[${message == null ? void 0 : message.type}] Failed:`, error);
      reply({
        error: (_a = error.stack) != null ? _a : error.message,
        requestId: message == null ? void 0 : message.requestId,
        type: "error"
      });
      if ((message == null ? void 0 : message.type) === "start") shutdownProcess(1).catch(() => {
      });
    }
  }));
  process.on("disconnect", () => shutdownProcess().catch(() => {
  }));
  process.on(
    "unhandledRejection",
    (error) => {
      var _a;
      return fileLog(["Unhandled rejection", (_a = error == null ? void 0 : error.stack) != null ? _a : String(error)], { type: "error" });
    }
  );
  for (const signal of ["SIGINT", "SIGTERM"])
    process.on(signal, () => {
      if (!process.connected) shutdownProcess().catch(() => {
      });
      else fileLog(`Waiting for parent shutdown after ${signal}.`);
    });
};

// trabecula/utils/process/server-manager.ts
import path2 from "path";
import { fork } from "child_process";
import { randomUUID as randomUUID2 } from "crypto";
var BASE_RESTART_DELAY_MS = 2e3;
var MAX_RESTARTS = 5;
var READY_TIMEOUT_MS = 3e4;
var START_TIMEOUT_MS = 6 * 60 * 1e3;
var ManagedProcess = class {
  constructor(def, options, getPayload, onStatusChange) {
    __publicField(this, "def", def);
    __publicField(this, "options", options);
    __publicField(this, "getPayload", getPayload);
    __publicField(this, "onStatusChange", onStatusChange);
    __publicField(this, "intentionalStop", false);
    __publicField(this, "message", null);
    __publicField(this, "proc", null);
    __publicField(this, "rejectStartup", null);
    __publicField(this, "resolveStartup", null);
    __publicField(this, "restartCount", 0);
    __publicField(this, "restartTimer", null);
    __publicField(this, "startup", null);
    __publicField(this, "state", "starting");
  }
  getStatus() {
    return {
      label: this.def.label,
      message: this.message,
      restartCount: this.restartCount,
      state: this.state
    };
  }
  handleExit(child, code) {
    if (this.proc !== child) return;
    this.proc = null;
    if (this.intentionalStop) return;
    fileLog(`${this.def.label} exited with code ${code}`, { type: "error" });
    this.scheduleRestart();
  }
  handleMainRequest(_0, _1) {
    return __async(this, arguments, function* (child, { action, args, requestId }) {
      var _a, _b;
      const reply = (response) => {
        if (!child.connected) return;
        child.send(__spreadProps(__spreadValues({}, response), { requestId, type: "main-response" }), (error) => {
          if (error)
            fileLog(`${this.def.label} main process response failed: ${error.message}`, {
              type: "error"
            });
        });
      };
      try {
        const handler = (_a = this.options.mainRequestHandlers) == null ? void 0 : _a[action];
        if (!handler) throw new Error(`Unknown main process request: ${action}`);
        reply({ data: yield handler(args) });
      } catch (error) {
        reply({ error: (_b = error == null ? void 0 : error.message) != null ? _b : String(error) });
      }
    });
  }
  prepareStop() {
    var _a;
    (_a = this.rejectStartup) == null ? void 0 : _a.call(this, new Error(`${this.def.label} startup was stopped.`));
    this.rejectStartup = null;
    this.resolveStartup = null;
    this.startup = null;
    clearTimeout(this.restartTimer);
    this.restartTimer = null;
    this.intentionalStop = true;
  }
  reloadConfig() {
    return __async(this, null, function* () {
      yield this.sendAndWait({ type: "reload-config" }, "config-reloaded");
    });
  }
  scheduleRestart() {
    var _a;
    if (this.intentionalStop || this.restartTimer) return;
    if (this.restartCount >= MAX_RESTARTS) {
      this.setState("failed");
      (_a = this.rejectStartup) == null ? void 0 : _a.call(this, new Error(`${this.def.label} failed after ${MAX_RESTARTS} restarts.`));
      fileLog(`${this.def.label} hit max restarts (${MAX_RESTARTS}). Giving up.`, {
        type: "error"
      });
      return;
    }
    const delay = BASE_RESTART_DELAY_MS * __pow(2, this.restartCount);
    this.restartCount++;
    this.setState("restarting");
    fileLog(
      `Restarting ${this.def.label} in ${delay}ms (attempt ${this.restartCount}/${MAX_RESTARTS})...`,
      { type: "error" }
    );
    this.restartTimer = setTimeout(() => __async(this, null, function* () {
      this.restartTimer = null;
      try {
        yield this.spawn();
        fileLog(`${this.def.label} restarted successfully.`);
      } catch (error) {
        fileLog(`${this.def.label} failed to restart: ${error.message}`, { type: "error" });
        if (!this.proc) this.scheduleRestart();
      }
    }), delay);
  }
  sendAndWait(message, successType, timeoutMs = READY_TIMEOUT_MS) {
    return new Promise((resolve, reject) => {
      const child = this.proc;
      if (!(child == null ? void 0 : child.connected)) return reject(new Error(`${this.def.label} process is unavailable.`));
      const requestId = randomUUID2();
      const cleanup = () => {
        clearTimeout(timeout);
        child.off("error", handleError);
        child.off("exit", handleExit);
        child.off("message", handleMessage);
      };
      const handleError = (error) => {
        cleanup();
        reject(error);
      };
      const handleExit = () => {
        cleanup();
        reject(new Error(`${this.def.label} process exited before responding.`));
      };
      const handleMessage = (response) => {
        if ((response == null ? void 0 : response.requestId) !== requestId) return;
        if (response.type === "error") {
          cleanup();
          reject(new Error(response.error));
        } else if (response.type === successType) {
          cleanup();
          resolve(response);
        }
      };
      const timeout = setInterval(() => {
        var _a;
        if (message.type === "start") {
          fileLog(
            `${this.def.label} is still starting: ${(_a = this.message) != null ? _a : "waiting for the service to report progress"}`
          );
        } else {
          cleanup();
          reject(new Error(`${this.def.label} process response timed out; process retained.`));
        }
      }, timeoutMs);
      child.on("error", handleError);
      child.on("exit", handleExit);
      child.on("message", handleMessage);
      child.send(__spreadProps(__spreadValues({}, message), { requestId }), (error) => {
        if (error) handleError(error);
      });
    });
  }
  setState(state) {
    this.state = state;
    this.onStatusChange();
  }
  spawn() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e;
      if (this.intentionalStop) throw new Error(`${this.def.label} is stopping.`);
      this.message = null;
      this.setState(this.restartCount ? "restarting" : "starting");
      const { base, configPath, isPackaged, logsPath, resourcesPath } = this.options;
      const options = {
        // Isolate terminal signals while keeping descendants inside the owner's Windows job.
        detached: true,
        env: __spreadValues(__spreadProps(__spreadValues({}, process.env), {
          CONFIG_PATH: configPath,
          IS_PACKAGED: isPackaged ? "1" : "0",
          LOGS_PATH: logsPath,
          NODE_PATH: isPackaged ? path2.join(resourcesPath, "app.asar", "node_modules") : path2.resolve("node_modules"),
          RESOURCES_PATH: resourcesPath
        }), (_b = (_a = this.def).getEnv) == null ? void 0 : _b.call(_a)),
        stdio: ["ignore", "pipe", "pipe", "ipc"],
        windowsHide: true
      };
      const child = fork(path2.resolve(base, `${this.def.fileName}.js`), [], options);
      this.proc = child;
      (_c = child.stdout) == null ? void 0 : _c.on("data", (data) => fileLog(`[${this.def.label}] ${data}`));
      (_d = child.stderr) == null ? void 0 : _d.on("data", (data) => {
        const output = String(data).replace(/\\"/g, '"');
        const isDebug = output.includes("MongoMS:") && !/"s"\s*:\s*"[EF]"|Error:/.test(output);
        fileLog(`[${this.def.label}] ${data}`, { type: isDebug ? "debug" : "error" });
      });
      child.on("error", (error) => {
        fileLog(`${this.def.label}: ${error.message}`, { type: "error" });
        if (!child.pid) this.handleExit(child, 1);
      });
      child.on("message", (message2) => {
        var _a2, _b2;
        if ((message2 == null ? void 0 : message2.type) === "main-request") this.handleMainRequest(child, message2);
        else if (this.proc === child) {
          if ((message2 == null ? void 0 : message2.type) === "startup-progress" && !this.intentionalStop) {
            this.message = message2.message;
            this.onStatusChange();
          } else if ((message2 == null ? void 0 : message2.type) === "error" || (message2 == null ? void 0 : message2.type) === "shutdown-error") {
            this.message = (_a2 = message2.error) == null ? void 0 : _a2.split(/\r?\n/)[0];
            if (message2.type === "shutdown-error") {
              this.setState("failed");
              (_b2 = this.rejectStartup) == null ? void 0 : _b2.call(this, new Error(message2.error));
            } else {
              this.onStatusChange();
            }
          }
        }
      });
      child.once("exit", (code) => this.handleExit(child, code));
      const message = yield this.sendAndWait(
        __spreadValues({ type: "start" }, this.getPayload()),
        "ready",
        START_TIMEOUT_MS
      );
      this.restartCount = 0;
      this.message = null;
      this.setState("ready");
      (_e = this.resolveStartup) == null ? void 0 : _e.call(this, message);
      return message;
    });
  }
  start() {
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
  stop() {
    return __async(this, null, function* () {
      this.prepareStop();
      const child = this.proc;
      if (!child || child.exitCode !== null || child.signalCode !== null) return;
      if (!this.def.isGraceful) {
        yield new Promise((resolve, reject) => {
          child.once("exit", () => resolve());
          child.once("error", reject);
          if (!child.kill()) reject(new Error(`Could not terminate ${this.def.label}.`));
        });
      } else {
        yield new Promise((resolve, reject) => {
          const requestId = randomUUID2();
          const warning = setInterval(
            () => fileLog(`Waiting for ${this.def.label} to shut down cleanly...`),
            3e4
          );
          const cleanup = () => {
            clearInterval(warning);
            child.off("exit", onExit);
            child.off("message", onMessage);
          };
          const onExit = (code, signal) => {
            cleanup();
            if (code === 0) resolve();
            else
              reject(
                new Error(
                  `${this.def.label} exited during shutdown (code: ${code}, signal: ${signal}).`
                )
              );
          };
          const fail = (error) => {
            cleanup();
            reject(error);
          };
          const onMessage = (message) => {
            if ((message == null ? void 0 : message.type) === "shutdown-error" || (message == null ? void 0 : message.requestId) === requestId && message.type === "error") {
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
    });
  }
};
var ServerManager = class {
  constructor(options) {
    __publicField(this, "options", options);
    __publicField(this, "configRestartCount", 0);
    __publicField(this, "isStopping", false);
    __publicField(this, "lifecycleRevision", 0);
    __publicField(this, "stages");
    __publicField(this, "uri");
    __publicField(this, "notifyStatusChange", () => this.options.onStatusChange(this.getStatuses()));
    this.stages = options.stages.map(
      (stage) => stage.map(
        (def) => new ManagedProcess(def, options, () => ({ uri: this.uri }), this.notifyStatusChange)
      )
    );
  }
  getStatuses() {
    return this.stages.flat().map((serverProcess) => __spreadProps(__spreadValues({}, serverProcess.getStatus()), {
      isConfigRestart: this.configRestartCount > 0
    })).sort((a, b) => a.label.localeCompare(b.label));
  }
  reloadConfig() {
    return __async(this, null, function* () {
      yield Promise.all(this.stages.flat().map((serverProcess) => serverProcess.reloadConfig()));
    });
  }
  restart() {
    return __async(this, null, function* () {
      this.configRestartCount++;
      this.notifyStatusChange();
      try {
        const stopping2 = this.stop();
        const revision = this.lifecycleRevision;
        yield stopping2;
        if (revision !== this.lifecycleRevision)
          throw new Error("Restart cancelled by a later lifecycle request.");
        yield this.start();
      } finally {
        this.configRestartCount--;
        this.notifyStatusChange();
      }
    });
  }
  start() {
    return __async(this, null, function* () {
      var _a, _b;
      const revision = ++this.lifecycleRevision;
      this.isStopping = false;
      for (const stage of this.stages) {
        const responses = yield Promise.all(stage.map((serverProcess) => serverProcess.start()));
        if (this.isStopping || revision !== this.lifecycleRevision)
          throw new Error("Startup cancelled by a later lifecycle request.");
        this.uri = (_b = (_a = responses.find((response) => response.uri)) == null ? void 0 : _a.uri) != null ? _b : this.uri;
      }
      fileLog("All services started.");
    });
  }
  stop() {
    return __async(this, null, function* () {
      const revision = ++this.lifecycleRevision;
      this.isStopping = true;
      for (const serverProcess of this.stages.flat()) serverProcess.prepareStop();
      const errors = [];
      for (const stage of [...this.stages].reverse()) {
        if (revision !== this.lifecycleRevision) return;
        const results = yield Promise.allSettled(stage.map((serverProcess) => serverProcess.stop()));
        for (const result of results) {
          if (result.status === "rejected") errors.push(result.reason);
        }
      }
      if (errors.length)
        throw new AggregateError(errors, "One or more services failed to shut down.");
    });
  }
};

export {
  PROCESS_SHUTDOWN_TIMEOUT_MS,
  ownProcessTree,
  releaseProcessTreeForRelaunch,
  serverShutdownSignal,
  checkServerShutdown,
  closeHttpServer,
  isServerStopping,
  makeMainRequester,
  reportStartupProgress,
  registerProcessLifecycle,
  ServerManager
};
//# sourceMappingURL=chunk-VNS3THIS.mjs.map