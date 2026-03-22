import { ReactNode } from "react";
import { ViewProps } from "trabecula/components";
export interface CardProps extends ViewProps {
    header?: ReactNode;
    headerProps?: Partial<ViewProps>;
}
export declare const Card: any;
