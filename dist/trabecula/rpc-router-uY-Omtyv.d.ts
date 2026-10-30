/** Called with its input, plus the transport's context when it has one, such as the calling tab. */
type RpcProcedure = (input?: any, context?: any) => unknown;
interface RpcRouter {
    [key: string]: RpcProcedure | RpcRouter;
}
interface RpcRequest {
    input?: unknown;
    path: string;
}
type RpcResponse = {
    data: unknown;
} | {
    error: {
        message: string;
    };
};
/** Runs the procedure at the request's path, answering with its result or its error's message. */
declare const callRpc: (router: RpcRouter, { input, path }: RpcRequest, context?: unknown) => Promise<RpcResponse>;

export { type RpcRouter as R, type RpcProcedure as a, type RpcRequest as b, type RpcResponse as c, callRpc as d };
