/** Connects this process to the replica set, failing unless it is already the writable primary. */
declare const connectMongoPrimary: (uri: string, replicaSet: string) => Promise<void>;

export { connectMongoPrimary };
