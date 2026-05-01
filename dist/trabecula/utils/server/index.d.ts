declare const checkFileExists: (path: string) => Promise<boolean>;
type TreeNode = {
    children: TreeNode[];
    name: string;
};
declare const createTree: (paths: string[]) => TreeNode[];
declare const dirToFilePaths: (dirPath: string, filterFn?: (filePath: string) => boolean) => Promise<string[]>;
declare const dirToFolderPaths: (dirPath: string) => Promise<string[]>;
declare const makeFolder: (path: string) => Promise<string>;
declare const removeEmptyFolders: (dirPath?: string, options?: {
    excludedPaths?: string[];
}) => Promise<void>;

export { type TreeNode, checkFileExists, createTree, dirToFilePaths, dirToFolderPaths, makeFolder, removeEmptyFolders };
