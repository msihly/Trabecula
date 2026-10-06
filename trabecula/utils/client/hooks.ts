import {
  DependencyList,
  EffectCallback,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { isObservable, toJS } from "mobx";
import { getSnapshot, isTreeNode } from "mobx-keystone";
import { deepClone, isDeepEqual } from "trabecula/utils/common";

const getComparisonValue = (value: any) =>
  isTreeNode(value) ? getSnapshot(value) : isObservable(value) ? toJS(value) : value;

export const useDeepEffect = (cb: EffectCallback, deps: DependencyList) => {
  const dependencies = useDeepMemo(deps.map(getComparisonValue));

  useEffect(cb, [dependencies]);
};

export const useDeepMemo = <T>(value: T) => {
  const comparisonValue = getComparisonValue(value);
  const comparisonRef = useRef<any>();
  const depRef = useRef(0);
  const valueRef = useRef(value);

  if (!isDeepEqual(comparisonValue, comparisonRef.current)) {
    comparisonRef.current = deepClone(comparisonValue);
    depRef.current += 1;
    valueRef.current = value;
  }

  return useMemo(() => valueRef.current, [depRef.current]);
};

export const useElementResize = (ref: MutableRefObject<any>, condition?: any) => {
  const [dimensions, setDimensions] = useState({ height: 0, left: 0, top: 0, width: 0 });

  useEffect(() => {
    const nodeRef = ref?.current;

    const handleResize = () => {
      const rect = nodeRef?.getBoundingClientRect?.();
      const next = {
        height: nodeRef?.offsetHeight || 0,
        left: rect?.left || 0,
        top: rect?.top || 0,
        width: nodeRef?.offsetWidth || 0,
      };

      setDimensions((prev) =>
        prev.height === next.height &&
        prev.left === next.left &&
        prev.top === next.top &&
        prev.width === next.width
          ? prev
          : next,
      );
    };

    const observer = new ResizeObserver(handleResize);

    if (nodeRef) {
      handleResize();
      observer.observe(nodeRef, { box: "border-box" });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, condition]);

  return dimensions;
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
