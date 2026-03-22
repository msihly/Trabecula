/// <reference types="react" />
interface ConditionalWrapProps {
    children: JSX.Element | JSX.Element[];
    condition: boolean;
    wrap: (children: JSX.Element | JSX.Element[]) => JSX.Element;
}
export declare const ConditionalWrap: ({ condition, wrap, children, }: ConditionalWrapProps) => JSX.Element;
export {};
