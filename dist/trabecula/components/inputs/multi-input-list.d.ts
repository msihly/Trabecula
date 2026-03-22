/// <reference types="react" />
import { FixedSizeList } from "react-window";
import { ViewProps } from "trabecula/components";
export interface MultiInputListProps<T = string> {
    hasDeleteAll?: boolean;
    hasInput?: boolean;
    renderRow?: (index: number, style: React.CSSProperties) => JSX.Element;
    search: {
        onChange: (val: T[]) => void;
        value: T[];
    };
    viewProps?: Partial<ViewProps>;
}
export declare const MultiInputList: import("react").ForwardRefExoticComponent<MultiInputListProps<unknown> & import("react").RefAttributes<FixedSizeList<any>>>;
