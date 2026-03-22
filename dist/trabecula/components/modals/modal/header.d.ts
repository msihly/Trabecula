import { ReactNode } from "react";
import { CSS } from "trabecula/utils/client";
export interface HeaderProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    justify?: CSS["justifyContent"];
    leftNode?: ReactNode;
    rightNode?: ReactNode;
}
export declare const Header: ({ children, className, justify, leftNode, rightNode, }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
