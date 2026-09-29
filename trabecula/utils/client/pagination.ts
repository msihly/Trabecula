import { useEffect, useState } from "react";

export interface PaginatedResult<T> {
  items: T[];
  pageCount: number;
}

export const usePaginatedList = <T>(
  loadPage: (page: number, signal: AbortSignal) => Promise<PaginatedResult<T>>,
  { pollIntervalMs = 0 }: { pollIntervalMs?: number } = {},
) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;

    setIsLoading(true);
    setError("");

    const load = async () => {
      try {
        const result = await loadPage(page, controller.signal);

        if (!controller.signal.aborted) {
          const count = Math.max(1, result.pageCount);

          setError("");
          setPageCount(count);

          if (page > count) setPage(count);
          else setItems(result.items);
        }
      } catch (error) {
        if (!controller.signal.aborted)
          setError(error instanceof Error ? error.message : String(error));
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);

          if (pollIntervalMs > 0) timer = setTimeout(load, pollIntervalMs);
        }
      }
    };

    void load();

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [loadPage, page, pollIntervalMs, revision]);

  const refresh = () => setRevision((value) => value + 1);

  return { error, isLoading, items, page, pageCount, refresh, setError, setPage };
};
