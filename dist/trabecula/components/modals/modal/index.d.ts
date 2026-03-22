export type { ContainerProps } from "./container";
export type { ContentProps } from "./content";
export type { FooterProps } from "./footer";
export type { HeaderProps } from "./header";
export declare const Modal: {
    Container: ({ children, className, closeOnBackdrop, draggable, height, isLoading, maxHeight, maxWidth, onClose, scroll, visible, width, ...props }: import("./container").ContainerProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, className, dividers, overflow, padding, position, ...viewProps }: import("./content").ContentProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, uniformWidth, ...props }: import("./footer").FooterProps) => import("react/jsx-runtime").JSX.Element;
    Header: ({ children, className, justify, leftNode, rightNode, }: import("./header").HeaderProps) => import("react/jsx-runtime").JSX.Element;
};
