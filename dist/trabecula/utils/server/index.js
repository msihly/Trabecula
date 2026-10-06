var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// trabecula/utils/server/index.ts
var server_exports = {};
__export(server_exports, {
  checkFileExists: () => checkFileExists,
  createTree: () => createTree,
  deleteFile: () => deleteFile,
  dirToFilePaths: () => dirToFilePaths,
  dirToFolderPaths: () => dirToFolderPaths,
  extendFileName: () => extendFileName,
  fileLog: () => fileLog,
  makeFolder: () => makeFolder,
  makePerfLog: () => makePerfLog,
  md5File: () => md5File,
  removeEmptyFolders: () => removeEmptyFolders,
  setLogsPath: () => setLogsPath
});
module.exports = __toCommonJS(server_exports);

// trabecula/utils/server/files.ts
var import_fs = require("fs");
var import_path = __toESM(require("path"));
var import_fdir = require("fdir");
var import_md5_file = __toESM(require("md5-file"));
var import_trash = __toESM(require("trash"));

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
var round = (num, decimals = 2) => {
  const n = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * n) / n;
};

// trabecula/utils/common/miscellaneous.ts
var import_es_toolkit = require("es-toolkit");
var import_compat = require("es-toolkit/compat");
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

// trabecula/utils/server/files.ts
var checkFileExists = (path3) => __async(null, null, function* () {
  return !!(yield import_fs.promises.stat(path3).catch(() => false));
});
var createTreeNode = (dirPath, tree) => {
  const dirNames = import_path.default.normalize(dirPath).split(import_path.default.sep);
  const [rootDirName, ...remainingDirNames] = dirNames;
  const treeNode = tree.find((t) => t.name === rootDirName);
  if (!treeNode) tree.push({ children: [], name: rootDirName });
  if (remainingDirNames.length > 0)
    createTreeNode(import_path.default.join(...remainingDirNames), (treeNode != null ? treeNode : tree[tree.length - 1]).children);
};
var createTree = (paths) => paths.reduce((acc, cur) => (createTreeNode(cur, acc), acc), []);
var deleteFile = (path3, copiedPath) => handleErrors(() => __async(null, null, function* () {
  if (!(yield checkFileExists(path3))) return false;
  if (copiedPath && !(yield checkFileExists(copiedPath)))
    throw new Error(
      `Failed to delete ${path3}. File does not exist at copied path ${copiedPath}.`
    );
  yield import_fs.promises.unlink(path3);
  return true;
}));
var dirToFilePaths = (dirPath, filterFn) => __async(null, null, function* () {
  return yield filterFn ? new import_fdir.fdir().withFullPaths().filter(filterFn).crawl(dirPath).withPromise() : new import_fdir.fdir().withFullPaths().crawl(dirPath).withPromise();
});
var dirToFolderPaths = (dirPath) => __async(null, null, function* () {
  return (yield new import_fdir.fdir().onlyDirs().withFullPaths().crawl(dirPath).withPromise()).map((dir) => dir.split(import_path.default.sep).slice(0, -1).join(import_path.default.sep)).filter((dir) => import_path.default.normalize(dir) !== import_path.default.normalize(dirPath));
});
var extendFileName = (fileName, ext) => `${import_path.default.relative(".", fileName).replace(/\.\w+$/, "")}.${ext}`;
var isWithinFolder = (parent, child) => {
  const relative = import_path.default.relative(parent, child);
  return !import_path.default.isAbsolute(relative) && relative !== ".." && !relative.startsWith(`..${import_path.default.sep}`);
};
var makeFolder = (path3) => __async(null, null, function* () {
  return yield import_fs.promises.mkdir(path3, { recursive: true });
});
var md5File = import_md5_file.default;
var removeEmptyFolders = (..._0) => __async(null, [..._0], function* (dirPath = ".", options = {}) {
  var _a;
  const excludedPaths = ((_a = options.excludedPaths) != null ? _a : []).map((excluded) => import_path.default.resolve(excluded));
  const rootDir = import_path.default.resolve(dirPath);
  const dirPathsDeepToShallow = [
    ...new Set([rootDir, ...yield dirToFolderPaths(rootDir)].map((dir) => import_path.default.resolve(dir)))
  ].filter(
    (dir) => isWithinFolder(rootDir, dir) && !excludedPaths.some(
      (excluded) => isWithinFolder(dir, excluded) || isWithinFolder(excluded, dir)
    )
  ).sort((a, b) => b.split(import_path.default.sep).length - a.split(import_path.default.sep).length);
  if (options.hardDelete) {
    for (const dir of dirPathsDeepToShallow) {
      try {
        yield import_fs.promises.rmdir(dir);
      } catch (error) {
        if (!["EEXIST", "ENOENT", "ENOTEMPTY"].includes(error.code)) throw error;
      }
    }
  } else {
    const emptyFolders = /* @__PURE__ */ new Set();
    for (const dir of dirPathsDeepToShallow) {
      const entries = yield import_fs.promises.readdir(dir, { withFileTypes: true });
      if (entries.every(
        (entry) => entry.isDirectory() && emptyFolders.has(import_path.default.join(dir, entry.name))
      ))
        emptyFolders.add(dir);
    }
    const rootDirsToEmpty = [...emptyFolders].filter((dir) => !emptyFolders.has(import_path.default.dirname(dir)));
    yield Promise.all(rootDirsToEmpty.map((dir) => (0, import_trash.default)(dir)));
  }
});

// trabecula/utils/server/logging.ts
var import_fs2 = __toESM(require("fs"));
var import_promises = __toESM(require("fs/promises"));
var import_path2 = __toESM(require("path"));
var logsPath;
var logStream = null;
var setLogsPath = (filePath) => __async(null, null, function* () {
  const nextLogsPath = import_path2.default.resolve(filePath);
  yield import_promises.default.mkdir(import_path2.default.dirname(nextLogsPath), { recursive: true });
  const previousStream = logStream;
  const stream = import_fs2.default.createWriteStream(nextLogsPath, { encoding: "utf8", flags: "a" });
  stream.on("error", (err) => {
    console.error("Log stream error:", err);
    if (logStream === stream) logStream = null;
  });
  logsPath = nextLogsPath;
  logStream = stream;
  previousStream == null ? void 0 : previousStream.end();
});
var stringify = (args) => {
  try {
    if (Array.isArray(args)) return args.map((arg) => JSON.stringify(arg, null, 2)).join(" ");
    else return JSON.stringify(args, null, 2);
  } catch (e) {
    return String(args);
  }
};
var fileLog = (args, options) => __async(null, null, function* () {
  var _a, _b;
  try {
    if (!logsPath) return console[(_a = options == null ? void 0 : options.type) != null ? _a : "debug"]("[LOG]", args);
    const timestamp = (0, import_dayjs.default)().format("YYYY-MM-DD HH:mm:ss");
    const logType = ((_b = options == null ? void 0 : options.type) != null ? _b : "debug").toUpperCase();
    const logContent = `[${timestamp}] [${logType}] ${stringify(args)}
`;
    if (!logStream) yield setLogsPath(logsPath);
    const stream = logStream;
    yield new Promise((resolve, reject) => {
      stream.write(logContent, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  } catch (err) {
    console.error("Failed to log to file:", err);
  }
});
var makePerfLog = (logTag, toFile = false) => {
  const funcPerfStart = performance.now();
  let perfStart = performance.now();
  const perfLog = (logStr) => {
    const str = `${logTag} ${round(performance.now() - perfStart, 0)} ms - ${logStr}`;
    toFile ? fileLog(str) : console.debug(str);
    perfStart = performance.now();
  };
  const perfLogTotal = (logStr) => {
    const str = `${logTag} Total: ${round(performance.now() - funcPerfStart, 0)} ms - ${logStr}`;
    toFile ? fileLog(str) : console.debug(str);
  };
  return { perfLog, perfLogTotal, perfStart };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkFileExists,
  createTree,
  deleteFile,
  dirToFilePaths,
  dirToFolderPaths,
  extendFileName,
  fileLog,
  makeFolder,
  makePerfLog,
  md5File,
  removeEmptyFolders,
  setLogsPath
});
//# sourceMappingURL=index.js.map