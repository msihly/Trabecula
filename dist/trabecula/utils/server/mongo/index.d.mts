import { Types, FlattenMaps, BufferToBinary } from 'mongoose';

interface LeanFields {
    __v?: number;
    _id: Types.ObjectId;
}
/** The second signature accepts lean results for an explicit `T`, which report Buffer paths as `Binary`. */
declare function leanModelToJson<T>(doc: T & LeanFields): T;
declare function leanModelToJson<T>(doc: FlattenMaps<BufferToBinary<T>> & LeanFields): T;
declare const objectId: (id: string) => Types.ObjectId;
declare const objectIds: (ids: string[]) => Types.ObjectId[];

export { leanModelToJson, objectId, objectIds };
