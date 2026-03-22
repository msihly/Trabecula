import { PromiseQueue } from "trabecula/utils/common";
export declare const makeQueue: <T>({ action, items, logPrefix, logSuffix, onComplete, queue, withTabTitle, }: {
    action: (item: T, escapeFn: () => Promise<void>) => Promise<any>;
    items: T[];
    logPrefix: string;
    logSuffix: string;
    onComplete?: (hasError?: boolean) => Promise<any>;
    queue: PromiseQueue;
    withTabTitle?: boolean;
}) => Promise<void>;
