/// <reference types="react" />
import { DialogProps } from "@mui/material";
import { CSS } from "trabecula/utils/client";
export interface ContainerProps extends Omit<DialogProps, "maxWidth" | "open" | "onClose" | "title"> {
    closeOnBackdrop?: boolean;
    height?: CSS["height"];
    isLoading?: boolean;
    maxHeight?: CSS["maxHeight"];
    maxWidth?: CSS["maxWidth"];
    onClose?: () => void;
    visible?: boolean;
    width?: CSS["width"];
}
export declare const Container: ({ children, className, closeOnBackdrop, draggable, height, isLoading, maxHeight, maxWidth, onClose, scroll, visible, width, ...props }: ContainerProps) => import("react").JSX.Element;
