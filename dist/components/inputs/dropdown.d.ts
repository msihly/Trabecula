import { InputProps } from "trabecula/components";
export type DropdownOption = {
    label: string;
    value: string;
};
export interface DropdownProps extends InputProps {
    options: DropdownOption[];
}
export declare const Dropdown: ({ options, value, ...props }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
