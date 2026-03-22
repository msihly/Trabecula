"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragScroll = void 0;
const react_1 = require("react");
const useDragScroll = ({ listRef, listOuterRef, momentum = 0.8, scrollLeft, width, }) => {
    const dragDirection = (0, react_1.useRef)(null);
    const initialMouseX = (0, react_1.useRef)(null);
    const momentumId = (0, react_1.useRef)(null);
    const scrollFinal = (0, react_1.useRef)(0);
    const scrollStart = (0, react_1.useRef)(0);
    const velocity = (0, react_1.useRef)(0);
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    const handleMouseDown = (event) => {
        if (!listRef.current)
            return;
        initialMouseX.current = event.clientX;
        scrollStart.current = scrollLeft.current;
        cancelMomentumTracking();
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    };
    const mouseMoveHandler = (event) => {
        if (!listRef.current)
            return;
        const walk = (event.clientX - initialMouseX.current) * 3;
        const newScrollLeft = scrollStart.current - walk;
        const isScrollValid = validateScrollLeft(newScrollLeft);
        if (!isScrollValid)
            return;
        listRef.current.scrollTo(newScrollLeft);
        velocity.current = newScrollLeft - scrollStart.current;
        dragDirection.current = velocity.current > 0 ? "left" : "right";
        if (velocity.current > 0 && !isDragging)
            setIsDragging(true);
    };
    const mouseUpHandler = () => {
        scrollFinal.current = scrollLeft.current;
        if (Math.abs(scrollFinal.current - scrollStart.current) > 5) {
            velocity.current =
                Math.max(Math.abs(velocity.current), 30) * (dragDirection.current === "right" ? -1 : 1);
            beginMomentumTracking();
        }
        setTimeout(() => setIsDragging(false), 0);
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
    };
    const validateScrollLeft = (newScrollLeft) => newScrollLeft >= 0 && newScrollLeft <= listOuterRef.current?.scrollWidth - width * 0.8;
    /* ---------------------------- BEGIN - MOMENTUM ---------------------------- */
    const beginMomentumTracking = () => {
        cancelMomentumTracking();
        momentumId.current = requestAnimationFrame(momentumLoop);
    };
    const cancelMomentumTracking = () => cancelAnimationFrame(momentumId.current);
    const momentumLoop = () => {
        const newScrollLeft = scrollLeft.current + velocity.current;
        const isScrollValid = validateScrollLeft(newScrollLeft);
        if (!isScrollValid)
            return;
        listRef.current.scrollTo(newScrollLeft);
        velocity.current *= momentum;
        if (Math.abs(velocity.current) > 0.5)
            momentumId.current = requestAnimationFrame(momentumLoop);
    };
    /* ----------------------------- END - MOMENTUM ----------------------------- */
    return { handleMouseDown, isDragging };
};
exports.useDragScroll = useDragScroll;
