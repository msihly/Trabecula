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
