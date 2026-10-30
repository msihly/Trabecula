var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// trabecula/utils/socket/index.ts
var socket_exports = {};
__export(socket_exports, {
  SocketClient: () => SocketClient
});
module.exports = __toCommonJS(socket_exports);

// trabecula/utils/socket/socket-client.ts
var import_socket = require("socket.io-client");
var SocketClient = class {
  constructor(options) {
    __publicField(this, "options", options);
    __publicField(this, "listeners", []);
    __publicField(this, "port");
    __publicField(this, "socket");
  }
  connect() {
    if (this.socket) return this.socket;
    try {
      this.port = this.options.getPort();
      this.socket = (0, import_socket.io)(`ws://127.0.0.1:${this.port}`, { transports: ["websocket"] });
      this.socket.on(
        "connected",
        () => this.options.log(
          `Socket.io connected on port ${this.port}. ID: ${this.socket.id}`,
          "debug"
        )
      );
      this.socket.on(
        "connect_error",
        (error) => this.options.log(`Socket.io error on port ${this.port}: ${error.message}`, "error")
      );
      this.socket.on(
        "disconnect",
        () => this.options.log(`Socket.io disconnected on port ${this.port}.`, "debug")
      );
    } catch (error) {
      this.options.log(`Failed to connect to socket.io: ${error.message}`, "error");
    }
    return this.socket;
  }
  disconnect() {
    this.listeners = [];
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.options.log("Socket.io disconnected.", "debug");
    }
  }
  emit(event, ...args) {
    try {
      if (!this.socket) this.connect();
      this.socket.emit(event, ...args);
    } catch (error) {
      this.options.log(`Socket emit error: ${error.message}`, "error");
    }
  }
  /** Defers sending and drops the event while disconnected, for frequent updates. */
  emitVolatile(event, ...args) {
    if (!this.socket) this.connect();
    try {
      setImmediate(() => {
        var _a;
        try {
          (_a = this.socket) == null ? void 0 : _a.volatile.emit(event, ...args);
        } catch (error) {
          this.options.log(`Volatile socket emit error: ${error.message}`, "error");
        }
      });
    } catch (error) {
      this.options.log(`Volatile socket emit could not be scheduled: ${error.message}`, "error");
    }
  }
  isConnected() {
    var _a;
    return !!((_a = this.socket) == null ? void 0 : _a.connected);
  }
  off(event, listener) {
    var _a;
    try {
      this.listeners = this.listeners.filter(
        (entry) => entry.event !== event || entry.listener !== listener
      );
      (_a = this.socket) == null ? void 0 : _a.off(event, listener);
    } catch (error) {
      this.options.log(`Socket listener removal error: ${error.message}`, "error");
    }
  }
  on(event, listener) {
    try {
      if (!this.socket) this.connect();
      this.socket.on(event, listener);
      this.listeners.push({ event, listener });
    } catch (error) {
      this.options.log(`Socket listener error: ${error.message}`, "error");
    }
  }
  /** Reconnects, such as after the port changes, and re-adds every listener. */
  reconnect() {
    const listeners = this.listeners;
    this.disconnect();
    this.connect();
    for (const { event, listener } of listeners) this.on(event, listener);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SocketClient
});
//# sourceMappingURL=index.js.map