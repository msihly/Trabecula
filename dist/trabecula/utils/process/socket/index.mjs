import {
  checkServerShutdown,
  registerProcessLifecycle
} from "../../../chunk-VNS3THIS.mjs";
import {
  fileLog
} from "../../../chunk-QLP6GQY4.mjs";
import "../../../chunk-6TR333HE.mjs";
import {
  __async
} from "../../../chunk-DM4QYMVJ.mjs";

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
      yield new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(port, "127.0.0.1", resolve);
      });
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