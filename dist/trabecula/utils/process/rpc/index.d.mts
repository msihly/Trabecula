import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import { R as RpcRouter } from '../../../rpc-router-uY-Omtyv.mjs';

/**
 * Serves a router's procedures as `POST /<path>`, with the input as the JSON body.
 * `POST /?batch=1` takes an array of requests and answers once all of them settle, in order.
 */
declare const createRpcServer: (router: RpcRouter) => http.Server<typeof IncomingMessage, typeof ServerResponse>;

export { createRpcServer };
