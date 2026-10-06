export const arrayIntersect = <T>(...arrays: T[][]): T[] => {
  const [first = [], ...rest] = arrays;

  return rest.reduce((acc, cur) => {
    const values = new Set(cur);

    return acc.filter((value) => values.has(value));
  }, first);
};

export const bisectArrayChanges = <T>(oldArr: T[], newArr: T[]) => {
  if (!oldArr || !newArr) return { added: [], removed: [] };
  else {
    const newValues = new Set(newArr);
    const oldValues = new Set(oldArr);

    return {
      added: newArr.filter((value) => !oldValues.has(value)),
      removed: oldArr.filter((value) => !newValues.has(value)),
    };
  }
};

export const centeredSlice = <T>(arr: T[], indexToCenter: number, maxCount?: number): T[] => {
  if (!arr || indexToCenter < 0 || indexToCenter > arr.length - 1) return null;

  const count = Math.min(arr.length, maxCount ?? arr.length);
  const delta = Math.floor(count / 2);
  const isEven = count % 2 === 0;

  const startIndex = indexToCenter - delta;
  const left =
    startIndex < 0
      ? [...arr.slice(startIndex), ...arr.slice(0, indexToCenter)]
      : arr.slice(startIndex, indexToCenter);

  const endIndex = indexToCenter + delta;
  const right =
    endIndex > arr.length - 1
      ? [
          ...arr.slice(indexToCenter + 1, arr.length),
          ...arr.slice(0, Math.abs(arr.length - (isEven ? 0 : 1) - endIndex)),
        ]
      : arr.slice(indexToCenter + 1, endIndex + (isEven ? 0 : 1));

  return [...left, arr[indexToCenter], ...right];
};

export const chunkArray = <T>(arr: T[], size: number): T[][] =>
  [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));

interface CountItemsResult<T> {
  count: number;
  value: T;
}

export const countItems = <T>(arr: T[]): CountItemsResult<T>[] => {
  const counts = new Map<T, CountItemsResult<T>>();
  const groups: CountItemsResult<T>[] = [];

  arr.forEach((value) => {
    const group = counts.get(value);

    if (group) group.count++;
    else {
      const next = { count: 1, value };

      groups.push(next);

      if (!Number.isNaN(value)) counts.set(value, next);
    }
  });

  return sortArray(groups, "count", true, true);
};

export const getArrayDiff = <T>(a: T[], b: T[]): T[] => {
  const { added, removed } = bisectArrayChanges(a, b);

  return [...removed, ...added];
};

export const objectToFloat32Array = (obj: object) => new Float32Array(Object.values(obj));

export const range = (length: number, start: number = 0) =>
  Array(length)
    .fill("")
    .map((_, i) => start + i);

export const rotateArrayPos = (direction: "prev" | "next", current: number, length: number) => {
  if (direction === "next") return current + 1 < length ? current + 1 : 0;
  else if (direction === "prev") return current - 1 >= 0 ? current - 1 : length - 1;
};

export const sortArray = <T>(arr: T[], key: string, isDesc = true, isNumber = false): T[] => {
  if (!arr?.length) return [];

  const sortFn = (a: T, b: T) => {
    const first = a[key] ?? (isNumber ? 0 : "");
    const second = b[key] ?? (isNumber ? 0 : "");

    const comparison = isNumber ? second - first : String(second).localeCompare(String(first));

    return isDesc ? comparison : comparison * -1;
  };

  return [...arr].sort(sortFn);
};

/** @return [truthy values, falsy values] */
export const splitArray = <T>(arr: T[], filterFn: (element: T) => boolean): T[][] =>
  arr.reduce((acc, cur) => (acc[+!filterFn(cur)].push(cur), acc), [[], []]);

export const sumArray = <T>(arr: T[], fn: (num: T) => number) =>
  arr.reduce((acc, cur) => (acc += fn(cur)), 0);

export const uniqueArrayFilter = <T>(...arrays: T[][]): T[] => {
  const all = arrays.flat();
  const duplicates = new Set<T>();
  const seen = new Set<T>();

  for (const value of all) {
    if (seen.has(value)) duplicates.add(value);
    else seen.add(value);
  }

  return all.filter((value) => !duplicates.has(value));
};

export const uniqueArrayMerge = <T>(oldArray: T[], newArrays: T[]): T[] => [
  ...new Set([...oldArray, ...[].concat(...newArrays)]),
];
