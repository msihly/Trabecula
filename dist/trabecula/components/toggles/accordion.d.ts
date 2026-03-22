import { ReactNode } from "react";
import { AccordionProps as MuiAccordionProps } from "@mui/material";
export interface AccordionProps extends MuiAccordionProps {
    children: ReactNode | ReactNode[];
    color?: string;
    dense?: boolean;
    expanded?: boolean;
    fullWidth?: boolean;
    header: ReactNode;
    setExpanded?: (expanded: boolean) => void;
}
export declare const Accordion: ({ children, className, color, dense, expanded, fullWidth, header, setExpanded, }: AccordionProps) => import("react").JSX.Element;
