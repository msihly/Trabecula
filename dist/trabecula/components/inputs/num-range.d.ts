/// <reference types="react" />
import { HeaderWrapperProps, NumInputProps } from "trabecula/components";
export interface NumRangeProps {
    hasHelper?: boolean;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    max: number;
    min: number;
    numInputProps?: Partial<NumInputProps>;
    setMax: (val: number) => void;
    setMin: (val: number) => void;
}
export declare const NumRange: ({ hasHelper, header, headerProps, max, min, numInputProps, setMax, setMin, }: NumRangeProps) => import("react").JSX.Element;
