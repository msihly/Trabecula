import {
  handleErrors
} from "../../chunk-W2EJFMFX.mjs";
import {
  __async,
  __commonJS,
  __require,
  __toESM
} from "../../chunk-A2APWHWI.mjs";

// node_modules/md5-file/index.js
var require_md5_file = __commonJS({
  "node_modules/md5-file/index.js"(exports, module) {
    var crypto = __require("crypto");
    var fs2 = __require("fs");
    var BUFFER_SIZE = 8192;
    function md5FileSync(path2) {
      const fd = fs2.openSync(path2, "r");
      const hash = crypto.createHash("md5");
      const buffer = Buffer.alloc(BUFFER_SIZE);
      try {
        let bytesRead;
        do {
          bytesRead = fs2.readSync(fd, buffer, 0, BUFFER_SIZE);
          hash.update(buffer.slice(0, bytesRead));
        } while (bytesRead === BUFFER_SIZE);
      } finally {
        fs2.closeSync(fd);
      }
      return hash.digest("hex");
    }
    function md5File2(path2) {
      return new Promise((resolve, reject) => {
        const output = crypto.createHash("md5");
        const input = fs2.createReadStream(path2);
        input.on("error", (err) => {
          reject(err);
        });
        output.once("readable", () => {
          resolve(output.read().toString("hex"));
        });
        input.pipe(output);
      });
    }
    module.exports = md5File2;
    module.exports.sync = md5FileSync;
  }
});

// trabecula/utils/server/files.ts
var import_md5_file = __toESM(require_md5_file());
import { promises as fs } from "fs";
import path from "path";
import { fdir } from "fdir";
import trash from "trash";
var checkFileExists = (path2) => __async(null, null, function* () {
  return !!(yield fs.stat(path2).catch(() => false));
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
var deleteFile = (path2, copiedPath) => handleErrors(() => __async(null, null, function* () {
  if (!(yield checkFileExists(path2))) return false;
  if (copiedPath && !(yield checkFileExists(copiedPath)))
    throw new Error(
      `Failed to delete ${path2}. File does not exist at copied path ${copiedPath}.`
    );
  yield fs.unlink(path2);
  return true;
}));
var dirToFilePaths = (dirPath, filterFn) => __async(null, null, function* () {
  return yield filterFn ? new fdir().withFullPaths().filter(filterFn).crawl(dirPath).withPromise() : new fdir().withFullPaths().crawl(dirPath).withPromise();
});
var dirToFolderPaths = (dirPath) => __async(null, null, function* () {
  return yield new fdir().onlyDirs().withFullPaths().crawl(dirPath).withPromise();
});
var extendFileName = (fileName, ext) => `${path.relative(".", fileName).replace(/\.\w+$/, "")}.${ext}`;
var makeFolder = (path2) => __async(null, null, function* () {
  return yield fs.mkdir(path2, { recursive: true });
});
var md5File = import_md5_file.default;
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
      const parts = dir.split(path.sep);
      parts.pop();
      const ancestors = parts.map((_, i) => parts.slice(0, i + 1).join(path.sep));
      if (!ancestors.some((a) => emptyFolders.has(a))) rootDirsToEmpty.add(dir);
    }
  }
  yield Promise.all(
    [...rootDirsToEmpty].map(
      (dir) => options.hardDelete ? fs.rm(dir, { recursive: true }) : trash(dir)
    )
  );
});
export {
  checkFileExists,
  createTree,
  deleteFile,
  dirToFilePaths,
  dirToFolderPaths,
  extendFileName,
  makeFolder,
  md5File,
  removeEmptyFolders
};
//# sourceMappingURL=index.mjs.map