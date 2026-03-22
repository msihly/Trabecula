import { ReactNode } from "react";
import { IconName, IconProps, ViewProps } from "trabecula/components";
interface MenuItem {
    color?: string;
    divider?: "bottom" | "top";
    icon: IconName;
    iconProps?: Partial<IconProps>;
    label: string;
}
export interface ContextMenuProps extends ViewProps {
    children: ReactNode;
    disabled?: boolean;
    id: string;
    menuItems: Array<MenuItem & ({
        onClick?: never;
        subItems: Array<MenuItem & {
            onClick: () => void;
        }>;
    } | {
        onClick: () => void;
        subItems?: never;
    })>;
}
export declare const ContextMenu: ({ children, disabled, id, menuItems, ...props }: ContextMenuProps) => import("react").JSX.Element;
export {};
