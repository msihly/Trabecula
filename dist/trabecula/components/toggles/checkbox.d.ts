import { ReactNode } from "react";
import { CSS, Margins, Padding } from "trabecula/utils/client";
export interface CheckboxProps {
    center?: boolean;
    checked: boolean;
    className?: string;
    color?: string;
    disabled?: boolean;
    flex?: CSS["flex"];
    fullWidth?: boolean;
    indeterminate?: boolean;
    label?: ReactNode;
    margins?: Margins;
    padding?: Padding;
    setChecked: (checked: boolean) => void;
}
export declare const Checkbox: ({ center, checked, className, color, disabled, flex, fullWidth, indeterminate, label, margins, padding, setChecked, }: CheckboxProps) => import("react").JSX.Element;
