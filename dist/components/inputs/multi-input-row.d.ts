/// <reference types="react" />
export declare const MULTI_INPUT_ROW_HEIGHT = 35;
export type MultiInputRowOption<T = string> = {
    label: string;
    value: T;
};
export interface MultiInputRowProps<T> {
    bgColor?: string;
    hasDelete?: boolean;
    leftNode?: React.ReactNode;
    onClick?: (value: T) => void;
    rightNode?: React.ReactNode;
    search: {
        onChange: (val: T[]) => void;
        value: T[];
    };
    style?: React.CSSProperties;
    value: T;
    valueExtractor?: (value: T) => string;
}
export declare const MultiInputRow: <T>({ bgColor, ...props }: MultiInputRowProps<T>) => import("react/jsx-runtime").JSX.Element;
