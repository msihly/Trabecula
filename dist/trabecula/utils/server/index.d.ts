declare const checkFileExists: (path: string) => Promise<boolean>;
type TreeNode = {
    children: TreeNode[];
    name: string;
};
declare const createTree: (paths: string[]) => TreeNode[];
declare const deleteFile: (path: string, copiedPath?: string) => Promise<{
    data?: boolean;
    error?: string;
    success: boolean;
}>;
declare const dirToFilePaths: (dirPath: string, filterFn?: (filePath: string) => boolean) => Promise<string[]>;
declare const dirToFolderPaths: (dirPath: string) => Promise<string[]>;
declare const extendFileName: (fileName: string, ext: string) => string;
declare const makeFolder: (path: string) => Promise<string>;
declare const md5File: ((path: string) => Promise<string>) & {
    sync: (path: string) => string;
};
declare const removeEmptyFolders: (dirPath?: string, options?: {
    excludedPaths?: string[];
    hardDelete?: boolean;
}) => Promise<void>;

declare const setLogsPath: (filePath: string) => Promise<void>;
declare const fileLog: (args: any | any[], options?: {
    type: "debug" | "error" | "warn";
}) => Promise<void>;
declare const makePerfLog: (logTag: string, toFile?: boolean) => {
    perfLog: (logStr: string) => void;
    perfLogTotal: (logStr: string) => void;
    perfStart: number;
};

export { type TreeNode, checkFileExists, createTree, deleteFile, dirToFilePaths, dirToFolderPaths, extendFileName, fileLog, makeFolder, makePerfLog, md5File, removeEmptyFolders, setLogsPath };
