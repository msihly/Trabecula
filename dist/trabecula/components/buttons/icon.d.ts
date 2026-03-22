import { ReactNode } from "react";
import { IconButtonProps as MuiIconButtonProps } from "@mui/material";
import { IconName, IconProps, TooltipWrapperProps } from "trabecula/components";
import { Margins } from "trabecula/utils/client";
export interface IconButtonProps extends Omit<MuiIconButtonProps, "color"> {
    children?: ReactNode | ReactNode[];
    iconProps?: Partial<IconProps>;
    margins?: Margins;
    name?: IconName;
    tooltip?: TooltipWrapperProps["tooltip"];
    tooltipProps?: TooltipWrapperProps["tooltipProps"];
}
export declare const IconButton: ({ children, className, disabled, iconProps, margins, name, onClick, size, tooltip, tooltipProps, ...props }: IconButtonProps) => import("react").JSX.Element;
