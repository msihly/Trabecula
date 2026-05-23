import {
  __async,
  __pow,
  __publicField
} from "./chunk-A7PY2W7U.mjs";

// trabecula/utils/common/arrays.ts
var arrayIntersect = (...arrays) => [...arrays].reduce((acc, cur) => acc.filter((e) => cur.includes(e)));
var bisectArrayChanges = (oldArr, newArr) => {
  if (!oldArr || !newArr) return { added: [], removed: [] };
  else
    return getArrayDiff(oldArr, newArr).reduce(
      (acc, cur) => {
        acc[newArr.includes(cur) ? "added" : "removed"].push(cur);
        return acc;
      },
      { added: [], removed: [] }
    );
};
var centeredSlice = (arr, indexToCenter, maxCount) => {
  if (!arr || indexToCenter < 0 || indexToCenter > arr.length - 1) return null;
  const count = Math.min(arr.length, maxCount != null ? maxCount : arr.length);
  const delta = Math.floor(count / 2);
  const isEven = count % 2 === 0;
  const startIndex = indexToCenter - delta;
  const left = startIndex < 0 ? [...arr.slice(startIndex), ...arr.slice(0, indexToCenter)] : arr.slice(startIndex, indexToCenter);
  const endIndex = indexToCenter + delta;
  const right = endIndex > arr.length - 1 ? [
    ...arr.slice(indexToCenter + 1, arr.length),
    ...arr.slice(0, Math.abs(arr.length - (isEven ? 0 : 1) - endIndex))
  ] : arr.slice(indexToCenter + 1, endIndex + (isEven ? 0 : 1));
  return [...left, arr[indexToCenter], ...right];
};
var chunkArray = (arr, size) => [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));
var countItems = (arr) => {
  const map = arr.reduce((acc, cur) => {
    const group = acc.find((e) => e.value === cur);
    if (!group) acc.push({ value: cur, count: 1 });
    else group.count += 1;
    return acc;
  }, []);
  return sortArray(map, "count", true, true);
};
var getArrayDiff = (a, b) => [
  ...a.filter((e) => !b.includes(e)),
  ...b.filter((e) => !a.includes(e))
];
var objectToFloat32Array = (obj) => new Float32Array(Object.values(obj));
var range = (length, start = 0) => Array(length).fill("").map((_, i) => start + i);
var rotateArrayPos = (direction, current, length) => {
  if (direction === "next") return current + 1 < length ? current + 1 : 0;
  else if (direction === "prev") return current - 1 >= 0 ? current - 1 : length - 1;
};
var sortArray = (arr, key, isDesc = true, isNumber = false) => {
  if (!(arr == null ? void 0 : arr.length)) return [];
  const sortFn = (a, b) => {
    var _a, _b;
    const first = (_a = a[key]) != null ? _a : isNumber ? 0 : "";
    const second = (_b = b[key]) != null ? _b : isNumber ? 0 : "";
    const comparison = isNumber ? second - first : String(second).localeCompare(String(first));
    return isDesc ? comparison : comparison * -1;
  };
  return [...arr].sort(sortFn);
};
var splitArray = (arr, filterFn) => arr.reduce((acc, cur) => (acc[+!filterFn(cur)].push(cur), acc), [[], []]);
var sumArray = (arr, fn) => arr.reduce((acc, cur) => acc += fn(cur), 0);
var uniqueArrayFilter = (...arrays) => {
  const all = [].concat(...arrays);
  const nonUnique = all.filter(
    /* @__PURE__ */ ((set2) => (value) => set2.has(value) || !set2.add(value))(/* @__PURE__ */ new Set())
  );
  return all.filter((e) => !nonUnique.includes(e));
};
var uniqueArrayMerge = (oldArray, newArrays) => [
  .../* @__PURE__ */ new Set([...new Set(oldArray), ...[].concat(...newArrays)])
];

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
var WEB_VIDEO_CODECS = ["h264", "hevc", "vp8", "vp9", "theora", "av1"];
var WEB_VIDEO_EXTS = ["mp4", "webm", "ogv", "wav"];
var _CONSTANTS = {
  IMAGE_EXTS,
  TOOLTIP: {
    ENTER_DELAY: 1e3,
    ENTER_NEXT_DELAY: 500
  },
  VIDEO_CODECS,
  VIDEO_EXTS
};

// trabecula/utils/common/date-and-time.ts
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
var dateWithTzToIso = (dateStr) => {
  const timezone = dateStr.split(" ")[4];
  const dateWithoutTz = dateStr.replace(timezone, "").trim();
  const date = dayjs(dateWithoutTz, "ddd MMM DD HH:mm:ss YYYY");
  if (date.isValid()) {
    const hours = parseInt(timezone.slice(1, 3));
    const minutes = parseInt(timezone.slice(3));
    const offsetMinutes = (timezone[0] === "-" ? 1 : -1) * (hours * 60 + minutes);
    return date.add(offsetMinutes, "minute").toISOString();
  } else {
    console.error("Invalid date:", dateStr, date);
    return null;
  }
};

// trabecula/utils/common/files.ts
var isArchive = (filePath) => /\.(7z|rar|zip)$/.test(filePath);
var isArchivePart = (filePath) => /\.(part)?(?!0*1\b)\d+\.(7z|rar|zip)$/.test(filePath);
var isArchiveFirstPart = (filePath) => /\.(part)?(0*1\b)\.(7z|rar|zip)/.test(filePath);

// trabecula/utils/common/formatting.ts
var abbrevNum = (num) => Intl.NumberFormat("en", { notation: "compact" }).format(num);
var bytes = (bytes2) => {
  if (bytes2 < 1) return "0 B";
  const power = Math.floor(Math.log2(bytes2) / 10);
  return `${(bytes2 / __pow(1024, power)).toFixed(2)} ${"KMGTPEZY"[power - 1] || ""}B`;
};
var camelCase = (str) => `${str[0].toLowerCase()}${str.slice(1)}`;
var capitalize = (str, restLower = false) => str[0].toUpperCase() + (restLower ? str.substring(1).toLocaleLowerCase() : str.substring(1));
var commas = (num) => Intl.NumberFormat().format(num);
var decodeHtmlEntities = (s) => s.replace(htmlEntityRegex, (m) => {
  var _a;
  if (m.startsWith("&#x") || m.startsWith("&#X"))
    return String.fromCharCode(parseInt(m.slice(3, -1), 16));
  if (m.startsWith("&#")) return String.fromCharCode(parseInt(m.slice(2, -1), 10));
  return (_a = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[m.slice(1, -1)]) != null ? _a : m;
});
var duration2 = (val, isMs = false) => !isNaN(val) ? dayjs.duration(val, isMs ? "ms" : "s").format("HH:mm:ss") : null;
var frameToSec = (frame, frameRate) => round(frame / frameRate, 3);
var htmlEntityRegex = /&(#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g;
var jstr = (val) => JSON.stringify(val, null, 2);
var leadZeros = (num, places) => String(num).padStart(places, "0");
var pascalToSnake = (str) => !(str == null ? void 0 : str.length) ? "" : str.split(/(?=[A-Z])/).join("_").toLowerCase();
var regexEscape = (string, replacementOnly = false) => string ? replacementOnly ? String(string).replace(/(^|[^\\])(\/)/g, "$1\\$2") : String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : string;
var sanitizeWinPath = (winPath, isBasename = false, isFolderOnly = false) => {
  if (!winPath) return winPath;
  const sanitize = (part, isBase = false) => {
    return part.replaceAll(".", isBase ? "." : "\u2024").replaceAll("<", "\uFE64").replaceAll(">", "\uFE65").replaceAll(":", " \u02D0 ").replaceAll('"', "\u201C").replaceAll("/", " \u2044 ").replaceAll("|", "\u2F01").replaceAll("?", "\uFE56").replaceAll("*", "\uFE61").trim();
  };
  return isBasename ? sanitize(winPath, true) : winPath.split(/[/\\]/).map(
    (part, idx, parts) => idx === 0 && /^[a-zA-Z]:$/.test(part) ? part : sanitize(part, isFolderOnly ? false : idx === parts.length - 1)
  ).join("\\");
};
var snakeToPascal = (str) => !(str == null ? void 0 : str.length) ? "" : str.split("_").map((s) => capitalize(s)).join("");
var titleCase = (str) => str.split(" ").map((s) => capitalize(s)).join(" ");
var Fmt = {
  abbrevNum,
  bytes,
  camelCase,
  capitalize,
  commas,
  decodeHtmlEntities,
  duration: duration2,
  frameToSec,
  htmlEntityRegex,
  jstr,
  leadZeros,
  pascalToSnake,
  regexEscape,
  sanitizeWinPath,
  snakeToPascal,
  titleCase
};

// trabecula/utils/common/math.ts
var LOGICAL_OPS = ["=", "!=", ">", ">=", "<", "<="];
var compareLogicOps = (operator, a, b) => {
  switch (operator) {
    case "=":
      return a === b;
    case "!=":
      return a !== b;
    case ">":
      return a > b;
    case ">=":
      return a >= b;
    case "<":
      return a < b;
    case "<=":
      return a <= b;
    default:
      return false;
  }
};
var compareLogic = (type, ...items) => type === "AND" ? items.every(Boolean) : type === "OR" ? items.some(Boolean) : null;
var durationRegex = /^(?:\d+h)?(?:\d+m)?(?:\d+s)?(?:\d+z)?$/;
var durationToSeconds = (input) => {
  let total = 0;
  for (const [, valueStr, unit] of input.matchAll(/(\d+)([hmsz])/g)) {
    const value = Number(valueStr);
    if (unit === "h") total += value * 3600;
    else if (unit === "m") total += value * 60;
    else if (unit === "s") total += value;
    else if (unit === "z") total += value / 1e3;
  }
  return total;
};
var fractionStringToNumber = (str) => str.split("/").map((s) => +s).reduce((a, b) => a / b);
var logicOpsToMongo = (op) => {
  switch (op) {
    case "=":
      return "$eq";
    case "!=":
      return "$ne";
    case ">":
      return "$gt";
    case ">=":
      return "$gte";
    case "<":
      return "$lt";
    case "<=":
      return "$lte";
    default:
      return null;
  }
};
var round = (num, decimals = 2) => {
  const n = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * n) / n;
};
var secondsToDuration = (input) => {
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor(input % 3600 / 60);
  const seconds = Math.floor(input % 60);
  const milliseconds = Math.round(input % 1 * 1e3);
  return [
    hours > 0 ? `${hours}h` : "",
    minutes > 0 ? `${minutes}m` : "",
    seconds > 0 ? `${seconds}s` : "",
    milliseconds > 0 ? `${milliseconds}z` : ""
  ].filter(Boolean).join("") || "0s";
};

// node_modules/es-toolkit/dist/compat/predicate/isSymbol.mjs
function isSymbol(value) {
  return typeof value === "symbol" || value instanceof Symbol;
}

// node_modules/es-toolkit/dist/function/debounce.mjs
function debounce(func, debounceMs, { signal, edges } = {}) {
  let pendingThis = void 0;
  let pendingArgs = null;
  const leading = edges != null && edges.includes("leading");
  const trailing = edges == null || edges.includes("trailing");
  const invoke = () => {
    if (pendingArgs !== null) {
      func.apply(pendingThis, pendingArgs);
      pendingThis = void 0;
      pendingArgs = null;
    }
  };
  const onTimerEnd = () => {
    if (trailing) {
      invoke();
    }
    cancel();
  };
  let timeoutId = null;
  const schedule = () => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      onTimerEnd();
    }, debounceMs);
  };
  const cancelTimer = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  const cancel = () => {
    cancelTimer();
    pendingThis = void 0;
    pendingArgs = null;
  };
  const flush = () => {
    invoke();
  };
  const debounced = function(...args) {
    if (signal == null ? void 0 : signal.aborted) {
      return;
    }
    pendingThis = this;
    pendingArgs = args;
    const isFirstCall = timeoutId == null;
    schedule();
    if (leading && isFirstCall) {
      invoke();
    }
  };
  debounced.schedule = schedule;
  debounced.cancel = cancel;
  debounced.flush = flush;
  signal == null ? void 0 : signal.addEventListener("abort", cancel, { once: true });
  return debounced;
}

// node_modules/es-toolkit/dist/function/noop.mjs
function noop() {
}

// node_modules/es-toolkit/dist/function/throttle.mjs
function throttle(func, throttleMs, { signal, edges = ["leading", "trailing"] } = {}) {
  let pendingAt = null;
  const debounced = debounce(function(...args) {
    pendingAt = Date.now();
    func.apply(this, args);
  }, throttleMs, { signal, edges });
  const throttled = function(...args) {
    if (pendingAt == null) {
      pendingAt = Date.now();
    }
    if (Date.now() - pendingAt >= throttleMs) {
      pendingAt = Date.now();
      func.apply(this, args);
      debounced.cancel();
      debounced.schedule();
      return;
    }
    debounced.apply(this, args);
  };
  throttled.cancel = debounced.cancel;
  throttled.flush = debounced.flush;
  return throttled;
}

// node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function isPrimitive(value) {
  return value == null || typeof value !== "object" && typeof value !== "function";
}

// node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function isTypedArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// node_modules/es-toolkit/dist/object/clone.mjs
function clone(obj) {
  if (isPrimitive(obj)) {
    return obj;
  }
  if (Array.isArray(obj) || isTypedArray(obj) || obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && obj instanceof SharedArrayBuffer) {
    return obj.slice(0);
  }
  const prototype = Object.getPrototypeOf(obj);
  if (prototype == null) {
    return Object.assign(Object.create(prototype), obj);
  }
  const Constructor = prototype.constructor;
  if (obj instanceof Date || obj instanceof Map || obj instanceof Set) {
    return new Constructor(obj);
  }
  if (obj instanceof RegExp) {
    const newRegExp = new Constructor(obj);
    newRegExp.lastIndex = obj.lastIndex;
    return newRegExp;
  }
  if (obj instanceof DataView) {
    return new Constructor(obj.buffer.slice(0));
  }
  if (obj instanceof Error) {
    let newError;
    if (obj instanceof AggregateError) {
      newError = new Constructor(obj.errors, obj.message, { cause: obj.cause });
    } else {
      newError = new Constructor(obj.message, { cause: obj.cause });
    }
    newError.stack = obj.stack;
    Object.assign(newError, obj);
    return newError;
  }
  if (typeof File !== "undefined" && obj instanceof File) {
    const newFile = new Constructor([obj], obj.name, { type: obj.type, lastModified: obj.lastModified });
    return newFile;
  }
  if (typeof obj === "object") {
    const newObject = Object.create(prototype);
    return Object.assign(newObject, obj);
  }
  return obj;
}

// node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function getSymbols(object) {
  return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}

// node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}

// node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var regexpTag = "[object RegExp]";
var stringTag = "[object String]";
var numberTag = "[object Number]";
var booleanTag = "[object Boolean]";
var argumentsTag = "[object Arguments]";
var symbolTag = "[object Symbol]";
var dateTag = "[object Date]";
var mapTag = "[object Map]";
var setTag = "[object Set]";
var arrayTag = "[object Array]";
var functionTag = "[object Function]";
var arrayBufferTag = "[object ArrayBuffer]";
var objectTag = "[object Object]";
var errorTag = "[object Error]";
var dataViewTag = "[object DataView]";
var uint8ArrayTag = "[object Uint8Array]";
var uint8ClampedArrayTag = "[object Uint8ClampedArray]";
var uint16ArrayTag = "[object Uint16Array]";
var uint32ArrayTag = "[object Uint32Array]";
var bigUint64ArrayTag = "[object BigUint64Array]";
var int8ArrayTag = "[object Int8Array]";
var int16ArrayTag = "[object Int16Array]";
var int32ArrayTag = "[object Int32Array]";
var bigInt64ArrayTag = "[object BigInt64Array]";
var float32ArrayTag = "[object Float32Array]";
var float64ArrayTag = "[object Float64Array]";

// node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
  const cloned = cloneValue == null ? void 0 : cloneValue(valueToClone, keyToClone, objectToClone, stack);
  if (cloned !== void 0) {
    return cloned;
  }
  if (isPrimitive(valueToClone)) {
    return valueToClone;
  }
  if (stack.has(valueToClone)) {
    return stack.get(valueToClone);
  }
  if (Array.isArray(valueToClone)) {
    const result = new Array(valueToClone.length);
    stack.set(valueToClone, result);
    for (let i = 0; i < valueToClone.length; i++) {
      result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
    }
    if (Object.hasOwn(valueToClone, "index")) {
      result.index = valueToClone.index;
    }
    if (Object.hasOwn(valueToClone, "input")) {
      result.input = valueToClone.input;
    }
    return result;
  }
  if (valueToClone instanceof Date) {
    return new Date(valueToClone.getTime());
  }
  if (valueToClone instanceof RegExp) {
    const result = new RegExp(valueToClone.source, valueToClone.flags);
    result.lastIndex = valueToClone.lastIndex;
    return result;
  }
  if (valueToClone instanceof Map) {
    const result = /* @__PURE__ */ new Map();
    stack.set(valueToClone, result);
    for (const [key, value] of valueToClone) {
      result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
    }
    return result;
  }
  if (valueToClone instanceof Set) {
    const result = /* @__PURE__ */ new Set();
    stack.set(valueToClone, result);
    for (const value of valueToClone) {
      result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
    }
    return result;
  }
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) {
    return valueToClone.subarray();
  }
  if (isTypedArray(valueToClone)) {
    const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
    stack.set(valueToClone, result);
    for (let i = 0; i < valueToClone.length; i++) {
      result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
    }
    return result;
  }
  if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) {
    return valueToClone.slice(0);
  }
  if (valueToClone instanceof DataView) {
    const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (typeof File !== "undefined" && valueToClone instanceof File) {
    const result = new File([valueToClone], valueToClone.name, {
      type: valueToClone.type
    });
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
    const result = new Blob([valueToClone], { type: valueToClone.type });
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof Error) {
    const result = structuredClone(valueToClone);
    stack.set(valueToClone, result);
    result.message = valueToClone.message;
    result.name = valueToClone.name;
    result.stack = valueToClone.stack;
    result.cause = valueToClone.cause;
    result.constructor = valueToClone.constructor;
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof Boolean) {
    const result = new Boolean(valueToClone.valueOf());
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof Number) {
    const result = new Number(valueToClone.valueOf());
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof String) {
    const result = new String(valueToClone.valueOf());
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
    const result = Object.create(Object.getPrototypeOf(valueToClone));
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
  const keys = [...Object.keys(source), ...getSymbols(source)];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const descriptor = Object.getOwnPropertyDescriptor(target, key);
    if (descriptor == null || descriptor.writable) {
      target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
    }
  }
}
function isCloneableObject(object) {
  switch (getTag(object)) {
    case argumentsTag:
    case arrayTag:
    case arrayBufferTag:
    case dataViewTag:
    case booleanTag:
    case dateTag:
    case float32ArrayTag:
    case float64ArrayTag:
    case int8ArrayTag:
    case int16ArrayTag:
    case int32ArrayTag:
    case mapTag:
    case numberTag:
    case objectTag:
    case regexpTag:
    case setTag:
    case stringTag:
    case symbolTag:
    case uint8ArrayTag:
    case uint8ClampedArrayTag:
    case uint16ArrayTag:
    case uint32ArrayTag: {
      return true;
    }
    default: {
      return false;
    }
  }
}

// node_modules/es-toolkit/dist/object/cloneDeep.mjs
function cloneDeep(obj) {
  return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
}

// node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function isPlainObject(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  const hasObjectPrototype = proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null;
  if (!hasObjectPrototype) {
    return false;
  }
  return Object.prototype.toString.call(value) === "[object Object]";
}

// node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function isUnsafeProperty(key) {
  return key === "__proto__";
}

// node_modules/es-toolkit/dist/object/mergeWith.mjs
function mergeWith(target, source, merge) {
  const sourceKeys = Object.keys(source);
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
    if (isUnsafeProperty(key)) {
      continue;
    }
    const sourceValue = source[key];
    const targetValue = target[key];
    const merged = merge(targetValue, sourceValue, key, target, source);
    if (merged !== void 0) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      if (Array.isArray(targetValue)) {
        target[key] = mergeWith(targetValue, sourceValue, merge);
      } else {
        target[key] = mergeWith([], sourceValue, merge);
      }
    } else if (isPlainObject(sourceValue)) {
      if (isPlainObject(targetValue)) {
        target[key] = mergeWith(targetValue, sourceValue, merge);
      } else {
        target[key] = mergeWith({}, sourceValue, merge);
      }
    } else if (targetValue === void 0 || sourceValue !== void 0) {
      target[key] = sourceValue;
    }
  }
  return target;
}

// node_modules/es-toolkit/dist/object/toMerged.mjs
function toMerged(target, source) {
  return mergeWith(clone(target), source, function mergeRecursively(targetValue, sourceValue) {
    if (Array.isArray(sourceValue)) {
      if (Array.isArray(targetValue)) {
        return mergeWith(clone(targetValue), sourceValue, mergeRecursively);
      } else {
        return mergeWith([], sourceValue, mergeRecursively);
      }
    } else if (isPlainObject(sourceValue)) {
      if (isPlainObject(targetValue)) {
        return mergeWith(clone(targetValue), sourceValue, mergeRecursively);
      } else {
        return mergeWith({}, sourceValue, mergeRecursively);
      }
    }
  });
}

// node_modules/es-toolkit/dist/_internal/isEqualsSameValueZero.mjs
function isEqualsSameValueZero(value, other) {
  return value === other || Number.isNaN(value) && Number.isNaN(other);
}

// node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
function isEqualWith(a, b, areValuesEqual) {
  return isEqualWithImpl(a, b, void 0, void 0, void 0, void 0, areValuesEqual);
}
function isEqualWithImpl(a, b, property, aParent, bParent, stack, areValuesEqual) {
  const result = areValuesEqual(a, b, property, aParent, bParent, stack);
  if (result !== void 0) {
    return result;
  }
  if (typeof a === typeof b) {
    switch (typeof a) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined": {
        return a === b;
      }
      case "number": {
        return a === b || Object.is(a, b);
      }
      case "function": {
        return a === b;
      }
      case "object": {
        return areObjectsEqual(a, b, stack, areValuesEqual);
      }
    }
  }
  return areObjectsEqual(a, b, stack, areValuesEqual);
}
function areObjectsEqual(a, b, stack, areValuesEqual) {
  if (Object.is(a, b)) {
    return true;
  }
  let aTag = getTag(a);
  let bTag = getTag(b);
  if (aTag === argumentsTag) {
    aTag = objectTag;
  }
  if (bTag === argumentsTag) {
    bTag = objectTag;
  }
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case stringTag:
      return a.toString() === b.toString();
    case numberTag: {
      const x = a.valueOf();
      const y = b.valueOf();
      return isEqualsSameValueZero(x, y);
    }
    case booleanTag:
    case dateTag:
    case symbolTag:
      return Object.is(a.valueOf(), b.valueOf());
    case regexpTag: {
      return a.source === b.source && a.flags === b.flags;
    }
    case functionTag: {
      return a === b;
    }
  }
  stack = stack != null ? stack : /* @__PURE__ */ new Map();
  const aStack = stack.get(a);
  const bStack = stack.get(b);
  if (aStack != null && bStack != null) {
    return aStack === b;
  }
  stack.set(a, b);
  stack.set(b, a);
  try {
    switch (aTag) {
      case mapTag: {
        if (a.size !== b.size) {
          return false;
        }
        for (const [key, value] of a.entries()) {
          if (!b.has(key) || !isEqualWithImpl(value, b.get(key), key, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case setTag: {
        if (a.size !== b.size) {
          return false;
        }
        const aValues = Array.from(a.values());
        const bValues = Array.from(b.values());
        for (let i = 0; i < aValues.length; i++) {
          const aValue = aValues[i];
          const index = bValues.findIndex((bValue) => {
            return isEqualWithImpl(aValue, bValue, void 0, a, b, stack, areValuesEqual);
          });
          if (index === -1) {
            return false;
          }
          bValues.splice(index, 1);
        }
        return true;
      }
      case arrayTag:
      case uint8ArrayTag:
      case uint8ClampedArrayTag:
      case uint16ArrayTag:
      case uint32ArrayTag:
      case bigUint64ArrayTag:
      case int8ArrayTag:
      case int16ArrayTag:
      case int32ArrayTag:
      case bigInt64ArrayTag:
      case float32ArrayTag:
      case float64ArrayTag: {
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(a) !== Buffer.isBuffer(b)) {
          return false;
        }
        if (a.length !== b.length) {
          return false;
        }
        for (let i = 0; i < a.length; i++) {
          if (!isEqualWithImpl(a[i], b[i], i, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case arrayBufferTag: {
        if (a.byteLength !== b.byteLength) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
      }
      case dataViewTag: {
        if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
      }
      case errorTag: {
        return a.name === b.name && a.message === b.message;
      }
      case objectTag: {
        const areEqualInstances = areObjectsEqual(a.constructor, b.constructor, stack, areValuesEqual) || isPlainObject(a) && isPlainObject(b);
        if (!areEqualInstances) {
          return false;
        }
        const aKeys = [...Object.keys(a), ...getSymbols(a)];
        const bKeys = [...Object.keys(b), ...getSymbols(b)];
        if (aKeys.length !== bKeys.length) {
          return false;
        }
        for (let i = 0; i < aKeys.length; i++) {
          const propKey = aKeys[i];
          const aProp = a[propKey];
          if (!Object.hasOwn(b, propKey)) {
            return false;
          }
          const bProp = b[propKey];
          if (!isEqualWithImpl(aProp, bProp, propKey, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      default: {
        return false;
      }
    }
  } finally {
    stack.delete(a);
    stack.delete(b);
  }
}

// node_modules/es-toolkit/dist/predicate/isEqual.mjs
function isEqual(a, b) {
  return isEqualWith(a, b, noop);
}

// node_modules/es-toolkit/dist/compat/_internal/isDeepKey.mjs
function isDeepKey(key) {
  switch (typeof key) {
    case "number":
    case "symbol": {
      return false;
    }
    case "string": {
      return key.includes(".") || key.includes("[") || key.includes("]");
    }
  }
}

// node_modules/es-toolkit/dist/compat/_internal/toKey.mjs
function toKey(value) {
  var _a;
  if (typeof value === "string" || typeof value === "symbol") {
    return value;
  }
  if (Object.is((_a = value == null ? void 0 : value.valueOf) == null ? void 0 : _a.call(value), -0)) {
    return "-0";
  }
  return String(value);
}

// node_modules/es-toolkit/dist/compat/util/toString.mjs
function toString(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(toString).join(",");
  }
  const result = String(value);
  if (result === "0" && Object.is(Number(value), -0)) {
    return "-0";
  }
  return result;
}

// node_modules/es-toolkit/dist/compat/util/toPath.mjs
function toPath(deepKey) {
  if (Array.isArray(deepKey)) {
    return deepKey.map(toKey);
  }
  if (typeof deepKey === "symbol") {
    return [deepKey];
  }
  deepKey = toString(deepKey);
  const result = [];
  const length = deepKey.length;
  if (length === 0) {
    return result;
  }
  let index = 0;
  let key = "";
  let quoteChar = "";
  let bracket = false;
  if (deepKey.charCodeAt(0) === 46) {
    result.push("");
    index++;
  }
  while (index < length) {
    const char = deepKey[index];
    if (quoteChar) {
      if (char === "\\" && index + 1 < length) {
        index++;
        key += deepKey[index];
      } else if (char === quoteChar) {
        quoteChar = "";
      } else {
        key += char;
      }
    } else if (bracket) {
      if (char === '"' || char === "'") {
        quoteChar = char;
      } else if (char === "]") {
        bracket = false;
        result.push(key);
        key = "";
      } else {
        key += char;
      }
    } else {
      if (char === "[") {
        bracket = true;
        if (key) {
          result.push(key);
          key = "";
        }
      } else if (char === ".") {
        if (key) {
          result.push(key);
          key = "";
        }
      } else {
        key += char;
      }
    }
    index++;
  }
  if (key) {
    result.push(key);
  }
  return result;
}

// node_modules/es-toolkit/dist/compat/object/get.mjs
function get(object, path, defaultValue) {
  if (object == null) {
    return defaultValue;
  }
  switch (typeof path) {
    case "string": {
      if (isUnsafeProperty(path)) {
        return defaultValue;
      }
      const result = object[path];
      if (result === void 0) {
        if (isDeepKey(path)) {
          return get(object, toPath(path), defaultValue);
        } else {
          return defaultValue;
        }
      }
      return result;
    }
    case "number":
    case "symbol": {
      if (typeof path === "number") {
        path = toKey(path);
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
    default: {
      if (Array.isArray(path)) {
        return getWithPath(object, path, defaultValue);
      }
      if (Object.is(path == null ? void 0 : path.valueOf(), -0)) {
        path = "-0";
      } else {
        path = String(path);
      }
      if (isUnsafeProperty(path)) {
        return defaultValue;
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
  }
}
function getWithPath(object, path, defaultValue) {
  if (path.length === 0) {
    return defaultValue;
  }
  let current = object;
  for (let index = 0; index < path.length; index++) {
    if (current == null) {
      return defaultValue;
    }
    if (isUnsafeProperty(path[index])) {
      return defaultValue;
    }
    current = current[path[index]];
  }
  if (current === void 0) {
    return defaultValue;
  }
  return current;
}

// node_modules/es-toolkit/dist/compat/predicate/isObject.mjs
function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}

// node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs
var IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
  switch (typeof value) {
    case "number": {
      return Number.isInteger(value) && value >= 0 && value < length;
    }
    case "symbol": {
      return false;
    }
    case "string": {
      return IS_UNSIGNED_INTEGER.test(value);
    }
  }
}

// node_modules/es-toolkit/dist/compat/_internal/isKey.mjs
var regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false;
  }
  if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object != null && Object.hasOwn(object, value);
}

// node_modules/es-toolkit/dist/compat/_internal/assignValue.mjs
var assignValue = (object, key, value) => {
  const objValue = object[key];
  if (!(Object.hasOwn(object, key) && isEqualsSameValueZero(objValue, value)) || value === void 0 && !(key in object)) {
    object[key] = value;
  }
};

// node_modules/es-toolkit/dist/compat/object/updateWith.mjs
function updateWith(obj, path, updater, customizer) {
  if (obj == null && !isObject(obj)) {
    return obj;
  }
  let resolvedPath;
  if (isKey(path, obj)) {
    resolvedPath = [path];
  } else if (Array.isArray(path)) {
    resolvedPath = path;
  } else {
    resolvedPath = toPath(path);
  }
  const updateValue = updater(get(obj, resolvedPath));
  let current = obj;
  for (let i = 0; i < resolvedPath.length && current != null; i++) {
    const key = toKey(resolvedPath[i]);
    if (isUnsafeProperty(key)) {
      continue;
    }
    let newValue;
    if (i === resolvedPath.length - 1) {
      newValue = updateValue;
    } else {
      const objValue = current[key];
      const customizerResult = customizer == null ? void 0 : customizer(objValue, key, obj);
      newValue = customizerResult !== void 0 ? customizerResult : isObject(objValue) ? objValue : isIndex(resolvedPath[i + 1]) ? [] : {};
    }
    assignValue(current, key, newValue);
    current = current[key];
  }
  return obj;
}

// node_modules/es-toolkit/dist/compat/object/set.mjs
function set(obj, path, value) {
  return updateWith(obj, path, () => value, () => void 0);
}

// trabecula/utils/common/miscellaneous.ts
var attempt = (fn, retries = 2, delay = 1e3) => __async(null, null, function* () {
  return retries > 0 ? yield fn().catch((error) => __async(null, null, function* () {
    console.error(`Function failed, error: ${error}. Retrying after ${delay}ms...`);
    return sleep(delay).then(() => attempt(fn, retries - 1, delay));
  })) : fn();
});
var convertNestedKeys = (updates) => {
  return Object.entries(updates).reduce((acc, [key, value]) => {
    key.split(".").reduce((nested, k, i, arr) => {
      return nested[k] || (nested[k] = i === arr.length - 1 ? value : {});
    }, acc);
    return acc;
  }, {});
};
var debounce2 = debounce;
var deepClone = cloneDeep;
var deepMerge = toMerged;
var handleErrors = (fn) => __async(null, null, function* () {
  try {
    return { success: true, data: yield fn() };
  } catch (err) {
    const errorStr = err instanceof Error ? err.message : String(err);
    console.error(errorStr);
    return { success: false, error: errorStr };
  }
});
var isDeepEqual = isEqual;
var isObject2 = (item) => item && typeof item === "object" && !Array.isArray(item);
var rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var setObj = set;
var sleep = (min, max) => new Promise((resolve) => setTimeout(resolve, max > 0 ? rng(min, max) : min));
var throttle2 = throttle;
var uuid = () => crypto.randomUUID();

// trabecula/utils/common/queue.ts
var CancelledError = class extends Error {
  constructor() {
    super("PromiseQueue cancelled");
    this.name = "CancelledError";
  }
};
var PromiseQueue = class {
  constructor({ concurrency, delayRange } = {}) {
    __publicField(this, "cancelled", false);
    __publicField(this, "concurrency");
    __publicField(this, "delayRange");
    __publicField(this, "promise", null);
    __publicField(this, "queue", []);
    __publicField(this, "resolver", null);
    __publicField(this, "runningCount", 0);
    this.concurrency = concurrency != null ? concurrency : 1;
    this.delayRange = delayRange;
  }
  add(fn) {
    if (this.cancelled) return Promise.reject(new CancelledError());
    if (!this.promise) this.promise = new Promise((res) => this.resolver = res);
    return new Promise((resolve, reject) => {
      const task = () => __async(this, null, function* () {
        try {
          if (this.cancelled) return reject(new CancelledError());
          this.runningCount++;
          const result = yield fn();
          resolve(result);
        } catch (err) {
          reject(err);
        } finally {
          if (this.delayRange) yield sleep(...this.delayRange);
          this.runningCount--;
          this.next();
        }
      });
      this.queue.push(task);
      this.next();
    });
  }
  cancel() {
    var _a;
    if (this.cancelled) return;
    this.cancelled = true;
    while (this.queue.length) (_a = this.queue.shift()) == null ? void 0 : _a();
    if (this.runningCount === 0 && this.resolver) {
      this.resolver();
      this.promise = null;
      this.resolver = null;
    }
  }
  next() {
    var _a;
    while (!this.cancelled && this.runningCount < this.concurrency && this.queue.length)
      (_a = this.queue.shift()) == null ? void 0 : _a();
    if (!this.queue.length && this.runningCount === 0 && this.resolver) {
      this.resolver();
      this.promise = null;
      this.resolver = null;
    }
  }
  resolve() {
    return __async(this, null, function* () {
      if (this.promise) yield this.promise;
    });
  }
};

export {
  arrayIntersect,
  bisectArrayChanges,
  centeredSlice,
  chunkArray,
  countItems,
  getArrayDiff,
  objectToFloat32Array,
  range,
  rotateArrayPos,
  sortArray,
  splitArray,
  sumArray,
  uniqueArrayFilter,
  uniqueArrayMerge,
  AUDIO_CODECS_COMMON,
  AUDIO_CODECS_UNCOMMON,
  AUDIO_CODECS,
  IMAGE_EXTS_COMMON,
  IMAGE_EXTS_UNCOMMON,
  IMAGE_EXTS,
  VIDEO_CODECS_COMMON,
  VIDEO_CODECS_UNCOMMON,
  VIDEO_CODECS,
  VIDEO_EXTS_COMMON,
  VIDEO_EXTS_UNCOMMON,
  VIDEO_EXTS,
  WEB_VIDEO_CODECS,
  WEB_VIDEO_EXTS,
  _CONSTANTS,
  dayjs,
  dateWithTzToIso,
  isArchive,
  isArchivePart,
  isArchiveFirstPart,
  Fmt,
  LOGICAL_OPS,
  compareLogicOps,
  compareLogic,
  durationRegex,
  durationToSeconds,
  fractionStringToNumber,
  logicOpsToMongo,
  round,
  secondsToDuration,
  attempt,
  convertNestedKeys,
  debounce2 as debounce,
  deepClone,
  deepMerge,
  handleErrors,
  isDeepEqual,
  isObject2 as isObject,
  rng,
  setObj,
  sleep,
  throttle2 as throttle,
  uuid,
  PromiseQueue
};
//# sourceMappingURL=chunk-NDZ73THA.mjs.map