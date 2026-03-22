import { DateInputProps, HeaderWrapperProps } from "trabecula/components";
export interface DateRangeProps {
    dateInputProps?: Partial<DateInputProps>;
    endDate: string;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    setEndDate: (val: string) => void;
    setStartDate: (val: string) => void;
    startDate: string;
}
export declare const DateRange: ({ dateInputProps, endDate, header, headerProps, setEndDate, setStartDate, startDate, }: DateRangeProps) => import("react/jsx-runtime").JSX.Element;
