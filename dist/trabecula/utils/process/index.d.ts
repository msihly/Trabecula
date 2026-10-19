import { Server } from 'http';
import { S as ServerProcessStatus } from '../../server-status-QJGbCwQR.js';

/** Work a server process asks the main process to do, such as anything needing Electron. */
interface MainRequest {
    args: unknown;
    result: unknown;
}
type MainRequestHandlers<Requests extends Record<keyof Requests, MainRequest>> = {
    [Action in keyof Requests]: (args: Requests[Action]["args"]) => Requests[Action]["result"] | Promise<Requests[Action]["result"]>;
};
interface ServerProcessMessage {
    action?: string;
    args?: unknown;
    data?: unknown;
    error?: string;
    message?: string;
    requestId?: string;
    type: "config-reloaded" | "error" | "main-request" | "main-response" | "ready" | "relaunch" | "reload-config" | "shutdown-error" | "start" | "startup-progress" | "stop";
    uri?: string;
}
declare const serverShutdownSignal: AbortSignal;
declare const checkServerShutdown: () => void;
declare const closeHttpServer: (server?: Server) => Promise<void>;
declare const isServerStopping: () => boolean;
/** Makes the typed function a server process uses to ask the main process for work. */
declare const makeMainRequester: <Requests extends Record<keyof Requests, MainRequest>>() => <Action extends keyof Requests & string>(action: Action, args: Requests[Action]["args"]) => Promise<Requests[Action]["result"]>;
declare const reportStartupProgress: (message: string) => void;
/** Runs a server process on its manager's messages, interrupting work before closing resources. */
declare const registerProcessLifecycle: ({ reload, start, stop, }: {
    reload?: () => Promise<void>;
    start: (message: ServerProcessMessage) => Promise<Pick<ServerProcessMessage, "uri"> | void>;
    stop: () => Promise<void>;
}) => void;

declare const PROCESS_SHUTDOWN_TIMEOUT_MS = 30000;
/** Own descendants in the kernel, including when the owner cannot run an exit handler. */
declare const ownProcessTree: () => void;
/** Only after services stop, allow Electron's explicit relaunch helper to outlive the old app. */
declare const releaseProcessTreeForRelaunch: () => void;

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

export { type MainRequest, type MainRequestHandlers, PROCESS_SHUTDOWN_TIMEOUT_MS, ServerManager, type ServerManagerOptions, type ServerProcessDef, type ServerProcessMessage, checkServerShutdown, closeHttpServer, isServerStopping, makeMainRequester, ownProcessTree, registerProcessLifecycle, releaseProcessTreeForRelaunch, reportStartupProgress, serverShutdownSignal };
