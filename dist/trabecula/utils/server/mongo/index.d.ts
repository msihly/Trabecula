import { FlattenMaps, BufferToBinary, Types } from 'mongoose';

declare const leanModelToJson: <T>(doc: FlattenMaps<BufferToBinary<T>> & {
    __v?: number;
    _id: Types.ObjectId;
}) => T;
declare const objectId: (id: string) => Types.ObjectId;
declare const objectIds: (ids: string[]) => Types.ObjectId[];

export { leanModelToJson, objectId, objectIds };
