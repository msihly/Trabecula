import {
  dayjs,
  handleErrors,
  round
} from "../../chunk-2UO6TGNC.mjs";
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
var isWithinFolder = (parent, child) => {
  const relative = path.relative(parent, child);
  return !path.isAbsolute(relative) && relative !== ".." && !relative.startsWith(`..${path.sep}`);
};
var makeFolder = (path3) => __async(null, null, function* () {
  return yield fs.mkdir(path3, { recursive: true });
});
var md5File = _md5File;
var removeEmptyFolders = (..._0) => __async(null, [..._0], function* (dirPath = ".", options = {}) {
  var _a;
  const excludedPaths = ((_a = options.excludedPaths) != null ? _a : []).map((excluded) => path.resolve(excluded));
  const rootDir = path.resolve(dirPath);
  const dirPathsDeepToShallow = [
    ...new Set([rootDir, ...yield dirToFolderPaths(rootDir)].map((dir) => path.resolve(dir)))
  ].filter(
    (dir) => isWithinFolder(rootDir, dir) && !excludedPaths.some(
      (excluded) => isWithinFolder(dir, excluded) || isWithinFolder(excluded, dir)
    )
  ).sort((a, b) => b.split(path.sep).length - a.split(path.sep).length);
  if (options.hardDelete) {
    for (const dir of dirPathsDeepToShallow) {
      try {
        yield fs.rmdir(dir);
      } catch (error) {
        if (!["EEXIST", "ENOENT", "ENOTEMPTY"].includes(error.code)) throw error;
      }
    }
  } else {
    const emptyFolders = /* @__PURE__ */ new Set();
    for (const dir of dirPathsDeepToShallow) {
      const entries = yield fs.readdir(dir, { withFileTypes: true });
      if (entries.every(
        (entry) => entry.isDirectory() && emptyFolders.has(path.join(dir, entry.name))
      ))
        emptyFolders.add(dir);
    }
    const rootDirsToEmpty = [...emptyFolders].filter((dir) => !emptyFolders.has(path.dirname(dir)));
    yield Promise.all(rootDirsToEmpty.map((dir) => trash(dir)));
  }
});

// trabecula/utils/server/logging.ts
import fs2 from "fs";
import fsPromises from "fs/promises";
import path2 from "path";
var logsPath;
var logStream = null;
var setLogsPath = (filePath) => __async(null, null, function* () {
  const nextLogsPath = path2.resolve(filePath);
  yield fsPromises.mkdir(path2.dirname(nextLogsPath), { recursive: true });
  const previousStream = logStream;
  const stream = fs2.createWriteStream(nextLogsPath, { encoding: "utf8", flags: "a" });
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