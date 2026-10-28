import { BufferToBinary, FlattenMaps, Types } from "mongoose";

export const leanModelToJson = <T>(
  doc: FlattenMaps<BufferToBinary<T>> & { __v?: number; _id: Types.ObjectId },
) => {
  try {
    if (!doc) return null;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, __v, ...rest } = doc;

    return { ...rest, id: _id.toString() } as unknown as T;
  } catch (err) {
    console.error(err.message);

    return null;
  }
};

export const objectId = (id: string) => new Types.ObjectId(id);

export const objectIds = (ids: string[]) => ids.map(objectId);
