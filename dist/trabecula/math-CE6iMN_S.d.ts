declare const LOGICAL_OPS: readonly ["=", "!=", ">", ">=", "<", "<="];
type LogicalOp = (typeof LOGICAL_OPS)[number];
declare const compareLogicOps: (operator: LogicalOp, a: number, b: number) => boolean;
declare const compareLogic: (type: "AND" | "OR", ...items: any[]) => boolean;
declare const durationRegex: RegExp;
declare const durationToSeconds: (input: string) => number;
declare const fractionStringToNumber: (str: string) => number;
declare const logicOpsToMongo: (op: LogicalOp | "") => "$eq" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte";
declare const round: (num: number, decimals?: number) => number;
declare const secondsToDuration: (input: number) => string;

export { LOGICAL_OPS as L, type LogicalOp as a, compareLogicOps as b, compareLogic as c, durationRegex as d, durationToSeconds as e, fractionStringToNumber as f, logicOpsToMongo as l, round as r, secondsToDuration as s };
