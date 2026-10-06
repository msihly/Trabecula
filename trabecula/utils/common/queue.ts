import { sleep } from "trabecula/utils/common";

class CancelledError extends Error {
  constructor() {
    super("PromiseQueue cancelled");
    this.name = "CancelledError";
  }
}

export interface PromiseQueueOptions {
  concurrency?: number;
  delayRange?: [number, number];
}

export class PromiseQueue {
  private cancelled = false;
  private concurrency: number;
  private delayRange?: [number, number];
  private promise: Promise<void> | null = null;
  private queue = new Set<{ cancel: () => void; run: () => Promise<void> }>();
  private resolver: (() => void) | null = null;
  private runningCount = 0;

  constructor({ concurrency = 1, delayRange }: PromiseQueueOptions = {}) {
    if (!Number.isInteger(concurrency) || concurrency < 1)
      throw new RangeError("PromiseQueue concurrency must be a positive integer");

    this.concurrency = concurrency;
    this.delayRange = delayRange;
  }

  add<T>(fn: () => Promise<T>): Promise<T> {
    if (this.cancelled) return Promise.reject(new CancelledError());

    if (!this.promise) this.promise = new Promise((res) => (this.resolver = res));

    return new Promise<T>((resolve, reject) => {
      const task = async () => {
        this.runningCount++;

        try {
          const result = await fn();

          resolve(result);
        } catch (err) {
          reject(err);
        } finally {
          if (this.delayRange && !this.cancelled) await sleep(...this.delayRange);

          this.runningCount--;
          queueMicrotask(() => this.next());
        }
      };

      this.queue.add({ cancel: () => reject(new CancelledError()), run: task });
      this.next();
    });
  }

  cancel() {
    if (this.cancelled) return;

    this.cancelled = true;

    for (const task of this.queue) task.cancel();

    this.queue.clear();
    this.next();
  }

  private next() {
    for (const task of this.queue) {
      if (this.cancelled || this.runningCount >= this.concurrency) break;

      this.queue.delete(task);
      task.run();
    }

    if (!this.queue.size && this.runningCount === 0 && this.resolver) {
      this.resolver();
      this.promise = null;
      this.resolver = null;
    }
  }

  async resolve() {
    if (this.promise) await this.promise;
  }
}
