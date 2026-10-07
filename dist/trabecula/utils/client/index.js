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
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k) => it[k] = (x) => obj[k](x);
  } else {
    obj = obj.call(value);
    method = (k) => it[k] = (v) => {
      if (isAwait) {
        isAwait = false;
        if (k === "throw") throw v;
        return v;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve) => {
          var x = obj[k](v);
          if (!(x instanceof Object)) __typeError("Object expected");
          resolve(x);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
    throw x;
  }, "return" in obj && method("return"), it;
};

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
  useDeepEffect: () => useDeepEffect,
  useDeepMemo: () => useDeepMemo,
  useDragScroll: () => useDragScroll,
  useElementResize: () => useElementResize,
  useForceUpdate: () => useForceUpdate,
  useLazyLoad: () => useLazyLoad,
  usePaginatedList: () => usePaginatedList,
  validateProp: () => validateProp
});
module.exports = __toCommonJS(client_exports);

// trabecula/utils/client/css.ts
var import_material = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_color = __toESM(require("color"));
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
var { makeStyles } = (0, import_tss_react.createMakeAndWithStyles)({ useTheme: import_styles.useTheme });
var makeClasses = (fnOrObj) => {
  return (params) => {
    const { classes: css, cx } = makeStyles()(
      (props, theme) => typeof fnOrObj === "function" ? fnOrObj(theme, props) : fnOrObj
    )(params);
    return { css, cx };
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
  mui: import_material.colors,
  tagCategories
};

// trabecula/utils/client/hooks.ts
var import_react = require("react");
var import_mobx = require("mobx");
var import_mobx_keystone = require("mobx-keystone");

// trabecula/utils/common/arrays.ts
var chunkArray = (arr, size) => [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));

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
var IMAGE_EXTS_UNCOMMON = ["apng", "avif", "bmp", "jfif", "jif", "jiff", "svg", "tiff"];
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
var WEB_VIDEO_CODECS = ["h264", "hevc", "vp8", "vp9", "theora", "av1"];
var WEB_VIDEO_EXTS = ["mp4", "webm", "ogv", "wav"];
var DENSE_FORM_ROW_HEIGHT = "1.8rem";
var FORM_ROW_HEIGHT = "2.25rem";
var _CONSTANTS = {
  AUDIO: {
    CODECS: AUDIO_CODECS,
    CODECS_COMMON: AUDIO_CODECS_COMMON,
    CODECS_UNCOMMON: AUDIO_CODECS_UNCOMMON
  },
  IMAGE: {
    EXTS: IMAGE_EXTS,
    EXTS_COMMON: IMAGE_EXTS_COMMON,
    EXTS_UNCOMMON: IMAGE_EXTS_UNCOMMON
  },
  TOOLTIP: {
    ENTER_DELAY: 1e3,
    ENTER_NEXT_DELAY: 500
  },
  VIDEO: {
    CODECS: VIDEO_CODECS,
    CODECS_COMMON: VIDEO_CODECS_COMMON,
    CODECS_UNCOMMON: VIDEO_CODECS_UNCOMMON,
    EXTS: VIDEO_EXTS,
    EXTS_COMMON: VIDEO_EXTS_COMMON,
    EXTS_UNCOMMON: VIDEO_EXTS_UNCOMMON
  },
  WEB_VIDEO: {
    CODECS: WEB_VIDEO_CODECS,
    EXTS: WEB_VIDEO_EXTS
  }
};

// trabecula/utils/common/date-and-time.ts
var import_dayjs = __toESM(require("dayjs"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_duration = __toESM(require("dayjs/plugin/duration"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.extend(import_utc.default);

// trabecula/utils/common/math.ts
var LOGICAL_OPS = ["=", "!=", ">", ">=", "<", "<="];

// trabecula/utils/common/miscellaneous.ts
var import_es_toolkit = require("es-toolkit");
var import_compat = require("es-toolkit/compat");
var deepClone = import_es_toolkit.cloneDeep;
var deepMerge = import_es_toolkit.toMerged;
var handleErrors = (fn) => __async(null, null, function* () {
  var _a;
  try {
    return { data: yield fn(), success: true };
  } catch (err) {
    const errorStr = (_a = err == null ? void 0 : err.message) != null ? _a : String(err);
    console.error(errorStr);
    return { error: errorStr, success: false };
  }
});
var isDeepEqual = import_es_toolkit.isEqual;

// trabecula/utils/client/hooks.ts
var getComparisonValue = (value) => (0, import_mobx_keystone.isTreeNode)(value) ? (0, import_mobx_keystone.getSnapshot)(value) : (0, import_mobx.isObservable)(value) ? (0, import_mobx.toJS)(value) : value;
var useDeepEffect = (cb, deps) => {
  const dependencies = useDeepMemo(deps.map(getComparisonValue));
  (0, import_react.useEffect)(cb, [dependencies]);
};
var useDeepMemo = (value) => {
  const comparisonValue = getComparisonValue(value);
  const comparisonRef = (0, import_react.useRef)();
  const depRef = (0, import_react.useRef)(0);
  const valueRef = (0, import_react.useRef)(value);
  if (!isDeepEqual(comparisonValue, comparisonRef.current)) {
    comparisonRef.current = deepClone(comparisonValue);
    depRef.current += 1;
    valueRef.current = value;
  }
  return (0, import_react.useMemo)(() => valueRef.current, [depRef.current]);
};
var useElementResize = (ref, condition) => {
  const [dimensions, setDimensions] = (0, import_react.useState)({ height: 0, left: 0, top: 0, width: 0 });
  (0, import_react.useEffect)(() => {
    const nodeRef = ref == null ? void 0 : ref.current;
    const handleResize = () => {
      var _a;
      const rect = (_a = nodeRef == null ? void 0 : nodeRef.getBoundingClientRect) == null ? void 0 : _a.call(nodeRef);
      const next = {
        height: (nodeRef == null ? void 0 : nodeRef.offsetHeight) || 0,
        left: (rect == null ? void 0 : rect.left) || 0,
        top: (rect == null ? void 0 : rect.top) || 0,
        width: (nodeRef == null ? void 0 : nodeRef.offsetWidth) || 0
      };
      setDimensions(
        (prev) => prev.height === next.height && prev.left === next.left && prev.top === next.top && prev.width === next.width ? prev : next
      );
    };
    const observer2 = new ResizeObserver(handleResize);
    if (nodeRef) {
      handleResize();
      observer2.observe(nodeRef, { box: "border-box" });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      observer2.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, condition]);
  return dimensions;
};
var useForceUpdate = () => {
  const [, setTick] = (0, import_react.useState)(0);
  return (0, import_react.useCallback)(() => setTick((tick) => tick + 1), []);
};
var useLazyLoad = (containerRef, options) => {
  const [isVisible, setIsVisible] = (0, import_react.useState)(false);
  const observerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
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
var copyToClipboard = (value, message) => __async(null, null, function* () {
  try {
    yield navigator.clipboard.writeText(value);
    if (message) toast.info(message);
  } catch (e) {
    toast.error("Failed to copy to clipboard");
  }
});

// trabecula/utils/client/mobx.ts
var mobxKeystoneBindings = null;
var initMobx = (bindings) => mobxKeystoneBindings = bindings;
var getMobx = () => {
  if (!mobxKeystoneBindings) throw new Error("Call initMobx() at app startup");
  return mobxKeystoneBindings;
};

// trabecula/utils/client/pagination.ts
var import_react2 = require("react");
var usePaginatedList = (loadPage, { pollIntervalMs = 0 } = {}) => {
  const [error, setError] = (0, import_react2.useState)("");
  const [isLoading, setIsLoading] = (0, import_react2.useState)(true);
  const [items, setItems] = (0, import_react2.useState)([]);
  const [page, setPage] = (0, import_react2.useState)(1);
  const [pageCount, setPageCount] = (0, import_react2.useState)(1);
  const [revision, setRevision] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    const controller = new AbortController();
    let timer;
    setIsLoading(true);
    setError("");
    const load = () => __async(null, null, function* () {
      var _a;
      try {
        const result = yield loadPage(page, controller.signal);
        if (!controller.signal.aborted) {
          const count = Math.max(1, result.pageCount);
          setError("");
          setPageCount(count);
          if (page > count) setPage(count);
          else setItems(result.items);
        }
      } catch (error2) {
        if (!controller.signal.aborted) setError((_a = error2 == null ? void 0 : error2.message) != null ? _a : String(error2));
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
          if (pollIntervalMs > 0) timer = setTimeout(load, pollIntervalMs);
        }
      }
    });
    load();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [loadPage, page, pollIntervalMs, revision]);
  const refresh = () => setRevision((value) => value + 1);
  return { error, isLoading, items, page, pageCount, refresh, setError, setPage };
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
  return new Promise((resolve, reject) => {
    const totalCount = items.length;
    let completedCount = 0;
    let completion;
    let hasError = false;
    let isComplete = false;
    const getToastText = () => `${logPrefix} ${completedCount} / ${totalCount} ${logSuffix}${isComplete ? "." : "..."}`;
    const toaster = new Toaster();
    const complete = () => {
      if (!completion) {
        isComplete = true;
        updateProgress();
        completion = Promise.resolve().then(() => onComplete == null ? void 0 : onComplete(hasError)).then(() => resolve(), reject);
      }
      return completion;
    };
    const onEscape = () => {
      queue.cancel();
      return complete();
    };
    const updateProgress = () => {
      toaster.toast(getToastText(), {
        autoClose: isComplete ? 3e3 : false,
        type: isComplete ? hasError ? "error" : "success" : "info"
      });
      if (withTabTitle)
        document.title = isComplete ? hasError ? "\u274C Error!" : "\u2705 Done!" : `[${completedCount}/${totalCount}] Downloading`;
    };
    updateProgress();
    if (!totalCount) complete();
    else {
      for (const item of items) {
        queue.add(() => action(item, onEscape)).catch((error) => {
          var _a;
          if (!isComplete) {
            hasError = true;
            console.error(error);
            toast.error((_a = error == null ? void 0 : error.message) != null ? _a : String(error));
          }
        }).finally(() => {
          if (!isComplete) {
            completedCount++;
            if (completedCount >= totalCount) complete();
            else updateProgress();
          }
        });
      }
    }
  });
};

// trabecula/utils/client/scrolling.ts
var import_react3 = require("react");
var useDragScroll = ({
  listOuterRef,
  listRef,
  momentum = 0.8,
  scrollLeft,
  width
}) => {
  const dragDirection = (0, import_react3.useRef)(null);
  const dragResetTimeout = (0, import_react3.useRef)(null);
  const initialMouseX = (0, import_react3.useRef)(null);
  const momentumId = (0, import_react3.useRef)(null);
  const removeDragListeners = (0, import_react3.useRef)(null);
  const scrollFinal = (0, import_react3.useRef)(0);
  const scrollStart = (0, import_react3.useRef)(0);
  const velocity = (0, import_react3.useRef)(0);
  const [isDragging, setIsDragging] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    return () => {
      var _a;
      clearTimeout(dragResetTimeout.current);
      cancelAnimationFrame(momentumId.current);
      (_a = removeDragListeners.current) == null ? void 0 : _a.call(removeDragListeners);
    };
  }, []);
  const handleMouseDown = (event) => {
    var _a;
    if (!listRef.current || event.button !== 0) return;
    clearTimeout(dragResetTimeout.current);
    (_a = removeDragListeners.current) == null ? void 0 : _a.call(removeDragListeners);
    setIsDragging(false);
    initialMouseX.current = event.clientX;
    scrollStart.current = scrollLeft.current;
    velocity.current = 0;
    cancelMomentumTracking();
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    removeDragListeners.current = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
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
    if (Math.abs(velocity.current) > 5) setIsDragging(true);
  };
  const mouseUpHandler = () => {
    var _a;
    scrollFinal.current = scrollLeft.current;
    if (Math.abs(scrollFinal.current - scrollStart.current) > 5) {
      velocity.current = Math.max(Math.abs(velocity.current), 30) * (dragDirection.current === "right" ? -1 : 1);
      beginMomentumTracking();
    }
    dragResetTimeout.current = setTimeout(() => setIsDragging(false), 0);
    (_a = removeDragListeners.current) == null ? void 0 : _a.call(removeDragListeners);
    removeDragListeners.current = null;
  };
  const validateScrollLeft = (newScrollLeft) => {
    var _a;
    return newScrollLeft >= 0 && newScrollLeft <= ((_a = listOuterRef.current) == null ? void 0 : _a.scrollWidth) - width * 0.8;
  };
  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    momentumId.current = requestAnimationFrame(momentumLoop);
  };
  const cancelMomentumTracking = () => cancelAnimationFrame(momentumId.current);
  const momentumLoop = () => {
    const newScrollLeft = scrollLeft.current + velocity.current;
    const isScrollValid = validateScrollLeft(newScrollLeft);
    if (!isScrollValid || !listRef.current) return;
    listRef.current.scrollTo(newScrollLeft);
    velocity.current *= momentum;
    if (Math.abs(velocity.current) > 0.5) momentumId.current = requestAnimationFrame(momentumLoop);
  };
  return { handleMouseDown, isDragging };
};

// trabecula/utils/client/store.ts
var import_mobx_keystone2 = require("mobx-keystone");
var asyncAction = (fn) => {
  const { _async, _await } = getMobx();
  return _async(function* (input) {
    if (typeof fn !== "function") throw new Error("Provided function is not a function");
    const boundFn = fn.bind(this);
    return yield* __yieldStar(_await(handleErrors(() => boundFn(input))));
  });
};
var attachTouchedTracker = (model) => {
  const { onPatches } = getMobx();
  onPatches(model, (patches) => {
    const touched = model._touched;
    for (const p of patches) {
      if (p.path.length !== 1) continue;
      const key = p.path[0];
      if (key === "_touched" || touched[key]) continue;
      touched[key] = true;
    }
  });
};
var clearTouched = (model, keys) => {
  for (const k of keys) model._touched[k] = false;
};
var derefMobx = (value) => {
  const { getSnapshot: getSnapshot2, isTreeNode: isTreeNode2 } = getMobx();
  if (value === null || typeof value !== "object") return value;
  else if (isTreeNode2(value)) return getSnapshot2(value);
  else if (Array.isArray(value)) {
    const len = value.length;
    let changed = false;
    const out = new Array(len);
    for (let i = 0; i < len; i++) {
      const v = derefMobx(value[i]);
      if (v !== value[i]) changed = true;
      out[i] = v;
    }
    return changed ? out : value;
  } else {
    let changed = false;
    const out = {};
    for (const k in value) {
      const v = derefMobx(value[k]);
      if (v !== value[k]) changed = true;
      out[k] = v;
    }
    return changed ? out : value;
  }
};
var makeTouchedProp = () => ({
  _touched: (0, import_mobx_keystone2.prop)(() => ({}))
});
var triggerAllTouched = (model) => {
  const touched = model._touched;
  for (const k in touched) touched[k] = true;
};
var validateProp = (store, field, validator) => {
  var _a;
  if (!((_a = store._touched) == null ? void 0 : _a[field])) return "";
  return validator() || "";
};

// trabecula/utils/client/toast.tsx
var import_react_toastify = require("react-toastify");

// trabecula/components/comp.tsx
var import_react4 = require("react");
var import_mobx_react_lite = require("mobx-react-lite");
function Comp(component) {
  const Wrapped = (0, import_react4.forwardRef)((props, ref) => component(props, ref));
  return (0, import_mobx_react_lite.observer)(Wrapped);
}

// trabecula/components/activity/activity-modal.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ActivityModal = Comp(
  ({
    children,
    error,
    isEmpty,
    isLoading,
    onClose,
    onPageChange,
    onRefresh,
    page,
    pageCount,
    title = "Activity Log"
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal.Container, { onClose, height: "90%", width: "90%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { preset: "title", children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal.Content, { flex: 1, minHeight: 0, minWidth: 0, overflow: "hidden auto", spacing: "0.5rem", children: [
      error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { color: colors.custom.red, overflowWrap: "anywhere", whiteSpace: "pre-wrap", children: error }),
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Loading background operations..." }),
      !isLoading && !error && isEmpty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "No background operations." }),
      children
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { inline: true, count: pageCount, page, onChange: onPageChange, siblingCount: 2 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { text: "Refresh", icon: "Refresh", onClick: onRefresh, disabled: isLoading }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { text: "Close", icon: "Close", onClick: onClose })
    ] })
  ] })
);

// trabecula/components/activity/operation-card.tsx
var import_material2 = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ActivityOperationCard = Comp(
  ({
    children,
    controls,
    dateText,
    error,
    icon,
    isActive,
    label,
    message,
    processedCount,
    statusColor,
    statusText,
    totalCount
  }) => {
    const { css } = useClasses(null);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      Card,
      {
        bgColor: colors.background,
        flex: "none",
        minWidth: 0,
        padding: { all: "0.6rem" },
        spacing: "0.4rem",
        width: "100%",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(View, { row: true, align: "center", justify: "space-between", spacing: "1rem", wrap: "wrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(View, { row: true, flex: 1, align: "center", minWidth: 0, spacing: "0.5rem", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { color: statusColor, name: icon }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, { minWidth: 0, overflowWrap: "anywhere", whiteSpace: "normal", children: label })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(View, { row: true, align: "center", spacing: "0.75rem", wrap: "wrap", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, { color: statusColor, fontSize: "0.8em", whiteSpace: "nowrap", children: statusText }),
              controls
            ] })
          ] }),
          isActive && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_material2.LinearProgress,
            {
              value: totalCount > 0 ? Math.min(100, Math.max(0, processedCount / totalCount * 100)) : 0,
              variant: totalCount > 0 ? "determinate" : "indeterminate"
            }
          ),
          (error || message) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(View, { maxHeight: "12rem", minWidth: 0, overflow: "hidden auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Text,
            {
              className: css.message,
              color: error ? colors.custom.red : colors.custom.lightGrey,
              fontSize: "0.8em",
              minWidth: 0,
              overflowWrap: "anywhere",
              whiteSpace: "pre-wrap",
              children: error != null ? error : message
            }
          ) }),
          dateText && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, { color: colors.custom.lightGrey, flex: "none", fontSize: "0.8em", whiteSpace: "normal", children: dateText }),
          children
        ]
      }
    );
  }
);
var useClasses = makeClasses({
  message: { userSelect: "text" }
});

// trabecula/components/buttons/button.tsx
var import_material3 = require("@mui/material");
var import_color2 = __toESM(require("color"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, {
    borderColorOnHover,
    borderRadiuses = { all: "0.3rem" },
    borders,
    boxShadow,
    className,
    color = colors.custom.grey,
    colorOnHover,
    dense = false,
    endNode,
    fontFamily,
    fontSize = "1.15em",
    fontWeight = 400,
    height,
    href,
    icon,
    iconProps,
    iconRight,
    iconSize = "1.15em",
    justify = "center",
    loading = false,
    margins,
    maxWidth,
    onClick,
    outlined = false,
    outlineFill = "transparent",
    outlineFillOnHover,
    padding,
    size = "small",
    startNode,
    text,
    textClassName,
    textColor,
    textColorOnHover,
    textProps = {},
    textTransform = "none",
    tooltip,
    tooltipProps,
    type = "button",
    underline = type === "link" ? "hover" : "none",
    variant = "contained",
    whiteSpace = "nowrap",
    width
  } = _b, props = __objRest(_b, [
    "borderColorOnHover",
    "borderRadiuses",
    "borders",
    "boxShadow",
    "className",
    "color",
    "colorOnHover",
    "dense",
    "endNode",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "height",
    "href",
    "icon",
    "iconProps",
    "iconRight",
    "iconSize",
    "justify",
    "loading",
    "margins",
    "maxWidth",
    "onClick",
    "outlined",
    "outlineFill",
    "outlineFillOnHover",
    "padding",
    "size",
    "startNode",
    "text",
    "textClassName",
    "textColor",
    "textColorOnHover",
    "textProps",
    "textTransform",
    "tooltip",
    "tooltipProps",
    "type",
    "underline",
    "variant",
    "whiteSpace",
    "width"
  ]);
  const isAnchor = !!href;
  const isLinkDisplay = type === "link";
  const defaultPadding = isLinkDisplay ? "0" : dense ? "0 0.5rem" : !text ? "0.3rem" : "0.3rem 0.7rem";
  const defaultHeight = !isLinkDisplay && dense ? DENSE_FORM_ROW_HEIGHT : void 0;
  const resolvedTextColor = textColor != null ? textColor : outlined ? color : isLinkDisplay ? colors.custom.lightBlue : colors.custom.white;
  const resolvedTextColorOnHover = textColorOnHover != null ? textColorOnHover : colorOnHover && outlined ? colorOnHover : resolvedTextColor;
  const { css, cx } = useClasses2({
    borderColorOnHover,
    borderRadiuses,
    borders,
    boxShadow,
    color,
    colorOnHover,
    height: height != null ? height : defaultHeight,
    isLinkDisplay,
    justify,
    margins,
    maxWidth,
    outlined,
    outlineFill,
    outlineFillOnHover,
    padding: __spreadValues({ all: defaultPadding }, padding),
    textColor: resolvedTextColor,
    textColorOnHover: resolvedTextColorOnHover,
    textTransform,
    underline,
    whiteSpace,
    width
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_material3.Button,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, props), {
      size,
      variant
    }), isAnchor ? { component: "a", href } : {}), {
      onClick,
      className: cx(css.root, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LoadingOverlay, { isLoading: loading }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(View, { row: true, justify, spacing: "0.3rem", height: "100%", width: "100%", children: [
          startNode,
          icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, __spreadValues({ name: icon, size: iconSize }, iconProps)),
          typeof text === "string" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            Text,
            __spreadProps(__spreadValues({
              fontFamily,
              fontSize,
              fontWeight,
              textTransform
            }, textProps), {
              className: cx(css.text, className, textClassName, textProps.className),
              children: text
            })
          ) : text,
          iconRight && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, __spreadValues({ name: iconRight, size: iconSize }, iconProps)),
          endNode
        ] })
      ]
    })
  ) });
};
var useClasses2 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const bgColor = props.outlined ? props.outlineFill : props.isLinkDisplay ? "transparent" : props.color;
  const bgColorOnHover = props.isLinkDisplay ? "transparent" : props.outlined ? (_a = props.outlineFillOnHover) != null ? _a : (0, import_color2.default)(props.outlineFill).lighten(0.1).string() : (_b = props.colorOnHover) != null ? _b : (0, import_color2.default)(props.color).lighten(0.1).string();
  const borderColor = props.outlined ? props.color : "transparent";
  const borderColorOnHover = (_c = props.borderColorOnHover) != null ? _c : props.outlined && props.colorOnHover ? props.colorOnHover : void 0;
  const linkPadding = props.isLinkDisplay && !((_d = props.padding) == null ? void 0 : _d.all) ? 0 : void 0;
  const textColor = props.textColor;
  const textColorOnHover = props.textColorOnHover;
  const textDecoration = props.underline === "always" ? "underline" : "none";
  const textDecorationOnHover = props.underline === "none" ? "none" : "underline";
  return {
    root: __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: props.justify,
      alignItems: "center"
    }, makeBorderRadiuses(props.borderRadiuses)), makeBorders(__spreadValues({ all: `1px solid ${borderColor}` }, props.borders))), makeMargins(props.margins)), {
      padding: (_e = props.padding) == null ? void 0 : _e.all,
      paddingTop: (_g = (_f = props.padding) == null ? void 0 : _f.top) != null ? _g : linkPadding,
      paddingBottom: (_i = (_h = props.padding) == null ? void 0 : _h.bottom) != null ? _i : linkPadding,
      paddingRight: (_k = (_j = props.padding) == null ? void 0 : _j.right) != null ? _k : linkPadding,
      paddingLeft: (_m = (_l = props.padding) == null ? void 0 : _l.left) != null ? _m : linkPadding,
      maxWidth: props.maxWidth,
      minWidth: "fit-content",
      height: props.height,
      width: props.width,
      backgroundColor: bgColor,
      boxShadow: (_n = props.boxShadow) != null ? _n : "none",
      color: textColor,
      textDecoration,
      textTransform: props.textTransform,
      overflow: "hidden",
      "&:active": {
        color: textColor,
        textDecoration
      },
      "&:link": {
        color: textColor
      },
      "&:hover, &:link:hover, &:visited:hover": {
        backgroundColor: bgColorOnHover,
        borderColor: borderColorOnHover,
        color: textColorOnHover,
        boxShadow: (_o = props.boxShadow) != null ? _o : props.isLinkDisplay ? "none" : void 0,
        textDecoration: `${textDecorationOnHover} !important`
      },
      "&:visited": {
        color: textColor,
        textDecoration
      }
    }),
    text: {
      alignSelf: "center",
      lineHeight: 1.1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "all 100ms ease-in-out",
      textTransform: props.textTransform,
      whiteSpace: props.whiteSpace
    }
  };
});

// trabecula/components/buttons/button-with-inset.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var ButtonWithInset = Comp(
  (_a) => {
    var _b = _a, { insetText, insetWidth = "2.5rem" } = _b, props = __objRest(_b, ["insetText", "insetWidth"]);
    const { css } = useClasses3({ insetWidth });
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Button,
      __spreadValues({
        startNode: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(View, { column: true, className: css.insetContainer, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { fontSize: "0.7em", children: insetText }) }),
        justify: "flex-start",
        width: "100%",
        padding: { all: 0 }
      }, props)
    );
  }
);
var useClasses3 = makeClasses((props) => ({
  insetContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.5rem",
    padding: "0.5rem 0.4rem 0.5rem 0.5rem",
    width: props.insetWidth,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    "& > span": {
      whiteSpace: "nowrap",
      cursor: "pointer"
    }
  }
}));

// trabecula/components/buttons/color-picker.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var ColorPicker = Comp(
  (_a) => {
    var _b = _a, {
      color = colors.custom.black,
      label = "Color",
      menuProps = {},
      noIcon = false,
      setValue,
      swatches = [],
      value,
      viewProps = {},
      width = "fit-content"
    } = _b, buttonProps = __objRest(_b, [
      "color",
      "label",
      "menuProps",
      "noIcon",
      "setValue",
      "swatches",
      "value",
      "viewProps",
      "width"
    ]);
    const handleNoColor = () => setValue(null);
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(View, { row: true, spacing: "0.5rem", align: "center", children: [
          noIcon ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(View, {}) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { name: "Palette", size: "1.15em" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { name: "Circle", color: value === null ? "transparent" : value })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        Button,
        {
          text: "No Color",
          icon: "Close",
          onClick: handleNoColor,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(View, { column: true, children: swatches.map((swatch, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(View, { row: true, children: swatch.map((c) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        IconButton,
        {
          name: "Circle",
          iconProps: { color: c, size: "1.4em" },
          sx: { border: `3px solid ${value === c ? c : "transparent"}` },
          onClick: () => setValue(c)
        },
        c
      )) }, i)) })
    ] })) }));
  }
);

// trabecula/components/buttons/icon.tsx
var import_material4 = require("@mui/material");
var import_jsx_runtime6 = require("react/jsx-runtime");
var IconButton = (_a) => {
  var _b = _a, {
    children,
    className,
    color,
    disabled,
    iconProps = {},
    margins,
    name,
    onClick,
    padding = {},
    size,
    tooltip,
    tooltipProps
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "color",
    "disabled",
    "iconProps",
    "margins",
    "name",
    "onClick",
    "padding",
    "size",
    "tooltip",
    "tooltipProps"
  ]);
  const { css, cx } = useClasses4({ disabled, margins, padding });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_material4.IconButton,
    __spreadProps(__spreadValues({}, props), {
      disabled,
      onClick,
      size,
      className: cx(css.root, className),
      children: [
        name && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, __spreadProps(__spreadValues({}, iconProps), { color: color != null ? color : iconProps.color, name })),
        children
      ]
    })
  ) });
};
var useClasses4 = makeClasses((props) => ({
  root: __spreadProps(__spreadValues(__spreadValues({}, makeMargins(props.margins)), makePadding(props.padding)), {
    opacity: props.disabled ? 0.5 : 1,
    transition: "all 100ms ease-in-out"
  })
}));

// trabecula/components/buttons/icon-picker.tsx
var import_react5 = require("react");
var import_material5 = require("@mui/material");

// trabecula/_generated/client/icons.ts
var COUNTRY_FLAG_LIGATURES = {
  FlagAd: "flag_ad",
  FlagAe: "flag_ae",
  FlagAf: "flag_af",
  FlagAfghanistan: "flag_afghanistan",
  FlagAg: "flag_ag",
  FlagAi: "flag_ai",
  FlagAl: "flag_al",
  FlagAlandIslands: "flag_aland_islands",
  FlagAlbania: "flag_albania",
  FlagAlgeria: "flag_algeria",
  FlagAm: "flag_am",
  FlagAmericanSamoa: "flag_american_samoa",
  FlagAndorra: "flag_andorra",
  FlagAngola: "flag_angola",
  FlagAnguilla: "flag_anguilla",
  FlagAntarctica: "flag_antarctica",
  FlagAntiguaAndBarbuda: "flag_antigua_and_barbuda",
  FlagAo: "flag_ao",
  FlagAq: "flag_aq",
  FlagAr: "flag_ar",
  FlagArgentina: "flag_argentina",
  FlagArmenia: "flag_armenia",
  FlagAruba: "flag_aruba",
  FlagAs: "flag_as",
  FlagAt: "flag_at",
  FlagAu: "flag_au",
  FlagAustralia: "flag_australia",
  FlagAustria: "flag_austria",
  FlagAw: "flag_aw",
  FlagAx: "flag_ax",
  FlagAz: "flag_az",
  FlagAzerbaijan: "flag_azerbaijan",
  FlagBa: "flag_ba",
  FlagBahamas: "flag_bahamas",
  FlagBahrain: "flag_bahrain",
  FlagBangladesh: "flag_bangladesh",
  FlagBarbados: "flag_barbados",
  FlagBb: "flag_bb",
  FlagBd: "flag_bd",
  FlagBe: "flag_be",
  FlagBelarus: "flag_belarus",
  FlagBelgium: "flag_belgium",
  FlagBelize: "flag_belize",
  FlagBenin: "flag_benin",
  FlagBermuda: "flag_bermuda",
  FlagBf: "flag_bf",
  FlagBg: "flag_bg",
  FlagBh: "flag_bh",
  FlagBhutan: "flag_bhutan",
  FlagBi: "flag_bi",
  FlagBj: "flag_bj",
  FlagBl: "flag_bl",
  FlagBm: "flag_bm",
  FlagBn: "flag_bn",
  FlagBo: "flag_bo",
  FlagBolivia: "flag_bolivia",
  FlagBonaireSintEustatiusAndSaba: "flag_bonaire_sint_eustatius_and_saba",
  FlagBosniaAndHerzegovina: "flag_bosnia_and_herzegovina",
  FlagBotswana: "flag_botswana",
  FlagBouvetIsland: "flag_bouvet_island",
  FlagBq: "flag_bq",
  FlagBr: "flag_br",
  FlagBrazil: "flag_brazil",
  FlagBritishIndianOceanTerritory: "flag_british_indian_ocean_territory",
  FlagBruneiDarussalam: "flag_brunei_darussalam",
  FlagBs: "flag_bs",
  FlagBt: "flag_bt",
  FlagBulgaria: "flag_bulgaria",
  FlagBurkinaFaso: "flag_burkina_faso",
  FlagBurundi: "flag_burundi",
  FlagBv: "flag_bv",
  FlagBw: "flag_bw",
  FlagBy: "flag_by",
  FlagBz: "flag_bz",
  FlagCa: "flag_ca",
  FlagCaboVerde: "flag_cabo_verde",
  FlagCambodia: "flag_cambodia",
  FlagCameroon: "flag_cameroon",
  FlagCanada: "flag_canada",
  FlagCaymanIslands: "flag_cayman_islands",
  FlagCc: "flag_cc",
  FlagCd: "flag_cd",
  FlagCentralAfricanRepublic: "flag_central_african_republic",
  FlagCf: "flag_cf",
  FlagCg: "flag_cg",
  FlagCh: "flag_ch",
  FlagChad: "flag_chad",
  FlagChile: "flag_chile",
  FlagChina: "flag_china",
  FlagChristmasIsland: "flag_christmas_island",
  FlagCi: "flag_ci",
  FlagCk: "flag_ck",
  FlagCl: "flag_cl",
  FlagCm: "flag_cm",
  FlagCn: "flag_cn",
  FlagCo: "flag_co",
  FlagCocosKeelingIslands: "flag_cocos_keeling_islands",
  FlagColombia: "flag_colombia",
  FlagComoros: "flag_comoros",
  FlagCookIslands: "flag_cook_islands",
  FlagCostaRica: "flag_costa_rica",
  FlagCoteDIvoire: "flag_cote_d_ivoire",
  FlagCr: "flag_cr",
  FlagCroatia: "flag_croatia",
  FlagCu: "flag_cu",
  FlagCuba: "flag_cuba",
  FlagCuracao: "flag_curacao",
  FlagCv: "flag_cv",
  FlagCw: "flag_cw",
  FlagCx: "flag_cx",
  FlagCy: "flag_cy",
  FlagCyprus: "flag_cyprus",
  FlagCz: "flag_cz",
  FlagCzechRepublic: "flag_czech_republic",
  FlagDe: "flag_de",
  FlagDemocraticRepublicOfTheCongo: "flag_democratic_republic_of_the_congo",
  FlagDenmark: "flag_denmark",
  FlagDj: "flag_dj",
  FlagDjibouti: "flag_djibouti",
  FlagDk: "flag_dk",
  FlagDm: "flag_dm",
  FlagDo: "flag_do",
  FlagDominica: "flag_dominica",
  FlagDominicanRepublic: "flag_dominican_republic",
  FlagDz: "flag_dz",
  FlagEc: "flag_ec",
  FlagEcuador: "flag_ecuador",
  FlagEe: "flag_ee",
  FlagEg: "flag_eg",
  FlagEgypt: "flag_egypt",
  FlagEh: "flag_eh",
  FlagElSalvador: "flag_el_salvador",
  FlagEngland: "flag_england",
  FlagEquatorialGuinea: "flag_equatorial_guinea",
  FlagEr: "flag_er",
  FlagEritrea: "flag_eritrea",
  FlagEs: "flag_es",
  FlagEstonia: "flag_estonia",
  FlagEswatini: "flag_eswatini",
  FlagEt: "flag_et",
  FlagEthiopia: "flag_ethiopia",
  FlagFalklandIslands: "flag_falkland_islands",
  FlagFaroeIslands: "flag_faroe_islands",
  FlagFederatedStatesOfMicronesia: "flag_federated_states_of_micronesia",
  FlagFi: "flag_fi",
  FlagFiji: "flag_fiji",
  FlagFinland: "flag_finland",
  FlagFj: "flag_fj",
  FlagFk: "flag_fk",
  FlagFm: "flag_fm",
  FlagFo: "flag_fo",
  FlagFr: "flag_fr",
  FlagFrance: "flag_france",
  FlagFrenchGuiana: "flag_french_guiana",
  FlagFrenchPolynesia: "flag_french_polynesia",
  FlagFrenchSouthernTerritories: "flag_french_southern_territories",
  FlagGa: "flag_ga",
  FlagGabon: "flag_gabon",
  FlagGambia: "flag_gambia",
  FlagGb: "flag_gb",
  FlagGbEng: "flag_gb_eng",
  FlagGbSct: "flag_gb_sct",
  FlagGbWls: "flag_gb_wls",
  FlagGd: "flag_gd",
  FlagGe: "flag_ge",
  FlagGeorgia: "flag_georgia",
  FlagGermany: "flag_germany",
  FlagGf: "flag_gf",
  FlagGg: "flag_gg",
  FlagGh: "flag_gh",
  FlagGhana: "flag_ghana",
  FlagGi: "flag_gi",
  FlagGibraltar: "flag_gibraltar",
  FlagGl: "flag_gl",
  FlagGm: "flag_gm",
  FlagGn: "flag_gn",
  FlagGp: "flag_gp",
  FlagGq: "flag_gq",
  FlagGr: "flag_gr",
  FlagGreece: "flag_greece",
  FlagGreenland: "flag_greenland",
  FlagGrenada: "flag_grenada",
  FlagGs: "flag_gs",
  FlagGt: "flag_gt",
  FlagGu: "flag_gu",
  FlagGuadeloupe: "flag_guadeloupe",
  FlagGuam: "flag_guam",
  FlagGuatemala: "flag_guatemala",
  FlagGuernsey: "flag_guernsey",
  FlagGuinea: "flag_guinea",
  FlagGuineaBissau: "flag_guinea_bissau",
  FlagGuyana: "flag_guyana",
  FlagGw: "flag_gw",
  FlagGy: "flag_gy",
  FlagHaiti: "flag_haiti",
  FlagHeardIslandAndMcdonaldIslands: "flag_heard_island_and_mcdonald_islands",
  FlagHk: "flag_hk",
  FlagHm: "flag_hm",
  FlagHn: "flag_hn",
  FlagHolySee: "flag_holy_see",
  FlagHonduras: "flag_honduras",
  FlagHongKong: "flag_hong_kong",
  FlagHr: "flag_hr",
  FlagHt: "flag_ht",
  FlagHu: "flag_hu",
  FlagHungary: "flag_hungary",
  FlagIceland: "flag_iceland",
  FlagId: "flag_id",
  FlagIe: "flag_ie",
  FlagIl: "flag_il",
  FlagIm: "flag_im",
  FlagIn: "flag_in",
  FlagIndia: "flag_india",
  FlagIndonesia: "flag_indonesia",
  FlagIo: "flag_io",
  FlagIq: "flag_iq",
  FlagIr: "flag_ir",
  FlagIran: "flag_iran",
  FlagIraq: "flag_iraq",
  FlagIreland: "flag_ireland",
  FlagIs: "flag_is",
  FlagIsleOfMan: "flag_isle_of_man",
  FlagIsrael: "flag_israel",
  FlagIt: "flag_it",
  FlagItaly: "flag_italy",
  FlagJamaica: "flag_jamaica",
  FlagJapan: "flag_japan",
  FlagJe: "flag_je",
  FlagJersey: "flag_jersey",
  FlagJm: "flag_jm",
  FlagJo: "flag_jo",
  FlagJordan: "flag_jordan",
  FlagJp: "flag_jp",
  FlagKazakhstan: "flag_kazakhstan",
  FlagKe: "flag_ke",
  FlagKenya: "flag_kenya",
  FlagKg: "flag_kg",
  FlagKh: "flag_kh",
  FlagKi: "flag_ki",
  FlagKiribati: "flag_kiribati",
  FlagKm: "flag_km",
  FlagKn: "flag_kn",
  FlagKosovo: "flag_kosovo",
  FlagKp: "flag_kp",
  FlagKr: "flag_kr",
  FlagKuwait: "flag_kuwait",
  FlagKw: "flag_kw",
  FlagKy: "flag_ky",
  FlagKyrgyzstan: "flag_kyrgyzstan",
  FlagKz: "flag_kz",
  FlagLa: "flag_la",
  FlagLaos: "flag_laos",
  FlagLatvia: "flag_latvia",
  FlagLb: "flag_lb",
  FlagLc: "flag_lc",
  FlagLebanon: "flag_lebanon",
  FlagLesotho: "flag_lesotho",
  FlagLi: "flag_li",
  FlagLiberia: "flag_liberia",
  FlagLibya: "flag_libya",
  FlagLiechtenstein: "flag_liechtenstein",
  FlagLithuania: "flag_lithuania",
  FlagLk: "flag_lk",
  FlagLr: "flag_lr",
  FlagLs: "flag_ls",
  FlagLt: "flag_lt",
  FlagLu: "flag_lu",
  FlagLuxembourg: "flag_luxembourg",
  FlagLv: "flag_lv",
  FlagLy: "flag_ly",
  FlagMa: "flag_ma",
  FlagMacau: "flag_macau",
  FlagMadagascar: "flag_madagascar",
  FlagMalawi: "flag_malawi",
  FlagMalaysia: "flag_malaysia",
  FlagMaldives: "flag_maldives",
  FlagMali: "flag_mali",
  FlagMalta: "flag_malta",
  FlagMarshallIslands: "flag_marshall_islands",
  FlagMartinique: "flag_martinique",
  FlagMauritania: "flag_mauritania",
  FlagMauritius: "flag_mauritius",
  FlagMayotte: "flag_mayotte",
  FlagMc: "flag_mc",
  FlagMd: "flag_md",
  FlagMe: "flag_me",
  FlagMexico: "flag_mexico",
  FlagMf: "flag_mf",
  FlagMg: "flag_mg",
  FlagMh: "flag_mh",
  FlagMk: "flag_mk",
  FlagMl: "flag_ml",
  FlagMm: "flag_mm",
  FlagMn: "flag_mn",
  FlagMo: "flag_mo",
  FlagMoldova: "flag_moldova",
  FlagMonaco: "flag_monaco",
  FlagMongolia: "flag_mongolia",
  FlagMontenegro: "flag_montenegro",
  FlagMontserrat: "flag_montserrat",
  FlagMorocco: "flag_morocco",
  FlagMozambique: "flag_mozambique",
  FlagMp: "flag_mp",
  FlagMq: "flag_mq",
  FlagMr: "flag_mr",
  FlagMs: "flag_ms",
  FlagMt: "flag_mt",
  FlagMu: "flag_mu",
  FlagMv: "flag_mv",
  FlagMw: "flag_mw",
  FlagMx: "flag_mx",
  FlagMy: "flag_my",
  FlagMyanmar: "flag_myanmar",
  FlagMz: "flag_mz",
  FlagNa: "flag_na",
  FlagNamibia: "flag_namibia",
  FlagNauru: "flag_nauru",
  FlagNc: "flag_nc",
  FlagNe: "flag_ne",
  FlagNepal: "flag_nepal",
  FlagNetherlands: "flag_netherlands",
  FlagNewCaledonia: "flag_new_caledonia",
  FlagNewZealand: "flag_new_zealand",
  FlagNf: "flag_nf",
  FlagNg: "flag_ng",
  FlagNi: "flag_ni",
  FlagNicaragua: "flag_nicaragua",
  FlagNiger: "flag_niger",
  FlagNigeria: "flag_nigeria",
  FlagNiue: "flag_niue",
  FlagNl: "flag_nl",
  FlagNo: "flag_no",
  FlagNorfolkIsland: "flag_norfolk_island",
  FlagNorthKorea: "flag_north_korea",
  FlagNorthMacedonia: "flag_north_macedonia",
  FlagNorthernMarianaIslands: "flag_northern_mariana_islands",
  FlagNorway: "flag_norway",
  FlagNp: "flag_np",
  FlagNr: "flag_nr",
  FlagNu: "flag_nu",
  FlagNz: "flag_nz",
  FlagOm: "flag_om",
  FlagOman: "flag_oman",
  FlagPa: "flag_pa",
  FlagPakistan: "flag_pakistan",
  FlagPalau: "flag_palau",
  FlagPanama: "flag_panama",
  FlagPapuaNewGuinea: "flag_papua_new_guinea",
  FlagParaguay: "flag_paraguay",
  FlagPe: "flag_pe",
  FlagPeru: "flag_peru",
  FlagPf: "flag_pf",
  FlagPg: "flag_pg",
  FlagPh: "flag_ph",
  FlagPhilippines: "flag_philippines",
  FlagPitcairn: "flag_pitcairn",
  FlagPk: "flag_pk",
  FlagPl: "flag_pl",
  FlagPm: "flag_pm",
  FlagPn: "flag_pn",
  FlagPoland: "flag_poland",
  FlagPortugal: "flag_portugal",
  FlagPr: "flag_pr",
  FlagPs: "flag_ps",
  FlagPt: "flag_pt",
  FlagPuertoRico: "flag_puerto_rico",
  FlagPw: "flag_pw",
  FlagPy: "flag_py",
  FlagQa: "flag_qa",
  FlagQatar: "flag_qatar",
  FlagRe: "flag_re",
  FlagRepublicOfTheCongo: "flag_republic_of_the_congo",
  FlagReunion: "flag_reunion",
  FlagRo: "flag_ro",
  FlagRomania: "flag_romania",
  FlagRs: "flag_rs",
  FlagRu: "flag_ru",
  FlagRussia: "flag_russia",
  FlagRw: "flag_rw",
  FlagRwanda: "flag_rwanda",
  FlagSa: "flag_sa",
  FlagSaintBarthelemy: "flag_saint_barthelemy",
  FlagSaintHelenaAscensionAndTristanDaCunha: "flag_saint_helena_ascension_and_tristan_da_cunha",
  FlagSaintKittsAndNevis: "flag_saint_kitts_and_nevis",
  FlagSaintLucia: "flag_saint_lucia",
  FlagSaintMartin: "flag_saint_martin",
  FlagSaintPierreAndMiquelon: "flag_saint_pierre_and_miquelon",
  FlagSaintVincentAndTheGrenadines: "flag_saint_vincent_and_the_grenadines",
  FlagSamoa: "flag_samoa",
  FlagSanMarino: "flag_san_marino",
  FlagSaoTomeAndPrincipe: "flag_sao_tome_and_principe",
  FlagSaudiArabia: "flag_saudi_arabia",
  FlagSb: "flag_sb",
  FlagSc: "flag_sc",
  FlagScotland: "flag_scotland",
  FlagSd: "flag_sd",
  FlagSe: "flag_se",
  FlagSenegal: "flag_senegal",
  FlagSerbia: "flag_serbia",
  FlagSeychelles: "flag_seychelles",
  FlagSg: "flag_sg",
  FlagSh: "flag_sh",
  FlagSi: "flag_si",
  FlagSierraLeone: "flag_sierra_leone",
  FlagSingapore: "flag_singapore",
  FlagSintMaarten: "flag_sint_maarten",
  FlagSj: "flag_sj",
  FlagSk: "flag_sk",
  FlagSl: "flag_sl",
  FlagSlovakia: "flag_slovakia",
  FlagSlovenia: "flag_slovenia",
  FlagSm: "flag_sm",
  FlagSn: "flag_sn",
  FlagSo: "flag_so",
  FlagSolomonIslands: "flag_solomon_islands",
  FlagSomalia: "flag_somalia",
  FlagSouthAfrica: "flag_south_africa",
  FlagSouthGeorgiaAndTheSouthSandwichIslands: "flag_south_georgia_and_the_south_sandwich_islands",
  FlagSouthKorea: "flag_south_korea",
  FlagSouthSudan: "flag_south_sudan",
  FlagSpain: "flag_spain",
  FlagSr: "flag_sr",
  FlagSriLanka: "flag_sri_lanka",
  FlagSs: "flag_ss",
  FlagSt: "flag_st",
  FlagStateOfPalestine: "flag_state_of_palestine",
  FlagSudan: "flag_sudan",
  FlagSuriname: "flag_suriname",
  FlagSv: "flag_sv",
  FlagSvalbardAndJanMayen: "flag_svalbard_and_jan_mayen",
  FlagSweden: "flag_sweden",
  FlagSwitzerland: "flag_switzerland",
  FlagSx: "flag_sx",
  FlagSy: "flag_sy",
  FlagSyria: "flag_syria",
  FlagSz: "flag_sz",
  FlagTaiwan: "flag_taiwan",
  FlagTajikistan: "flag_tajikistan",
  FlagTanzania: "flag_tanzania",
  FlagTc: "flag_tc",
  FlagTd: "flag_td",
  FlagTf: "flag_tf",
  FlagTg: "flag_tg",
  FlagTh: "flag_th",
  FlagThailand: "flag_thailand",
  FlagTimorLeste: "flag_timor_leste",
  FlagTj: "flag_tj",
  FlagTk: "flag_tk",
  FlagTl: "flag_tl",
  FlagTm: "flag_tm",
  FlagTn: "flag_tn",
  FlagTo: "flag_to",
  FlagTogo: "flag_togo",
  FlagTokelau: "flag_tokelau",
  FlagTonga: "flag_tonga",
  FlagTr: "flag_tr",
  FlagTrinidadAndTobago: "flag_trinidad_and_tobago",
  FlagTt: "flag_tt",
  FlagTunisia: "flag_tunisia",
  FlagTurkiye: "flag_turkiye",
  FlagTurkmenistan: "flag_turkmenistan",
  FlagTurksAndCaicosIslands: "flag_turks_and_caicos_islands",
  FlagTuvalu: "flag_tuvalu",
  FlagTv: "flag_tv",
  FlagTw: "flag_tw",
  FlagTz: "flag_tz",
  FlagUa: "flag_ua",
  FlagUg: "flag_ug",
  FlagUganda: "flag_uganda",
  FlagUkraine: "flag_ukraine",
  FlagUm: "flag_um",
  FlagUnitedArabEmirates: "flag_united_arab_emirates",
  FlagUnitedKingdom: "flag_united_kingdom",
  FlagUnitedStatesMinorOutlyingIslands: "flag_united_states_minor_outlying_islands",
  FlagUnitedStatesOfAmerica: "flag_united_states_of_america",
  FlagUruguay: "flag_uruguay",
  FlagUs: "flag_us",
  FlagUy: "flag_uy",
  FlagUz: "flag_uz",
  FlagUzbekistan: "flag_uzbekistan",
  FlagVa: "flag_va",
  FlagVanuatu: "flag_vanuatu",
  FlagVc: "flag_vc",
  FlagVe: "flag_ve",
  FlagVenezuela: "flag_venezuela",
  FlagVg: "flag_vg",
  FlagVi: "flag_vi",
  FlagVietnam: "flag_vietnam",
  FlagVirginIslandsBritish: "flag_virgin_islands_british",
  FlagVirginIslandsUS: "flag_virgin_islands_u_s",
  FlagVn: "flag_vn",
  FlagVu: "flag_vu",
  FlagWales: "flag_wales",
  FlagWallisAndFutuna: "flag_wallis_and_futuna",
  FlagWesternSahara: "flag_western_sahara",
  FlagWf: "flag_wf",
  FlagWs: "flag_ws",
  FlagXk: "flag_xk",
  FlagYe: "flag_ye",
  FlagYemen: "flag_yemen",
  FlagYt: "flag_yt",
  FlagZa: "flag_za",
  FlagZambia: "flag_zambia",
  FlagZimbabwe: "flag_zimbabwe",
  FlagZm: "flag_zm",
  FlagZw: "flag_zw"
};
var MUI_ICON_LIGATURES = {
  "10k": "10k",
  "10mp": "10mp",
  "11mp": "11mp",
  "123": "123",
  "12mp": "12mp",
  "13mp": "13mp",
  "14mp": "14mp",
  "15mp": "15mp",
  "16mp": "16mp",
  "17mp": "17mp",
  "18UpRating": "18_up_rating",
  "18mp": "18mp",
  "19mp": "19mp",
  "1k": "1k",
  "1kPlus": "1k_plus",
  "1xMobiledata": "1x_mobiledata",
  "1xMobiledataBadge": "1x_mobiledata_badge",
  "20mp": "20mp",
  "21mp": "21mp",
  "22mp": "22mp",
  "23mp": "23mp",
  "24fpsSelect": "24fps_select",
  "24mp": "24mp",
  "2d": "2d",
  "2d2": "2d_2",
  "2k": "2k",
  "2kPlus": "2k_plus",
  "2mp": "2mp",
  "30fps": "30fps",
  "30fpsSelect": "30fps_select",
  "360": "360",
  "3d": "3d",
  "3d2": "3d_2",
  "3dRotation": "3d_rotation",
  "3gMobiledata": "3g_mobiledata",
  "3gMobiledataBadge": "3g_mobiledata_badge",
  "3k": "3k",
  "3kPlus": "3k_plus",
  "3mp": "3mp",
  "3p": "3p",
  "4gMobiledata": "4g_mobiledata",
  "4gMobiledataBadge": "4g_mobiledata_badge",
  "4gPlusMobiledata": "4g_plus_mobiledata",
  "4k": "4k",
  "4kPlus": "4k_plus",
  "4mp": "4mp",
  "50mp": "50mp",
  "5g": "5g",
  "5gMobiledataBadge": "5g_mobiledata_badge",
  "5k": "5k",
  "5kPlus": "5k_plus",
  "5mp": "5mp",
  "60fps": "60fps",
  "60fpsSelect": "60fps_select",
  "6FtApart": "6_ft_apart",
  "6k": "6k",
  "6kPlus": "6k_plus",
  "6mp": "6mp",
  "7k": "7k",
  "7kPlus": "7k_plus",
  "7mp": "7mp",
  "8k": "8k",
  "8kPlus": "8k_plus",
  "8mp": "8mp",
  "9k": "9k",
  "9kPlus": "9k_plus",
  "9mp": "9mp",
  Abc: "abc",
  AcUnit: "ac_unit",
  AccessAlarm: "access_alarm",
  AccessAlarms: "access_alarms",
  AccessTime: "access_time",
  AccessTimeFilled: "access_time_filled",
  Accessibility: "accessibility",
  AccessibilityNew: "accessibility_new",
  Accessible: "accessible",
  AccessibleForward: "accessible_forward",
  AccessibleMenu: "accessible_menu",
  AccountBalance: "account_balance",
  AccountBalanceWallet: "account_balance_wallet",
  AccountBox: "account_box",
  AccountChild: "account_child",
  AccountChildInvert: "account_child_invert",
  AccountCircle: "account_circle",
  AccountCircleFilled: "account_circle_filled",
  AccountCircleOff: "account_circle_off",
  AccountTree: "account_tree",
  ActionKey: "action_key",
  ActivityZone: "activity_zone",
  Acupuncture: "acupuncture",
  Acute: "acute",
  Ad: "ad",
  AdGroup: "ad_group",
  AdGroupOff: "ad_group_off",
  AdOff: "ad_off",
  AdUnits: "ad_units",
  AdaptiveAudioMic: "adaptive_audio_mic",
  AdaptiveAudioMicOff: "adaptive_audio_mic_off",
  Adb: "adb",
  Add: "add",
  Add2: "add_2",
  AddAPhoto: "add_a_photo",
  AddAd: "add_ad",
  AddAlarm: "add_alarm",
  AddAlert: "add_alert",
  AddBox: "add_box",
  AddBusiness: "add_business",
  AddCall: "add_call",
  AddCard: "add_card",
  AddChart: "add_chart",
  AddCircle: "add_circle",
  AddCircleOutline: "add_circle_outline",
  AddColumnLeft: "add_column_left",
  AddColumnRight: "add_column_right",
  AddComment: "add_comment",
  AddDiamond: "add_diamond",
  AddHome: "add_home",
  AddHomeWork: "add_home_work",
  AddIcCall: "add_ic_call",
  AddLink: "add_link",
  AddLocation: "add_location",
  AddLocationAlt: "add_location_alt",
  AddModerator: "add_moderator",
  AddNotes: "add_notes",
  AddPhotoAlternate: "add_photo_alternate",
  AddReaction: "add_reaction",
  AddRoad: "add_road",
  AddRowAbove: "add_row_above",
  AddRowBelow: "add_row_below",
  AddShoppingCart: "add_shopping_cart",
  AddTask: "add_task",
  AddToDrive: "add_to_drive",
  AddToHomeScreen: "add_to_home_screen",
  AddToPhotos: "add_to_photos",
  AddToQueue: "add_to_queue",
  AddTriangle: "add_triangle",
  Addchart: "addchart",
  AdfScanner: "adf_scanner",
  Adjust: "adjust",
  AdminMeds: "admin_meds",
  AdminPanelSettings: "admin_panel_settings",
  Adobe: "adobe",
  AdsClick: "ads_click",
  Agender: "agender",
  Agriculture: "agriculture",
  Air: "air",
  AirFreshener: "air_freshener",
  AirPurifier: "air_purifier",
  AirPurifierGen: "air_purifier_gen",
  AirlineSeatFlat: "airline_seat_flat",
  AirlineSeatFlatAngled: "airline_seat_flat_angled",
  AirlineSeatIndividualSuite: "airline_seat_individual_suite",
  AirlineSeatLegroomExtra: "airline_seat_legroom_extra",
  AirlineSeatLegroomNormal: "airline_seat_legroom_normal",
  AirlineSeatLegroomReduced: "airline_seat_legroom_reduced",
  AirlineSeatReclineExtra: "airline_seat_recline_extra",
  AirlineSeatReclineNormal: "airline_seat_recline_normal",
  AirlineStops: "airline_stops",
  Airlines: "airlines",
  AirplaneTicket: "airplane_ticket",
  AirplanemodeActive: "airplanemode_active",
  AirplanemodeInactive: "airplanemode_inactive",
  AirplanemodeOff: "airplanemode_off",
  AirplanemodeOn: "airplanemode_on",
  Airplay: "airplay",
  AirportShuttle: "airport_shuttle",
  Airware: "airware",
  Airwave: "airwave",
  Alarm: "alarm",
  AlarmAdd: "alarm_add",
  AlarmOff: "alarm_off",
  AlarmOn: "alarm_on",
  AlarmPause: "alarm_pause",
  AlarmSmartWake: "alarm_smart_wake",
  Album: "album",
  AlignCenter: "align_center",
  AlignEnd: "align_end",
  AlignFlexCenter: "align_flex_center",
  AlignFlexEnd: "align_flex_end",
  AlignFlexStart: "align_flex_start",
  AlignHorizontalCenter: "align_horizontal_center",
  AlignHorizontalLeft: "align_horizontal_left",
  AlignHorizontalRight: "align_horizontal_right",
  AlignItemsStretch: "align_items_stretch",
  AlignJustifyCenter: "align_justify_center",
  AlignJustifyFlexEnd: "align_justify_flex_end",
  AlignJustifyFlexStart: "align_justify_flex_start",
  AlignJustifySpaceAround: "align_justify_space_around",
  AlignJustifySpaceBetween: "align_justify_space_between",
  AlignJustifySpaceEven: "align_justify_space_even",
  AlignJustifyStretch: "align_justify_stretch",
  AlignSelfStretch: "align_self_stretch",
  AlignSpaceAround: "align_space_around",
  AlignSpaceBetween: "align_space_between",
  AlignSpaceEven: "align_space_even",
  AlignStart: "align_start",
  AlignStretch: "align_stretch",
  AlignVerticalBottom: "align_vertical_bottom",
  AlignVerticalCenter: "align_vertical_center",
  AlignVerticalTop: "align_vertical_top",
  AllInbox: "all_inbox",
  AllInclusive: "all_inclusive",
  AllMatch: "all_match",
  AllOut: "all_out",
  Allergies: "allergies",
  Allergy: "allergy",
  AltRoute: "alt_route",
  AlternateEmail: "alternate_email",
  Altitude: "altitude",
  AmbientScreen: "ambient_screen",
  Ambulance: "ambulance",
  Amend: "amend",
  AmpStories: "amp_stories",
  Analytics: "analytics",
  Anchor: "anchor",
  Android: "android",
  AndroidCell4Bar: "android_cell_4_bar",
  AndroidCell4BarAlert: "android_cell_4_bar_alert",
  AndroidCell4BarOff: "android_cell_4_bar_off",
  AndroidCell4BarPlus: "android_cell_4_bar_plus",
  AndroidCell5Bar: "android_cell_5_bar",
  AndroidCell5BarAlert: "android_cell_5_bar_alert",
  AndroidCell5BarOff: "android_cell_5_bar_off",
  AndroidCell5BarPlus: "android_cell_5_bar_plus",
  AndroidCellDual4Bar: "android_cell_dual_4_bar",
  AndroidCellDual4BarAlert: "android_cell_dual_4_bar_alert",
  AndroidCellDual4BarPlus: "android_cell_dual_4_bar_plus",
  AndroidCellDual5Bar: "android_cell_dual_5_bar",
  AndroidCellDual5BarAlert: "android_cell_dual_5_bar_alert",
  AndroidCellDual5BarPlus: "android_cell_dual_5_bar_plus",
  AndroidWifi3Bar: "android_wifi_3_bar",
  AndroidWifi3BarAlert: "android_wifi_3_bar_alert",
  AndroidWifi3BarLock: "android_wifi_3_bar_lock",
  AndroidWifi3BarOff: "android_wifi_3_bar_off",
  AndroidWifi3BarPlus: "android_wifi_3_bar_plus",
  AndroidWifi3BarQuestion: "android_wifi_3_bar_question",
  AndroidWifi4Bar: "android_wifi_4_bar",
  AndroidWifi4BarAlert: "android_wifi_4_bar_alert",
  AndroidWifi4BarLock: "android_wifi_4_bar_lock",
  AndroidWifi4BarOff: "android_wifi_4_bar_off",
  AndroidWifi4BarPlus: "android_wifi_4_bar_plus",
  AndroidWifi4BarQuestion: "android_wifi_4_bar_question",
  AnimatedImages: "animated_images",
  Animation: "animation",
  Announcement: "announcement",
  Antigravity: "antigravity",
  Aod: "aod",
  AodTablet: "aod_tablet",
  AodWatch: "aod_watch",
  Apartment: "apartment",
  Api: "api",
  ApkDocument: "apk_document",
  ApkInstall: "apk_install",
  AppBadging: "app_badging",
  AppBlocking: "app_blocking",
  AppPromo: "app_promo",
  AppRegistration: "app_registration",
  AppSettingsAlt: "app_settings_alt",
  AppShortcut: "app_shortcut",
  Apparel: "apparel",
  Apple: "apple",
  Approval: "approval",
  ApprovalDelegation: "approval_delegation",
  ApprovalDelegationOff: "approval_delegation_off",
  Apps: "apps",
  AppsOutage: "apps_outage",
  Aq: "aq",
  AqIndoor: "aq_indoor",
  ArOnYou: "ar_on_you",
  ArStickers: "ar_stickers",
  Architecture: "architecture",
  Archive: "archive",
  AreaChart: "area_chart",
  ArmingCountdown: "arming_countdown",
  ArrowAndEdge: "arrow_and_edge",
  ArrowBack: "arrow_back",
  ArrowBack2: "arrow_back_2",
  ArrowBackIos: "arrow_back_ios",
  ArrowBackIosNew: "arrow_back_ios_new",
  ArrowCircleDown: "arrow_circle_down",
  ArrowCircleLeft: "arrow_circle_left",
  ArrowCircleRight: "arrow_circle_right",
  ArrowCircleUp: "arrow_circle_up",
  ArrowCoolDown: "arrow_cool_down",
  ArrowDownward: "arrow_downward",
  ArrowDownwardAlt: "arrow_downward_alt",
  ArrowDropDown: "arrow_drop_down",
  ArrowDropDownCircle: "arrow_drop_down_circle",
  ArrowDropUp: "arrow_drop_up",
  ArrowForward: "arrow_forward",
  ArrowForwardIos: "arrow_forward_ios",
  ArrowInsert: "arrow_insert",
  ArrowLeft: "arrow_left",
  ArrowLeftAlt: "arrow_left_alt",
  ArrowMenuClose: "arrow_menu_close",
  ArrowMenuOpen: "arrow_menu_open",
  ArrowOrEdge: "arrow_or_edge",
  ArrowOutward: "arrow_outward",
  ArrowRange: "arrow_range",
  ArrowRight: "arrow_right",
  ArrowRightAlt: "arrow_right_alt",
  ArrowSelectorTool: "arrow_selector_tool",
  ArrowShapeUp: "arrow_shape_up",
  ArrowShapeUpStack: "arrow_shape_up_stack",
  ArrowShapeUpStack2: "arrow_shape_up_stack_2",
  ArrowSplit: "arrow_split",
  ArrowTopLeft: "arrow_top_left",
  ArrowTopRight: "arrow_top_right",
  ArrowUploadProgress: "arrow_upload_progress",
  ArrowUploadReady: "arrow_upload_ready",
  ArrowUpward: "arrow_upward",
  ArrowUpwardAlt: "arrow_upward_alt",
  ArrowWarmUp: "arrow_warm_up",
  ArrowsInput: "arrows_input",
  ArrowsLeftRightCircle: "arrows_left_right_circle",
  ArrowsMoreDown: "arrows_more_down",
  ArrowsMoreUp: "arrows_more_up",
  ArrowsOutput: "arrows_output",
  ArrowsOutward: "arrows_outward",
  ArrowsUpDownCircle: "arrows_up_down_circle",
  ArtTrack: "art_track",
  Article: "article",
  ArticlePerson: "article_person",
  ArticleShortcut: "article_shortcut",
  Artist: "artist",
  AspectRatio: "aspect_ratio",
  Assessment: "assessment",
  Assignment: "assignment",
  AssignmentAdd: "assignment_add",
  AssignmentGlobe: "assignment_globe",
  AssignmentInd: "assignment_ind",
  AssignmentLate: "assignment_late",
  AssignmentReturn: "assignment_return",
  AssignmentReturned: "assignment_returned",
  AssignmentTurnedIn: "assignment_turned_in",
  AssistWalker: "assist_walker",
  Assistant: "assistant",
  AssistantDevice: "assistant_device",
  AssistantDirection: "assistant_direction",
  AssistantNavigation: "assistant_navigation",
  AssistantOnHub: "assistant_on_hub",
  AssistantPhoto: "assistant_photo",
  AssuredWorkload: "assured_workload",
  Asterisk: "asterisk",
  AstrophotographyAuto: "astrophotography_auto",
  AstrophotographyOff: "astrophotography_off",
  Atm: "atm",
  Atr: "atr",
  AttachEmail: "attach_email",
  AttachFile: "attach_file",
  AttachFileAdd: "attach_file_add",
  AttachFileOff: "attach_file_off",
  AttachMoney: "attach_money",
  Attachment: "attachment",
  Attractions: "attractions",
  Attribution: "attribution",
  AudioCapture: "audio_capture",
  AudioDescription: "audio_description",
  AudioFile: "audio_file",
  AudioVideoReceiver: "audio_video_receiver",
  Audiotrack: "audiotrack",
  AutoActivityZone: "auto_activity_zone",
  AutoAwesome: "auto_awesome",
  AutoAwesomeMosaic: "auto_awesome_mosaic",
  AutoAwesomeMotion: "auto_awesome_motion",
  AutoDelete: "auto_delete",
  AutoDetectVoice: "auto_detect_voice",
  AutoDrawSolid: "auto_draw_solid",
  AutoFix: "auto_fix",
  AutoFixHigh: "auto_fix_high",
  AutoFixNormal: "auto_fix_normal",
  AutoFixOff: "auto_fix_off",
  AutoGraph: "auto_graph",
  AutoLabel: "auto_label",
  AutoMeetingRoom: "auto_meeting_room",
  AutoMode: "auto_mode",
  AutoReadPause: "auto_read_pause",
  AutoReadPlay: "auto_read_play",
  AutoSchedule: "auto_schedule",
  AutoStories: "auto_stories",
  AutoStoriesOff: "auto_stories_off",
  AutoTimer: "auto_timer",
  AutoTowing: "auto_towing",
  AutoTransmission: "auto_transmission",
  AutoVideocam: "auto_videocam",
  AutofpsSelect: "autofps_select",
  Automation: "automation",
  Autopause: "autopause",
  Autopay: "autopay",
  Autoplay: "autoplay",
  Autorenew: "autorenew",
  Autostop: "autostop",
  Av1: "av1",
  AvTimer: "av_timer",
  Avc: "avc",
  AvgPace: "avg_pace",
  AvgTime: "avg_time",
  AvocadoBean: "avocado_bean",
  AwardMeal: "award_meal",
  AwardStar: "award_star",
  Azm: "azm",
  BCircle: "b_circle",
  BabyChangingStation: "baby_changing_station",
  BackHand: "back_hand",
  BackToTab: "back_to_tab",
  BackgroundDotLarge: "background_dot_large",
  BackgroundDotSmall: "background_dot_small",
  BackgroundGridSmall: "background_grid_small",
  BackgroundReplace: "background_replace",
  BacklightHigh: "backlight_high",
  BacklightHighOff: "backlight_high_off",
  BacklightLow: "backlight_low",
  Backpack: "backpack",
  Backspace: "backspace",
  Backup: "backup",
  BackupTable: "backup_table",
  Badge: "badge",
  BadgeCriticalBattery: "badge_critical_battery",
  Badminton: "badminton",
  BakeryDining: "bakery_dining",
  Balance: "balance",
  Balcony: "balcony",
  Ballot: "ballot",
  BarChart: "bar_chart",
  BarChart4Bars: "bar_chart_4_bars",
  BarChartOff: "bar_chart_off",
  Barcode: "barcode",
  BarcodeReader: "barcode_reader",
  BarcodeScanner: "barcode_scanner",
  Barefoot: "barefoot",
  BatchPrediction: "batch_prediction",
  BathBedrock: "bath_bedrock",
  BathOutdoor: "bath_outdoor",
  BathPrivate: "bath_private",
  BathPublicLarge: "bath_public_large",
  BathSoak: "bath_soak",
  Bathroom: "bathroom",
  Bathtub: "bathtub",
  Battery0Bar: "battery_0_bar",
  Battery1Bar: "battery_1_bar",
  Battery20: "battery_20",
  Battery2Bar: "battery_2_bar",
  Battery30: "battery_30",
  Battery3Bar: "battery_3_bar",
  Battery4Bar: "battery_4_bar",
  Battery50: "battery_50",
  Battery5Bar: "battery_5_bar",
  Battery60: "battery_60",
  Battery6Bar: "battery_6_bar",
  Battery80: "battery_80",
  Battery90: "battery_90",
  BatteryAlert: "battery_alert",
  BatteryAndroid0: "battery_android_0",
  BatteryAndroid1: "battery_android_1",
  BatteryAndroid2: "battery_android_2",
  BatteryAndroid3: "battery_android_3",
  BatteryAndroid4: "battery_android_4",
  BatteryAndroid5: "battery_android_5",
  BatteryAndroid6: "battery_android_6",
  BatteryAndroidAlert: "battery_android_alert",
  BatteryAndroidBolt: "battery_android_bolt",
  BatteryAndroidFrame1: "battery_android_frame_1",
  BatteryAndroidFrame2: "battery_android_frame_2",
  BatteryAndroidFrame3: "battery_android_frame_3",
  BatteryAndroidFrame4: "battery_android_frame_4",
  BatteryAndroidFrame5: "battery_android_frame_5",
  BatteryAndroidFrame6: "battery_android_frame_6",
  BatteryAndroidFrameAlert: "battery_android_frame_alert",
  BatteryAndroidFrameBolt: "battery_android_frame_bolt",
  BatteryAndroidFrameFull: "battery_android_frame_full",
  BatteryAndroidFramePlus: "battery_android_frame_plus",
  BatteryAndroidFrameQuestion: "battery_android_frame_question",
  BatteryAndroidFrameShare: "battery_android_frame_share",
  BatteryAndroidFrameShield: "battery_android_frame_shield",
  BatteryAndroidFull: "battery_android_full",
  BatteryAndroidPlus: "battery_android_plus",
  BatteryAndroidQuestion: "battery_android_question",
  BatteryAndroidShare: "battery_android_share",
  BatteryAndroidShield: "battery_android_shield",
  BatteryChange: "battery_change",
  BatteryCharging20: "battery_charging_20",
  BatteryCharging202: "battery_charging_20_2",
  BatteryCharging30: "battery_charging_30",
  BatteryCharging302: "battery_charging_30_2",
  BatteryCharging50: "battery_charging_50",
  BatteryCharging502: "battery_charging_50_2",
  BatteryCharging60: "battery_charging_60",
  BatteryCharging602: "battery_charging_60_2",
  BatteryCharging80: "battery_charging_80",
  BatteryCharging802: "battery_charging_80_2",
  BatteryCharging90: "battery_charging_90",
  BatteryChargingFull: "battery_charging_full",
  BatteryChargingFull2: "battery_charging_full_2",
  BatteryError: "battery_error",
  BatteryFull: "battery_full",
  BatteryFullAlt: "battery_full_alt",
  BatteryHoriz000: "battery_horiz_000",
  BatteryHoriz050: "battery_horiz_050",
  BatteryHoriz075: "battery_horiz_075",
  BatteryLow: "battery_low",
  BatteryPlus: "battery_plus",
  BatteryProfile: "battery_profile",
  BatterySaver: "battery_saver",
  BatteryShare: "battery_share",
  BatteryStatusGood: "battery_status_good",
  BatteryStd: "battery_std",
  BatteryUnknown: "battery_unknown",
  BatteryVert005: "battery_vert_005",
  BatteryVert020: "battery_vert_020",
  BatteryVert050: "battery_vert_050",
  BatteryVeryLow: "battery_very_low",
  BeachAccess: "beach_access",
  Bed: "bed",
  BedroomBaby: "bedroom_baby",
  BedroomChild: "bedroom_child",
  BedroomParent: "bedroom_parent",
  Bedtime: "bedtime",
  BedtimeOff: "bedtime_off",
  Beenhere: "beenhere",
  BeerMeal: "beer_meal",
  Bento: "bento",
  Bia: "bia",
  BidLandscape: "bid_landscape",
  BidLandscapeDisabled: "bid_landscape_disabled",
  BigtopUpdates: "bigtop_updates",
  BikeDock: "bike_dock",
  BikeLane: "bike_lane",
  BikeScooter: "bike_scooter",
  Biotech: "biotech",
  Blanket: "blanket",
  Blender: "blender",
  Blind: "blind",
  Blinds: "blinds",
  Blinds2: "blinds_2",
  Blinds2Closed: "blinds_2_closed",
  BlindsClosed: "blinds_closed",
  Block: "block",
  BloodPressure: "blood_pressure",
  Bloodtype: "bloodtype",
  Bluetooth: "bluetooth",
  BluetoothAudio: "bluetooth_audio",
  BluetoothConnected: "bluetooth_connected",
  BluetoothDisabled: "bluetooth_disabled",
  BluetoothDrive: "bluetooth_drive",
  BluetoothSearching: "bluetooth_searching",
  BlurCircular: "blur_circular",
  BlurLinear: "blur_linear",
  BlurMedium: "blur_medium",
  BlurOff: "blur_off",
  BlurOn: "blur_on",
  BlurShort: "blur_short",
  BoatBus: "boat_bus",
  BoatRailway: "boat_railway",
  BodyFat: "body_fat",
  BodySystem: "body_system",
  Bolt: "bolt",
  BoltBoost: "bolt_boost",
  Bomb: "bomb",
  Book: "book",
  Book2: "book_2",
  Book3: "book_3",
  Book4: "book_4",
  Book5: "book_5",
  Book6: "book_6",
  BookOnline: "book_online",
  BookRibbon: "book_ribbon",
  Bookmark: "bookmark",
  BookmarkAdd: "bookmark_add",
  BookmarkAdded: "bookmark_added",
  BookmarkBag: "bookmark_bag",
  BookmarkBorder: "bookmark_border",
  BookmarkCheck: "bookmark_check",
  BookmarkFlag: "bookmark_flag",
  BookmarkHeart: "bookmark_heart",
  BookmarkManager: "bookmark_manager",
  BookmarkOutline: "bookmark_outline",
  BookmarkRemove: "bookmark_remove",
  BookmarkStacks: "bookmark_stacks",
  BookmarkStar: "bookmark_star",
  Bookmarks: "bookmarks",
  BooksMoviesAndMusic: "books_movies_and_music",
  BorderAll: "border_all",
  BorderBottom: "border_bottom",
  BorderClear: "border_clear",
  BorderColor: "border_color",
  BorderHorizontal: "border_horizontal",
  BorderInner: "border_inner",
  BorderLeft: "border_left",
  BorderOuter: "border_outer",
  BorderRight: "border_right",
  BorderStyle: "border_style",
  BorderTop: "border_top",
  BorderVertical: "border_vertical",
  Borg: "borg",
  BottomAppBar: "bottom_app_bar",
  BottomDrawer: "bottom_drawer",
  BottomNavigation: "bottom_navigation",
  BottomPanelClose: "bottom_panel_close",
  BottomPanelOpen: "bottom_panel_open",
  BottomRightClick: "bottom_right_click",
  BottomSheets: "bottom_sheets",
  Box: "box",
  BoxAdd: "box_add",
  BoxEdit: "box_edit",
  Boy: "boy",
  BrandAwareness: "brand_awareness",
  BrandFamily: "brand_family",
  BrandingWatermark: "branding_watermark",
  BreakfastDining: "breakfast_dining",
  BreakingNews: "breaking_news",
  BreakingNewsAlt1: "breaking_news_alt_1",
  Breastfeeding: "breastfeeding",
  Brick: "brick",
  BriefcaseMeal: "briefcase_meal",
  Brightness1: "brightness_1",
  Brightness2: "brightness_2",
  Brightness3: "brightness_3",
  Brightness4: "brightness_4",
  Brightness5: "brightness_5",
  Brightness6: "brightness_6",
  Brightness7: "brightness_7",
  BrightnessAlert: "brightness_alert",
  BrightnessAuto: "brightness_auto",
  BrightnessEmpty: "brightness_empty",
  BrightnessHigh: "brightness_high",
  BrightnessLow: "brightness_low",
  BrightnessMedium: "brightness_medium",
  BringYourOwnIp: "bring_your_own_ip",
  BroadcastOnHome: "broadcast_on_home",
  BroadcastOnPersonal: "broadcast_on_personal",
  BrokenImage: "broken_image",
  Browse: "browse",
  BrowseActivity: "browse_activity",
  BrowseGallery: "browse_gallery",
  BrowserNotSupported: "browser_not_supported",
  BrowserUpdated: "browser_updated",
  BrunchDining: "brunch_dining",
  Brush: "brush",
  Bubble: "bubble",
  BubbleChart: "bubble_chart",
  Bubbles: "bubbles",
  BucketCheck: "bucket_check",
  BugReport: "bug_report",
  Build: "build",
  BuildCircle: "build_circle",
  BulletChart: "bullet_chart",
  Bungalow: "bungalow",
  BurstMode: "burst_mode",
  BusAlert: "bus_alert",
  BusMapPin: "bus_map_pin",
  BusRailway: "bus_railway",
  Business: "business",
  BusinessCenter: "business_center",
  BusinessChip: "business_chip",
  BusinessMessages: "business_messages",
  ButtonsAlt: "buttons_alt",
  Cabin: "cabin",
  Cable: "cable",
  CableCar: "cable_car",
  Cached: "cached",
  Cadence: "cadence",
  Cake: "cake",
  CakeAdd: "cake_add",
  Calculate: "calculate",
  CalendarAddOn: "calendar_add_on",
  CalendarAppsScript: "calendar_apps_script",
  CalendarCheck: "calendar_check",
  CalendarClock: "calendar_clock",
  CalendarLock: "calendar_lock",
  CalendarMeal: "calendar_meal",
  CalendarMeal2: "calendar_meal_2",
  CalendarMonth: "calendar_month",
  CalendarToday: "calendar_today",
  CalendarViewDay: "calendar_view_day",
  CalendarViewMonth: "calendar_view_month",
  CalendarViewWeek: "calendar_view_week",
  Call: "call",
  CallEnd: "call_end",
  CallEndAlt: "call_end_alt",
  CallLog: "call_log",
  CallMade: "call_made",
  CallMerge: "call_merge",
  CallMissed: "call_missed",
  CallMissedOutgoing: "call_missed_outgoing",
  CallQuality: "call_quality",
  CallReceived: "call_received",
  CallSplit: "call_split",
  CallToAction: "call_to_action",
  Camera: "camera",
  CameraAlt: "camera_alt",
  CameraEnhance: "camera_enhance",
  CameraFront: "camera_front",
  CameraIndoor: "camera_indoor",
  CameraOutdoor: "camera_outdoor",
  CameraRear: "camera_rear",
  CameraRoll: "camera_roll",
  CameraVideo: "camera_video",
  Cameraswitch: "cameraswitch",
  Campaign: "campaign",
  Camping: "camping",
  Cancel: "cancel",
  CancelPresentation: "cancel_presentation",
  CancelScheduleSend: "cancel_schedule_send",
  Candle: "candle",
  CandlestickChart: "candlestick_chart",
  Cannabis: "cannabis",
  CaptivePortal: "captive_portal",
  Capture: "capture",
  CarCrash: "car_crash",
  CarDefrostLeft: "car_defrost_left",
  CarDefrostLowLeft: "car_defrost_low_left",
  CarDefrostLowRight: "car_defrost_low_right",
  CarDefrostMidLeft: "car_defrost_mid_left",
  CarDefrostMidLowLeft: "car_defrost_mid_low_left",
  CarDefrostMidLowRight: "car_defrost_mid_low_right",
  CarDefrostMidRight: "car_defrost_mid_right",
  CarDefrostRight: "car_defrost_right",
  CarFanLowLeft: "car_fan_low_left",
  CarFanLowMidLeft: "car_fan_low_mid_left",
  CarFanLowRight: "car_fan_low_right",
  CarFanMidLeft: "car_fan_mid_left",
  CarFanMidLowRight: "car_fan_mid_low_right",
  CarFanMidRight: "car_fan_mid_right",
  CarFanRecirculate: "car_fan_recirculate",
  CarFanRecirculate2: "car_fan_recirculate_2",
  CarGear: "car_gear",
  CarLock: "car_lock",
  CarMirrorHeat: "car_mirror_heat",
  CarRental: "car_rental",
  CarRepair: "car_repair",
  CarSeatOff: "car_seat_off",
  CarTag: "car_tag",
  CardGiftcard: "card_giftcard",
  CardMembership: "card_membership",
  CardTravel: "card_travel",
  CardioLoad: "cardio_load",
  Cardiology: "cardiology",
  Cards: "cards",
  CardsStack: "cards_stack",
  CardsStar: "cards_star",
  Carpenter: "carpenter",
  CarryOnBag: "carry_on_bag",
  CarryOnBagChecked: "carry_on_bag_checked",
  CarryOnBagInactive: "carry_on_bag_inactive",
  CarryOnBagQuestion: "carry_on_bag_question",
  Cases: "cases",
  Casino: "casino",
  Cast: "cast",
  CastConnected: "cast_connected",
  CastForEducation: "cast_for_education",
  CastPause: "cast_pause",
  CastWarning: "cast_warning",
  Castle: "castle",
  CatchingPokemon: "catching_pokemon",
  Category: "category",
  CategorySearch: "category_search",
  Celebration: "celebration",
  CellMerge: "cell_merge",
  CellTower: "cell_tower",
  CellWifi: "cell_wifi",
  CenterFocusStrong: "center_focus_strong",
  CenterFocusWeak: "center_focus_weak",
  Chair: "chair",
  ChairAlt: "chair_alt",
  ChairCounter: "chair_counter",
  ChairFireplace: "chair_fireplace",
  ChairUmbrella: "chair_umbrella",
  Chalet: "chalet",
  ChangeCircle: "change_circle",
  ChangeHistory: "change_history",
  Charger: "charger",
  ChargingStation: "charging_station",
  ChartData: "chart_data",
  Chat: "chat",
  ChatAddOn: "chat_add_on",
  ChatAppsScript: "chat_apps_script",
  ChatBubble: "chat_bubble",
  ChatBubbleOff: "chat_bubble_off",
  ChatBubbleOutline: "chat_bubble_outline",
  ChatDashed: "chat_dashed",
  ChatError: "chat_error",
  ChatInfo: "chat_info",
  ChatPasteGo: "chat_paste_go",
  ChatPasteGo2: "chat_paste_go_2",
  Check: "check",
  CheckAlert: "check_alert",
  CheckBox: "check_box",
  CheckBoxOutlineBlank: "check_box_outline_blank",
  CheckCircle: "check_circle",
  CheckCircleFilled: "check_circle_filled",
  CheckCircleOutline: "check_circle_outline",
  CheckCircleUnread: "check_circle_unread",
  CheckInOut: "check_in_out",
  CheckIndeterminateSmall: "check_indeterminate_small",
  CheckSmall: "check_small",
  Checkbook: "checkbook",
  CheckedBag: "checked_bag",
  CheckedBagQuestion: "checked_bag_question",
  Checklist: "checklist",
  ChecklistRtl: "checklist_rtl",
  Checkroom: "checkroom",
  Cheer: "cheer",
  ChefHat: "chef_hat",
  Chess: "chess",
  ChessBishop: "chess_bishop",
  ChessBishop2: "chess_bishop_2",
  ChessKing: "chess_king",
  ChessKing2: "chess_king_2",
  ChessKnight: "chess_knight",
  ChessPawn: "chess_pawn",
  ChessPawn2: "chess_pawn_2",
  ChessQueen: "chess_queen",
  ChessRook: "chess_rook",
  ChevronBackward: "chevron_backward",
  ChevronForward: "chevron_forward",
  ChevronLeft: "chevron_left",
  ChevronLineUp: "chevron_line_up",
  ChevronRight: "chevron_right",
  ChildCare: "child_care",
  ChildFriendly: "child_friendly",
  ChildHat: "child_hat",
  ChipExtraction: "chip_extraction",
  Chips: "chips",
  ChromeReaderMode: "chrome_reader_mode",
  Chromecast2: "chromecast_2",
  ChromecastDevice: "chromecast_device",
  Chronic: "chronic",
  Church: "church",
  CinematicBlur: "cinematic_blur",
  Circle: "circle",
  CircleCircle: "circle_circle",
  CircleNotifications: "circle_notifications",
  Circles: "circles",
  CirclesExt: "circles_ext",
  Clarify: "clarify",
  Class: "class",
  CleanHands: "clean_hands",
  Cleaning: "cleaning",
  CleaningBucket: "cleaning_bucket",
  CleaningServices: "cleaning_services",
  Clear: "clear",
  ClearAll: "clear_all",
  ClearDay: "clear_day",
  ClearNight: "clear_night",
  ClimateMiniSplit: "climate_mini_split",
  ClinicalNotes: "clinical_notes",
  ClockArrowDown: "clock_arrow_down",
  ClockArrowUp: "clock_arrow_up",
  ClockLoader10: "clock_loader_10",
  ClockLoader20: "clock_loader_20",
  ClockLoader40: "clock_loader_40",
  ClockLoader60: "clock_loader_60",
  ClockLoader80: "clock_loader_80",
  ClockLoader90: "clock_loader_90",
  Close: "close",
  CloseFullscreen: "close_fullscreen",
  CloseSmall: "close_small",
  ClosedCaption: "closed_caption",
  ClosedCaptionAdd: "closed_caption_add",
  ClosedCaptionDisabled: "closed_caption_disabled",
  ClosedCaptionOff: "closed_caption_off",
  Cloud: "cloud",
  CloudAlert: "cloud_alert",
  CloudCircle: "cloud_circle",
  CloudDone: "cloud_done",
  CloudDownload: "cloud_download",
  CloudLock: "cloud_lock",
  CloudOff: "cloud_off",
  CloudQueue: "cloud_queue",
  CloudSync: "cloud_sync",
  CloudUpload: "cloud_upload",
  Cloudy: "cloudy",
  CloudyFilled: "cloudy_filled",
  CloudySnowing: "cloudy_snowing",
  Co2: "co2",
  CoPresent: "co_present",
  Code: "code",
  CodeBlocks: "code_blocks",
  CodeOff: "code_off",
  CodeXml: "code_xml",
  Coffee: "coffee",
  CoffeeMaker: "coffee_maker",
  Cognition: "cognition",
  Cognition2: "cognition_2",
  CollapseAll: "collapse_all",
  CollapseContent: "collapse_content",
  Collections: "collections",
  CollectionsBookmark: "collections_bookmark",
  ColorLens: "color_lens",
  Colorize: "colorize",
  Colors: "colors",
  CombineColumns: "combine_columns",
  ComedyMask: "comedy_mask",
  ComicBubble: "comic_bubble",
  Comment: "comment",
  CommentBank: "comment_bank",
  CommentsDisabled: "comments_disabled",
  Commit: "commit",
  Communication: "communication",
  Communities: "communities",
  CommunitiesFilled: "communities_filled",
  Commute: "commute",
  Compare: "compare",
  CompareArrows: "compare_arrows",
  CompassCalibration: "compass_calibration",
  ComponentExchange: "component_exchange",
  Compost: "compost",
  Compress: "compress",
  Computer: "computer",
  ComputerArrowUp: "computer_arrow_up",
  ComputerCancel: "computer_cancel",
  ComputerSound: "computer_sound",
  Concierge: "concierge",
  Conditions: "conditions",
  ConfirmationNum: "confirmation_num",
  ConfirmationNumber: "confirmation_number",
  Congenital: "congenital",
  ConnectWithoutContact: "connect_without_contact",
  ConnectedTv: "connected_tv",
  ConnectingAirports: "connecting_airports",
  Construction: "construction",
  ContactEmergency: "contact_emergency",
  ContactMail: "contact_mail",
  ContactPage: "contact_page",
  ContactPhone: "contact_phone",
  ContactPhoneFilled: "contact_phone_filled",
  ContactSupport: "contact_support",
  Contactless: "contactless",
  ContactlessOff: "contactless_off",
  Contacts: "contacts",
  ContactsProduct: "contacts_product",
  ContentCopy: "content_copy",
  ContentCut: "content_cut",
  ContentPaste: "content_paste",
  ContentPasteGo: "content_paste_go",
  ContentPasteOff: "content_paste_off",
  ContentPasteSearch: "content_paste_search",
  ContextualToken: "contextual_token",
  ContextualTokenAdd: "contextual_token_add",
  Contract: "contract",
  ContractDelete: "contract_delete",
  ContractEdit: "contract_edit",
  Contrast: "contrast",
  ContrastCircle: "contrast_circle",
  ContrastRtlOff: "contrast_rtl_off",
  ContrastSquare: "contrast_square",
  ControlCamera: "control_camera",
  ControlPoint: "control_point",
  ControlPointDuplicate: "control_point_duplicate",
  ControllerGen: "controller_gen",
  Conversation: "conversation",
  ConversionPath: "conversion_path",
  ConversionPathOff: "conversion_path_off",
  ConvertToText: "convert_to_text",
  ConveyorBelt: "conveyor_belt",
  Cookie: "cookie",
  CookieOff: "cookie_off",
  Cooking: "cooking",
  CoolToDry: "cool_to_dry",
  Copy: "copy",
  CopyAll: "copy_all",
  Copyright: "copyright",
  Coronavirus: "coronavirus",
  CorporateFare: "corporate_fare",
  Cottage: "cottage",
  Counter0: "counter_0",
  Counter1: "counter_1",
  Counter2: "counter_2",
  Counter3: "counter_3",
  Counter4: "counter_4",
  Counter5: "counter_5",
  Counter6: "counter_6",
  Counter7: "counter_7",
  Counter8: "counter_8",
  Counter9: "counter_9",
  Countertops: "countertops",
  Create: "create",
  CreateNewFolder: "create_new_folder",
  CreditCard: "credit_card",
  CreditCardClock: "credit_card_clock",
  CreditCardGear: "credit_card_gear",
  CreditCardHeart: "credit_card_heart",
  CreditCardOff: "credit_card_off",
  CreditScore: "credit_score",
  Crib: "crib",
  CrisisAlert: "crisis_alert",
  Crop: "crop",
  Crop169: "crop_16_9",
  Crop219: "crop_21_9",
  Crop23: "crop_2_3",
  Crop32: "crop_3_2",
  Crop54: "crop_5_4",
  Crop75: "crop_7_5",
  Crop916: "crop_9_16",
  CropDin: "crop_din",
  CropFree: "crop_free",
  CropLandscape: "crop_landscape",
  CropOriginal: "crop_original",
  CropPortrait: "crop_portrait",
  CropRotate: "crop_rotate",
  CropSquare: "crop_square",
  Crossword: "crossword",
  Crowdsource: "crowdsource",
  Crown: "crown",
  CrueltyFree: "cruelty_free",
  Css: "css",
  Csv: "csv",
  CurrencyBitcoin: "currency_bitcoin",
  CurrencyExchange: "currency_exchange",
  CurrencyFranc: "currency_franc",
  CurrencyLira: "currency_lira",
  CurrencyPound: "currency_pound",
  CurrencyRuble: "currency_ruble",
  CurrencyRupee: "currency_rupee",
  CurrencyRupeeCircle: "currency_rupee_circle",
  CurrencyYen: "currency_yen",
  CurrencyYuan: "currency_yuan",
  Curtains: "curtains",
  CurtainsClosed: "curtains_closed",
  CustomTypography: "custom_typography",
  Cut: "cut",
  Cycle: "cycle",
  Cyclone: "cyclone",
  Dangerous: "dangerous",
  DarkMode: "dark_mode",
  Dashboard: "dashboard",
  Dashboard2: "dashboard_2",
  Dashboard2Add: "dashboard_2_add",
  Dashboard2Edit: "dashboard_2_edit",
  Dashboard2Gear: "dashboard_2_gear",
  DashboardCustomize: "dashboard_customize",
  DataAlert: "data_alert",
  DataArray: "data_array",
  DataCheck: "data_check",
  DataExploration: "data_exploration",
  DataInfoAlert: "data_info_alert",
  DataLossPrevention: "data_loss_prevention",
  DataObject: "data_object",
  DataSaverOff: "data_saver_off",
  DataSaverOn: "data_saver_on",
  DataTable: "data_table",
  DataThresholding: "data_thresholding",
  DataUsage: "data_usage",
  Database: "database",
  DatabaseOff: "database_off",
  DatabaseSearch: "database_search",
  DatabaseUpload: "database_upload",
  Dataset: "dataset",
  DatasetLinked: "dataset_linked",
  DateRange: "date_range",
  Deblur: "deblur",
  Deceased: "deceased",
  DecimalDecrease: "decimal_decrease",
  DecimalIncrease: "decimal_increase",
  Deck: "deck",
  Dehaze: "dehaze",
  Delete: "delete",
  DeleteForever: "delete_forever",
  DeleteHistory: "delete_history",
  DeleteOutline: "delete_outline",
  DeleteSweep: "delete_sweep",
  DeliveryDining: "delivery_dining",
  DeliveryTruckBolt: "delivery_truck_bolt",
  DeliveryTruckSpeed: "delivery_truck_speed",
  Demography: "demography",
  DensityLarge: "density_large",
  DensityMedium: "density_medium",
  DensitySmall: "density_small",
  Dentistry: "dentistry",
  DepartureBoard: "departure_board",
  DeployedCode: "deployed_code",
  DeployedCodeAccount: "deployed_code_account",
  DeployedCodeAlert: "deployed_code_alert",
  DeployedCodeHistory: "deployed_code_history",
  DeployedCodeUpdate: "deployed_code_update",
  Dermatology: "dermatology",
  Description: "description",
  Deselect: "deselect",
  DesignServices: "design_services",
  Desk: "desk",
  Deskphone: "deskphone",
  DesktopAccessDisabled: "desktop_access_disabled",
  DesktopCloud: "desktop_cloud",
  DesktopCloudStack: "desktop_cloud_stack",
  DesktopLandscape: "desktop_landscape",
  DesktopLandscapeAdd: "desktop_landscape_add",
  DesktopMac: "desktop_mac",
  DesktopPortrait: "desktop_portrait",
  DesktopWindows: "desktop_windows",
  Destruction: "destruction",
  Details: "details",
  DetectionAndZone: "detection_and_zone",
  DetectionAndZoneOff: "detection_and_zone_off",
  Detector: "detector",
  DetectorAlarm: "detector_alarm",
  DetectorBattery: "detector_battery",
  DetectorCo: "detector_co",
  DetectorOffline: "detector_offline",
  DetectorSmoke: "detector_smoke",
  DetectorStatus: "detector_status",
  DeveloperBoard: "developer_board",
  DeveloperBoardOff: "developer_board_off",
  DeveloperGuide: "developer_guide",
  DeveloperMode: "developer_mode",
  DeveloperModeTv: "developer_mode_tv",
  DeviceBand: "device_band",
  DeviceHub: "device_hub",
  DeviceReset: "device_reset",
  DeviceSwooshStar: "device_swoosh_star",
  DeviceThermostat: "device_thermostat",
  DeviceUnknown: "device_unknown",
  Devices: "devices",
  DevicesFold: "devices_fold",
  DevicesFold2: "devices_fold_2",
  DevicesOff: "devices_off",
  DevicesOther: "devices_other",
  DevicesWearables: "devices_wearables",
  DewPoint: "dew_point",
  Diagnosis: "diagnosis",
  DiagonalLine: "diagonal_line",
  DialerSip: "dialer_sip",
  Dialogs: "dialogs",
  Dialpad: "dialpad",
  Diamond: "diamond",
  DiamondShine: "diamond_shine",
  Dictionary: "dictionary",
  Difference: "difference",
  DigitalOutOfHome: "digital_out_of_home",
  DigitalWellbeing: "digital_wellbeing",
  DineHeart: "dine_heart",
  DineIn: "dine_in",
  DineLamp: "dine_lamp",
  Dining: "dining",
  DinnerDining: "dinner_dining",
  Directions: "directions",
  DirectionsAlt: "directions_alt",
  DirectionsAltOff: "directions_alt_off",
  DirectionsBike: "directions_bike",
  DirectionsBoat: "directions_boat",
  DirectionsBoatFilled: "directions_boat_filled",
  DirectionsBus: "directions_bus",
  DirectionsBusFilled: "directions_bus_filled",
  DirectionsCar: "directions_car",
  DirectionsCarFilled: "directions_car_filled",
  DirectionsFerry: "directions_ferry",
  DirectionsOff: "directions_off",
  DirectionsRailway: "directions_railway",
  DirectionsRailway2: "directions_railway_2",
  DirectionsRailwayFilled: "directions_railway_filled",
  DirectionsRun: "directions_run",
  DirectionsSubway: "directions_subway",
  DirectionsSubwayFilled: "directions_subway_filled",
  DirectionsTrain: "directions_train",
  DirectionsTransit: "directions_transit",
  DirectionsTransitFilled: "directions_transit_filled",
  DirectionsWalk: "directions_walk",
  DirectorySync: "directory_sync",
  DirtyLens: "dirty_lens",
  DisabledByDefault: "disabled_by_default",
  DisabledVisible: "disabled_visible",
  DiscFull: "disc_full",
  Discord: "discord",
  Discount: "discount",
  DiscoverTune: "discover_tune",
  Dishwasher: "dishwasher",
  DishwasherGen: "dishwasher_gen",
  DisplayAdd: "display_add",
  DisplayExternalInput: "display_external_input",
  DisplaySettings: "display_settings",
  Distance: "distance",
  Diversity1: "diversity_1",
  Diversity2: "diversity_2",
  Diversity3: "diversity_3",
  Diversity4: "diversity_4",
  DndForwardslash: "dnd_forwardslash",
  Dns: "dns",
  DoDisturb: "do_disturb",
  DoDisturbAlt: "do_disturb_alt",
  DoDisturbOff: "do_disturb_off",
  DoDisturbOn: "do_disturb_on",
  DoNotDisturb: "do_not_disturb",
  DoNotDisturbAlt: "do_not_disturb_alt",
  DoNotDisturbOff: "do_not_disturb_off",
  DoNotDisturbOn: "do_not_disturb_on",
  DoNotDisturbOnTotalSilence: "do_not_disturb_on_total_silence",
  DoNotStep: "do_not_step",
  DoNotTouch: "do_not_touch",
  Dock: "dock",
  DockToBottom: "dock_to_bottom",
  DockToLeft: "dock_to_left",
  DockToRight: "dock_to_right",
  Docs: "docs",
  DocsAddOn: "docs_add_on",
  DocsAppsScript: "docs_apps_script",
  DocumentScanner: "document_scanner",
  DocumentSearch: "document_search",
  Domain: "domain",
  DomainAdd: "domain_add",
  DomainDisabled: "domain_disabled",
  DomainDisabledCheck: "domain_disabled_check",
  DomainVerification: "domain_verification",
  DomainVerificationOff: "domain_verification_off",
  DominoMask: "domino_mask",
  Done: "done",
  DoneAll: "done_all",
  DoneOutline: "done_outline",
  DonutLarge: "donut_large",
  DonutSmall: "donut_small",
  DoorBack: "door_back",
  DoorFront: "door_front",
  DoorOpen: "door_open",
  DoorSensor: "door_sensor",
  DoorSliding: "door_sliding",
  Doorbell: "doorbell",
  Doorbell3p: "doorbell_3p",
  DoorbellChime: "doorbell_chime",
  DoubleArrow: "double_arrow",
  DownhillSkiing: "downhill_skiing",
  Download: "download",
  Download2: "download_2",
  DownloadDone: "download_done",
  DownloadForOffline: "download_for_offline",
  Downloading: "downloading",
  Draft: "draft",
  DraftOrders: "draft_orders",
  Drafts: "drafts",
  DragClick: "drag_click",
  DragHandle: "drag_handle",
  DragIndicator: "drag_indicator",
  DragPan: "drag_pan",
  Draw: "draw",
  DrawAbstract: "draw_abstract",
  DrawCollage: "draw_collage",
  DrawingRecognition: "drawing_recognition",
  Dresser: "dresser",
  DriveEta: "drive_eta",
  DriveExport: "drive_export",
  DriveFileMove: "drive_file_move",
  DriveFileMoveOutline: "drive_file_move_outline",
  DriveFileMoveRtl: "drive_file_move_rtl",
  DriveFileRename: "drive_file_rename",
  DriveFileRenameOutline: "drive_file_rename_outline",
  DriveFolderUpload: "drive_folder_upload",
  Drone: "drone",
  Drone2: "drone_2",
  Dropdown: "dropdown",
  DropdownMenu: "dropdown_menu",
  DropperEye: "dropper_eye",
  Dry: "dry",
  DryCleaning: "dry_cleaning",
  DualScreen: "dual_screen",
  Duo: "duo",
  Dvr: "dvr",
  DynamicFeed: "dynamic_feed",
  DynamicForm: "dynamic_form",
  E911Avatar: "e911_avatar",
  E911Emergency: "e911_emergency",
  EMobiledata: "e_mobiledata",
  EMobiledataBadge: "e_mobiledata_badge",
  EarSound: "ear_sound",
  EarbudCase: "earbud_case",
  EarbudLeft: "earbud_left",
  EarbudRight: "earbud_right",
  Earbuds: "earbuds",
  Earbuds2: "earbuds_2",
  EarbudsBattery: "earbuds_battery",
  EarlyOn: "early_on",
  Earthquake: "earthquake",
  East: "east",
  Ecg: "ecg",
  EcgHeart: "ecg_heart",
  Eco: "eco",
  Eda: "eda",
  EdgesensorHigh: "edgesensor_high",
  EdgesensorLow: "edgesensor_low",
  Edit: "edit",
  EditArrowDown: "edit_arrow_down",
  EditArrowUp: "edit_arrow_up",
  EditAttributes: "edit_attributes",
  EditAudio: "edit_audio",
  EditCalendar: "edit_calendar",
  EditDocument: "edit_document",
  EditLocation: "edit_location",
  EditLocationAlt: "edit_location_alt",
  EditNote: "edit_note",
  EditNotifications: "edit_notifications",
  EditOff: "edit_off",
  EditRoad: "edit_road",
  EditSquare: "edit_square",
  EditorChoice: "editor_choice",
  Egg: "egg",
  EggAlt: "egg_alt",
  Eject: "eject",
  Elderly: "elderly",
  ElderlyWoman: "elderly_woman",
  ElectricBike: "electric_bike",
  ElectricBolt: "electric_bolt",
  ElectricCar: "electric_car",
  ElectricMeter: "electric_meter",
  ElectricMoped: "electric_moped",
  ElectricRickshaw: "electric_rickshaw",
  ElectricScooter: "electric_scooter",
  ElectricalServices: "electrical_services",
  Elevation: "elevation",
  Elevator: "elevator",
  Email: "email",
  Emergency: "emergency",
  EmergencyHeat: "emergency_heat",
  EmergencyHeat2: "emergency_heat_2",
  EmergencyHome: "emergency_home",
  EmergencyRecording: "emergency_recording",
  EmergencyShare: "emergency_share",
  EmergencyShareOff: "emergency_share_off",
  EmojiEmotions: "emoji_emotions",
  EmojiEvents: "emoji_events",
  EmojiFlags: "emoji_flags",
  EmojiFoodBeverage: "emoji_food_beverage",
  EmojiLanguage: "emoji_language",
  EmojiNature: "emoji_nature",
  EmojiObjects: "emoji_objects",
  EmojiPeople: "emoji_people",
  EmojiSymbols: "emoji_symbols",
  EmojiTransportation: "emoji_transportation",
  Emoticon: "emoticon",
  EmptyDashboard: "empty_dashboard",
  Enable: "enable",
  Encrypted: "encrypted",
  EncryptedAdd: "encrypted_add",
  EncryptedAddCircle: "encrypted_add_circle",
  EncryptedMinusCircle: "encrypted_minus_circle",
  EncryptedOff: "encrypted_off",
  Endocrinology: "endocrinology",
  Energy: "energy",
  EnergyProgramSaving: "energy_program_saving",
  EnergyProgramTimeUsed: "energy_program_time_used",
  EnergySavingsLeaf: "energy_savings_leaf",
  Engineering: "engineering",
  EnhancePhotoTranslate: "enhance_photo_translate",
  EnhancedEncryption: "enhanced_encryption",
  Ent: "ent",
  Enterprise: "enterprise",
  EnterpriseOff: "enterprise_off",
  Equal: "equal",
  Equalizer: "equalizer",
  EraserSize1: "eraser_size_1",
  EraserSize2: "eraser_size_2",
  EraserSize3: "eraser_size_3",
  EraserSize4: "eraser_size_4",
  EraserSize5: "eraser_size_5",
  Error: "error",
  ErrorCircleRounded: "error_circle_rounded",
  ErrorMed: "error_med",
  ErrorOutline: "error_outline",
  Escalator: "escalator",
  EscalatorWarning: "escalator_warning",
  Euro: "euro",
  EuroSymbol: "euro_symbol",
  EvCharger: "ev_charger",
  EvMobiledataBadge: "ev_mobiledata_badge",
  EvShadow: "ev_shadow",
  EvShadowAdd: "ev_shadow_add",
  EvShadowMinus: "ev_shadow_minus",
  EvStation: "ev_station",
  Event: "event",
  EventAvailable: "event_available",
  EventBusy: "event_busy",
  EventList: "event_list",
  EventNote: "event_note",
  EventRepeat: "event_repeat",
  EventSeat: "event_seat",
  EventUpcoming: "event_upcoming",
  Exclamation: "exclamation",
  Exercise: "exercise",
  ExitToApp: "exit_to_app",
  Expand: "expand",
  ExpandAll: "expand_all",
  ExpandCircleDown: "expand_circle_down",
  ExpandCircleRight: "expand_circle_right",
  ExpandCircleUp: "expand_circle_up",
  ExpandContent: "expand_content",
  ExpandLess: "expand_less",
  ExpandMore: "expand_more",
  ExpansionPanels: "expansion_panels",
  ExpensionPanels: "expension_panels",
  Experiment: "experiment",
  Explicit: "explicit",
  Explore: "explore",
  ExploreNearby: "explore_nearby",
  ExploreOff: "explore_off",
  Explosion: "explosion",
  ExportNotes: "export_notes",
  Exposure: "exposure",
  ExposureMinus1: "exposure_minus_1",
  ExposureMinus2: "exposure_minus_2",
  ExposureNeg1: "exposure_neg_1",
  ExposureNeg2: "exposure_neg_2",
  ExposurePlus1: "exposure_plus_1",
  ExposurePlus2: "exposure_plus_2",
  ExposureZero: "exposure_zero",
  Extension: "extension",
  ExtensionOff: "extension_off",
  EyeTracking: "eye_tracking",
  Eyebrow: "eyebrow",
  Eyeglasses: "eyeglasses",
  Eyeglasses2: "eyeglasses_2",
  Eyeglasses2Sound: "eyeglasses_2_sound",
  Eyeglasses3: "eyeglasses_3",
  Face: "face",
  Face2: "face_2",
  Face3: "face_3",
  Face4: "face_4",
  Face5: "face_5",
  Face6: "face_6",
  FaceDown: "face_down",
  FaceLeft: "face_left",
  FaceNod: "face_nod",
  FaceRetouchingNatural: "face_retouching_natural",
  FaceRetouchingOff: "face_retouching_off",
  FaceRight: "face_right",
  FaceShake: "face_shake",
  FaceUnlock: "face_unlock",
  FaceUp: "face_up",
  Facebook: "facebook",
  FactCheck: "fact_check",
  Factory: "factory",
  Falling: "falling",
  FamiliarFaceAndZone: "familiar_face_and_zone",
  FamilyGroup: "family_group",
  FamilyHistory: "family_history",
  FamilyHome: "family_home",
  FamilyLink: "family_link",
  FamilyRestroom: "family_restroom",
  FamilyStar: "family_star",
  FanFocus: "fan_focus",
  FanIndirect: "fan_indirect",
  FarsightDigital: "farsight_digital",
  FastForward: "fast_forward",
  FastRewind: "fast_rewind",
  Fastfood: "fastfood",
  Faucet: "faucet",
  Favorite: "favorite",
  FavoriteBorder: "favorite_border",
  FavoriteOutline: "favorite_outline",
  Fax: "fax",
  FeatureSearch: "feature_search",
  FeaturedPlayList: "featured_play_list",
  FeaturedSeasonalAndGifts: "featured_seasonal_and_gifts",
  FeaturedVideo: "featured_video",
  Feed: "feed",
  Feedback: "feedback",
  Female: "female",
  Femur: "femur",
  FemurAlt: "femur_alt",
  Fence: "fence",
  Fertile: "fertile",
  Festival: "festival",
  FiberDvr: "fiber_dvr",
  FiberManualRecord: "fiber_manual_record",
  FiberNew: "fiber_new",
  FiberPin: "fiber_pin",
  FiberSmartRecord: "fiber_smart_record",
  FileCopy: "file_copy",
  FileCopyOff: "file_copy_off",
  FileDownload: "file_download",
  FileDownloadDone: "file_download_done",
  FileDownloadOff: "file_download_off",
  FileExport: "file_export",
  FileJson: "file_json",
  FileMap: "file_map",
  FileMapStack: "file_map_stack",
  FileOpen: "file_open",
  FilePng: "file_png",
  FilePresent: "file_present",
  FileSave: "file_save",
  FileSaveOff: "file_save_off",
  FileUpload: "file_upload",
  FileUploadOff: "file_upload_off",
  Files: "files",
  Filter: "filter",
  Filter1: "filter_1",
  Filter2: "filter_2",
  Filter3: "filter_3",
  Filter4: "filter_4",
  Filter5: "filter_5",
  Filter6: "filter_6",
  Filter7: "filter_7",
  Filter8: "filter_8",
  Filter9: "filter_9",
  Filter9Plus: "filter_9_plus",
  FilterAlt: "filter_alt",
  FilterAltOff: "filter_alt_off",
  FilterArrowRight: "filter_arrow_right",
  FilterBAndW: "filter_b_and_w",
  FilterCenterFocus: "filter_center_focus",
  FilterDrama: "filter_drama",
  FilterFrames: "filter_frames",
  FilterHdr: "filter_hdr",
  FilterList: "filter_list",
  FilterListAlt: "filter_list_alt",
  FilterListOff: "filter_list_off",
  FilterNone: "filter_none",
  FilterRetrolux: "filter_retrolux",
  FilterTiltShift: "filter_tilt_shift",
  FilterVintage: "filter_vintage",
  Finance: "finance",
  FinanceChip: "finance_chip",
  FinanceMode: "finance_mode",
  FindInPage: "find_in_page",
  FindReplace: "find_replace",
  Fingerprint: "fingerprint",
  FingerprintOff: "fingerprint_off",
  FireCheck: "fire_check",
  FireExtinguisher: "fire_extinguisher",
  FireHydrant: "fire_hydrant",
  FireHydrantAlt: "fire_hydrant_alt",
  FireTruck: "fire_truck",
  Fireplace: "fireplace",
  FirstPage: "first_page",
  FitPage: "fit_page",
  FitPageHeight: "fit_page_height",
  FitPageWidth: "fit_page_width",
  FitScreen: "fit_screen",
  FitWidth: "fit_width",
  Fitbit: "fitbit",
  FitnessCenter: "fitness_center",
  FitnessTracker: "fitness_tracker",
  FitnessTrackers: "fitness_trackers",
  Flag: "flag",
  Flag2: "flag_2",
  FlagCheck: "flag_check",
  FlagCircle: "flag_circle",
  FlagFilled: "flag_filled",
  Flaky: "flaky",
  Flare: "flare",
  FlashAuto: "flash_auto",
  FlashOff: "flash_off",
  FlashOn: "flash_on",
  FlashlightOff: "flashlight_off",
  FlashlightOn: "flashlight_on",
  Flatware: "flatware",
  FlexDirection: "flex_direction",
  FlexNoWrap: "flex_no_wrap",
  FlexWrap: "flex_wrap",
  Flight: "flight",
  FlightClass: "flight_class",
  FlightLand: "flight_land",
  FlightTakeoff: "flight_takeoff",
  FlightsAndHotels: "flights_and_hotels",
  Flightsmode: "flightsmode",
  Flip: "flip",
  FlipCameraAndroid: "flip_camera_android",
  FlipCameraIos: "flip_camera_ios",
  FlipToBack: "flip_to_back",
  FlipToFront: "flip_to_front",
  FloatLandscape2: "float_landscape_2",
  FloatPortrait2: "float_portrait_2",
  Flood: "flood",
  Floor: "floor",
  FloorLamp: "floor_lamp",
  Flourescent: "flourescent",
  Flowchart: "flowchart",
  Flowsheet: "flowsheet",
  Fluid: "fluid",
  FluidBalance: "fluid_balance",
  FluidMed: "fluid_med",
  Fluorescent: "fluorescent",
  Flutter: "flutter",
  FlutterDash: "flutter_dash",
  Flyover: "flyover",
  FmdBad: "fmd_bad",
  FmdGood: "fmd_good",
  Foggy: "foggy",
  FoldedHands: "folded_hands",
  Folder: "folder",
  FolderCheck: "folder_check",
  FolderCheck2: "folder_check_2",
  FolderCode: "folder_code",
  FolderCopy: "folder_copy",
  FolderData: "folder_data",
  FolderDelete: "folder_delete",
  FolderEye: "folder_eye",
  FolderInfo: "folder_info",
  FolderLimited: "folder_limited",
  FolderManaged: "folder_managed",
  FolderMatch: "folder_match",
  FolderOff: "folder_off",
  FolderOpen: "folder_open",
  FolderShared: "folder_shared",
  FolderSpecial: "folder_special",
  FolderSupervised: "folder_supervised",
  FolderZip: "folder_zip",
  FollowTheSigns: "follow_the_signs",
  FontDownload: "font_download",
  FontDownloadOff: "font_download_off",
  FoodBank: "food_bank",
  FootBones: "foot_bones",
  Footprint: "footprint",
  ForYou: "for_you",
  Forest: "forest",
  ForkChart: "fork_chart",
  ForkLeft: "fork_left",
  ForkRight: "fork_right",
  ForkSpoon: "fork_spoon",
  Forklift: "forklift",
  FormatAlignCenter: "format_align_center",
  FormatAlignJustify: "format_align_justify",
  FormatAlignLeft: "format_align_left",
  FormatAlignRight: "format_align_right",
  FormatBold: "format_bold",
  FormatClear: "format_clear",
  FormatColorFill: "format_color_fill",
  FormatColorReset: "format_color_reset",
  FormatColorText: "format_color_text",
  FormatH1: "format_h1",
  FormatH2: "format_h2",
  FormatH3: "format_h3",
  FormatH4: "format_h4",
  FormatH5: "format_h5",
  FormatH6: "format_h6",
  FormatImageBack: "format_image_back",
  FormatImageBreakLeft: "format_image_break_left",
  FormatImageBreakRight: "format_image_break_right",
  FormatImageFront: "format_image_front",
  FormatImageInlineLeft: "format_image_inline_left",
  FormatImageInlineRight: "format_image_inline_right",
  FormatImageLeft: "format_image_left",
  FormatImageRight: "format_image_right",
  FormatIndentDecrease: "format_indent_decrease",
  FormatIndentIncrease: "format_indent_increase",
  FormatInkHighlighter: "format_ink_highlighter",
  FormatItalic: "format_italic",
  FormatLetterSpacing: "format_letter_spacing",
  FormatLetterSpacing2: "format_letter_spacing_2",
  FormatLetterSpacingStandard: "format_letter_spacing_standard",
  FormatLetterSpacingWide: "format_letter_spacing_wide",
  FormatLetterSpacingWider: "format_letter_spacing_wider",
  FormatLineSpacing: "format_line_spacing",
  FormatListBulleted: "format_list_bulleted",
  FormatListBulletedAdd: "format_list_bulleted_add",
  FormatListNumbered: "format_list_numbered",
  FormatListNumberedRtl: "format_list_numbered_rtl",
  FormatOverline: "format_overline",
  FormatPaint: "format_paint",
  FormatPaintOff: "format_paint_off",
  FormatParagraph: "format_paragraph",
  FormatQuote: "format_quote",
  FormatQuoteOff: "format_quote_off",
  FormatShapes: "format_shapes",
  FormatSize: "format_size",
  FormatStrikethrough: "format_strikethrough",
  FormatTextClip: "format_text_clip",
  FormatTextOverflow: "format_text_overflow",
  FormatTextWrap: "format_text_wrap",
  FormatTextdirectionLToR: "format_textdirection_l_to_r",
  FormatTextdirectionRToL: "format_textdirection_r_to_l",
  FormatTextdirectionVertical: "format_textdirection_vertical",
  FormatUnderline: "format_underline",
  FormatUnderlined: "format_underlined",
  FormatUnderlinedSquiggle: "format_underlined_squiggle",
  FormsAddOn: "forms_add_on",
  FormsAppsScript: "forms_apps_script",
  Fort: "fort",
  Forum: "forum",
  Forward: "forward",
  Forward10: "forward_10",
  Forward30: "forward_30",
  Forward5: "forward_5",
  ForwardCircle: "forward_circle",
  ForwardMedia: "forward_media",
  ForwardToInbox: "forward_to_inbox",
  Foundation: "foundation",
  Fragrance: "fragrance",
  FrameBug: "frame_bug",
  FrameExclamation: "frame_exclamation",
  FrameInspect: "frame_inspect",
  FramePerson: "frame_person",
  FramePersonMic: "frame_person_mic",
  FramePersonOff: "frame_person_off",
  FrameReload: "frame_reload",
  FrameSource: "frame_source",
  FreeBreakfast: "free_breakfast",
  FreeCancellation: "free_cancellation",
  FrontHand: "front_hand",
  FrontLoader: "front_loader",
  FullCoverage: "full_coverage",
  FullHd: "full_hd",
  FullStackedBarChart: "full_stacked_bar_chart",
  Fullscreen: "fullscreen",
  FullscreenExit: "fullscreen_exit",
  FullscreenPortrait: "fullscreen_portrait",
  Function: "function",
  Functions: "functions",
  Funicular: "funicular",
  GMobiledata: "g_mobiledata",
  GMobiledataBadge: "g_mobiledata_badge",
  GTranslate: "g_translate",
  GalleryThumbnail: "gallery_thumbnail",
  GameBumperLeft: "game_bumper_left",
  GameBumperRight: "game_bumper_right",
  GameButtonL: "game_button_l",
  GameButtonL1: "game_button_l1",
  GameButtonL2: "game_button_l2",
  GameButtonR: "game_button_r",
  GameButtonR1: "game_button_r1",
  GameButtonR2: "game_button_r2",
  GameButtonZl: "game_button_zl",
  GameButtonZr: "game_button_zr",
  GameStickL3: "game_stick_l3",
  GameStickLeft: "game_stick_left",
  GameStickR3: "game_stick_r3",
  GameStickRight: "game_stick_right",
  GameTriggerLeft: "game_trigger_left",
  GameTriggerRight: "game_trigger_right",
  Gamepad: "gamepad",
  GamepadCircleDown: "gamepad_circle_down",
  GamepadCircleLeft: "gamepad_circle_left",
  GamepadCircleRight: "gamepad_circle_right",
  GamepadCircleUp: "gamepad_circle_up",
  GamepadDown: "gamepad_down",
  GamepadLeft: "gamepad_left",
  GamepadRight: "gamepad_right",
  GamepadUp: "gamepad_up",
  Games: "games",
  Garage: "garage",
  GarageCheck: "garage_check",
  GarageDoor: "garage_door",
  GarageDoorOpen: "garage_door_open",
  GarageHome: "garage_home",
  GarageMoney: "garage_money",
  GardenCart: "garden_cart",
  GasMeter: "gas_meter",
  Gastroenterology: "gastroenterology",
  Gate: "gate",
  Gavel: "gavel",
  GeneralDevice: "general_device",
  GeneratingTokens: "generating_tokens",
  Genetics: "genetics",
  Genres: "genres",
  Gesture: "gesture",
  GestureSelect: "gesture_select",
  GetApp: "get_app",
  Gif: "gif",
  Gif2: "gif_2",
  GifBox: "gif_box",
  Girl: "girl",
  Gite: "gite",
  GlassCup: "glass_cup",
  Globe: "globe",
  Globe2Cancel: "globe_2_cancel",
  Globe2Question: "globe_2_question",
  GlobeAsia: "globe_asia",
  GlobeBook: "globe_book",
  GlobeClock: "globe_clock",
  GlobeLocationPin: "globe_location_pin",
  GlobeUk: "globe_uk",
  Glucose: "glucose",
  Glyphs: "glyphs",
  GoToLine: "go_to_line",
  GolfCourse: "golf_course",
  GondolaLift: "gondola_lift",
  GoogleHomeDevices: "google_home_devices",
  GooglePlusReshare: "google_plus_reshare",
  GoogleTvRemote: "google_tv_remote",
  GoogleWifi: "google_wifi",
  GppBad: "gpp_bad",
  GppGood: "gpp_good",
  GppMaybe: "gpp_maybe",
  GpsFixed: "gps_fixed",
  GpsNotFixed: "gps_not_fixed",
  GpsOff: "gps_off",
  Grade: "grade",
  Gradient: "gradient",
  Grading: "grading",
  Grain: "grain",
  Graph1: "graph_1",
  Graph2: "graph_2",
  Graph3: "graph_3",
  Graph4: "graph_4",
  Graph5: "graph_5",
  Graph6: "graph_6",
  Graph7: "graph_7",
  Graph8: "graph_8",
  GraphicEq: "graphic_eq",
  GraphicEqOff: "graphic_eq_off",
  Grass: "grass",
  Grid3x3: "grid_3x3",
  Grid3x3Off: "grid_3x3_off",
  Grid4x4: "grid_4x4",
  GridGoldenratio: "grid_goldenratio",
  GridGuides: "grid_guides",
  GridLayoutSide: "grid_layout_side",
  GridOff: "grid_off",
  GridOn: "grid_on",
  GridView: "grid_view",
  Grocery: "grocery",
  Group: "group",
  GroupAdd: "group_add",
  GroupOff: "group_off",
  GroupRemove: "group_remove",
  GroupSearch: "group_search",
  GroupWork: "group_work",
  GroupedBarChart: "grouped_bar_chart",
  Groups: "groups",
  Groups2: "groups_2",
  Groups3: "groups_3",
  Guardian: "guardian",
  Gynecology: "gynecology",
  HMobiledata: "h_mobiledata",
  HMobiledataBadge: "h_mobiledata_badge",
  HPlusMobiledata: "h_plus_mobiledata",
  HPlusMobiledataBadge: "h_plus_mobiledata_badge",
  Hail: "hail",
  Hallway: "hallway",
  HanamiDango: "hanami_dango",
  HandBones: "hand_bones",
  HandGesture: "hand_gesture",
  HandGestureOff: "hand_gesture_off",
  HandMeal: "hand_meal",
  HandPackage: "hand_package",
  HandheldController: "handheld_controller",
  Handshake: "handshake",
  HandwritingRecognition: "handwriting_recognition",
  Handyman: "handyman",
  HangoutVideo: "hangout_video",
  HangoutVideoOff: "hangout_video_off",
  HardDisk: "hard_disk",
  HardDrive: "hard_drive",
  HardDrive2: "hard_drive_2",
  Hardware: "hardware",
  Hd: "hd",
  HdrAuto: "hdr_auto",
  HdrAutoSelect: "hdr_auto_select",
  HdrEnhancedSelect: "hdr_enhanced_select",
  HdrOff: "hdr_off",
  HdrOffSelect: "hdr_off_select",
  HdrOn: "hdr_on",
  HdrOnSelect: "hdr_on_select",
  HdrPlus: "hdr_plus",
  HdrPlusOff: "hdr_plus_off",
  HdrStrong: "hdr_strong",
  HdrWeak: "hdr_weak",
  HeadMountedDevice: "head_mounted_device",
  Headphones: "headphones",
  HeadphonesBattery: "headphones_battery",
  Headset: "headset",
  HeadsetMic: "headset_mic",
  HeadsetOff: "headset_off",
  Healing: "healing",
  HealthAndBeauty: "health_and_beauty",
  HealthAndSafety: "health_and_safety",
  HealthCross: "health_cross",
  HealthMetrics: "health_metrics",
  HeapSnapshotLarge: "heap_snapshot_large",
  HeapSnapshotMultiple: "heap_snapshot_multiple",
  HeapSnapshotThumbnail: "heap_snapshot_thumbnail",
  Hearing: "hearing",
  HearingAid: "hearing_aid",
  HearingAidDisabled: "hearing_aid_disabled",
  HearingAidDisabledLeft: "hearing_aid_disabled_left",
  HearingAidLeft: "hearing_aid_left",
  HearingDisabled: "hearing_disabled",
  HeartBroken: "heart_broken",
  HeartCheck: "heart_check",
  HeartMinus: "heart_minus",
  HeartPlus: "heart_plus",
  HeartSmile: "heart_smile",
  Heat: "heat",
  HeatPump: "heat_pump",
  HeatPumpBalance: "heat_pump_balance",
  Height: "height",
  Helicopter: "helicopter",
  Help: "help",
  HelpCenter: "help_center",
  HelpClinic: "help_clinic",
  HelpOutline: "help_outline",
  Hematology: "hematology",
  Hevc: "hevc",
  Hexagon: "hexagon",
  Hide: "hide",
  HideImage: "hide_image",
  HideSource: "hide_source",
  HighChair: "high_chair",
  HighDensity: "high_density",
  HighQuality: "high_quality",
  HighQualityOff: "high_quality_off",
  HighRes: "high_res",
  Highlight: "highlight",
  HighlightAlt: "highlight_alt",
  HighlightKeyboardFocus: "highlight_keyboard_focus",
  HighlightMouseCursor: "highlight_mouse_cursor",
  HighlightOff: "highlight_off",
  HighlightRemove: "highlight_remove",
  HighlightTextCursor: "highlight_text_cursor",
  HighlighterSize1: "highlighter_size_1",
  HighlighterSize2: "highlighter_size_2",
  HighlighterSize3: "highlighter_size_3",
  HighlighterSize4: "highlighter_size_4",
  HighlighterSize5: "highlighter_size_5",
  Hiking: "hiking",
  History: "history",
  History2: "history_2",
  HistoryEdu: "history_edu",
  HistoryOff: "history_off",
  HistoryToggleOff: "history_toggle_off",
  Hive: "hive",
  Hls: "hls",
  HlsOff: "hls_off",
  HolidayVillage: "holiday_village",
  Home: "home",
  HomeAndGarden: "home_and_garden",
  HomeAppLogo: "home_app_logo",
  HomeFilled: "home_filled",
  HomeHealth: "home_health",
  HomeImprovementAndTools: "home_improvement_and_tools",
  HomeIotDevice: "home_iot_device",
  HomeMax: "home_max",
  HomeMaxDots: "home_max_dots",
  HomeMini: "home_mini",
  HomePin: "home_pin",
  HomeRepairService: "home_repair_service",
  HomeSpeaker: "home_speaker",
  HomeStorage: "home_storage",
  HomeStorageGear: "home_storage_gear",
  HomeWork: "home_work",
  HorizontalAlignCenter: "horizontal_align_center",
  HorizontalAlignLeft: "horizontal_align_left",
  HorizontalAlignRight: "horizontal_align_right",
  HorizontalDistribute: "horizontal_distribute",
  HorizontalRule: "horizontal_rule",
  HorizontalSplit: "horizontal_split",
  Host: "host",
  HotTub: "hot_tub",
  Hotel: "hotel",
  HotelClass: "hotel_class",
  Hourglass: "hourglass",
  HourglassArrowDown: "hourglass_arrow_down",
  HourglassArrowUp: "hourglass_arrow_up",
  HourglassBottom: "hourglass_bottom",
  HourglassCheck: "hourglass_check",
  HourglassDisabled: "hourglass_disabled",
  HourglassEmpty: "hourglass_empty",
  HourglassFull: "hourglass_full",
  HourglassPause: "hourglass_pause",
  HourglassTop: "hourglass_top",
  House: "house",
  HouseSiding: "house_siding",
  HouseWithShield: "house_with_shield",
  Houseboat: "houseboat",
  HouseholdSupplies: "household_supplies",
  Hov: "hov",
  HowToReg: "how_to_reg",
  HowToVote: "how_to_vote",
  HrResting: "hr_resting",
  Html: "html",
  Http: "http",
  Https: "https",
  Hub: "hub",
  Humerus: "humerus",
  HumerusAlt: "humerus_alt",
  HumidityHigh: "humidity_high",
  HumidityIndoor: "humidity_indoor",
  HumidityLow: "humidity_low",
  HumidityMid: "humidity_mid",
  HumidityPercentage: "humidity_percentage",
  Hvac: "hvac",
  HvacMaxDefrost: "hvac_max_defrost",
  IceSkating: "ice_skating",
  Icecream: "icecream",
  IdCard: "id_card",
  IdCard2: "id_card_2",
  IdentityAwareProxy: "identity_aware_proxy",
  IdentityPlatform: "identity_platform",
  Ifl: "ifl",
  Iframe: "iframe",
  IframeOff: "iframe_off",
  Image: "image",
  ImageArrowUp: "image_arrow_up",
  ImageAspectRatio: "image_aspect_ratio",
  ImageInset: "image_inset",
  ImageNotSupported: "image_not_supported",
  ImageSearch: "image_search",
  ImagesearchRoller: "imagesearch_roller",
  Imagesmode: "imagesmode",
  Immunology: "immunology",
  ImportContacts: "import_contacts",
  ImportExport: "import_export",
  ImportantDevices: "important_devices",
  InHomeMode: "in_home_mode",
  InactiveOrder: "inactive_order",
  Inbox: "inbox",
  InboxCustomize: "inbox_customize",
  InboxText: "inbox_text",
  InboxTextAsterisk: "inbox_text_asterisk",
  InboxTextPerson: "inbox_text_person",
  InboxTextShare: "inbox_text_share",
  IncompleteCircle: "incomplete_circle",
  IndeterminateCheckBox: "indeterminate_check_box",
  IndeterminateQuestionBox: "indeterminate_question_box",
  Info: "info",
  InfoI: "info_i",
  InfoOutline: "info_outline",
  Infrared: "infrared",
  InkEraser: "ink_eraser",
  InkEraserOff: "ink_eraser_off",
  InkHighlighter: "ink_highlighter",
  InkHighlighterMove: "ink_highlighter_move",
  InkHighlighterOff: "ink_highlighter_off",
  InkMarker: "ink_marker",
  InkPen: "ink_pen",
  InkSelection: "ink_selection",
  Inpatient: "inpatient",
  Input: "input",
  InputCircle: "input_circle",
  InsertChart: "insert_chart",
  InsertChartFilled: "insert_chart_filled",
  InsertChartOutlined: "insert_chart_outlined",
  InsertComment: "insert_comment",
  InsertDriveFile: "insert_drive_file",
  InsertEmoticon: "insert_emoticon",
  InsertInvitation: "insert_invitation",
  InsertLink: "insert_link",
  InsertPageBreak: "insert_page_break",
  InsertPhoto: "insert_photo",
  InsertText: "insert_text",
  Insights: "insights",
  InstallDesktop: "install_desktop",
  InstallMobile: "install_mobile",
  InstantMix: "instant_mix",
  IntegrationInstructions: "integration_instructions",
  InteractiveSpace: "interactive_space",
  Interests: "interests",
  InterpreterMode: "interpreter_mode",
  Inventory: "inventory",
  Inventory2: "inventory_2",
  InvertColors: "invert_colors",
  InvertColorsOff: "invert_colors_off",
  InvertColorsOn: "invert_colors_on",
  Ios: "ios",
  IosShare: "ios_share",
  Iron: "iron",
  Iso: "iso",
  JamboardKiosk: "jamboard_kiosk",
  JapaneseCurry: "japanese_curry",
  JapaneseFlag: "japanese_flag",
  Javascript: "javascript",
  Jewelry: "jewelry",
  Join: "join",
  JoinFull: "join_full",
  JoinInner: "join_inner",
  JoinLeft: "join_left",
  JoinRight: "join_right",
  Joystick: "joystick",
  JumpToElement: "jump_to_element",
  KanjiAlcohol: "kanji_alcohol",
  Kayaking: "kayaking",
  KebabDining: "kebab_dining",
  Keep: "keep",
  KeepOff: "keep_off",
  KeepPin: "keep_pin",
  KeepPublic: "keep_public",
  Kettle: "kettle",
  Key: "key",
  KeyOff: "key_off",
  KeyVertical: "key_vertical",
  KeyVisualizer: "key_visualizer",
  Keyboard: "keyboard",
  KeyboardAlt: "keyboard_alt",
  KeyboardArrowDown: "keyboard_arrow_down",
  KeyboardArrowLeft: "keyboard_arrow_left",
  KeyboardArrowRight: "keyboard_arrow_right",
  KeyboardArrowUp: "keyboard_arrow_up",
  KeyboardBackspace: "keyboard_backspace",
  KeyboardCapslock: "keyboard_capslock",
  KeyboardCapslockBadge: "keyboard_capslock_badge",
  KeyboardCommandKey: "keyboard_command_key",
  KeyboardControl: "keyboard_control",
  KeyboardControlKey: "keyboard_control_key",
  KeyboardDoubleArrowDown: "keyboard_double_arrow_down",
  KeyboardDoubleArrowLeft: "keyboard_double_arrow_left",
  KeyboardDoubleArrowRight: "keyboard_double_arrow_right",
  KeyboardDoubleArrowUp: "keyboard_double_arrow_up",
  KeyboardExternalInput: "keyboard_external_input",
  KeyboardFull: "keyboard_full",
  KeyboardHide: "keyboard_hide",
  KeyboardKeys: "keyboard_keys",
  KeyboardLock: "keyboard_lock",
  KeyboardLockOff: "keyboard_lock_off",
  KeyboardOff: "keyboard_off",
  KeyboardOnscreen: "keyboard_onscreen",
  KeyboardOptionKey: "keyboard_option_key",
  KeyboardPreviousLanguage: "keyboard_previous_language",
  KeyboardReturn: "keyboard_return",
  KeyboardTab: "keyboard_tab",
  KeyboardTabRtl: "keyboard_tab_rtl",
  KeyboardVoice: "keyboard_voice",
  KidStar: "kid_star",
  KingBed: "king_bed",
  Kitchen: "kitchen",
  Kitesurfing: "kitesurfing",
  LabPanel: "lab_panel",
  LabProfile: "lab_profile",
  LabResearch: "lab_research",
  Label: "label",
  LabelImportant: "label_important",
  LabelImportantOutline: "label_important_outline",
  LabelOff: "label_off",
  LabelOutline: "label_outline",
  Labs: "labs",
  Lan: "lan",
  Landscape: "landscape",
  Landscape2: "landscape_2",
  Landscape2Edit: "landscape_2_edit",
  Landscape2Off: "landscape_2_off",
  Landslide: "landslide",
  Language: "language",
  LanguageChineseArray: "language_chinese_array",
  LanguageChineseCangjie: "language_chinese_cangjie",
  LanguageChineseDayi: "language_chinese_dayi",
  LanguageChinesePinyin: "language_chinese_pinyin",
  LanguageChineseQuick: "language_chinese_quick",
  LanguageChineseWubi: "language_chinese_wubi",
  LanguageFrench: "language_french",
  LanguageGbEnglish: "language_gb_english",
  LanguageInternational: "language_international",
  LanguageJapaneseKana: "language_japanese_kana",
  LanguageKoreanLatin: "language_korean_latin",
  LanguagePinyin: "language_pinyin",
  LanguageSpanish: "language_spanish",
  LanguageUs: "language_us",
  LanguageUsColemak: "language_us_colemak",
  LanguageUsDvorak: "language_us_dvorak",
  Laps: "laps",
  Laptop: "laptop",
  LaptopCar: "laptop_car",
  LaptopChromebook: "laptop_chromebook",
  LaptopMac: "laptop_mac",
  LaptopWindows: "laptop_windows",
  LassoSelect: "lasso_select",
  LastPage: "last_page",
  Launch: "launch",
  Laundry: "laundry",
  Layers: "layers",
  LayersClear: "layers_clear",
  Lda: "lda",
  Leaderboard: "leaderboard",
  LeakAdd: "leak_add",
  LeakRemove: "leak_remove",
  LeaveBagsAtHome: "leave_bags_at_home",
  LeftClick: "left_click",
  LeftPanelClose: "left_panel_close",
  LeftPanelOpen: "left_panel_open",
  LegendToggle: "legend_toggle",
  Lens: "lens",
  LensBlur: "lens_blur",
  LetterSwitch: "letter_switch",
  LibraryAdd: "library_add",
  LibraryAddCheck: "library_add_check",
  LibraryBooks: "library_books",
  LibraryMusic: "library_music",
  License: "license",
  LiftToTalk: "lift_to_talk",
  Light: "light",
  LightGroup: "light_group",
  LightGroup2: "light_group_2",
  LightMode: "light_mode",
  LightModeAuto: "light_mode_auto",
  LightOff: "light_off",
  Lightbulb: "lightbulb",
  Lightbulb2: "lightbulb_2",
  LightbulbCircle: "lightbulb_circle",
  LightbulbOutline: "lightbulb_outline",
  LightningStand: "lightning_stand",
  Lightstrip: "lightstrip",
  LineAxis: "line_axis",
  LineCurve: "line_curve",
  LineEnd: "line_end",
  LineEndArrow: "line_end_arrow",
  LineEndArrowNotch: "line_end_arrow_notch",
  LineEndCircle: "line_end_circle",
  LineEndDiamond: "line_end_diamond",
  LineEndSquare: "line_end_square",
  LineStart: "line_start",
  LineStartArrow: "line_start_arrow",
  LineStartArrowNotch: "line_start_arrow_notch",
  LineStartCircle: "line_start_circle",
  LineStartDiamond: "line_start_diamond",
  LineStartSquare: "line_start_square",
  LineStyle: "line_style",
  LineWeight: "line_weight",
  LinearScale: "linear_scale",
  Link: "link",
  Link2: "link_2",
  LinkOff: "link_off",
  LinkedCamera: "linked_camera",
  LinkedServices: "linked_services",
  Lips: "lips",
  Liquor: "liquor",
  List: "list",
  List2: "list_2",
  ListAlt: "list_alt",
  ListAltAdd: "list_alt_add",
  ListAltCheck: "list_alt_check",
  ListArrow: "list_arrow",
  Lists: "lists",
  LiveHelp: "live_help",
  LiveTv: "live_tv",
  Living: "living",
  LocalActivity: "local_activity",
  LocalAirport: "local_airport",
  LocalAtm: "local_atm",
  LocalAttraction: "local_attraction",
  LocalBar: "local_bar",
  LocalCafe: "local_cafe",
  LocalCarWash: "local_car_wash",
  LocalConvenienceStore: "local_convenience_store",
  LocalDining: "local_dining",
  LocalDrink: "local_drink",
  LocalFireDepartment: "local_fire_department",
  LocalFlorist: "local_florist",
  LocalGasStation: "local_gas_station",
  LocalGroceryStore: "local_grocery_store",
  LocalHospital: "local_hospital",
  LocalHotel: "local_hotel",
  LocalLaundryService: "local_laundry_service",
  LocalLibrary: "local_library",
  LocalMall: "local_mall",
  LocalMovies: "local_movies",
  LocalOffer: "local_offer",
  LocalParking: "local_parking",
  LocalPharmacy: "local_pharmacy",
  LocalPhone: "local_phone",
  LocalPizza: "local_pizza",
  LocalPlay: "local_play",
  LocalPolice: "local_police",
  LocalPostOffice: "local_post_office",
  LocalPrintShop: "local_print_shop",
  LocalPrintshop: "local_printshop",
  LocalRestaurant: "local_restaurant",
  LocalSee: "local_see",
  LocalShipping: "local_shipping",
  LocalTaxi: "local_taxi",
  LocationAutomation: "location_automation",
  LocationAway: "location_away",
  LocationChip: "location_chip",
  LocationCity: "location_city",
  LocationDisabled: "location_disabled",
  LocationHistory: "location_history",
  LocationHome: "location_home",
  LocationOff: "location_off",
  LocationOn: "location_on",
  LocationPin: "location_pin",
  LocationSearching: "location_searching",
  LocatorTag: "locator_tag",
  Lock: "lock",
  LockClock: "lock_clock",
  LockOpen: "lock_open",
  LockOpenCircle: "lock_open_circle",
  LockOpenRight: "lock_open_right",
  LockOutline: "lock_outline",
  LockPerson: "lock_person",
  LockReset: "lock_reset",
  Login: "login",
  LogoDev: "logo_dev",
  Logout: "logout",
  Looks: "looks",
  Looks3: "looks_3",
  Looks4: "looks_4",
  Looks5: "looks_5",
  Looks6: "looks_6",
  LooksOne: "looks_one",
  LooksTwo: "looks_two",
  Loop: "loop",
  Loupe: "loupe",
  LowDensity: "low_density",
  LowPriority: "low_priority",
  Lowercase: "lowercase",
  Loyalty: "loyalty",
  LteMobiledata: "lte_mobiledata",
  LteMobiledataBadge: "lte_mobiledata_badge",
  LtePlusMobiledata: "lte_plus_mobiledata",
  LtePlusMobiledataBadge: "lte_plus_mobiledata_badge",
  Luggage: "luggage",
  LunchDining: "lunch_dining",
  Lyrics: "lyrics",
  MacroAuto: "macro_auto",
  MacroOff: "macro_off",
  MagicButton: "magic_button",
  MagicExchange: "magic_exchange",
  MagicTether: "magic_tether",
  MagnificationLarge: "magnification_large",
  MagnificationSmall: "magnification_small",
  MagnifyDocked: "magnify_docked",
  MagnifyFullscreen: "magnify_fullscreen",
  Mail: "mail",
  MailAsterisk: "mail_asterisk",
  MailLock: "mail_lock",
  MailOff: "mail_off",
  MailOutline: "mail_outline",
  MailShield: "mail_shield",
  Male: "male",
  Man: "man",
  Man2: "man_2",
  Man3: "man_3",
  Man4: "man_4",
  ManageAccounts: "manage_accounts",
  ManageHistory: "manage_history",
  ManageSearch: "manage_search",
  Manga: "manga",
  Manufacturing: "manufacturing",
  Map: "map",
  MapPinHeart: "map_pin_heart",
  MapPinReview: "map_pin_review",
  MapSearch: "map_search",
  MapsHomeWork: "maps_home_work",
  MapsUgc: "maps_ugc",
  Margin: "margin",
  MarkAsUnread: "mark_as_unread",
  MarkChatRead: "mark_chat_read",
  MarkChatUnread: "mark_chat_unread",
  MarkEmailRead: "mark_email_read",
  MarkEmailUnread: "mark_email_unread",
  MarkUnreadChatAlt: "mark_unread_chat_alt",
  Markdown: "markdown",
  MarkdownCopy: "markdown_copy",
  MarkdownPaste: "markdown_paste",
  Markunread: "markunread",
  MarkunreadMailbox: "markunread_mailbox",
  MaskedTransitions: "masked_transitions",
  MaskedTransitionsAdd: "masked_transitions_add",
  Masks: "masks",
  Massage: "massage",
  MatchCase: "match_case",
  MatchCaseOff: "match_case_off",
  MatchWord: "match_word",
  Matter: "matter",
  Maximize: "maximize",
  MealDinner: "meal_dinner",
  MealLunch: "meal_lunch",
  MeasuringTape: "measuring_tape",
  MediaBluetoothOff: "media_bluetooth_off",
  MediaBluetoothOn: "media_bluetooth_on",
  MediaLink: "media_link",
  MediaOutput: "media_output",
  MediaOutputOff: "media_output_off",
  Mediation: "mediation",
  MedicalInformation: "medical_information",
  MedicalMask: "medical_mask",
  MedicalServices: "medical_services",
  Medication: "medication",
  MedicationLiquid: "medication_liquid",
  MeetingRoom: "meeting_room",
  Memory: "memory",
  MemoryAlt: "memory_alt",
  MenstrualHealth: "menstrual_health",
  Menu: "menu",
  MenuBook: "menu_book",
  MenuBook2: "menu_book_2",
  MenuOpen: "menu_open",
  Merge: "merge",
  MergeType: "merge_type",
  Message: "message",
  Messenger: "messenger",
  MessengerOutline: "messenger_outline",
  Metabolism: "metabolism",
  Metro: "metro",
  MfgNestYaleLock: "mfg_nest_yale_lock",
  Mic: "mic",
  MicAlert: "mic_alert",
  MicDouble: "mic_double",
  MicExternalOff: "mic_external_off",
  MicExternalOn: "mic_external_on",
  MicGear: "mic_gear",
  MicNone: "mic_none",
  MicOff: "mic_off",
  Microbiology: "microbiology",
  Microwave: "microwave",
  MicrowaveGen: "microwave_gen",
  MilitaryTech: "military_tech",
  Mimo: "mimo",
  MimoDisconnect: "mimo_disconnect",
  Mindfulness: "mindfulness",
  Minimize: "minimize",
  MinorCrash: "minor_crash",
  Mintmark: "mintmark",
  MiscellaneousServices: "miscellaneous_services",
  MissedVideoCall: "missed_video_call",
  MissedVideoCallFilled: "missed_video_call_filled",
  MissingController: "missing_controller",
  Mist: "mist",
  Mitre: "mitre",
  MixtureMed: "mixture_med",
  Mms: "mms",
  Mobile: "mobile",
  Mobile2: "mobile_2",
  Mobile3: "mobile_3",
  MobileAlert: "mobile_alert",
  MobileArrowDown: "mobile_arrow_down",
  MobileArrowRight: "mobile_arrow_right",
  MobileArrowUpRight: "mobile_arrow_up_right",
  MobileBlock: "mobile_block",
  MobileCamera: "mobile_camera",
  MobileCameraFront: "mobile_camera_front",
  MobileCameraRear: "mobile_camera_rear",
  MobileCancel: "mobile_cancel",
  MobileCast: "mobile_cast",
  MobileCharge: "mobile_charge",
  MobileChat: "mobile_chat",
  MobileCheck: "mobile_check",
  MobileCode: "mobile_code",
  MobileDock: "mobile_dock",
  MobileDots: "mobile_dots",
  MobileFriendly: "mobile_friendly",
  MobileGear: "mobile_gear",
  MobileHand: "mobile_hand",
  MobileHandLeft: "mobile_hand_left",
  MobileHandLeftOff: "mobile_hand_left_off",
  MobileHandOff: "mobile_hand_off",
  MobileInfo: "mobile_info",
  MobileLandscape: "mobile_landscape",
  MobileLayout: "mobile_layout",
  MobileLockLandscape: "mobile_lock_landscape",
  MobileLockPortrait: "mobile_lock_portrait",
  MobileLoupe: "mobile_loupe",
  MobileMenu: "mobile_menu",
  MobileOff: "mobile_off",
  MobileQuestion: "mobile_question",
  MobileRotate: "mobile_rotate",
  MobileRotateLock: "mobile_rotate_lock",
  MobileScreenShare: "mobile_screen_share",
  MobileScreensaver: "mobile_screensaver",
  MobileSensorHi: "mobile_sensor_hi",
  MobileSensorLo: "mobile_sensor_lo",
  MobileShare: "mobile_share",
  MobileShareStack: "mobile_share_stack",
  MobileSound: "mobile_sound",
  MobileSound2: "mobile_sound_2",
  MobileSoundOff: "mobile_sound_off",
  MobileSpeaker: "mobile_speaker",
  MobileTap: "mobile_tap",
  MobileText: "mobile_text",
  MobileText2: "mobile_text_2",
  MobileTheft: "mobile_theft",
  MobileTicket: "mobile_ticket",
  MobileUnlock: "mobile_unlock",
  MobileVibrate: "mobile_vibrate",
  MobileWrench: "mobile_wrench",
  MobiledataArrows: "mobiledata_arrows",
  MobiledataOff: "mobiledata_off",
  Mode: "mode",
  ModeComment: "mode_comment",
  ModeCool: "mode_cool",
  ModeCoolOff: "mode_cool_off",
  ModeDual: "mode_dual",
  ModeEdit: "mode_edit",
  ModeEditOutline: "mode_edit_outline",
  ModeFan: "mode_fan",
  ModeFan2: "mode_fan_2",
  ModeFanOff: "mode_fan_off",
  ModeHeat: "mode_heat",
  ModeHeatCool: "mode_heat_cool",
  ModeHeatOff: "mode_heat_off",
  ModeNight: "mode_night",
  ModeOfTravel: "mode_of_travel",
  ModeOffOn: "mode_off_on",
  ModeStandby: "mode_standby",
  ModelTraining: "model_training",
  Modeling: "modeling",
  MonetizationOn: "monetization_on",
  Money: "money",
  MoneyBag: "money_bag",
  MoneyOff: "money_off",
  MoneyOffCsred: "money_off_csred",
  MoneyRange: "money_range",
  Monitor: "monitor",
  MonitorHeart: "monitor_heart",
  MonitorWeight: "monitor_weight",
  MonitorWeightGain: "monitor_weight_gain",
  MonitorWeightLoss: "monitor_weight_loss",
  Monitoring: "monitoring",
  MonochromePhotos: "monochrome_photos",
  Monorail: "monorail",
  Mood: "mood",
  MoodBad: "mood_bad",
  MoodHeart: "mood_heart",
  MoonStars: "moon_stars",
  Mop: "mop",
  Moped: "moped",
  MopedPackage: "moped_package",
  More: "more",
  MoreDown: "more_down",
  MoreHoriz: "more_horiz",
  MoreTime: "more_time",
  MoreUp: "more_up",
  MoreVert: "more_vert",
  Mosque: "mosque",
  MotionBlur: "motion_blur",
  MotionMode: "motion_mode",
  MotionPhotosAuto: "motion_photos_auto",
  MotionPhotosOff: "motion_photos_off",
  MotionPhotosOn: "motion_photos_on",
  MotionPhotosPause: "motion_photos_pause",
  MotionPhotosPaused: "motion_photos_paused",
  MotionPlay: "motion_play",
  MotionSensorActive: "motion_sensor_active",
  MotionSensorAlert: "motion_sensor_alert",
  MotionSensorIdle: "motion_sensor_idle",
  MotionSensorUrgent: "motion_sensor_urgent",
  Motorcycle: "motorcycle",
  MountainFlag: "mountain_flag",
  MountainSteam: "mountain_steam",
  Mouse: "mouse",
  MouseLock: "mouse_lock",
  MouseLockOff: "mouse_lock_off",
  Move: "move",
  MoveDown: "move_down",
  MoveGroup: "move_group",
  MoveItem: "move_item",
  MoveLocation: "move_location",
  MoveSelectionDown: "move_selection_down",
  MoveSelectionLeft: "move_selection_left",
  MoveSelectionRight: "move_selection_right",
  MoveSelectionUp: "move_selection_up",
  MoveToInbox: "move_to_inbox",
  MoveUp: "move_up",
  MovedLocation: "moved_location",
  Movie: "movie",
  MovieCreation: "movie_creation",
  MovieEdit: "movie_edit",
  MovieEditOff: "movie_edit_off",
  MovieFilter: "movie_filter",
  MovieInfo: "movie_info",
  MovieOff: "movie_off",
  MovieSpeaker: "movie_speaker",
  Moving: "moving",
  MovingBeds: "moving_beds",
  MovingMinistry: "moving_ministry",
  Mp: "mp",
  Multicooker: "multicooker",
  MultilineChart: "multiline_chart",
  MultimodalHandEye: "multimodal_hand_eye",
  MultipleAirports: "multiple_airports",
  MultipleStop: "multiple_stop",
  MultitrackAudio: "multitrack_audio",
  Museum: "museum",
  MusicCast: "music_cast",
  MusicHistory: "music_history",
  MusicNote: "music_note",
  MusicNote2: "music_note_2",
  MusicNoteAdd: "music_note_add",
  MusicOff: "music_off",
  MusicVideo: "music_video",
  MyLibraryAdd: "my_library_add",
  MyLibraryBooks: "my_library_books",
  MyLibraryMusic: "my_library_music",
  MyLocation: "my_location",
  Mystery: "mystery",
  Nat: "nat",
  Nature: "nature",
  NaturePeople: "nature_people",
  NavigateBefore: "navigate_before",
  NavigateNext: "navigate_next",
  Navigation: "navigation",
  NearMe: "near_me",
  NearMeDisabled: "near_me_disabled",
  Nearby: "nearby",
  NearbyError: "nearby_error",
  NearbyOff: "nearby_off",
  Nephrology: "nephrology",
  NestAudio: "nest_audio",
  NestCamFloodlight: "nest_cam_floodlight",
  NestCamIndoor: "nest_cam_indoor",
  NestCamIq: "nest_cam_iq",
  NestCamIqOutdoor: "nest_cam_iq_outdoor",
  NestCamMagnetMount: "nest_cam_magnet_mount",
  NestCamOutdoor: "nest_cam_outdoor",
  NestCamStand: "nest_cam_stand",
  NestCamWallMount: "nest_cam_wall_mount",
  NestCamWiredStand: "nest_cam_wired_stand",
  NestClockFarsightAnalog: "nest_clock_farsight_analog",
  NestClockFarsightDigital: "nest_clock_farsight_digital",
  NestConnect: "nest_connect",
  NestDetect: "nest_detect",
  NestDisplay: "nest_display",
  NestDisplayMax: "nest_display_max",
  NestDoorbellVisitor: "nest_doorbell_visitor",
  NestEcoLeaf: "nest_eco_leaf",
  NestFarsightCool: "nest_farsight_cool",
  NestFarsightDual: "nest_farsight_dual",
  NestFarsightEco: "nest_farsight_eco",
  NestFarsightHeat: "nest_farsight_heat",
  NestFarsightSeasonal: "nest_farsight_seasonal",
  NestFarsightWeather: "nest_farsight_weather",
  NestFoundSavings: "nest_found_savings",
  NestGaleWifi: "nest_gale_wifi",
  NestHeatLinkE: "nest_heat_link_e",
  NestHeatLinkGen3: "nest_heat_link_gen_3",
  NestHelloDoorbell: "nest_hello_doorbell",
  NestLocatorTag: "nest_locator_tag",
  NestMini: "nest_mini",
  NestMultiRoom: "nest_multi_room",
  NestProtect: "nest_protect",
  NestRemote: "nest_remote",
  NestRemoteComfortSensor: "nest_remote_comfort_sensor",
  NestSecureAlarm: "nest_secure_alarm",
  NestSunblock: "nest_sunblock",
  NestTag: "nest_tag",
  NestThermostat: "nest_thermostat",
  NestThermostatEEu: "nest_thermostat_e_eu",
  NestThermostatGen3: "nest_thermostat_gen_3",
  NestThermostatSensor: "nest_thermostat_sensor",
  NestThermostatSensorEu: "nest_thermostat_sensor_eu",
  NestThermostatZirconiumEu: "nest_thermostat_zirconium_eu",
  NestTrueRadiant: "nest_true_radiant",
  NestWakeOnApproach: "nest_wake_on_approach",
  NestWakeOnPress: "nest_wake_on_press",
  NestWifiGale: "nest_wifi_gale",
  NestWifiMistral: "nest_wifi_mistral",
  NestWifiPoint: "nest_wifi_point",
  NestWifiPointVento: "nest_wifi_point_vento",
  NestWifiPro: "nest_wifi_pro",
  NestWifiPro2: "nest_wifi_pro_2",
  NestWifiRouter: "nest_wifi_router",
  NetworkCell: "network_cell",
  NetworkCheck: "network_check",
  NetworkIntelNode: "network_intel_node",
  NetworkIntelligence: "network_intelligence",
  NetworkIntelligenceHistory: "network_intelligence_history",
  NetworkIntelligenceUpdate: "network_intelligence_update",
  NetworkLocked: "network_locked",
  NetworkManage: "network_manage",
  NetworkNode: "network_node",
  NetworkPing: "network_ping",
  NetworkWifi: "network_wifi",
  NetworkWifi1Bar: "network_wifi_1_bar",
  NetworkWifi1BarLocked: "network_wifi_1_bar_locked",
  NetworkWifi2Bar: "network_wifi_2_bar",
  NetworkWifi2BarLocked: "network_wifi_2_bar_locked",
  NetworkWifi3Bar: "network_wifi_3_bar",
  NetworkWifi3BarLocked: "network_wifi_3_bar_locked",
  NetworkWifiLocked: "network_wifi_locked",
  Neurology: "neurology",
  NewLabel: "new_label",
  NewReleases: "new_releases",
  NewWindow: "new_window",
  News: "news",
  Newsmode: "newsmode",
  Newspaper: "newspaper",
  Newsstand: "newsstand",
  NextPlan: "next_plan",
  NextWeek: "next_week",
  Nfc: "nfc",
  NfcOff: "nfc_off",
  NightShelter: "night_shelter",
  NightSightAuto: "night_sight_auto",
  NightSightAutoOff: "night_sight_auto_off",
  NightSightMax: "night_sight_max",
  Nightlife: "nightlife",
  Nightlight: "nightlight",
  NightlightRound: "nightlight_round",
  NightsStay: "nights_stay",
  NoAccounts: "no_accounts",
  NoAdultContent: "no_adult_content",
  NoBackpack: "no_backpack",
  NoCell: "no_cell",
  NoCrash: "no_crash",
  NoDrinks: "no_drinks",
  NoEncryption: "no_encryption",
  NoEncryptionGmailerrorred: "no_encryption_gmailerrorred",
  NoFlash: "no_flash",
  NoFood: "no_food",
  NoLuggage: "no_luggage",
  NoMeals: "no_meals",
  NoMeetingRoom: "no_meeting_room",
  NoPhotography: "no_photography",
  NoSim: "no_sim",
  NoSound: "no_sound",
  NoStroller: "no_stroller",
  NoTransfer: "no_transfer",
  NoiseAware: "noise_aware",
  NoiseControlOff: "noise_control_off",
  NoiseControlOn: "noise_control_on",
  NordicWalking: "nordic_walking",
  North: "north",
  NorthEast: "north_east",
  NorthWest: "north_west",
  NotAccessible: "not_accessible",
  NotAccessibleForward: "not_accessible_forward",
  NotInterested: "not_interested",
  NotListedLocation: "not_listed_location",
  NotStarted: "not_started",
  Note: "note",
  NoteAdd: "note_add",
  NoteAlt: "note_alt",
  NoteStack: "note_stack",
  NoteStackAdd: "note_stack_add",
  Notes: "notes",
  NotificationAdd: "notification_add",
  NotificationAudio: "notification_audio",
  NotificationAudioOff: "notification_audio_off",
  NotificationImportant: "notification_important",
  NotificationMultiple: "notification_multiple",
  NotificationSettings: "notification_settings",
  NotificationSound: "notification_sound",
  Notifications: "notifications",
  NotificationsActive: "notifications_active",
  NotificationsNone: "notifications_none",
  NotificationsOff: "notifications_off",
  NotificationsOn: "notifications_on",
  NotificationsPaused: "notifications_paused",
  NotificationsUnread: "notifications_unread",
  NowWallpaper: "now_wallpaper",
  NowWidgets: "now_widgets",
  Numbers: "numbers",
  Nutrition: "nutrition",
  Ods: "ods",
  Odt: "odt",
  OfflineBolt: "offline_bolt",
  OfflinePin: "offline_pin",
  OfflinePinOff: "offline_pin_off",
  OfflineShare: "offline_share",
  OilBarrel: "oil_barrel",
  Okonomiyaki: "okonomiyaki",
  OnDeviceTraining: "on_device_training",
  OnHubDevice: "on_hub_device",
  Oncology: "oncology",
  OndemandVideo: "ondemand_video",
  OnlinePrediction: "online_prediction",
  Onsen: "onsen",
  Opacity: "opacity",
  OpenInBrowser: "open_in_browser",
  OpenInFull: "open_in_full",
  OpenInNew: "open_in_new",
  OpenInNewDown: "open_in_new_down",
  OpenInNewOff: "open_in_new_off",
  OpenInPhone: "open_in_phone",
  OpenJam: "open_jam",
  OpenRun: "open_run",
  OpenWith: "open_with",
  Ophthalmology: "ophthalmology",
  OralDisease: "oral_disease",
  Orbit: "orbit",
  OrderApprove: "order_approve",
  OrderPlay: "order_play",
  Orders: "orders",
  Orthopedics: "orthopedics",
  OtherAdmission: "other_admission",
  OtherHouses: "other_houses",
  Outbond: "outbond",
  Outbound: "outbound",
  Outbox: "outbox",
  OutboxAlt: "outbox_alt",
  OutdoorGarden: "outdoor_garden",
  OutdoorGrill: "outdoor_grill",
  OutgoingMail: "outgoing_mail",
  Outlet: "outlet",
  OutlinedFlag: "outlined_flag",
  Outpatient: "outpatient",
  OutpatientMed: "outpatient_med",
  Output: "output",
  OutputCircle: "output_circle",
  Oven: "oven",
  OvenGen: "oven_gen",
  Overview: "overview",
  OverviewKey: "overview_key",
  Owl: "owl",
  OxygenSaturation: "oxygen_saturation",
  P2p: "p2p",
  Pace: "pace",
  Pacemaker: "pacemaker",
  Package: "package",
  Package2: "package_2",
  Padding: "padding",
  Padel: "padel",
  PageControl: "page_control",
  PageFooter: "page_footer",
  PageHeader: "page_header",
  PageInfo: "page_info",
  PageMenuIos: "page_menu_ios",
  Pageless: "pageless",
  Pages: "pages",
  Pageview: "pageview",
  Paid: "paid",
  Palette: "palette",
  Pallet: "pallet",
  PanTool: "pan_tool",
  PanToolAlt: "pan_tool_alt",
  PanZoom: "pan_zoom",
  Panorama: "panorama",
  PanoramaFishEye: "panorama_fish_eye",
  PanoramaFisheye: "panorama_fisheye",
  PanoramaHorizontal: "panorama_horizontal",
  PanoramaHorizontalSelect: "panorama_horizontal_select",
  PanoramaPhotosphere: "panorama_photosphere",
  PanoramaPhotosphereSelect: "panorama_photosphere_select",
  PanoramaVertical: "panorama_vertical",
  PanoramaVerticalSelect: "panorama_vertical_select",
  PanoramaWideAngle: "panorama_wide_angle",
  PanoramaWideAngleSelect: "panorama_wide_angle_select",
  Paragliding: "paragliding",
  ParentChildDining: "parent_child_dining",
  Park: "park",
  ParkingMeter: "parking_meter",
  ParkingSign: "parking_sign",
  ParkingValet: "parking_valet",
  PartlyCloudyDay: "partly_cloudy_day",
  PartlyCloudyNight: "partly_cloudy_night",
  PartnerExchange: "partner_exchange",
  PartnerHeart: "partner_heart",
  PartnerReports: "partner_reports",
  PartyMode: "party_mode",
  Passkey: "passkey",
  Passport: "passport",
  Password: "password",
  Password2: "password_2",
  Password2Off: "password_2_off",
  Paste: "paste",
  PatientList: "patient_list",
  Pattern: "pattern",
  Pause: "pause",
  PauseCircle: "pause_circle",
  PauseCircleFilled: "pause_circle_filled",
  PauseCircleOutline: "pause_circle_outline",
  PausePresentation: "pause_presentation",
  Payment: "payment",
  PaymentArrowDown: "payment_arrow_down",
  PaymentCard: "payment_card",
  Payments: "payments",
  Paypal: "paypal",
  PedalBike: "pedal_bike",
  Pediatrics: "pediatrics",
  PenSize1: "pen_size_1",
  PenSize2: "pen_size_2",
  PenSize3: "pen_size_3",
  PenSize4: "pen_size_4",
  PenSize5: "pen_size_5",
  Pending: "pending",
  PendingActions: "pending_actions",
  Pentagon: "pentagon",
  People: "people",
  PeopleAlt: "people_alt",
  PeopleOutline: "people_outline",
  PeopleSizeDecrease: "people_size_decrease",
  PeopleSizeIncrease: "people_size_increase",
  Percent: "percent",
  PercentDiscount: "percent_discount",
  PerformanceMax: "performance_max",
  Pergola: "pergola",
  PermCameraMic: "perm_camera_mic",
  PermContactCal: "perm_contact_cal",
  PermContactCalendar: "perm_contact_calendar",
  PermDataSetting: "perm_data_setting",
  PermDeviceInfo: "perm_device_info",
  PermDeviceInformation: "perm_device_information",
  PermIdentity: "perm_identity",
  PermMedia: "perm_media",
  PermPhoneMsg: "perm_phone_msg",
  PermScanWifi: "perm_scan_wifi",
  Person: "person",
  Person2: "person_2",
  Person3: "person_3",
  Person4: "person_4",
  PersonAdd: "person_add",
  PersonAddAlt: "person_add_alt",
  PersonAddAlt1: "person_add_alt_1",
  PersonAddDisabled: "person_add_disabled",
  PersonAlert: "person_alert",
  PersonApron: "person_apron",
  PersonBook: "person_book",
  PersonCancel: "person_cancel",
  PersonCelebrate: "person_celebrate",
  PersonCheck: "person_check",
  PersonEdit: "person_edit",
  PersonFilled: "person_filled",
  PersonHeart: "person_heart",
  PersonOff: "person_off",
  PersonOutline: "person_outline",
  PersonPin: "person_pin",
  PersonPinCircle: "person_pin_circle",
  PersonPlay: "person_play",
  PersonRaisedHand: "person_raised_hand",
  PersonRemove: "person_remove",
  PersonRemoveAlt1: "person_remove_alt_1",
  PersonSearch: "person_search",
  PersonShield: "person_shield",
  PersonText: "person_text",
  PersonalBag: "personal_bag",
  PersonalBagOff: "personal_bag_off",
  PersonalBagQuestion: "personal_bag_question",
  PersonalInjury: "personal_injury",
  PersonalPlaces: "personal_places",
  PersonalVideo: "personal_video",
  PestControl: "pest_control",
  PestControlRodent: "pest_control_rodent",
  PetSupplies: "pet_supplies",
  Pets: "pets",
  Phishing: "phishing",
  Phone: "phone",
  PhoneAlt: "phone_alt",
  PhoneAndroid: "phone_android",
  PhoneBluetoothSpeaker: "phone_bluetooth_speaker",
  PhoneCallback: "phone_callback",
  PhoneCancel: "phone_cancel",
  PhoneDisabled: "phone_disabled",
  PhoneEnabled: "phone_enabled",
  PhoneForwarded: "phone_forwarded",
  PhoneInTalk: "phone_in_talk",
  PhoneIphone: "phone_iphone",
  PhoneLocked: "phone_locked",
  PhoneMissed: "phone_missed",
  PhonePaused: "phone_paused",
  Phonelink: "phonelink",
  PhonelinkErase: "phonelink_erase",
  PhonelinkLock: "phonelink_lock",
  PhonelinkOff: "phonelink_off",
  PhonelinkRing: "phonelink_ring",
  PhonelinkRingOff: "phonelink_ring_off",
  PhonelinkSetup: "phonelink_setup",
  Photo: "photo",
  PhotoAlbum: "photo_album",
  PhotoAutoMerge: "photo_auto_merge",
  PhotoCamera: "photo_camera",
  PhotoCameraBack: "photo_camera_back",
  PhotoCameraFront: "photo_camera_front",
  PhotoFilter: "photo_filter",
  PhotoFrame: "photo_frame",
  PhotoLibrary: "photo_library",
  PhotoPrints: "photo_prints",
  PhotoSizeSelectActual: "photo_size_select_actual",
  PhotoSizeSelectLarge: "photo_size_select_large",
  PhotoSizeSelectSmall: "photo_size_select_small",
  Php: "php",
  PhysicalTherapy: "physical_therapy",
  Piano: "piano",
  PianoOff: "piano_off",
  Pickleball: "pickleball",
  PictureAsPdf: "picture_as_pdf",
  PictureInPicture: "picture_in_picture",
  PictureInPictureAlt: "picture_in_picture_alt",
  PictureInPictureCenter: "picture_in_picture_center",
  PictureInPictureLarge: "picture_in_picture_large",
  PictureInPictureMedium: "picture_in_picture_medium",
  PictureInPictureMobile: "picture_in_picture_mobile",
  PictureInPictureOff: "picture_in_picture_off",
  PictureInPictureSmall: "picture_in_picture_small",
  PieChart: "pie_chart",
  PieChartFilled: "pie_chart_filled",
  PieChartOutline: "pie_chart_outline",
  PieChartOutlined: "pie_chart_outlined",
  Pill: "pill",
  PillOff: "pill_off",
  Pin: "pin",
  PinDrop: "pin_drop",
  PinEnd: "pin_end",
  PinHistory: "pin_history",
  PinInvoke: "pin_invoke",
  PinRoad: "pin_road",
  PinRoad2: "pin_road_2",
  Pinboard: "pinboard",
  PinboardUnread: "pinboard_unread",
  Pinch: "pinch",
  PinchZoomIn: "pinch_zoom_in",
  PinchZoomOut: "pinch_zoom_out",
  Pip: "pip",
  PipExit: "pip_exit",
  PivotTableChart: "pivot_table_chart",
  Pix: "pix",
  Place: "place",
  PlaceItem: "place_item",
  Plagiarism: "plagiarism",
  PlaneContrails: "plane_contrails",
  Planet: "planet",
  PlannerBannerAdPt: "planner_banner_ad_pt",
  PlannerReview: "planner_review",
  PlayArrow: "play_arrow",
  PlayCircle: "play_circle",
  PlayCircleFill: "play_circle_fill",
  PlayCircleFilled: "play_circle_filled",
  PlayCircleOutline: "play_circle_outline",
  PlayDisabled: "play_disabled",
  PlayForWork: "play_for_work",
  PlayLesson: "play_lesson",
  PlayMusic: "play_music",
  PlayPause: "play_pause",
  PlayShapes: "play_shapes",
  Playground: "playground",
  Playground2: "playground_2",
  PlayingCards: "playing_cards",
  PlaylistAdd: "playlist_add",
  PlaylistAddCheck: "playlist_add_check",
  PlaylistAddCheckCircle: "playlist_add_check_circle",
  PlaylistAddCircle: "playlist_add_circle",
  PlaylistPlay: "playlist_play",
  PlaylistRemove: "playlist_remove",
  PlugConnect: "plug_connect",
  Plumbing: "plumbing",
  PlusOne: "plus_one",
  Podcasts: "podcasts",
  Podiatry: "podiatry",
  Podium: "podium",
  PointOfSale: "point_of_sale",
  PointScan: "point_scan",
  PokerChip: "poker_chip",
  Policy: "policy",
  PolicyAlert: "policy_alert",
  Poll: "poll",
  Polyline: "polyline",
  Polymer: "polymer",
  Pool: "pool",
  PortableWifiOff: "portable_wifi_off",
  Portrait: "portrait",
  PositionBottomLeft: "position_bottom_left",
  PositionBottomRight: "position_bottom_right",
  PositionTopRight: "position_top_right",
  Post: "post",
  PostAdd: "post_add",
  PottedPlant: "potted_plant",
  Power: "power",
  PowerInput: "power_input",
  PowerOff: "power_off",
  PowerRounded: "power_rounded",
  PowerSettingsCircle: "power_settings_circle",
  PowerSettingsNew: "power_settings_new",
  PrayerTimes: "prayer_times",
  PrecisionManufacturing: "precision_manufacturing",
  Pregnancy: "pregnancy",
  PregnantWoman: "pregnant_woman",
  Preliminary: "preliminary",
  Prescriptions: "prescriptions",
  PresentToAll: "present_to_all",
  Preview: "preview",
  PreviewOff: "preview_off",
  PriceChange: "price_change",
  PriceCheck: "price_check",
  Print: "print",
  PrintAdd: "print_add",
  PrintConnect: "print_connect",
  PrintDisabled: "print_disabled",
  PrintError: "print_error",
  PrintLock: "print_lock",
  Priority: "priority",
  PriorityHigh: "priority_high",
  Privacy: "privacy",
  PrivacyTip: "privacy_tip",
  PrivateConnectivity: "private_connectivity",
  Problem: "problem",
  Procedure: "procedure",
  ProcessChart: "process_chart",
  ProductionQuantityLimits: "production_quantity_limits",
  Productivity: "productivity",
  ProgressActivity: "progress_activity",
  PromptSuggestion: "prompt_suggestion",
  Propane: "propane",
  PropaneTank: "propane_tank",
  Psychiatry: "psychiatry",
  Psychology: "psychology",
  PsychologyAlt: "psychology_alt",
  Public: "public",
  PublicOff: "public_off",
  Publish: "publish",
  PublishedWithChanges: "published_with_changes",
  Pulmonology: "pulmonology",
  PulseAlert: "pulse_alert",
  PunchClock: "punch_clock",
  PushPin: "push_pin",
  QrCode: "qr_code",
  QrCode2: "qr_code_2",
  QrCode2Add: "qr_code_2_add",
  QrCodeScanner: "qr_code_scanner",
  QueryBuilder: "query_builder",
  QueryStats: "query_stats",
  QuestionAnswer: "question_answer",
  QuestionExchange: "question_exchange",
  QuestionMark: "question_mark",
  Queue: "queue",
  QueueMusic: "queue_music",
  QueuePlayNext: "queue_play_next",
  QuickContactsDialer: "quick_contacts_dialer",
  QuickContactsMail: "quick_contacts_mail",
  QuickPhrases: "quick_phrases",
  QuickReference: "quick_reference",
  QuickReferenceAll: "quick_reference_all",
  QuickReorder: "quick_reorder",
  Quickreply: "quickreply",
  QuietTime: "quiet_time",
  QuietTimeActive: "quiet_time_active",
  Quiz: "quiz",
  Quora: "quora",
  RMobiledata: "r_mobiledata",
  Radar: "radar",
  Radio: "radio",
  RadioButtonChecked: "radio_button_checked",
  RadioButtonOff: "radio_button_off",
  RadioButtonOn: "radio_button_on",
  RadioButtonPartial: "radio_button_partial",
  RadioButtonUnchecked: "radio_button_unchecked",
  Radiology: "radiology",
  RailwayAlert: "railway_alert",
  RailwayAlert2: "railway_alert_2",
  Rainy: "rainy",
  RainyHeavy: "rainy_heavy",
  RainyLight: "rainy_light",
  RainySnow: "rainy_snow",
  RamenDining: "ramen_dining",
  RampLeft: "ramp_left",
  RampRight: "ramp_right",
  RangeHood: "range_hood",
  RateReview: "rate_review",
  RateReviewRtl: "rate_review_rtl",
  Raven: "raven",
  RawOff: "raw_off",
  RawOn: "raw_on",
  ReadMore: "read_more",
  ReadinessScore: "readiness_score",
  RealEstateAgent: "real_estate_agent",
  RearCamera: "rear_camera",
  Rebase: "rebase",
  RebaseEdit: "rebase_edit",
  Receipt: "receipt",
  ReceiptLong: "receipt_long",
  ReceiptLongOff: "receipt_long_off",
  RecentActors: "recent_actors",
  RecentPatient: "recent_patient",
  Recenter: "recenter",
  Recommend: "recommend",
  RecordVoiceOver: "record_voice_over",
  Rectangle: "rectangle",
  RectangleAdd: "rectangle_add",
  Recycling: "recycling",
  Reddit: "reddit",
  Redeem: "redeem",
  Redo: "redo",
  ReduceCapacity: "reduce_capacity",
  Refresh: "refresh",
  RegularExpression: "regular_expression",
  Relax: "relax",
  ReleaseAlert: "release_alert",
  RememberMe: "remember_me",
  Reminder: "reminder",
  RemindersAlt: "reminders_alt",
  RemoteGen: "remote_gen",
  Remove: "remove",
  RemoveCircle: "remove_circle",
  RemoveCircleOutline: "remove_circle_outline",
  RemoveDone: "remove_done",
  RemoveFromQueue: "remove_from_queue",
  RemoveModerator: "remove_moderator",
  RemoveRedEye: "remove_red_eye",
  RemoveRoad: "remove_road",
  RemoveSelection: "remove_selection",
  RemoveShoppingCart: "remove_shopping_cart",
  ReopenWindow: "reopen_window",
  Reorder: "reorder",
  Repartition: "repartition",
  Repeat: "repeat",
  RepeatOn: "repeat_on",
  RepeatOne: "repeat_one",
  RepeatOneOn: "repeat_one_on",
  ReplaceAudio: "replace_audio",
  ReplaceImage: "replace_image",
  ReplaceVideo: "replace_video",
  Replay: "replay",
  Replay10: "replay_10",
  Replay30: "replay_30",
  Replay5: "replay_5",
  ReplayCircleFilled: "replay_circle_filled",
  Reply: "reply",
  ReplyAll: "reply_all",
  Report: "report",
  ReportGmailerrorred: "report_gmailerrorred",
  ReportOff: "report_off",
  ReportProblem: "report_problem",
  RequestPage: "request_page",
  RequestQuote: "request_quote",
  ResetBrightness: "reset_brightness",
  ResetColors: "reset_colors",
  ResetExposure: "reset_exposure",
  ResetFocus: "reset_focus",
  ResetImage: "reset_image",
  ResetIso: "reset_iso",
  ResetSettings: "reset_settings",
  ResetShadow: "reset_shadow",
  ResetShutterSpeed: "reset_shutter_speed",
  ResetTv: "reset_tv",
  ResetWhiteBalance: "reset_white_balance",
  ResetWrench: "reset_wrench",
  Resize: "resize",
  ResizeWindow: "resize_window",
  RespiratoryRate: "respiratory_rate",
  ResponsiveLayout: "responsive_layout",
  RestArea: "rest_area",
  RestartAlt: "restart_alt",
  Restaurant: "restaurant",
  RestaurantMenu: "restaurant_menu",
  Restore: "restore",
  RestoreFromTrash: "restore_from_trash",
  RestorePage: "restore_page",
  Resume: "resume",
  Reviews: "reviews",
  RewardedAds: "rewarded_ads",
  Rheumatology: "rheumatology",
  RibCage: "rib_cage",
  RiceBowl: "rice_bowl",
  RightClick: "right_click",
  RightPanelClose: "right_panel_close",
  RightPanelOpen: "right_panel_open",
  RingVolume: "ring_volume",
  RingVolumeFilled: "ring_volume_filled",
  Ripples: "ripples",
  Road: "road",
  Robot: "robot",
  Robot2: "robot_2",
  Rocket: "rocket",
  RocketLaunch: "rocket_launch",
  RollerShades: "roller_shades",
  RollerShadesClosed: "roller_shades_closed",
  RollerSkating: "roller_skating",
  Roofing: "roofing",
  Room: "room",
  RoomPreferences: "room_preferences",
  RoomService: "room_service",
  Rotate90DegreesCcw: "rotate_90_degrees_ccw",
  Rotate90DegreesCw: "rotate_90_degrees_cw",
  RotateAuto: "rotate_auto",
  RotateLeft: "rotate_left",
  RotateRight: "rotate_right",
  RoundaboutLeft: "roundabout_left",
  RoundaboutRight: "roundabout_right",
  RoundedCorner: "rounded_corner",
  Route: "route",
  Router: "router",
  RouterOff: "router_off",
  Routine: "routine",
  Rowing: "rowing",
  RssFeed: "rss_feed",
  Rsvp: "rsvp",
  Rtt: "rtt",
  Rubric: "rubric",
  Rule: "rule",
  RuleFolder: "rule_folder",
  RuleSettings: "rule_settings",
  RunCircle: "run_circle",
  RunningWithErrors: "running_with_errors",
  RvHookup: "rv_hookup",
  SafetyCheck: "safety_check",
  SafetyCheckOff: "safety_check_off",
  SafetyDivider: "safety_divider",
  Sailing: "sailing",
  Salinity: "salinity",
  Sanitizer: "sanitizer",
  Satellite: "satellite",
  SatelliteAlt: "satellite_alt",
  Sauna: "sauna",
  Save: "save",
  SaveAlt: "save_alt",
  SaveAs: "save_as",
  SaveClock: "save_clock",
  SavedSearch: "saved_search",
  Savings: "savings",
  Scale: "scale",
  Scan: "scan",
  ScanDelete: "scan_delete",
  Scanner: "scanner",
  ScatterPlot: "scatter_plot",
  Scene: "scene",
  Schedule: "schedule",
  ScheduleSend: "schedule_send",
  Schema: "schema",
  School: "school",
  Science: "science",
  ScienceOff: "science_off",
  Scooter: "scooter",
  Score: "score",
  Scoreboard: "scoreboard",
  ScreenLockLandscape: "screen_lock_landscape",
  ScreenLockPortrait: "screen_lock_portrait",
  ScreenLockRotation: "screen_lock_rotation",
  ScreenRecord: "screen_record",
  ScreenRotation: "screen_rotation",
  ScreenRotationAlt: "screen_rotation_alt",
  ScreenRotationUp: "screen_rotation_up",
  ScreenSearchDesktop: "screen_search_desktop",
  ScreenShare: "screen_share",
  Screenshot: "screenshot",
  ScreenshotFrame: "screenshot_frame",
  ScreenshotFrame2: "screenshot_frame_2",
  ScreenshotKeyboard: "screenshot_keyboard",
  ScreenshotMonitor: "screenshot_monitor",
  ScreenshotRegion: "screenshot_region",
  ScreenshotTablet: "screenshot_tablet",
  Script: "script",
  ScrollableHeader: "scrollable_header",
  ScubaDiving: "scuba_diving",
  Sd: "sd",
  SdCard: "sd_card",
  SdCardAlert: "sd_card_alert",
  SdStorage: "sd_storage",
  Sdk: "sdk",
  Search: "search",
  SearchActivity: "search_activity",
  SearchCheck: "search_check",
  SearchCheck2: "search_check_2",
  SearchGear: "search_gear",
  SearchHandsFree: "search_hands_free",
  SearchInsights: "search_insights",
  SearchOff: "search_off",
  SeatCoolLeft: "seat_cool_left",
  SeatCoolRight: "seat_cool_right",
  SeatHeatLeft: "seat_heat_left",
  SeatHeatRight: "seat_heat_right",
  SeatRead: "seat_read",
  SeatVentLeft: "seat_vent_left",
  SeatVentRight: "seat_vent_right",
  SeatWindow: "seat_window",
  Security: "security",
  SecurityKey: "security_key",
  SecurityUpdate: "security_update",
  SecurityUpdateGood: "security_update_good",
  SecurityUpdateWarning: "security_update_warning",
  Segment: "segment",
  Select: "select",
  SelectAll: "select_all",
  SelectCheckBox: "select_check_box",
  SelectToSpeak: "select_to_speak",
  SelectWindow: "select_window",
  SelectWindow2: "select_window_2",
  SelectWindowOff: "select_window_off",
  SelfCare: "self_care",
  SelfImprovement: "self_improvement",
  Sell: "sell",
  SellCloud: "sell_cloud",
  Send: "send",
  SendAndArchive: "send_and_archive",
  SendMoney: "send_money",
  SendTimeExtension: "send_time_extension",
  SendToMobile: "send_to_mobile",
  SensorDoor: "sensor_door",
  SensorOccupied: "sensor_occupied",
  SensorWindow: "sensor_window",
  Sensors: "sensors",
  SensorsKrx: "sensors_krx",
  SensorsKrxOff: "sensors_krx_off",
  SensorsOff: "sensors_off",
  SentimentCalm: "sentiment_calm",
  SentimentContent: "sentiment_content",
  SentimentDissatisfied: "sentiment_dissatisfied",
  SentimentExcited: "sentiment_excited",
  SentimentExtremelyDissatisfied: "sentiment_extremely_dissatisfied",
  SentimentFrustrated: "sentiment_frustrated",
  SentimentNeutral: "sentiment_neutral",
  SentimentSad: "sentiment_sad",
  SentimentSatisfied: "sentiment_satisfied",
  SentimentSatisfiedAlt: "sentiment_satisfied_alt",
  SentimentStressed: "sentiment_stressed",
  SentimentVeryDissatisfied: "sentiment_very_dissatisfied",
  SentimentVerySatisfied: "sentiment_very_satisfied",
  SentimentWorried: "sentiment_worried",
  Serif: "serif",
  ServerPerson: "server_person",
  ServiceToolbox: "service_toolbox",
  SetMeal: "set_meal",
  Settings: "settings",
  SettingsAccessibility: "settings_accessibility",
  SettingsAccountBox: "settings_account_box",
  SettingsAlert: "settings_alert",
  SettingsApplications: "settings_applications",
  SettingsBRoll: "settings_b_roll",
  SettingsBackupRestore: "settings_backup_restore",
  SettingsBluetooth: "settings_bluetooth",
  SettingsBrightness: "settings_brightness",
  SettingsCell: "settings_cell",
  SettingsCinematicBlur: "settings_cinematic_blur",
  SettingsDisplay: "settings_display",
  SettingsEthernet: "settings_ethernet",
  SettingsHeart: "settings_heart",
  SettingsInputAntenna: "settings_input_antenna",
  SettingsInputComponent: "settings_input_component",
  SettingsInputComposite: "settings_input_composite",
  SettingsInputHdmi: "settings_input_hdmi",
  SettingsInputSvideo: "settings_input_svideo",
  SettingsMotionMode: "settings_motion_mode",
  SettingsNightSight: "settings_night_sight",
  SettingsOverscan: "settings_overscan",
  SettingsPanorama: "settings_panorama",
  SettingsPhone: "settings_phone",
  SettingsPhotoCamera: "settings_photo_camera",
  SettingsPower: "settings_power",
  SettingsRemote: "settings_remote",
  SettingsScreen: "settings_screen",
  SettingsSeating: "settings_seating",
  SettingsSlowMotion: "settings_slow_motion",
  SettingsSuggest: "settings_suggest",
  SettingsSystemDaydream: "settings_system_daydream",
  SettingsTimelapse: "settings_timelapse",
  SettingsVideoCamera: "settings_video_camera",
  SettingsVoice: "settings_voice",
  SettopComponent: "settop_component",
  SevereCold: "severe_cold",
  Shades: "shades",
  ShadesClosed: "shades_closed",
  Shadow: "shadow",
  ShadowAdd: "shadow_add",
  ShadowMinus: "shadow_minus",
  ShapeLine: "shape_line",
  ShapeRecognition: "shape_recognition",
  Shapes: "shapes",
  Share: "share",
  ShareArrivalTime: "share_arrival_time",
  ShareEta: "share_eta",
  ShareLocation: "share_location",
  ShareOff: "share_off",
  ShareReviews: "share_reviews",
  ShareWindows: "share_windows",
  ShavedIce: "shaved_ice",
  SheetsRtl: "sheets_rtl",
  ShelfAutoHide: "shelf_auto_hide",
  ShelfPosition: "shelf_position",
  Shelves: "shelves",
  Shield: "shield",
  ShieldCard: "shield_card",
  ShieldLock: "shield_lock",
  ShieldLocked: "shield_locked",
  ShieldMoon: "shield_moon",
  ShieldPerson: "shield_person",
  ShieldQuestion: "shield_question",
  ShieldRadar: "shield_radar",
  ShieldToggle: "shield_toggle",
  ShieldWatch: "shield_watch",
  ShieldWithHeart: "shield_with_heart",
  ShieldWithHouse: "shield_with_house",
  Shift: "shift",
  ShiftLock: "shift_lock",
  ShiftLockOff: "shift_lock_off",
  ShoeCleats: "shoe_cleats",
  Shop: "shop",
  Shop2: "shop_2",
  ShopTwo: "shop_two",
  Shopify: "shopify",
  ShoppingBag: "shopping_bag",
  ShoppingBagSpeed: "shopping_bag_speed",
  ShoppingBasket: "shopping_basket",
  ShoppingCart: "shopping_cart",
  ShoppingCartCheckout: "shopping_cart_checkout",
  ShoppingCartOff: "shopping_cart_off",
  Shoppingmode: "shoppingmode",
  ShortStay: "short_stay",
  ShortText: "short_text",
  Shortcut: "shortcut",
  ShowChart: "show_chart",
  Shower: "shower",
  Shuffle: "shuffle",
  ShuffleOn: "shuffle_on",
  ShutterSpeed: "shutter_speed",
  ShutterSpeedAdd: "shutter_speed_add",
  ShutterSpeedMinus: "shutter_speed_minus",
  Sick: "sick",
  SideNavigation: "side_navigation",
  SignLanguage: "sign_language",
  SignLanguage2: "sign_language_2",
  SignLanguageOff: "sign_language_off",
  SignalCellular0Bar: "signal_cellular_0_bar",
  SignalCellular1Bar: "signal_cellular_1_bar",
  SignalCellular2Bar: "signal_cellular_2_bar",
  SignalCellular3Bar: "signal_cellular_3_bar",
  SignalCellular4Bar: "signal_cellular_4_bar",
  SignalCellularAdd: "signal_cellular_add",
  SignalCellularAlt: "signal_cellular_alt",
  SignalCellularAlt1Bar: "signal_cellular_alt_1_bar",
  SignalCellularAlt2Bar: "signal_cellular_alt_2_bar",
  SignalCellularAltOff: "signal_cellular_alt_off",
  SignalCellularConnectedNoInternet0Bar: "signal_cellular_connected_no_internet_0_bar",
  SignalCellularConnectedNoInternet4Bar: "signal_cellular_connected_no_internet_4_bar",
  SignalCellularNoSim: "signal_cellular_no_sim",
  SignalCellularNodata: "signal_cellular_nodata",
  SignalCellularNull: "signal_cellular_null",
  SignalCellularOff: "signal_cellular_off",
  SignalCellularPause: "signal_cellular_pause",
  SignalDisconnected: "signal_disconnected",
  SignalWifi0Bar: "signal_wifi_0_bar",
  SignalWifi4Bar: "signal_wifi_4_bar",
  SignalWifi4BarLock: "signal_wifi_4_bar_lock",
  SignalWifiBad: "signal_wifi_bad",
  SignalWifiConnectedNoInternet4: "signal_wifi_connected_no_internet_4",
  SignalWifiOff: "signal_wifi_off",
  SignalWifiStatusbar4Bar: "signal_wifi_statusbar_4_bar",
  SignalWifiStatusbarConnectedNoInternet4: "signal_wifi_statusbar_connected_no_internet_4",
  SignalWifiStatusbarNotConnected: "signal_wifi_statusbar_not_connected",
  SignalWifiStatusbarNull: "signal_wifi_statusbar_null",
  Signature: "signature",
  Signpost: "signpost",
  SimCard: "sim_card",
  SimCardAlert: "sim_card_alert",
  SimCardDownload: "sim_card_download",
  SimCardLock: "sim_card_lock",
  Simulation: "simulation",
  SingleArrow: "single_arrow",
  SingleBed: "single_bed",
  Sip: "sip",
  Siren: "siren",
  SirenCheck: "siren_check",
  SirenOpen: "siren_open",
  SirenQuestion: "siren_question",
  Skateboarding: "skateboarding",
  Skeleton: "skeleton",
  Skillet: "skillet",
  SkilletCooktop: "skillet_cooktop",
  SkipNext: "skip_next",
  SkipPrevious: "skip_previous",
  Skull: "skull",
  SkullList: "skull_list",
  SlabSerif: "slab_serif",
  Sledding: "sledding",
  Sleep: "sleep",
  SleepScore: "sleep_score",
  SlideLibrary: "slide_library",
  Sliders: "sliders",
  Slideshow: "slideshow",
  SlowMotionVideo: "slow_motion_video",
  SmartButton: "smart_button",
  SmartCardReader: "smart_card_reader",
  SmartCardReaderOff: "smart_card_reader_off",
  SmartDisplay: "smart_display",
  SmartOutlet: "smart_outlet",
  SmartScreen: "smart_screen",
  SmartToy: "smart_toy",
  Smartphone: "smartphone",
  SmartphoneCamera: "smartphone_camera",
  SmbShare: "smb_share",
  SmokeFree: "smoke_free",
  SmokingRooms: "smoking_rooms",
  Sms: "sms",
  SmsFailed: "sms_failed",
  Snail: "snail",
  Snapchat: "snapchat",
  SnippetFolder: "snippet_folder",
  Snooze: "snooze",
  Snowboarding: "snowboarding",
  Snowflake: "snowflake",
  Snowing: "snowing",
  SnowingHeavy: "snowing_heavy",
  Snowmobile: "snowmobile",
  Snowshoeing: "snowshoeing",
  Soap: "soap",
  Soba: "soba",
  SocialDistance: "social_distance",
  SocialLeaderboard: "social_leaderboard",
  SolarPower: "solar_power",
  SoloDining: "solo_dining",
  Sort: "sort",
  SortByAlpha: "sort_by_alpha",
  Sos: "sos",
  SoundDetectionDogBarking: "sound_detection_dog_barking",
  SoundDetectionGlassBreak: "sound_detection_glass_break",
  SoundDetectionLoudSound: "sound_detection_loud_sound",
  SoundSampler: "sound_sampler",
  Soundbar: "soundbar",
  SoupKitchen: "soup_kitchen",
  Source: "source",
  SourceEnvironment: "source_environment",
  SourceNotes: "source_notes",
  South: "south",
  SouthAmerica: "south_america",
  SouthEast: "south_east",
  SouthWest: "south_west",
  Spa: "spa",
  SpaceBar: "space_bar",
  SpaceDashboard: "space_dashboard",
  SpaceDashboard2: "space_dashboard_2",
  SpatialAudio: "spatial_audio",
  SpatialAudioOff: "spatial_audio_off",
  SpatialGallery: "spatial_gallery",
  SpatialSpeaker: "spatial_speaker",
  SpatialTracking: "spatial_tracking",
  Speaker: "speaker",
  Speaker2: "speaker_2",
  Speaker3: "speaker_3",
  SpeakerGroup: "speaker_group",
  SpeakerNotes: "speaker_notes",
  SpeakerNotesOff: "speaker_notes_off",
  SpeakerPhone: "speaker_phone",
  SpecialCharacter: "special_character",
  SpecificGravity: "specific_gravity",
  SpeechToText: "speech_to_text",
  SpeechToText2: "speech_to_text_2",
  Speed: "speed",
  Speed025: "speed_0_25",
  Speed02x: "speed_0_2x",
  Speed05: "speed_0_5",
  Speed05x: "speed_0_5x",
  Speed075: "speed_0_75",
  Speed07x: "speed_0_7x",
  Speed12: "speed_1_2",
  Speed125: "speed_1_25",
  Speed12x: "speed_1_2x",
  Speed15: "speed_1_5",
  Speed15x: "speed_1_5x",
  Speed175: "speed_1_75",
  Speed17x: "speed_1_7x",
  Speed2: "speed_2",
  Speed2x: "speed_2x",
  Speed3: "speed_3",
  Speed4: "speed_4",
  SpeedCamera: "speed_camera",
  Spellcheck: "spellcheck",
  SplitScene: "split_scene",
  SplitScene2: "split_scene_2",
  SplitSceneDown: "split_scene_down",
  SplitSceneLeft: "split_scene_left",
  SplitSceneRight: "split_scene_right",
  SplitSceneUp: "split_scene_up",
  Splitscreen: "splitscreen",
  SplitscreenAdd: "splitscreen_add",
  SplitscreenBottom: "splitscreen_bottom",
  SplitscreenLandscape: "splitscreen_landscape",
  SplitscreenLandscapeAdd: "splitscreen_landscape_add",
  SplitscreenLeft: "splitscreen_left",
  SplitscreenPortrait: "splitscreen_portrait",
  SplitscreenRight: "splitscreen_right",
  SplitscreenTop: "splitscreen_top",
  SplitscreenVerticalAdd: "splitscreen_vertical_add",
  Spo2: "spo2",
  Spoke: "spoke",
  Sports: "sports",
  SportsAndOutdoors: "sports_and_outdoors",
  SportsBar: "sports_bar",
  SportsBaseball: "sports_baseball",
  SportsBasketball: "sports_basketball",
  SportsCricket: "sports_cricket",
  SportsEsports: "sports_esports",
  SportsFootball: "sports_football",
  SportsGolf: "sports_golf",
  SportsGymnastics: "sports_gymnastics",
  SportsHandball: "sports_handball",
  SportsHockey: "sports_hockey",
  SportsKabaddi: "sports_kabaddi",
  SportsMartialArts: "sports_martial_arts",
  SportsMma: "sports_mma",
  SportsMotorsports: "sports_motorsports",
  SportsRugby: "sports_rugby",
  SportsScore: "sports_score",
  SportsSoccer: "sports_soccer",
  SportsTennis: "sports_tennis",
  SportsVolleyball: "sports_volleyball",
  Sprinkler: "sprinkler",
  Sprint: "sprint",
  Sql: "sql",
  Square: "square",
  SquareCircle: "square_circle",
  SquareDot: "square_dot",
  SquareFoot: "square_foot",
  SsidChart: "ssid_chart",
  Stack: "stack",
  StackGroup: "stack_group",
  StackHexagon: "stack_hexagon",
  StackOff: "stack_off",
  StackStar: "stack_star",
  StackedBarChart: "stacked_bar_chart",
  StackedEmail: "stacked_email",
  StackedInbox: "stacked_inbox",
  StackedLineChart: "stacked_line_chart",
  Stacks: "stacks",
  StadiaController: "stadia_controller",
  Stadium: "stadium",
  Stairs: "stairs",
  Stairs2: "stairs_2",
  Star: "star",
  StarBorder: "star_border",
  StarBorderPurple500: "star_border_purple500",
  StarHalf: "star_half",
  StarOutline: "star_outline",
  StarPurple500: "star_purple500",
  StarRate: "star_rate",
  StarRateHalf: "star_rate_half",
  StarShine: "star_shine",
  Stars: "stars",
  Stars2: "stars_2",
  Start: "start",
  Stat0: "stat_0",
  Stat1: "stat_1",
  Stat2: "stat_2",
  Stat3: "stat_3",
  StatMinus1: "stat_minus_1",
  StatMinus2: "stat_minus_2",
  StatMinus3: "stat_minus_3",
  StayCurrentLandscape: "stay_current_landscape",
  StayCurrentPortrait: "stay_current_portrait",
  StayPrimaryLandscape: "stay_primary_landscape",
  StayPrimaryPortrait: "stay_primary_portrait",
  SteeringWheelCool: "steering_wheel_cool",
  SteeringWheelHeat: "steering_wheel_heat",
  Step: "step",
  StepInto: "step_into",
  StepOut: "step_out",
  StepOver: "step_over",
  Steppers: "steppers",
  Steps: "steps",
  Stethoscope: "stethoscope",
  StethoscopeArrow: "stethoscope_arrow",
  StethoscopeCheck: "stethoscope_check",
  Sticker: "sticker",
  StickerAdd: "sticker_add",
  StickyNote: "sticky_note",
  StickyNote2: "sticky_note_2",
  StockMedia: "stock_media",
  Stockpot: "stockpot",
  Stop: "stop",
  StopCircle: "stop_circle",
  StopScreenShare: "stop_screen_share",
  Storage: "storage",
  Store: "store",
  StoreMallDirectory: "store_mall_directory",
  Storefront: "storefront",
  Storm: "storm",
  Straight: "straight",
  Straighten: "straighten",
  Strategy: "strategy",
  Stream: "stream",
  StreamApps: "stream_apps",
  Streetview: "streetview",
  StressManagement: "stress_management",
  StrikethroughS: "strikethrough_s",
  StrokeFull: "stroke_full",
  StrokePartial: "stroke_partial",
  Stroller: "stroller",
  Style: "style",
  Styler: "styler",
  Stylus: "stylus",
  StylusBrush: "stylus_brush",
  StylusFountainPen: "stylus_fountain_pen",
  StylusHighlighter: "stylus_highlighter",
  StylusLaserPointer: "stylus_laser_pointer",
  StylusNote: "stylus_note",
  StylusPen: "stylus_pen",
  StylusPencil: "stylus_pencil",
  SubdirectoryArrowLeft: "subdirectory_arrow_left",
  SubdirectoryArrowRight: "subdirectory_arrow_right",
  Subheader: "subheader",
  Subject: "subject",
  Subscript: "subscript",
  Subscriptions: "subscriptions",
  Subtitles: "subtitles",
  SubtitlesGear: "subtitles_gear",
  SubtitlesOff: "subtitles_off",
  Subway: "subway",
  SubwayWalk: "subway_walk",
  Subwoofer: "subwoofer",
  Summarize: "summarize",
  Sunny: "sunny",
  SunnySnowing: "sunny_snowing",
  Superscript: "superscript",
  SupervisedUserCircle: "supervised_user_circle",
  SupervisedUserCircleOff: "supervised_user_circle_off",
  SupervisorAccount: "supervisor_account",
  Support: "support",
  SupportAgent: "support_agent",
  Surfing: "surfing",
  Surgical: "surgical",
  SurroundSound: "surround_sound",
  SwapCalls: "swap_calls",
  SwapDrivingApps: "swap_driving_apps",
  SwapDrivingAppsWheel: "swap_driving_apps_wheel",
  SwapHoriz: "swap_horiz",
  SwapHorizontalCircle: "swap_horizontal_circle",
  SwapVert: "swap_vert",
  SwapVertCircle: "swap_vert_circle",
  SwapVerticalCircle: "swap_vertical_circle",
  Sweep: "sweep",
  Swipe: "swipe",
  SwipeDown: "swipe_down",
  SwipeDownAlt: "swipe_down_alt",
  SwipeLeft: "swipe_left",
  SwipeLeft2: "swipe_left_2",
  SwipeLeftAlt: "swipe_left_alt",
  SwipeRight: "swipe_right",
  SwipeRight2: "swipe_right_2",
  SwipeRightAlt: "swipe_right_alt",
  SwipeUp: "swipe_up",
  SwipeUpAlt: "swipe_up_alt",
  SwipeVertical: "swipe_vertical",
  Switch: "switch",
  SwitchAccess: "switch_access",
  SwitchAccess2: "switch_access_2",
  SwitchAccess3: "switch_access_3",
  SwitchAccessShortcut: "switch_access_shortcut",
  SwitchAccessShortcutAdd: "switch_access_shortcut_add",
  SwitchAccount: "switch_account",
  SwitchCamera: "switch_camera",
  SwitchLeft: "switch_left",
  SwitchOff: "switch_off",
  SwitchRight: "switch_right",
  SwitchVideo: "switch_video",
  Switches: "switches",
  SwordRose: "sword_rose",
  Swords: "swords",
  Symptoms: "symptoms",
  Synagogue: "synagogue",
  Sync: "sync",
  SyncAlt: "sync_alt",
  SyncArrowDown: "sync_arrow_down",
  SyncArrowUp: "sync_arrow_up",
  SyncDesktop: "sync_desktop",
  SyncDisabled: "sync_disabled",
  SyncLock: "sync_lock",
  SyncProblem: "sync_problem",
  SyncSavedLocally: "sync_saved_locally",
  SyncSavedLocallyOff: "sync_saved_locally_off",
  Syringe: "syringe",
  SystemSecurityUpdate: "system_security_update",
  SystemSecurityUpdateGood: "system_security_update_good",
  SystemSecurityUpdateWarning: "system_security_update_warning",
  SystemUpdate: "system_update",
  SystemUpdateAlt: "system_update_alt",
  SystemUpdateTv: "system_update_tv",
  Tab: "tab",
  TabClose: "tab_close",
  TabCloseInactive: "tab_close_inactive",
  TabCloseRight: "tab_close_right",
  TabDuplicate: "tab_duplicate",
  TabGroup: "tab_group",
  TabInactive: "tab_inactive",
  TabMove: "tab_move",
  TabNewRight: "tab_new_right",
  TabRecent: "tab_recent",
  TabSearch: "tab_search",
  TabUnselected: "tab_unselected",
  Table: "table",
  TableBar: "table_bar",
  TableChart: "table_chart",
  TableChartView: "table_chart_view",
  TableConvert: "table_convert",
  TableEdit: "table_edit",
  TableEye: "table_eye",
  TableLamp: "table_lamp",
  TableLarge: "table_large",
  TableRestaurant: "table_restaurant",
  TableRows: "table_rows",
  TableRowsNarrow: "table_rows_narrow",
  TableSign: "table_sign",
  TableView: "table_view",
  Tablet: "tablet",
  TabletAndroid: "tablet_android",
  TabletCamera: "tablet_camera",
  TabletMac: "tablet_mac",
  Tabs: "tabs",
  Tactic: "tactic",
  Tag: "tag",
  TagFaces: "tag_faces",
  TakeoutDining: "takeout_dining",
  TakeoutDining2: "takeout_dining_2",
  TamperDetectionOff: "tamper_detection_off",
  TamperDetectionOn: "tamper_detection_on",
  TapAndPlay: "tap_and_play",
  Tapas: "tapas",
  Target: "target",
  TargetCheck: "target_check",
  Task: "task",
  TaskAlt: "task_alt",
  TatamiSeat: "tatami_seat",
  Taunt: "taunt",
  TaxiAlert: "taxi_alert",
  TeamDashboard: "team_dashboard",
  Telegram: "telegram",
  TempPreferencesCustom: "temp_preferences_custom",
  TempPreferencesEco: "temp_preferences_eco",
  TempleBuddhist: "temple_buddhist",
  TempleHindu: "temple_hindu",
  Tenancy: "tenancy",
  Terminal: "terminal",
  Terminal2: "terminal_2",
  TerminalAdd: "terminal_add",
  Terrain: "terrain",
  TextAd: "text_ad",
  TextAdOff: "text_ad_off",
  TextCompare: "text_compare",
  TextDecrease: "text_decrease",
  TextFields: "text_fields",
  TextFieldsAlt: "text_fields_alt",
  TextFormat: "text_format",
  TextIncrease: "text_increase",
  TextRotateUp: "text_rotate_up",
  TextRotateVertical: "text_rotate_vertical",
  TextRotationAngledown: "text_rotation_angledown",
  TextRotationAngleup: "text_rotation_angleup",
  TextRotationDown: "text_rotation_down",
  TextRotationNone: "text_rotation_none",
  TextSelectEnd: "text_select_end",
  TextSelectJumpToBeginning: "text_select_jump_to_beginning",
  TextSelectJumpToEnd: "text_select_jump_to_end",
  TextSelectMoveBackCharacter: "text_select_move_back_character",
  TextSelectMoveBackWord: "text_select_move_back_word",
  TextSelectMoveDown: "text_select_move_down",
  TextSelectMoveForwardCharacter: "text_select_move_forward_character",
  TextSelectMoveForwardWord: "text_select_move_forward_word",
  TextSelectMoveUp: "text_select_move_up",
  TextSelectStart: "text_select_start",
  TextSnippet: "text_snippet",
  TextToSpeech: "text_to_speech",
  TextUp: "text_up",
  Textsms: "textsms",
  Texture: "texture",
  TextureAdd: "texture_add",
  TextureMinus: "texture_minus",
  TheaterComedy: "theater_comedy",
  Theaters: "theaters",
  Thermometer: "thermometer",
  ThermometerAdd: "thermometer_add",
  ThermometerAlert: "thermometer_alert",
  ThermometerGain: "thermometer_gain",
  ThermometerLoss: "thermometer_loss",
  ThermometerMinus: "thermometer_minus",
  Thermostat: "thermostat",
  ThermostatArrowDown: "thermostat_arrow_down",
  ThermostatArrowUp: "thermostat_arrow_up",
  ThermostatAuto: "thermostat_auto",
  ThermostatCarbon: "thermostat_carbon",
  ThingsToDo: "things_to_do",
  ThreadUnread: "thread_unread",
  ThreatIntelligence: "threat_intelligence",
  ThumbDown: "thumb_down",
  ThumbDownAlt: "thumb_down_alt",
  ThumbDownFilled: "thumb_down_filled",
  ThumbDownOff: "thumb_down_off",
  ThumbDownOffAlt: "thumb_down_off_alt",
  ThumbUp: "thumb_up",
  ThumbUpAlt: "thumb_up_alt",
  ThumbUpFilled: "thumb_up_filled",
  ThumbUpOff: "thumb_up_off",
  ThumbUpOffAlt: "thumb_up_off_alt",
  ThumbnailBar: "thumbnail_bar",
  ThumbsUpDouble: "thumbs_up_double",
  ThumbsUpDown: "thumbs_up_down",
  Thunderstorm: "thunderstorm",
  Tibia: "tibia",
  TibiaAlt: "tibia_alt",
  Tiktok: "tiktok",
  TileLarge: "tile_large",
  TileMedium: "tile_medium",
  TileSmall: "tile_small",
  TiltArrowDown: "tilt_arrow_down",
  TiltArrowUp: "tilt_arrow_up",
  TimeAuto: "time_auto",
  TimeToLeave: "time_to_leave",
  Timelapse: "timelapse",
  Timeline: "timeline",
  Timer: "timer",
  Timer1: "timer_1",
  Timer10: "timer_10",
  Timer10Alt1: "timer_10_alt_1",
  Timer10Select: "timer_10_select",
  Timer2: "timer_2",
  Timer3: "timer_3",
  Timer3Alt1: "timer_3_alt_1",
  Timer3Select: "timer_3_select",
  Timer5: "timer_5",
  Timer5Shutter: "timer_5_shutter",
  TimerArrowDown: "timer_arrow_down",
  TimerArrowUp: "timer_arrow_up",
  TimerOff: "timer_off",
  TimerPause: "timer_pause",
  TimerPlay: "timer_play",
  TipsAndUpdates: "tips_and_updates",
  TireRepair: "tire_repair",
  Title: "title",
  Titlecase: "titlecase",
  Toast: "toast",
  Toc: "toc",
  Today: "today",
  ToggleOff: "toggle_off",
  ToggleOn: "toggle_on",
  Token: "token",
  Toll: "toll",
  Tonality: "tonality",
  Tonality2: "tonality_2",
  Toolbar: "toolbar",
  ToolsFlatHead: "tools_flat_head",
  ToolsInstallationKit: "tools_installation_kit",
  ToolsLadder: "tools_ladder",
  ToolsLevel: "tools_level",
  ToolsPhillips: "tools_phillips",
  ToolsPliersWireStripper: "tools_pliers_wire_stripper",
  ToolsPowerDrill: "tools_power_drill",
  ToolsWrench: "tools_wrench",
  Tooltip: "tooltip",
  Tooltip2: "tooltip_2",
  TopPanelClose: "top_panel_close",
  TopPanelOpen: "top_panel_open",
  Topic: "topic",
  Tornado: "tornado",
  TotalDissolvedSolids: "total_dissolved_solids",
  TouchApp: "touch_app",
  TouchDouble: "touch_double",
  TouchDouble2: "touch_double_2",
  TouchLong: "touch_long",
  TouchTriple: "touch_triple",
  TouchpadMouse: "touchpad_mouse",
  TouchpadMouseOff: "touchpad_mouse_off",
  Tour: "tour",
  Toys: "toys",
  ToysAndGames: "toys_and_games",
  ToysFan: "toys_fan",
  TrackChanges: "track_changes",
  TrackpadInput: "trackpad_input",
  TrackpadInput2: "trackpad_input_2",
  TrackpadInput3: "trackpad_input_3",
  Traffic: "traffic",
  TrafficJam: "traffic_jam",
  TrailLength: "trail_length",
  TrailLengthMedium: "trail_length_medium",
  TrailLengthShort: "trail_length_short",
  Train: "train",
  Tram: "tram",
  Transcribe: "transcribe",
  TransferWithinAStation: "transfer_within_a_station",
  Transform: "transform",
  Transgender: "transgender",
  TransitEnterexit: "transit_enterexit",
  TransitTicket: "transit_ticket",
  TransitionChop: "transition_chop",
  TransitionDissolve: "transition_dissolve",
  TransitionFade: "transition_fade",
  TransitionPush: "transition_push",
  TransitionSlide: "transition_slide",
  Translate: "translate",
  TranslateIndic: "translate_indic",
  Transportation: "transportation",
  Travel: "travel",
  TravelExplore: "travel_explore",
  TravelLuggageAndBags: "travel_luggage_and_bags",
  TrendingDown: "trending_down",
  TrendingFlat: "trending_flat",
  TrendingNeutral: "trending_neutral",
  TrendingUp: "trending_up",
  TriangleCircle: "triangle_circle",
  Trip: "trip",
  TripOrigin: "trip_origin",
  Trolley: "trolley",
  TrolleyCableCar: "trolley_cable_car",
  Trophy: "trophy",
  Troubleshoot: "troubleshoot",
  Try: "try",
  Tsunami: "tsunami",
  Tsv: "tsv",
  Tty: "tty",
  Tune: "tune",
  Tungsten: "tungsten",
  TurnLeft: "turn_left",
  TurnRight: "turn_right",
  TurnSharpLeft: "turn_sharp_left",
  TurnSharpRight: "turn_sharp_right",
  TurnSlightLeft: "turn_slight_left",
  TurnSlightRight: "turn_slight_right",
  TurnedIn: "turned_in",
  TurnedInNot: "turned_in_not",
  Tv: "tv",
  TvDisplays: "tv_displays",
  TvGen: "tv_gen",
  TvGuide: "tv_guide",
  TvNext: "tv_next",
  TvOff: "tv_off",
  TvOptionsEditChannels: "tv_options_edit_channels",
  TvOptionsInputSettings: "tv_options_input_settings",
  TvRemote: "tv_remote",
  TvSignin: "tv_signin",
  TvWithAssistant: "tv_with_assistant",
  TwoPager: "two_pager",
  TwoPagerStore: "two_pager_store",
  TwoWheeler: "two_wheeler",
  TypeSpecimen: "type_specimen",
  UTurnLeft: "u_turn_left",
  UTurnRight: "u_turn_right",
  Udon: "udon",
  UlnaRadius: "ulna_radius",
  UlnaRadiusAlt: "ulna_radius_alt",
  Umbrella: "umbrella",
  Unarchive: "unarchive",
  Undereye: "undereye",
  Undo: "undo",
  UnfoldLess: "unfold_less",
  UnfoldLessDouble: "unfold_less_double",
  UnfoldMore: "unfold_more",
  UnfoldMoreDouble: "unfold_more_double",
  Ungroup: "ungroup",
  UniversalCurrency: "universal_currency",
  UniversalCurrencyAlt: "universal_currency_alt",
  UniversalLocal: "universal_local",
  Unknown2: "unknown_2",
  Unknown5: "unknown_5",
  Unknown7: "unknown_7",
  UnknownDocument: "unknown_document",
  UnknownMed: "unknown_med",
  Unlicense: "unlicense",
  UnpavedRoad: "unpaved_road",
  Unpin: "unpin",
  Unpublished: "unpublished",
  Unsubscribe: "unsubscribe",
  Upcoming: "upcoming",
  Update: "update",
  UpdateDisabled: "update_disabled",
  Upgrade: "upgrade",
  UpiPay: "upi_pay",
  Upload: "upload",
  Upload2: "upload_2",
  UploadFile: "upload_file",
  Uppercase: "uppercase",
  Urology: "urology",
  Usb: "usb",
  UsbOff: "usb_off",
  UserAttributes: "user_attributes",
  Vaccines: "vaccines",
  Vacuum: "vacuum",
  Vacuum2: "vacuum_2",
  Vacuum2On: "vacuum_2_on",
  Valve: "valve",
  VapeFree: "vape_free",
  VapingRooms: "vaping_rooms",
  VariableAdd: "variable_add",
  VariableInsert: "variable_insert",
  VariableRemove: "variable_remove",
  Variables: "variables",
  Ventilator: "ventilator",
  Verified: "verified",
  VerifiedOff: "verified_off",
  VerifiedUser: "verified_user",
  VerticalAlignBottom: "vertical_align_bottom",
  VerticalAlignCenter: "vertical_align_center",
  VerticalAlignTop: "vertical_align_top",
  VerticalDistribute: "vertical_distribute",
  VerticalShades: "vertical_shades",
  VerticalShadesClosed: "vertical_shades_closed",
  VerticalSplit: "vertical_split",
  Vibration: "vibration",
  VideoCall: "video_call",
  VideoCameraBack: "video_camera_back",
  VideoCameraBackAdd: "video_camera_back_add",
  VideoCameraFront: "video_camera_front",
  VideoCameraFrontOff: "video_camera_front_off",
  VideoChat: "video_chat",
  VideoCollection: "video_collection",
  VideoFile: "video_file",
  VideoFrameCopy: "video_frame_copy",
  VideoFrameSave: "video_frame_save",
  VideoLabel: "video_label",
  VideoLibrary: "video_library",
  VideoSearch: "video_search",
  VideoSettings: "video_settings",
  VideoStable: "video_stable",
  VideoTemplate: "video_template",
  Videocam: "videocam",
  VideocamAlert: "videocam_alert",
  VideocamOff: "videocam_off",
  VideogameAsset: "videogame_asset",
  VideogameAssetOff: "videogame_asset_off",
  ViewAgenda: "view_agenda",
  ViewApps: "view_apps",
  ViewArray: "view_array",
  ViewCarousel: "view_carousel",
  ViewColumn: "view_column",
  ViewColumn2: "view_column_2",
  ViewComfortable: "view_comfortable",
  ViewComfy: "view_comfy",
  ViewComfyAlt: "view_comfy_alt",
  ViewCompact: "view_compact",
  ViewCompactAlt: "view_compact_alt",
  ViewCozy: "view_cozy",
  ViewDay: "view_day",
  ViewHeadline: "view_headline",
  ViewInAr: "view_in_ar",
  ViewInArNew: "view_in_ar_new",
  ViewInArOff: "view_in_ar_off",
  ViewKanban: "view_kanban",
  ViewList: "view_list",
  ViewModule: "view_module",
  ViewObjectTrack: "view_object_track",
  ViewQuilt: "view_quilt",
  ViewRealSize: "view_real_size",
  ViewSidebar: "view_sidebar",
  ViewStream: "view_stream",
  ViewTimeline: "view_timeline",
  ViewWeek: "view_week",
  Vignette: "vignette",
  Vignette2: "vignette_2",
  Villa: "villa",
  Visibility: "visibility",
  VisibilityLock: "visibility_lock",
  VisibilityOff: "visibility_off",
  VitalSigns: "vital_signs",
  Vitals: "vitals",
  Vo2Max: "vo2_max",
  VoiceChat: "voice_chat",
  VoiceChatOff: "voice_chat_off",
  VoiceOverOff: "voice_over_off",
  VoiceSelection: "voice_selection",
  VoiceSelectionOff: "voice_selection_off",
  Voicemail: "voicemail",
  Voicemail2: "voicemail_2",
  Volcano: "volcano",
  VolumeDown: "volume_down",
  VolumeDownAlt: "volume_down_alt",
  VolumeMute: "volume_mute",
  VolumeOff: "volume_off",
  VolumeUp: "volume_up",
  VolunteerActivism: "volunteer_activism",
  VotingChip: "voting_chip",
  VpnKey: "vpn_key",
  VpnKeyAlert: "vpn_key_alert",
  VpnKeyOff: "vpn_key_off",
  VpnLock: "vpn_lock",
  VpnLock2: "vpn_lock_2",
  Vr180Create2d: "vr180_create2d",
  Vr180Create2dOff: "vr180_create2d_off",
  Vrpano: "vrpano",
  WalkBike: "walk_bike",
  WallArt: "wall_art",
  WallLamp: "wall_lamp",
  Wallet: "wallet",
  WalletGiftcard: "wallet_giftcard",
  WalletMembership: "wallet_membership",
  WalletTravel: "wallet_travel",
  Wallpaper: "wallpaper",
  WallpaperSlideshow: "wallpaper_slideshow",
  WandShine: "wand_shine",
  WandStars: "wand_stars",
  Ward: "ward",
  Warehouse: "warehouse",
  Warning: "warning",
  WarningAmber: "warning_amber",
  WarningOff: "warning_off",
  Wash: "wash",
  Washoku: "washoku",
  Watch: "watch",
  WatchAlert: "watch_alert",
  WatchArrow: "watch_arrow",
  WatchArrowDown: "watch_arrow_down",
  WatchButton: "watch_button",
  WatchButtonPress: "watch_button_press",
  WatchCheck: "watch_check",
  WatchLater: "watch_later",
  WatchLock: "watch_lock",
  WatchOff: "watch_off",
  WatchScreentime: "watch_screentime",
  WatchVibration: "watch_vibration",
  WatchWake: "watch_wake",
  Water: "water",
  WaterBottle: "water_bottle",
  WaterBottleLarge: "water_bottle_large",
  WaterDamage: "water_damage",
  WaterDo: "water_do",
  WaterDrop: "water_drop",
  WaterDrops: "water_drops",
  WaterEc: "water_ec",
  WaterFull: "water_full",
  WaterHeater: "water_heater",
  WaterLock: "water_lock",
  WaterLoss: "water_loss",
  WaterLux: "water_lux",
  WaterMedium: "water_medium",
  WaterOrp: "water_orp",
  WaterPh: "water_ph",
  WaterPump: "water_pump",
  WaterVoc: "water_voc",
  WaterfallChart: "waterfall_chart",
  Waves: "waves",
  WavingHand: "waving_hand",
  WbAuto: "wb_auto",
  WbCloudy: "wb_cloudy",
  WbIncandescent: "wb_incandescent",
  WbIridescent: "wb_iridescent",
  WbShade: "wb_shade",
  WbSunny: "wb_sunny",
  WbTwilight: "wb_twilight",
  WbTwilight2: "wb_twilight_2",
  Wc: "wc",
  WeatherHail: "weather_hail",
  WeatherMix: "weather_mix",
  WeatherSnowy: "weather_snowy",
  Web: "web",
  WebAsset: "web_asset",
  WebAssetOff: "web_asset_off",
  WebStories: "web_stories",
  WebTraffic: "web_traffic",
  Webhook: "webhook",
  Wechat: "wechat",
  Weekend: "weekend",
  Weight: "weight",
  West: "west",
  Whatshot: "whatshot",
  Wheat: "wheat",
  WheelchairPickup: "wheelchair_pickup",
  WhereToVote: "where_to_vote",
  WidgetMedium: "widget_medium",
  WidgetMenu: "widget_menu",
  WidgetSmall: "widget_small",
  WidgetWidth: "widget_width",
  Widgets: "widgets",
  Width: "width",
  WidthFull: "width_full",
  WidthNormal: "width_normal",
  WidthWide: "width_wide",
  Wifi: "wifi",
  Wifi1Bar: "wifi_1_bar",
  Wifi2Bar: "wifi_2_bar",
  WifiAdd: "wifi_add",
  WifiCalling: "wifi_calling",
  WifiCalling1: "wifi_calling_1",
  WifiCalling2: "wifi_calling_2",
  WifiCalling3: "wifi_calling_3",
  WifiCallingBar1: "wifi_calling_bar_1",
  WifiCallingBar2: "wifi_calling_bar_2",
  WifiCallingBar3: "wifi_calling_bar_3",
  WifiChannel: "wifi_channel",
  WifiDevice: "wifi_device",
  WifiFind: "wifi_find",
  WifiHome: "wifi_home",
  WifiLock: "wifi_lock",
  WifiNotification: "wifi_notification",
  WifiOff: "wifi_off",
  WifiPassword: "wifi_password",
  WifiProtectedSetup: "wifi_protected_setup",
  WifiProxy: "wifi_proxy",
  WifiTethering: "wifi_tethering",
  WifiTetheringError: "wifi_tethering_error",
  WifiTetheringErrorRounded: "wifi_tethering_error_rounded",
  WifiTetheringOff: "wifi_tethering_off",
  WindPower: "wind_power",
  Window: "window",
  WindowClosed: "window_closed",
  WindowOpen: "window_open",
  WindowSensor: "window_sensor",
  WindshieldDefrostAuto: "windshield_defrost_auto",
  WindshieldDefrostFront: "windshield_defrost_front",
  WindshieldDefrostRear: "windshield_defrost_rear",
  WindshieldHeatFront: "windshield_heat_front",
  WineBar: "wine_bar",
  Woman: "woman",
  Woman2: "woman_2",
  WooCommerce: "woo_commerce",
  Wordpress: "wordpress",
  Work: "work",
  WorkAlert: "work_alert",
  WorkHistory: "work_history",
  WorkOff: "work_off",
  WorkOutline: "work_outline",
  WorkUpdate: "work_update",
  Workflow: "workflow",
  WorkspacePremium: "workspace_premium",
  Workspaces: "workspaces",
  WorkspacesOutline: "workspaces_outline",
  WoundsInjuries: "wounds_injuries",
  WrapText: "wrap_text",
  Wrist: "wrist",
  WrongLocation: "wrong_location",
  Wysiwyg: "wysiwyg",
  XCircle: "x_circle",
  YCircle: "y_circle",
  Yakitori: "yakitori",
  Yard: "yard",
  Yoshoku: "yoshoku",
  YourTrips: "your_trips",
  YoutubeActivity: "youtube_activity",
  YoutubeSearchedFor: "youtube_searched_for",
  ZonePersonAlert: "zone_person_alert",
  ZonePersonIdle: "zone_person_idle",
  ZonePersonUrgent: "zone_person_urgent",
  ZoomIn: "zoom_in",
  ZoomInMap: "zoom_in_map",
  ZoomOut: "zoom_out",
  ZoomOutMap: "zoom_out_map"
};
var ICON_LIGATURES = __spreadValues(__spreadValues({}, COUNTRY_FLAG_LIGATURES), MUI_ICON_LIGATURES);
var ICON_NAMES = Object.keys(ICON_LIGATURES).sort();
var MUI_ICONS = Object.keys(
  MUI_ICON_LIGATURES
).sort();

// trabecula/components/buttons/icon-picker.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var SEARCH_STYLES = ["Filled", "Outlined", "Rounded", "TwoTone", "Sharp"];
var SEARCH_STYLES_UNFILLED = SEARCH_STYLES.filter((s) => s !== "Filled");
var IconPicker = Comp(
  (_a) => {
    var _b = _a, {
      color = colors.custom.black,
      label = "Icon",
      menuProps = {},
      setValue,
      value,
      viewProps = {},
      width = "fit-content",
      withStylePicker = false
    } = _b, buttonProps = __objRest(_b, [
      "color",
      "label",
      "menuProps",
      "setValue",
      "value",
      "viewProps",
      "width",
      "withStylePicker"
    ]);
    const [page, setPage] = (0, import_react5.useState)(1);
    const [searchStyle, setSearchStyle] = (0, import_react5.useState)("Filled");
    const [searchVal, setSearchVal] = (0, import_react5.useState)("");
    const searchTerms = searchVal.split(" ").filter((t) => t.length > 0);
    const filteredIcons = ICON_NAMES.filter((icon) => {
      const name = icon.toLowerCase();
      if (icon === value) return false;
      if (withStylePicker) {
        if (searchStyle === "Filled") {
          if (SEARCH_STYLES_UNFILLED.some((s) => name.includes(s.toLowerCase()))) return false;
        } else if (!name.includes(searchStyle.toLowerCase())) return false;
      }
      if (!searchTerms.length) return true;
      return searchTerms.every((term) => name.includes(term.toLowerCase()));
    });
    const pageSize = 25 - ((value == null ? void 0 : value.length) ? 1 : 0);
    const pageCount = Math.ceil(filteredIcons.length / pageSize);
    const pageIcons = [
      (value == null ? void 0 : value.length) ? value : null,
      ...filteredIcons.slice(pageSize * (page - 1), pageSize * page)
    ].filter(Boolean);
    (0, import_react5.useEffect)(() => {
      if (page > pageCount) setPage(1);
    }, [pageCount, page]);
    const handleNoIcon = () => setValue(null);
    const handleSearchStyleChange = (event) => setSearchStyle(event.target.value);
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(View, { row: true, spacing: "0.5rem", align: "center", padding: { left: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: value })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Input, { header: "Search", value: searchVal, setValue: setSearchVal }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Button,
        {
          text: "No Icon",
          icon: "Close",
          onClick: handleNoIcon,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(View, { row: true, position: "relative", spacing: "0.5rem", children: [
        !withStylePicker ? null : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Card, { column: true, header: "Style", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material5.RadioGroup, { value: searchStyle, onChange: handleSearchStyleChange, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.FormControlLabel, { label: "Filled", value: "Filled", control: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.FormControlLabel, { label: "Outlined", value: "Outlined", control: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.FormControlLabel, { label: "Rounded", value: "Rounded", control: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.FormControlLabel, { label: "Two Tone", value: "TwoTone", control: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.FormControlLabel, { label: "Sharp", value: "Sharp", control: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.Radio, {}) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(View, { column: true, width: "16rem", height: "19rem", children: chunkArray(pageIcons, 5).map((swatch, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(View, { row: true, children: swatch.map((icon) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          IconButton,
          {
            name: icon,
            tooltip: icon,
            iconProps: { size: "1.4em" },
            sx: {
              border: `3px solid ${value === icon ? colors.custom.white : "transparent"}`
            },
            onClick: () => setValue(icon)
          },
          icon
        )) }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Pagination,
          {
            count: pageCount,
            page,
            onChange: setPage,
            siblingCount: 0,
            boundaryCount: withStylePicker ? 1 : 0
          }
        )
      ] })
    ] })) }));
  }
);

// trabecula/components/buttons/menu-button.tsx
var import_react6 = require("react");
var import_material6 = require("@mui/material");
var import_jsx_runtime8 = require("react/jsx-runtime");
var MenuButton = (_a) => {
  var _b = _a, {
    anchorOrigin = { horizontal: "right", vertical: "bottom" },
    bgColor = colors.background,
    button,
    children,
    color,
    icon = "MoreVert",
    keepMounted = true,
    menuClassName,
    menuWidth,
    transformOrigin = { horizontal: "right", vertical: "top" }
  } = _b, props = __objRest(_b, [
    "anchorOrigin",
    "bgColor",
    "button",
    "children",
    "color",
    "icon",
    "keepMounted",
    "menuClassName",
    "menuWidth",
    "transformOrigin"
  ]);
  const { css, cx } = useClasses5({ bgColor, menuWidth });
  const [anchorEl, setAnchorEl] = (0, import_react6.useState)(null);
  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    button ? button(handleOpen) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(IconButton, __spreadValues({ name: icon, onClick: handleOpen, iconProps: { color } }, props)),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_material6.Menu,
      {
        anchorEl,
        keepMounted,
        open: Boolean(anchorEl),
        onClose: handleClose,
        anchorOrigin,
        transformOrigin,
        className: cx(css.menu, menuClassName),
        children: typeof children === "function" ? children(handleClose) : children
      }
    )
  ] });
};
var useClasses5 = makeClasses((props) => {
  var _a;
  return {
    menu: {
      "& .MuiPaper-root": {
        background: props.bgColor,
        minWidth: (_a = props.menuWidth) != null ? _a : "10rem",
        width: props.menuWidth
      },
      "& .MuiList-root": {
        padding: "4px 0"
      }
    }
  };
});

// trabecula/components/buttons/multi-action-button.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");

// trabecula/components/buttons/sort-menu.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var import_react7 = require("react");
var SortMenu = (_a) => {
  var _b = _a, {
    color = colors.custom.black,
    hasHeader,
    height = "inherit",
    rows,
    setValue,
    value,
    width = "fit-content"
  } = _b, buttonProps = __objRest(_b, [
    "color",
    "hasHeader",
    "height",
    "rows",
    "setValue",
    "value",
    "width"
  ]);
  const { css, cx } = useClasses6({ hasHeader });
  const activeRow = rows.find(({ attribute }) => attribute === (value == null ? void 0 : value.key));
  const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Button,
    __spreadProps(__spreadValues({}, buttonProps), {
      onClick: onOpen,
      color,
      icon: "Sort",
      iconRight: (value == null ? void 0 : value.isDesc) ? "ArrowDownward" : "ArrowUpward",
      iconProps: { size: "1.15em" },
      justify: "space-between",
      height,
      width,
      borderRadiuses: __spreadValues({ all: "0.3rem" }, hasHeader ? { top: 0 } : {}),
      padding: { left: "0.5em", right: "0.5em" },
      className: cx(css.button, buttonProps == null ? void 0 : buttonProps.className),
      text: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(View, { column: true, align: "flex-start", justify: "center", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { className: css.topText, children: "Sort By" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { className: css.label, children: activeRow == null ? void 0 : activeRow.label })
      ] })
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MenuButton, { button: renderButton, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(View, { column: true, children: rows.map((rowProps) => /* @__PURE__ */ (0, import_react7.createElement)(SortRow, __spreadProps(__spreadValues({}, rowProps), { setValue, value, key: rowProps.attribute }))) }) });
};
var useClasses6 = makeClasses({
  button: {
    flexShrink: 0,
    boxShadow: "none"
  },
  label: {
    fontSize: "0.9em",
    lineHeight: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    whiteSpace: "nowrap"
  },
  topText: {
    color: colors.custom.lightGrey,
    fontSize: "0.7em",
    fontWeight: 600,
    lineHeight: 1
  }
});

// trabecula/components/buttons/sort-row.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var SortRow = ({
  attribute,
  icon,
  iconProps = {},
  label,
  setValue,
  value
}) => {
  const { css } = useClasses7(null);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(View, { className: css.row, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, __spreadValues({ name: icon }, iconProps)),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Text, { className: css.label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SortButton, { attribute, setValue, value, isDesc: true }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SortButton, { attribute, setValue, value })
  ] });
};
var SortButton = ({ attribute, isDesc = false, setValue, value }) => {
  const isActive = attribute === (value == null ? void 0 : value.key) && isDesc === (value == null ? void 0 : value.isDesc);
  const color = isActive ? colors.custom.blue : colors.custom.lightGrey;
  const updateSort = () => setValue({ isDesc, key: attribute });
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    IconButton,
    {
      name: isDesc ? "ArrowDownward" : "ArrowUpward",
      onClick: updateSort,
      iconProps: { color },
      margins: { left: "0.5rem" },
      size: "small"
    }
  );
};
var useClasses7 = makeClasses({
  label: {
    flex: 1,
    whiteSpace: "nowrap",
    padding: "0 0.5rem"
  },
  row: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    padding: "0.5rem 0.8rem"
  }
});

// trabecula/components/inputs/auto-complete.tsx
var import_material7 = require("@mui/material");
var import_jsx_runtime12 = require("react/jsx-runtime");
var AutoComplete = Comp(
  (_a, ref) => {
    var _b = _a, {
      header,
      inputProps = {},
      renderInput,
      required = false
    } = _b, props = __objRest(_b, [
      "header",
      "inputProps",
      "renderInput",
      "required"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      import_material7.Autocomplete,
      __spreadProps(__spreadValues({
        autoComplete: true,
        autoHighlight: true,
        fullWidth: true,
        size: "small"
      }, props), {
        ref,
        renderInput: renderInput != null ? renderInput : ((params) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Input,
          __spreadProps(__spreadValues(__spreadValues({
            header,
            required,
            variant: "outlined"
          }, inputProps), params), {
            inputProps: __spreadValues(__spreadValues({}, inputProps.inputProps), params.inputProps),
            InputProps: __spreadValues(__spreadValues({}, inputProps.InputProps), params.InputProps),
            stopKeyPropagation: false,
            value: params.inputProps.value
          })
        ))
      })
    );
  }
);

// trabecula/components/inputs/chip-input.tsx
var import_react8 = require("react");
var import_material8 = require("@mui/material");
var import_jsx_runtime13 = require("react/jsx-runtime");
var import_react9 = require("react");
var filterOptions = (0, import_material8.createFilterOptions)({ limit: 100, matchFrom: "start" });
var ChipInput = Comp(
  (_a) => {
    var _b = _a, { className, opaque = false, options = [], setValue, value = [] } = _b, props = __objRest(_b, ["className", "opaque", "options", "setValue", "value"]);
    const { css, cx } = useClasses8({ opaque });
    const [inputValue, setInputValue] = (0, import_react8.useState)("");
    const handleChange = (_, val) => {
      setValue == null ? void 0 : setValue(
        val.map((v) => typeof v === "string" ? { label: v, value: v } : v)
      );
      setInputValue("");
    };
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      import_material8.Autocomplete,
      __spreadValues({
        options,
        value,
        getOptionLabel: (option) => option.label,
        renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Input,
          __spreadProps(__spreadValues({}, params), {
            value: inputValue,
            setValue: setInputValue,
            className: cx(css.input, className)
          })
        ),
        renderTags: (val, getTagProps) => val.map((option, index) => /* @__PURE__ */ (0, import_react9.createElement)(import_material8.Chip, __spreadProps(__spreadValues({}, getTagProps({ index })), { key: index, label: option.label }))),
        onChange: handleChange,
        isOptionEqualToValue: (option, val) => option.value === val.value,
        filterOptions,
        size: "small",
        freeSolo: true,
        autoSelect: true,
        forcePopupIcon: false,
        clearOnBlur: false,
        disableClearable: true,
        multiple: true
      }, props)
    );
  }
);
var useClasses8 = makeClasses((props) => ({
  input: {
    backgroundColor: props.opaque ? colors.mui.grey["800"] : "transparent"
  }
}));

// trabecula/components/inputs/date-input.tsx
var import_react10 = require("react");
var import_x_date_pickers = require("@mui/x-date-pickers");
var import_AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var import_DatePicker = require("@mui/x-date-pickers/DatePicker");
var import_jsx_runtime14 = require("react/jsx-runtime");
var DateInput = Comp(
  (_a) => {
    var _b = _a, {
      header,
      headerProps = {},
      inputProps = {},
      setValue,
      slotProps = {},
      value,
      viewProps = {},
      width
    } = _b, datePickerProps = __objRest(_b, [
      "header",
      "headerProps",
      "inputProps",
      "setValue",
      "slotProps",
      "value",
      "viewProps",
      "width"
    ]);
    const { css } = useClasses9(null);
    const [dateValue, setDateValue] = (0, import_react10.useState)((value == null ? void 0 : value.length) ? (0, import_dayjs.default)(value) : null);
    (0, import_react10.useEffect)(() => {
      if (value == null ? void 0 : value.length) setDateValue((0, import_dayjs.default)(value));
      else setDateValue(null);
    }, [value]);
    const handleChange = (val) => {
      setDateValue(val);
      if (val === null) setValue == null ? void 0 : setValue("");
      else if (val.isValid()) setValue == null ? void 0 : setValue(val.format("YYYY-MM-DD"));
    };
    const textFieldProps = __spreadProps(__spreadValues(__spreadValues({}, inputProps), slotProps == null ? void 0 : slotProps.textField), {
      header,
      headerProps,
      width
    });
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_x_date_pickers.LocalizationProvider, { dateAdapter: import_AdapterDayjs.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { width, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_DatePicker.DatePicker,
      __spreadProps(__spreadValues({}, datePickerProps), {
        value: dateValue,
        onChange: handleChange,
        slots: { textField: DateTextField },
        slotProps: __spreadProps(__spreadValues({}, slotProps), {
          actionBar: __spreadValues({ actions: ["cancel", "clear", "today"] }, slotProps == null ? void 0 : slotProps.actionBar),
          inputAdornment: __spreadProps(__spreadValues({}, slotProps == null ? void 0 : slotProps.inputAdornment), { tabIndex: -1 }),
          openPickerButton: __spreadProps(__spreadValues({}, slotProps == null ? void 0 : slotProps.openPickerButton), { tabIndex: -1 }),
          textField: textFieldProps
        }),
        className: css.datePicker
      })
    ) })) });
  }
);
var DateTextField = (props) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Input, __spreadValues({}, props));
var useClasses9 = makeClasses({
  datePicker: {
    width: "100%",
    "& .MuiInputBase-input": {
      paddingLeft: "0.5rem"
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem"
    }
  }
});

// trabecula/components/inputs/date-range.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var DateRange = Comp(
  ({
    dateInputProps = {},
    endDate,
    header,
    headerProps,
    setEndDate,
    setStartDate,
    startDate
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          DateInput,
          __spreadProps(__spreadValues({}, dateInputProps), {
            value: startDate,
            setValue: setStartDate,
            inputProps: { borderRadiuses: { top: 0, right: 0 } }
          })
        ),
        endInput: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          DateInput,
          __spreadProps(__spreadValues({}, dateInputProps), {
            value: endDate,
            setValue: setEndDate,
            inputProps: { borderRadiuses: { top: 0, left: 0 } }
          })
        )
      }
    );
  }
);

// trabecula/components/inputs/dropdown.tsx
var import_react11 = require("react");
var import_material10 = require("@mui/material");
var import_color4 = __toESM(require("color"));

// trabecula/components/inputs/input.tsx
var import_material9 = require("@mui/material");
var import_color3 = __toESM(require("color"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var DENSE_INPUT_PADDING = "0.1rem 0.5rem";
var DEFAULT_INPUT_HEADER_PROPS = {
  fontSize: "0.8em",
  padding: { all: "0.2rem 0.3rem" }
};
var Input = Comp((rawProps, ref) => {
  var _b, _c, _d;
  const _a = rawProps, {
    adornment,
    adornmentColor = colors.custom.grey,
    adornmentPosition = "end",
    background = "rgb(0 0 0 / 0.2)",
    borderRadiuses,
    borders,
    children,
    className,
    color,
    dense = false,
    flex,
    fontFamily = "Roboto",
    fontSize,
    fontWeight,
    hasHelper = false,
    header,
    headerProps = {},
    height,
    helperText,
    helperTextProps = {},
    inputProps,
    label,
    labelProps,
    labelTextProps = {},
    margins = {},
    maxLength,
    minWidth,
    noFade = false,
    onChange,
    onClick,
    onEnter,
    onKeyDown,
    padding = {},
    setValue,
    stopKeyPropagation = true,
    textAlign,
    textColor,
    value,
    variant = "outlined",
    width = "100%"
  } = _a, props = __objRest(_a, [
    "adornment",
    "adornmentColor",
    "adornmentPosition",
    "background",
    "borderRadiuses",
    "borders",
    "children",
    "className",
    "color",
    "dense",
    "flex",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "hasHelper",
    "header",
    "headerProps",
    "height",
    "helperText",
    "helperTextProps",
    "inputProps",
    "label",
    "labelProps",
    "labelTextProps",
    "margins",
    "maxLength",
    "minWidth",
    "noFade",
    "onChange",
    "onClick",
    "onEnter",
    "onKeyDown",
    "padding",
    "setValue",
    "stopKeyPropagation",
    "textAlign",
    "textColor",
    "value",
    "variant",
    "width"
  ]);
  const resolvedLabel = label != null ? label : header;
  const resolvedLabelProps = deepMerge(DEFAULT_INPUT_HEADER_PROPS, labelProps != null ? labelProps : headerProps);
  const hasLabel = !!resolvedLabel;
  const inputHeight = rawProps.multiline && rawProps.height === void 0 ? void 0 : height;
  const inputRootHeight = rawProps.height === void 0 && !rawProps.multiline ? dense ? DENSE_FORM_ROW_HEIGHT : FORM_ROW_HEIGHT : void 0;
  const inputName = (_b = props.name) != null ? _b : typeof resolvedLabel === "string" ? resolvedLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : void 0;
  const { css, cx } = useClasses10({
    adornmentColor,
    background,
    borderRadiuses,
    borders,
    color,
    dense,
    flex,
    fontFamily,
    fontSize,
    fontWeight,
    hasHelper,
    hasLabel,
    hasOnClick: !!onClick,
    height: inputHeight,
    helperText,
    helperTextProps,
    inputRootHeight,
    margins: hasLabel ? {} : margins,
    minWidth,
    noFade,
    padding,
    textAlign,
    textColor,
    width
  });
  const handleChange = (event) => {
    setValue == null ? void 0 : setValue(event.target.value);
    onChange == null ? void 0 : onChange(event);
  };
  const handleKeyDown = (event) => {
    if (stopKeyPropagation) event.stopPropagation();
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!onEnter || event.defaultPrevented || event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    onEnter();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    HeaderWrapper,
    {
      flex,
      header: resolvedLabel,
      headerProps: resolvedLabelProps,
      margins: hasLabel ? margins : void 0,
      overflow: "initial",
      textProps: labelTextProps,
      width,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        import_material9.TextField,
        __spreadProps(__spreadValues({}, props), {
          ref,
          id: (_c = props.id) != null ? _c : inputName,
          name: inputName,
          onChange: handleChange,
          onClick,
          onKeyDown: handleKeyDown,
          value,
          variant,
          helperText: !helperText ? void 0 : typeof helperText === "string" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Text, __spreadProps(__spreadValues({ color: (_d = helperTextProps.color) != null ? _d : color }, helperTextProps), { children: helperText })) : helperText,
          FormHelperTextProps: { component: "div" },
          inputProps: __spreadProps(__spreadValues({
            title: typeof value === "string" ? value : void 0
          }, inputProps), {
            maxLength,
            value: value != null ? value : ""
          }),
          InputProps: __spreadValues({
            endAdornment: adornmentPosition === "end" && adornment ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_material9.InputAdornment, { position: "end", children: typeof adornment === "string" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Text, { fontSize: "0.9em", color: adornmentColor, children: adornment }) : adornment }) : null,
            startAdornment: adornmentPosition === "start" ? adornment : null
          }, props.InputProps),
          size: "small",
          className: cx(css.input, className),
          "aria-label": "input",
          children
        })
      )
    }
  );
});
var useClasses10 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  return {
    input: __spreadProps(__spreadValues({
      flex: props.flex
    }, makeMargins(__spreadProps(__spreadValues({}, props.margins), {
      bottom: (_b = (_a = props.margins) == null ? void 0 : _a.bottom) != null ? _b : props.hasHelper && !props.helperText ? "1.3rem" : 0
    }))), {
      minWidth: props.minWidth,
      width: "100%",
      "& input, & textarea": __spreadProps(__spreadValues({}, makePadding(__spreadProps(__spreadValues({}, props.padding), {
        all: (_c = props.padding.all) != null ? _c : props.dense ? DENSE_INPUT_PADDING : void 0
      }))), {
        boxSizing: props.inputRootHeight ? "border-box" : void 0,
        color: props.textColor,
        cursor: props.hasOnClick ? "pointer" : void 0,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        height: props.inputRootHeight ? "100%" : props.height,
        textAlign: props.textAlign,
        "&.Mui-disabled": props.noFade || props.textColor ? {
          color: props.textColor,
          opacity: props.noFade ? 1 : void 0,
          WebkitTextFillColor: props.textColor
        } : void 0
      }),
      "& .MuiInputAdornment-root svg": {
        color: props.adornmentColor
      },
      "& .MuiTypography-root": {
        display: "inline-grid",
        width: "100%",
        textAlign: props.textAlign
      },
      "& .MuiOutlinedInput-root": {
        background: props.background,
        minHeight: props.inputRootHeight ? 0 : void 0,
        height: props.inputRootHeight,
        "&.Mui-disabled": props.noFade ? { opacity: 1 } : void 0,
        "& fieldset": __spreadValues(__spreadValues({
          transition: "all 200ms ease-in-out",
          borderColor: props.color,
          borderStyle: "dotted"
        }, makeBorders(props.borders)), makeBorderRadiuses(
          deepMerge(props.hasLabel ? { top: 0 } : {}, (_d = props.borderRadiuses) != null ? _d : {})
        )),
        "&:hover fieldset": {
          borderColor: props.color ? (0, import_color3.default)(props.color).lighten(0.3).toString() : void 0
        },
        "&.Mui-focused fieldset": {
          borderColor: props.color
        }
      },
      "& .MuiSelect-select": {
        fontFamily: props.fontFamily,
        fontSize: (_e = props.fontSize) != null ? _e : "0.9em",
        padding: props.dense ? DENSE_INPUT_PADDING : void 0
      },
      "& .MuiFormHelperText-root": {
        margin: "0.3rem 0 0 0",
        color: (_g = (_f = props.helperTextProps) == null ? void 0 : _f.color) != null ? _g : props.color,
        fontSize: "0.75em",
        lineHeight: 1,
        textAlign: "center"
      }
    })
  };
});

// trabecula/components/inputs/dropdown.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var import_react12 = require("react");
function Dropdown(_a) {
  var _b = _a, {
    autoHighlight = true,
    autoSelect = false,
    borderColor,
    caretColor,
    caretSize = "1.4rem",
    dense = false,
    disabled,
    freeSolo = false,
    header,
    headerProps,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputLineHeight,
    inputOutlineWidth,
    inputPadding,
    inputProps,
    inputRootAlignItems,
    inputRootHeight,
    inputRootMinHeight,
    inputRootPadding,
    InputProps: InputProps7,
    itemBgColor,
    label,
    labelProps,
    labelTextProps,
    listboxBorder,
    listboxBorderRadius,
    menuItemBorder,
    menuItemMinHeight,
    menuItemPadding,
    menuItemSelectedBgColor,
    optionTextProps,
    options,
    paperBorder,
    paperBorderRadius,
    required,
    setValue,
    textColor,
    value,
    withClearButton = false,
    withValueTest = false
  } = _b, props = __objRest(_b, [
    "autoHighlight",
    "autoSelect",
    "borderColor",
    "caretColor",
    "caretSize",
    "dense",
    "disabled",
    "freeSolo",
    "header",
    "headerProps",
    "inputFontSize",
    "inputFontWeight",
    "inputHeight",
    "inputLineHeight",
    "inputOutlineWidth",
    "inputPadding",
    "inputProps",
    "inputRootAlignItems",
    "inputRootHeight",
    "inputRootMinHeight",
    "inputRootPadding",
    "InputProps",
    "itemBgColor",
    "label",
    "labelProps",
    "labelTextProps",
    "listboxBorder",
    "listboxBorderRadius",
    "menuItemBorder",
    "menuItemMinHeight",
    "menuItemPadding",
    "menuItemSelectedBgColor",
    "optionTextProps",
    "options",
    "paperBorder",
    "paperBorderRadius",
    "required",
    "setValue",
    "textColor",
    "value",
    "withClearButton",
    "withValueTest"
  ]);
  var _a2, _b2, _c, _d;
  const resolvedLabel = label != null ? label : header;
  const resolvedHeader = typeof resolvedLabel === "string" && required ? `${resolvedLabel} *` : resolvedLabel;
  const committedLabel = value === "" ? "" : (_b2 = (_a2 = options.find((option) => option.value === value)) == null ? void 0 : _a2.label) != null ? _b2 : freeSolo && typeof value === "string" ? value : "";
  const [inputValue, setInputValue] = (0, import_react11.useState)(committedLabel);
  const [valueOption, setValueOption] = (0, import_react11.useState)(null);
  const containerRef = (0, import_react11.useRef)(null);
  const isTypingRef = (0, import_react11.useRef)(false);
  const { width: inputWidth } = useElementResize(containerRef);
  const { css, cx } = useClasses11({
    dense,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputLineHeight,
    inputOutlineWidth,
    inputPadding,
    inputRootAlignItems,
    inputRootHeight,
    inputRootMinHeight,
    inputRootPadding,
    itemBgColor,
    listboxBorder,
    listboxBorderRadius,
    menuItemBorder,
    menuItemMinHeight,
    menuItemPadding,
    menuItemSelectedBgColor,
    paperBorder,
    paperBorderRadius,
    paperWidth: props.width || inputWidth,
    textColor
  });
  (0, import_react11.useEffect)(() => {
    var _a3, _b3;
    const matched = value === "" ? null : (_a3 = options.find((option) => option.value === value)) != null ? _a3 : null;
    setValueOption(matched);
    if (!isTypingRef.current)
      setInputValue((_b3 = matched == null ? void 0 : matched.label) != null ? _b3 : freeSolo && typeof value === "string" ? value : "");
  }, [freeSolo, options, value]);
  const filterOptions2 = (availableOptions, state) => {
    if (!state.inputValue || !isTypingRef.current) return availableOptions;
    const searchString = state.inputValue.trim().toLowerCase();
    const searchTerms = searchString.split(" ");
    const joinedTerms = searchTerms.join(" ");
    const scoreOption = (option) => {
      const optionLabel = option.label.toLowerCase();
      if (optionLabel === searchString) return 100;
      else if (optionLabel.startsWith(searchString)) return 50;
      else if (optionLabel.includes(joinedTerms)) return 25;
      else return 10;
    };
    return availableOptions.filter((option) => {
      const labelMatches = option.label.toLowerCase().includes(searchString);
      const valueMatches = withValueTest && typeof option.value === "string" ? option.value.toLowerCase().includes(searchString) : false;
      return labelMatches || valueMatches;
    }).map((option) => ({ option, score: scoreOption(option) })).sort((a, b) => b.score - a.score).map(({ option }) => option);
  };
  const handleChange = (_, newValue) => {
    var _a3;
    isTypingRef.current = false;
    if (typeof newValue === "string") {
      setValue(newValue);
      setValueOption(null);
      setInputValue(newValue);
    } else {
      const newValueOption = (newValue == null ? void 0 : newValue.value) === "" ? null : newValue;
      setValue(newValue == null ? void 0 : newValue.value);
      setValueOption(newValueOption);
      setInputValue((_a3 = newValueOption == null ? void 0 : newValueOption.label) != null ? _a3 : "");
    }
  };
  const handleInputChange = (_, newInputValue, reason) => {
    if (reason !== "input") return;
    isTypingRef.current = true;
    setInputValue(newInputValue);
    if (freeSolo) setValue(newInputValue);
  };
  const handleInputKeyDown = (event) => {
    var _a3;
    (_a3 = inputProps == null ? void 0 : inputProps.onKeyDown) == null ? void 0 : _a3.call(inputProps, event);
    if (event.defaultPrevented || !freeSolo || event.key !== "Enter") return;
    event.preventDefault();
    event.stopPropagation();
    isTypingRef.current = false;
    setValue(inputValue);
    setValueOption(null);
    setInputValue(inputValue);
  };
  const handleClose = (_, reason) => {
    var _a3;
    if (reason !== "blur" && reason !== "escape") return;
    isTypingRef.current = false;
    if (!freeSolo) setInputValue((_a3 = valueOption == null ? void 0 : valueOption.label) != null ? _a3 : "");
  };
  const renderInput = (params) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Input,
    __spreadProps(__spreadValues(__spreadValues({}, props), params), {
      className: cx(css.input, props.className),
      color: borderColor != null ? borderColor : props.color,
      dense,
      InputProps: __spreadValues(__spreadValues({}, params.InputProps), InputProps7),
      inputProps: __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, params.inputProps), {
        title: inputValue
      }), inputProps), {
        onKeyDown: handleInputKeyDown
      }),
      required,
      value: params.inputProps.value
    })
  );
  const renderOption = (itemProps, option) => /* @__PURE__ */ (0, import_react12.createElement)(
    import_material10.MenuItem,
    __spreadProps(__spreadValues({}, itemProps), {
      key: String(option.value),
      className: cx(itemProps.className, css.menuItem),
      title: option.label
    }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Text, __spreadProps(__spreadValues({}, optionTextProps), { children: option.label }))
  );
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    HeaderWrapper,
    {
      ref: containerRef,
      header: resolvedHeader,
      headerProps: deepMerge(DEFAULT_INPUT_HEADER_PROPS, (_c = labelProps != null ? labelProps : headerProps) != null ? _c : {}),
      overflow: "initial",
      textProps: labelTextProps,
      width: (_d = props.width) != null ? _d : "100%",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        import_material10.Autocomplete,
        {
          autoHighlight,
          autoSelect,
          className: css.autocomplete,
          componentsProps: { paper: { className: css.paper } },
          disableClearable: !withClearButton,
          disabled,
          filterOptions: filterOptions2,
          freeSolo,
          fullWidth: true,
          inputValue,
          ListboxProps: { className: css.listbox },
          onChange: handleChange,
          onClose: handleClose,
          onInputChange: handleInputChange,
          options,
          popupIcon: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Icon, { name: "ArrowDropDown", color: caretColor, size: caretSize }),
          renderInput,
          renderOption,
          selectOnFocus: false,
          size: "small",
          value: valueOption
        }
      )
    }
  );
}
var useClasses11 = makeClasses((props) => {
  var _a;
  const inputPadding = (_a = props.inputPadding) != null ? _a : props.dense ? DENSE_INPUT_PADDING : void 0;
  return {
    autocomplete: {
      height: "100%",
      "& > [aria-label='header-wrapper-content'], & .MuiFormControl-root": {
        height: "100%"
      }
    },
    input: {
      "& input": {
        fontSize: props.inputFontSize,
        fontWeight: props.inputFontWeight,
        height: props.inputHeight,
        lineHeight: props.inputLineHeight,
        padding: inputPadding
      },
      "& .MuiInputBase-input.MuiAutocomplete-input, & .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
        boxSizing: "border-box",
        height: props.inputHeight,
        lineHeight: props.inputLineHeight,
        padding: inputPadding
      },
      "& .MuiOutlinedInput-root": {
        alignItems: props.inputRootAlignItems,
        boxSizing: "border-box",
        minHeight: props.inputRootMinHeight,
        height: props.inputRootHeight,
        padding: props.inputRootPadding,
        "& fieldset": {
          borderWidth: props.inputOutlineWidth
        },
        "&:hover fieldset, &.Mui-focused fieldset": {
          borderWidth: props.inputOutlineWidth
        }
      }
    },
    listbox: {
      padding: 0,
      border: props.listboxBorder,
      borderRadius: props.listboxBorderRadius
    },
    menuItem: {
      alignItems: "center",
      justifyContent: "flex-start",
      minHeight: props.menuItemMinHeight,
      padding: props.menuItemPadding,
      whiteSpace: "normal",
      color: props.textColor,
      backgroundColor: props.itemBgColor,
      "&.Mui-focused, &.Mui-focusVisible, &[aria-selected='true'], &.Mui-focused[aria-selected='true']": {
        backgroundColor: props.menuItemSelectedBgColor
      },
      "&:hover": {
        backgroundColor: props.itemBgColor ? (0, import_color4.default)(props.itemBgColor).lighten(0.05).hex() : void 0
      },
      "&:not(:last-of-type)": {
        borderBottom: props.menuItemBorder
      }
    },
    paper: {
      border: props.paperBorder,
      borderRadius: props.paperBorderRadius,
      maxWidth: props.paperWidth,
      minWidth: props.paperWidth
    }
  };
});

// trabecula/components/inputs/filter-header.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var FilterHeader = Comp(({ label, mode, setMode }) => {
  const toggleMode = () => setMode(mode === "required" ? "optional" : "required");
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    HeaderContent,
    {
      rightNode: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        IconButton,
        {
          color: mode === "optional" ? colors.custom.lightBlue : colors.custom.grey,
          iconProps: { size: "0.8rem" },
          name: mode === "optional" ? "AddCircle" : "Circle",
          onClick: toggleMode,
          padding: { all: 0 },
          tooltip: mode === "optional" ? "Optional" : "Required"
        }
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Text, { fontSize: "0.8em", textAlign: "center", children: label })
    }
  );
});

// trabecula/components/inputs/filter-menu.tsx
var import_react13 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var FilterMenu = Comp(
  (_a) => {
    var _b = _a, {
      children,
      color = colors.custom.black,
      menuProps = {},
      resetFn,
      sortOptions,
      store,
      viewProps = {},
      width = "8rem"
    } = _b, buttonProps = __objRest(_b, [
      "children",
      "color",
      "menuProps",
      "resetFn",
      "sortOptions",
      "store",
      "viewProps",
      "width"
    ]);
    const hasSavedSearchApi = !!store.applySavedSearch && !!store.deleteSavedSearch && !!store.loadSavedSearches && !!store.saveSavedSearch;
    const handleReset = () => {
      resetFn ? resetFn() : store.reset();
      handleSearch();
    };
    const handleSearch = () => {
      store.setPageCount(1);
      store.loadFiltered({ noCache: true, page: 1 });
    };
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color: store.hasChanges ? colors.custom.purple : color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(View, { row: true, align: "center", spacing: "0.5rem", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Icon, { name: "FilterAlt", size: "1.15em" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Text, { children: "Filter Results" })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(View, { row: true, spacing: "0.5rem", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            text: "Search",
            icon: "Search",
            onClick: handleSearch,
            disabled: store.isLoading,
            color: store.hasChanges ? colors.custom.purple : colors.custom.blue,
            width: "100%"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            icon: "Refresh",
            onClick: handleReset,
            disabled: store.isLoading,
            color: colors.foregroundCard,
            colorOnHover: colors.custom.red
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          SortMenu,
          {
            rows: sortOptions,
            value: store.sortValue,
            setValue: store.setSortValue,
            color: colors.foregroundCard,
            width: "9rem"
          }
        ),
        hasSavedSearchApi && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Divider, { orientation: "vertical" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SavedSearchMenu, { store })
        ] })
      ] }),
      children
    ] })) }));
  }
);
var SavedSearchMenu = Comp(({ store }) => {
  var _a;
  const [inputValue, setInputValue] = (0, import_react13.useState)("");
  const [label, setLabel] = (0, import_react13.useState)("");
  const activeSearch = store.savedSearches.find((s) => s.id === store.selectedSavedSearchId);
  const options = store.savedSearches.map((savedSearch) => ({
    label: savedSearch.label,
    value: savedSearch.id
  }));
  (0, import_react13.useEffect)(() => {
    store.loadSavedSearches();
  }, [store]);
  (0, import_react13.useEffect)(() => {
    var _a2;
    setInputValue((_a2 = activeSearch == null ? void 0 : activeSearch.label) != null ? _a2 : "");
  }, [activeSearch == null ? void 0 : activeSearch.id, activeSearch == null ? void 0 : activeSearch.label]);
  const handleDelete = () => __async(null, null, function* () {
    yield store.deleteSavedSearch(store.selectedSavedSearchId);
    return true;
  });
  const handleEdit = () => {
    var _a2;
    setLabel((_a2 = activeSearch == null ? void 0 : activeSearch.label) != null ? _a2 : "");
    store.setIsSaveModalOpen(true);
  };
  const handleSave = () => store.saveSavedSearch(label);
  const handleSelect = (_, value, reason) => {
    if (value === "" && reason === "reset") return;
    setInputValue(value);
    const selectedSearch = options.find((option) => option.label === value);
    if (selectedSearch) store.applySavedSearch(selectedSearch.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      AutoComplete,
      {
        options,
        inputValue,
        isOptionEqualToValue: (option, value) => option.value === value.value,
        onInputChange: handleSelect,
        inputProps: {
          height: "1em",
          placeholder: "Saved Searches",
          width: "100%"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Button,
      {
        icon: "Save",
        onClick: handleEdit,
        disabled: store.isLoading,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.blue
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Button,
      {
        icon: "Delete",
        onClick: () => store.setIsDeleteModalOpen(true),
        disabled: store.isLoading || !store.selectedSavedSearchId,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.red
      }
    ),
    store.isDeleteModalOpen && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      ConfirmModal,
      {
        subText: `Delete saved search "${(_a = activeSearch == null ? void 0 : activeSearch.label) != null ? _a : "Selected Search"}"?`,
        setVisible: store.setIsDeleteModalOpen,
        onConfirm: handleDelete
      }
    ),
    store.isSaveModalOpen && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      SavedSearchModal,
      {
        label,
        onClose: () => store.setIsSaveModalOpen(false),
        onSave: handleSave,
        setLabel
      }
    )
  ] });
});
var SavedSearchModal = Comp(({ label, onClose, onSave, setLabel }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Modal.Container, { onClose, width: "24rem", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Text, { preset: "title", children: "Save Search" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Modal.Content, { spacing: "0.5rem", dividers: false, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Input, { header: "Label", value: label, setValue: setLabel, autoFocus: true }) }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Modal.Footer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Button, { text: "Cancel", icon: "Close", onClick: onClose, color: colors.foregroundCard }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Button,
      {
        text: "Save",
        icon: "Save",
        onClick: onSave,
        disabled: !label.trim(),
        color: colors.custom.green
      }
    )
  ] })
] }));

// trabecula/components/inputs/log-ops-input.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var LOG_OPS_OPTS = [
  { label: "Any", value: "" },
  ...LOGICAL_OPS.map((op) => ({ label: op, value: op }))
];
var LogOpsInput = Comp(
  (_a) => {
    var _b = _a, {
      dropdownProps = {},
      header,
      headerProps,
      logOpValue,
      numInputProps,
      numValue,
      numValueDisplay,
      setLogOpValue,
      setNumValue,
      setNumValueDisplay
    } = _b, props = __objRest(_b, [
      "dropdownProps",
      "header",
      "headerProps",
      "logOpValue",
      "numInputProps",
      "numValue",
      "numValueDisplay",
      "setLogOpValue",
      "setNumValue",
      "setNumValueDisplay"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(HeaderWrapper, __spreadProps(__spreadValues({ row: true, overflow: "hidden", header, headerProps }, props), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Dropdown,
        __spreadValues({
          value: logOpValue,
          setValue: setLogOpValue,
          options: LOG_OPS_OPTS,
          minWidth: "3.7em",
          borderRadiuses: { top: 0, right: 0 },
          textAlign: "center"
        }, dropdownProps)
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        NumInput,
        __spreadValues({
          value: numValue,
          valueDisplay: numValueDisplay,
          setValue: setNumValue,
          setValueDisplay: setNumValueDisplay,
          disabled: logOpValue === "",
          width: "100%",
          textAlign: "center",
          hasHelper: false,
          borderRadiuses: { top: 0, left: 0 }
        }, numInputProps)
      )
    ] }));
  }
);

// trabecula/components/inputs/multi-input.tsx
var import_react15 = require("react");

// trabecula/components/inputs/multi-input-list.tsx
var import_react14 = require("react");
var import_react_virtualized_auto_sizer = __toESM(require("react-virtualized-auto-sizer"));
var import_react_window = require("react-window");

// trabecula/components/inputs/multi-input-row.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var MULTI_INPUT_ROW_HEIGHT = 35;
var MultiInputRow = (_a) => {
  var _b = _a, { bgColor } = _b, props = __objRest(_b, ["bgColor"]);
  var _a2, _b2;
  const hasClick = !!props.onClick;
  const { css } = useClasses12({ bgColor: bgColor || colors.foreground, hasClick });
  const value = (_b2 = (_a2 = props.valueExtractor) == null ? void 0 : _a2.call(props, props.value)) != null ? _b2 : props.value;
  const handleClick = () => {
    var _a3;
    return (_a3 = props.onClick) == null ? void 0 : _a3.call(props, props.value);
  };
  const handleDelete = () => props.search.onChange(
    props.search.value.filter((v) => {
      var _a3, _b3;
      return ((_b3 = (_a3 = props.valueExtractor) == null ? void 0 : _a3.call(props, v)) != null ? _b3 : v) !== value;
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(View, { row: true, className: css.root, style: props.style, children: [
    props.leftNode,
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      View,
      {
        onClick: hasClick ? handleClick : null,
        row: true,
        flex: 1,
        overflow: "hidden",
        padding: { all: "0 0.3rem" },
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Text,
          {
            tooltip: value,
            tooltipProps: {
              enterDelay: _CONSTANTS.TOOLTIP.ENTER_DELAY,
              enterNextDelay: _CONSTANTS.TOOLTIP.ENTER_NEXT_DELAY,
              flexShrink: 1
            },
            className: css.label,
            children: value
          }
        )
      }
    ),
    props.rightNode,
    props.hasDelete && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      Button,
      {
        onClick: handleDelete,
        icon: "Close",
        color: "transparent",
        colorOnHover: colors.custom.red,
        boxShadow: "none"
      }
    )
  ] });
};
var useClasses12 = makeClasses((props) => ({
  label: {
    padding: "0 0.3rem",
    fontSize: "0.8em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  root: {
    alignItems: "center",
    borderBottom: `1px solid ${colors.custom.black}`,
    height: MULTI_INPUT_ROW_HEIGHT,
    width: "100%",
    backgroundColor: props.bgColor,
    cursor: props.hasClick ? "pointer" : void 0
  }
}));

// trabecula/components/inputs/multi-input-list.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var MultiInputList = (0, import_react14.forwardRef)(
  ({
    hasDelete,
    hasDeleteAll = false,
    hasInput,
    renderRow,
    search,
    viewProps = {}
  }, ref) => {
    const { css } = useClasses13({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(View, { column: true, height: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        View,
        __spreadProps(__spreadValues({}, viewProps), {
          column: true,
          height: "100%",
          borderRadiuses: {
            all: "0.3rem",
            top: hasInput ? 0 : void 0,
            bottom: hasDeleteAll ? 0 : void 0
          },
          className: css.listContainer,
          children: !search.value.length ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CenteredText, { text: "No items", color: colors.custom.grey }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(View, { flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_virtualized_auto_sizer.default, { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            import_react_window.FixedSizeList,
            {
              ref,
              height,
              width: "100%",
              layout: "vertical",
              itemSize: MULTI_INPUT_ROW_HEIGHT,
              itemCount: search.value.length,
              children: ({ index, style }) => renderRow ? renderRow(index, style) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                MultiInputRow,
                {
                  hasDelete,
                  value: search.value[index],
                  search,
                  style
                },
                index
              )
            }
          ) }) })
        })
      ),
      hasDeleteAll && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        Button,
        {
          text: "Delete All",
          icon: "Close",
          onClick: handleDeleteAll,
          colorOnHover: colors.custom.red,
          textColor: colors.custom.lightGrey,
          outlined: true,
          width: "100%",
          borderRadiuses: { top: 0 }
        }
      )
    ] });
  }
);
var useClasses13 = makeClasses((props) => ({
  listContainer: {
    border: `1px dotted ${colors.custom.grey}`,
    borderTop: props.hasInput ? "none" : void 0,
    borderBottom: props.hasDeleteAll ? "none" : void 0,
    minHeight: "2.5rem",
    backgroundColor: "rgb(0 0 0 / 0.2)",
    overflowY: "auto"
  }
}));

// trabecula/components/inputs/multi-input.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var MultiInput = Comp(
  ({
    hasDelete = true,
    hasDeleteAll = false,
    hasHelper = false,
    hasList = true,
    header,
    headerProps = {},
    inputProps,
    max,
    onChange,
    single,
    value = []
  }, inputRef) => {
    const isMax = max > -1 && value.length >= max;
    const disabled = (inputProps == null ? void 0 : inputProps.disabled) || isMax;
    const [inputValue, setInputValue] = (0, import_react15.useState)("");
    const onKeyDown = (e) => {
      if (e.key === "Enter" && !isMax) {
        e.preventDefault();
        if (!value.includes(inputValue)) onChange([...value, inputValue]);
        setInputValue("");
      }
    };
    const renderList = () => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      MultiInputList,
      {
        hasDelete,
        hasDeleteAll,
        search: { onChange, value },
        hasInput: true
      }
    );
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(HeaderWrapper, { header, headerProps, children: renderList() }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Input,
        __spreadProps(__spreadValues({
          disabled,
          hasHelper,
          header,
          headerProps
        }, inputProps), {
          onKeyDown,
          ref: inputRef,
          value: inputValue,
          setValue: setInputValue,
          borderRadiuses: { bottom: !single && hasList ? 0 : void 0 }
        })
      ),
      !single && hasList && renderList()
    ] }) });
  }
);

// trabecula/components/inputs/num-input.tsx
var import_react16 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var NumInput = Comp(
  (_a, ref) => {
    var _b = _a, {
      hasHelper,
      maxValue,
      minValue,
      setValue,
      setValueDisplay,
      value,
      valueDisplay
    } = _b, props = __objRest(_b, [
      "hasHelper",
      "maxValue",
      "minValue",
      "setValue",
      "setValueDisplay",
      "value",
      "valueDisplay"
    ]);
    const [error, setError] = (0, import_react16.useState)(null);
    const handleChange = (val) => {
      if (!val) {
        setValue == null ? void 0 : setValue(null);
        setValueDisplay == null ? void 0 : setValueDisplay(null);
        setError(null);
      } else if (setValueDisplay) {
        setValueDisplay(val);
      } else if (isNaN(+val)) {
        toast.error("Must be a number");
      } else {
        setValue == null ? void 0 : setValue(+val);
        if (maxValue != null && +val > maxValue)
          hasHelper ? setError(`Max: ${maxValue}`) : toast.error(`Max: ${maxValue}`);
        else if (minValue != null && +val < minValue)
          hasHelper ? setError(`Min: ${minValue}`) : toast.error(`Min: ${minValue}`);
        else setError(null);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      Input,
      __spreadValues({
        ref,
        value: valueDisplay != null ? valueDisplay : value !== null && !isNaN(+value) ? String(value) : "",
        setValue: handleChange,
        error: hasHelper && !!error,
        helperText: hasHelper ? error : null,
        hasHelper
      }, props)
    );
  }
);

// trabecula/components/inputs/num-range.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var NumRange = Comp(
  ({
    hasHelper = false,
    header,
    headerProps,
    max,
    min,
    numInputProps = {},
    setMax,
    setMin
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          NumInput,
          __spreadProps(__spreadValues({}, numInputProps), {
            hasHelper,
            value: min,
            setValue: setMin,
            placeholder: "Min",
            textAlign: "center",
            borderRadiuses: { top: 0, right: 0 }
          })
        ),
        endInput: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          NumInput,
          __spreadProps(__spreadValues({}, numInputProps), {
            hasHelper,
            value: max,
            setValue: setMax,
            placeholder: "Max",
            textAlign: "center",
            borderRadiuses: { top: 0, left: 0 }
          })
        )
      }
    );
  }
);

// trabecula/components/inputs/range-wrapper.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var RangeWrapper = Comp((props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [
    props.startInput,
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      View,
      {
        column: true,
        justify: "center",
        bgColor: "rgb(0 0 0 / 0.2)",
        padding: { all: "0 0.4rem" },
        borders: {
          top: `1px dotted ${colors.custom.grey}`,
          bottom: `1px dotted ${colors.custom.grey}`
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "\u2014" })
      }
    ),
    props.endInput
  ] });
});

// trabecula/components/inputs/slider.tsx
var import_material11 = require("@mui/material");
var import_jsx_runtime27 = require("react/jsx-runtime");
var Slider = Comp(
  (_a, ref) => {
    var _b = _a, {
      className,
      color = colors.custom.lightBlue,
      flex,
      height,
      margins,
      onCommit,
      orientation = "horizontal",
      padding,
      setValue,
      value,
      width
    } = _b, props = __objRest(_b, [
      "className",
      "color",
      "flex",
      "height",
      "margins",
      "onCommit",
      "orientation",
      "padding",
      "setValue",
      "value",
      "width"
    ]);
    const { css, cx } = useClasses14({ color, flex, height, margins, orientation, padding, width });
    const handleChange = (_, value2) => setValue == null ? void 0 : setValue(value2);
    const handleCommit = (_, value2) => onCommit == null ? void 0 : onCommit(value2);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      import_material11.Slider,
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: cx(css.slider, className),
        onChange: handleChange,
        onChangeCommitted: handleCommit,
        orientation,
        value
      })
    );
  }
);
var useClasses14 = makeClasses((props) => ({
  slider: __spreadProps(__spreadValues(__spreadValues({
    color: props.color,
    "& .MuiSlider-markLabel": {
      top: props.orientation === "horizontal" ? -10 : void 0,
      fontSize: "0.65em",
      fontWeight: 600
    },
    "& .MuiSlider-thumb": {
      borderRadius: "0.5rem",
      height: props.orientation === "vertical" ? 4 : 18,
      width: props.orientation === "vertical" ? 18 : 4
    },
    flex: props.flex,
    height: props.height
  }, makeMargins(props.margins)), makePadding(props.padding)), {
    width: props.width
  })
}));

// trabecula/components/inputs/time-input.tsx
var import_react17 = require("react");
var import_x_date_pickers2 = require("@mui/x-date-pickers");
var import_AdapterDayjs2 = require("@mui/x-date-pickers/AdapterDayjs");
var import_TimePicker = require("@mui/x-date-pickers/TimePicker");
var import_jsx_runtime28 = require("react/jsx-runtime");
var useClasses15 = makeClasses({
  timePicker: {
    width: "100%",
    "& .MuiInputBase-input": {
      paddingLeft: "0.5rem"
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem"
    }
  }
});

// trabecula/components/list/detail-rows.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var useClasses16 = makeClasses((props) => ({
  label: {
    flexShrink: 0,
    marginRight: "1rem",
    width: props.labelWidth,
    color: colors.custom.blue,
    fontWeight: "bold",
    whiteSpace: "nowrap"
  },
  row: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  table: {
    display: "flex",
    flexFlow: "column nowrap",
    padding: "0.5rem"
  }
}));

// trabecula/components/list/list.tsx
var import_material12 = require("@mui/material");
var import_jsx_runtime30 = require("react/jsx-runtime");
var useClasses17 = makeClasses((props) => ({
  list: {
    padding: 0,
    "& > *:not(:last-child)": {
      borderBottom: props.noDividers ? void 0 : `1px solid ${props.dividerColor}`
    }
  }
}));

// trabecula/components/list/list-item.tsx
var import_material13 = require("@mui/material");
var import_color5 = __toESM(require("color"));
var import_jsx_runtime31 = require("react/jsx-runtime");
var useClasses18 = makeClasses((props) => ({
  icon: {
    minWidth: 0
  },
  root: {
    padding: "0.1rem 0.8rem",
    "&:not(:last-child)": {
      borderBottom: `1px solid ${colors.custom.darkGrey}`
    }
  },
  text: {
    color: props.color
  },
  tooltipPopper: {
    marginLeft: "-0.75rem !important"
  }
}));

// trabecula/components/media/icon.tsx
var import_material14 = require("@mui/material");
var import_jsx_runtime32 = require("react/jsx-runtime");
var import_react18 = require("react");
var Icon = (_a) => {
  var _b = _a, {
    className,
    color = "inherit",
    layers,
    margins,
    name,
    rotation,
    size,
    style,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "className",
    "color",
    "layers",
    "margins",
    "name",
    "rotation",
    "size",
    "style",
    "viewProps"
  ]);
  var _a2;
  const { css, cx } = useClasses19({
    color,
    hasLayers: !!(layers == null ? void 0 : layers.length),
    layers,
    layerSize: size != null ? size : (_a2 = layers == null ? void 0 : layers[0]) == null ? void 0 : _a2.size,
    rotation,
    size
  });
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(View, __spreadProps(__spreadValues({ column: true, margins, className: cx(css.root, className) }, viewProps), { children: (layers == null ? void 0 : layers.length) ? layers.map((layer, i) => /* @__PURE__ */ (0, import_react18.createElement)(
    import_material14.Icon,
    __spreadProps(__spreadValues({}, props), {
      baseClassName: getIconClassName(layer.name),
      key: `${layer.name}-${i}`,
      className: css.layer,
      "data-icon-layer": i
    }),
    ICON_LIGATURES[layer.name]
  )) : name ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    import_material14.Icon,
    __spreadProps(__spreadValues({}, props), {
      baseClassName: getIconClassName(name),
      className: css.icon,
      style: style && __spreadProps(__spreadValues({}, style), { color, fontSize: size }),
      children: ICON_LIGATURES[name]
    })
  ) : "" }));
};
var getIconClassName = (name) => name in COUNTRY_FLAG_LIGATURES ? "country-flags" : "material-icons";
var defaultCssValue = (value) => value === void 0 ? "0" : typeof value === "number" ? `${value}px` : value;
var makeLayerTransform = ({ rotation, x, y }) => {
  const offsetX = defaultCssValue(x);
  const offsetY = defaultCssValue(y);
  const rotate = rotation !== void 0 ? ` rotate(${rotation}deg)` : "";
  return `translate(-50%, -50%) translate(${offsetX}, ${offsetY})${rotate}`;
};
var useClasses19 = makeClasses((props) => {
  var _a;
  const rootSize = !props.hasLayers ? void 0 : defaultCssValue(props.layerSize);
  return {
    icon: {
      "&.MuiIcon-root": {
        color: props.color,
        fontSize: props.size
      }
    },
    layer: {
      left: "50%",
      position: "absolute",
      top: "50%"
    },
    root: __spreadProps(__spreadValues({}, Object.fromEntries(
      ((_a = props.layers) != null ? _a : []).map((layer, index) => {
        var _a2, _b;
        return [
          `& > [data-icon-layer="${index}"]`,
          {
            color: (_a2 = layer.color) != null ? _a2 : props.color,
            fontSize: (_b = layer.size) != null ? _b : props.size,
            transform: makeLayerTransform(layer)
          }
        ];
      })
    )), {
      alignItems: props.hasLayers ? "center" : void 0,
      height: rootSize,
      justifyContent: "center",
      position: props.hasLayers ? "relative" : void 0,
      transform: props.rotation !== void 0 ? `rotate(${props.rotation}deg)` : void 0,
      transition: "all 200ms ease-in-out",
      width: rootSize
    })
  };
});

// trabecula/components/modals/confirm-modal.tsx
var import_react19 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
var ConfirmModal = ({
  cancelColor = colors.custom.grey,
  cancelIcon = "Close",
  cancelText = "Cancel",
  children,
  confirmColor = colors.custom.red,
  confirmIcon = "Delete",
  confirmText = "Delete",
  headerText = "Confirm Delete",
  height = "25rem",
  onCancel,
  onConfirm,
  setVisible,
  subText,
  width = "25rem"
}) => {
  const [isLoading, setIsLoading] = (0, import_react19.useState)(false);
  const handleClose = () => setVisible(false);
  const handleCancel = () => {
    if (!isLoading) {
      onCancel == null ? void 0 : onCancel();
      handleClose();
    }
  };
  const handleConfirm = () => __async(null, null, function* () {
    var _a;
    if (!isLoading) {
      setIsLoading(true);
      try {
        const success = yield onConfirm();
        if (success) handleClose();
      } catch (error) {
        toast.error((_a = error == null ? void 0 : error.message) != null ? _a : String(error));
      } finally {
        setIsLoading(false);
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Modal.Container, { isLoading, onClose: handleCancel, height, width, children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Text, { preset: "title", children: headerText }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Modal.Content, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "Delete", color: colors.custom.red, size: "5rem" }),
      (subText == null ? void 0 : subText.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Text, { fontSize: "1.3em", textAlign: "center", whiteSpace: "normal", children: subText }) : null,
      children
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        Button,
        {
          text: cancelText,
          icon: cancelIcon,
          color: cancelColor,
          onClick: handleCancel,
          disabled: isLoading
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        Button,
        {
          text: confirmText,
          icon: confirmIcon,
          color: confirmColor,
          onClick: handleConfirm,
          disabled: isLoading
        }
      )
    ] })
  ] });
};

// trabecula/components/modals/modal/container.tsx
var import_react20 = require("react");
var import_react_draggable = __toESM(require("react-draggable"));
var import_material15 = require("@mui/material");
var import_jsx_runtime34 = require("react/jsx-runtime");
var Container = (_a) => {
  var _b = _a, {
    children,
    className,
    closeOnBackdrop = true,
    draggable = false,
    height,
    isLoading,
    maxHeight,
    maxWidth = "none",
    onClose,
    scroll = "paper",
    visible = true,
    width
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "closeOnBackdrop",
    "draggable",
    "height",
    "isLoading",
    "maxHeight",
    "maxWidth",
    "onClose",
    "scroll",
    "visible",
    "width"
  ]);
  const { css, cx } = useClasses20({ height, maxHeight, maxWidth, width });
  const handleClose = (_, reason) => {
    if (reason !== "backdropClick" || closeOnBackdrop) onClose == null ? void 0 : onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    import_material15.Dialog,
    __spreadProps(__spreadValues({}, props), {
      scroll,
      PaperComponent: draggable ? DraggablePaper : void 0,
      open: visible,
      onClose: handleClose,
      className: cx(css.modal, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(LoadingOverlay, { isLoading }),
        children
      ]
    })
  );
};
var DraggablePaper = (props) => {
  const { css, cx } = useDraggableClasses(null);
  const ref = (0, import_react20.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_draggable.default, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material15.Paper, __spreadProps(__spreadValues({}, props), { ref, className: cx(props.className, css.draggable) })) });
};
var useClasses20 = makeClasses((props) => ({
  modal: {
    "& .MuiDialog-paper": {
      position: "relative",
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      height: props.height,
      width: props.width,
      background: colors.background,
      overflow: "hidden"
    }
  }
}));
var useDraggableClasses = makeClasses({
  draggable: {
    cursor: "grab",
    "& .MuiDialogContent-root": {
      cursor: "initial"
    }
  }
});

// trabecula/components/modals/modal/content.tsx
var import_material16 = require("@mui/material");
var import_jsx_runtime35 = require("react/jsx-runtime");
var Content = (_a) => {
  var _b = _a, {
    children,
    className,
    dividers = true,
    overflow = "auto",
    padding,
    position = "relative"
  } = _b, viewProps = __objRest(_b, [
    "children",
    "className",
    "dividers",
    "overflow",
    "padding",
    "position"
  ]);
  const { css } = useClasses21(null);
  padding = __spreadValues({ all: `${dividers ? "0.5rem" : "0.2rem"} 1rem` }, padding);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_material16.DialogContent, { dividers, className: css.content, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    View,
    __spreadProps(__spreadValues({
      column: true,
      flex: 1,
      spacing: "0.5rem",
      width: "100%",
      height: "100%",
      className,
      overflow,
      padding,
      position
    }, viewProps), {
      children
    })
  ) });
};
var useClasses21 = makeClasses({
  content: {
    display: "flex",
    padding: 0
  }
});

// trabecula/components/modals/modal/footer.tsx
var import_material17 = require("@mui/material");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Footer = (_a) => {
  var _b = _a, { children, uniformWidth = "10rem" } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_material17.DialogActions, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    UniformList,
    __spreadProps(__spreadValues({
      row: true,
      justify: "center",
      spacing: "0.5rem",
      width: "100%",
      uniformWidth
    }, props), {
      children
    })
  ) });
};

// trabecula/components/modals/modal/header.tsx
var import_material18 = require("@mui/material");
var import_jsx_runtime37 = require("react/jsx-runtime");
var Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode
}) => {
  const { css, cx } = useClasses22({ justify });
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material18.DialogTitle, { className: cx(css.root, className), children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(HeaderContent, { leftNode, rightNode, children }) });
};
var useClasses22 = makeClasses((props) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justify,
    alignItems: "center",
    padding: "0.5rem 1rem",
    textAlign: "center"
  }
}));

// trabecula/components/modals/modal/index.ts
var Modal = {
  Container,
  Content,
  Footer,
  Header
};

// trabecula/components/progress/bar.tsx
var import_material19 = require("@mui/material");
var import_color6 = __toESM(require("color"));
var import_jsx_runtime38 = require("react/jsx-runtime");
var ProgressBar = Comp((props) => {
  var _a, _b, _c, _d, _e;
  const minWidth = (props == null ? void 0 : props.minWidth) || "2em";
  const { css } = useClasses23(null);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(View, __spreadProps(__spreadValues({ row: true, flex: 1, align: "center", spacing: "1rem" }, props.viewProps), { children: [
    props.withText ? /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(View, { row: true, spacing: "0.5rem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Text, { minWidth, textAlign: "center", children: props.numerator > -1 ? (_b = (_a = props.numeratorFormatter) == null ? void 0 : _a.call(props, props.numerator)) != null ? _b : props.numerator : "--" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Text, { children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Text, { minWidth, textAlign: "center", color: colors.custom.lightGrey, children: props.denominator > -1 ? (_d = (_c = props.denominatorFormatter) == null ? void 0 : _c.call(props, props.denominator)) != null ? _d : props.denominator : "--" })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      import_material19.LinearProgress,
      {
        "aria-label": props["aria-label"],
        "aria-labelledby": props["aria-labelledby"],
        variant: (_e = props.variant) != null ? _e : "determinate",
        value: Math.min(
          100,
          Math.max(0, (props.numerator || 0) / (props.denominator || 1) * 100)
        ),
        className: css.progressBar
      }
    )
  ] }));
});
var useClasses23 = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: (0, import_color6.default)(colors.custom.blue).fade(0.5).string(),
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue
    }
  }
});

// trabecula/components/progress/circle.tsx
var import_material20 = require("@mui/material");
var import_color7 = __toESM(require("color"));
var import_jsx_runtime39 = require("react/jsx-runtime");
var ProgressCircle = Comp((props) => {
  var _a;
  const color = props.color || colors.custom.white;
  const { css } = useClasses24({
    bgColor: props.variant === "indeterminate" ? void 0 : props.bgColor || (0, import_color7.default)(color).fade(0.5).string(),
    color
  });
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(View, { column: true, position: "relative", justify: "center", align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(View, { column: true, position: "absolute", children: props.children }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      import_material20.CircularProgress,
      {
        color: "inherit",
        value: props.percent || 0,
        variant: (_a = props.variant) != null ? _a : "determinate",
        size: props.size,
        className: css.circle
      }
    ),
    props.variant !== "indeterminate" && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(View, { column: true, position: "absolute", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      import_material20.CircularProgress,
      {
        color: "inherit",
        value: 100,
        variant: "determinate",
        size: props.size,
        className: css.bgCircle
      }
    ) })
  ] });
});
var useClasses24 = makeClasses((props) => ({
  bgCircle: {
    zIndex: 1,
    "& circle": { color: props.bgColor }
  },
  circle: {
    zIndex: 10,
    "& circle": { color: props.color }
  }
}));

// trabecula/components/table/data-grid.tsx
var import_react21 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");

// trabecula/components/table/data-grid.utils.ts
var valueCollator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
var dataGridCellClasses = {
  cell: {
    "& > *": {
      maxWidth: "100%",
      minWidth: "0 !important"
    }
  },
  noWrapCell: {
    "& .MuiTypography-root": {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%"
    }
  }
};

// trabecula/components/table/data-grid-header.tsx
var import_react22 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var useClasses25 = makeClasses({
  cell: dataGridCellClasses.cell,
  resizeHandle: {
    bottom: 0,
    right: 0,
    top: 0,
    width: "0.4rem",
    "&:hover": {
      background: colors.custom.blue
    }
  },
  noWrapCell: dataGridCellClasses.noWrapCell
});

// trabecula/components/table/data-grid-row.tsx
var import_react23 = __toESM(require("react"));
var import_material21 = require("@mui/material");
var import_jsx_runtime42 = require("react/jsx-runtime");
var useClasses26 = makeClasses({
  cell: dataGridCellClasses.cell,
  expansion: {
    margin: 0,
    padding: 0
  },
  noWrapCell: __spreadValues({
    "& .MuiButton-root": {
      maxWidth: "100%",
      minWidth: "0 !important",
      overflow: "hidden"
    },
    "& .MuiButton-root > *": {
      maxWidth: "100%",
      minWidth: "0 !important"
    }
  }, dataGridCellClasses.noWrapCell)
});

// trabecula/components/table/pagination.tsx
var import_react24 = require("react");
var import_material22 = require("@mui/material");
var import_jsx_runtime43 = require("react/jsx-runtime");
var Pagination = Comp(
  (_a) => {
    var _b = _a, {
      className,
      count,
      inline = false,
      isLoading,
      onChange,
      onFullLoad,
      viewProps = {}
    } = _b, props = __objRest(_b, [
      "className",
      "count",
      "inline",
      "isLoading",
      "onChange",
      "onFullLoad",
      "viewProps"
    ]);
    const { css, cx } = useClasses27(null);
    const [isJumpModalOpen, setIsJumpModalOpen] = (0, import_react24.useState)(false);
    const [jumpPage, setJumpPage] = (0, import_react24.useState)(null);
    const hasError = !Number.isInteger(jumpPage) || jumpPage < 1 || jumpPage > count;
    const handleChange = (_, page) => onChange(page);
    const handleJump = () => {
      if (!hasError) {
        setIsJumpModalOpen(false);
        onChange(jumpPage);
      }
    };
    const handleJumpModalOpen = () => {
      var _a2;
      setJumpPage((_a2 = props.page) != null ? _a2 : null);
      setIsJumpModalOpen(true);
    };
    const handleLastPageClick = (event, item) => {
      var _a2;
      if (onFullLoad) {
        event.preventDefault();
        onFullLoad();
      } else (_a2 = item.onClick) == null ? void 0 : _a2.call(item, event);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      View,
      __spreadProps(__spreadValues({}, viewProps), {
        className: cx(css.root, viewProps == null ? void 0 : viewProps.className),
        flex: inline ? "0 0 auto" : viewProps.flex,
        position: inline ? "relative" : viewProps.position,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(View, { position: "relative", overflow: "hidden", children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(LoadingOverlay, { isLoading }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_material22.Pagination,
              __spreadValues({
                onChange: handleChange,
                showFirstButton: true,
                showLastButton: true,
                siblingCount: 4,
                boundaryCount: 2,
                count,
                className: cx(css.pagination, className),
                renderItem: (item) => {
                  const isEllipsis = ["end-ellipsis", "start-ellipsis"].includes(item.type);
                  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    import_material22.PaginationItem,
                    __spreadProps(__spreadValues({}, item), {
                      page: isEllipsis ? "..." : item.page,
                      type: isEllipsis ? "page" : item.type,
                      disabled: isEllipsis ? false : item.disabled,
                      onClick: isEllipsis ? handleJumpModalOpen : item.type === "last" ? (e) => handleLastPageClick(e, item) : item.onClick
                    })
                  );
                }
              }, props)
            )
          ] }),
          isJumpModalOpen && /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Modal.Container, { onClose: () => setIsJumpModalOpen(false), width: "24rem", children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Text, { preset: "title", children: "Jump to Page" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Modal.Content, { row: true, dividers: false, justify: "center", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              NumInput,
              {
                placeholder: "Page",
                value: jumpPage,
                setValue: setJumpPage,
                minValue: 1,
                maxValue: count,
                error: hasError,
                helperText: `Max: ${count}`,
                autoFocus: true,
                textAlign: "center",
                width: "6rem",
                dense: true
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Modal.Footer, { uniformWidth: "7rem", children: [
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                Button,
                {
                  text: "Cancel",
                  icon: "Close",
                  onClick: () => setIsJumpModalOpen(false),
                  color: colors.foregroundCard
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                Button,
                {
                  text: "Jump",
                  icon: "Send",
                  onClick: handleJump,
                  disabled: hasError,
                  color: colors.custom.blue
                }
              )
            ] })
          ] })
        ]
      })
    );
  }
);
var useClasses27 = makeClasses({
  pagination: {
    borderRadius: 0,
    borderTop: "0.2rem solid #1b58a7",
    margin: 0,
    padding: "0.2rem 0.5rem 0.2rem",
    width: "100%",
    backgroundColor: colors.background,
    "& .MuiPagination-ul": { flexWrap: "nowrap" },
    "& > ul": { justifyContent: "center" },
    "& li button": { borderRadius: "0.2rem" }
  },
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 100
  }
});

// trabecula/components/table/table.tsx
var import_react25 = require("react");
var import_material23 = require("@mui/material");
var import_jsx_runtime44 = require("react/jsx-runtime");
var MUI_TABLE_ROW_HEIGHT = 33;
var useClasses28 = makeClasses((props) => {
  var _a;
  return {
    emptyRow: { height: MUI_TABLE_ROW_HEIGHT * ((_a = props == null ? void 0 : props.emptyRows) != null ? _a : 0) },
    pagination: {
      borderBottom: "none",
      padding: 0
    },
    tableHeader: {
      backgroundColor: colors.custom.blue
    },
    tableHeaderCell: {
      color: colors.custom.white,
      fontWeight: 400,
      fontSize: "1em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    tableCell: {
      maxWidth: "10em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    tableRowAlt: {
      "&:nth-of-type(even) > td": { backgroundColor: colors.custom.grey },
      "&:nth-of-type(odd) > td": { backgroundColor: colors.foreground }
    },
    wrapped: {
      display: "-webkit-inline-box",
      overflow: "hidden",
      whiteSpace: "normal",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2
    }
  };
});

// trabecula/components/text/centered-text.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
var CenteredText = (_a) => {
  var _b = _a, {
    color = colors.custom.lightGrey,
    text,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "color",
    "text",
    "viewProps"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(View, __spreadProps(__spreadValues({ row: true, justify: "center", align: "center", flex: 1 }, viewProps), { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Text, __spreadProps(__spreadValues({}, props), { color, children: text })) }));
};

// trabecula/components/text/date-detail.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");

// trabecula/components/text/detail.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");

// trabecula/components/text/link.tsx
var import_material24 = require("@mui/material");
var import_jsx_runtime48 = require("react/jsx-runtime");
var useClasses29 = makeClasses((props) => ({
  link: {
    color: props.color,
    fontWeight: props.bold ? 500 : 400
  }
}));

// trabecula/components/text/text.tsx
var import_material25 = require("@mui/material");
var import_jsx_runtime49 = require("react/jsx-runtime");
var PRESETS = {
  default: {
    fontSize: "1em",
    fontWeight: 500,
    overflow: "hidden"
  },
  "detail-label": {
    color: colors.custom.lightBlue,
    fontWeight: 500,
    whiteSpace: "nowrap"
  },
  "label-glow": {
    color: colors.custom.white,
    fontWeight: 400,
    fontSize: "0.8em",
    textAlign: "center",
    textShadow: `0 0 10px ${colors.custom.blue}`,
    overflow: "visible"
  },
  "sub-text": {
    color: colors.custom.grey,
    fontWeight: 400,
    fontSize: "0.7em",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  title: {
    color: colors.custom.white,
    fontSize: "1.1em",
    fontWeight: 600,
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
};
var Text = (_a) => {
  var _b = _a, {
    bold = false,
    children,
    className,
    color,
    component = "span",
    fontFamily = "Roboto",
    fontSize,
    fontWeight,
    italic = false,
    lineHeight,
    opacity,
    overflow,
    overflowWrap,
    preset = "default",
    textOverflow,
    tooltip,
    tooltipProps,
    whiteSpace = "nowrap",
    wordBreak
  } = _b, props = __objRest(_b, [
    "bold",
    "children",
    "className",
    "color",
    "component",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "italic",
    "lineHeight",
    "opacity",
    "overflow",
    "overflowWrap",
    "preset",
    "textOverflow",
    "tooltip",
    "tooltipProps",
    "whiteSpace",
    "wordBreak"
  ]);
  const { css, cx } = useClasses30({
    bold,
    color,
    fontSize,
    fontWeight,
    italic,
    lineHeight,
    opacity,
    overflow,
    overflowWrap,
    preset,
    textOverflow,
    whiteSpace,
    wordBreak
  });
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    import_material25.Typography,
    __spreadProps(__spreadValues({}, props), {
      component,
      fontFamily,
      className: cx(css.root, className),
      children
    })
  ) });
};
Text.Inline = (props) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Text, __spreadValues({ display: "inline" }, props));
var useClasses30 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const preset = PRESETS[props.preset];
  return {
    root: __spreadProps(__spreadValues({}, preset), {
      color: (_a = props.color) != null ? _a : preset == null ? void 0 : preset.color,
      fontSize: (_b = props.fontSize) != null ? _b : preset == null ? void 0 : preset.fontSize,
      fontWeight: props.bold ? 600 : (_c = props.fontWeight) != null ? _c : preset == null ? void 0 : preset.fontWeight,
      fontStyle: props.italic ? "italic" : void 0,
      lineHeight: (_d = props.lineHeight) != null ? _d : 1.2,
      opacity: props.opacity,
      overflow: (_e = props.overflow) != null ? _e : preset == null ? void 0 : preset.overflow,
      overflowWrap: props.overflowWrap,
      textOverflow: (_f = props.textOverflow) != null ? _f : "ellipsis",
      whiteSpace: (_g = props.whiteSpace) != null ? _g : preset == null ? void 0 : preset.whiteSpace,
      wordBreak: props.wordBreak
    })
  };
});

// trabecula/components/text/truncated-text.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var getTextTruncation = (text, maxLength, wordBoundaryRatio = 0.8) => {
  if (text.length <= maxLength) {
    return {
      isTruncated: false,
      preview: text,
      remainder: "",
      truncationIndex: text.length
    };
  }
  const truncatedText = text.substring(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");
  const truncationIndex = lastSpaceIndex > maxLength * wordBoundaryRatio ? lastSpaceIndex : maxLength;
  return {
    isTruncated: true,
    preview: text.substring(0, truncationIndex),
    remainder: text.substring(truncationIndex).trim(),
    truncationIndex
  };
};
var TruncatedText = (_a) => {
  var _b = _a, {
    className,
    display,
    ellipsis = "...",
    expanded = false,
    lineClamp = 1,
    maxLength,
    overflow,
    overflowWrap,
    sx,
    text,
    textOverflow,
    wordBoundaryRatio,
    wordBreak
  } = _b, textProps = __objRest(_b, [
    "className",
    "display",
    "ellipsis",
    "expanded",
    "lineClamp",
    "maxLength",
    "overflow",
    "overflowWrap",
    "sx",
    "text",
    "textOverflow",
    "wordBoundaryRatio",
    "wordBreak"
  ]);
  const { css, cx } = useClasses31({ lineClamp });
  const { isTruncated, preview } = getTextTruncation(text, maxLength, wordBoundaryRatio);
  const shouldClamp = lineClamp > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    Text,
    __spreadProps(__spreadValues({
      className: cx(!sx && css.text, className),
      display: display != null ? display : shouldClamp ? "-webkit-box" : void 0,
      overflow: overflow != null ? overflow : shouldClamp ? "hidden" : void 0,
      overflowWrap: overflowWrap != null ? overflowWrap : "break-word",
      textOverflow: textOverflow != null ? textOverflow : shouldClamp ? "ellipsis" : void 0,
      wordBreak: wordBreak != null ? wordBreak : "break-word",
      sx: sx && shouldClamp ? __spreadValues({ WebkitBoxOrient: "vertical", WebkitLineClamp: lineClamp }, sx) : sx
    }, textProps), {
      children: [
        preview,
        !expanded && isTruncated ? ellipsis : null
      ]
    })
  );
};
TruncatedText.Remainder = (_a) => {
  var _b = _a, {
    maxLength,
    text,
    wordBoundaryRatio
  } = _b, textProps = __objRest(_b, [
    "maxLength",
    "text",
    "wordBoundaryRatio"
  ]);
  const { isTruncated, remainder } = getTextTruncation(text, maxLength, wordBoundaryRatio);
  if (!isTruncated) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Text, __spreadProps(__spreadValues({}, textProps), { children: remainder }));
};
var useClasses31 = makeClasses((props) => ({
  text: {
    WebkitBoxOrient: props.lineClamp > 0 ? "vertical" : void 0,
    WebkitLineClamp: props.lineClamp > 0 ? props.lineClamp : void 0
  }
}));

// trabecula/components/toggles/accordion.tsx
var import_react26 = require("react");
var import_material26 = require("@mui/material");
var import_jsx_runtime51 = require("react/jsx-runtime");
var shouldShowHeaderBorder = (props) => {
  if (!props.headerBorderColor) return false;
  else if (props.headerBorderMode === "always") return true;
  else if (props.headerBorderMode === "expanded") return props.contentExpanded;
  else return props.showExpandToggle ? props.showBorder : true;
};
var useClasses32 = makeClasses((props) => {
  var _a;
  return {
    accordion: {
      margin: 0,
      padding: 0,
      width: (_a = props.width) != null ? _a : props.fullWidth ? "100%" : "auto",
      background: "transparent",
      border: props.borderColor && props.showBorder ? `1px solid ${props.borderColor}` : void 0,
      borderRadius: props.borderColor && props.showBorder ? "0.3rem" : void 0,
      boxShadow: "none",
      overflow: props.borderColor && props.showBorder ? "hidden" : void 0,
      "& button": {
        boxShadow: "none"
      },
      "&:before": {
        display: "none"
      }
    },
    button: {
      justifyContent: "space-between",
      borderBottomLeftRadius: props.contentExpanded ? 0 : void 0,
      borderBottomRightRadius: props.contentExpanded ? 0 : void 0,
      padding: props.dense ? "0.2rem 0.6rem" : "0.5rem 1rem",
      fontSize: "1em",
      textTransform: "capitalize"
    },
    content: {
      padding: props.contentPadding,
      position: props.isLoading ? "relative" : void 0
    },
    header: {
      background: props.headerBgColor,
      borderBottom: shouldShowHeaderBorder(props) ? `1px solid ${props.headerBorderColor}` : void 0,
      padding: props.headerPadding
    }
  };
});

// trabecula/components/toggles/accordion-group.tsx
var import_react27 = require("react");
var import_jsx_runtime52 = require("react/jsx-runtime");
var AccordionGroupContext = (0, import_react27.createContext)(null);

// trabecula/components/toggles/checkbox.tsx
var import_material27 = require("@mui/material");
var import_color8 = __toESM(require("color"));
var import_jsx_runtime53 = require("react/jsx-runtime");
var useClasses33 = makeClasses((props) => ({
  checkbox: __spreadProps(__spreadValues({}, makePadding(props.padding)), {
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1
  }),
  label: __spreadProps(__spreadValues({
    display: "flex",
    flex: props.flex,
    justifyContent: props.center ? "center" : void 0,
    borderRadius: "0.5rem"
  }, makeMargins(props.margins)), {
    width: props.width || "auto",
    whiteSpace: props.whiteSpace,
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": props.noHover ? {} : { backgroundColor: (0, import_color8.default)(props.color).fade(0.8).string() },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4rem",
      fontFamily: "Roboto"
    }
  })
}));

// trabecula/components/toggles/radio.tsx
var import_material28 = require("@mui/material");
var import_color9 = __toESM(require("color"));
var import_jsx_runtime54 = require("react/jsx-runtime");
var useClasses34 = makeClasses((props) => ({
  label: __spreadProps(__spreadValues({
    display: "flex",
    flex: props.flex,
    justifyContent: props.center ? "center" : void 0,
    alignItems: "center",
    borderRadius: "0.5rem",
    border: `1px solid transparent`
  }, makeMargins(props.margins)), {
    width: props.width || "auto",
    whiteSpace: props.whiteSpace,
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": props.noHover ? {} : {
      border: `1px solid ${(0, import_color9.default)(props.color).fade(0.8).string()}`,
      backgroundColor: (0, import_color9.default)(props.color).fade(0.9).string()
    }
  }),
  radio: __spreadProps(__spreadValues({}, makePadding(props.padding)), {
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1
  })
}));

// trabecula/components/tooltip/tooltip.tsx
var import_material29 = require("@mui/material");
var import_color10 = __toESM(require("color"));
var import_jsx_runtime55 = require("react/jsx-runtime");
var Tooltip = (_a) => {
  var _b = _a, {
    arrow = true,
    bgColor = colors.background,
    borderColor = colors.custom.blue,
    children,
    color,
    flexShrink = 0,
    fontSize = "0.95em",
    maxWidth = "25rem",
    minWidth,
    padding = "0.4rem 0.8rem",
    placement = "bottom-start",
    title,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "arrow",
    "bgColor",
    "borderColor",
    "children",
    "color",
    "flexShrink",
    "fontSize",
    "maxWidth",
    "minWidth",
    "padding",
    "placement",
    "title",
    "viewProps"
  ]);
  const { css } = useClasses35({
    bgColor,
    borderColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding
  });
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_material29.Tooltip,
    __spreadProps(__spreadValues({}, props), {
      arrow,
      placement,
      title,
      classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip },
      children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
        View,
        __spreadProps(__spreadValues({}, viewProps), {
          onMouseEnter: props.onMouseEnter,
          onMouseLeave: props.onMouseLeave,
          className: css.container,
          children
        })
      )
    })
  );
};
var useClasses35 = makeClasses((props) => ({
  arrow: {
    color: props.borderColor
  },
  container: {
    display: "flex",
    flexShrink: props.flexShrink,
    overflow: "hidden",
    textOverflow: "ellipsis",
    userSelect: "auto"
  },
  tooltip: {
    border: `3px solid ${props.borderColor}`,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    padding: props.padding,
    backgroundColor: (0, import_color10.default)(props.bgColor).fade(0.03).string(),
    color: props.color,
    fontSize: props.fontSize,
    whiteSpace: "pre-wrap",
    width: "max-content",
    boxShadow: "rgb(0 0 0 / 97%) 0px 0px 2px 0px"
  },
  popper: {
    zIndex: 1e6
  }
}));

// trabecula/components/tooltip/tooltip-wrapper.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
var TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
  const wrap = (c) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Tooltip, __spreadProps(__spreadValues({ title: tooltip }, tooltipProps), { children: c }));
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    ConditionalWrap,
    {
      wrap,
      condition: tooltip !== void 0 && !(typeof tooltip === "string" && !(tooltip == null ? void 0 : tooltip.length)),
      children
    }
  );
};

// trabecula/components/wrappers/card.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
var Card = Comp(
  (_a, ref) => {
    var _b = _a, {
      align,
      bgColor = colors.foreground,
      borderRadiuses = {},
      borders,
      boxShadow,
      children,
      className,
      column = true,
      cursor,
      display = "flex",
      elevated = false,
      flex,
      header,
      headerProps,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      onScroll,
      opacity,
      overflow,
      padding = {},
      position,
      row = false,
      spacing,
      width,
      wrap
    } = _b, viewProps = __objRest(_b, [
      "align",
      "bgColor",
      "borderRadiuses",
      "borders",
      "boxShadow",
      "children",
      "className",
      "column",
      "cursor",
      "display",
      "elevated",
      "flex",
      "header",
      "headerProps",
      "height",
      "justify",
      "margins",
      "maxHeight",
      "maxWidth",
      "minHeight",
      "minWidth",
      "onScroll",
      "opacity",
      "overflow",
      "padding",
      "position",
      "row",
      "spacing",
      "width",
      "wrap"
    ]);
    const layoutProps = {
      align,
      borders,
      cursor,
      flex,
      justify,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      position,
      wrap
    };
    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    headerProps = deepMerge({ width: "100%" }, headerProps != null ? headerProps : {});
    padding = deepMerge({ all: "0.5rem" }, padding);
    const { css, cx } = useClasses36({ boxShadow, elevated });
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      HeaderWrapper,
      __spreadProps(__spreadValues(__spreadValues({}, layoutProps), viewProps), {
        borderRadiuses,
        className,
        display,
        header,
        headerProps,
        height,
        margins,
        onScroll,
        overflow,
        width,
        children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          View,
          __spreadProps(__spreadValues({}, layoutProps), {
            className: cx(css.root, className),
            position: position != null ? position : "relative",
            column: column && !row,
            flex: flex != null ? flex : 1,
            bgColor,
            borderRadiuses,
            height,
            onScroll,
            overflow,
            padding,
            ref,
            row,
            spacing,
            width: header ? "100%" : width,
            "aria-label": "card",
            children
          })
        )
      })
    );
  }
);
var useClasses36 = makeClasses((props) => {
  var _a;
  return {
    root: {
      boxShadow: (_a = props.boxShadow) != null ? _a : props.elevated ? "0.1rem 0.1rem 0.3rem rgb(0 0 0 / 50%)" : void 0
    }
  };
});

// trabecula/components/wrappers/card-base/chip.tsx
var import_jsx_runtime58 = require("react/jsx-runtime");
var useClasses37 = makeClasses((props) => ({
  chip: {
    position: "absolute",
    top: props.position.includes("top") ? props.flush ? 0 : "0.3rem" : void 0,
    right: props.position.includes("right") ? props.flush ? 0 : "0.3rem" : void 0,
    bottom: props.position.includes("bottom") ? props.hasFooter ? "2rem" : props.flush ? 0 : "0.3rem" : void 0,
    left: props.position.includes("left") ? props.flush ? 0 : "0.3rem" : void 0,
    cursor: "pointer",
    opacity: props.opacity,
    "&:hover": { opacity: Math.min(1, props.opacity + 0.3) }
  }
}));

// trabecula/components/wrappers/card-base/container.tsx
var import_material30 = require("@mui/material");
var import_color11 = __toESM(require("color"));
var import_jsx_runtime59 = require("react/jsx-runtime");
var useClasses38 = makeClasses((props, theme) => {
  var _a;
  return {
    container: __spreadProps(__spreadValues({
      position: "relative",
      display: props.display,
      border: `2px solid ${colors.background}`,
      borderRadius: 4,
      padding: "0.25rem",
      height: (_a = props.height) != null ? _a : "20rem",
      [theme.breakpoints.down("xl")]: props.height ? void 0 : { height: "18rem" },
      [theme.breakpoints.down("lg")]: props.height ? void 0 : { height: "16rem" },
      [theme.breakpoints.down("md")]: props.height ? void 0 : { height: "14rem" },
      [theme.breakpoints.down("sm")]: props.height ? void 0 : { height: "12rem" }
    }, props.width ? { width: props.width } : {}), {
      background: !props.disabled && props.selected ? `linear-gradient(to bottom right, ${(0, import_color11.default)(props.selectedColor).lighten(0.4).string()}, ${props.selectedColor} 60%)` : "transparent",
      overflow: "hidden",
      cursor: "pointer",
      userSelect: "none"
    }),
    paper: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      height: "100%",
      backgroundColor: colors.background,
      userSelect: "none"
    }
  };
});

// trabecula/components/wrappers/card-base/footer.tsx
var import_jsx_runtime60 = require("react/jsx-runtime");
var useClasses39 = makeClasses({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit",
    padding: 0,
    height: "3rem",
    background: "linear-gradient(to bottom, transparent, black)"
  }
});

// trabecula/components/wrappers/card-base/footer-text.tsx
var import_jsx_runtime61 = require("react/jsx-runtime");

// trabecula/components/wrappers/card-base/image.tsx
var import_react28 = require("react");
var import_jsx_runtime62 = require("react/jsx-runtime");
var useClasses40 = makeClasses((props) => {
  var _a;
  const radii = __spreadValues(__spreadValues({}, ["all", "top"].includes(props.rounded) && {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }), ["all", "bottom"].includes(props.rounded) && {
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit"
  });
  return {
    image: __spreadProps(__spreadValues({}, radii), {
      height: (_a = props.height) != null ? _a : "inherit",
      width: "100%",
      userSelect: "none",
      transition: "all 100ms ease",
      objectFit: props.fit,
      objectPosition: props.imagePos
    }),
    imageContainer: __spreadProps(__spreadValues({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: "inherit",
      height: "100%"
    }, radii), {
      backgroundColor: "inherit",
      overflow: "hidden"
    })
  };
});

// trabecula/components/wrappers/card-base/tooltip.tsx
var import_jsx_runtime63 = require("react/jsx-runtime");

// trabecula/components/wrappers/card-grid.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
var CardGrid = Comp(
  (_a, ref) => {
    var _b = _a, {
      cards,
      cardsProps,
      children,
      className,
      flexFlow = "row wrap",
      maxCards = 6,
      noResultsText = "No results found",
      padding = { all: "0.3rem 0.3rem 7rem" },
      position = "relative"
    } = _b, props = __objRest(_b, [
      "cards",
      "cardsProps",
      "children",
      "className",
      "flexFlow",
      "maxCards",
      "noResultsText",
      "padding",
      "position"
    ]);
    const { css, cx } = useClasses41({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.root, className), children: [
      cards.length ? /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
        View,
        __spreadProps(__spreadValues({}, cardsProps), {
          padding,
          ref,
          className: cx(css.cards, cardsProps == null ? void 0 : cardsProps.className),
          children: cards
        })
      ) : /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(View, { column: true, flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(CenteredText, { text: noResultsText }) }),
      children
    ] }));
  }
);
var useClasses41 = makeClasses((props, theme) => ({
  cards: __spreadProps(__spreadValues({
    display: "flex",
    flexFlow: props.flexFlow,
    flex: "initial",
    overflowY: "auto"
  }, !props.hasCards ? { height: "-webkit-fill-available" } : {}), {
    "& > *": {
      overflow: "hidden",
      flexBasis: `calc(100% / ${props.maxCards})`,
      [theme.breakpoints.down("xl")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 1)})`
      },
      [theme.breakpoints.down("lg")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 2)})`
      },
      [theme.breakpoints.down("md")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 3)})`
      },
      [theme.breakpoints.down("sm")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 4)})`
      }
    }
  }),
  root: {
    position: props.position,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflowY: "auto"
  }
}));

// trabecula/components/wrappers/chip.tsx
var import_material31 = require("@mui/material");
var import_jsx_runtime65 = require("react/jsx-runtime");
var Chip2 = Comp(
  (_a) => {
    var _b = _a, {
      bgColor,
      className,
      color,
      fontSize,
      fontWeight,
      height,
      icon,
      iconColor,
      iconProps,
      label,
      padding,
      radiuses,
      width
    } = _b, props = __objRest(_b, [
      "bgColor",
      "className",
      "color",
      "fontSize",
      "fontWeight",
      "height",
      "icon",
      "iconColor",
      "iconProps",
      "label",
      "padding",
      "radiuses",
      "width"
    ]);
    const { css, cx } = useClasses42({
      bgColor,
      color,
      fontSize,
      fontWeight,
      height,
      padding,
      radiuses,
      width
    });
    return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
      import_material31.Chip,
      __spreadProps(__spreadValues({}, props), {
        label,
        icon: icon ? /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          Icon,
          __spreadValues({
            name: icon,
            color: iconColor,
            size: "inherit",
            margins: { left: "0.5rem !important" }
          }, iconProps)
        ) : void 0,
        className: cx(css.chip, className)
      })
    );
  }
);
var useClasses42 = makeClasses((props) => ({
  chip: __spreadProps(__spreadValues({}, makeBorderRadiuses(props.radiuses)), {
    height: props.height,
    width: props.width,
    backgroundColor: props.bgColor,
    color: props.color,
    transition: "all 200ms ease-in-out",
    "& > .MuiChip-label": __spreadProps(__spreadValues({}, makePadding(props.padding)), {
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    })
  })
}));

// trabecula/components/wrappers/conditional.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
var ConditionalWrap = ({
  children,
  condition,
  wrap
}) => condition ? wrap(children) : /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_jsx_runtime66.Fragment, { children });

// trabecula/components/wrappers/context-menu.tsx
var import_react29 = require("react");
var import_material32 = require("@mui/material");
var import_color12 = __toESM(require("color"));
var import_jsx_runtime67 = require("react/jsx-runtime");
var useClasses43 = makeClasses({
  contextMenu: {
    background: (0, import_color12.default)(colors.custom.black).fade(0.03).string()
  },
  contextMenuInner: {
    padding: 0
  },
  item: {
    padding: "0.35rem 1rem 0.35rem 0.7rem"
  }
});

// trabecula/components/wrappers/disabled-overlay.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
var useClasses44 = makeClasses((props) => ({
  disabledOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    color: colors.custom.blue,
    backgroundColor: "rgb(255 255 255 / 0.5)",
    zIndex: props == null ? void 0 : props.zIndex,
    opacity: (props == null ? void 0 : props.isDisabled) ? 1 : 0,
    transition: "all 225ms ease-in-out",
    pointerEvents: (props == null ? void 0 : props.isDisabled) ? "auto" : "none"
  }
}));

// trabecula/components/wrappers/divider.tsx
var import_material33 = require("@mui/material");
var import_jsx_runtime69 = require("react/jsx-runtime");
var Divider = Comp(
  (_a, ref) => {
    var _b = _a, {
      alignSelf,
      borderWidth,
      className,
      color,
      flexItem = true,
      height,
      margins = {},
      orientation = "horizontal"
    } = _b, props = __objRest(_b, [
      "alignSelf",
      "borderWidth",
      "className",
      "color",
      "flexItem",
      "height",
      "margins",
      "orientation"
    ]);
    const { css, cx } = useClasses45({ alignSelf, borderWidth, color, height, margins, orientation });
    return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      import_material33.Divider,
      __spreadProps(__spreadValues({}, props), {
        ref,
        flexItem,
        orientation,
        className: cx(css.divider, className)
      })
    );
  }
);
var useClasses45 = makeClasses((props) => ({
  divider: __spreadValues({
    alignSelf: props.alignSelf,
    borderColor: props.color,
    borderBottomWidth: props.orientation === "horizontal" ? props.borderWidth : void 0,
    borderRightWidth: props.orientation === "vertical" ? props.borderWidth : void 0,
    height: props.height
  }, makeMargins(props.margins))
}));

// trabecula/components/wrappers/drop-overlay.tsx
var import_color13 = __toESM(require("color"));
var import_jsx_runtime70 = require("react/jsx-runtime");
var useClasses46 = makeClasses({
  overlay: {
    backgroundColor: (0, import_color13.default)(colors.custom.blue).fade(0.5).string(),
    border: `15px dashed ${colors.custom.blue}`,
    bottom: 0,
    left: 0,
    opacity: 0.3,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 5e3
    // necessary for MUI z-index values
  }
});

// trabecula/components/wrappers/header.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
var DEFAULT_HEADER_PROPS = {
  bgColor: colors.custom.black,
  borderRadiuses: { top: 6 },
  fontSize: "0.8em",
  justify: "center",
  padding: { all: "0.2rem 0.3rem" },
  row: true
};
var HeaderWrapper = Comp((rawProps, ref) => {
  const _a = rawProps, {
    align,
    bgColor,
    borderRadiuses,
    borders,
    children,
    className,
    column,
    cursor,
    display,
    flex,
    header,
    headerProps = {},
    height = "auto",
    justify,
    margins,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    onScroll,
    opacity,
    overflow,
    padding,
    position = "relative",
    row,
    spacing,
    textProps = {},
    width,
    wrap
  } = _a, viewProps = __objRest(_a, [
    "align",
    "bgColor",
    "borderRadiuses",
    "borders",
    "children",
    "className",
    "column",
    "cursor",
    "display",
    "flex",
    "header",
    "headerProps",
    "height",
    "justify",
    "margins",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "onScroll",
    "opacity",
    "overflow",
    "padding",
    "position",
    "row",
    "spacing",
    "textProps",
    "width",
    "wrap"
  ]);
  const layoutProps = {
    align,
    bgColor,
    borderRadiuses,
    borders,
    className,
    column,
    cursor,
    flex,
    justify,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    padding,
    wrap
  };
  const mergedHeaderProps = deepMerge(DEFAULT_HEADER_PROPS, headerProps);
  const wrapHeader = (content) => /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
    View,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, layoutProps), {
      "aria-label": "header-wrapper"
    }), viewProps), {
      ref,
      column: true,
      height,
      margins,
      onScroll,
      overflow,
      width,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(View, __spreadProps(__spreadValues({}, mergedHeaderProps), { "aria-label": "header", children: typeof header === "string" ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Text, __spreadProps(__spreadValues({ flex: 1, fontSize: mergedHeaderProps.fontSize, textAlign: "center" }, textProps), { children: header })) : header })),
        content
      ]
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ConditionalWrap, { condition: !!header, wrap: wrapHeader, children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    View,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, layoutProps), {
      "aria-label": "header-wrapper-content"
    }), header ? {} : viewProps), {
      ref: header ? void 0 : ref,
      display,
      height,
      margins: header ? void 0 : margins,
      onScroll,
      overflow: "overflow" in rawProps ? overflow : "auto",
      position,
      row,
      spacing,
      width: header ? "100%" : width,
      children
    })
  ) });
});

// trabecula/components/wrappers/header-content.tsx
var import_jsx_runtime72 = require("react/jsx-runtime");
var HeaderContent = ({ children, leftNode, rightNode }) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
  ConditionalWrap,
  {
    condition: leftNode !== void 0 || rightNode !== void 0,
    wrap: (wrappedChildren) => /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(View, { row: true, flex: 1, minWidth: 0, align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(View, { row: true, flex: "1 1 0", minWidth: 0, align: "center", justify: "flex-start", children: leftNode }),
      wrappedChildren,
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(View, { row: true, flex: "1 1 0", minWidth: 0, align: "center", justify: "flex-end", children: rightNode })
    ] }),
    children
  }
);

// trabecula/components/wrappers/loading-overlay.tsx
var import_material34 = require("@mui/material");
var import_jsx_runtime73 = require("react/jsx-runtime");
var LoadingOverlay = ({ children, isLoading, sub }) => {
  const { css } = useClasses47({ isLoading });
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(import_jsx_runtime73.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
      View,
      {
        column: true,
        align: "center",
        justify: "center",
        spacing: "1rem",
        height: "100%",
        width: "100%",
        opacity: isLoading ? 1 : 0,
        className: css.loadingOverlay,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_material34.CircularProgress, { color: "inherit" }),
          typeof sub === "string" ? /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Text, { preset: "title", fontSize: "0.9em", children: sub }) : sub
        ]
      }
    )
  ] });
};
var useClasses47 = makeClasses((props) => ({
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
    transition: "all 225ms ease-in-out",
    pointerEvents: props.isLoading ? "auto" : "none"
  }
}));

// trabecula/components/wrappers/side-scroller.tsx
var import_react30 = require("react");
var import_jsx_runtime74 = require("react/jsx-runtime");
var useClasses48 = makeClasses((props) => ({
  items: {
    display: "flex",
    flexFlow: "row nowrap",
    flex: 1,
    overflowX: "auto",
    overflowY: "hidden",
    "& > *:last-child": {
      marginRight: "1rem"
    },
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    minWidth: 0,
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  scrollButton: {
    margin: "0 0.2rem",
    width: "1rem",
    height: "1rem",
    backgroundColor: colors.custom.blue,
    "&:hover": {
      backgroundColor: colors.custom.blue
    },
    "& svg": {
      width: "0.6em",
      height: "0.6em"
    },
    "&.left": {
      display: props.isLeftButtonVisible ? "flex" : "none"
    },
    "&.right": {
      display: props.isRightButtonVisible ? "flex" : "none"
    }
  }
}));

// trabecula/components/wrappers/tab-container.tsx
var import_react31 = require("react");
var import_material35 = require("@mui/material");
var import_color14 = __toESM(require("color"));
var import_jsx_runtime75 = require("react/jsx-runtime");
var useClasses49 = makeClasses((props) => {
  var _a;
  return {
    content: {
      border: props.withBorder ? `3px solid ${props.color}` : void 0,
      borderRadius: props.withBorder ? `0 0 ${props.borderRadius} ${props.borderRadius}` : void 0,
      borderTop: "none",
      flex: 1,
      maxWidth: props.maxWidth,
      minHeight: (_a = props.minHeight) != null ? _a : 0,
      padding: "0.4rem"
    },
    header: {
      backgroundColor: props.color,
      borderRadius: props.withBorder ? `${props.borderRadius} ${props.borderRadius} 0 0` : void 0,
      flexShrink: 0
    },
    hidden: {
      display: "none"
    },
    tab: {
      "&.Mui-selected": {
        backgroundColor: props.color,
        borderBottom: "none",
        color: colors.custom.white
      },
      "&:hover": {
        backgroundColor: (0, import_color14.default)(props.color).lighten(0.3).string(),
        transition: "all 200ms ease-in-out"
      },
      "&:not(:last-child)": {
        borderRight: `2px solid ${(0, import_color14.default)(props.color).lighten(0.4).string()}`
      },
      backgroundColor: props.color,
      color: colors.custom.grey,
      height: props.tabHeight,
      minHeight: 0,
      minWidth: "7em",
      padding: "0.3rem 0.5rem",
      textTransform: "none",
      transition: "all 200ms ease-in-out",
      whiteSpace: "break-spaces"
    },
    tabList: {
      "& .MuiTabs-indicator": { display: "none" },
      backgroundColor: props.color,
      borderRadius: props.withBorder ? `${props.borderRadius} ${props.borderRadius} 0 0` : void 0,
      flex: 1,
      height: props.tabHeight,
      minHeight: 0,
      minWidth: 0
    },
    tabPanel: {
      height: "100%",
      padding: 0
    }
  };
});

// trabecula/components/wrappers/uniform-list.tsx
var import_jsx_runtime76 = require("react/jsx-runtime");
var UniformList = (_a) => {
  var _b = _a, { children, uniformWidth } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  const { css, cx } = useClasses50({ uniformWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.uniform, props == null ? void 0 : props.className), children }));
};
var useClasses50 = makeClasses((props) => ({
  uniform: {
    "& > *": {
      flexBasis: "100%",
      maxWidth: props.uniformWidth
    }
  }
}));

// trabecula/components/wrappers/view.tsx
var import_react32 = require("react");
var View = Comp(
  (_a, ref) => {
    var _b = _a, {
      align,
      bgColor,
      borderRadiuses,
      borders,
      children,
      className,
      column,
      component = "div",
      cursor,
      display,
      flex,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap
    } = _b, props = __objRest(_b, [
      "align",
      "bgColor",
      "borderRadiuses",
      "borders",
      "children",
      "className",
      "column",
      "component",
      "cursor",
      "display",
      "flex",
      "height",
      "justify",
      "margins",
      "maxHeight",
      "maxWidth",
      "minHeight",
      "minWidth",
      "opacity",
      "overflow",
      "padding",
      "position",
      "row",
      "spacing",
      "width",
      "wrap"
    ]);
    if (row) column = false;
    const { css, cx } = useClasses51({
      align,
      bgColor,
      borderRadiuses,
      borders,
      column,
      cursor,
      display,
      flex,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap
    });
    return (0, import_react32.createElement)(
      component,
      __spreadProps(__spreadValues({}, props), { className: cx(className, css.view), ref }),
      children
    );
  }
);
var useClasses51 = makeClasses((props) => {
  var _a;
  return {
    view: __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
      position: props.position,
      display: (_a = props.display) != null ? _a : props.column || props.row ? "flex" : void 0,
      flexDirection: props.column ? "column" : props.row ? "row" : void 0,
      flex: props.flex,
      flexWrap: props.wrap,
      alignItems: props.align,
      justifyContent: props.justify
    }, makeBorders(props.borders)), makeBorderRadiuses(props.borderRadiuses)), makeMargins(props.margins)), makePadding(props.padding)), {
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      minHeight: props.minHeight,
      minWidth: props.minWidth,
      height: props.height,
      width: props.width,
      backgroundColor: props.bgColor,
      opacity: props.opacity,
      overflow: props.overflow,
      cursor: props.cursor
    }), props.spacing ? {
      "& > *:not(:last-child)": {
        [props.column ? "marginBottom" : "marginRight"]: props.spacing
      }
    } : {})
  };
});

// trabecula/views/mui-provider.tsx
var import_react33 = require("react");
var import_cache = __toESM(require("@emotion/cache"));
var import_react34 = require("@emotion/react");
var import_material36 = require("@mui/material");
var import_tss_react2 = require("tss-react");
var import_jsx_runtime77 = require("react/jsx-runtime");
var PortalContainerContext = (0, import_react33.createContext)(void 0);

// trabecula/utils/client/toast.tsx
var import_jsx_runtime78 = require("react/jsx-runtime");
var toast = {
  error: import_react_toastify.toast.error,
  info: import_react_toastify.toast.info,
  success: import_react_toastify.toast.success,
  warn: import_react_toastify.toast.warn
};
var Toaster = class {
  constructor() {
    __publicField(this, "toastRef", null);
    __publicField(this, "toastTimeoutRef", null);
  }
  toast(text, options) {
    const autoClose = (options == null ? void 0 : options.autoClose) === false ? false : (options == null ? void 0 : options.autoClose) || 1e3;
    clearTimeout(this.toastTimeoutRef);
    if (autoClose) this.toastTimeoutRef = setTimeout(() => this.toastRef = null, autoClose);
    if (this.toastRef)
      import_react_toastify.toast.update(this.toastRef, { autoClose, render: text, type: (options == null ? void 0 : options.type) || "info" });
    else this.toastRef = (0, import_react_toastify.toast)(() => text, { autoClose, type: (options == null ? void 0 : options.type) || "info" });
  }
};
var ToastContainer = (props) => {
  const { css } = useClasses52(null);
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    import_react_toastify.ToastContainer,
    __spreadValues({
      autoClose: 2e3,
      className: css.toast,
      hideProgressBar: true,
      icon: ({ type }) => {
        var _a, _b;
        return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Icon, { color: colors.custom.white, name: (_b = (_a = STATUSES[type]) == null ? void 0 : _a.icon) != null ? _b : "Error" });
      },
      limit: 3,
      pauseOnFocusLoss: false,
      position: "bottom-left",
      newestOnTop: true
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
var useClasses52 = makeClasses({
  toast: {
    "& .Toastify__toast": {
      border: "none",
      color: colors.custom.white,
      "&-body": {
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.1rem",
        fontWeight: 500,
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
    },
    bottom: "3rem"
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
  useDeepEffect,
  useDeepMemo,
  useDragScroll,
  useElementResize,
  useForceUpdate,
  useLazyLoad,
  usePaginatedList,
  validateProp
});
//# sourceMappingURL=index.js.map