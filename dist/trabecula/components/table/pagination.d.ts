/// <reference types="react" />
import { PaginationProps as PaginationBaseProps } from "@mui/material";
export interface PaginationProps extends Omit<PaginationBaseProps, "onChange"> {
    isLoading?: boolean;
    onChange: (page: number) => void;
    onFullLoad?: () => void;
}
export declare const Pagination: ({ className, isLoading, onChange, onFullLoad, count, ...props }: PaginationProps) => import("react").JSX.Element;
