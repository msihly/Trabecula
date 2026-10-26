declare const ROOT_PATH: string;
interface CreateFilesOptions {
    /** Replaces the default prettier pass, such as to apply lint fixes first. */
    format?: (str: string, filePath: string) => Promise<string>;
    /** Leaves files whose generated content has not changed untouched. */
    skipUnchanged?: boolean;
}
declare const createFiles: (folder: string, fileDefs: FileDef[], { format, skipUnchanged }?: CreateFilesOptions) => Promise<void>;
declare const formatFile: (str: string) => Promise<string>;
declare const makeIndexDef: (fileDefs: FileDef[]) => void;
declare const makeSectionComment: (sectionName: string) => string;
declare const parseExports: (filePath: string) => Promise<string[]>;
declare const parseExportsFromIndex: (indexFilePath: string) => Promise<string[]>;

declare const makeFilterQueryType: () => string;
/** Declares `trpc` and the `serverEndpoint` wrapper that a generated server router uses. */
declare const makeServerEndpointDefs: () => string;
declare const makeSocketDefs: ({ customEvents, modelNames, }: {
    customEvents: Array<{
        args?: string;
        name: string;
    }>;
    modelNames: string[];
}) => string;
/** Makes a store property's default, wrapping object, array and date defaults in a factory. */
declare const makeStoreDefaultValue: (prop: {
    defaultValue?: string;
    required?: boolean;
}) => string;

export { type CreateFilesOptions, ROOT_PATH, createFiles, formatFile, makeFilterQueryType, makeIndexDef, makeSectionComment, makeServerEndpointDefs, makeSocketDefs, makeStoreDefaultValue, parseExports, parseExportsFromIndex };
