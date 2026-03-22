"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = exports.throttle = exports.sleep = exports.setObj = exports.rng = exports.isObject = exports.isDeepEqual = exports.handleErrors = exports.deepMerge = exports.deepClone = exports.debounce = exports.convertNestedKeys = exports.attempt = void 0;
const es_toolkit_1 = require("es-toolkit");
const compat_1 = require("es-toolkit/compat");
const attempt = async (fn, retries = 2, delay = 1000) => retries > 0
    ? await fn().catch(async (error) => {
        console.error(`Function failed, error: ${error}. Retrying after ${delay}ms...`);
        return (0, exports.sleep)(delay).then(() => (0, exports.attempt)(fn, retries - 1, delay));
    })
    : fn();
exports.attempt = attempt;
const convertNestedKeys = (updates) => {
    return Object.entries(updates).reduce((acc, [key, value]) => {
        key.split(".").reduce((nested, k, i, arr) => {
            return nested[k] || (nested[k] = i === arr.length - 1 ? value : {});
        }, acc);
        return acc;
    }, {});
};
exports.convertNestedKeys = convertNestedKeys;
exports.debounce = es_toolkit_1.debounce;
exports.deepClone = es_toolkit_1.cloneDeep;
exports.deepMerge = es_toolkit_1.toMerged;
const handleErrors = async (fn) => {
    try {
        return { success: true, data: await fn() };
    }
    catch (err) {
        const errorStr = err instanceof Error ? (err.stack ?? err.message) : String(err);
        console.error(errorStr);
        return { success: false, error: errorStr };
    }
};
exports.handleErrors = handleErrors;
exports.isDeepEqual = es_toolkit_1.isEqual;
const isObject = (item) => item && typeof item === "object" && !Array.isArray(item);
exports.isObject = isObject;
const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.rng = rng;
exports.setObj = compat_1.set;
const sleep = (min, max) => new Promise((resolve) => setTimeout(resolve, max > 0 ? (0, exports.rng)(min, max) : min));
exports.sleep = sleep;
exports.throttle = es_toolkit_1.throttle;
const uuid = () => crypto.randomUUID();
exports.uuid = uuid;
