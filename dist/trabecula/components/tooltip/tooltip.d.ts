/// <reference types="react" />
import { TooltipProps as MuiTooltipProps } from "@mui/material";
import { ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface TooltipProps extends Omit<MuiTooltipProps, "children" | "color"> {
    borderColor?: CSS["color"];
    bgColor?: CSS["backgroundColor"];
    children: JSX.Element | JSX.Element[];
    color?: CSS["color"];
    flexShrink?: CSS["flexShrink"];
    fontSize?: CSS["fontSize"];
    maxWidth?: CSS["maxWidth"];
    minWidth?: CSS["minWidth"];
    padding?: CSS["padding"];
    viewProps?: Partial<ViewProps>;
}
export declare const Tooltip: ({ arrow, bgColor, borderColor, children, color, flexShrink, fontSize, minWidth, maxWidth, padding, placement, title, viewProps, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
