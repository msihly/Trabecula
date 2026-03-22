import { ReactNode } from "react";
import { ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface UniformListProps extends ViewProps {
    children: ReactNode | ReactNode[];
    uniformWidth?: CSS["maxWidth"];
}
export declare const UniformList: ({ children, uniformWidth, ...props }: UniformListProps) => import("react").JSX.Element;
