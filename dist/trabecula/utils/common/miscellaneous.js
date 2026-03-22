import { cloneDeep as _cloneDeep, debounce as _debounce, isEqual as _isEqual, throttle as _throttle, toMerged as _toMerged, } from "es-toolkit";
import { set as _set } from "es-toolkit/compat";
import { v4 as uuidv4 } from "uuid";
export const attempt = async (fn, retries = 2, delay = 1000) => retries > 0
    ? await fn().catch(async (error) => {
        console.error(`Function failed, error: ${error}. Retrying after ${delay}ms...`);
        return sleep(delay).then(() => attempt(fn, retries - 1, delay));
    })
    : fn();
export const convertNestedKeys = (updates) => {
    return Object.entries(updates).reduce((acc, [key, value]) => {
        key.split(".").reduce((nested, k, i, arr) => {
            return nested[k] || (nested[k] = i === arr.length - 1 ? value : {});
        }, acc);
        return acc;
    }, {});
};
export const debounce = _debounce;
export const deepClone = _cloneDeep;
export const deepMerge = _toMerged;
export const handleErrors = async (fn) => {
    try {
        return { success: true, data: await fn() };
    }
    catch (err) {
        const errorStr = err instanceof Error ? (err.stack ?? err.message) : String(err);
        console.error(errorStr);
        return { success: false, error: errorStr };
    }
};
export const isDeepEqual = _isEqual;
export const isObject = (item) => item && typeof item === "object" && !Array.isArray(item);
export const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const setObj = _set;
export const sleep = (min, max) => new Promise((resolve) => setTimeout(resolve, max > 0 ? rng(min, max) : min));
export const throttle = _throttle;
export const uuid = () => uuidv4();
