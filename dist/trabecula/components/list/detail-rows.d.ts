import { ReactNode } from "react";
import { CSS } from "trabecula/utils/client";
type Row = {
    label: string | ReactNode;
    value: string | ReactNode;
};
interface DetailRowsProps {
    labelWidth?: CSS["maxWidth"];
    rows: Row[];
}
export declare const DetailRows: ({ labelWidth, rows }: DetailRowsProps) => import("react").JSX.Element;
export {};
