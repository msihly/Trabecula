import fs from "fs/promises";
import { MongoMemoryServer } from "mongodb-memory-server";
import Mongoose from "mongoose";
import { sleep } from "trabecula/utils/common";
import { isServerStopping, registerProcessLifecycle } from "trabecula/utils/process";
import { fileLog } from "trabecula/utils/server";

export interface MongoProcessOptions {
  /** Extra mongod arguments, such as a WiredTiger cache limit. */
  args?: string[];
  /** A specific mongod, such as the version that wrote existing data files. */
  binary?: NonNullable<ConstructorParameters<typeof MongoMemoryServer>[0]>["binary"];
  /** Database named in the connection string handed to the processes that use it. */
  dbName: string;
  dbPath: string;
  port: number;
  replicaSet: string;
}

/** Runs a persistent single-member replica set and hands its URI to later stages once writable. */
export const registerMongoProcess = (getOptions: () => Promise<MongoProcessOptions>) => {
  let mongoServer: MongoMemoryServer;
  let mongoStart: Promise<void>;

  registerProcessLifecycle({
    start: async () => {
      const { args, binary, dbName, dbPath, port, replicaSet } = await getOptions();

      await fs.mkdir(dbPath, { recursive: true });

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
          storageEngine: "wiredTiger",
        },
        // The worker owns mongod through its Windows job; terminal Ctrl+C must stop clients first.
        spawn: { detached: true, windowsHide: true },
      });

      mongoStart = mongoServer.start(true);
      await mongoStart;

      if (isServerStopping()) return;

      const client = new Mongoose.mongo.MongoClient(mongoServer.getUri("admin"), {
        directConnection: true,
        family: 4,
        serverSelectionTimeoutMS: 30000,
      });

      try {
        await client.connect();

        const admin = client.db("admin");

        try {
          const { config } = await admin.command({ replSetGetConfig: 1 });

          if (config._id !== replicaSet || config.members.length !== 1)
            throw new Error(
              `Expected the existing single-member ${replicaSet} configuration. No reconfiguration was attempted.`,
            );
        } catch (error) {
          if (error.code !== 94) throw error;

          await admin.command({
            replSetInitiate: {
              _id: replicaSet,
              members: [{ _id: 0, host: `localhost:${port}` }],
              writeConcernMajorityJournalDefault: true,
            },
          });
        }

        const deadline = Date.now() + 5 * 60 * 1000;

        while (!(await admin.command({ hello: 1 })).isWritablePrimary) {
          if (isServerStopping()) return;

          if (Date.now() >= deadline)
            throw new Error(
              `${replicaSet} did not become PRIMARY. Existing replication metadata was preserved; review the database startup log.`,
            );

          await sleep(1000);
        }

        fileLog(`[DB] ${replicaSet} is PRIMARY; application database is ${dbName}.`);

        return {
          uri: `${mongoServer.getUri(dbName)}?replicaSet=${replicaSet}&w=majority&journal=true`,
        };
      } finally {
        await client.close();
      }
    },

    stop: async () => {
      // mongod is only known once started; stopping mid-start must still shut it down cleanly.
      await mongoStart?.catch(() => {});

      const native = mongoServer?.instanceInfo?.instance.mongodProcess;

      if (!native || native.exitCode !== null || native.signalCode !== null) return;

      // Windows kill() is forced termination. A direct connection also works before election.
      const client = new Mongoose.mongo.MongoClient(mongoServer.getUri("admin"), {
        directConnection: true,
        family: 4,
        serverSelectionTimeoutMS: 30000,
      });

      let resolveExit: () => void;

      const exited = new Promise<void>((resolve) => {
        resolveExit = resolve;
      });

      native.once("exit", resolveExit);

      try {
        await client.connect();
        fileLog("[DB] Requesting clean shutdown...");

        try {
          // MongoDB treats the first key as the command name; shutdown must precede its options.
          await client.db("admin").command({ shutdown: 1, force: true, timeoutSecs: 0 });
        } catch (error) {
          if (!["MongoNetworkError", "MongoNetworkTimeoutError"].includes(error?.name)) throw error;
        }

        if (native.exitCode === null && native.signalCode === null) await exited;

        if (native.exitCode !== 0)
          throw new Error(
            `Database shutdown exited with code ${native.exitCode}, signal ${native.signalCode}.`,
          );

        // The native process has exited; library cleanup must not open a second shutdown connection.
        mongoServer.instanceInfo.instance.mongodProcess = undefined;
        await mongoServer.stop({ doCleanup: false });
      } finally {
        native.off("exit", resolveExit);
        await client.close();
      }

      fileLog("[DB] Clean shutdown completed.");
    },
  });
};
