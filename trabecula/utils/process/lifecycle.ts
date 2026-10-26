import { randomUUID } from "crypto";
import { setMaxListeners } from "events";
import { Server } from "http";
import { ownProcessTree } from "trabecula/utils/process/process-job";
import { fileLog, setLogsPath } from "trabecula/utils/server";

/** Work a server process asks the main process to do, such as anything needing Electron. */
export interface MainRequest {
  args: unknown;
  result: unknown;
}

export type MainRequestHandlers<Requests extends Record<keyof Requests, MainRequest>> = {
  [Action in keyof Requests]: (
    args: Requests[Action]["args"],
  ) => Requests[Action]["result"] | Promise<Requests[Action]["result"]>;
};

export interface ServerProcessMessage {
  action?: string;
  args?: unknown;
  data?: unknown;
  error?: string;
  message?: string;
  requestId?: string;
  type:
    | "config-reloaded"
    | "error"
    | "main-request"
    | "main-response"
    | "ready"
    | "relaunch"
    | "reload-config"
    | "shutdown-error"
    | "start"
    | "startup-progress"
    | "stop";
  uri?: string;
}

const mainRequests = new Map<
  string,
  { reject: (error: Error) => void; resolve: (data: unknown) => void }
>();

let stopping = false;
const shutdownController = new AbortController();
export const serverShutdownSignal = shutdownController.signal;

export const checkServerShutdown = () => {
  if (stopping) throw new Error("Server task cancelled for shutdown.");
};

export const closeHttpServer = async (server?: Server) => {
  if (!server?.listening) return;

  await new Promise<void>((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
    // The shutdown signal interrupts active work while HTTP connections close.
    server.closeAllConnections();
  });
};

export const isServerStopping = () => stopping;

/** Makes the typed function a server process uses to ask the main process for work. */
export const makeMainRequester =
  <Requests extends Record<keyof Requests, MainRequest>>() =>
  <Action extends keyof Requests & string>(action: Action, args: Requests[Action]["args"]) =>
    new Promise<Requests[Action]["result"]>((resolve, reject) => {
      if (!process.connected) return reject(new Error("The main process is unavailable."));

      const requestId = randomUUID();

      mainRequests.set(requestId, { reject, resolve });

      process.send(
        { action, args, requestId, type: "main-request" } satisfies ServerProcessMessage,
        (error) => {
          if (!error) return;

          mainRequests.delete(requestId);
          reject(error);
        },
      );
    });

export const reportStartupProgress = (message: string) => {
  fileLog(`[Startup] ${message}`);

  if (process.connected)
    process.send({ message, type: "startup-progress" } satisfies ServerProcessMessage, (error) => {
      if (error) console.error("Startup progress could not be delivered:", error);
    });
};

/** Runs a server process on its manager's messages, interrupting work before closing resources. */
export const registerProcessLifecycle = ({
  reload,
  start,
  stop,
}: {
  reload?: () => Promise<void>;
  start: (message: ServerProcessMessage) => Promise<Pick<ServerProcessMessage, "uri"> | void>;
  stop: () => Promise<void>;
}) => {
  ownProcessTree();
  setMaxListeners(0, serverShutdownSignal);

  let shutdown: Promise<void>;
  let startup: Promise<Pick<ServerProcessMessage, "uri"> | void>;

  const reply = (message: ServerProcessMessage) => {
    if (!process.connected) return;

    process.send(message, (error) => {
      if (error) console.error("Lifecycle response could not be delivered:", error);
    });
  };

  const shutdownProcess = (code = 0) => {
    if (shutdown) return shutdown;

    stopping = true;
    shutdownController.abort(new Error("Server is shutting down."));

    shutdown = (async () => {
      await stop();
      process.stdout.write("", () => process.stderr.write("", () => process.exit(code)));
    })().catch((error) => {
      console.error("Graceful shutdown failed:", error);
      reply({ error: error.message, type: "shutdown-error" });
      process.exit(1);
    });

    return shutdown;
  };

  const startProcess = async (message: ServerProcessMessage) => {
    if (process.env.LOGS_PATH) await setLogsPath(process.env.LOGS_PATH);

    return await start(message);
  };

  process.on("message", (message: ServerProcessMessage) => {
    if (message?.type !== "main-response") return;

    const request = mainRequests.get(message.requestId);
    if (!request) return;

    mainRequests.delete(message.requestId);

    if (message.error !== undefined) request.reject(new Error(message.error));
    else request.resolve(message.data);
  });

  process.on("message", async (message: ServerProcessMessage) => {
    try {
      if (message?.type === "stop") await shutdownProcess();
      else if (message?.type === "start") {
        if (stopping) throw new Error("Process is shutting down.");

        startup ??= startProcess(message);

        const response = await startup;

        if (!shutdown) reply({ ...response, requestId: message.requestId, type: "ready" });
      } else if (message?.type === "reload-config") {
        if (stopping) throw new Error("Process is shutting down.");

        await reload?.();
        reply({ requestId: message.requestId, type: "config-reloaded" });
      }
    } catch (error) {
      console.error(`[${message?.type}] Failed:`, error);

      reply({
        error: error.stack ?? error.message,
        requestId: message?.requestId,
        type: "error",
      });

      if (message?.type === "start") shutdownProcess(1).catch(() => {});
    }
  });

  process.on("disconnect", () => {
    for (const request of mainRequests.values())
      request.reject(new Error("The main process disconnected."));

    mainRequests.clear();

    shutdownProcess().catch(() => {});
  });

  // A stray rejection is logged instead of ending the process along with its active work.
  process.on("unhandledRejection", (error: Error) =>
    fileLog(["Unhandled rejection", error?.stack ?? String(error)], { type: "error" }),
  );

  for (const signal of ["SIGINT", "SIGTERM"] as const)
    process.on(signal, () => {
      // The connected parent coordinates client shutdown before storage shutdown.
      if (!process.connected) shutdownProcess().catch(() => {});
      else fileLog(`Waiting for parent shutdown after ${signal}.`);
    });
};
