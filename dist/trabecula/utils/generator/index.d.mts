declare const ROOT_PATH: string;
declare const createFiles: (folder: string, fileDefs: FileDef[]) => Promise<void>;
declare const formatFile: (str: string) => Promise<string>;
declare const makeIndexDef: (fileDefs: FileDef[]) => void;
declare const makeSectionComment: (sectionName: string) => string;
declare const parseExports: (filePath: string) => Promise<string[]>;
declare const parseExportsFromIndex: (indexFilePath: string) => Promise<string[]>;

export { ROOT_PATH, createFiles, formatFile, makeIndexDef, makeSectionComment, parseExports, parseExportsFromIndex };
