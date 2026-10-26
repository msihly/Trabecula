import {
  PROCESS_SHUTDOWN_TIMEOUT_MS,
  ServerManager,
  ownProcessTree,
  releaseProcessTreeForRelaunch
} from "../../chunk-YZYLCUVV.mjs";
import {
  fileLog,
  setLogsPath
} from "../../chunk-XCGFMXNA.mjs";
import {
  SERVER_STATUS_IPC,
  dayjs
} from "../../chunk-TW4B7B5M.mjs";
import {
  __async
} from "../../chunk-DM4QYMVJ.mjs";

// trabecula/utils/electron/main-process.ts
import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "path";
var registerMainProcess = ({
  appName,
  devPort,
  mainDir,
  resourcesFolder
}) => {
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
  const baseUrl = isBundled ? `file://${path.resolve(rootDir, "..", isPackaged ? "" : "build", "index.html")}` : `http://localhost:${devPort}${!!process.env.HMR ? "/index.hmr.html" : ""}`;
  const configPath = path.resolve(folderPath, "..", "config.json");
  const logsDir = path.resolve(folderPath, "..", "logs", dayjs().format("YYYY-MM-DD"));
  const logsPath = path.resolve(logsDir, `${dayjs().format("HH[h]mm[m]ss[s]")}.log`);
  let relaunchAfterShutdown = false;
  let servers = null;
  let shutdown = null;
  let shutdownComplete = false;
  if (!app.requestSingleInstanceLock()) {
    console.error(
      `${appName} is already running or still shutting down. This launch cannot start services.`
    );
    dialog.showErrorBox(
      `${appName} is already running`,
      `Another ${appName} instance still holds the application lock. It may be waiting for active work to finish shutting down. This launch has not started any services.`
    );
    app.exit(1);
  }
  app.setAppLogsPath(logsDir);
  app.setPath("appData", folderPath);
  app.setPath("userData", path.resolve(folderPath, "userData"));
  const logsReady = setLogsPath(logsPath).catch(
    (error) => console.error("Failed to initialize file logging:", error)
  );
  ipcMain.handle("getConfigPath", () => configPath);
  ipcMain.handle(SERVER_STATUS_IPC.get, () => {
    var _a;
    return (_a = servers == null ? void 0 : servers.getStatuses()) != null ? _a : [];
  });
  app.on("before-quit", (event) => {
    if (shutdownComplete) return;
    event.preventDefault();
    shutdown != null ? shutdown : shutdown = (() => __async(null, null, function* () {
      const deadline = setTimeout(() => {
        fileLog("Shutdown deadline exceeded; terminating the owned process tree.", {
          type: "error"
        });
        app.exit(1);
      }, PROCESS_SHUTDOWN_TIMEOUT_MS);
      try {
        yield servers == null ? void 0 : servers.stop();
        if (relaunchAfterShutdown) {
          if (process.connected)
            yield new Promise(
              (resolve, reject) => process.send(
                { type: "relaunch" },
                (error) => error ? reject(error) : resolve()
              )
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
    }))().catch((error) => {
      fileLog(`Shutdown failed: ${error.message}`, { type: "error" });
      app.exit(1);
    });
  });
  process.on("SIGINT", () => app.quit());
  process.on("SIGTERM", () => app.quit());
  process.on("disconnect", () => app.quit());
  process.on("message", (message) => {
    if ((message == null ? void 0 : message.type) === "stop") app.quit();
  });
  const broadcastServerStatuses = (statuses) => BrowserWindow.getAllWindows().forEach(
    (window) => window.webContents.send(SERVER_STATUS_IPC.changed, statuses)
  );
  const relaunch = () => {
    relaunchAfterShutdown = true;
    app.quit();
  };
  const startServers = ({
    mainRequestHandlers,
    stages
  }) => {
    servers = new ServerManager({
      base: isPackaged ? path.join(process.resourcesPath, "extraResources", resourcesFolder, "server") : mainDir,
      configPath,
      isPackaged,
      logsPath,
      mainRequestHandlers,
      onStatusChange: broadcastServerStatuses,
      resourcesPath: process.resourcesPath,
      stages
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
    startServers
  };
};
export {
  registerMainProcess
};
//# sourceMappingURL=index.mjs.map