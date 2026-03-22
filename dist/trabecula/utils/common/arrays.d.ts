export declare const arrayIntersect: <T>(...arrays: T[][]) => T[];
export declare const bisectArrayChanges: <T>(oldArr: T[], newArr: T[]) => {
    added: T[];
    removed: T[];
};
export declare const centeredSlice: <T>(arr: T[], indexToCenter: number, maxCount?: number) => T[];
export declare const chunkArray: <T>(arr: T[], size: number) => T[][];
interface CountItemsResult<T> {
    value: T;
    count: number;
}
export declare const countItems: <T>(arr: T[]) => CountItemsResult<T>[];
export declare const getArrayDiff: <T>(a: T[], b: T[]) => T[];
export declare const objectToFloat32Array: (obj: object) => Float32Array;
export declare const range: (length: number) => number[];
export declare const rotateArrayPos: (direction: "prev" | "next", current: number, length: number) => number;
export declare const sortArray: <T>(arr: T[], key: string, isDesc?: boolean, isNumber?: boolean) => T[];
/** @return [falsy values, truthy values] */
export declare const splitArray: <T>(arr: T[], filterFn: (element: T) => boolean) => T[][];
export declare const sumArray: <T>(arr: T[], fn: (num: T) => number) => number;
export declare const uniqueArrayFilter: <T>(...arrays: T[][]) => T[];
export declare const uniqueArrayMerge: <T>(oldArray: T[], newArrays: T[]) => T[];
export {};
