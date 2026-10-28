import { BufferToBinary, FlattenMaps, Types } from "mongoose";

interface LeanFields {
  __v?: number;
  _id: Types.ObjectId;
}

/** The second signature accepts lean results for an explicit `T`, which report Buffer paths as `Binary`. */
export function leanModelToJson<T>(doc: T & LeanFields): T;
export function leanModelToJson<T>(doc: FlattenMaps<BufferToBinary<T>> & LeanFields): T;
export function leanModelToJson<T>(doc: LeanFields): T {
  try {
    if (!doc) return null;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, __v, ...rest } = doc;

    return { ...rest, id: _id.toString() } as unknown as T;
  } catch (err) {
    console.error(err.message);

    return null;
  }
}

export const objectId = (id: string) => new Types.ObjectId(id);

export const objectIds = (ids: string[]) => ids.map(objectId);
