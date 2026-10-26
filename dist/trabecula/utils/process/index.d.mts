import { Server } from 'http';
export { S as ServerManager, a as ServerManagerOptions, b as ServerProcessDef } from '../../server-manager-B0jhgJnF.mjs';
import '../../server-status-QJGbCwQR.mjs';

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
/** Listens on the loopback interface, rejecting if the port cannot be bound. */
declare const listenHttpServer: (server: Server, port: number) => Promise<void>;
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

export { type MainRequest, type MainRequestHandlers, PROCESS_SHUTDOWN_TIMEOUT_MS, type ServerProcessMessage, checkServerShutdown, closeHttpServer, isServerStopping, listenHttpServer, makeMainRequester, ownProcessTree, registerProcessLifecycle, releaseProcessTreeForRelaunch, reportStartupProgress, serverShutdownSignal };
