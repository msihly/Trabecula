import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "path";
import { dayjs, SERVER_STATUS_IPC, ServerProcessStatus } from "trabecula/utils/common";
import {
  ownProcessTree,
  PROCESS_SHUTDOWN_TIMEOUT_MS,
  releaseProcessTreeForRelaunch,
  ServerManager,
  ServerManagerOptions,
  ServerProcessMessage,
} from "trabecula/utils/process";
import { fileLog, setLogsPath } from "trabecula/utils/server";

export interface MainProcessOptions {
  /** Names the app in the dialog shown when another instance holds the lock. */
  appName: string;
  /** Port of the development server that unbundled runs load windows from. */
  devPort: number;
  /** Folder of the built main script, which also holds the server bundles in development. */
  mainDir: string;
  /** Folder under `extraResources` holding the packaged server bundles. */
  resourcesFolder: string;
}

/** Owns the app's process tree, single instance, paths and logs, and stops its servers on quit. */
export const registerMainProcess = ({
  appName,
  devPort,
  mainDir,
  resourcesFolder,
}: MainProcessOptions) => {
  try {
    ownProcessTree();
  } catch (error) {
    console.error("Process ownership could not be established:", error);
    app.exit(1);
  }

  const isPackaged = app.isPackaged;
  const isBundled = isPackaged || !!process.env.BUILD_DEV;

  const rootDir = path.resolve(mainDir, "..", "..");
  const folderPath = isPackaged ? process.resourcesPath : rootDir;

  const baseUrl = isBundled
    ? `file://${path.resolve(rootDir, "..", isPackaged ? "" : "build", "index.html")}`
    : `http://localhost:${devPort}${!!process.env.HMR ? "/index.hmr.html" : ""}`;

  const configPath = path.resolve(folderPath, "..", "config.json");
  const logsDir = path.resolve(folderPath, "..", "logs", dayjs().format("YYYY-MM-DD"));
  const logsPath = path.resolve(logsDir, `${dayjs().format("HH[h]mm[m]ss[s]")}.log`);

  let relaunchAfterShutdown = false;
  let servers: ServerManager = null;
  let shutdown: Promise<void> = null;
  let shutdownComplete = false;

  app.setAppLogsPath(logsDir);
  app.setPath("appData", folderPath);
  app.setPath("userData", path.resolve(folderPath, "userData"));

  if (!app.requestSingleInstanceLock()) {
    console.error(
      `${appName} is already running or still shutting down. This launch cannot start services.`,
    );

    dialog.showErrorBox(
      `${appName} is already running`,
      `Another ${appName} instance still holds the application lock. It may be waiting for active work to finish shutting down. This launch has not started any services.`,
    );

    app.exit(1);
  }

  const logsReady = setLogsPath(logsPath).catch((error) =>
    console.error("Failed to initialize file logging:", error),
  );

  ipcMain.handle("getConfigPath", () => configPath);
  ipcMain.handle(SERVER_STATUS_IPC.get, () => servers?.getStatuses() ?? []);

  app.on("before-quit", (event) => {
    if (shutdownComplete) return;

    event.preventDefault();

    shutdown ??= (async () => {
      const deadline = setTimeout(() => {
        fileLog("Shutdown deadline exceeded; terminating the owned process tree.", {
          type: "error",
        });
        app.exit(1);
      }, PROCESS_SHUTDOWN_TIMEOUT_MS);

      try {
        await servers?.stop();

        if (relaunchAfterShutdown) {
          if (process.connected)
            await new Promise<void>((resolve, reject) =>
              process.send({ type: "relaunch" } satisfies ServerProcessMessage, (error) =>
                error ? reject(error) : resolve(),
              ),
            );
          else {
            releaseProcessTreeForRelaunch();
            app.relaunch();
          }
        }

        shutdownComplete = true;
        app.exit(0);
      } finally {
        clearTimeout(deadline);
      }
    })().catch((error) => {
      fileLog(`Shutdown failed: ${error.message}`, { type: "error" });
      app.exit(1);
    });
  });

  process.on("SIGINT", () => app.quit());
  process.on("SIGTERM", () => app.quit());

  // A parent connected over IPC, which also performs relaunches, can stop the app too.
  process.on("disconnect", () => app.quit());

  process.on("message", (message: ServerProcessMessage) => {
    if (message?.type === "stop") app.quit();
  });

  const broadcastServerStatuses = (statuses: ServerProcessStatus[]) =>
    BrowserWindow.getAllWindows().forEach((window) =>
      window.webContents.send(SERVER_STATUS_IPC.changed, statuses),
    );

  /** Quits, stopping the servers first, then starts the app again. */
  const relaunch = () => {
    relaunchAfterShutdown = true;
    app.quit();
  };

  const startServers = ({
    mainRequestHandlers,
    stages,
  }: Pick<ServerManagerOptions, "mainRequestHandlers" | "stages">) => {
    servers = new ServerManager({
      base: isPackaged
        ? path.join(process.resourcesPath, "extraResources", resourcesFolder, "server")
        : mainDir,
      configPath,
      isPackaged,
      logsPath,
      mainRequestHandlers,
      onStatusChange: broadcastServerStatuses,
      resourcesPath: process.resourcesPath,
      stages,
    });

    servers.start().catch((error) => {
      fileLog(`Server startup failed: ${error.message}`, { type: "error" });
    });

    return servers;
  };

  return {
    baseUrl,
    configPath,
    folderPath,
    getServers: () => servers,
    isBundled,
    isPackaged,
    isShuttingDown: () => !!shutdown,
    logsPath,
    /** Settles once file logging is set up, or has failed and falls back to the console. */
    logsReady,
    relaunch,
    startServers,
  };
};
