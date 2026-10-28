import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "../../../chunk-DM4QYMVJ.mjs";

// trabecula/utils/server/mongo.ts
import { Types } from "mongoose";
function leanModelToJson(doc) {
  try {
    if (!doc) return null;
    const _a = doc, { _id, __v } = _a, rest = __objRest(_a, ["_id", "__v"]);
    return __spreadProps(__spreadValues({}, rest), { id: _id.toString() });
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
var objectId = (id) => new Types.ObjectId(id);
var objectIds = (ids) => ids.map(objectId);
export {
  leanModelToJson,
  objectId,
  objectIds
};
//# sourceMappingURL=index.mjs.map