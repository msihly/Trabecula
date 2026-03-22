import { ElementType } from "react";
import { TypographyProps } from "@mui/material";
import { TooltipProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export type TextPreset = "default" | "detail-label" | "label-glow" | "sub-text" | "title";
export interface TextProps extends Omit<TypographyProps, "color" | "component" | "fontSize" | "fontWeight" | "overflow" | "title"> {
    color?: string;
    component?: ElementType;
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
    overflow?: CSS["overflow"];
    preset?: TextPreset;
    tooltip?: TooltipProps["title"];
    tooltipProps?: Partial<TooltipProps>;
}
export declare const Text: ({ children, className, color, component, fontSize, fontWeight, overflow, preset, tooltip, tooltipProps, ...props }: TextProps) => import("react").JSX.Element;
