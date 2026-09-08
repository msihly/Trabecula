var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
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

// trabecula/utils/common/index.ts
var common_exports = {};
__export(common_exports, {
  DENSE_FORM_ROW_HEIGHT: () => DENSE_FORM_ROW_HEIGHT,
  FORM_ROW_HEIGHT: () => FORM_ROW_HEIGHT,
  Fmt: () => Fmt,
  LOGICAL_OPS: () => LOGICAL_OPS,
  PromiseQueue: () => PromiseQueue,
  _CONSTANTS: () => _CONSTANTS,
  arrayIntersect: () => arrayIntersect,
  attempt: () => attempt,
  bisectArrayChanges: () => bisectArrayChanges,
  centeredSlice: () => centeredSlice,
  chunkArray: () => chunkArray,
  compareLogic: () => compareLogic,
  compareLogicOps: () => compareLogicOps,
  convertNestedKeys: () => convertNestedKeys,
  countItems: () => countItems,
  dateWithTzToIso: () => dateWithTzToIso,
  dayjs: () => import_dayjs.default,
  debounce: () => debounce,
  deepClone: () => deepClone,
  deepMerge: () => deepMerge,
  durationRegex: () => durationRegex,
  durationToSeconds: () => durationToSeconds,
  fractionStringToNumber: () => fractionStringToNumber,
  getArrayDiff: () => getArrayDiff,
  handleErrors: () => handleErrors,
  isArchive: () => isArchive,
  isArchiveFirstPart: () => isArchiveFirstPart,
  isArchivePart: () => isArchivePart,
  isDeepEqual: () => isDeepEqual,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  logicOpsToMongo: () => logicOpsToMongo,
  mergePreset: () => mergePreset,
  objectToFloat32Array: () => objectToFloat32Array,
  range: () => range,
  rng: () => rng,
  rotateArrayPos: () => rotateArrayPos,
  round: () => round,
  secondsToDuration: () => secondsToDuration,
  setObj: () => setObj,
  sleep: () => sleep,
  sortArray: () => sortArray,
  splitArray: () => splitArray,
  sumArray: () => sumArray,
  throttle: () => throttle,
  uniqueArrayFilter: () => uniqueArrayFilter,
  uniqueArrayMerge: () => uniqueArrayMerge,
  uuid: () => uuid
});
module.exports = __toCommonJS(common_exports);

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
    /* @__PURE__ */ ((set) => (value) => set.has(value) || !set.add(value))(/* @__PURE__ */ new Set())
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
var FORM_ROW_HEIGHT = "2.3rem";
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
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);
var dateWithTzToIso = (dateStr) => {
  const timezone = dateStr.split(" ")[4];
  const dateWithoutTz = dateStr.replace(timezone, "").trim();
  const date = (0, import_dayjs.default)(dateWithoutTz, "ddd MMM DD HH:mm:ss YYYY");
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
var duration2 = (val, isMs = false) => !isNaN(val) ? import_dayjs.default.duration(val, isMs ? "ms" : "s").format("HH:mm:ss") : null;
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

// trabecula/utils/common/miscellaneous.ts
var import_es_toolkit = require("es-toolkit");
var import_compat = require("es-toolkit/compat");
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
var debounce = import_es_toolkit.debounce;
var deepClone = import_es_toolkit.cloneDeep;
var deepMerge = import_es_toolkit.toMerged;
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
var isObject = (item) => item && typeof item === "object" && !Array.isArray(item);
var isPlainObject = (value) => {
  if (!value || typeof value !== "object") return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
};
var mergePreset = (preset, props) => {
  const merge = (presetValue, propValue) => {
    if (propValue === void 0) return presetValue;
    if (!isPlainObject(presetValue) || !isPlainObject(propValue)) return propValue;
    const result = __spreadValues({}, presetValue);
    for (const key of Object.keys(propValue)) result[key] = merge(presetValue[key], propValue[key]);
    return result;
  };
  return merge(preset, props);
};
var rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var setObj = import_compat.set;
var sleep = (min, max) => new Promise((resolve) => setTimeout(resolve, max > 0 ? rng(min, max) : min));
var throttle = import_es_toolkit.throttle;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DENSE_FORM_ROW_HEIGHT,
  FORM_ROW_HEIGHT,
  Fmt,
  LOGICAL_OPS,
  PromiseQueue,
  _CONSTANTS,
  arrayIntersect,
  attempt,
  bisectArrayChanges,
  centeredSlice,
  chunkArray,
  compareLogic,
  compareLogicOps,
  convertNestedKeys,
  countItems,
  dateWithTzToIso,
  dayjs,
  debounce,
  deepClone,
  deepMerge,
  durationRegex,
  durationToSeconds,
  fractionStringToNumber,
  getArrayDiff,
  handleErrors,
  isArchive,
  isArchiveFirstPart,
  isArchivePart,
  isDeepEqual,
  isObject,
  isPlainObject,
  logicOpsToMongo,
  mergePreset,
  objectToFloat32Array,
  range,
  rng,
  rotateArrayPos,
  round,
  secondsToDuration,
  setObj,
  sleep,
  sortArray,
  splitArray,
  sumArray,
  throttle,
  uniqueArrayFilter,
  uniqueArrayMerge,
  uuid
});
//# sourceMappingURL=index.js.map