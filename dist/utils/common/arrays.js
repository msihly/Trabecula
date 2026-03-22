"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueArrayMerge = exports.uniqueArrayFilter = exports.sumArray = exports.splitArray = exports.sortArray = exports.rotateArrayPos = exports.range = exports.objectToFloat32Array = exports.getArrayDiff = exports.countItems = exports.chunkArray = exports.centeredSlice = exports.bisectArrayChanges = exports.arrayIntersect = void 0;
const arrayIntersect = (...arrays) => [...arrays].reduce((acc, cur) => acc.filter((e) => cur.includes(e)));
exports.arrayIntersect = arrayIntersect;
const bisectArrayChanges = (oldArr, newArr) => {
    if (!oldArr || !newArr)
        return { added: [], removed: [] };
    else
        return (0, exports.getArrayDiff)(oldArr, newArr).reduce((acc, cur) => {
            acc[newArr.includes(cur) ? "added" : "removed"].push(cur);
            return acc;
        }, { added: [], removed: [] });
};
exports.bisectArrayChanges = bisectArrayChanges;
const centeredSlice = (arr, indexToCenter, maxCount) => {
    if (!arr || indexToCenter < 0 || indexToCenter > arr.length - 1)
        return null;
    const count = Math.min(arr.length, maxCount ?? arr.length);
    const delta = Math.floor(count / 2);
    const isEven = count % 2 === 0;
    const startIndex = indexToCenter - delta;
    const left = startIndex < 0
        ? [...arr.slice(startIndex), ...arr.slice(0, indexToCenter)]
        : arr.slice(startIndex, indexToCenter);
    const endIndex = indexToCenter + delta;
    const right = endIndex > arr.length - 1
        ? [
            ...arr.slice(indexToCenter + 1, arr.length),
            ...arr.slice(0, Math.abs(arr.length - (isEven ? 0 : 1) - endIndex)),
        ]
        : arr.slice(indexToCenter + 1, endIndex + (isEven ? 0 : 1));
    return [...left, arr[indexToCenter], ...right];
};
exports.centeredSlice = centeredSlice;
const chunkArray = (arr, size) => [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));
exports.chunkArray = chunkArray;
const countItems = (arr) => {
    const map = arr.reduce((acc, cur) => {
        const group = acc.find((e) => e.value === cur);
        if (!group)
            acc.push({ value: cur, count: 1 });
        else
            group.count += 1;
        return acc;
    }, []);
    return (0, exports.sortArray)(map, "count", true, true);
};
exports.countItems = countItems;
const getArrayDiff = (a, b) => [
    ...a.filter((e) => !b.includes(e)),
    ...b.filter((e) => !a.includes(e)),
];
exports.getArrayDiff = getArrayDiff;
const objectToFloat32Array = (obj) => new Float32Array(Object.values(obj));
exports.objectToFloat32Array = objectToFloat32Array;
const range = (length) => [...Array(length).keys()];
exports.range = range;
const rotateArrayPos = (direction, current, length) => {
    if (direction === "next")
        return current + 1 < length ? current + 1 : 0;
    else if (direction === "prev")
        return current - 1 >= 0 ? current - 1 : length - 1;
};
exports.rotateArrayPos = rotateArrayPos;
const sortArray = (arr, key, isDesc = true, isNumber = false) => {
    if (!arr?.length)
        return [];
    const sortFn = (a, b) => {
        const first = a[key] ?? (isNumber ? 0 : "");
        const second = b[key] ?? (isNumber ? 0 : "");
        const comparison = isNumber ? second - first : String(second).localeCompare(String(first));
        return isDesc ? comparison : comparison * -1;
    };
    return [...arr].sort(sortFn);
};
exports.sortArray = sortArray;
/** @return [falsy values, truthy values] */
const splitArray = (arr, filterFn) => arr.reduce((acc, cur) => (acc[+!filterFn(cur)].push(cur), acc), [[], []]);
exports.splitArray = splitArray;
const sumArray = (arr, fn) => arr.reduce((acc, cur) => (acc += fn(cur)), 0);
exports.sumArray = sumArray;
const uniqueArrayFilter = (...arrays) => {
    const all = [].concat(...arrays);
    const nonUnique = all.filter(((set) => (value) => set.has(value) || !set.add(value))(new Set()));
    return all.filter((e) => !nonUnique.includes(e));
};
exports.uniqueArrayFilter = uniqueArrayFilter;
const uniqueArrayMerge = (oldArray, newArrays) => [
    ...new Set([...new Set(oldArray), ...[].concat(...newArrays)]),
];
exports.uniqueArrayMerge = uniqueArrayMerge;
