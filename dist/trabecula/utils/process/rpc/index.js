var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// trabecula/utils/process/rpc.ts
var rpc_exports = {};
__export(rpc_exports, {
  createRpcServer: () => createRpcServer
});
module.exports = __toCommonJS(rpc_exports);
var import_http = require("http");

// trabecula/utils/rpc/rpc-router.ts
var getRpcProcedure = (router, path) => {
  let node = router;
  for (const key of path.split(".")) {
    if (typeof node !== "object" || !Object.hasOwn(node, key)) return void 0;
    node = node[key];
  }
  return typeof node === "function" ? node : void 0;
};
var callRpc = (_0, _1, _2) => __async(null, [_0, _1, _2], function* (router, { input, path }, context) {
  var _a;
  const procedure = getRpcProcedure(router, path);
  if (!procedure) return { error: { message: `No RPC procedure at "${path}"` } };
  try {
    return { data: yield procedure(input, context) };
  } catch (error) {
    return { error: { message: (_a = error == null ? void 0 : error.message) != null ? _a : String(error) } };
  }
});

// trabecula/utils/process/rpc.ts
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
var createRpcServer = (router) => (0, import_http.createServer)((req, res) => __async(null, null, function* () {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRpcServer
});
//# sourceMappingURL=index.js.map