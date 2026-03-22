import { ReactNode } from "react";
import { ToastContainerProps, TypeOptions } from "react-toastify";
export declare const toast: {
    error: <TData = unknown>(content: import("react-toastify").ToastContent<TData>, options?: import("react-toastify").ToastOptions<{}>) => import("react-toastify").Id;
    info: <TData_1 = unknown>(content: import("react-toastify").ToastContent<TData_1>, options?: import("react-toastify").ToastOptions<{}>) => import("react-toastify").Id;
    success: <TData_2 = unknown>(content: import("react-toastify").ToastContent<TData_2>, options?: import("react-toastify").ToastOptions<{}>) => import("react-toastify").Id;
    warn: <TData_3 = unknown>(content: import("react-toastify").ToastContent<TData_3>, options?: import("react-toastify").ToastOptions<{}>) => import("react-toastify").Id;
};
export declare class Toaster {
    private toastTimeoutRef;
    private toastRef;
    toast(text: ReactNode, options?: {
        autoClose?: number | false;
        type?: TypeOptions;
    }): void;
}
export declare const ToastContainer: (props: ToastContainerProps) => import("react").JSX.Element;
