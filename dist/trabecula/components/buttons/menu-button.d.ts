import { MouseEvent, ReactNode } from "react";
import { IconName } from "trabecula/components";
import { IconButtonProps } from "trabecula/components/buttons";
import { CSS } from "trabecula/utils/client";
export interface MenuButtonProps extends IconButtonProps {
    bgColor?: CSS["backgroundColor"];
    button?: (onOpen: (event: MouseEvent) => void) => ReactNode;
    children: ReactNode;
    color?: string;
    icon?: IconName;
    keepMounted?: boolean;
    menuWidth?: CSS["width"];
}
export declare const MenuButton: ({ bgColor, button, children, color, icon, keepMounted, menuWidth, ...props }: MenuButtonProps) => import("react").JSX.Element;
