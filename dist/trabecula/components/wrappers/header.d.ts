import { ReactNode } from "react";
import { ViewProps } from "trabecula/components";
export interface HeaderWrapperProps extends ViewProps {
    header?: ReactNode;
    headerProps?: Partial<ViewProps> & {
        fontSize?: string;
    };
}
export declare const HeaderWrapper: ({ children, display, header, height, headerProps, position, row, spacing, ...viewProps }: HeaderWrapperProps) => import("react").JSX.Element;
