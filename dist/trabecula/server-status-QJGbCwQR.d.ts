type ServerProcessState = "failed" | "ready" | "restarting" | "starting";
interface ServerProcessStatus {
    isConfigRestart?: boolean;
    label: string;
    message?: string;
    restartCount: number;
    state: ServerProcessState;
}
/** IPC channels between the main process's server manager and its windows. */
declare const SERVER_STATUS_IPC: {
    changed: string;
    get: string;
};

export { type ServerProcessStatus as S, SERVER_STATUS_IPC as a, type ServerProcessState as b };
