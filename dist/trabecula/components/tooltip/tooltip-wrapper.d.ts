/// <reference types="react" />
import { TooltipProps } from "trabecula/components";
export interface TooltipWrapperProps {
    children: JSX.Element | JSX.Element[];
    tooltip?: TooltipProps["title"];
    tooltipProps?: Partial<TooltipProps>;
}
export declare const TooltipWrapper: ({ children, tooltip, tooltipProps }: TooltipWrapperProps) => import("react").JSX.Element;
