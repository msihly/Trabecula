"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseQueue = void 0;
const common_1 = require("trabecula/utils/common");
class CancelledError extends Error {
    constructor() {
        super("PromiseQueue cancelled");
        this.name = "CancelledError";
    }
}
class PromiseQueue {
    constructor({ concurrency, delayRange } = {}) {
        Object.defineProperty(this, "cancelled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "concurrency", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "delayRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "promise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "resolver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "runningCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        this.concurrency = concurrency ?? 1;
        this.delayRange = delayRange;
    }
    add(fn) {
        if (this.cancelled)
            return Promise.reject(new CancelledError());
        if (!this.promise)
            this.promise = new Promise((res) => (this.resolver = res));
        return new Promise((resolve, reject) => {
            const task = async () => {
                try {
                    if (this.cancelled)
                        return reject(new CancelledError());
                    this.runningCount++;
                    const result = await fn();
                    resolve(result);
                }
                catch (err) {
                    reject(err);
                }
                finally {
                    if (this.delayRange)
                        await (0, common_1.sleep)(...this.delayRange);
                    this.runningCount--;
                    this.next();
                }
            };
            this.queue.push(task);
            this.next();
        });
    }
    cancel() {
        if (this.cancelled)
            return;
        this.cancelled = true;
        while (this.queue.length)
            this.queue.shift()?.();
        if (this.runningCount === 0 && this.resolver) {
            this.resolver();
            this.promise = null;
            this.resolver = null;
        }
    }
    next() {
        while (!this.cancelled && this.runningCount < this.concurrency && this.queue.length)
            this.queue.shift()?.();
        if (!this.queue.length && this.runningCount === 0 && this.resolver) {
            this.resolver();
            this.promise = null;
            this.resolver = null;
        }
    }
    async resolve() {
        if (this.promise)
            await this.promise;
    }
}
exports.PromiseQueue = PromiseQueue;
