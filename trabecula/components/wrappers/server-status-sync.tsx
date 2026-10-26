import { ReactNode, useEffect, useRef, useState } from "react";
import { LoadingOverlay, Text, View } from "trabecula/components";
import { Toaster } from "trabecula/utils/client";
import { SERVER_STATUS_IPC, ServerProcessStatus } from "trabecula/utils/common";

export type ServerStatusMessageType = "error" | "info" | "success";

/** Renderer IPC for reading the main process's server statuses, like Electron's `ipcRenderer`. */
export interface ServerStatusIpc {
  invoke: (channel: string) => Promise<unknown>;
  off: (
    channel: string,
    listener: (event: unknown, statuses: ServerProcessStatus[]) => void,
  ) => unknown;
  on: (
    channel: string,
    listener: (event: unknown, statuses: ServerProcessStatus[]) => void,
  ) => unknown;
}

export interface ServerStatusSyncProps {
  appName: string;
  children: ReactNode;
  header?: ReactNode;
  ipcRenderer: ServerStatusIpc;
  /** Called once for each new status message, such as to keep a notification history. */
  onStatusMessage?: (message: string, type: ServerStatusMessageType) => void;
  /** How to relaunch the app when its services cannot start. */
  restartInstruction: string;
}

const joinStatusLabels = (statuses: ServerProcessStatus[]) =>
  statuses.map(({ label }) => label).join(" / ");

/** Shows startup until every server process is ready, then notifies when they drop or recover. */
export const ServerStatusSync = ({
  appName,
  children,
  header,
  ipcRenderer,
  onStatusMessage,
  restartInstruction,
}: ServerStatusSyncProps) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [serverToaster] = useState(() => new Toaster());
  const [startupMessage, setStartupMessage] = useState(`Starting ${appName} services...`);

  const pollInterval = useRef<ReturnType<typeof setInterval>>(null);
  const previousStatusMessage = useRef<string>(null);
  const wasApplyingConfig = useRef(false);
  const wasDisconnected = useRef(false);

  useEffect(() => {
    let disposed = false;
    let ready = false;

    const notifyServerStatus = (
      message: string,
      type: ServerStatusMessageType,
      autoClose?: false,
    ) => {
      if (message !== previousStatusMessage.current) onStatusMessage?.(message, type);

      previousStatusMessage.current = message;
      serverToaster.toast(message, { autoClose, type });
    };

    const handleServerStatuses = (statuses: ServerProcessStatus[]) => {
      if (disposed) return;

      const failed = statuses.filter(({ state }) => state === "failed");
      const unavailable = statuses.filter(({ state }) => state !== "ready");

      if (!ready) {
        if (!statuses.length || unavailable.length) {
          setStartupMessage(
            [
              failed.length
                ? `${joinStatusLabels(failed)} failed to start. ${restartInstruction}`
                : `Starting ${joinStatusLabels(unavailable) || `${appName} services`}...`,
              ...unavailable
                .filter(({ message }) => message)
                .map(({ label, message }) => `${label}: ${message}`),
            ].join("\n\n"),
          );
          startPolling();

          return;
        }

        ready = true;
        setHasStarted(true);
      }

      if (failed.length) {
        stopPolling();
        wasDisconnected.current = true;
        notifyServerStatus(
          `${joinStatusLabels(failed)} failed to restart. Restart ${appName}.`,
          "error",
          false,
        );
      } else if (unavailable.length) {
        startPolling();
        wasDisconnected.current = true;
        wasApplyingConfig.current = unavailable.every(({ isConfigRestart }) => isConfigRestart);
        notifyServerStatus(
          wasApplyingConfig.current
            ? "Applying server configuration..."
            : `${joinStatusLabels(unavailable)} process unavailable. Attempting to reconnect...`,
          wasApplyingConfig.current ? "info" : "error",
          false,
        );
      } else {
        stopPolling();

        if (!wasDisconnected.current) return;

        wasDisconnected.current = false;
        notifyServerStatus(
          wasApplyingConfig.current
            ? "Server configuration applied."
            : "Server processes reconnected.",
          "success",
        );
        wasApplyingConfig.current = false;
      }
    };

    const handleServerStatusChanged = (_, statuses: ServerProcessStatus[]) =>
      handleServerStatuses(statuses);

    const pollServerStatuses = async () => {
      try {
        handleServerStatuses(
          (await ipcRenderer.invoke(SERVER_STATUS_IPC.get)) as ServerProcessStatus[],
        );
      } catch {
        if (disposed) return;

        if (!ready) {
          setStartupMessage(`Unable to read service status. ${restartInstruction}`);
          startPolling();

          return;
        }

        wasDisconnected.current = true;
        startPolling();
        notifyServerStatus(
          `Unable to check server processes. Restart ${appName} if this persists.`,
          "error",
          false,
        );
      }
    };

    const startPolling = () => {
      if (!pollInterval.current) pollInterval.current = setInterval(pollServerStatuses, 2000);
    };

    const stopPolling = () => {
      if (!pollInterval.current) return;

      clearInterval(pollInterval.current);
      pollInterval.current = null;
    };

    ipcRenderer.on(SERVER_STATUS_IPC.changed, handleServerStatusChanged);
    pollServerStatuses();

    return () => {
      disposed = true;
      stopPolling();
      ipcRenderer.off(SERVER_STATUS_IPC.changed, handleServerStatusChanged);
    };
  }, []);

  return hasStarted ? (
    <>{children}</>
  ) : (
    <View column height="100vh">
      {header}

      <View flex={1} position="relative">
        <LoadingOverlay
          isLoading
          sub={
            <Text preset="title" fontSize="0.9em" padding="1rem" whiteSpace="pre-wrap">
              {startupMessage}
            </Text>
          }
        />
      </View>
    </View>
  );
};
