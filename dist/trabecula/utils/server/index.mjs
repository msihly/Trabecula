import {
  handleErrors
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
  return (yield new fdir().onlyDirs().withFullPaths().crawl(dirPath).withPromise()).map((dir) => dir.split(path.sep).slice(0, -1).join(path.sep)).filter((dir) => path.normalize(dir) !== path.normalize(dirPath));
});
var extendFileName = (fileName, ext) => `${path.relative(".", fileName).replace(/\.\w+$/, "")}.${ext}`;
var makeFolder = (path2) => __async(null, null, function* () {
  return yield fs.mkdir(path2, { recursive: true });
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