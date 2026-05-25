var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
var import_dayjs = __toESM(require("dayjs"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_duration = __toESM(require("dayjs/plugin/duration"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);

// trabecula/utils/common/miscellaneous.ts
var import_es_toolkit = require("es-toolkit");
var import_compat = require("es-toolkit/compat");
var handleErrors = (fn) => __async(null, null, function* () {
  try {
    return { success: true, data: yield fn() };
  } catch (err) {
    const errorStr = err instanceof Error ? err.message : String(err);
    console.error(errorStr);
    return { success: false, error: errorStr };
  }
});
var isDeepEqual = import_es_toolkit.isEqual;

// trabecula/utils/client/hooks.ts
var useDeepEffect = (cb, deps) => (0, import_react.useEffect)(cb, [
  ...deps.map((dep) => {
    try {
      return (0, import_mobx.isObservable)(dep) ? (0, import_mobx_keystone.getSnapshot)(dep) : useDeepMemo(dep);
    } catch (err) {
      return JSON.stringify(dep);
    }
  })
]);
var useDeepMemo = (value) => {
  const valueRef = (0, import_react.useRef)(value);
  const depRef = (0, import_react.useRef)(0);
  let compareValue;
  let compareValueRef;
  try {
    compareValue = (0, import_mobx.isObservable)(value) ? (0, import_mobx_keystone.getSnapshot)(value) : value;
    compareValueRef = (0, import_mobx.isObservable)(valueRef.current) ? (0, import_mobx_keystone.getSnapshot)(valueRef.current) : valueRef.current;
  } catch (err) {
    compareValue = JSON.stringify(value);
    compareValueRef = JSON.stringify(valueRef.current);
  }
  if (!isDeepEqual(compareValue, compareValueRef)) {
    valueRef.current = value;
    depRef.current += 1;
  }
  return (0, import_react.useMemo)(() => valueRef.current, [depRef.current]);
};
var useElementResize = (ref, condition) => {
  const [dimensions, setDimensions] = (0, import_react.useState)({ width: 0, height: 0 });
  const [absPosition, setAbsPosition] = (0, import_react.useState)({ top: 0, left: 0 });
  (0, import_react.useEffect)(() => {
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
  const [, setTick] = (0, import_react.useState)(0);
  const update = (0, import_react.useCallback)(() => setTick((tick) => tick + 1), []);
  return update;
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
    const updateTabTitle = () => document.title = completedCount >= totalCount ? hasError ? "\u274C Error!" : "\u2705 Done!" : `[${completedCount}/${totalCount}] Downloading`;
    const updateToast = () => toaster.toast(getToastText(), {
      autoClose: isComplete ? 3e3 : false,
      type: isComplete ? "success" : void 0
    });
    if (withTabTitle) updateTabTitle();
    if (!(items == null ? void 0 : items.length)) return onEscape();
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
var import_react2 = require("react");
var useDragScroll = ({
  listRef,
  listOuterRef,
  momentum = 0.8,
  scrollLeft,
  width
}) => {
  const dragDirection = (0, import_react2.useRef)(null);
  const initialMouseX = (0, import_react2.useRef)(null);
  const momentumId = (0, import_react2.useRef)(null);
  const scrollFinal = (0, import_react2.useRef)(0);
  const scrollStart = (0, import_react2.useRef)(0);
  const velocity = (0, import_react2.useRef)(0);
  const [isDragging, setIsDragging] = (0, import_react2.useState)(false);
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
    if (!isScrollValid) return;
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
    if (typeof boundFn !== "function") throw new Error("Bound function is not a function");
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
      if (key === "_touched") continue;
      if (touched[key]) continue;
      touched[key] = true;
    }
  });
};
var clearTouched = (model, keys) => {
  for (const k of keys) model._touched[k] = false;
};
var derefMobx = (value) => {
  const { getSnapshot: getSnapshot2, isTreeNode } = getMobx();
  if (value === null || typeof value !== "object") return value;
  if (isTreeNode(value)) return getSnapshot2(value);
  if (Array.isArray(value)) {
    const len = value.length;
    let changed2 = false;
    const out2 = new Array(len);
    for (let i = 0; i < len; i++) {
      const v = derefMobx(value[i]);
      if (v !== value[i]) changed2 = true;
      out2[i] = v;
    }
    return changed2 ? out2 : value;
  }
  let changed = false;
  const out = {};
  for (const k in value) {
    const v = derefMobx(value[k]);
    if (v !== value[k]) changed = true;
    out[k] = v;
  }
  return changed ? out : value;
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
var import_material2 = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var toast = {
  error: import_react_toastify.toast.error,
  info: import_react_toastify.toast.info,
  success: import_react_toastify.toast.success,
  warn: import_react_toastify.toast.warn
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
      import_react_toastify.toast.update(this.toastRef, { autoClose, render: text, type: (options == null ? void 0 : options.type) || "info" });
    else this.toastRef = (0, import_react_toastify.toast)(() => text, { autoClose, type: (options == null ? void 0 : options.type) || "info" });
  }
};
var ToastContainer = (props) => {
  const { css } = useClasses(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_toastify.ToastContainer,
    __spreadValues({
      autoClose: 2e3,
      className: css.toast,
      hideProgressBar: true,
      icon: ({ type }) => {
        var _a, _b;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material2.Icon, { style: { color: colors.custom.white }, children: ((_b = (_a = STATUSES[type]) == null ? void 0 : _a.icon) != null ? _b : "Error").split(/(?=[A-Z])/).join("_").toLowerCase() });
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
        fontFamily: "Avenir",
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
  useDeepEffect,
  useDeepMemo,
  useDragScroll,
  useElementResize,
  useForceUpdate,
  useLazyLoad,
  validateProp
});
//# sourceMappingURL=index.js.map