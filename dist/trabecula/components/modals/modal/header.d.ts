import { ReactNode } from "react";
import { CSS } from "trabecula/utils/client";
interface HeaderProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    justify?: CSS["justifyContent"];
    leftNode?: ReactNode;
    rightNode?: ReactNode;
}
export declare const Header: ({ children, className, justify, leftNode, rightNode, }: HeaderProps) => import("react").JSX.Element;
export {};
