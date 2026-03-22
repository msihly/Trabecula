import { MouseEvent, ReactNode } from "react";
import { ListItemProps as MuiListItemProps } from "@mui/material";
import { IconName, IconProps } from "trabecula/components";
import { Margins } from "trabecula/utils/client";
export interface ListItemProps extends Omit<MuiListItemProps, "children"> {
    children?: ReactNode;
    color?: string;
    icon?: IconName;
    iconProps?: Partial<IconProps>;
    iconEnd?: IconName;
    iconEndMargins?: Margins;
    iconMargins?: Margins;
    onClick?: (event?: MouseEvent) => void;
    text: ReactNode;
}
export declare const ListItem: ({ children, color, icon, iconProps, iconEnd, iconEndMargins, iconMargins, onClick, text, ...props }: ListItemProps) => import("react").JSX.Element;
