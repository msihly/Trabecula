import {
  dayjs,
  handleErrors,
  round
} from "../../chunk-VYK6HHAI.mjs";
import {
  __async
} from "../../chunk-DM4QYMVJ.mjs";

// trabecula/utils/server/files.ts
import { promises as fs } from "fs";
import path from "path";
import { fdir } from "fdir";
import _md5File from "md5-file";
import trash from "trash";
var checkFileExists = (path3) => __async(null, null, function* () {
  return !!(yield fs.stat(path3).catch(() => false));
});
var createTreeNode = (dirPath, tree) => {
  const dirNames = path.normalize(dirPath).split(path.sep);
  const [rootDirName, ...remainingDirNames] = dirNames;
  const treeNode = tree.find((t) => t.name === rootDirName);
  if (!treeNode) tree.push({ name: rootDirName, children: [] });
  if (remainingDirNames.length > 0)
    createTreeNode(path.join(...remainingDirNames), (treeNode != null ? treeNode : tree[tree.length - 1]).children);
};
var createTree = (paths) => paths.reduce((acc, cur) => (createTreeNode(cur, acc), acc), []);
var deleteFile = (path3, copiedPath) => handleErrors(() => __async(null, null, function* () {
  if (!(yield checkFileExists(path3))) return false;
  if (copiedPath && !(yield checkFileExists(copiedPath)))
    throw new Error(
      `Failed to delete ${path3}. File does not exist at copied path ${copiedPath}.`
    );
  yield fs.unlink(path3);
  return true;
}));
var dirToFilePaths = (dirPath, filterFn) => __async(null, null, function* () {
  return yield filterFn ? new fdir().withFullPaths().filter(filterFn).crawl(dirPath).withPromise() : new fdir().withFullPaths().crawl(dirPath).withPromise();
});
var dirToFolderPaths = (dirPath) => __async(null, null, function* () {
  return (yield new fdir().onlyDirs().withFullPaths().crawl(dirPath).withPromise()).map((dir) => dir.split(path.sep).slice(0, -1).join(path.sep)).filter((dir) => path.normalize(dir) !== path.normalize(dirPath));
});
var extendFileName = (fileName, ext) => `${path.relative(".", fileName).replace(/\.\w+$/, "")}.${ext}`;
var makeFolder = (path3) => __async(null, null, function* () {
  return yield fs.mkdir(path3, { recursive: true });
});
var md5File = _md5File;
var removeEmptyFolders = (..._0) => __async(null, [..._0], function* (dirPath = ".", options = {}) {
  const dirPathsParts = [.../* @__PURE__ */ new Set([dirPath, ...yield dirToFolderPaths(dirPath)])].filter((p) => {
    var _a;
    return !((_a = options.excludedPaths) == null ? void 0 : _a.includes(p));
  }).map((p) => p.split(path.sep));
  const dirPathsDeepToShallow = [...dirPathsParts].sort((a, b) => b.length - a.length).map((p) => p.join(path.sep));
  const emptyFolders = /* @__PURE__ */ new Set();
  yield Promise.all(
    dirPathsDeepToShallow.map((dir) => __async(null, null, function* () {
      if ((yield dirToFilePaths(dir)).length === 0) emptyFolders.add(dir);
    }))
  );
  const rootDirsToEmpty = /* @__PURE__ */ new Set();
  for (const dir of dirPathsDeepToShallow) {
    if (emptyFolders.has(dir)) {
      const ancestors = dir.split(path.sep).slice(0, -1).map((_, i, parts) => parts.slice(0, i + 1).join(path.sep));
      if (!ancestors.some((a) => emptyFolders.has(a))) rootDirsToEmpty.add(dir);
    }
  }
  yield Promise.all(
    [...rootDirsToEmpty].map(
      (dir) => options.hardDelete ? fs.rm(dir, { recursive: true }) : trash(dir)
    )
  );
});

// trabecula/utils/server/logging.ts
import fs2 from "fs";
import fsPromises from "fs/promises";
import path2 from "path";
var logsPath;
var logStream = null;
var setLogsPath = (filePath) => __async(null, null, function* () {
  logsPath = path2.resolve(filePath);
  yield fsPromises.mkdir(path2.dirname(logsPath), { recursive: true });
  if (logStream) {
    logStream.end();
    logStream = null;
  }
  logStream = fs2.createWriteStream(logsPath, { flags: "a", encoding: "utf8" });
  logStream.on("error", (err) => {
    console.error("Log stream error:", err);
    logStream = null;
  });
});
var stringify = (args) => {
  try {
    if (Array.isArray(args)) return args.map((arg) => JSON.stringify(arg, null, 2)).join(" ");
    return JSON.stringify(args, null, 2);
  } catch (e) {
    return String(args);
  }
};
var fileLog = (args, options) => __async(null, null, function* () {
  var _a, _b;
  try {
    if (!logsPath) return console[(_a = options == null ? void 0 : options.type) != null ? _a : "debug"]("[LOG]", args);
    const timestamp = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const logType = ((_b = options == null ? void 0 : options.type) != null ? _b : "debug").toUpperCase();
    const logContent = `[${timestamp}] [${logType}] ${stringify(args)}
`;
    if (!logStream) yield setLogsPath(logsPath);
    if (!logStream.write(logContent))
      yield new Promise((resolve) => logStream.once("drain", () => resolve()));
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
export {
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
};
//# sourceMappingURL=index.mjs.map