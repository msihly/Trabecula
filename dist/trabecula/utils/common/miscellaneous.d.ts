import { cloneDeep as _cloneDeep, debounce as _debounce, isEqual as _isEqual, throttle as _throttle, toMerged as _toMerged } from "es-toolkit";
import { set as _set } from "es-toolkit/compat";
type IsPlainObject<T> = T extends object ? T extends any[] ? false : T extends Function ? false : true : false;
export type NestedKeys<T> = {
    [K in keyof T]: K extends string ? IsPlainObject<T[K]> extends true ? K | `${K}.${NestedKeys<T[K]>}` : K : never;
}[keyof T];
export declare const attempt: <T>(fn: () => Promise<T>, retries?: number, delay?: number) => Promise<T>;
export declare const convertNestedKeys: (updates: Record<string, any>) => Record<string, any>;
export declare const debounce: typeof _debounce;
export declare const deepClone: typeof _cloneDeep;
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export declare const deepMerge: typeof _toMerged;
export declare const handleErrors: <T>(fn: () => Promise<T>) => Promise<{
    data?: T;
    error?: string;
    success: boolean;
}>;
export declare const isDeepEqual: typeof _isEqual;
export declare const isObject: (item: any) => boolean;
export declare const rng: (min: number, max: number) => number;
export declare const setObj: typeof _set;
export declare const sleep: (min: number, max?: number) => Promise<unknown>;
export declare const throttle: typeof _throttle;
export declare const uuid: () => `${string}-${string}-${string}-${string}-${string}`;
export {};
