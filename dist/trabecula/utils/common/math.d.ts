export declare const LOGICAL_OPS: readonly ["=", "!=", ">", ">=", "<", "<="];
export type LogicalOp = (typeof LOGICAL_OPS)[number];
export declare const compareLogicOps: (operator: LogicalOp, a: number, b: number) => boolean;
export declare const compareLogic: (type: "AND" | "OR", ...items: any[]) => boolean;
export declare const durationToSeconds: (input: string) => number;
export declare const fractionStringToNumber: (str: string) => number;
export declare const logicOpsToMongo: (op: LogicalOp | "") => "$eq" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte";
export declare const round: (num: number, decimals?: number) => number;
