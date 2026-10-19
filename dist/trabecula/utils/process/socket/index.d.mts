import { ServerOptions } from 'socket.io';

interface SocketProcessOptions {
    /** Events each client emits that are relayed to every other client. */
    events: string[];
    port: number;
    serverOptions?: Partial<ServerOptions>;
}
/** Runs a socket.io server that relays each client's events to every other client. */
declare const registerSocketProcess: (getOptions: () => Promise<SocketProcessOptions>) => void;

export { type SocketProcessOptions, registerSocketProcess };
