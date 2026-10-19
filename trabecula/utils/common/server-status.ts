export type ServerProcessState = "failed" | "ready" | "restarting" | "starting";

export interface ServerProcessStatus {
  isConfigRestart?: boolean;
  label: string;
  message?: string;
  restartCount: number;
  state: ServerProcessState;
}

/** IPC channels between the main process's server manager and its windows. */
export const SERVER_STATUS_IPC = {
  changed: "server-status-changed",
  get: "getServerStatuses",
};
