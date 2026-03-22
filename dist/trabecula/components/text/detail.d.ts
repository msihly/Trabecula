import { ReactNode } from "react";
import { TextProps, ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface DetailProps extends ViewProps {
    emptyValueText?: string;
    label: ReactNode;
    labelProps?: Partial<TextProps>;
    overflowX?: CSS["overflowX"];
    overflowY?: CSS["overflowY"];
    tooltip?: ReactNode;
    value: ReactNode;
    valueProps?: Partial<TextProps>;
    withTooltip?: boolean;
}
export declare const Detail: ({ emptyValueText, label, labelProps, overflowX, overflowY, row, tooltip, value, valueProps, withTooltip, ...props }: DetailProps) => import("react/jsx-runtime").JSX.Element;
