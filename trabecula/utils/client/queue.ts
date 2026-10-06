import { toast, Toaster } from "trabecula/utils/client";
import { PromiseQueue } from "trabecula/utils/common";

export const makeQueue = <T>({
  action,
  items,
  logPrefix = "Refreshed",
  logSuffix,
  onComplete,
  queue,
  withTabTitle,
}: {
  action: (item: T, escapeFn: () => Promise<void>) => Promise<any>;
  items: T[];
  logPrefix: string;
  logSuffix: string;
  onComplete?: (hasError?: boolean) => Promise<any>;
  queue: PromiseQueue;
  withTabTitle?: boolean;
}): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const totalCount = items.length;
    let completedCount = 0;
    let completion: Promise<void>;
    let hasError = false;
    let isComplete = false;

    const getToastText = () =>
      `${logPrefix} ${completedCount} / ${totalCount} ${logSuffix}${isComplete ? "." : "..."}`;

    const toaster = new Toaster();

    const complete = () => {
      if (!completion) {
        isComplete = true;
        updateProgress();
        completion = Promise.resolve()
          .then(() => onComplete?.(hasError))
          .then(() => resolve(), reject);
      }

      return completion;
    };

    const onEscape = () => {
      queue.cancel();

      return complete();
    };

    const updateProgress = () => {
      toaster.toast(getToastText(), {
        autoClose: isComplete ? 3000 : false,
        type: isComplete ? (hasError ? "error" : "success") : "info",
      });

      if (withTabTitle)
        document.title = isComplete
          ? hasError
            ? "\u274c Error!"
            : "\u2705 Done!"
          : `[${completedCount}/${totalCount}] Downloading`;
    };

    updateProgress();

    if (!totalCount) complete();
    else {
      for (const item of items) {
        queue
          .add(() => action(item, onEscape))
          .catch((error) => {
            if (!isComplete) {
              hasError = true;
              console.error(error);
              toast.error(error?.message ?? String(error));
            }
          })
          .finally(() => {
            if (!isComplete) {
              completedCount++;

              if (completedCount >= totalCount) complete();
              else updateProgress();
            }
          });
      }
    }
  });
};
