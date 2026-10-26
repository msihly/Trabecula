import * as _socket_io_component_emitter from '@socket.io/component-emitter';
import { Socket } from 'socket.io-client';

type SocketListener = (...args: any[]) => void;
interface SocketClientOptions {
    getPort: () => number;
    /** Records connection changes and failures, such as in the app's log file or console. */
    log: (message: string, type: "debug" | "error") => void;
}
/** Talks to a local socket.io relay, connecting on first use and keeping listeners on reconnect. */
declare class SocketClient<Events extends {
    [Event in keyof Events]: SocketListener;
}, EmitEvent extends Extract<keyof Events, string> = Extract<keyof Events, string>> {
    private readonly options;
    private listeners;
    private port;
    private socket;
    constructor(options: SocketClientOptions);
    connect(): Socket<_socket_io_component_emitter.DefaultEventsMap, _socket_io_component_emitter.DefaultEventsMap>;
    disconnect(): void;
    emit<Event extends EmitEvent>(event: Event, ...args: Parameters<Events[Event]>): void;
    /** Defers sending and drops the event while disconnected, for frequent updates. */
    emitVolatile<Event extends EmitEvent>(event: Event, ...args: Parameters<Events[Event]>): void;
    isConnected(): boolean;
    off<Event extends Extract<keyof Events, string>>(event: Event, listener: SocketListener): void;
    on<Event extends Extract<keyof Events, string>>(event: Event, listener: (...args: Parameters<Events[Event]>) => void): void;
    /** Reconnects, such as after the port changes, and re-adds every listener. */
    reconnect(): void;
}

export { SocketClient, type SocketClientOptions };
