var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop2 in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop2))
      __defNormalProp(a2, prop2, b2[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop2))
        __defNormalProp(a2, prop2, b2[prop2]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop2 in source)
    if (__hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
      target[prop2] = source[prop2];
  if (source != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source, prop2))
        target[prop2] = source[prop2];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k2) => it[k2] = (x2) => obj[k2](x2);
  } else {
    obj = obj.call(value);
    method = (k2) => it[k2] = (v2) => {
      if (isAwait) {
        isAwait = false;
        if (k2 === "throw") throw v2;
        return v2;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve) => {
          var x2 = obj[k2](v2);
          if (!(x2 instanceof Object)) __typeError("Object expected");
          resolve(x2);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x2) => {
    throw x2;
  }, "return" in obj && method("return"), it;
};

// node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
    "use strict";
    var b2 = "function" === typeof Symbol && Symbol.for;
    var c = b2 ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
    var d2 = b2 ? /* @__PURE__ */ Symbol.for("react.portal") : 60106;
    var e2 = b2 ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107;
    var f2 = b2 ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108;
    var g2 = b2 ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114;
    var h2 = b2 ? /* @__PURE__ */ Symbol.for("react.provider") : 60109;
    var k2 = b2 ? /* @__PURE__ */ Symbol.for("react.context") : 60110;
    var l2 = b2 ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111;
    var m2 = b2 ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111;
    var n2 = b2 ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112;
    var p2 = b2 ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113;
    var q2 = b2 ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120;
    var r4 = b2 ? /* @__PURE__ */ Symbol.for("react.memo") : 60115;
    var t2 = b2 ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116;
    var v2 = b2 ? /* @__PURE__ */ Symbol.for("react.block") : 60121;
    var w2 = b2 ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117;
    var x2 = b2 ? /* @__PURE__ */ Symbol.for("react.responder") : 60118;
    var y2 = b2 ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function z2(a2) {
      if ("object" === typeof a2 && null !== a2) {
        var u2 = a2.$$typeof;
        switch (u2) {
          case c:
            switch (a2 = a2.type, a2) {
              case l2:
              case m2:
              case e2:
              case g2:
              case f2:
              case p2:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case k2:
                  case n2:
                  case t2:
                  case r4:
                  case h2:
                    return a2;
                  default:
                    return u2;
                }
            }
          case d2:
            return u2;
        }
      }
    }
    function A2(a2) {
      return z2(a2) === m2;
    }
    exports2.AsyncMode = l2;
    exports2.ConcurrentMode = m2;
    exports2.ContextConsumer = k2;
    exports2.ContextProvider = h2;
    exports2.Element = c;
    exports2.ForwardRef = n2;
    exports2.Fragment = e2;
    exports2.Lazy = t2;
    exports2.Memo = r4;
    exports2.Portal = d2;
    exports2.Profiler = g2;
    exports2.StrictMode = f2;
    exports2.Suspense = p2;
    exports2.isAsyncMode = function(a2) {
      return A2(a2) || z2(a2) === l2;
    };
    exports2.isConcurrentMode = A2;
    exports2.isContextConsumer = function(a2) {
      return z2(a2) === k2;
    };
    exports2.isContextProvider = function(a2) {
      return z2(a2) === h2;
    };
    exports2.isElement = function(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === c;
    };
    exports2.isForwardRef = function(a2) {
      return z2(a2) === n2;
    };
    exports2.isFragment = function(a2) {
      return z2(a2) === e2;
    };
    exports2.isLazy = function(a2) {
      return z2(a2) === t2;
    };
    exports2.isMemo = function(a2) {
      return z2(a2) === r4;
    };
    exports2.isPortal = function(a2) {
      return z2(a2) === d2;
    };
    exports2.isProfiler = function(a2) {
      return z2(a2) === g2;
    };
    exports2.isStrictMode = function(a2) {
      return z2(a2) === f2;
    };
    exports2.isSuspense = function(a2) {
      return z2(a2) === p2;
    };
    exports2.isValidElementType = function(a2) {
      return "string" === typeof a2 || "function" === typeof a2 || a2 === e2 || a2 === m2 || a2 === g2 || a2 === f2 || a2 === p2 || a2 === q2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t2 || a2.$$typeof === r4 || a2.$$typeof === h2 || a2.$$typeof === k2 || a2.$$typeof === n2 || a2.$$typeof === w2 || a2.$$typeof === x2 || a2.$$typeof === y2 || a2.$$typeof === v2);
    };
    exports2.typeOf = z2;
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports2.AsyncMode = AsyncMode;
        exports2.ConcurrentMode = ConcurrentMode;
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element;
        exports2.ForwardRef = ForwardRef2;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo2;
        exports2.Portal = Portal;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement;
        exports2.isForwardRef = isForwardRef;
        exports2.isFragment = isFragment;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports2, module2) {
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports2, module2) {
    "use strict";
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports2, module2) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "node_modules/prop-types/factoryWithThrowingShims.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module2.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports2, module2) {
    if (process.env.NODE_ENV !== "production") {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@mui/utils/node_modules/react-is/cjs/react-is.production.js
var require_react_is_production = __commonJS({
  "node_modules/@mui/utils/node_modules/react-is/cjs/react-is.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition");
    var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
    function typeOf(object) {
      if ("object" === typeof object && null !== object) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            switch (object = object.type, object) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
              case REACT_VIEW_TRANSITION_TYPE:
                return object;
              default:
                switch (object = object && object.$$typeof, object) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                    return object;
                  case REACT_CONSUMER_TYPE:
                    return object;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    exports2.ContextConsumer = REACT_CONSUMER_TYPE;
    exports2.ContextProvider = REACT_CONTEXT_TYPE;
    exports2.Element = REACT_ELEMENT_TYPE;
    exports2.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.Lazy = REACT_LAZY_TYPE;
    exports2.Memo = REACT_MEMO_TYPE;
    exports2.Portal = REACT_PORTAL_TYPE;
    exports2.Profiler = REACT_PROFILER_TYPE;
    exports2.StrictMode = REACT_STRICT_MODE_TYPE;
    exports2.Suspense = REACT_SUSPENSE_TYPE;
    exports2.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports2.isContextConsumer = function(object) {
      return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports2.isContextProvider = function(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports2.isElement = function(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    exports2.isForwardRef = function(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports2.isFragment = function(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports2.isLazy = function(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports2.isMemo = function(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports2.isPortal = function(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports2.isProfiler = function(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports2.isStrictMode = function(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports2.isSuspense = function(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports2.isSuspenseList = function(object) {
      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports2.isValidElementType = function(type) {
      return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
    };
    exports2.typeOf = typeOf;
  }
});

// node_modules/@mui/utils/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/@mui/utils/node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function typeOf(object) {
        if ("object" === typeof object && null !== object) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              switch (object = object.type, object) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                case REACT_VIEW_TRANSITION_TYPE:
                  return object;
                default:
                  switch (object = object && object.$$typeof, object) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                      return object;
                    case REACT_CONSUMER_TYPE:
                      return object;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
      exports2.ContextConsumer = REACT_CONSUMER_TYPE;
      exports2.ContextProvider = REACT_CONTEXT_TYPE;
      exports2.Element = REACT_ELEMENT_TYPE;
      exports2.ForwardRef = REACT_FORWARD_REF_TYPE;
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.Lazy = REACT_LAZY_TYPE;
      exports2.Memo = REACT_MEMO_TYPE;
      exports2.Portal = REACT_PORTAL_TYPE;
      exports2.Profiler = REACT_PROFILER_TYPE;
      exports2.StrictMode = REACT_STRICT_MODE_TYPE;
      exports2.Suspense = REACT_SUSPENSE_TYPE;
      exports2.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      exports2.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
      };
      exports2.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      };
      exports2.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      exports2.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      };
      exports2.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      };
      exports2.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      };
      exports2.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      };
      exports2.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      };
      exports2.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      };
      exports2.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      };
      exports2.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      };
      exports2.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      };
      exports2.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
      };
      exports2.typeOf = typeOf;
    })();
  }
});

// node_modules/@mui/utils/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/@mui/utils/node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production();
    } else {
      module2.exports = require_react_is_development2();
    }
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/simple-swizzle/node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(exports2, module2) {
    module2.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports2, module2) {
    "use strict";
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module2.exports = function swizzle2(args) {
      var results = [];
      for (var i2 = 0, len = args.length; i2 < len; i2++) {
        var arg = args[i2];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn) {
      return function() {
        return fn(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports2, module2) {
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module2.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      var prefix = string.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i2;
      var hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i2 = 0; i2 < 3; i2++) {
          var i22 = i2 * 2;
          rgb[i2] = parseInt(match.slice(i22, i22 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2] + match[i2], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2 + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(per)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = Math.round(parseFloat(match[i2 + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i2 = 0; i2 < 3; i2++) {
        rgb[i2] = clamp2(rgb[i2], 0, 255);
      }
      rgb[3] = clamp2(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h2 = (parseFloat(match[1]) % 360 + 360) % 360;
        var s2 = clamp2(parseFloat(match[2]), 0, 100);
        var l2 = clamp2(parseFloat(match[3]), 0, 100);
        var a2 = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h2, s2, l2, a2];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h2 = (parseFloat(match[1]) % 360 + 360) % 360;
        var w2 = clamp2(parseFloat(match[2]), 0, 100);
        var b2 = clamp2(parseFloat(match[3]), 0, 100);
        var a2 = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h2, w2, b2, a2];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r4 = Math.round(rgba[0] / 255 * 100);
      var g2 = Math.round(rgba[1] / 255 * 100);
      var b2 = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r4 + "%, " + g2 + "%, " + b2 + "%)" : "rgba(" + r4 + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a2 = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a2 = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a2 + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp2(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r4 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const min = Math.min(r4, g2, b2);
      const max = Math.max(r4, g2, b2);
      const delta = max - min;
      let h2;
      let s2;
      if (max === min) {
        h2 = 0;
      } else if (r4 === max) {
        h2 = (g2 - b2) / delta;
      } else if (g2 === max) {
        h2 = 2 + (b2 - r4) / delta;
      } else if (b2 === max) {
        h2 = 4 + (r4 - g2) / delta;
      }
      h2 = Math.min(h2 * 60, 360);
      if (h2 < 0) {
        h2 += 360;
      }
      const l2 = (min + max) / 2;
      if (max === min) {
        s2 = 0;
      } else if (l2 <= 0.5) {
        s2 = delta / (max + min);
      } else {
        s2 = delta / (2 - max - min);
      }
      return [h2, s2 * 100, l2 * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h2;
      let s2;
      const r4 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const v2 = Math.max(r4, g2, b2);
      const diff = v2 - Math.min(r4, g2, b2);
      const diffc = function(c) {
        return (v2 - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h2 = 0;
        s2 = 0;
      } else {
        s2 = diff / v2;
        rdif = diffc(r4);
        gdif = diffc(g2);
        bdif = diffc(b2);
        if (r4 === v2) {
          h2 = bdif - gdif;
        } else if (g2 === v2) {
          h2 = 1 / 3 + rdif - bdif;
        } else if (b2 === v2) {
          h2 = 2 / 3 + gdif - rdif;
        }
        if (h2 < 0) {
          h2 += 1;
        } else if (h2 > 1) {
          h2 -= 1;
        }
      }
      return [
        h2 * 360,
        s2 * 100,
        v2 * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r4 = rgb[0];
      const g2 = rgb[1];
      let b2 = rgb[2];
      const h2 = convert.rgb.hsl(rgb)[0];
      const w2 = 1 / 255 * Math.min(r4, Math.min(g2, b2));
      b2 = 1 - 1 / 255 * Math.max(r4, Math.max(g2, b2));
      return [h2, w2 * 100, b2 * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r4 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const k2 = Math.min(1 - r4, 1 - g2, 1 - b2);
      const c = (1 - r4 - k2) / (1 - k2) || 0;
      const m2 = (1 - g2 - k2) / (1 - k2) || 0;
      const y2 = (1 - b2 - k2) / (1 - k2) || 0;
      return [c * 100, m2 * 100, y2 * 100, k2 * 100];
    };
    function comparativeDistance(x2, y2) {
      return __pow(x2[0] - y2[0], 2) + __pow(x2[1] - y2[1], 2) + __pow(x2[2] - y2[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r4 = rgb[0] / 255;
      let g2 = rgb[1] / 255;
      let b2 = rgb[2] / 255;
      r4 = r4 > 0.04045 ? __pow((r4 + 0.055) / 1.055, 2.4) : r4 / 12.92;
      g2 = g2 > 0.04045 ? __pow((g2 + 0.055) / 1.055, 2.4) : g2 / 12.92;
      b2 = b2 > 0.04045 ? __pow((b2 + 0.055) / 1.055, 2.4) : b2 / 12.92;
      const x2 = r4 * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
      const y2 = r4 * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
      const z2 = r4 * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
      return [x2 * 100, y2 * 100, z2 * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x2 = xyz[0];
      let y2 = xyz[1];
      let z2 = xyz[2];
      x2 /= 95.047;
      y2 /= 100;
      z2 /= 108.883;
      x2 = x2 > 8856e-6 ? __pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
      y2 = y2 > 8856e-6 ? __pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
      z2 = z2 > 8856e-6 ? __pow(z2, 1 / 3) : 7.787 * z2 + 16 / 116;
      const l2 = 116 * y2 - 16;
      const a2 = 500 * (x2 - y2);
      const b2 = 200 * (y2 - z2);
      return [l2, a2, b2];
    };
    convert.hsl.rgb = function(hsl) {
      const h2 = hsl[0] / 360;
      const s2 = hsl[1] / 100;
      const l2 = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s2 === 0) {
        val = l2 * 255;
        return [val, val, val];
      }
      if (l2 < 0.5) {
        t2 = l2 * (1 + s2);
      } else {
        t2 = l2 + s2 - l2 * s2;
      }
      const t1 = 2 * l2 - t2;
      const rgb = [0, 0, 0];
      for (let i2 = 0; i2 < 3; i2++) {
        t3 = h2 + 1 / 3 * -(i2 - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i2] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h2 = hsl[0];
      let s2 = hsl[1] / 100;
      let l2 = hsl[2] / 100;
      let smin = s2;
      const lmin = Math.max(l2, 0.01);
      l2 *= 2;
      s2 *= l2 <= 1 ? l2 : 2 - l2;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v2 = (l2 + s2) / 2;
      const sv = l2 === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l2 + s2);
      return [h2, sv * 100, v2 * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h2 = hsv[0] / 60;
      const s2 = hsv[1] / 100;
      let v2 = hsv[2] / 100;
      const hi = Math.floor(h2) % 6;
      const f2 = h2 - Math.floor(h2);
      const p2 = 255 * v2 * (1 - s2);
      const q2 = 255 * v2 * (1 - s2 * f2);
      const t2 = 255 * v2 * (1 - s2 * (1 - f2));
      v2 *= 255;
      switch (hi) {
        case 0:
          return [v2, t2, p2];
        case 1:
          return [q2, v2, p2];
        case 2:
          return [p2, v2, t2];
        case 3:
          return [p2, q2, v2];
        case 4:
          return [t2, p2, v2];
        case 5:
          return [v2, p2, q2];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h2 = hsv[0];
      const s2 = hsv[1] / 100;
      const v2 = hsv[2] / 100;
      const vmin = Math.max(v2, 0.01);
      let sl;
      let l2;
      l2 = (2 - s2) * v2;
      const lmin = (2 - s2) * vmin;
      sl = s2 * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l2 /= 2;
      return [h2, sl * 100, l2 * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h2 = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f2;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i2 = Math.floor(6 * h2);
      const v2 = 1 - bl;
      f2 = 6 * h2 - i2;
      if ((i2 & 1) !== 0) {
        f2 = 1 - f2;
      }
      const n2 = wh + f2 * (v2 - wh);
      let r4;
      let g2;
      let b2;
      switch (i2) {
        default:
        case 6:
        case 0:
          r4 = v2;
          g2 = n2;
          b2 = wh;
          break;
        case 1:
          r4 = n2;
          g2 = v2;
          b2 = wh;
          break;
        case 2:
          r4 = wh;
          g2 = v2;
          b2 = n2;
          break;
        case 3:
          r4 = wh;
          g2 = n2;
          b2 = v2;
          break;
        case 4:
          r4 = n2;
          g2 = wh;
          b2 = v2;
          break;
        case 5:
          r4 = v2;
          g2 = wh;
          b2 = n2;
          break;
      }
      return [r4 * 255, g2 * 255, b2 * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m2 = cmyk[1] / 100;
      const y2 = cmyk[2] / 100;
      const k2 = cmyk[3] / 100;
      const r4 = 1 - Math.min(1, c * (1 - k2) + k2);
      const g2 = 1 - Math.min(1, m2 * (1 - k2) + k2);
      const b2 = 1 - Math.min(1, y2 * (1 - k2) + k2);
      return [r4 * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x2 = xyz[0] / 100;
      const y2 = xyz[1] / 100;
      const z2 = xyz[2] / 100;
      let r4;
      let g2;
      let b2;
      r4 = x2 * 3.2406 + y2 * -1.5372 + z2 * -0.4986;
      g2 = x2 * -0.9689 + y2 * 1.8758 + z2 * 0.0415;
      b2 = x2 * 0.0557 + y2 * -0.204 + z2 * 1.057;
      r4 = r4 > 31308e-7 ? 1.055 * __pow(r4, 1 / 2.4) - 0.055 : r4 * 12.92;
      g2 = g2 > 31308e-7 ? 1.055 * __pow(g2, 1 / 2.4) - 0.055 : g2 * 12.92;
      b2 = b2 > 31308e-7 ? 1.055 * __pow(b2, 1 / 2.4) - 0.055 : b2 * 12.92;
      r4 = Math.min(Math.max(0, r4), 1);
      g2 = Math.min(Math.max(0, g2), 1);
      b2 = Math.min(Math.max(0, b2), 1);
      return [r4 * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x2 = xyz[0];
      let y2 = xyz[1];
      let z2 = xyz[2];
      x2 /= 95.047;
      y2 /= 100;
      z2 /= 108.883;
      x2 = x2 > 8856e-6 ? __pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
      y2 = y2 > 8856e-6 ? __pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
      z2 = z2 > 8856e-6 ? __pow(z2, 1 / 3) : 7.787 * z2 + 16 / 116;
      const l2 = 116 * y2 - 16;
      const a2 = 500 * (x2 - y2);
      const b2 = 200 * (y2 - z2);
      return [l2, a2, b2];
    };
    convert.lab.xyz = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b2 = lab[2];
      let x2;
      let y2;
      let z2;
      y2 = (l2 + 16) / 116;
      x2 = a2 / 500 + y2;
      z2 = y2 - b2 / 200;
      const y22 = __pow(y2, 3);
      const x22 = __pow(x2, 3);
      const z22 = __pow(z2, 3);
      y2 = y22 > 8856e-6 ? y22 : (y2 - 16 / 116) / 7.787;
      x2 = x22 > 8856e-6 ? x22 : (x2 - 16 / 116) / 7.787;
      z2 = z22 > 8856e-6 ? z22 : (z2 - 16 / 116) / 7.787;
      x2 *= 95.047;
      y2 *= 100;
      z2 *= 108.883;
      return [x2, y2, z2];
    };
    convert.lab.lch = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b2 = lab[2];
      let h2;
      const hr = Math.atan2(b2, a2);
      h2 = hr * 360 / 2 / Math.PI;
      if (h2 < 0) {
        h2 += 360;
      }
      const c = Math.sqrt(a2 * a2 + b2 * b2);
      return [l2, c, h2];
    };
    convert.lch.lab = function(lch) {
      const l2 = lch[0];
      const c = lch[1];
      const h2 = lch[2];
      const hr = h2 / 360 * 2 * Math.PI;
      const a2 = c * Math.cos(hr);
      const b2 = c * Math.sin(hr);
      return [l2, a2, b2];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r4, g2, b2] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r4 / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r4 = args[0];
      const g2 = args[1];
      const b2 = args[2];
      if (r4 === g2 && g2 === b2) {
        if (r4 < 8) {
          return 16;
        }
        if (r4 > 248) {
          return 231;
        }
        return Math.round((r4 - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r4 / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color2 = args % 10;
      if (color2 === 0 || color2 === 7) {
        if (args > 50) {
          color2 += 3.5;
        }
        color2 = color2 / 10.5 * 255;
        return [color2, color2, color2];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r4 = (color2 & 1) * mult * 255;
      const g2 = (color2 >> 1 & 1) * mult * 255;
      const b2 = (color2 >> 2 & 1) * mult * 255;
      return [r4, g2, b2];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r4 = Math.floor(args / 36) / 5 * 255;
      const g2 = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b2 = rem % 6 / 5 * 255;
      return [r4, g2, b2];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r4 = integer >> 16 & 255;
      const g2 = integer >> 8 & 255;
      const b2 = integer & 255;
      return [r4, g2, b2];
    };
    convert.rgb.hcg = function(rgb) {
      const r4 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const max = Math.max(Math.max(r4, g2), b2);
      const min = Math.min(Math.min(r4, g2), b2);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r4) {
        hue = (g2 - b2) / chroma % 6;
      } else if (max === g2) {
        hue = 2 + (b2 - r4) / chroma;
      } else {
        hue = 4 + (r4 - g2) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s2 = hsl[1] / 100;
      const l2 = hsl[2] / 100;
      const c = l2 < 0.5 ? 2 * s2 * l2 : 2 * s2 * (1 - l2);
      let f2 = 0;
      if (c < 1) {
        f2 = (l2 - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f2 * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s2 = hsv[1] / 100;
      const v2 = hsv[2] / 100;
      const c = s2 * v2;
      let f2 = 0;
      if (c < 1) {
        f2 = (v2 - c) / (1 - c);
      }
      return [hsv[0], c * 100, f2 * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h2 = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      if (c === 0) {
        return [g2 * 255, g2 * 255, g2 * 255];
      }
      const pure = [0, 0, 0];
      const hi = h2 % 1 * 6;
      const v2 = hi % 1;
      const w2 = 1 - v2;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v2;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w2;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v2;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w2;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v2;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w2;
      }
      mg = (1 - c) * g2;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v2 = c + g2 * (1 - c);
      let f2 = 0;
      if (v2 > 0) {
        f2 = c / v2;
      }
      return [hcg[0], f2 * 100, v2 * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const l2 = g2 * (1 - c) + 0.5 * c;
      let s2 = 0;
      if (l2 > 0 && l2 < 0.5) {
        s2 = c / (2 * l2);
      } else if (l2 >= 0.5 && l2 < 1) {
        s2 = c / (2 * (1 - l2));
      }
      return [hcg[0], s2 * 100, l2 * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v2 = c + g2 * (1 - c);
      return [hcg[0], (v2 - c) * 100, (1 - v2) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w2 = hwb[1] / 100;
      const b2 = hwb[2] / 100;
      const v2 = 1 - b2;
      const c = v2 - w2;
      let g2 = 0;
      if (c < 1) {
        g2 = (v2 - c) / (1 - c);
      }
      return [hwb[0], c * 100, g2 * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i2 = 0; i2 < len; i2++) {
        graph[models[i2]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i2 = 0; i2 < len; i2++) {
          const adjacent = adjacents[i2];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i2 = 0; i2 < len; i2++) {
        const toModel = models[i2];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i2 = 0; i2 < len; i2++) {
            result[i2] = Math.round(result[i2]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/color/index.js
var require_color = __commonJS({
  "node_modules/color/index.js"(exports2, module2) {
    var colorString = require_color_string();
    var convert = require_color_convert();
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(convert)) {
      hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color2(object, model) {
      if (!(this instanceof Color2)) {
        return new Color2(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      let i2;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color2) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color2 = [];
        for (i2 = 0; i2 < labels.length; i2++) {
          color2.push(object[labels[i2]]);
        }
        this.color = zeroArray(color2);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i2 = 0; i2 < channels; i2++) {
          const limit = limiters[this.model][i2];
          if (limit) {
            this.color[i2] = limit(this.color[i2]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color2.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self2 = this.model in colorString.to ? this : this.rgb();
        self2 = self2.round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
        return colorString.to[self2.model](args);
      },
      percentString(places) {
        const self2 = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
        return colorString.to.rgb.percent(args);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for (let i2 = 0; i2 < channels; i2++) {
          result[labels[i2]] = this.color[i2];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color2([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color2([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color2(value);
        }
        return convert[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color2(value);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color2(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i2, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i2] = chan <= 0.04045 ? chan / 12.92 : __pow((chan + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i2 = 0; i2 < 3; i2++) {
          rgb.color[i2] = 255 - rgb.color[i2];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color2.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p2 = weight === void 0 ? 0.5 : weight;
        const w2 = 2 * p2 - 1;
        const a2 = color1.alpha() - color2.alpha();
        const w1 = ((w2 * a2 === -1 ? w2 : (w2 + a2) / (1 + w2 * a2)) + 1) / 2;
        const w22 = 1 - w1;
        return Color2.rgb(
          w1 * color1.red() + w22 * color2.red(),
          w1 * color1.green() + w22 * color2.green(),
          w1 * color1.blue() + w22 * color2.blue(),
          color1.alpha() * p2 + color2.alpha() * (1 - p2)
        );
      }
    };
    for (const model of Object.keys(convert)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = convert[model];
      Color2.prototype[model] = function(...args) {
        if (this.model === model) {
          return new Color2(this);
        }
        if (args.length > 0) {
          return new Color2(args, model);
        }
        return new Color2([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color2[model] = function(...args) {
        let color2 = args[0];
        if (typeof color2 === "number") {
          color2 = zeroArray(args, channels);
        }
        return new Color2(color2, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m2 of model) {
        (limiters[m2] || (limiters[m2] = []))[channel] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel] = value;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max) {
      return function(v2) {
        return Math.max(0, Math.min(max, v2));
      };
    }
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    function zeroArray(array, length) {
      for (let i2 = 0; i2 < length; i2++) {
        if (typeof array[i2] !== "number") {
          array[i2] = 0;
        }
      }
      return array;
    }
    module2.exports = Color2;
  }
});

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    !(function(t2, e2) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs = e2();
    })(exports2, (function() {
      "use strict";
      var t2 = 1e3, e2 = 6e4, n2 = 36e5, r4 = "millisecond", i2 = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", c = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
        return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
      } }, m2 = function(t3, e3, n3) {
        var r5 = String(t3);
        return !r5 || r5.length >= e3 ? t3 : "" + Array(e3 + 1 - r5.length).join(n3) + t3;
      }, v2 = { s: m2, z: function(t3) {
        var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r5 = Math.floor(n3 / 60), i3 = n3 % 60;
        return (e3 <= 0 ? "+" : "-") + m2(r5, 2, "0") + ":" + m2(i3, 2, "0");
      }, m: function t3(e3, n3) {
        if (e3.date() < n3.date()) return -t3(n3, e3);
        var r5 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r5, c), s3 = n3 - i3 < 0, u3 = e3.clone().add(r5 + (s3 ? -1 : 1), c);
        return +(-(r5 + (n3 - i3) / (s3 ? i3 - u3 : u3 - i3)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c, y: h2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i2, ms: r4, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g2 = "en", D2 = {};
      D2[g2] = M2;
      var p2 = "$isDayjsObject", S2 = function(t3) {
        return t3 instanceof _2 || !(!t3 || !t3[p2]);
      }, w2 = function t3(e3, n3, r5) {
        var i3;
        if (!e3) return g2;
        if ("string" == typeof e3) {
          var s3 = e3.toLowerCase();
          D2[s3] && (i3 = s3), n3 && (D2[s3] = n3, i3 = s3);
          var u3 = e3.split("-");
          if (!i3 && u3.length > 1) return t3(u3[0]);
        } else {
          var a3 = e3.name;
          D2[a3] = e3, i3 = a3;
        }
        return !r5 && i3 && (g2 = i3), i3 || !r5 && g2;
      }, O2 = function(t3, e3) {
        if (S2(t3)) return t3.clone();
        var n3 = "object" == typeof e3 ? e3 : {};
        return n3.date = t3, n3.args = arguments, new _2(n3);
      }, b2 = v2;
      b2.l = w2, b2.i = S2, b2.w = function(t3, e3) {
        return O2(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _2 = (function() {
        function M3(t3) {
          this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
        }
        var m3 = M3.prototype;
        return m3.parse = function(t3) {
          this.$d = (function(t4) {
            var e3 = t4.date, n3 = t4.utc;
            if (null === e3) return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e3)) return /* @__PURE__ */ new Date();
            if (e3 instanceof Date) return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r5 = e3.match($2);
              if (r5) {
                var i3 = r5[2] - 1 || 0, s3 = (r5[7] || "0").substring(0, 3);
                return n3 ? new Date(Date.UTC(r5[1], i3, r5[3] || 1, r5[4] || 0, r5[5] || 0, r5[6] || 0, s3)) : new Date(r5[1], i3, r5[3] || 1, r5[4] || 0, r5[5] || 0, r5[6] || 0, s3);
              }
            }
            return new Date(e3);
          })(t3), this.init();
        }, m3.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l2);
        }, m3.isSame = function(t3, e3) {
          var n3 = O2(t3);
          return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
        }, m3.isAfter = function(t3, e3) {
          return O2(t3) < this.startOf(e3);
        }, m3.isBefore = function(t3, e3) {
          return this.endOf(e3) < O2(t3);
        }, m3.$g = function(t3, e3, n3) {
          return b2.u(t3) ? this[e3] : this.set(n3, t3);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t3, e3) {
          var n3 = this, r5 = !!b2.u(e3) || e3, f3 = b2.p(t3), l3 = function(t4, e4) {
            var i3 = b2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
            return r5 ? i3 : i3.endOf(a2);
          }, $3 = function(t4, e4) {
            return b2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r5 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
          }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h2:
              return r5 ? l3(1, 0) : l3(31, 11);
            case c:
              return r5 ? l3(1, M4) : l3(0, M4 + 1);
            case o2:
              var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
              return l3(r5 ? m4 - D3 : m4 + (6 - D3), M4);
            case a2:
            case d2:
              return $3(v3 + "Hours", 0);
            case u2:
              return $3(v3 + "Minutes", 1);
            case s2:
              return $3(v3 + "Seconds", 2);
            case i2:
              return $3(v3 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m3.$set = function(t3, e3) {
          var n3, o3 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[d2] = f3 + "Date", n3[c] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r4] = f3 + "Milliseconds", n3)[o3], $3 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
          if (o3 === c || o3 === h2) {
            var y3 = this.clone().set(d2, 1);
            y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
          } else l3 && this.$d[l3]($3);
          return this.init(), this;
        }, m3.set = function(t3, e3) {
          return this.clone().$set(t3, e3);
        }, m3.get = function(t3) {
          return this[b2.p(t3)]();
        }, m3.add = function(r5, f3) {
          var d3, l3 = this;
          r5 = Number(r5);
          var $3 = b2.p(f3), y3 = function(t3) {
            var e3 = O2(l3);
            return b2.w(e3.date(e3.date() + Math.round(t3 * r5)), l3);
          };
          if ($3 === c) return this.set(c, this.$M + r5);
          if ($3 === h2) return this.set(h2, this.$y + r5);
          if ($3 === a2) return y3(1);
          if ($3 === o2) return y3(7);
          var M4 = (d3 = {}, d3[s2] = e2, d3[u2] = n2, d3[i2] = t2, d3)[$3] || 1, m4 = this.$d.getTime() + r5 * M4;
          return b2.w(m4, this);
        }, m3.subtract = function(t3, e3) {
          return this.add(-1 * t3, e3);
        }, m3.format = function(t3) {
          var e3 = this, n3 = this.$locale();
          if (!this.isValid()) return n3.invalidDate || l2;
          var r5 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n3.weekdays, c2 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i4, s4) {
            return t4 && (t4[n4] || t4(e3, r5)) || i4[n4].slice(0, s4);
          }, d3 = function(t4) {
            return b2.s(s3 % 12 || 12, t4, "0");
          }, $3 = f3 || function(t4, e4, n4) {
            var r6 = t4 < 12 ? "AM" : "PM";
            return n4 ? r6.toLowerCase() : r6;
          };
          return r5.replace(y2, (function(t4, r6) {
            return r6 || (function(t5) {
              switch (t5) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b2.s(e3.$y, 4, "0");
                case "M":
                  return a3 + 1;
                case "MM":
                  return b2.s(a3 + 1, 2, "0");
                case "MMM":
                  return h3(n3.monthsShort, a3, c2, 3);
                case "MMMM":
                  return h3(c2, a3);
                case "D":
                  return e3.$D;
                case "DD":
                  return b2.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h3(n3.weekdaysMin, e3.$W, o3, 2);
                case "ddd":
                  return h3(n3.weekdaysShort, e3.$W, o3, 3);
                case "dddd":
                  return o3[e3.$W];
                case "H":
                  return String(s3);
                case "HH":
                  return b2.s(s3, 2, "0");
                case "h":
                  return d3(1);
                case "hh":
                  return d3(2);
                case "a":
                  return $3(s3, u3, true);
                case "A":
                  return $3(s3, u3, false);
                case "m":
                  return String(u3);
                case "mm":
                  return b2.s(u3, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b2.s(e3.$s, 2, "0");
                case "SSS":
                  return b2.s(e3.$ms, 3, "0");
                case "Z":
                  return i3;
              }
              return null;
            })(t4) || i3.replace(":", "");
          }));
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r5, d3, l3) {
          var $3, y3 = this, M4 = b2.p(d3), m4 = O2(r5), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D3 = function() {
            return b2.m(y3, m4);
          };
          switch (M4) {
            case h2:
              $3 = D3() / 12;
              break;
            case c:
              $3 = D3();
              break;
            case f2:
              $3 = D3() / 3;
              break;
            case o2:
              $3 = (g3 - v3) / 6048e5;
              break;
            case a2:
              $3 = (g3 - v3) / 864e5;
              break;
            case u2:
              $3 = g3 / n2;
              break;
            case s2:
              $3 = g3 / e2;
              break;
            case i2:
              $3 = g3 / t2;
              break;
            default:
              $3 = g3;
          }
          return l3 ? $3 : b2.a($3);
        }, m3.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m3.$locale = function() {
          return D2[this.$L];
        }, m3.locale = function(t3, e3) {
          if (!t3) return this.$L;
          var n3 = this.clone(), r5 = w2(t3, e3, true);
          return r5 && (n3.$L = r5), n3;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M3;
      })(), k2 = _2.prototype;
      return O2.prototype = k2, [["$ms", r4], ["$s", i2], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", c], ["$y", h2], ["$D", d2]].forEach((function(t3) {
        k2[t3[1]] = function(e3) {
          return this.$g(e3, t3[0], t3[1]);
        };
      })), O2.extend = function(t3, e3) {
        return t3.$i || (t3(e3, _2, O2), t3.$i = true), O2;
      }, O2.locale = w2, O2.isDayjs = S2, O2.unix = function(t3) {
        return O2(1e3 * t3);
      }, O2.en = D2[g2], O2.Ls = D2, O2.p = {}, O2;
    }));
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports2, module2) {
    !(function(e2, t2) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t2() : "function" == typeof define && define.amd ? define(t2) : (e2 = "undefined" != typeof globalThis ? globalThis : e2 || self).dayjs_plugin_customParseFormat = t2();
    })(exports2, (function() {
      "use strict";
      var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t2 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d/, r4 = /\d\d/, i2 = /\d\d?/, o2 = /\d*[^-_:/,()\s\d]+/, s2 = {}, a2 = function(e3) {
        return (e3 = +e3) + (e3 > 68 ? 1900 : 2e3);
      };
      var f2 = function(e3) {
        return function(t3) {
          this[e3] = +t3;
        };
      }, h2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e3) {
        (this.zone || (this.zone = {})).offset = (function(e4) {
          if (!e4) return 0;
          if ("Z" === e4) return 0;
          var t3 = e4.match(/([+-]|\d\d)/g), n3 = 60 * t3[1] + (+t3[2] || 0);
          return 0 === n3 ? 0 : "+" === t3[0] ? -n3 : n3;
        })(e3);
      }], u2 = function(e3) {
        var t3 = s2[e3];
        return t3 && (t3.indexOf ? t3 : t3.s.concat(t3.f));
      }, d2 = function(e3, t3) {
        var n3, r5 = s2.meridiem;
        if (r5) {
          for (var i3 = 1; i3 <= 24; i3 += 1) if (e3.indexOf(r5(i3, 0, t3)) > -1) {
            n3 = i3 > 12;
            break;
          }
        } else n3 = e3 === (t3 ? "pm" : "PM");
        return n3;
      }, c = { A: [o2, function(e3) {
        this.afternoon = d2(e3, false);
      }], a: [o2, function(e3) {
        this.afternoon = d2(e3, true);
      }], Q: [n2, function(e3) {
        this.month = 3 * (e3 - 1) + 1;
      }], S: [n2, function(e3) {
        this.milliseconds = 100 * +e3;
      }], SS: [r4, function(e3) {
        this.milliseconds = 10 * +e3;
      }], SSS: [/\d{3}/, function(e3) {
        this.milliseconds = +e3;
      }], s: [i2, f2("seconds")], ss: [i2, f2("seconds")], m: [i2, f2("minutes")], mm: [i2, f2("minutes")], H: [i2, f2("hours")], h: [i2, f2("hours")], HH: [i2, f2("hours")], hh: [i2, f2("hours")], D: [i2, f2("day")], DD: [r4, f2("day")], Do: [o2, function(e3) {
        var t3 = s2.ordinal, n3 = e3.match(/\d+/);
        if (this.day = n3[0], t3) for (var r5 = 1; r5 <= 31; r5 += 1) t3(r5).replace(/\[|\]/g, "") === e3 && (this.day = r5);
      }], w: [i2, f2("week")], ww: [r4, f2("week")], M: [i2, f2("month")], MM: [r4, f2("month")], MMM: [o2, function(e3) {
        var t3 = u2("months"), n3 = (u2("monthsShort") || t3.map((function(e4) {
          return e4.slice(0, 3);
        }))).indexOf(e3) + 1;
        if (n3 < 1) throw new Error();
        this.month = n3 % 12 || n3;
      }], MMMM: [o2, function(e3) {
        var t3 = u2("months").indexOf(e3) + 1;
        if (t3 < 1) throw new Error();
        this.month = t3 % 12 || t3;
      }], Y: [/[+-]?\d+/, f2("year")], YY: [r4, function(e3) {
        this.year = a2(e3);
      }], YYYY: [/\d{4}/, f2("year")], Z: h2, ZZ: h2 };
      function l2(n3) {
        var r5, i3;
        r5 = n3, i3 = s2 && s2.formats;
        for (var o3 = (n3 = r5.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t3, n4, r6) {
          var o4 = r6 && r6.toUpperCase();
          return n4 || i3[r6] || e2[r6] || i3[o4].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e3, t4, n5) {
            return t4 || n5.slice(1);
          }));
        }))).match(t2), a3 = o3.length, f3 = 0; f3 < a3; f3 += 1) {
          var h3 = o3[f3], u3 = c[h3], d3 = u3 && u3[0], l3 = u3 && u3[1];
          o3[f3] = l3 ? { regex: d3, parser: l3 } : h3.replace(/^\[|\]$/g, "");
        }
        return function(e3) {
          for (var t3 = {}, n4 = 0, r6 = 0; n4 < a3; n4 += 1) {
            var i4 = o3[n4];
            if ("string" == typeof i4) r6 += i4.length;
            else {
              var s3 = i4.regex, f4 = i4.parser, h4 = e3.slice(r6), u4 = s3.exec(h4)[0];
              f4.call(t3, u4), e3 = e3.replace(u4, "");
            }
          }
          return (function(e4) {
            var t4 = e4.afternoon;
            if (void 0 !== t4) {
              var n5 = e4.hours;
              t4 ? n5 < 12 && (e4.hours += 12) : 12 === n5 && (e4.hours = 0), delete e4.afternoon;
            }
          })(t3), t3;
        };
      }
      return function(e3, t3, n3) {
        n3.p.customParseFormat = true, e3 && e3.parseTwoDigitYear && (a2 = e3.parseTwoDigitYear);
        var r5 = t3.prototype, i3 = r5.parse;
        r5.parse = function(e4) {
          var t4 = e4.date, r6 = e4.utc, o3 = e4.args;
          this.$u = r6;
          var a3 = o3[1];
          if ("string" == typeof a3) {
            var f3 = true === o3[2], h3 = true === o3[3], u3 = f3 || h3, d3 = o3[2];
            h3 && (d3 = o3[2]), s2 = this.$locale(), !f3 && d3 && (s2 = n3.Ls[d3]), this.$d = (function(e5, t5, n4, r7) {
              try {
                if (["x", "X"].indexOf(t5) > -1) return new Date(("X" === t5 ? 1e3 : 1) * e5);
                var i4 = l2(t5)(e5), o4 = i4.year, s3 = i4.month, a4 = i4.day, f4 = i4.hours, h4 = i4.minutes, u4 = i4.seconds, d4 = i4.milliseconds, c3 = i4.zone, m3 = i4.week, M3 = /* @__PURE__ */ new Date(), Y = a4 || (o4 || s3 ? 1 : M3.getDate()), p2 = o4 || M3.getFullYear(), v2 = 0;
                o4 && !s3 || (v2 = s3 > 0 ? s3 - 1 : M3.getMonth());
                var D2, w2 = f4 || 0, g2 = h4 || 0, y2 = u4 || 0, L2 = d4 || 0;
                return c3 ? new Date(Date.UTC(p2, v2, Y, w2, g2, y2, L2 + 60 * c3.offset * 1e3)) : n4 ? new Date(Date.UTC(p2, v2, Y, w2, g2, y2, L2)) : (D2 = new Date(p2, v2, Y, w2, g2, y2, L2), m3 && (D2 = r7(D2).week(m3).toDate()), D2);
              } catch (e6) {
                return /* @__PURE__ */ new Date("");
              }
            })(t4, a3, r6, n3), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u3 && t4 != this.format(a3) && (this.$d = /* @__PURE__ */ new Date("")), s2 = {};
          } else if (a3 instanceof Array) for (var c2 = a3.length, m2 = 1; m2 <= c2; m2 += 1) {
            o3[1] = a3[m2 - 1];
            var M2 = n3.apply(this, o3);
            if (M2.isValid()) {
              this.$d = M2.$d, this.$L = M2.$L, this.init();
              break;
            }
            m2 === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i3.call(this, e4);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/duration.js
var require_duration = __commonJS({
  "node_modules/dayjs/plugin/duration.js"(exports2, module2) {
    !(function(t2, s2) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = s2() : "function" == typeof define && define.amd ? define(s2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs_plugin_duration = s2();
    })(exports2, (function() {
      "use strict";
      var t2, s2, n2 = 1e3, i2 = 6e4, e2 = 36e5, r4 = 864e5, o2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u2 = 31536e6, d2 = 2628e6, a2 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h2 = { years: u2, months: d2, days: r4, hours: e2, minutes: i2, seconds: n2, milliseconds: 1, weeks: 6048e5 }, c = function(t3) {
        return t3 instanceof g2;
      }, f2 = function(t3, s3, n3) {
        return new g2(t3, n3, s3.$l);
      }, m2 = function(t3) {
        return s2.p(t3) + "s";
      }, l2 = function(t3) {
        return t3 < 0;
      }, $2 = function(t3) {
        return l2(t3) ? Math.ceil(t3) : Math.floor(t3);
      }, y2 = function(t3) {
        return Math.abs(t3);
      }, v2 = function(t3, s3) {
        return t3 ? l2(t3) ? { negative: true, format: "" + y2(t3) + s3 } : { negative: false, format: "" + t3 + s3 } : { negative: false, format: "" };
      }, g2 = (function() {
        function l3(t3, s3, n3) {
          var i3 = this;
          if (this.$d = {}, this.$l = n3, void 0 === t3 && (this.$ms = 0, this.parseFromMilliseconds()), s3) return f2(t3 * h2[m2(s3)], this);
          if ("number" == typeof t3) return this.$ms = t3, this.parseFromMilliseconds(), this;
          if ("object" == typeof t3) return Object.keys(t3).forEach((function(s4) {
            i3.$d[m2(s4)] = t3[s4];
          })), this.calMilliseconds(), this;
          if ("string" == typeof t3) {
            var e3 = t3.match(a2);
            if (e3) {
              var r5 = e3.slice(2).map((function(t4) {
                return null != t4 ? Number(t4) : 0;
              }));
              return this.$d.years = r5[0], this.$d.months = r5[1], this.$d.weeks = r5[2], this.$d.days = r5[3], this.$d.hours = r5[4], this.$d.minutes = r5[5], this.$d.seconds = r5[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var y3 = l3.prototype;
        return y3.calMilliseconds = function() {
          var t3 = this;
          this.$ms = Object.keys(this.$d).reduce((function(s3, n3) {
            return s3 + (t3.$d[n3] || 0) * h2[n3];
          }), 0);
        }, y3.parseFromMilliseconds = function() {
          var t3 = this.$ms;
          this.$d.years = $2(t3 / u2), t3 %= u2, this.$d.months = $2(t3 / d2), t3 %= d2, this.$d.days = $2(t3 / r4), t3 %= r4, this.$d.hours = $2(t3 / e2), t3 %= e2, this.$d.minutes = $2(t3 / i2), t3 %= i2, this.$d.seconds = $2(t3 / n2), t3 %= n2, this.$d.milliseconds = t3;
        }, y3.toISOString = function() {
          var t3 = v2(this.$d.years, "Y"), s3 = v2(this.$d.months, "M"), n3 = +this.$d.days || 0;
          this.$d.weeks && (n3 += 7 * this.$d.weeks);
          var i3 = v2(n3, "D"), e3 = v2(this.$d.hours, "H"), r5 = v2(this.$d.minutes, "M"), o3 = this.$d.seconds || 0;
          this.$d.milliseconds && (o3 += this.$d.milliseconds / 1e3, o3 = Math.round(1e3 * o3) / 1e3);
          var u3 = v2(o3, "S"), d3 = t3.negative || s3.negative || i3.negative || e3.negative || r5.negative || u3.negative, a3 = e3.format || r5.format || u3.format ? "T" : "", h3 = (d3 ? "-" : "") + "P" + t3.format + s3.format + i3.format + a3 + e3.format + r5.format + u3.format;
          return "P" === h3 || "-P" === h3 ? "P0D" : h3;
        }, y3.toJSON = function() {
          return this.toISOString();
        }, y3.format = function(t3) {
          var n3 = t3 || "YYYY-MM-DDTHH:mm:ss", i3 = { Y: this.$d.years, YY: s2.s(this.$d.years, 2, "0"), YYYY: s2.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s2.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s2.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s2.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s2.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s2.s(this.$d.seconds, 2, "0"), SSS: s2.s(this.$d.milliseconds, 3, "0") };
          return n3.replace(o2, (function(t4, s3) {
            return s3 || String(i3[t4]);
          }));
        }, y3.as = function(t3) {
          return this.$ms / h2[m2(t3)];
        }, y3.get = function(t3) {
          var s3 = this.$ms, n3 = m2(t3);
          return "milliseconds" === n3 ? s3 %= 1e3 : s3 = "weeks" === n3 ? $2(s3 / h2[n3]) : this.$d[n3], s3 || 0;
        }, y3.add = function(t3, s3, n3) {
          var i3;
          return i3 = s3 ? t3 * h2[m2(s3)] : c(t3) ? t3.$ms : f2(t3, this).$ms, f2(this.$ms + i3 * (n3 ? -1 : 1), this);
        }, y3.subtract = function(t3, s3) {
          return this.add(t3, s3, true);
        }, y3.locale = function(t3) {
          var s3 = this.clone();
          return s3.$l = t3, s3;
        }, y3.clone = function() {
          return f2(this.$ms, this);
        }, y3.humanize = function(s3) {
          return t2().add(this.$ms, "ms").locale(this.$l).fromNow(!s3);
        }, y3.valueOf = function() {
          return this.asMilliseconds();
        }, y3.milliseconds = function() {
          return this.get("milliseconds");
        }, y3.asMilliseconds = function() {
          return this.as("milliseconds");
        }, y3.seconds = function() {
          return this.get("seconds");
        }, y3.asSeconds = function() {
          return this.as("seconds");
        }, y3.minutes = function() {
          return this.get("minutes");
        }, y3.asMinutes = function() {
          return this.as("minutes");
        }, y3.hours = function() {
          return this.get("hours");
        }, y3.asHours = function() {
          return this.as("hours");
        }, y3.days = function() {
          return this.get("days");
        }, y3.asDays = function() {
          return this.as("days");
        }, y3.weeks = function() {
          return this.get("weeks");
        }, y3.asWeeks = function() {
          return this.as("weeks");
        }, y3.months = function() {
          return this.get("months");
        }, y3.asMonths = function() {
          return this.as("months");
        }, y3.years = function() {
          return this.get("years");
        }, y3.asYears = function() {
          return this.as("years");
        }, l3;
      })(), p2 = function(t3, s3, n3) {
        return t3.add(s3.years() * n3, "y").add(s3.months() * n3, "M").add(s3.days() * n3, "d").add(s3.hours() * n3, "h").add(s3.minutes() * n3, "m").add(s3.seconds() * n3, "s").add(s3.milliseconds() * n3, "ms");
      };
      return function(n3, i3, e3) {
        t2 = e3, s2 = e3().$utils(), e3.duration = function(t3, s3) {
          var n4 = e3.locale();
          return f2(t3, { $l: n4 }, s3);
        }, e3.isDuration = c;
        var r5 = i3.prototype.add, o3 = i3.prototype.subtract;
        i3.prototype.add = function(t3, s3) {
          return c(t3) ? p2(this, t3, 1) : r5.bind(this)(t3, s3);
        }, i3.prototype.subtract = function(t3, s3) {
          return c(t3) ? p2(this, t3, -1) : o3.bind(this)(t3, s3);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/relativeTime.js
var require_relativeTime = __commonJS({
  "node_modules/dayjs/plugin/relativeTime.js"(exports2, module2) {
    !(function(r4, e2) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (r4 = "undefined" != typeof globalThis ? globalThis : r4 || self).dayjs_plugin_relativeTime = e2();
    })(exports2, (function() {
      "use strict";
      return function(r4, e2, t2) {
        r4 = r4 || {};
        var n2 = e2.prototype, o2 = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function i2(r5, e3, t3, o3) {
          return n2.fromToBase(r5, e3, t3, o3);
        }
        t2.en.relativeTime = o2, n2.fromToBase = function(e3, n3, i3, d3, u2) {
          for (var f2, a2, s2, l2 = i3.$locale().relativeTime || o2, h2 = r4.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m2 = h2.length, c = 0; c < m2; c += 1) {
            var y2 = h2[c];
            y2.d && (f2 = d3 ? t2(e3).diff(i3, y2.d, true) : i3.diff(e3, y2.d, true));
            var p2 = (r4.rounding || Math.round)(Math.abs(f2));
            if (s2 = f2 > 0, p2 <= y2.r || !y2.r) {
              p2 <= 1 && c > 0 && (y2 = h2[c - 1]);
              var v2 = l2[y2.l];
              u2 && (p2 = u2("" + p2)), a2 = "string" == typeof v2 ? v2.replace("%d", p2) : v2(p2, n3, y2.l, s2);
              break;
            }
          }
          if (n3) return a2;
          var M2 = s2 ? l2.future : l2.past;
          return "function" == typeof M2 ? M2(a2) : M2.replace("%s", a2);
        }, n2.to = function(r5, e3) {
          return i2(r5, e3, this, true);
        }, n2.from = function(r5, e3) {
          return i2(r5, e3, this);
        };
        var d2 = function(r5) {
          return r5.$u ? t2.utc() : t2();
        };
        n2.toNow = function(r5) {
          return this.to(d2(this), r5);
        }, n2.fromNow = function(r5) {
          return this.from(d2(this), r5);
        };
      };
    }));
  }
});

// trabecula/utils/client/index.ts
var client_exports = {};
__export(client_exports, {
  ToastContainer: () => ToastContainer,
  Toaster: () => Toaster,
  asyncAction: () => asyncAction,
  attachTouchedTracker: () => attachTouchedTracker,
  clearTouched: () => clearTouched,
  colors: () => colors,
  copyToClipboard: () => copyToClipboard,
  derefMobx: () => derefMobx,
  getMobx: () => getMobx,
  initMobx: () => initMobx,
  makeBorderRadiuses: () => makeBorderRadiuses,
  makeBorders: () => makeBorders,
  makeClasses: () => makeClasses,
  makeMargins: () => makeMargins,
  makePadding: () => makePadding,
  makeQueue: () => makeQueue,
  makeTouchedProp: () => makeTouchedProp,
  toast: () => toast,
  triggerAllTouched: () => triggerAllTouched,
  useDragScroll: () => useDragScroll,
  useElementResize: () => useElementResize,
  useForceUpdate: () => useForceUpdate,
  useLazyLoad: () => useLazyLoad,
  validateProp: () => validateProp
});
module.exports = __toCommonJS(client_exports);

// node_modules/@mui/material/colors/index.js
var colors_exports = {};
__export(colors_exports, {
  amber: () => amber_default,
  blue: () => blue_default,
  blueGrey: () => blueGrey_default,
  brown: () => brown_default,
  common: () => common_default,
  cyan: () => cyan_default,
  deepOrange: () => deepOrange_default,
  deepPurple: () => deepPurple_default,
  green: () => green_default,
  grey: () => grey_default,
  indigo: () => indigo_default,
  lightBlue: () => lightBlue_default,
  lightGreen: () => lightGreen_default,
  lime: () => lime_default,
  orange: () => orange_default,
  pink: () => pink_default,
  purple: () => purple_default,
  red: () => red_default,
  teal: () => teal_default,
  yellow: () => yellow_default
});

// node_modules/@mui/material/colors/common.js
var common = {
  black: "#000",
  white: "#fff"
};
var common_default = common;

// node_modules/@mui/material/colors/red.js
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
var red_default = red;

// node_modules/@mui/material/colors/pink.js
var pink = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162"
};
var pink_default = pink;

// node_modules/@mui/material/colors/purple.js
var purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
};
var purple_default = purple;

// node_modules/@mui/material/colors/deepPurple.js
var deepPurple = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
  A100: "#b388ff",
  A200: "#7c4dff",
  A400: "#651fff",
  A700: "#6200ea"
};
var deepPurple_default = deepPurple;

// node_modules/@mui/material/colors/indigo.js
var indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe"
};
var indigo_default = indigo;

// node_modules/@mui/material/colors/blue.js
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
var blue_default = blue;

// node_modules/@mui/material/colors/lightBlue.js
var lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
};
var lightBlue_default = lightBlue;

// node_modules/@mui/material/colors/cyan.js
var cyan = {
  50: "#e0f7fa",
  100: "#b2ebf2",
  200: "#80deea",
  300: "#4dd0e1",
  400: "#26c6da",
  500: "#00bcd4",
  600: "#00acc1",
  700: "#0097a7",
  800: "#00838f",
  900: "#006064",
  A100: "#84ffff",
  A200: "#18ffff",
  A400: "#00e5ff",
  A700: "#00b8d4"
};
var cyan_default = cyan;

// node_modules/@mui/material/colors/teal.js
var teal = {
  50: "#e0f2f1",
  100: "#b2dfdb",
  200: "#80cbc4",
  300: "#4db6ac",
  400: "#26a69a",
  500: "#009688",
  600: "#00897b",
  700: "#00796b",
  800: "#00695c",
  900: "#004d40",
  A100: "#a7ffeb",
  A200: "#64ffda",
  A400: "#1de9b6",
  A700: "#00bfa5"
};
var teal_default = teal;

// node_modules/@mui/material/colors/green.js
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
var green_default = green;

// node_modules/@mui/material/colors/lightGreen.js
var lightGreen = {
  50: "#f1f8e9",
  100: "#dcedc8",
  200: "#c5e1a5",
  300: "#aed581",
  400: "#9ccc65",
  500: "#8bc34a",
  600: "#7cb342",
  700: "#689f38",
  800: "#558b2f",
  900: "#33691e",
  A100: "#ccff90",
  A200: "#b2ff59",
  A400: "#76ff03",
  A700: "#64dd17"
};
var lightGreen_default = lightGreen;

// node_modules/@mui/material/colors/lime.js
var lime = {
  50: "#f9fbe7",
  100: "#f0f4c3",
  200: "#e6ee9c",
  300: "#dce775",
  400: "#d4e157",
  500: "#cddc39",
  600: "#c0ca33",
  700: "#afb42b",
  800: "#9e9d24",
  900: "#827717",
  A100: "#f4ff81",
  A200: "#eeff41",
  A400: "#c6ff00",
  A700: "#aeea00"
};
var lime_default = lime;

// node_modules/@mui/material/colors/yellow.js
var yellow = {
  50: "#fffde7",
  100: "#fff9c4",
  200: "#fff59d",
  300: "#fff176",
  400: "#ffee58",
  500: "#ffeb3b",
  600: "#fdd835",
  700: "#fbc02d",
  800: "#f9a825",
  900: "#f57f17",
  A100: "#ffff8d",
  A200: "#ffff00",
  A400: "#ffea00",
  A700: "#ffd600"
};
var yellow_default = yellow;

// node_modules/@mui/material/colors/amber.js
var amber = {
  50: "#fff8e1",
  100: "#ffecb3",
  200: "#ffe082",
  300: "#ffd54f",
  400: "#ffca28",
  500: "#ffc107",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00",
  A100: "#ffe57f",
  A200: "#ffd740",
  A400: "#ffc400",
  A700: "#ffab00"
};
var amber_default = amber;

// node_modules/@mui/material/colors/orange.js
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
var orange_default = orange;

// node_modules/@mui/material/colors/deepOrange.js
var deepOrange = {
  50: "#fbe9e7",
  100: "#ffccbc",
  200: "#ffab91",
  300: "#ff8a65",
  400: "#ff7043",
  500: "#ff5722",
  600: "#f4511e",
  700: "#e64a19",
  800: "#d84315",
  900: "#bf360c",
  A100: "#ff9e80",
  A200: "#ff6e40",
  A400: "#ff3d00",
  A700: "#dd2c00"
};
var deepOrange_default = deepOrange;

// node_modules/@mui/material/colors/brown.js
var brown = {
  50: "#efebe9",
  100: "#d7ccc8",
  200: "#bcaaa4",
  300: "#a1887f",
  400: "#8d6e63",
  500: "#795548",
  600: "#6d4c41",
  700: "#5d4037",
  800: "#4e342e",
  900: "#3e2723",
  A100: "#d7ccc8",
  A200: "#bcaaa4",
  A400: "#8d6e63",
  A700: "#5d4037"
};
var brown_default = brown;

// node_modules/@mui/material/colors/grey.js
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
var grey_default = grey;

// node_modules/@mui/material/colors/blueGrey.js
var blueGrey = {
  50: "#eceff1",
  100: "#cfd8dc",
  200: "#b0bec5",
  300: "#90a4ae",
  400: "#78909c",
  500: "#607d8b",
  600: "#546e7a",
  700: "#455a64",
  800: "#37474f",
  900: "#263238",
  A100: "#cfd8dc",
  A200: "#b0bec5",
  A400: "#78909c",
  A700: "#455a64"
};
var blueGrey_default = blueGrey;

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r4 in t2) ({}).hasOwnProperty.call(t2, r4) && (n2[r4] = t2[r4]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}

// node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var React = __toESM(require("react"));
function isPlainObject(item) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/* @__PURE__ */ React.isValidElement(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (/* @__PURE__ */ React.isValidElement(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) && // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
function formatMuiErrorMessage(code) {
  let url = "https://mui.com/production-error/?code=" + code;
  for (let i2 = 1; i2 < arguments.length; i2 += 1) {
    url += "&args[]=" + encodeURIComponent(arguments[i2]);
  }
  return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
}

// node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js
var import_react_is = __toESM(require_react_is2());
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || "";
}
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}

// node_modules/@mui/utils/esm/capitalize/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@mui/utils/esm/resolveProps/resolveProps.js
function resolveProps(defaultProps, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends({}, defaultProps[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        output[propName] = slotProps;
      } else {
        output[propName] = _extends({}, slotProps);
        Object.keys(defaultSlotProps).forEach((slotPropName) => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === void 0) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}

// node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== "") {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}

// node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator = (componentName) => componentName;
var createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
var ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator_default = ClassNameGenerator;

// node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

// node_modules/@mui/utils/esm/clamp/clamp.js
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
var clamp_default = clamp;

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r4, e2) {
  if (null == r4) return {};
  var t2 = {};
  for (var n2 in r4) if ({}.hasOwnProperty.call(r4, n2)) {
    if (-1 !== e2.indexOf(n2)) continue;
    t2[n2] = r4[n2];
  }
  return t2;
}

// node_modules/@mui/material/styles/identifier.js
var identifier_default = "$$material";

// node_modules/@mui/styled-engine/index.js
var import_styled = __toESM(require("@emotion/styled"));

// node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var isDevelopment = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes2 = interpolation;
      if (keyframes2.anim === 1) {
        cursor = {
          name: keyframes2.name,
          styles: keyframes2.styles,
          next: cursor
        };
        return keyframes2.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next = serializedStyles.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
}

// node_modules/@mui/styled-engine/index.js
var import_react = require("@emotion/react");
function styled(tag, options) {
  const stylesFactory = (0, import_styled.default)(tag, options);
  if (process.env.NODE_ENV !== "production") {
    return (...styles) => {
      const component = typeof tag === "string" ? `"${tag}"` : "component";
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
      } else if (styles.some((style3) => style3 === void 0)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}
var internal_processStyles = (tag, processor) => {
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};
var wrapper = [];
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return serializeStyles(wrapper);
}

// node_modules/@mui/system/esm/createTheme/createBreakpoints.js
var _excluded = ["values", "unit", "step"];
var sortBreakpointsValues = (values2) => {
  const breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: values2 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded);
  const sortedValues = sortBreakpointsValues(values2);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

// node_modules/@mui/system/esm/createTheme/shape.js
var shape = {
  borderRadius: 4
};
var shape_default = shape;

// node_modules/@mui/system/esm/responsivePropType.js
var import_prop_types = __toESM(require_prop_types());
var responsivePropType = process.env.NODE_ENV !== "production" ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.object, import_prop_types.default.array]) : {};
var responsivePropType_default = responsivePropType;

// node_modules/@mui/system/esm/merge.js
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
    // No need to clone deep, it's way faster.
  });
}
var merge_default = merge;

// node_modules/@mui/system/esm/breakpoints.js
var values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style3) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style3);
}

// node_modules/@mui/system/esm/style.js
function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== "string") {
    return null;
  }
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style(options) {
  const {
    prop: prop2,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;
  const fn = (props) => {
    if (props[prop2] == null) {
      return null;
    }
    const propValue = props[prop2];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop2}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== "production" ? {
    [prop2]: responsivePropType_default
  } : {};
  fn.filterProps = [prop2];
  return fn;
}
var style_default = style;

// node_modules/@mui/system/esm/memoize.js
function memoize2(fn) {
  const cache = {};
  return (arg) => {
    if (cache[arg] === void 0) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

// node_modules/@mui/system/esm/spacing.js
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties = memoize2((prop2) => {
  if (prop2.length > 2) {
    if (aliases[prop2]) {
      prop2 = aliases[prop2];
    } else {
      return [prop2];
    }
  }
  const [a2, b2] = prop2.split("");
  const property = properties[a2];
  const direction = directions[b2] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
var marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
var paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
var spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (process.env.NODE_ENV !== "production") {
        if (typeof abs !== "number") {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (process.env.NODE_ENV !== "production") {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== "production") {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop2, transformer) {
  if (keys.indexOf(prop2) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop2);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop2];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop2) => resolveCssProperty(props, keys, prop2, transformer)).reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== "production" ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== "production" ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = process.env.NODE_ENV !== "production" ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;

// node_modules/@mui/system/esm/createTheme/createSpacing.js
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing2 = (...argsInput) => {
    if (process.env.NODE_ENV !== "production") {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing2.mui = true;
  return spacing2;
}

// node_modules/@mui/system/esm/compose.js
function compose(...styles) {
  const handlers = styles.reduce((acc, style3) => {
    style3.filterProps.forEach((prop2) => {
      acc[prop2] = style3;
    });
    return acc;
  }, {});
  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop2) => {
      if (handlers[prop2]) {
        return merge_default(acc, handlers[prop2](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== "production" ? styles.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style3) => acc.concat(style3.filterProps), []);
  return fn;
}
var compose_default = compose;

// node_modules/@mui/system/esm/borders.js
function borderTransform(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop2, transform) {
  return style_default({
    prop: prop2,
    themeKey: "borders",
    transform
  });
}
var border = createBorderStyle("border", borderTransform);
var borderTop = createBorderStyle("borderTop", borderTransform);
var borderRight = createBorderStyle("borderRight", borderTransform);
var borderBottom = createBorderStyle("borderBottom", borderTransform);
var borderLeft = createBorderStyle("borderLeft", borderTransform);
var borderColor = createBorderStyle("borderColor");
var borderTopColor = createBorderStyle("borderTopColor");
var borderRightColor = createBorderStyle("borderRightColor");
var borderBottomColor = createBorderStyle("borderBottomColor");
var borderLeftColor = createBorderStyle("borderLeftColor");
var outline = createBorderStyle("outline", borderTransform);
var outlineColor = createBorderStyle("outlineColor");
var borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: responsivePropType_default
} : {};
borderRadius.filterProps = ["borderRadius"];
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// node_modules/@mui/system/esm/cssGrid.js
var gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: responsivePropType_default
} : {};
gap.filterProps = ["gap"];
var columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: responsivePropType_default
} : {};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: responsivePropType_default
} : {};
rowGap.filterProps = ["rowGap"];
var gridColumn = style_default({
  prop: "gridColumn"
});
var gridRow = style_default({
  prop: "gridRow"
});
var gridAutoFlow = style_default({
  prop: "gridAutoFlow"
});
var gridAutoColumns = style_default({
  prop: "gridAutoColumns"
});
var gridAutoRows = style_default({
  prop: "gridAutoRows"
});
var gridTemplateColumns = style_default({
  prop: "gridTemplateColumns"
});
var gridTemplateRows = style_default({
  prop: "gridTemplateRows"
});
var gridTemplateAreas = style_default({
  prop: "gridTemplateAreas"
});
var gridArea = style_default({
  prop: "gridArea"
});
var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

// node_modules/@mui/system/esm/palette.js
function paletteTransform(value, userValue) {
  if (userValue === "grey") {
    return userValue;
  }
  return value;
}
var color = style_default({
  prop: "color",
  themeKey: "palette",
  transform: paletteTransform
});
var bgcolor = style_default({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
var backgroundColor = style_default({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
var palette = compose_default(color, bgcolor, backgroundColor);

// node_modules/@mui/system/esm/sizing.js
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style_default({
  prop: "width",
  transform: sizingTransform
});
var maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style_default({
  prop: "minWidth",
  transform: sizingTransform
});
var height = style_default({
  prop: "height",
  transform: sizingTransform
});
var maxHeight = style_default({
  prop: "maxHeight",
  transform: sizingTransform
});
var minHeight = style_default({
  prop: "minHeight",
  transform: sizingTransform
});
var sizeWidth = style_default({
  prop: "size",
  cssProperty: "width",
  transform: sizingTransform
});
var sizeHeight = style_default({
  prop: "size",
  cssProperty: "height",
  transform: sizingTransform
});
var boxSizing = style_default({
  prop: "boxSizing"
});
var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

// node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js
var defaultSxConfig = {
  // borders
  border: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderTop: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderRight: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderBottom: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderLeft: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: borderTransform
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: borderRadius
  },
  // palette
  color: {
    themeKey: "palette",
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: "palette",
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: "typography"
  }
};
var defaultSxConfig_default = defaultSxConfig;

// node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop2, val, theme, config) {
    const props = {
      [prop2]: val,
      theme
    };
    const options = config[prop2];
    if (!options) {
      return {
        [prop2]: val
      };
    }
    const {
      cssProperty = prop2,
      themeKey,
      transform,
      style: style3
    } = options;
    if (val == null) {
      return null;
    }
    if (themeKey === "typography" && val === "inherit") {
      return {
        [prop2]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style3) {
      return style3(props);
    }
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop2}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx2(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {},
      nested
    } = props || {};
    if (!sx) {
      return null;
    }
    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig_default;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (config[styleKey]) {
              css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, (x2) => ({
                [styleKey]: x2
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme,
                  nested: true
                });
              } else {
                css2 = merge_default(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      if (!nested && theme.modularCssLayers) {
        return {
          "@layer sx": removeUnusedBreakpoints(breakpointsKeys, css2)
        };
      }
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
var styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
var styleFunctionSx_default = styleFunctionSx;

// node_modules/@mui/system/esm/createTheme/applyStyles.js
function applyStyles(key, styles) {
  const theme = this;
  if (theme.vars && typeof theme.getColorSchemeSelector === "function") {
    const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

// node_modules/@mui/system/esm/createTheme/createTheme.js
var _excluded2 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded2);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing2 = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing2,
    shape: _extends({}, shape_default, shapeInput)
  }, other);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
var createTheme_default = createTheme;

// node_modules/@mui/system/esm/useThemeWithoutDefault.js
var React2 = __toESM(require("react"));
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme2 = null) {
  const contextTheme = React2.useContext(import_react.ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme;

// node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme2(defaultTheme2 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme2);
}
var useTheme_default = useTheme2;

// node_modules/@mui/system/esm/createStyled.js
var _excluded3 = ["ownerState"];
var _excluded22 = ["variants"];
var _excluded32 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function shouldForwardProp(prop2) {
  return prop2 !== "ownerState" && prop2 !== "theme" && prop2 !== "sx" && prop2 !== "as";
}
function shallowLayer(serialized, layerName) {
  if (layerName && serialized && typeof serialized === "object" && serialized.styles && !serialized.styles.startsWith("@layer")) {
    serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
  }
  return serialized;
}
var systemDefaultTheme2 = createTheme_default();
var lowercaseFirstLetter = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme: defaultTheme2,
  theme,
  themeId
}) {
  return isEmpty(theme) ? defaultTheme2 : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function processStyleArg(callableStyle, _ref, layerName) {
  let {
    ownerState
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded3);
  const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle(_extends({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg(resolvedStyle, _extends({
      ownerState
    }, props), layerName));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
    const {
      variants = []
    } = resolvedStylesArg, otherStyles = _objectWithoutPropertiesLoose(resolvedStylesArg, _excluded22);
    let result = otherStyles;
    variants.forEach((variant) => {
      let isMatch = true;
      if (typeof variant.props === "function") {
        isMatch = variant.props(_extends({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach((key) => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        const variantStyle = typeof variant.style === "function" ? variant.style(_extends({
          ownerState
        }, props, ownerState)) : variant.style;
        result.push(layerName ? shallowLayer(internal_serializeStyles(variantStyle), layerName) : variantStyle);
      }
    });
    return result;
  }
  return layerName ? shallowLayer(internal_serializeStyles(resolvedStylesArg), layerName) : resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme2 = systemDefaultTheme2,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = (props) => {
    return styleFunctionSx_default(_extends({}, props, {
      theme: resolveTheme(_extends({}, props, {
        defaultTheme: defaultTheme2,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles) => styles.filter((style3) => !(style3 != null && style3.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded32);
    const layerName = componentName && componentName.startsWith("Mui") || !!componentSlot ? "components" : "custom";
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let label;
    if (process.env.NODE_ENV !== "production") {
      if (componentName) {
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
      }
    }
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = (stylesArg) => {
      if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || isPlainObject(stylesArg)) {
        return (props) => {
          const theme = resolveTheme({
            theme: props.theme,
            defaultTheme: defaultTheme2,
            themeId
          });
          return processStyleArg(stylesArg, _extends({}, props, {
            theme
          }), theme.modularCssLayers ? layerName : void 0);
        };
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, _extends({}, props, {
              theme
            }), theme.modularCssLayers ? "theme" : void 0);
          });
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          var _theme$components;
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, _extends({}, props, {
            theme
          }), theme.modularCssLayers ? "theme" : void 0);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (process.env.NODE_ENV !== "production") {
        let displayName;
        if (componentName) {
          displayName = `${componentName}${capitalize(componentSlot || "")}`;
        }
        if (displayName === void 0) {
          displayName = `Styled(${getDisplayName(tag)})`;
        }
        Component.displayName = displayName;
      }
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}

// node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}

// node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme2,
  themeId
}) {
  let theme = useTheme_default(defaultTheme2);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

// node_modules/@mui/system/esm/colorManipulator.js
function clampWrapper(value, min = 0, max = 1) {
  if (process.env.NODE_ENV !== "production") {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return clamp_default(value, min, max);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors2 = color2.match(re);
  if (colors2 && colors2[0].length === 1) {
    colors2 = colors2.map((n2) => n2 + n2);
  }
  return colors2 ? `rgb${colors2.length === 4 ? "a" : ""}(${colors2.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, color2));
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color2) {
  const {
    type,
    colorSpace
  } = color2;
  let {
    values: values2
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map((n2, i2) => i2 < 3 ? parseInt(n2, 10) : n2);
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = `${values2[1]}%`;
    values2[2] = `${values2[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values2 = `${colorSpace} ${values2.join(" ")}`;
  } else {
    values2 = `${values2.join(", ")}`;
  }
  return `${type}(${values2})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values2
  } = color2;
  const h2 = values2[0];
  const s2 = values2[1] / 100;
  const l2 = values2[2] / 100;
  const a2 = s2 * Math.min(l2, 1 - l2);
  const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : __pow((val + 0.055) / 1.055, 2.4);
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clampWrapper(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clampWrapper(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (255 - color2.values[i2]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (1 - color2.values[i2]) * coefficient;
    }
  }
  return recomposeColor(color2);
}

// node_modules/@mui/material/styles/createMixins.js
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}

// node_modules/@mui/material/styles/createPalette.js
var _excluded4 = ["mode", "contrastThreshold", "tonalOffset"];
var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common_default.white,
    default: common_default.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common_default.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common_default.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue_default[200],
      light: blue_default[50],
      dark: blue_default[400]
    };
  }
  return {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple_default[200],
      light: purple_default[50],
      dark: purple_default[400]
    };
  }
  return {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red_default[500],
      light: red_default[300],
      dark: red_default[700]
    };
  }
  return {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue_default[400],
      light: lightBlue_default[300],
      dark: lightBlue_default[700]
    };
  }
  return {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green_default[400],
      light: green_default[300],
      dark: green_default[700]
    };
  }
  return {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange_default[400],
      light: orange_default[300],
      dark: orange_default[700]
    };
  }
  return {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette2) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded4);
  const primary = palette2.primary || getDefaultPrimary(mode);
  const secondary = palette2.secondary || getDefaultSecondary(mode);
  const error = palette2.error || getDefaultError(mode);
  const info = palette2.info || getDefaultInfo(mode);
  const success = palette2.success || getDefaultSuccess(mode);
  const warning = palette2.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light
  };
  if (process.env.NODE_ENV !== "production") {
    if (!modes[mode]) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: _extends({}, common_default),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey: grey_default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

// node_modules/@mui/material/styles/createTypography.js
var _excluded5 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: "uppercase"
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography) {
  const _ref = typeof typography === "function" ? typography(palette2) : typography, {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded5);
  if (process.env.NODE_ENV !== "production") {
    if (typeof fontSize !== "number") {
      console.error("MUI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize !== "number") {
      console.error("MUI: `htmlFontSize` is required to be a number.");
    }
  }
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
    // No need to clone deep
  });
}

// node_modules/@mui/material/styles/shadows.js
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows_default = shadows;

// node_modules/@mui/material/styles/createTransitions.js
var _excluded6 = ["duration", "easing", "delay"];
var easing = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * __pow(constant, 0.25) + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded6);
    if (process.env.NODE_ENV !== "production") {
      const isString = (value) => typeof value === "string";
      const isNumber = (value) => !isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// node_modules/@mui/material/styles/zIndex.js
var zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex_default = zIndex;

// node_modules/@mui/material/styles/createTheme.js
var _excluded7 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme2(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded7);
  if (options.vars) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : formatMuiErrorMessage(18));
  }
  const palette2 = createPalette(paletteInput);
  const systemTheme = createTheme_default(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette: palette2,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows_default.slice(),
    typography: createTypography(palette2, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex_default)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (process.env.NODE_ENV !== "production") {
    const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
    const traverse = (node, component) => {
      let key;
      for (key in node) {
        const child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.indexOf("Mui") === 0) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
var createTheme_default2 = createTheme2;

// node_modules/@mui/material/styles/useTheme.js
var React3 = __toESM(require("react"));

// node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = createTheme_default2();
var defaultTheme_default = defaultTheme;

// node_modules/@mui/material/styles/useTheme.js
function useTheme3() {
  const theme = useTheme_default(defaultTheme_default);
  if (process.env.NODE_ENV !== "production") {
    React3.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

// node_modules/@mui/material/styles/useThemeProps.js
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}

// node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp = (prop2) => shouldForwardProp(prop2) && prop2 !== "classes";
var styled2 = createStyled({
  themeId: identifier_default,
  defaultTheme: defaultTheme_default,
  rootShouldForwardProp
});
var styled_default = styled2;

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default = capitalize;

// node_modules/@mui/material/node_modules/clsx/dist/clsx.m.js
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) for (t2 = 0; t2 < e2.length; t2++) e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  else for (t2 in e2) e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; ) (e2 = arguments[f2++]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_m_default = clsx;

// node_modules/@mui/material/Icon/Icon.js
var React4 = __toESM(require("react"));
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/material/Icon/iconClasses.js
function getIconUtilityClass(slot) {
  return generateUtilityClass("MuiIcon", slot);
}
var iconClasses = generateUtilityClasses("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/Icon/Icon.js
var import_jsx_runtime = require("react/jsx-runtime");
var _excluded8 = ["baseClassName", "className", "color", "component", "fontSize"];
var useUtilityClasses = (ownerState) => {
  const {
    color: color2,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize_default(color2)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getIconUtilityClass, classes);
};
var IconRoot = styled_default("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block",
  // allow overflow hidden to take action
  textAlign: "center",
  // support non-square icon
  flexShrink: 0,
  fontSize: {
    inherit: "inherit",
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36)
  }[ownerState.fontSize],
  // TODO v5 deprecate, v6 remove for sx
  color: {
    primary: (theme.vars || theme).palette.primary.main,
    secondary: (theme.vars || theme).palette.secondary.main,
    info: (theme.vars || theme).palette.info.main,
    success: (theme.vars || theme).palette.success.main,
    warning: (theme.vars || theme).palette.warning.main,
    action: (theme.vars || theme).palette.action.active,
    error: (theme.vars || theme).palette.error.main,
    disabled: (theme.vars || theme).palette.action.disabled,
    inherit: void 0
  }[ownerState.color]
}));
var Icon = /* @__PURE__ */ React4.forwardRef(function Icon2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiIcon"
  });
  const {
    baseClassName = "material-icons",
    className,
    color: color2 = "inherit",
    component: Component = "span",
    fontSize = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const ownerState = _extends({}, props, {
    baseClassName,
    color: color2,
    component: Component,
    fontSize
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRoot, _extends({
    as: Component,
    className: clsx_m_default(
      baseClassName,
      // Prevent the translation of the text content.
      // The font relies on the exact text content to render the icon.
      "notranslate",
      classes.root,
      className
    ),
    ownerState,
    "aria-hidden": true,
    ref
  }, other));
});
process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
   * other base class that suits the icon font you're using (e.g. material-icons-rounded, fas, etc).
   * @default 'material-icons'
   */
  baseClassName: import_prop_types2.default.string,
  /**
   * The name of the icon font ligature.
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'inherit'
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types2.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
Icon.muiName = "Icon";
var Icon_default = Icon;

// trabecula/utils/client/css.ts
var import_color = __toESM(require_color());
var import_tss_react = require("tss-react");
var makeBorders = (props) => ({
  border: props == null ? void 0 : props.all,
  borderTop: props == null ? void 0 : props.top,
  borderBottom: props == null ? void 0 : props.bottom,
  borderRight: props == null ? void 0 : props.right,
  borderLeft: props == null ? void 0 : props.left
});
var makeBorderRadiuses = (radiuses) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return {
    borderTopLeftRadius: (_c = (_b = (_a = radiuses == null ? void 0 : radiuses.topLeft) != null ? _a : radiuses == null ? void 0 : radiuses.top) != null ? _b : radiuses == null ? void 0 : radiuses.left) != null ? _c : radiuses == null ? void 0 : radiuses.all,
    borderTopRightRadius: (_f = (_e = (_d = radiuses == null ? void 0 : radiuses.topRight) != null ? _d : radiuses == null ? void 0 : radiuses.top) != null ? _e : radiuses == null ? void 0 : radiuses.right) != null ? _f : radiuses == null ? void 0 : radiuses.all,
    borderBottomLeftRadius: (_i = (_h = (_g = radiuses == null ? void 0 : radiuses.bottomLeft) != null ? _g : radiuses == null ? void 0 : radiuses.bottom) != null ? _h : radiuses == null ? void 0 : radiuses.left) != null ? _i : radiuses == null ? void 0 : radiuses.all,
    borderBottomRightRadius: (_l = (_k = (_j = radiuses == null ? void 0 : radiuses.bottomRight) != null ? _j : radiuses == null ? void 0 : radiuses.bottom) != null ? _k : radiuses == null ? void 0 : radiuses.right) != null ? _l : radiuses == null ? void 0 : radiuses.all
  };
};
var makeMargins = (props) => ({
  margin: props == null ? void 0 : props.all,
  marginTop: props == null ? void 0 : props.top,
  marginBottom: props == null ? void 0 : props.bottom,
  marginRight: props == null ? void 0 : props.right,
  marginLeft: props == null ? void 0 : props.left
});
var makePadding = (props) => ({
  padding: props == null ? void 0 : props.all,
  paddingTop: props == null ? void 0 : props.top,
  paddingBottom: props == null ? void 0 : props.bottom,
  paddingRight: props == null ? void 0 : props.right,
  paddingLeft: props == null ? void 0 : props.left
});
var { makeStyles } = (0, import_tss_react.createMakeAndWithStyles)({ useTheme: useTheme3 });
var makeClasses = (fnOrObj) => {
  return (params) => {
    const { classes: css2, cx } = makeStyles()(
      (props, theme) => typeof fnOrObj === "function" ? fnOrObj(theme, props) : fnOrObj
    )(params);
    return { css: css2, cx };
  };
};
var customColors = {
  black: "#131313",
  blue: "#2866c5",
  blueGrey: "#546e7a",
  brown: "#6d4c41",
  darkGrey: "#2b2b2b",
  green: "#2e7d32",
  grey: "#4b4b4b",
  lightBlue: "#578cdd",
  lightGrey: "#bdbdbd",
  orange: "#ad6a27",
  purple: "#683980",
  red: "#982525",
  white: "#f5f5f5",
  yellow: "#e3c648"
};
var tagCategories = [
  customColors.red,
  customColors.orange,
  customColors.yellow,
  customColors.green,
  customColors.blue,
  customColors.blueGrey,
  customColors.purple
].map((c) => [
  (0, import_color.default)(c).lighten(0.4).hex(),
  (0, import_color.default)(c).lighten(0.2).hex(),
  (0, import_color.default)(c).hex(),
  (0, import_color.default)(c).darken(0.2).hex(),
  (0, import_color.default)(c).darken(0.4).hex()
]);
var colors = {
  background: "#1E1E1E",
  custom: customColors,
  foreground: "#2C2C2C",
  foregroundCard: "#343434",
  mui: colors_exports,
  tagCategories
};

// trabecula/utils/client/hooks.ts
var import_react2 = require("react");
var useElementResize = (ref, condition) => {
  const [dimensions, setDimensions] = (0, import_react2.useState)({ width: 0, height: 0 });
  const [absPosition, setAbsPosition] = (0, import_react2.useState)({ top: 0, left: 0 });
  (0, import_react2.useEffect)(() => {
    const nodeRef = ref == null ? void 0 : ref.current;
    const getDimensions = () => ({
      width: (nodeRef == null ? void 0 : nodeRef.offsetWidth) || 0,
      height: (nodeRef == null ? void 0 : nodeRef.offsetHeight) || 0
    });
    const getPosition = () => {
      var _a;
      const rect = (_a = nodeRef == null ? void 0 : nodeRef.getBoundingClientRect) == null ? void 0 : _a.call(nodeRef);
      return { top: (rect == null ? void 0 : rect.top) || 0, left: (rect == null ? void 0 : rect.left) || 0 };
    };
    const handleResize = () => {
      setDimensions(getDimensions());
      setAbsPosition(getPosition());
    };
    if (nodeRef) handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, condition]);
  return __spreadValues(__spreadValues({}, dimensions), absPosition);
};
var useForceUpdate = () => {
  const [, setTick] = (0, import_react2.useState)(0);
  const update = (0, import_react2.useCallback)(() => setTick((tick) => tick + 1), []);
  return update;
};
var useLazyLoad = (containerRef, options) => {
  const [isVisible, setIsVisible] = (0, import_react2.useState)(false);
  const observerRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a, _b;
    if (!containerRef.current) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      {
        rootMargin: (_a = options == null ? void 0 : options.rootMargin) != null ? _a : "200px 0px",
        threshold: (_b = options == null ? void 0 : options.threshold) != null ? _b : 0
      }
    );
    observerRef.current.observe(containerRef.current);
    return () => {
      var _a2;
      return (_a2 = observerRef.current) == null ? void 0 : _a2.disconnect();
    };
  }, [options == null ? void 0 : options.rootMargin, options == null ? void 0 : options.threshold]);
  return isVisible;
};

// trabecula/utils/client/miscellaneous.ts
var copyToClipboard = (value, message) => {
  navigator.clipboard.writeText(value).then(
    () => toast.info(message),
    () => toast.error("Failed to copy to clipboard")
  );
};

// trabecula/utils/client/mobx.ts
var mobxKeystoneBindings = null;
var initMobx = (bindings) => mobxKeystoneBindings = bindings;
var getMobx = () => {
  if (!mobxKeystoneBindings) throw new Error("Call initMobx() at app startup");
  return mobxKeystoneBindings;
};

// trabecula/utils/client/queue.ts
var makeQueue = ({
  action,
  items,
  logPrefix = "Refreshed",
  logSuffix,
  onComplete,
  queue,
  withTabTitle
}) => {
  return new Promise((resolve) => {
    const totalCount = items.length;
    let completedCount = 0;
    let hasError = false;
    let isComplete = false;
    const getToastText = () => `${logPrefix} ${completedCount} / ${totalCount} ${logSuffix}${isComplete ? "." : "..."}`;
    const toaster = new Toaster();
    toaster.toast(getToastText(), { autoClose: false, type: "info" });
    const onEscape = () => __async(null, null, function* () {
      updateCompleted();
      resolve();
      yield onComplete == null ? void 0 : onComplete(hasError);
    });
    const setHasError = (error) => hasError = error;
    const updateCompleted = () => {
      if (completedCount < totalCount) completedCount++;
      isComplete = completedCount >= totalCount;
      updateToast();
      if (withTabTitle) updateTabTitle();
    };
    const updateTabTitle = () => document.title = completedCount >= totalCount ? hasError ? "ERROR" : "Done!" : `[${completedCount}/${totalCount}] Downloading`;
    const updateToast = () => toaster.toast(getToastText(), {
      autoClose: isComplete ? 3e3 : false,
      type: isComplete ? "success" : void 0
    });
    if (withTabTitle) updateTabTitle();
    for (const item of items) {
      queue.add(() => __async(null, null, function* () {
        try {
          yield action(item, onEscape);
        } catch (err) {
          console.error(err);
          toast.error(err.message);
          setHasError(true);
        } finally {
          updateCompleted();
          if (isComplete) yield onEscape();
        }
      }));
    }
  });
};

// trabecula/utils/client/scrolling.ts
var import_react3 = require("react");
var useDragScroll = ({
  listRef,
  listOuterRef,
  momentum = 0.8,
  scrollLeft,
  width: width2
}) => {
  const dragDirection = (0, import_react3.useRef)(null);
  const initialMouseX = (0, import_react3.useRef)(null);
  const momentumId = (0, import_react3.useRef)(null);
  const scrollFinal = (0, import_react3.useRef)(0);
  const scrollStart = (0, import_react3.useRef)(0);
  const velocity = (0, import_react3.useRef)(0);
  const [isDragging, setIsDragging] = (0, import_react3.useState)(false);
  const handleMouseDown = (event) => {
    if (!listRef.current) return;
    initialMouseX.current = event.clientX;
    scrollStart.current = scrollLeft.current;
    cancelMomentumTracking();
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = (event) => {
    if (!listRef.current) return;
    const walk = (event.clientX - initialMouseX.current) * 3;
    const newScrollLeft = scrollStart.current - walk;
    const isScrollValid = validateScrollLeft(newScrollLeft);
    if (!isScrollValid) return;
    listRef.current.scrollTo(newScrollLeft);
    velocity.current = newScrollLeft - scrollStart.current;
    dragDirection.current = velocity.current > 0 ? "left" : "right";
    if (velocity.current > 0 && !isDragging) setIsDragging(true);
  };
  const mouseUpHandler = () => {
    scrollFinal.current = scrollLeft.current;
    if (Math.abs(scrollFinal.current - scrollStart.current) > 5) {
      velocity.current = Math.max(Math.abs(velocity.current), 30) * (dragDirection.current === "right" ? -1 : 1);
      beginMomentumTracking();
    }
    setTimeout(() => setIsDragging(false), 0);
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };
  const validateScrollLeft = (newScrollLeft) => {
    var _a;
    return newScrollLeft >= 0 && newScrollLeft <= ((_a = listOuterRef.current) == null ? void 0 : _a.scrollWidth) - width2 * 0.8;
  };
  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    momentumId.current = requestAnimationFrame(momentumLoop);
  };
  const cancelMomentumTracking = () => cancelAnimationFrame(momentumId.current);
  const momentumLoop = () => {
    const newScrollLeft = scrollLeft.current + velocity.current;
    const isScrollValid = validateScrollLeft(newScrollLeft);
    if (!isScrollValid) return;
    listRef.current.scrollTo(newScrollLeft);
    velocity.current *= momentum;
    if (Math.abs(velocity.current) > 0.5) momentumId.current = requestAnimationFrame(momentumLoop);
  };
  return { handleMouseDown, isDragging };
};

// trabecula/utils/client/store.ts
var import_mobx_keystone = require("mobx-keystone");

// trabecula/utils/common/constants.ts
var AUDIO_CODECS_COMMON = [
  "None",
  "aac_he",
  "aac_ld",
  "aac",
  "ac3",
  "aiff",
  "alac",
  "avc",
  "dts",
  "flac",
  "mp2",
  "mp3",
  "mp4als",
  "opus",
  "pcm_alaw",
  "pcm_bluray",
  "pcm_dvd",
  "pcm_s16be",
  "pcm_s16le",
  "pcm_s24le",
  "pcm_s32le",
  "pcm_u8",
  "pcm",
  "tta",
  "vorbis",
  "wav",
  "wmapro",
  "wmav1",
  "wmav2"
];
var AUDIO_CODECS_UNCOMMON = [
  "aac_latm",
  "alac",
  "ape",
  "aptx_hd",
  "aptx",
  "avs",
  "binkaudio_dct",
  "binkaudio_rdft",
  "cavs",
  "cook",
  "hcom",
  "iac",
  "mace3",
  "mace6",
  "paf_audio",
  "ra_144",
  "ra_288",
  "ralf",
  "sipr",
  "tak",
  "westwood_snd1",
  "wmalossless",
  "wmavoice",
  "xma1",
  "xma2"
];
var AUDIO_CODECS = [...AUDIO_CODECS_COMMON, ...AUDIO_CODECS_UNCOMMON];
var IMAGE_EXTS_COMMON = ["gif", "heic", "jpeg", "jpg", "png", "webp"];
var IMAGE_EXTS_UNCOMMON = [
  "apng",
  "avif",
  "bmp",
  "jfif",
  "jif",
  "jiff",
  "svg",
  "tiff"
];
var IMAGE_EXTS = [...IMAGE_EXTS_COMMON, ...IMAGE_EXTS_UNCOMMON];
var VIDEO_CODECS_COMMON = [
  "av1",
  "h264",
  "hevc",
  "mpeg4",
  "prores",
  "vp8",
  "vp9",
  "wmv1"
];
var VIDEO_CODECS_UNCOMMON = [
  "amv",
  "asv1",
  "asv2",
  "auravision",
  "binkvideo",
  "camstudio",
  "cinepak",
  "dirac",
  "dnxhd",
  "dnxhr",
  "dvvideo",
  "ffv1",
  "flv1",
  "h263",
  "h263p",
  "huffyuv",
  "indeo3",
  "indeo5",
  "jpeg2000",
  "jpegls",
  "lagarith",
  "mjpeg",
  "mjpegb",
  "mpeg1video",
  "mpeg2video",
  "msmpeg4v1",
  "msmpeg4v2",
  "msmpeg4v3",
  "rawvideo",
  "rv10",
  "rv20",
  "rv30",
  "rv40",
  "smacker",
  "snow",
  "sp5x",
  "svq1",
  "svq3",
  "theora",
  "tscc",
  "utvideo",
  "uyvy422",
  "v210",
  "vixl",
  "vp6",
  "vp6f",
  "wmv2",
  "wmv3",
  "yuyv422",
  "zlib",
  "zmbv"
];
var VIDEO_CODECS = [...VIDEO_CODECS_COMMON, ...VIDEO_CODECS_UNCOMMON];
var VIDEO_EXTS_COMMON = [
  "3gp",
  "avi",
  "f4v",
  "flv",
  "m4v",
  "mkv",
  "mov",
  "mp4",
  "ts",
  "webm",
  "wmv"
];
var VIDEO_EXTS_UNCOMMON = [
  "3gp2",
  "3gpp",
  "amv",
  "asf",
  "avi",
  "divx",
  "m2t",
  "m2ts",
  "m2v",
  "m4b",
  "m4p",
  "mpeg",
  "mpg",
  "mts",
  "ogv",
  "qt",
  "vob",
  "wm",
  "wmp"
];
var VIDEO_EXTS = [...VIDEO_EXTS_COMMON, ...VIDEO_EXTS_UNCOMMON];

// trabecula/utils/common/date-and-time.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
var import_duration = __toESM(require_duration());
var import_relativeTime = __toESM(require_relativeTime());
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);

// trabecula/utils/common/miscellaneous.ts
var handleErrors = (fn) => __async(null, null, function* () {
  var _a;
  try {
    return { success: true, data: yield fn() };
  } catch (err) {
    const errorStr = err instanceof Error ? (_a = err.stack) != null ? _a : err.message : String(err);
    console.error(errorStr);
    return { success: false, error: errorStr };
  }
});

// trabecula/utils/client/store.ts
var asyncAction = (fn) => {
  const { _async, _await } = getMobx();
  return _async(function* (input) {
    if (typeof fn !== "function") throw new Error("Provided function is not a function");
    const boundFn = fn.bind(this);
    if (typeof boundFn !== "function") throw new Error("Bound function is not a function");
    return yield* __yieldStar(_await(handleErrors(() => boundFn(input))));
  });
};
var attachTouchedTracker = (model) => {
  const { onPatches } = getMobx();
  onPatches(model, (patches) => {
    const touched = model._touched;
    for (const p2 of patches) {
      if (p2.path.length !== 1) continue;
      const key = p2.path[0];
      if (key === "_touched") continue;
      if (touched[key]) continue;
      touched[key] = true;
    }
  });
};
var clearTouched = (model, keys) => {
  for (const k2 of keys) model._touched[k2] = false;
};
var derefMobx = (value) => {
  const { getSnapshot, isTreeNode } = getMobx();
  if (value === null || typeof value !== "object") return value;
  if (isTreeNode(value)) return getSnapshot(value);
  if (Array.isArray(value)) {
    const len = value.length;
    let changed2 = false;
    const out2 = new Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      const v2 = derefMobx(value[i2]);
      if (v2 !== value[i2]) changed2 = true;
      out2[i2] = v2;
    }
    return changed2 ? out2 : value;
  }
  let changed = false;
  const out = {};
  for (const k2 in value) {
    const v2 = derefMobx(value[k2]);
    if (v2 !== value[k2]) changed = true;
    out[k2] = v2;
  }
  return changed ? out : value;
};
var makeTouchedProp = () => ({
  _touched: (0, import_mobx_keystone.prop)(() => ({}))
});
var triggerAllTouched = (model) => {
  const touched = model._touched;
  for (const k2 in touched) touched[k2] = true;
};
var validateProp = (store, field, validator) => {
  var _a;
  if (!((_a = store._touched) == null ? void 0 : _a[field])) return "";
  return validator() || "";
};

// node_modules/react-toastify/dist/react-toastify.esm.mjs
var import_react4 = __toESM(require("react"), 1);

// node_modules/react-toastify/node_modules/clsx/dist/clsx.m.js
function r2(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) for (t2 = 0; t2 < e2.length; t2++) e2[t2] && (f2 = r2(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  else for (t2 in e2) e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx2() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; ) (e2 = arguments[f2++]) && (t2 = r2(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_m_default2 = clsx2;

// node_modules/react-toastify/dist/react-toastify.esm.mjs
var u = (t2) => "number" == typeof t2 && !isNaN(t2);
var d = (t2) => "string" == typeof t2;
var p = (t2) => "function" == typeof t2;
var m = (t2) => d(t2) || p(t2) ? t2 : null;
var f = (t2) => (0, import_react4.isValidElement)(t2) || d(t2) || p(t2) || u(t2);
function g(t2, e2, n2) {
  void 0 === n2 && (n2 = 300);
  const { scrollHeight: o2, style: s2 } = t2;
  requestAnimationFrame(() => {
    s2.minHeight = "initial", s2.height = o2 + "px", s2.transition = `all ${n2}ms`, requestAnimationFrame(() => {
      s2.height = "0", s2.padding = "0", s2.margin = "0", setTimeout(e2, n2);
    });
  });
}
function h(e2) {
  let { enter: a2, exit: r4, appendPosition: i2 = false, collapse: l2 = true, collapseDuration: c = 300 } = e2;
  return function(e3) {
    let { children: u2, position: d2, preventExitTransition: p2, done: m2, nodeRef: f2, isIn: h2 } = e3;
    const y2 = i2 ? `${a2}--${d2}` : a2, v2 = i2 ? `${r4}--${d2}` : r4, T2 = (0, import_react4.useRef)(0);
    return (0, import_react4.useLayoutEffect)(() => {
      const t2 = f2.current, e4 = y2.split(" "), n2 = (o2) => {
        o2.target === f2.current && (t2.dispatchEvent(new Event("d")), t2.removeEventListener("animationend", n2), t2.removeEventListener("animationcancel", n2), 0 === T2.current && "animationcancel" !== o2.type && t2.classList.remove(...e4));
      };
      t2.classList.add(...e4), t2.addEventListener("animationend", n2), t2.addEventListener("animationcancel", n2);
    }, []), (0, import_react4.useEffect)(() => {
      const t2 = f2.current, e4 = () => {
        t2.removeEventListener("animationend", e4), l2 ? g(t2, m2, c) : m2();
      };
      h2 || (p2 ? e4() : (T2.current = 1, t2.className += ` ${v2}`, t2.addEventListener("animationend", e4)));
    }, [h2]), import_react4.default.createElement(import_react4.default.Fragment, null, u2);
  };
}
function y(t2, e2) {
  return null != t2 ? { content: t2.content, containerId: t2.props.containerId, id: t2.props.toastId, theme: t2.props.theme, type: t2.props.type, data: t2.props.data || {}, isLoading: t2.props.isLoading, icon: t2.props.icon, status: e2 } : {};
}
var v = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t2, e2) {
  return this.list.has(t2) || this.list.set(t2, []), this.list.get(t2).push(e2), this;
}, off(t2, e2) {
  if (e2) {
    const n2 = this.list.get(t2).filter((t3) => t3 !== e2);
    return this.list.set(t2, n2), this;
  }
  return this.list.delete(t2), this;
}, cancelEmit(t2) {
  const e2 = this.emitQueue.get(t2);
  return e2 && (e2.forEach(clearTimeout), this.emitQueue.delete(t2)), this;
}, emit(t2) {
  this.list.has(t2) && this.list.get(t2).forEach((e2) => {
    const n2 = setTimeout(() => {
      e2(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(t2) || this.emitQueue.set(t2, []), this.emitQueue.get(t2).push(n2);
  });
} };
var T = (e2) => {
  let _a = e2, { theme: n2, type: o2 } = _a, s2 = __objRest(_a, ["theme", "type"]);
  return import_react4.default.createElement("svg", __spreadValues({ viewBox: "0 0 24 24", width: "100%", height: "100%", fill: "colored" === n2 ? "currentColor" : `var(--toastify-icon-color-${o2})` }, s2));
};
var E = { info: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return import_react4.default.createElement("div", { className: "Toastify__spinner" });
} };
function C(t2) {
  const [, o2] = (0, import_react4.useReducer)((t3) => t3 + 1, 0), [l2, c] = (0, import_react4.useState)([]), g2 = (0, import_react4.useRef)(null), h2 = (0, import_react4.useRef)(/* @__PURE__ */ new Map()).current, T2 = (t3) => -1 !== l2.indexOf(t3), C2 = (0, import_react4.useRef)({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t2, containerId: null, isToastActive: T2, getToast: (t3) => h2.get(t3) }).current;
  function b2(t3) {
    let { containerId: e2 } = t3;
    const { limit: n2 } = C2.props;
    !n2 || e2 && C2.containerId !== e2 || (C2.count -= C2.queue.length, C2.queue = []);
  }
  function I2(t3) {
    c((e2) => null == t3 ? [] : e2.filter((e3) => e3 !== t3));
  }
  function _2() {
    const { toastContent: t3, toastProps: e2, staleId: n2 } = C2.queue.shift();
    O2(t3, e2, n2);
  }
  function L2(t3, n2) {
    let _a = n2, { delay: s2, staleId: r4 } = _a, i2 = __objRest(_a, ["delay", "staleId"]);
    if (!f(t3) || (function(t4) {
      return !g2.current || C2.props.enableMultiContainer && t4.containerId !== C2.props.containerId || h2.has(t4.toastId) && null == t4.updateId;
    })(i2)) return;
    const { toastId: l3, updateId: c2, data: T3 } = i2, { props: b3 } = C2, L3 = () => I2(l3), N2 = null == c2;
    N2 && C2.count++;
    const M2 = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, b3), { style: b3.toastStyle, key: C2.toastKey++ }), Object.fromEntries(Object.entries(i2).filter((t4) => {
      let [e2, n3] = t4;
      return null != n3;
    }))), { toastId: l3, updateId: c2, data: T3, closeToast: L3, isIn: false, className: m(i2.className || b3.toastClassName), bodyClassName: m(i2.bodyClassName || b3.bodyClassName), progressClassName: m(i2.progressClassName || b3.progressClassName), autoClose: !i2.isLoading && (R2 = i2.autoClose, w2 = b3.autoClose, false === R2 || u(R2) && R2 > 0 ? R2 : w2), deleteToast() {
      const t4 = y(h2.get(l3), "removed");
      h2.delete(l3), v.emit(4, t4);
      const e2 = C2.queue.length;
      if (C2.count = null == l3 ? C2.count - C2.displayedToast : C2.count - 1, C2.count < 0 && (C2.count = 0), e2 > 0) {
        const t5 = null == l3 ? C2.props.limit : 1;
        if (1 === e2 || 1 === t5) C2.displayedToast++, _2();
        else {
          const n3 = t5 > e2 ? e2 : t5;
          C2.displayedToast = n3;
          for (let t6 = 0; t6 < n3; t6++) _2();
        }
      } else o2();
    } });
    var R2, w2;
    M2.iconOut = (function(t4) {
      let { theme: n3, type: o3, isLoading: s3, icon: r5 } = t4, i3 = null;
      const l4 = { theme: n3, type: o3 };
      return false === r5 || (p(r5) ? i3 = r5(l4) : (0, import_react4.isValidElement)(r5) ? i3 = (0, import_react4.cloneElement)(r5, l4) : d(r5) || u(r5) ? i3 = r5 : s3 ? i3 = E.spinner() : ((t5) => t5 in E)(o3) && (i3 = E[o3](l4))), i3;
    })(M2), p(i2.onOpen) && (M2.onOpen = i2.onOpen), p(i2.onClose) && (M2.onClose = i2.onClose), M2.closeButton = b3.closeButton, false === i2.closeButton || f(i2.closeButton) ? M2.closeButton = i2.closeButton : true === i2.closeButton && (M2.closeButton = !f(b3.closeButton) || b3.closeButton);
    let x2 = t3;
    (0, import_react4.isValidElement)(t3) && !d(t3.type) ? x2 = (0, import_react4.cloneElement)(t3, { closeToast: L3, toastProps: M2, data: T3 }) : p(t3) && (x2 = t3({ closeToast: L3, toastProps: M2, data: T3 })), b3.limit && b3.limit > 0 && C2.count > b3.limit && N2 ? C2.queue.push({ toastContent: x2, toastProps: M2, staleId: r4 }) : u(s2) ? setTimeout(() => {
      O2(x2, M2, r4);
    }, s2) : O2(x2, M2, r4);
  }
  function O2(t3, e2, n2) {
    const { toastId: o3 } = e2;
    n2 && h2.delete(n2);
    const s2 = { content: t3, props: e2 };
    h2.set(o3, s2), c((t4) => [...t4, o3].filter((t5) => t5 !== n2)), v.emit(4, y(s2, null == s2.props.updateId ? "added" : "updated"));
  }
  return (0, import_react4.useEffect)(() => (C2.containerId = t2.containerId, v.cancelEmit(3).on(0, L2).on(1, (t3) => g2.current && I2(t3)).on(5, b2).emit(2, C2), () => {
    h2.clear(), v.emit(3, C2);
  }), []), (0, import_react4.useEffect)(() => {
    C2.props = t2, C2.isToastActive = T2, C2.displayedToast = l2.length;
  }), { getToastToRender: function(e2) {
    const n2 = /* @__PURE__ */ new Map(), o3 = Array.from(h2.values());
    return t2.newestOnTop && o3.reverse(), o3.forEach((t3) => {
      const { position: e3 } = t3.props;
      n2.has(e3) || n2.set(e3, []), n2.get(e3).push(t3);
    }), Array.from(n2, (t3) => e2(t3[0], t3[1]));
  }, containerRef: g2, isToastActive: T2 };
}
function b(t2) {
  return t2.targetTouches && t2.targetTouches.length >= 1 ? t2.targetTouches[0].clientX : t2.clientX;
}
function I(t2) {
  return t2.targetTouches && t2.targetTouches.length >= 1 ? t2.targetTouches[0].clientY : t2.clientY;
}
function _(t2) {
  const [o2, a2] = (0, import_react4.useState)(false), [r4, l2] = (0, import_react4.useState)(false), c = (0, import_react4.useRef)(null), u2 = (0, import_react4.useRef)({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, boundingRect: null, didMove: false }).current, d2 = (0, import_react4.useRef)(t2), { autoClose: m2, pauseOnHover: f2, closeToast: g2, onClick: h2, closeOnClick: y2 } = t2;
  function v2(e2) {
    if (t2.draggable) {
      "touchstart" === e2.nativeEvent.type && e2.nativeEvent.preventDefault(), u2.didMove = false, document.addEventListener("mousemove", _2), document.addEventListener("mouseup", L2), document.addEventListener("touchmove", _2), document.addEventListener("touchend", L2);
      const n2 = c.current;
      u2.canCloseOnClick = true, u2.canDrag = true, u2.boundingRect = n2.getBoundingClientRect(), n2.style.transition = "", u2.x = b(e2.nativeEvent), u2.y = I(e2.nativeEvent), "x" === t2.draggableDirection ? (u2.start = u2.x, u2.removalDistance = n2.offsetWidth * (t2.draggablePercent / 100)) : (u2.start = u2.y, u2.removalDistance = n2.offsetHeight * (80 === t2.draggablePercent ? 1.5 * t2.draggablePercent : t2.draggablePercent / 100));
    }
  }
  function T2(e2) {
    if (u2.boundingRect) {
      const { top: n2, bottom: o3, left: s2, right: a3 } = u2.boundingRect;
      "touchend" !== e2.nativeEvent.type && t2.pauseOnHover && u2.x >= s2 && u2.x <= a3 && u2.y >= n2 && u2.y <= o3 ? C2() : E2();
    }
  }
  function E2() {
    a2(true);
  }
  function C2() {
    a2(false);
  }
  function _2(e2) {
    const n2 = c.current;
    u2.canDrag && n2 && (u2.didMove = true, o2 && C2(), u2.x = b(e2), u2.y = I(e2), u2.delta = "x" === t2.draggableDirection ? u2.x - u2.start : u2.y - u2.start, u2.start !== u2.x && (u2.canCloseOnClick = false), n2.style.transform = `translate${t2.draggableDirection}(${u2.delta}px)`, n2.style.opacity = "" + (1 - Math.abs(u2.delta / u2.removalDistance)));
  }
  function L2() {
    document.removeEventListener("mousemove", _2), document.removeEventListener("mouseup", L2), document.removeEventListener("touchmove", _2), document.removeEventListener("touchend", L2);
    const e2 = c.current;
    if (u2.canDrag && u2.didMove && e2) {
      if (u2.canDrag = false, Math.abs(u2.delta) > u2.removalDistance) return l2(true), void t2.closeToast();
      e2.style.transition = "transform 0.2s, opacity 0.2s", e2.style.transform = `translate${t2.draggableDirection}(0)`, e2.style.opacity = "1";
    }
  }
  (0, import_react4.useEffect)(() => {
    d2.current = t2;
  }), (0, import_react4.useEffect)(() => (c.current && c.current.addEventListener("d", E2, { once: true }), p(t2.onOpen) && t2.onOpen((0, import_react4.isValidElement)(t2.children) && t2.children.props), () => {
    const t3 = d2.current;
    p(t3.onClose) && t3.onClose((0, import_react4.isValidElement)(t3.children) && t3.children.props);
  }), []), (0, import_react4.useEffect)(() => (t2.pauseOnFocusLoss && (document.hasFocus() || C2(), window.addEventListener("focus", E2), window.addEventListener("blur", C2)), () => {
    t2.pauseOnFocusLoss && (window.removeEventListener("focus", E2), window.removeEventListener("blur", C2));
  }), [t2.pauseOnFocusLoss]);
  const O2 = { onMouseDown: v2, onTouchStart: v2, onMouseUp: T2, onTouchEnd: T2 };
  return m2 && f2 && (O2.onMouseEnter = C2, O2.onMouseLeave = E2), y2 && (O2.onClick = (t3) => {
    h2 && h2(t3), u2.canCloseOnClick && g2();
  }), { playToast: E2, pauseToast: C2, isRunning: o2, preventExitTransition: r4, toastRef: c, eventHandlers: O2 };
}
function L(e2) {
  let { closeToast: n2, theme: o2, ariaLabel: s2 = "close" } = e2;
  return import_react4.default.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o2}`, type: "button", onClick: (t2) => {
    t2.stopPropagation(), n2(t2);
  }, "aria-label": s2 }, import_react4.default.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, import_react4.default.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function O(e2) {
  let { delay: n2, isRunning: o2, closeToast: s2, type: a2 = "default", hide: r4, className: i2, style: l2, controlledProgress: u2, progress: d2, rtl: m2, isIn: f2, theme: g2 } = e2;
  const h2 = r4 || u2 && 0 === d2, y2 = __spreadProps(__spreadValues({}, l2), { animationDuration: `${n2}ms`, animationPlayState: o2 ? "running" : "paused", opacity: h2 ? 0 : 1 });
  u2 && (y2.transform = `scaleX(${d2})`);
  const v2 = clsx_m_default2("Toastify__progress-bar", u2 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g2}`, `Toastify__progress-bar--${a2}`, { "Toastify__progress-bar--rtl": m2 }), T2 = p(i2) ? i2({ rtl: m2, type: a2, defaultClassName: v2 }) : clsx_m_default2(v2, i2);
  return import_react4.default.createElement("div", { role: "progressbar", "aria-hidden": h2 ? "true" : "false", "aria-label": "notification timer", className: T2, style: y2, [u2 && d2 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u2 && d2 < 1 ? null : () => {
    f2 && s2();
  } });
}
var N = (n2) => {
  const { isRunning: o2, preventExitTransition: s2, toastRef: r4, eventHandlers: i2 } = _(n2), { closeButton: l2, children: u2, autoClose: d2, onClick: m2, type: f2, hideProgressBar: g2, closeToast: h2, transition: y2, position: v2, className: T2, style: E2, bodyClassName: C2, bodyStyle: b2, progressClassName: I2, progressStyle: N2, updateId: M2, role: R2, progress: w2, rtl: x2, toastId: $2, deleteToast: k2, isIn: P2, isLoading: B2, iconOut: D2, closeOnClick: A2, theme: z2 } = n2, F2 = clsx_m_default2("Toastify__toast", `Toastify__toast-theme--${z2}`, `Toastify__toast--${f2}`, { "Toastify__toast--rtl": x2 }, { "Toastify__toast--close-on-click": A2 }), H2 = p(T2) ? T2({ rtl: x2, position: v2, type: f2, defaultClassName: F2 }) : clsx_m_default2(F2, T2), S2 = !!w2 || !d2, q2 = { closeToast: h2, type: f2, theme: z2 };
  let Q2 = null;
  return false === l2 || (Q2 = p(l2) ? l2(q2) : (0, import_react4.isValidElement)(l2) ? (0, import_react4.cloneElement)(l2, q2) : L(q2)), import_react4.default.createElement(y2, { isIn: P2, done: k2, position: v2, preventExitTransition: s2, nodeRef: r4 }, import_react4.default.createElement("div", __spreadProps(__spreadValues({ id: $2, onClick: m2, className: H2 }, i2), { style: E2, ref: r4 }), import_react4.default.createElement("div", __spreadProps(__spreadValues({}, P2 && { role: R2 }), { className: p(C2) ? C2({ type: f2 }) : clsx_m_default2("Toastify__toast-body", C2), style: b2 }), null != D2 && import_react4.default.createElement("div", { className: clsx_m_default2("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !B2 }) }, D2), import_react4.default.createElement("div", null, u2)), Q2, import_react4.default.createElement(O, __spreadProps(__spreadValues({}, M2 && !S2 ? { key: `pb-${M2}` } : {}), { rtl: x2, theme: z2, delay: d2, isRunning: o2, isIn: P2, closeToast: h2, hide: g2, type: f2, style: N2, className: I2, controlledProgress: S2, progress: w2 || 0 }))));
};
var M = function(t2, e2) {
  return void 0 === e2 && (e2 = false), { enter: `Toastify--animate Toastify__${t2}-enter`, exit: `Toastify--animate Toastify__${t2}-exit`, appendPosition: e2 };
};
var R = h(M("bounce", true));
var w = h(M("slide", true));
var x = h(M("zoom"));
var $ = h(M("flip"));
var k = (0, import_react4.forwardRef)((e2, n2) => {
  const { getToastToRender: o2, containerRef: a2, isToastActive: r4 } = C(e2), { className: i2, style: l2, rtl: u2, containerId: d2 } = e2;
  function f2(t2) {
    const e3 = clsx_m_default2("Toastify__toast-container", `Toastify__toast-container--${t2}`, { "Toastify__toast-container--rtl": u2 });
    return p(i2) ? i2({ position: t2, rtl: u2, defaultClassName: e3 }) : clsx_m_default2(e3, m(i2));
  }
  return (0, import_react4.useEffect)(() => {
    n2 && (n2.current = a2.current);
  }, []), import_react4.default.createElement("div", { ref: a2, className: "Toastify", id: d2 }, o2((e3, n3) => {
    const o3 = n3.length ? __spreadValues({}, l2) : __spreadProps(__spreadValues({}, l2), { pointerEvents: "none" });
    return import_react4.default.createElement("div", { className: f2(e3), style: o3, key: `container-${e3}` }, n3.map((e4, o4) => {
      let { content: s2, props: a3 } = e4;
      return import_react4.default.createElement(N, __spreadProps(__spreadValues({}, a3), { isIn: r4(a3.toastId), style: __spreadProps(__spreadValues({}, a3.style), { "--nth": o4 + 1, "--len": n3.length }), key: `toast-${a3.key}` }), s2);
    }));
  }));
});
k.displayName = "ToastContainer", k.defaultProps = { position: "top-right", transition: R, autoClose: 5e3, closeButton: L, pauseOnHover: true, pauseOnFocusLoss: true, closeOnClick: true, draggable: true, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
var P;
var B = /* @__PURE__ */ new Map();
var D = [];
var A = 1;
function z() {
  return "" + A++;
}
function F(t2) {
  return t2 && (d(t2.toastId) || u(t2.toastId)) ? t2.toastId : z();
}
function H(t2, e2) {
  return B.size > 0 ? v.emit(0, t2, e2) : D.push({ content: t2, options: e2 }), e2.toastId;
}
function S(t2, e2) {
  return __spreadProps(__spreadValues({}, e2), { type: e2 && e2.type || t2, toastId: F(e2) });
}
function q(t2) {
  return (e2, n2) => H(e2, S(t2, n2));
}
function Q(t2, e2) {
  return H(t2, S("default", e2));
}
Q.loading = (t2, e2) => H(t2, S("default", __spreadValues({ isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false }, e2))), Q.promise = function(t2, e2, n2) {
  let o2, { pending: s2, error: a2, success: r4 } = e2;
  s2 && (o2 = d(s2) ? Q.loading(s2, n2) : Q.loading(s2.render, __spreadValues(__spreadValues({}, n2), s2)));
  const i2 = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l2 = (t3, e3, s3) => {
    if (null == e3) return void Q.dismiss(o2);
    const a3 = __spreadProps(__spreadValues(__spreadValues({ type: t3 }, i2), n2), { data: s3 }), r5 = d(e3) ? { render: e3 } : e3;
    return o2 ? Q.update(o2, __spreadValues(__spreadValues({}, a3), r5)) : Q(r5.render, __spreadValues(__spreadValues({}, a3), r5)), s3;
  }, c = p(t2) ? t2() : t2;
  return c.then((t3) => l2("success", r4, t3)).catch((t3) => l2("error", a2, t3)), c;
}, Q.success = q("success"), Q.info = q("info"), Q.error = q("error"), Q.warning = q("warning"), Q.warn = Q.warning, Q.dark = (t2, e2) => H(t2, S("default", __spreadValues({ theme: "dark" }, e2))), Q.dismiss = (t2) => {
  B.size > 0 ? v.emit(1, t2) : D = D.filter((e2) => null != t2 && e2.options.toastId !== t2);
}, Q.clearWaitingQueue = function(t2) {
  return void 0 === t2 && (t2 = {}), v.emit(5, t2);
}, Q.isActive = (t2) => {
  let e2 = false;
  return B.forEach((n2) => {
    n2.isToastActive && n2.isToastActive(t2) && (e2 = true);
  }), e2;
}, Q.update = function(t2, e2) {
  void 0 === e2 && (e2 = {}), setTimeout(() => {
    const n2 = (function(t3, e3) {
      let { containerId: n3 } = e3;
      const o2 = B.get(n3 || P);
      return o2 && o2.getToast(t3);
    })(t2, e2);
    if (n2) {
      const { props: o2, content: s2 } = n2, a2 = __spreadProps(__spreadValues(__spreadValues({ delay: 100 }, o2), e2), { toastId: e2.toastId || t2, updateId: z() });
      a2.toastId !== t2 && (a2.staleId = t2);
      const r4 = a2.render || s2;
      delete a2.render, H(r4, a2);
    }
  }, 0);
}, Q.done = (t2) => {
  Q.update(t2, { progress: 1 });
}, Q.onChange = (t2) => (v.on(4, t2), () => {
  v.off(4, t2);
}), Q.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Q.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, v.on(2, (t2) => {
  P = t2.containerId || t2, B.set(P, t2), D.forEach((t3) => {
    v.emit(0, t3.content, t3.options);
  }), D = [];
}).on(3, (t2) => {
  B.delete(t2.containerId || t2), 0 === B.size && v.off(0).off(1).off(5);
});

// trabecula/utils/client/toast.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var toast = {
  error: Q.error,
  info: Q.info,
  success: Q.success,
  warn: Q.warn
};
var Toaster = class {
  constructor() {
    __publicField(this, "toastTimeoutRef", null);
    __publicField(this, "toastRef", null);
  }
  toast(text, options) {
    const autoClose = (options == null ? void 0 : options.autoClose) === false ? false : (options == null ? void 0 : options.autoClose) || 1e3;
    clearTimeout(this.toastTimeoutRef);
    if (autoClose) this.toastTimeoutRef = setTimeout(() => this.toastRef = null, autoClose);
    if (this.toastRef)
      Q.update(this.toastRef, { autoClose, render: text, type: (options == null ? void 0 : options.type) || "info" });
    else this.toastRef = Q(() => text, { autoClose, type: (options == null ? void 0 : options.type) || "info" });
  }
};
var ToastContainer = (props) => {
  const { css: css2 } = useClasses(null);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    k,
    __spreadValues({
      autoClose: 2e3,
      className: css2.toast,
      hideProgressBar: true,
      icon: ({ type }) => {
        var _a, _b;
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon_default, { style: { color: colors.custom.white }, children: ((_b = (_a = STATUSES[type]) == null ? void 0 : _a.icon) != null ? _b : "Error").split(/(?=[A-Z])/).join("_").toLowerCase() });
      },
      limit: 3,
      pauseOnFocusLoss: false,
      position: "bottom-left",
      newestOnTop: true,
      style: { bottom: "3rem" }
    }, props)
  );
};
var STATUSES = {
  default: {
    color: colors.custom.blue,
    icon: "CircleNotifications"
  },
  error: {
    color: colors.custom.red,
    icon: "Error"
  },
  info: {
    color: colors.custom.blue,
    icon: "Info"
  },
  success: {
    color: colors.custom.green,
    icon: "CheckCircle"
  },
  warning: {
    color: colors.custom.orange,
    icon: "NewReleases"
  }
};
var useClasses = makeClasses({
  toast: {
    "& .Toastify__toast": {
      border: "none",
      color: colors.custom.white,
      "&-body": {
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.1em",
        fontWeight: 400,
        whiteSpace: "break-spaces"
      },
      "&-icon": { marginRight: "1em" },
      "&--default": { backgroundColor: STATUSES.default.color },
      "&--error": { backgroundColor: STATUSES.error.color },
      "&--info": { backgroundColor: STATUSES.info.color },
      "&--success": { backgroundColor: STATUSES.success.color },
      "&--warning": { backgroundColor: STATUSES.warning.color },
      "& .Toastify__close-button": {
        margin: 0,
        lineHeight: 1,
        color: colors.custom.lightGrey,
        "&:hover": {
          backgroundColor: "transparent",
          color: colors.custom.red
        }
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToastContainer,
  Toaster,
  asyncAction,
  attachTouchedTracker,
  clearTouched,
  colors,
  copyToClipboard,
  derefMobx,
  getMobx,
  initMobx,
  makeBorderRadiuses,
  makeBorders,
  makeClasses,
  makeMargins,
  makePadding,
  makeQueue,
  makeTouchedProp,
  toast,
  triggerAllTouched,
  useDragScroll,
  useElementResize,
  useForceUpdate,
  useLazyLoad,
  validateProp
});
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react-is/cjs/react-is.production.js:
  (**
   * @license React
   * react-is.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/styled-engine/index.js:
  (**
   * @mui/styled-engine v5.18.0
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/base/index.js:
  (**
   * @mui/base v5.0.0-beta.5
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/material/index.js:
  (**
   * @mui/material v5.13.6
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map