import Mongoose from "mongoose";
import { checkServerShutdown, reportStartupProgress } from "trabecula/utils/process";

/** Connects this process to the replica set, failing unless it is already the writable primary. */
export const connectMongoPrimary = async (uri: string, replicaSet: string) => {
  Mongoose.set("strictQuery", true);

  reportStartupProgress("Connecting the API to storage...");
  await Mongoose.connect(uri, {
    autoIndex: false,
    family: 4,
    writeConcern: { j: true, w: "majority" },
  });

  checkServerShutdown();
  reportStartupProgress("Checking storage readiness...");

  const hello = await Mongoose.connection.db.admin().command({ hello: 1 });

  checkServerShutdown();

  if (hello.setName !== replicaSet || !hello.isWritablePrimary)
    throw new Error(`The configured ${replicaSet} database is not PRIMARY yet.`);
};
