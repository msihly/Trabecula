import { InputProps } from "trabecula/components";
export interface NumInputProps extends Omit<InputProps, "setValue" | "value"> {
    maxValue?: number;
    minValue?: number;
    setValue?: (value: number) => void;
    setValueDisplay?: (value: string) => void;
    value?: number;
    valueDisplay?: string;
}
export declare const NumInput: any;
