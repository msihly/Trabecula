export declare const checkFileExists: (path: string) => Promise<boolean>;
export type TreeNode = {
    children: TreeNode[];
    name: string;
};
export declare const createTree: (paths: string[]) => TreeNode[];
export declare const dirToFilePaths: (dirPath: string, filterFn?: (filePath: string) => boolean) => Promise<string[]>;
export declare const dirToFolderPaths: (dirPath: string) => Promise<string[]>;
export declare const makeFolder: (path: string) => Promise<string>;
export declare const removeEmptyFolders: (dirPath?: string, options?: {
    excludedPaths?: string[];
}) => Promise<void>;
