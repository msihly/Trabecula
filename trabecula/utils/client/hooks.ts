import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

export const useElementResize = (ref: MutableRefObject<any>, condition?: any) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [absPosition, setAbsPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const nodeRef = ref?.current;

    const getDimensions = () => ({
      width: nodeRef?.offsetWidth || 0,
      height: nodeRef?.offsetHeight || 0,
    });

    const getPosition = () => {
      const rect = nodeRef?.getBoundingClientRect?.();
      return { top: rect?.top || 0, left: rect?.left || 0 };
    };

    const handleResize = () => {
      setDimensions(getDimensions());
      setAbsPosition(getPosition());
    };

    if (nodeRef) handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref, condition]);

  return { ...dimensions, ...absPosition };
};

export const useForceUpdate = () => {
  const [, setTick] = useState(0);
  const update = useCallback(() => setTick((tick) => tick + 1), []);
  return update;
};

export const useLazyLoad = (
  containerRef: React.RefObject<HTMLElement>,
  options?: {
    rootMargin?: string;
    threshold?: number | number[];
  },
) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      {
        rootMargin: options?.rootMargin ?? "200px 0px",
        threshold: options?.threshold ?? 0,
      },
    );

    observerRef.current.observe(containerRef.current);

    return () => observerRef.current?.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return isVisible;
};
