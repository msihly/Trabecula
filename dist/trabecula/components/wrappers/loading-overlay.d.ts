import { ReactNode } from "react";
export interface LoadingOverlayProps {
    children?: ReactNode | ReactNode[];
    isLoading: boolean;
    sub?: ReactNode;
}
export declare const LoadingOverlay: ({ children, isLoading, sub }: LoadingOverlayProps) => import("react").JSX.Element;
