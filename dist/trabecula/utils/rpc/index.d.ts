import { a as RpcProcedure, b as RpcRequest } from '../../rpc-router-uY-Omtyv.js';
export { c as RpcResponse, R as RpcRouter, d as callRpc } from '../../rpc-router-uY-Omtyv.js';

interface RpcCallOptions {
    signal?: AbortSignal;
}
/** Sends one request through a transport, resolving with the procedure's result. */
type RpcSend = (request: RpcRequest, options?: RpcCallOptions) => Promise<unknown>;
/** The input is required unless the procedure takes none or takes `unknown`. */
type RpcArgs<Params extends unknown[]> = [] extends Params ? [input?: Params[0], options?: RpcCallOptions] : unknown extends Params[0] ? [input?: Params[0], options?: RpcCallOptions] : [input: Params[0], options?: RpcCallOptions];
/**
 * Mirrors a router as async functions, leaving out each procedure's transport context.
 * An `any` entry, such as one from a module that doesn't resolve, stays callable with any input.
 */
type RpcClient<Router> = {
    [Key in keyof Router]: 0 extends 1 & Router[Key] ? (input?: any, options?: RpcCallOptions) => Promise<any> : Router[Key] extends RpcProcedure ? (...args: RpcArgs<Parameters<Router[Key]>>) => Promise<Awaited<ReturnType<Router[Key]>>> : RpcClient<Router[Key]>;
};
interface HttpRpcClientOptions {
    /**
     * Sends calls made before the next macrotask as one request,
     * except calls to these paths or with a signal.
     */
    batch?: {
        exclude?: string[];
    };
    url: string;
}
/** Makes a client whose nested calls, such as `client.a.b(input)`, send `{ input, path: "a.b" }`. */
declare const createRpcClient: <Router>(send: RpcSend) => RpcClient<Router>;
/** Makes a client that sends each call as `POST <url>/<path>`, with the input as the JSON body. */
declare const createHttpRpcClient: <Router>({ batch, url }: HttpRpcClientOptions) => RpcClient<Router>;

export { type HttpRpcClientOptions, type RpcCallOptions, type RpcClient, RpcProcedure, RpcRequest, type RpcSend, createHttpRpcClient, createRpcClient };
