export declare const getLogsPath: () => string;
export declare const setLogsPath: (filePath: string) => Promise<void>;
export declare const fileLog: (args: any | any[], options?: {
    type: "debug" | "error" | "warn";
}) => Promise<void>;
export declare const makePerfLog: (logTag: string, toFile?: boolean) => {
    perfLog: (logStr: string) => void;
    perfLogTotal: (logStr: string) => void;
    perfStart: number;
};
