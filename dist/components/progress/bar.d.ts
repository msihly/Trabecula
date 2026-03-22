/// <reference types="react" />
import { ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface ProgressBarProps {
    denominator: number;
    denominatorFormatter?: (num: number) => string;
    minWidth?: CSS["minWidth"];
    numerator: number;
    numeratorFormatter?: (num: number) => string;
    viewProps?: ViewProps;
    withText?: boolean;
}
export declare const ProgressBar: import("react").ForwardRefExoticComponent<ProgressBarProps & import("react").RefAttributes<HTMLDivElement>>;
