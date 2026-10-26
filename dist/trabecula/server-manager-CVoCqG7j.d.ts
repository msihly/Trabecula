import { S as ServerProcessStatus } from './server-status-QJGbCwQR.js';

interface ServerProcessDef {
    fileName: string;
    getEnv?: () => Record<string, string>;
    /** Asks the process to exit cleanly instead of terminating it, as durable state requires. */
    isGraceful?: boolean;
    label: string;
}
interface ServerManagerOptions {
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
declare class ServerManager {
    private readonly options;
    private configRestartCount;
    private isStopping;
    private lifecycleRevision;
    private stages;
    private uri;
    constructor(options: ServerManagerOptions);
    getStatuses(): ServerProcessStatus[];
    reloadConfig(): Promise<void>;
    restart(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    private notifyStatusChange;
}

export { ServerManager as S, type ServerManagerOptions as a, type ServerProcessDef as b };
