/// <reference types="react" />
import { DropdownProps, HeaderWrapperProps, NumInputProps, ViewProps } from "trabecula/components";
import { LogicalOp } from "trabecula/utils/common";
export interface LogOpsInputProps extends ViewProps {
    dropdownProps?: Partial<DropdownProps>;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    logOpValue: "" | LogicalOp;
    numInputProps?: Partial<NumInputProps>;
    numValue: number;
    numValueDisplay?: string;
    setLogOpValue: (val: LogicalOp) => void;
    setNumValue?: (val: number) => void;
    setNumValueDisplay?: (val: string) => void;
}
export declare const LogOpsInput: ({ dropdownProps, header, headerProps, logOpValue, numInputProps, numValue, numValueDisplay, setLogOpValue, setNumValue, setNumValueDisplay, ...props }: LogOpsInputProps) => import("react").JSX.Element;
