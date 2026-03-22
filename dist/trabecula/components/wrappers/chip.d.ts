import { ReactNode } from "react";
import { ChipProps as MuiChipProps } from "@mui/material";
import { IconName, IconProps } from "trabecula/components";
import { CSS, Padding } from "trabecula/utils/client";
export interface ChipProps extends Omit<MuiChipProps, "color" | "icon"> {
    bgColor?: CSS["backgroundColor"];
    className?: string;
    color?: CSS["color"];
    height?: CSS["height"];
    icon?: IconName;
    iconColor?: string;
    iconProps?: Partial<IconProps>;
    label: ReactNode;
    padding?: Padding;
    width?: CSS["width"];
}
export declare const Chip: ({ bgColor, className, color, height, icon, iconColor, iconProps, label, padding, width, ...props }: ChipProps) => import("react").JSX.Element;
