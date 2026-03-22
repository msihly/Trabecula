/// <reference types="react" />
import { IconProps as MuiIconProps } from "@mui/material";
import { IconName as MuiIconName } from "trabecula/_generated/client/icons";
import { ViewProps } from "trabecula/components";
import { Margins } from "trabecula/utils/client";
export type IconName = MuiIconName;
export interface IconProps extends Omit<MuiIconProps, "color" | "fontSize"> {
    color?: string;
    name: IconName & string;
    rotation?: number;
    margins?: Margins;
    size?: number | string;
    viewProps?: Partial<Omit<ViewProps, "margins">>;
}
export declare const Icon: ({ className, color, margins, name, rotation, size, viewProps, ...props }: IconProps) => import("react").JSX.Element;
