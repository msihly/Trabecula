import { Dispatch, ReactNode, SetStateAction } from "react";
import { IconName } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface ConfirmModalProps {
    cancelColor?: string;
    cancelIcon?: IconName;
    cancelText?: string;
    children?: ReactNode | ReactNode[];
    confirmColor?: string;
    confirmIcon?: IconName;
    confirmText?: string;
    headerText?: string;
    height?: CSS["height"];
    onCancel?: () => void;
    onConfirm: () => Promise<boolean>;
    setVisible: Dispatch<SetStateAction<boolean>>;
    subText?: string;
    width?: CSS["width"];
}
export declare const ConfirmModal: ({ cancelColor, cancelIcon, cancelText, children, confirmColor, confirmIcon, confirmText, headerText, height, onCancel, onConfirm, setVisible, subText, width, }: ConfirmModalProps) => import("react").JSX.Element;
