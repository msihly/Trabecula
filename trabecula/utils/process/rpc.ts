import { createServer, IncomingMessage, ServerResponse } from "http";
import { callRpc, RpcRequest, RpcRouter } from "trabecula/utils/rpc";

const readJsonBody = async (req: IncomingMessage) => {
  const chunks: Buffer[] = [];

  for await (const chunk of req) chunks.push(chunk);

  const text = Buffer.concat(chunks).toString("utf-8");
  return text ? JSON.parse(text) : undefined;
};

const sendJson = (res: ServerResponse, status: number, body: unknown) => {
  // Serialized first, so a result JSON can't represent still gets an error response.
  const json = JSON.stringify(body);

  res.writeHead(status, { "Content-Type": "application/json" }).end(json);
};

/**
 * Serves a router's procedures as `POST /<path>`, with the input as the JSON body.
 * `POST /?batch=1` takes an array of requests and answers once all of them settle, in order.
 */
export const createRpcServer = (router: RpcRouter) =>
  createServer(async (req, res) => {
    try {
      if (req.method !== "POST")
        return sendJson(res, 405, { error: { message: `RPC requests use POST, not ${req.method}` } });

      const body = await readJsonBody(req);
      const url = new URL(req.url, "http://127.0.0.1");

      if (url.searchParams.has("batch")) {
        const responses = await Promise.all(
          body.map((request: RpcRequest) => callRpc(router, request)),
        );

        sendJson(res, 200, responses);
      } else {
        const path = decodeURIComponent(url.pathname.slice(1));
        const response = await callRpc(router, { input: body, path });

        sendJson(res, "error" in response ? 500 : 200, response);
      }
    } catch (error) {
      // Unreadable requests and results JSON can't represent, such as circular objects, fail here.
      if (!res.headersSent) sendJson(res, 500, { error: { message: error.message } });
    }
  });
