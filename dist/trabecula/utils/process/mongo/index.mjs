import {
  isServerStopping,
  registerProcessLifecycle
} from "../../../chunk-YZYLCUVV.mjs";
import {
  fileLog
} from "../../../chunk-XCGFMXNA.mjs";
import {
  sleep
} from "../../../chunk-TW4B7B5M.mjs";
import {
  __async
} from "../../../chunk-DM4QYMVJ.mjs";

// trabecula/utils/process/mongo.ts
import fs from "fs/promises";
import { MongoMemoryServer } from "mongodb-memory-server";
import Mongoose from "mongoose";
var createAdminClient = (mongoServer) => new Mongoose.mongo.MongoClient(mongoServer.getUri("admin"), {
  directConnection: true,
  family: 4,
  serverSelectionTimeoutMS: 3e4
});
var registerMongoProcess = (getOptions) => {
  let mongoServer;
  let mongoStart;
  registerProcessLifecycle({
    start: () => __async(null, null, function* () {
      const { args, binary, dbName, dbPath, port, replicaSet } = yield getOptions();
      yield fs.mkdir(dbPath, { recursive: true });
      if (isServerStopping()) return;
      fileLog(`[DB] Starting persistent WiredTiger replica-set member ${replicaSet}...`);
      mongoServer = new MongoMemoryServer({
        binary,
        instance: {
          args,
          dbPath,
          // Recovery must not be killed by the library's short test-server deadline.
          launchTimeout: 2147483647,
          port,
          replSet: replicaSet,
          storageEngine: "wiredTiger"
        },
        // The worker owns mongod through its Windows job; terminal Ctrl+C must stop clients first.
        spawn: { detached: true, windowsHide: true }
      });
      mongoStart = mongoServer.start(true);
      yield mongoStart;
      if (isServerStopping()) return;
      const client = createAdminClient(mongoServer);
      try {
        yield client.connect();
        const admin = client.db("admin");
        try {
          const { config } = yield admin.command({ replSetGetConfig: 1 });
          if (config._id !== replicaSet || config.members.length !== 1)
            throw new Error(
              `Expected the existing single-member ${replicaSet} configuration. No reconfiguration was attempted.`
            );
        } catch (error) {
          if (error.code !== 94) throw error;
          yield admin.command({
            replSetInitiate: {
              _id: replicaSet,
              members: [{ _id: 0, host: `localhost:${port}` }],
              writeConcernMajorityJournalDefault: true
            }
          });
        }
        const deadline = Date.now() + 5 * 60 * 1e3;
        while (!(yield admin.command({ hello: 1 })).isWritablePrimary) {
          if (isServerStopping()) return;
          if (Date.now() >= deadline)
            throw new Error(
              `${replicaSet} did not become PRIMARY. Existing replication metadata was preserved; review the database startup log.`
            );
          yield sleep(1e3);
        }
        fileLog(`[DB] ${replicaSet} is PRIMARY; application database is ${dbName}.`);
        return {
          uri: `${mongoServer.getUri(dbName)}?replicaSet=${replicaSet}&w=majority&journal=true`
        };
      } finally {
        yield client.close();
      }
    }),
    stop: () => __async(null, null, function* () {
      var _a;
      yield mongoStart == null ? void 0 : mongoStart.catch(() => {
      });
      const native = (_a = mongoServer == null ? void 0 : mongoServer.instanceInfo) == null ? void 0 : _a.instance.mongodProcess;
      if (!native || native.exitCode !== null || native.signalCode !== null) return;
      const client = createAdminClient(mongoServer);
      let resolveExit;
      const exited = new Promise((resolve) => {
        resolveExit = resolve;
      });
      native.once("exit", resolveExit);
      try {
        yield client.connect();
        fileLog("[DB] Requesting clean shutdown...");
        try {
          yield client.db("admin").command({ shutdown: 1, force: true, timeoutSecs: 0 });
        } catch (error) {
          if (!["MongoNetworkError", "MongoNetworkTimeoutError"].includes(error == null ? void 0 : error.name)) throw error;
        }
        if (native.exitCode === null && native.signalCode === null) yield exited;
        if (native.exitCode !== 0)
          throw new Error(
            `Database shutdown exited with code ${native.exitCode}, signal ${native.signalCode}.`
          );
        mongoServer.instanceInfo.instance.mongodProcess = void 0;
        yield mongoServer.stop({ doCleanup: false });
      } finally {
        native.off("exit", resolveExit);
        yield client.close();
      }
      fileLog("[DB] Clean shutdown completed.");
    })
  });
};
export {
  registerMongoProcess
};
//# sourceMappingURL=index.mjs.map