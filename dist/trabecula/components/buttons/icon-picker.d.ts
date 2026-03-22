/// <reference types="react" />
import { ButtonProps, IconName, MenuButtonProps, ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface IconPickerProps extends Omit<ButtonProps, "onChange" | "value"> {
    color?: string;
    label?: string;
    menuProps?: Partial<MenuButtonProps>;
    setValue: (val: IconName | null) => void;
    value: IconName | null;
    viewProps?: ViewProps;
    withStylePicker?: boolean;
    width?: CSS["width"];
}
export declare const IconPicker: import("react").ForwardRefExoticComponent<Omit<IconPickerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
