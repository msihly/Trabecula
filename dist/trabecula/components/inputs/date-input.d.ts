import { ReactNode } from "react";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { InputProps, ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
import { dayjs } from "trabecula/utils/common";
export interface DateInputProps extends Omit<DatePickerProps<dayjs.Dayjs>, "label" | "onChange" | "value"> {
    header?: ReactNode;
    headerProps?: Partial<ViewProps>;
    inputProps?: Partial<InputProps>;
    setValue?: (val: string) => void;
    value: string;
    width?: CSS["width"];
}
export declare const DateInput: ({ header, headerProps, inputProps, setValue, value, width, ...datePickerProps }: DateInputProps) => import("react").JSX.Element;
