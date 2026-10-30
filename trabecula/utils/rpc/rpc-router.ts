/** Called with its input, plus the transport's context when it has one, such as the calling tab. */
export type RpcProcedure = (input?: any, context?: any) => unknown;

export interface RpcRouter {
  [key: string]: RpcProcedure | RpcRouter;
}

export interface RpcRequest {
  input?: unknown;
  path: string;
}

export type RpcResponse = { data: unknown } | { error: { message: string } };

/** Finds the procedure at a dotted path, never resolving inherited properties such as `constructor`. */
const getRpcProcedure = (router: RpcRouter, path: string) => {
  let node: RpcProcedure | RpcRouter = router;

  for (const key of path.split(".")) {
    if (typeof node !== "object" || !Object.hasOwn(node, key)) return undefined;
    node = node[key];
  }

  return typeof node === "function" ? node : undefined;
};

/** Runs the procedure at the request's path, answering with its result or its error's message. */
export const callRpc = async (
  router: RpcRouter,
  { input, path }: RpcRequest,
  context?: unknown,
): Promise<RpcResponse> => {
  const procedure = getRpcProcedure(router, path);
  if (!procedure) return { error: { message: `No RPC procedure at "${path}"` } };

  try {
    return { data: await procedure(input, context) };
  } catch (error) {
    return { error: { message: error?.message ?? String(error) } };
  }
};
