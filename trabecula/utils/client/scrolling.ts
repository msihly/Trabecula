import { RefObject, useEffect, useRef, useState } from "react";
import type { GridImperativeAPI, ListImperativeAPI } from "react-window";

interface UseDragScrollProps {
  listRef: RefObject<GridImperativeAPI | ListImperativeAPI>;
  momentum?: number;
}

export const useDragScroll = ({ listRef, momentum = 0.8 }: UseDragScrollProps) => {
  const dragDirection = useRef<"left" | "right">(null);
  const dragResetTimeout = useRef<ReturnType<typeof setTimeout>>(null);
  const initialMouseX = useRef(null);
  const momentumId = useRef(null);
  const removeDragListeners = useRef<() => void>(null);
  const scrollFinal = useRef(0);
  const scrollStart = useRef(0);
  const velocity = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(dragResetTimeout.current);
      cancelAnimationFrame(momentumId.current);
      removeDragListeners.current?.();
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    const element = listRef.current?.element;
    if (!element || event.button !== 0) return;

    clearTimeout(dragResetTimeout.current);
    removeDragListeners.current?.();
    setIsDragging(false);
    initialMouseX.current = event.clientX;
    scrollStart.current = element.scrollLeft;
    velocity.current = 0;
    cancelMomentumTracking();

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    removeDragListeners.current = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  };

  const mouseMoveHandler = (event: MouseEvent) => {
    const element = listRef.current?.element;
    if (!element) return;

    const walk = (event.clientX - initialMouseX.current) * 3;
    const newScrollLeft = scrollStart.current - walk;
    const isScrollValid = validateScrollLeft(element, newScrollLeft);
    if (!isScrollValid) return;

    element.scrollLeft = newScrollLeft;

    velocity.current = newScrollLeft - scrollStart.current;
    dragDirection.current = velocity.current > 0 ? "left" : "right";

    if (Math.abs(velocity.current) > 5) setIsDragging(true);
  };

  const mouseUpHandler = () => {
    scrollFinal.current = listRef.current?.element?.scrollLeft ?? scrollStart.current;

    if (Math.abs(scrollFinal.current - scrollStart.current) > 5) {
      velocity.current =
        Math.max(Math.abs(velocity.current), 30) * (dragDirection.current === "right" ? -1 : 1);

      beginMomentumTracking();
    }

    dragResetTimeout.current = setTimeout(() => setIsDragging(false), 0);
    removeDragListeners.current?.();
    removeDragListeners.current = null;
  };

  const validateScrollLeft = (element: HTMLElement, newScrollLeft: number) =>
    newScrollLeft >= 0 && newScrollLeft <= element.scrollWidth - element.clientWidth * 0.8;

  /* ---------------------------- BEGIN - MOMENTUM ---------------------------- */
  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    momentumId.current = requestAnimationFrame(momentumLoop);
  };

  const cancelMomentumTracking = () => cancelAnimationFrame(momentumId.current);

  const momentumLoop = () => {
    const element = listRef.current?.element;
    if (!element) return;

    const newScrollLeft = element.scrollLeft + velocity.current;
    const isScrollValid = validateScrollLeft(element, newScrollLeft);
    if (!isScrollValid) return;

    element.scrollLeft = newScrollLeft;
    velocity.current *= momentum;

    if (Math.abs(velocity.current) > 0.5) momentumId.current = requestAnimationFrame(momentumLoop);
  };
  /* ----------------------------- END - MOMENTUM ----------------------------- */

  return { handleMouseDown, isDragging };
};
