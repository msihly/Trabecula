"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.logicOpsToMongo = exports.fractionStringToNumber = exports.durationToSeconds = exports.compareLogic = exports.compareLogicOps = exports.LOGICAL_OPS = void 0;
exports.LOGICAL_OPS = ["=", "!=", ">", ">=", "<", "<="];
const compareLogicOps = (operator, a, b) => {
    // prettier-ignore
    switch (operator) {
        case "=": return a === b;
        case "!=": return a !== b;
        case ">": return a > b;
        case ">=": return a >= b;
        case "<": return a < b;
        case "<=": return a <= b;
        default: return false;
    }
};
exports.compareLogicOps = compareLogicOps;
const compareLogic = (type, ...items) => type === "AND" ? items.every(Boolean) : type === "OR" ? items.some(Boolean) : null;
exports.compareLogic = compareLogic;
const durationToSeconds = (input) => {
    let total = 0;
    let match;
    const regex = /(\d+)([hms])/g;
    while ((match = regex.exec(input)) !== null) {
        const value = Number(match[1]);
        if (match[2] === "h")
            total += value * 3600;
        else if (match[2] === "m")
            total += value * 60;
        else if (match[2] === "s")
            total += value;
    }
    return total;
};
exports.durationToSeconds = durationToSeconds;
// prettier-ignore
const fractionStringToNumber = (str) => str.split("/").map((s) => +s).reduce((a, b) => a / b);
exports.fractionStringToNumber = fractionStringToNumber;
const logicOpsToMongo = (op) => {
    // prettier-ignore
    switch (op) {
        case "=": return "$eq";
        case "!=": return "$ne";
        case ">": return "$gt";
        case ">=": return "$gte";
        case "<": return "$lt";
        case "<=": return "$lte";
        default: return null;
    }
};
exports.logicOpsToMongo = logicOpsToMongo;
const round = (num, decimals = 2) => {
    const n = Math.pow(10, decimals);
    return Math.round((num + Number.EPSILON) * n) / n;
};
exports.round = round;
