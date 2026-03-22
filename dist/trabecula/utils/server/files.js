import { promises as fs } from "fs";
import path from "path";
import { fdir } from "fdir";
export const checkFileExists = async (path) => !!(await fs.stat(path).catch(() => false));
const createTreeNode = (dirPath, tree) => {
    const dirNames = path.normalize(dirPath).split(path.sep);
    const [rootDirName, ...remainingDirNames] = dirNames;
    const treeNode = tree.find((t) => t.name === rootDirName);
    if (!treeNode)
        tree.push({ name: rootDirName, children: [] });
    if (remainingDirNames.length > 0)
        createTreeNode(path.join(...remainingDirNames), (treeNode ?? tree[tree.length - 1]).children);
};
export const createTree = (paths) => paths.reduce((acc, cur) => (createTreeNode(cur, acc), acc), []);
export const dirToFilePaths = async (dirPath, filterFn) => {
    return await (filterFn
        ? new fdir().withFullPaths().filter(filterFn).crawl(dirPath).withPromise()
        : new fdir().withFullPaths().crawl(dirPath).withPromise());
};
export const dirToFolderPaths = async (dirPath) => {
    return await new fdir().onlyDirs().withFullPaths().crawl(dirPath).withPromise();
};
export const makeFolder = async (path) => await fs.mkdir(path, { recursive: true });
export const removeEmptyFolders = async (dirPath = ".", options = {}) => {
    const dirPathsParts = [...new Set([dirPath, ...(await dirToFolderPaths(dirPath))])]
        .filter((p) => !options.excludedPaths?.includes(p))
        .map((p) => p.split(path.sep));
    const dirPathsDeepToShallow = [...dirPathsParts]
        .sort((a, b) => b.length - a.length)
        .map((p) => p.join(path.sep));
    const emptyFolders = new Set();
    await Promise.all(dirPathsDeepToShallow.map(async (dir) => {
        if ((await dirToFilePaths(dir)).length === 0)
            emptyFolders.add(dir);
    }));
    const rootDirsToEmpty = new Set();
    for (const dir of dirPathsDeepToShallow) {
        if (emptyFolders.has(dir)) {
            const parts = dir.split(path.sep);
            parts.pop();
            const ancestors = parts.map((_, i) => parts.slice(0, i + 1).join(path.sep));
            if (!ancestors.some((a) => emptyFolders.has(a)))
                rootDirsToEmpty.add(dir);
        }
    }
    await Promise.all([...rootDirsToEmpty].map((dir) => fs.rmdir(dir, { recursive: true })));
};
