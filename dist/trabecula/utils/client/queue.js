import { toast, Toaster } from "trabecula/utils/client";
export const makeQueue = ({ action, items, logPrefix = "Refreshed", logSuffix, onComplete, queue, withTabTitle, }) => {
    return new Promise((resolve) => {
        const totalCount = items.length;
        let completedCount = 0;
        let hasError = false;
        let isComplete = false;
        const getToastText = () => `${logPrefix} ${completedCount} / ${totalCount} ${logSuffix}${isComplete ? "." : "..."}`;
        const toaster = new Toaster();
        toaster.toast(getToastText(), { autoClose: false, type: "info" });
        const onEscape = async () => {
            updateCompleted();
            resolve();
            await onComplete?.(hasError);
        };
        const setHasError = (error) => (hasError = error);
        const updateCompleted = () => {
            if (completedCount < totalCount)
                completedCount++;
            isComplete = completedCount >= totalCount;
            updateToast();
            if (withTabTitle)
                updateTabTitle();
        };
        const updateTabTitle = () => (document.title =
            completedCount >= totalCount
                ? hasError
                    ? "ERROR"
                    : "Done!"
                : `[${completedCount}/${totalCount}] Downloading`);
        const updateToast = () => toaster.toast(getToastText(), {
            autoClose: isComplete ? 3000 : false,
            type: isComplete ? "success" : undefined,
        });
        if (withTabTitle)
            updateTabTitle();
        for (const item of items) {
            queue.add(async () => {
                try {
                    await action(item, onEscape);
                }
                catch (err) {
                    console.error(err);
                    toast.error(err.message);
                    setHasError(true);
                }
                finally {
                    updateCompleted();
                    if (isComplete)
                        await onEscape();
                }
            });
        }
    });
};
