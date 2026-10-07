import { Dirent, promises as fs } from "fs";
import path from "path";
import { fdir } from "fdir";
import _md5File from "md5-file";
import trash from "trash";
import { handleErrors } from "trabecula/utils/common";

export const checkFileExists = async (path: string) => !!(await fs.stat(path).catch(() => false));

export type TreeNode = { children: TreeNode[]; name: string };

const createTreeNode = (dirPath: string, tree: TreeNode[]) => {
  const dirNames = path.normalize(dirPath).split(path.sep) as string[];
  const [rootDirName, ...remainingDirNames] = dirNames;
  const treeNode = tree.find((t) => t.name === rootDirName);

  if (!treeNode) tree.push({ children: [], name: rootDirName });

  if (remainingDirNames.length > 0)
    createTreeNode(path.join(...remainingDirNames), (treeNode ?? tree[tree.length - 1]).children);
};

export const createTree = (paths: string[]): TreeNode[] =>
  paths.reduce((acc, cur) => (createTreeNode(cur, acc), acc), []);

export const deleteFile = (path: string, copiedPath?: string) =>
  handleErrors(async () => {
    if (!(await checkFileExists(path))) return false;

    if (copiedPath && !(await checkFileExists(copiedPath)))
      throw new Error(
        `Failed to delete ${path}. File does not exist at copied path ${copiedPath}.`,
      );

    await fs.unlink(path);

    return true;
  });

export const dirToFilePaths = async (
  dirPath: string,
  filterFn?: (filePath: string) => boolean,
): Promise<string[]> => {
  return await (filterFn
    ? new fdir().withFullPaths().filter(filterFn).crawl(dirPath).withPromise()
    : new fdir().withFullPaths().crawl(dirPath).withPromise());
};

export const dirToFolderPaths = async (dirPath: string): Promise<string[]> => {
  return (await new fdir().onlyDirs().withFullPaths().crawl(dirPath).withPromise())
    .map((dir) => dir.split(path.sep).slice(0, -1).join(path.sep))
    .filter((dir) => path.normalize(dir) !== path.normalize(dirPath));
};

export const extendFileName = (fileName: string, ext: string) =>
  `${path.relative(".", fileName).replace(/\.\w+$/, "")}.${ext}`;

const isWithinFolder = (parent: string, child: string) => {
  const relative = path.relative(parent, child);

  return !path.isAbsolute(relative) && relative !== ".." && !relative.startsWith(`..${path.sep}`);
};

export const makeFolder = async (path: string) => await fs.mkdir(path, { recursive: true });

export const md5File = _md5File;

export const removeEmptyFolders = async (
  dirPath: string = ".",
  options: { excludedPaths?: string[]; hardDelete?: boolean } = {},
) => {
  const excludedPaths = (options.excludedPaths ?? []).map((excluded) => path.resolve(excluded));
  const rootDir = path.resolve(dirPath);
  const dirPathsDeepToShallow = [
    ...new Set([rootDir, ...(await dirToFolderPaths(rootDir))].map((dir) => path.resolve(dir))),
  ]
    .filter(
      (dir) =>
        isWithinFolder(rootDir, dir) &&
        !excludedPaths.some(
          (excluded) => isWithinFolder(dir, excluded) || isWithinFolder(excluded, dir),
        ),
    )
    .sort((a, b) => b.split(path.sep).length - a.split(path.sep).length);

  if (options.hardDelete) {
    for (const dir of dirPathsDeepToShallow) {
      try {
        await fs.rmdir(dir);
      } catch (error) {
        if (!["EEXIST", "ENOENT", "ENOTEMPTY"].includes(error.code)) throw error;
      }
    }
  } else {
    const emptyFolders = new Set<string>();

    for (const dir of dirPathsDeepToShallow) {
      let entries: Dirent[];

      try {
        entries = await fs.readdir(dir, { withFileTypes: true });
      } catch (error) {
        if (error.code === "ENOENT") continue;
        throw error;
      }

      if (
        entries.every(
          (entry) => entry.isDirectory() && emptyFolders.has(path.join(dir, entry.name)),
        )
      )
        emptyFolders.add(dir);
    }

    const rootDirsToEmpty = [...emptyFolders].filter((dir) => !emptyFolders.has(path.dirname(dir)));

    await Promise.all(rootDirsToEmpty.map((dir) => trash(dir)));
  }
};
