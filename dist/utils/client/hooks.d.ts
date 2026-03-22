import { MutableRefObject } from "react";
export declare const useElementResize: (ref: MutableRefObject<any>, condition?: any) => {
    top: number;
    left: number;
    width: number;
    height: number;
};
export declare const useForceUpdate: () => () => void;
export declare const useLazyLoad: (containerRef: React.RefObject<HTMLElement>, options?: {
    rootMargin?: string;
    threshold?: number | number[];
}) => boolean;
