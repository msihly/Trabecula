export declare const ROOT_PATH: string;
export declare const createFiles: (folder: string, fileDefs: FileDef[]) => Promise<void>;
export declare const formatFile: (str: string) => Promise<string>;
export declare const makeIndexDef: (fileDefs: FileDef[]) => void;
export declare const makeSectionComment: (sectionName: string) => string;
export declare const parseExports: (filePath: string) => Promise<string[]>;
export declare const parseExportsFromIndex: (indexFilePath: string) => Promise<string[]>;
