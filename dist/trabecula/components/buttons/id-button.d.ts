/// <reference types="react" />
import { ButtonProps } from "trabecula/components";
export interface IdButtonProps extends ButtonProps {
    value: string;
}
export declare const IdButton: ({ value, ...props }: IdButtonProps) => import("react").JSX.Element;
