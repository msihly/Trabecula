import {
  checkServerShutdown,
  listenHttpServer,
  registerProcessLifecycle
} from "../../../chunk-KOPTVBCS.mjs";
import {
  fileLog
} from "../../../chunk-C43CDQ55.mjs";
import "../../../chunk-B3ID2K5C.mjs";
import {
  __async
} from "../../../chunk-5Q6I7MMU.mjs";

// trabecula/utils/process/socket.ts
import { createServer } from "http";
import { Server } from "socket.io";
var registerSocketProcess = (getOptions) => {
  let io;
  let server;
  registerProcessLifecycle({
    start: () => __async(null, null, function* () {
      const { events, port, serverOptions } = yield getOptions();
      checkServerShutdown();
      server = createServer();
      io = new Server(server, serverOptions);
      io.on("connection", (socket) => {
        socket.emit("connected");
        events.forEach(
          (event) => socket.on(event, (...args) => socket.broadcast.emit(event, ...args))
        );
      });
      yield listenHttpServer(server, port);
      fileLog(`[SOCKET] Listening on ${port}`);
    }),
    stop: () => __async(null, null, function* () {
      if (server == null ? void 0 : server.listening)
        yield new Promise(
          (resolve, reject) => io.close((error) => error ? reject(error) : resolve())
        );
    })
  });
};
export {
  registerSocketProcess
};
//# sourceMappingURL=index.mjs.map