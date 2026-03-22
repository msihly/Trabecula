import { HTMLAttributes, ReactNode } from "react";
import { BorderRadiuses, Borders, CSS, Margins, Padding } from "trabecula/utils/client";
export interface ViewProps extends HTMLAttributes<HTMLDivElement> {
    align?: CSS["alignItems"];
    bgColor?: CSS["backgroundColor"];
    borders?: Borders;
    borderRadiuses?: BorderRadiuses;
    children?: ReactNode | ReactNode[];
    className?: string;
    column?: boolean;
    display?: CSS["display"];
    flex?: CSS["flex"];
    height?: CSS["height"];
    justify?: CSS["justifyContent"];
    margins?: Margins;
    opacity?: CSS["opacity"];
    overflow?: CSS["overflow"];
    padding?: Padding;
    position?: CSS["position"];
    row?: boolean;
    spacing?: CSS["marginRight"];
    width?: CSS["width"];
    wrap?: CSS["flexWrap"];
}
export declare const View: any;
