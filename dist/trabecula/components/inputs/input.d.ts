import { ReactNode } from "react";
import { TextFieldProps } from "@mui/material";
import { HeaderWrapperProps } from "trabecula/components";
import { BorderRadiuses, Borders, CSS, Margins } from "trabecula/utils/client";
export interface InputProps extends Omit<TextFieldProps, "color" | "fullWidth" | "onChange" | "helperText" | "label"> {
    adornment?: ReactNode;
    adornmentPosition?: "end" | "start";
    borders?: Borders;
    borderRadiuses?: BorderRadiuses;
    className?: string;
    color?: string;
    dense?: boolean;
    flex?: CSS["flex"];
    hasHelper?: boolean;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    helperText?: ReactNode;
    margins?: Margins;
    maxLength?: number;
    minWidth?: CSS["minWidth"];
    setValue?: (value: string) => void;
    textAlign?: CSS["textAlign"];
    value?: string;
    width?: CSS["width"];
}
export declare const Input: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
