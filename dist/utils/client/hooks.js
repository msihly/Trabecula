"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLazyLoad = exports.useForceUpdate = exports.useElementResize = void 0;
const react_1 = require("react");
const useElementResize = (ref, condition) => {
    const [dimensions, setDimensions] = (0, react_1.useState)({ width: 0, height: 0 });
    const [absPosition, setAbsPosition] = (0, react_1.useState)({ top: 0, left: 0 });
    (0, react_1.useEffect)(() => {
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
        if (nodeRef)
            handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [ref, condition]);
    return { ...dimensions, ...absPosition };
};
exports.useElementResize = useElementResize;
const useForceUpdate = () => {
    const [, setTick] = (0, react_1.useState)(0);
    const update = (0, react_1.useCallback)(() => setTick((tick) => tick + 1), []);
    return update;
};
exports.useForceUpdate = useForceUpdate;
const useLazyLoad = (containerRef, options) => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const observerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!containerRef.current)
            return;
        observerRef.current = new IntersectionObserver((entries) => {
            setIsVisible(entries[0].isIntersecting);
        }, {
            rootMargin: options?.rootMargin ?? "200px 0px",
            threshold: options?.threshold ?? 0,
        });
        observerRef.current.observe(containerRef.current);
        return () => observerRef.current?.disconnect();
    }, [options?.rootMargin, options?.threshold]);
    return isVisible;
};
exports.useLazyLoad = useLazyLoad;
