import { MutableRefObject } from "react";
import { FixedSizeList, VariableSizeList } from "react-window";
interface UseDragScrollProps {
    momentum?: number;
    listRef: MutableRefObject<FixedSizeList<any> | VariableSizeList<any>>;
    listOuterRef: MutableRefObject<any>;
    scrollLeft: MutableRefObject<number>;
    width: number;
}
export declare const useDragScroll: ({ listRef, listOuterRef, momentum, scrollLeft, width, }: UseDragScrollProps) => {
    handleMouseDown: (event: React.MouseEvent) => void;
    isDragging: boolean;
};
export {};
