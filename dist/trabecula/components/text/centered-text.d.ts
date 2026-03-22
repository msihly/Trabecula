/// <reference types="react" />
import { TextProps, ViewProps } from "trabecula/components";
export interface CenteredTextProps extends TextProps {
    color?: string;
    text: string;
    viewProps?: Partial<ViewProps>;
}
export declare const CenteredText: ({ color, text, viewProps, ...props }: CenteredTextProps) => import("react").JSX.Element;
