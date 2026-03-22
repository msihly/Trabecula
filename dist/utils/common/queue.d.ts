export interface PromiseQueueOptions {
    concurrency?: number;
    delayRange?: [number, number];
}
export declare class PromiseQueue {
    private cancelled;
    private concurrency;
    private delayRange?;
    private promise;
    private queue;
    private resolver;
    private runningCount;
    constructor({ concurrency, delayRange }?: PromiseQueueOptions);
    add<T>(fn: () => Promise<T>): Promise<T>;
    cancel(): void;
    private next;
    resolve(): Promise<void>;
}
