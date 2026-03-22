import { HeaderWrapperProps, InputProps } from "trabecula/components";
export interface MultiInputProps<T = string> {
    hasDelete?: boolean;
    hasDeleteAll?: boolean;
    hasEditor?: boolean;
    hasHelper?: boolean;
    hasList?: boolean;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    inputProps?: InputProps;
    max?: number;
    onChange: (val: T[]) => void;
    single?: boolean;
    value: T[];
}
export declare const MultiInput: any;
