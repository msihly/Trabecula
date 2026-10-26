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
  PALETTE: () => PALETTE,
  PALETTE_SWATCHES: () => PALETTE_SWATCHES,
  PromiseQueue: () => PromiseQueue,
  SERVER_STATUS_IPC: () => SERVER_STATUS_IPC,
  _CONSTANTS: () => _CONSTANTS,
  applySelectionChanges: () => applySelectionChanges,
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
  getClosestPaletteColor: () => getClosestPaletteColor,
  getPaletteColorName: () => getPaletteColorName,
  getSelectionRange: () => getSelectionRange,
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
var arrayIntersect = (...arrays) => {
  const [first = [], ...rest] = arrays;
  return rest.reduce((acc, cur) => {
    const values = new Set(cur);
    return acc.filter((value) => values.has(value));
  }, first);
};
var bisectArrayChanges = (oldArr, newArr) => {
  if (!oldArr || !newArr) return { added: [], removed: [] };
  else {
    const newValues = new Set(newArr);
    const oldValues = new Set(oldArr);
    return {
      added: newArr.filter((value) => !oldValues.has(value)),
      removed: oldArr.filter((value) => !newValues.has(value))
    };
  }
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
  const counts = /* @__PURE__ */ new Map();
  const groups = [];
  arr.forEach((value) => {
    const group = counts.get(value);
    if (group) group.count++;
    else {
      const next = { count: 1, value };
      groups.push(next);
      if (!Number.isNaN(value)) counts.set(value, next);
    }
  });
  return sortArray(groups, "count", true, true);
};
var getArrayDiff = (a, b) => {
  const { added, removed } = bisectArrayChanges(a, b);
  return [...removed, ...added];
};
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
var splitArray = (arr, filterFn) => arr.reduce(
  (acc, cur) => {
    acc[+!filterFn(cur)].push(cur);
    return acc;
  },
  [[], []]
);
var sumArray = (arr, fn) => arr.reduce((acc, cur) => acc + fn(cur), 0);
var uniqueArrayFilter = (...arrays) => {
  const all = arrays.flat();
  const duplicates = /* @__PURE__ */ new Set();
  const seen = /* @__PURE__ */ new Set();
  for (const value of all) {
    if (seen.has(value)) duplicates.add(value);
    else seen.add(value);
  }
  return all.filter((value) => !duplicates.has(value));
};
var uniqueArrayMerge = (oldArray, newArrays) => [
  .../* @__PURE__ */ new Set([...oldArray, ...[].concat(...newArrays)])
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
var WEB_VIDEO_CODECS = ["av1", "h264", "hevc", "theora", "vp8", "vp9"];
var WEB_VIDEO_EXTS = ["mp4", "ogv", "wav", "webm"];
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
var dateWithTzToIso = (dateStr) => {
  const timezone = dateStr.split(" ")[4];
  if (!/^[+-](?:[01]\d|2[0-3])[0-5]\d$/.test(timezone != null ? timezone : "")) return null;
  const dateWithoutTz = dateStr.replace(timezone, "").trim();
  const date = import_dayjs.default.utc(dateWithoutTz, "ddd MMM DD HH:mm:ss YYYY");
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
var isArchiveFirstPart = (filePath) => /\.(part)?(0*1\b)\.(7z|rar|zip)$/.test(filePath);

// trabecula/utils/common/formatting.ts
var abbrevNum = (num) => Intl.NumberFormat("en", { notation: "compact" }).format(num);
var bytes = (bytes2) => {
  if (bytes2 < 1) return "0 B";
  const power = Math.floor(Math.log2(bytes2) / 10);
  return `${(bytes2 / __pow(1024, power)).toFixed(2)} ${"KMGTPEZY"[power - 1] || ""}B`;
};
var camelCase = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
var capitalize = (str, restLower = false) => str.charAt(0).toUpperCase() + (restLower ? str.substring(1).toLocaleLowerCase() : str.substring(1));
var commas = (num) => Intl.NumberFormat().format(num);
var decodeHtmlEntities = (s) => s.replace(htmlEntityRegex, (m) => {
  var _a;
  let decoded = m;
  if (m.startsWith("&#")) {
    const isHex = m[2].toLowerCase() === "x";
    const codePoint = parseInt(m.slice(isHex ? 3 : 2, -1), isHex ? 16 : 10);
    decoded = codePoint > 0 && codePoint <= 1114111 && !(codePoint >= 55296 && codePoint <= 57343) ? String.fromCodePoint(codePoint) : "\uFFFD";
  } else {
    decoded = (_a = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }[m.slice(1, -1)]) != null ? _a : m;
  }
  return decoded;
});
var duration2 = (val, isMs = false) => {
  if (isNaN(val)) return null;
  const dur = import_dayjs.default.duration(val, isMs ? "ms" : "s");
  return `${leadZeros(Math.floor(dur.asHours()), 2)}:${dur.format("mm:ss")}`;
};
var frameToSec = (frame, frameRate) => round(frame / frameRate, 3);
var htmlEntityRegex = /&(#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g;
var jstr = (val) => JSON.stringify(val, null, 2);
var leadZeros = (num, places) => String(num).padStart(places, "0");
var pascalToSnake = (str) => !(str == null ? void 0 : str.length) ? "" : str.split(/(?=[A-Z])/).join("_").toLowerCase();
var regexEscape = (string, replacementOnly = false) => string ? replacementOnly ? String(string).replace(/(^|[^\\])(\/)/g, "$1\\$2") : String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : string;
var sanitizeWinPath = (winPath, isBasename = false, isFolderOnly = false) => {
  if (!winPath) return winPath;
  const sanitize = (part, isBase = false) => {
    return part.replaceAll(".", isBase ? "." : "\u2024").replaceAll("<", "\uFE64").replaceAll(">", "\uFE65").replaceAll(":", " \u02D0 ").replaceAll('"', "\u201C").replaceAll("/", " \u2044 ").replaceAll("\\", " \uFF3C ").replaceAll("|", "\u2F01").replaceAll("?", "\uFE56").replaceAll("*", "\uFE61").replace(/[\u0000-\u001f]/g, "").trim().replace(/\.+$/, (dots) => "\u2024".repeat(dots.length)).replace(/^(con|prn|aux|nul|com[1-9¹²³]|lpt[1-9¹²³])(?=\.|$)/i, "_$1");
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
  const totalMs = Math.round(input * 1e3);
  const hours = Math.floor(totalMs / 36e5);
  const minutes = Math.floor(totalMs % 36e5 / 6e4);
  const seconds = Math.floor(totalMs % 6e4 / 1e3);
  const milliseconds = totalMs % 1e3;
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
  if (retries <= 0) return fn();
  try {
    return yield fn();
  } catch (error) {
    console.error(`Function failed, error: ${error}. Retrying after ${delay}ms...`);
    yield sleep(delay);
    return attempt(fn, retries - 1, delay);
  }
});
var convertNestedKeys = (updates) => {
  const result = {};
  for (const [key, value] of Object.entries(updates)) {
    const parts = key.split(".");
    let nested = result;
    if (parts.some((part) => ["__proto__", "constructor", "prototype"].includes(part)))
      throw new Error(`Unsafe nested key: ${key}`);
    for (const [index, part] of parts.entries()) {
      if (index === parts.length - 1) nested[part] = value;
      else {
        if (!Object.hasOwn(nested, part) || !isPlainObject(nested[part])) nested[part] = {};
        nested = nested[part];
      }
    }
  }
  return result;
};
var debounce = import_es_toolkit.debounce;
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

// trabecula/utils/common/palette.ts
var import_color = __toESM(require("color"));
var PALETTE = {
  red: {
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  orange: {
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  amber: {
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  yellow: {
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  lime: {
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  green: {
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  emerald: {
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  teal: {
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  cyan: {
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  },
  sky: {
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  blue: {
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  indigo: {
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  violet: {
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  purple: {
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  fuchsia: {
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  pink: {
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  rose: {
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  },
  slate: {
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  stone: {
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  neutral: {
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  }
};
var PALETTE_SWATCHES = Object.values(PALETTE).map(
  (shades) => Object.values(shades)
);
var PALETTE_NAMES = new Map(
  Object.entries(PALETTE).flatMap(
    ([hue, shades]) => Object.entries(shades).map(([shade, hex]) => [hex, `${hue} ${shade}`])
  )
);
var PALETTE_LABS = [...PALETTE_NAMES.keys()].map((hex) => ({
  hex,
  lab: (0, import_color.default)(hex).lab().array()
}));
var toRadians = (degrees) => degrees * Math.PI / 180;
var toDegrees = (radians) => (radians * 180 / Math.PI % 360 + 360) % 360;
var getColorDifference = ([l1, a1, b1], [l2, a2, b2]) => {
  const meanChroma = (Math.hypot(a1, b1) + Math.hypot(a2, b2)) / 2;
  const g = 0.5 * (1 - Math.sqrt(__pow(meanChroma, 7) / (__pow(meanChroma, 7) + __pow(25, 7))));
  const a1Prime = a1 * (1 + g);
  const a2Prime = a2 * (1 + g);
  const c1 = Math.hypot(a1Prime, b1);
  const c2 = Math.hypot(a2Prime, b2);
  const h1 = c1 === 0 ? 0 : toDegrees(Math.atan2(b1, a1Prime));
  const h2 = c2 === 0 ? 0 : toDegrees(Math.atan2(b2, a2Prime));
  const hueGap = h2 - h1;
  const deltaHue = c1 * c2 === 0 ? 0 : Math.abs(hueGap) <= 180 ? hueGap : hueGap > 180 ? hueGap - 360 : hueGap + 360;
  const deltaL = l2 - l1;
  const deltaC = c2 - c1;
  const deltaH = 2 * Math.sqrt(c1 * c2) * Math.sin(toRadians(deltaHue / 2));
  const meanL = (l1 + l2) / 2;
  const meanC = (c1 + c2) / 2;
  const meanH = c1 * c2 === 0 ? h1 + h2 : Math.abs(h1 - h2) <= 180 ? (h1 + h2) / 2 : h1 + h2 < 360 ? (h1 + h2 + 360) / 2 : (h1 + h2 - 360) / 2;
  const t = 1 - 0.17 * Math.cos(toRadians(meanH - 30)) + 0.24 * Math.cos(toRadians(2 * meanH)) + 0.32 * Math.cos(toRadians(3 * meanH + 6)) - 0.2 * Math.cos(toRadians(4 * meanH - 63));
  const rotation = 30 * Math.exp(-__pow((meanH - 275) / 25, 2));
  const rotationC = 2 * Math.sqrt(__pow(meanC, 7) / (__pow(meanC, 7) + __pow(25, 7)));
  const scaleL = 1 + 0.015 * __pow(meanL - 50, 2) / Math.sqrt(20 + __pow(meanL - 50, 2));
  const scaleC = 1 + 0.045 * meanC;
  const scaleH = 1 + 0.015 * meanC * t;
  const rotationT = -Math.sin(toRadians(2 * rotation)) * rotationC;
  return Math.sqrt(
    __pow(deltaL / scaleL, 2) + __pow(deltaC / scaleC, 2) + __pow(deltaH / scaleH, 2) + rotationT * (deltaC / scaleC) * (deltaH / scaleH)
  );
};
var getClosestPaletteColor = (color) => {
  const target = (0, import_color.default)(color).lab().array();
  let closest = null;
  let closestDistance = Infinity;
  for (const { hex, lab } of PALETTE_LABS) {
    const distance = getColorDifference(target, lab);
    if (distance < closestDistance) {
      closest = hex;
      closestDistance = distance;
    }
  }
  return closest;
};
var getPaletteColorName = (color) => {
  var _a;
  return (_a = PALETTE_NAMES.get(color == null ? void 0 : color.toLowerCase())) != null ? _a : null;
};

// trabecula/utils/common/queue.ts
var CancelledError = class extends Error {
  constructor() {
    super("PromiseQueue cancelled");
    this.name = "CancelledError";
  }
};
var PromiseQueue = class {
  constructor({ concurrency = 1, delayRange } = {}) {
    __publicField(this, "cancelled", false);
    __publicField(this, "concurrency");
    __publicField(this, "delayRange");
    __publicField(this, "promise", null);
    __publicField(this, "queue", /* @__PURE__ */ new Set());
    __publicField(this, "resolver", null);
    __publicField(this, "runningCount", 0);
    if (!Number.isInteger(concurrency) || concurrency < 1)
      throw new RangeError("PromiseQueue concurrency must be a positive integer");
    this.concurrency = concurrency;
    this.delayRange = delayRange;
  }
  add(fn) {
    if (this.cancelled) return Promise.reject(new CancelledError());
    if (!this.promise) this.promise = new Promise((res) => this.resolver = res);
    return new Promise((resolve, reject) => {
      const task = () => __async(this, null, function* () {
        this.runningCount++;
        try {
          const result = yield fn();
          resolve(result);
        } catch (err) {
          reject(err);
        } finally {
          if (this.delayRange && !this.cancelled) yield sleep(...this.delayRange);
          this.runningCount--;
          queueMicrotask(() => this.next());
        }
      });
      this.queue.add({ cancel: () => reject(new CancelledError()), run: task });
      this.next();
    });
  }
  cancel() {
    if (this.cancelled) return;
    this.cancelled = true;
    for (const task of this.queue) task.cancel();
    this.queue.clear();
    this.next();
  }
  next() {
    for (const task of this.queue) {
      if (this.cancelled || this.runningCount >= this.concurrency) break;
      this.queue.delete(task);
      task.run();
    }
    if (!this.queue.size && this.runningCount === 0 && this.resolver) {
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

// trabecula/utils/common/selection.ts
var applySelectionChanges = (selectedIds, changes) => {
  const selected = new Set(selectedIds);
  for (const { id, isSelected } of changes) {
    if (isSelected) selected.add(id);
    else selected.delete(id);
  }
  return [...selected];
};
var getSelectionRange = ({
  clickedId,
  orderedIds,
  selectedIds
}) => {
  const indexes = new Map(orderedIds.map((id, index) => [id, index]));
  const clickedIndex = indexes.get(clickedId);
  const selectedIndexes = selectedIds.map((id) => indexes.get(id));
  let result;
  if (clickedIndex !== void 0 && selectedIndexes.every((index) => index !== void 0)) {
    if (!selectedIds.length) result = { idsToDeselect: [], idsToSelect: [clickedId] };
    else {
      const first = selectedIndexes.reduce((min, index) => Math.min(min, index), Infinity);
      const last = selectedIndexes.reduce((max, index) => Math.max(max, index), -Infinity);
      if (first === clickedIndex) result = { idsToDeselect: [clickedId], idsToSelect: [] };
      else {
        const start = Math.min(first, clickedIndex);
        const end = clickedIndex < first ? last : clickedIndex;
        const range2 = orderedIds.slice(start, end + 1);
        const rangeSet = new Set(range2);
        const selectedSet = new Set(selectedIds);
        result = {
          idsToDeselect: selectedIds.filter((id) => !rangeSet.has(id)),
          idsToSelect: range2.filter((id) => !selectedSet.has(id))
        };
      }
    }
  }
  return result;
};

// trabecula/utils/common/server-status.ts
var SERVER_STATUS_IPC = {
  changed: "server-status-changed",
  get: "getServerStatuses"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DENSE_FORM_ROW_HEIGHT,
  FORM_ROW_HEIGHT,
  Fmt,
  LOGICAL_OPS,
  PALETTE,
  PALETTE_SWATCHES,
  PromiseQueue,
  SERVER_STATUS_IPC,
  _CONSTANTS,
  applySelectionChanges,
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
  getClosestPaletteColor,
  getPaletteColorName,
  getSelectionRange,
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