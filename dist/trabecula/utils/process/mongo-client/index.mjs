import {
  checkServerShutdown,
  reportStartupProgress
} from "../../../chunk-KOPTVBCS.mjs";
import "../../../chunk-C43CDQ55.mjs";
import "../../../chunk-B3ID2K5C.mjs";
import {
  __async
} from "../../../chunk-5Q6I7MMU.mjs";

// trabecula/utils/process/mongo-client.ts
import Mongoose from "mongoose";
var connectMongoPrimary = (uri, replicaSet) => __async(null, null, function* () {
  Mongoose.set("strictQuery", true);
  reportStartupProgress("Connecting the API to storage...");
  yield Mongoose.connect(uri, {
    autoIndex: false,
    family: 4,
    writeConcern: { j: true, w: "majority" }
  });
  checkServerShutdown();
  reportStartupProgress("Checking storage readiness...");
  const hello = yield Mongoose.connection.db.admin().command({ hello: 1 });
  checkServerShutdown();
  if (hello.setName !== replicaSet || !hello.isWritablePrimary)
    throw new Error(`The configured ${replicaSet} database is not PRIMARY yet.`);
});
export {
  connectMongoPrimary
};
//# sourceMappingURL=index.mjs.map