var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// trabecula/utils/rpc/index.ts
var rpc_exports = {};
__export(rpc_exports, {
  callRpc: () => callRpc,
  createHttpRpcClient: () => createHttpRpcClient,
  createRpcClient: () => createRpcClient
});
module.exports = __toCommonJS(rpc_exports);

// trabecula/utils/rpc/rpc-client.ts
var postJson = (url, body, signal) => __async(null, null, function* () {
  var _a;
  const res = yield fetch(url, {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
    signal
  });
  if (!((_a = res.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json")))
    throw new Error(`RPC request to ${url} failed with HTTP ${res.status}`);
  return yield res.json();
});
var readRpcResponse = (response) => {
  if ("error" in response) throw new Error(response.error.message);
  return response.data;
};
var createRpcClient = (send) => {
  const makeProxy = (path) => new Proxy(() => {
  }, {
    apply: (_target, _thisArg, [input, options]) => send({ input, path: path.join(".") }, options),
    // Awaiting a client or one of its routers reads `then`, which is never a procedure.
    get: (_target, key) => typeof key === "string" && key !== "then" ? makeProxy([...path, key]) : void 0
  });
  return makeProxy([]);
};
var createHttpRpcClient = ({ batch, url }) => {
  let queue = [];
  const sendQueue = () => __async(null, null, function* () {
    const calls = queue;
    queue = [];
    try {
      const responses = yield postJson(
        `${url}/?batch=1`,
        calls.map((call) => call.request)
      );
      if ("error" in responses) throw new Error(responses.error.message);
      calls.forEach((call, index) => call.resolve(responses[index]));
    } catch (error) {
      calls.forEach((call) => call.reject(error));
    }
  });
  const queueCall = (request) => new Promise((resolve, reject) => {
    if (!queue.length) setTimeout(sendQueue);
    queue.push({ reject, request, resolve });
  });
  const send = (request, options) => __async(null, null, function* () {
    var _a;
    const isBatched = batch && !(options == null ? void 0 : options.signal) && !((_a = batch.exclude) == null ? void 0 : _a.includes(request.path));
    const response = isBatched ? yield queueCall(request) : yield postJson(`${url}/${request.path}`, request.input, options == null ? void 0 : options.signal);
    return readRpcResponse(response);
  });
  return createRpcClient(send);
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  callRpc,
  createHttpRpcClient,
  createRpcClient
});
//# sourceMappingURL=index.js.map