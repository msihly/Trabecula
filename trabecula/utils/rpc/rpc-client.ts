import type { RpcProcedure, RpcRequest, RpcResponse } from "trabecula/utils/rpc/rpc-router";

export interface RpcCallOptions {
  signal?: AbortSignal;
}

/** Sends one request through a transport, resolving with the procedure's result. */
export type RpcSend = (request: RpcRequest, options?: RpcCallOptions) => Promise<unknown>;

/** The input is required unless the procedure takes none or takes `unknown`. */
type RpcArgs<Params extends unknown[]> = [] extends Params
  ? [input?: Params[0], options?: RpcCallOptions]
  : unknown extends Params[0]
    ? [input?: Params[0], options?: RpcCallOptions]
    : [input: Params[0], options?: RpcCallOptions];

/**
 * Mirrors a router as async functions, leaving out each procedure's transport context.
 * An `any` entry, such as one from a module that doesn't resolve, stays callable with any input.
 */
export type RpcClient<Router> = {
  [Key in keyof Router]: 0 extends 1 & Router[Key]
    ? (input?: any, options?: RpcCallOptions) => Promise<any>
    : Router[Key] extends RpcProcedure
      ? (...args: RpcArgs<Parameters<Router[Key]>>) => Promise<Awaited<ReturnType<Router[Key]>>>
      : RpcClient<Router[Key]>;
};

export interface HttpRpcClientOptions {
  /**
   * Sends calls made before the next macrotask as one request,
   * except calls to these paths or with a signal.
   */
  batch?: { exclude?: string[] };
  url: string;
}

interface QueuedRpcCall {
  reject: (error: Error) => void;
  request: RpcRequest;
  resolve: (response: RpcResponse) => void;
}

const postJson = async (url: string, body: unknown, signal?: AbortSignal) => {
  const res = await fetch(url, {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
    signal,
  });

  if (!res.headers.get("Content-Type")?.startsWith("application/json"))
    throw new Error(`RPC request to ${url} failed with HTTP ${res.status}`);

  return await res.json();
};

const readRpcResponse = (response: RpcResponse) => {
  if ("error" in response) throw new Error(response.error.message);
  return response.data;
};

/** Makes a client whose nested calls, such as `client.a.b(input)`, send `{ input, path: "a.b" }`. */
export const createRpcClient = <Router>(send: RpcSend) => {
  const makeProxy = (path: string[]): unknown =>
    new Proxy(() => {}, {
      apply: (_target, _thisArg, [input, options]: [unknown, RpcCallOptions?]) =>
        send({ input, path: path.join(".") }, options),
      // Awaiting a client or one of its routers reads `then`, which is never a procedure.
      get: (_target, key) =>
        typeof key === "string" && key !== "then" ? makeProxy([...path, key]) : undefined,
    });

  return makeProxy([]) as RpcClient<Router>;
};

/** Makes a client that sends each call as `POST <url>/<path>`, with the input as the JSON body. */
export const createHttpRpcClient = <Router>({ batch, url }: HttpRpcClientOptions) => {
  let queue: QueuedRpcCall[] = [];

  const sendQueue = async () => {
    const calls = queue;
    queue = [];

    try {
      const responses: RpcResponse[] | { error: { message: string } } = await postJson(
        `${url}/?batch=1`,
        calls.map((call) => call.request),
      );

      // A batch fails as a whole, such as on a result JSON can't represent, with one error.
      if ("error" in responses) throw new Error(responses.error.message);

      calls.forEach((call, index) => call.resolve(responses[index]));
    } catch (error) {
      calls.forEach((call) => call.reject(error));
    }
  };

  const queueCall = (request: RpcRequest) =>
    new Promise<RpcResponse>((resolve, reject) => {
      if (!queue.length) setTimeout(sendQueue);

      queue.push({ reject, request, resolve });
    });

  const send: RpcSend = async (request, options) => {
    const isBatched = batch && !options?.signal && !batch.exclude?.includes(request.path);
    const response = isBatched
      ? await queueCall(request)
      : await postJson(`${url}/${request.path}`, request.input, options?.signal);

    return readRpcResponse(response);
  };

  return createRpcClient<Router>(send);
};
