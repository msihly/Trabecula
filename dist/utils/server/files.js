"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmptyFolders = exports.makeFolder = exports.dirToFolderPaths = exports.dirToFilePaths = exports.createTree = exports.checkFileExists = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const fdir_1 = require("fdir");
const checkFileExists = async (path) => !!(await fs_1.promises.stat(path).catch(() => false));
exports.checkFileExists = checkFileExists;
const createTreeNode = (dirPath, tree) => {
    const dirNames = path_1.default.normalize(dirPath).split(path_1.default.sep);
    const [rootDirName, ...remainingDirNames] = dirNames;
    const treeNode = tree.find((t) => t.name === rootDirName);
    if (!treeNode)
        tree.push({ name: rootDirName, children: [] });
    if (remainingDirNames.length > 0)
        createTreeNode(path_1.default.join(...remainingDirNames), (treeNode ?? tree[tree.length - 1]).children);
};
const createTree = (paths) => paths.reduce((acc, cur) => (createTreeNode(cur, acc), acc), []);
exports.createTree = createTree;
const dirToFilePaths = async (dirPath, filterFn) => {
    return await (filterFn
        ? new fdir_1.fdir().withFullPaths().filter(filterFn).crawl(dirPath).withPromise()
        : new fdir_1.fdir().withFullPaths().crawl(dirPath).withPromise());
};
exports.dirToFilePaths = dirToFilePaths;
const dirToFolderPaths = async (dirPath) => {
    return await new fdir_1.fdir().onlyDirs().withFullPaths().crawl(dirPath).withPromise();
};
exports.dirToFolderPaths = dirToFolderPaths;
const makeFolder = async (path) => await fs_1.promises.mkdir(path, { recursive: true });
exports.makeFolder = makeFolder;
const removeEmptyFolders = async (dirPath = ".", options = {}) => {
    const dirPathsParts = [...new Set([dirPath, ...(await (0, exports.dirToFolderPaths)(dirPath))])]
        .filter((p) => !options.excludedPaths?.includes(p))
        .map((p) => p.split(path_1.default.sep));
    const dirPathsDeepToShallow = [...dirPathsParts]
        .sort((a, b) => b.length - a.length)
        .map((p) => p.join(path_1.default.sep));
    const emptyFolders = new Set();
    await Promise.all(dirPathsDeepToShallow.map(async (dir) => {
        if ((await (0, exports.dirToFilePaths)(dir)).length === 0)
            emptyFolders.add(dir);
    }));
    const rootDirsToEmpty = new Set();
    for (const dir of dirPathsDeepToShallow) {
        if (emptyFolders.has(dir)) {
            const parts = dir.split(path_1.default.sep);
            parts.pop();
            const ancestors = parts.map((_, i) => parts.slice(0, i + 1).join(path_1.default.sep));
            if (!ancestors.some((a) => emptyFolders.has(a)))
                rootDirsToEmpty.add(dir);
        }
    }
    await Promise.all([...rootDirsToEmpty].map((dir) => fs_1.promises.rmdir(dir, { recursive: true })));
};
exports.removeEmptyFolders = removeEmptyFolders;
