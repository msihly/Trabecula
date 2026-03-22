import { ReactNode } from "react";
import { ViewProps } from "trabecula/components";
import { CSS, Padding } from "trabecula/utils/client";
interface ContentProps extends ViewProps {
    children: ReactNode | ReactNode[];
    className?: string;
    dividers?: boolean;
    overflow?: CSS["overflow"];
    padding?: Padding;
    position?: CSS["position"];
}
export declare const Content: ({ children, className, dividers, overflow, padding, position, ...viewProps }: ContentProps) => import("react").JSX.Element;
export {};
