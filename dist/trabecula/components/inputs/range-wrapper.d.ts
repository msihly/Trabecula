/// <reference types="react" />
import { HeaderWrapperProps } from "trabecula/components";
export type RangeWrapperProps = {
    endInput: JSX.Element;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    startInput: JSX.Element;
};
export declare const RangeWrapper: (props: RangeWrapperProps) => import("react/jsx-runtime").JSX.Element;
