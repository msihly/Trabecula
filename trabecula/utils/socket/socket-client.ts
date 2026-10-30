import { io, Socket } from "socket.io-client";

type SocketListener = (...args: any[]) => void;

export interface SocketClientOptions {
  getPort: () => number;
  /** Records connection changes and failures, such as in the app's log file or console. */
  log: (message: string, type: "debug" | "error") => void;
}

/** Talks to a local socket.io relay, connecting on first use and keeping listeners on reconnect. */
export class SocketClient<
  Events extends { [Event in keyof Events]: SocketListener },
  EmitEvent extends Extract<keyof Events, string> = Extract<keyof Events, string>,
> {
  private listeners: Array<{ event: Extract<keyof Events, string>; listener: SocketListener }> = [];
  private port: number;
  private socket: Socket;

  constructor(private readonly options: SocketClientOptions) {}

  connect() {
    if (this.socket) return this.socket;

    try {
      this.port = this.options.getPort();
      // In Node, polling runs through xmlhttprequest-ssl, which calls the deprecated `url.parse()`.
      this.socket = io(`ws://127.0.0.1:${this.port}`, { transports: ["websocket"] });

      this.socket.on("connected", () =>
        this.options.log(
          `Socket.io connected on port ${this.port}. ID: ${this.socket.id}`,
          "debug",
        ),
      );

      this.socket.on("connect_error", (error) =>
        this.options.log(`Socket.io error on port ${this.port}: ${error.message}`, "error"),
      );

      this.socket.on("disconnect", () =>
        this.options.log(`Socket.io disconnected on port ${this.port}.`, "debug"),
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

  emit<Event extends EmitEvent>(event: Event, ...args: Parameters<Events[Event]>) {
    try {
      if (!this.socket) this.connect();

      this.socket.emit(event, ...args);
    } catch (error) {
      this.options.log(`Socket emit error: ${error.message}`, "error");
    }
  }

  /** Defers sending and drops the event while disconnected, for frequent updates. */
  emitVolatile<Event extends EmitEvent>(event: Event, ...args: Parameters<Events[Event]>) {
    if (!this.socket) this.connect();

    try {
      setImmediate(() => {
        try {
          this.socket?.volatile.emit(event, ...args);
        } catch (error) {
          this.options.log(`Volatile socket emit error: ${error.message}`, "error");
        }
      });
    } catch (error) {
      this.options.log(`Volatile socket emit could not be scheduled: ${error.message}`, "error");
    }
  }

  isConnected() {
    return !!this.socket?.connected;
  }

  off<Event extends Extract<keyof Events, string>>(event: Event, listener: SocketListener) {
    try {
      this.listeners = this.listeners.filter(
        (entry) => entry.event !== event || entry.listener !== listener,
      );

      this.socket?.off(event as string, listener);
    } catch (error) {
      this.options.log(`Socket listener removal error: ${error.message}`, "error");
    }
  }

  on<Event extends Extract<keyof Events, string>>(
    event: Event,
    listener: (...args: Parameters<Events[Event]>) => void,
  ) {
    try {
      if (!this.socket) this.connect();

      this.socket.on(event as string, listener);
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
}
