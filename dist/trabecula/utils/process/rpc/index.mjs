import {
  callRpc
} from "../../../chunk-G3JIWYOV.mjs";
import {
  __async,
  __forAwait
} from "../../../chunk-MYORJUCY.mjs";

// trabecula/utils/process/rpc.ts
import { createServer } from "http";
var readJsonBody = (req) => __async(null, null, function* () {
  const chunks = [];
  try {
    for (var iter = __forAwait(req), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
      const chunk = temp.value;
      chunks.push(chunk);
    }
  } catch (temp) {
    error = [temp];
  } finally {
    try {
      more && (temp = iter.return) && (yield temp.call(iter));
    } finally {
      if (error)
        throw error[0];
    }
  }
  const text = Buffer.concat(chunks).toString("utf-8");
  return text ? JSON.parse(text) : void 0;
});
var sendJson = (res, status, body) => {
  const json = JSON.stringify(body);
  res.writeHead(status, { "Content-Type": "application/json" }).end(json);
};
var createRpcServer = (router) => createServer((req, res) => __async(null, null, function* () {
  try {
    if (req.method !== "POST")
      return sendJson(res, 405, { error: { message: `RPC requests use POST, not ${req.method}` } });
    const body = yield readJsonBody(req);
    const url = new URL(req.url, "http://127.0.0.1");
    if (url.searchParams.has("batch")) {
      const responses = yield Promise.all(
        body.map((request) => callRpc(router, request))
      );
      sendJson(res, 200, responses);
    } else {
      const path = decodeURIComponent(url.pathname.slice(1));
      const response = yield callRpc(router, { input: body, path });
      sendJson(res, "error" in response ? 500 : 200, response);
    }
  } catch (error) {
    if (!res.headersSent) sendJson(res, 500, { error: { message: error.message } });
  }
}));
export {
  createRpcServer
};
//# sourceMappingURL=index.mjs.map