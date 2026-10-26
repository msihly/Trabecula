import { createServer } from "http";
import { Server, ServerOptions } from "socket.io";
import {
  checkServerShutdown,
  listenHttpServer,
  registerProcessLifecycle,
} from "trabecula/utils/process";
import { fileLog } from "trabecula/utils/server";

export interface SocketProcessOptions {
  /** Events each client emits that are relayed to every other client. */
  events: string[];
  port: number;
  serverOptions?: Partial<ServerOptions>;
}

/** Runs a socket.io server that relays each client's events to every other client. */
export const registerSocketProcess = (getOptions: () => Promise<SocketProcessOptions>) => {
  let io: Server;
  let server: ReturnType<typeof createServer>;

  registerProcessLifecycle({
    start: async () => {
      const { events, port, serverOptions } = await getOptions();

      checkServerShutdown();

      server = createServer();
      io = new Server(server, serverOptions);

      io.on("connection", (socket) => {
        socket.emit("connected");

        events.forEach((event) =>
          socket.on(event, (...args) => socket.broadcast.emit(event, ...args)),
        );
      });

      await listenHttpServer(server, port);

      fileLog(`[SOCKET] Listening on ${port}`);
    },

    stop: async () => {
      // A server that failed to listen has nothing to close, and closing it would fail.
      if (server?.listening)
        await new Promise<void>((resolve, reject) =>
          io.close((error) => (error ? reject(error) : resolve())),
        );
    },
  });
};
