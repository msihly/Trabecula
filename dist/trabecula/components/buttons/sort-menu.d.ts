import { IconName, IconProps } from "trabecula/components";
import { ButtonProps } from "trabecula/components/buttons";
import { CSS } from "trabecula/utils/client";
export interface SortMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
    color?: string;
    hasHeader?: boolean;
    rows: {
        attribute: string;
        label: string;
        icon: IconName;
        iconProps?: Partial<IconProps>;
    }[];
    setValue: (value: {
        isDesc: boolean;
        key: string;
    }) => void;
    value: {
        isDesc: boolean;
        key: string;
    };
    width?: CSS["width"];
}
export declare const SortMenu: ({ color, hasHeader, rows, setValue, value, width, ...buttonProps }: SortMenuProps) => import("react/jsx-runtime").JSX.Element;
