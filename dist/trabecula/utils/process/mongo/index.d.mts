import { MongoMemoryServer } from 'mongodb-memory-server';

interface MongoProcessOptions {
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
declare const registerMongoProcess: (getOptions: () => Promise<MongoProcessOptions>) => void;

export { type MongoProcessOptions, registerMongoProcess };
