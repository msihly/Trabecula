/// <reference types="react" />
import { ButtonProps, MenuButtonProps, ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface ColorPickerProps extends Omit<ButtonProps, "onChange" | "value"> {
    color?: string;
    label?: string;
    menuProps?: Partial<MenuButtonProps>;
    noIcon?: boolean;
    setValue: (val: string | null) => void;
    swatches: string[][];
    value: string | null;
    viewProps?: ViewProps;
    width?: CSS["width"];
}
export declare const ColorPicker: import("react").ForwardRefExoticComponent<Omit<ColorPickerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
