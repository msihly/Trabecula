import { S as ServerManager, a as ServerManagerOptions } from '../../server-manager-CVoCqG7j.js';
import '../../server-status-QJGbCwQR.js';

interface MainProcessOptions {
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
declare const registerMainProcess: ({ appName, devPort, mainDir, resourcesFolder, }: MainProcessOptions) => {
    baseUrl: string;
    configPath: string;
    folderPath: string;
    getServers: () => ServerManager;
    isBundled: boolean;
    isPackaged: boolean;
    isShuttingDown: () => boolean;
    logsPath: string;
    /** Settles once file logging is set up, or has failed and falls back to the console. */
    logsReady: Promise<void>;
    relaunch: () => void;
    startServers: ({ mainRequestHandlers, stages, }: Pick<ServerManagerOptions, "mainRequestHandlers" | "stages">) => ServerManager;
};

export { type MainProcessOptions, registerMainProcess };
