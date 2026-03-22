import { ReactNode } from "react";
export interface TableColumn<T> {
    header: string;
    valueFunc: (row: T) => ReactNode;
    className?: string;
    wrap?: boolean;
}
export interface TableProps<T> {
    className?: string;
    columns: TableColumn<T>[];
    hasEmptyRows?: boolean;
    hasPagination?: boolean;
    rowCountOptions?: number[];
    paginationClassName?: string;
    rows: T[];
}
export declare const Table: <T extends object>({ className, columns, hasEmptyRows, hasPagination, rowCountOptions, rows, paginationClassName, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
