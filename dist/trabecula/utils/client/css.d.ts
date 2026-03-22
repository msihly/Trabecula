import { colors as muiColors } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { CSSObject, Cx } from "tss-react";
export type CSS = CSSObject;
export type Borders = {
    all?: CSS["border"];
    top?: CSS["borderTop"];
    bottom?: CSS["borderBottom"];
    right?: CSS["borderRight"];
    left?: CSS["borderLeft"];
};
export declare const makeBorders: (props: Borders) => {
    border: import("csstype").Property.Border<string | number> | readonly NonNullable<import("csstype").Property.Border<string | number>>[] | readonly (string | (string & {}))[];
    borderTop: import("csstype").Property.BorderTop<string | number> | readonly NonNullable<import("csstype").Property.BorderTop<string | number>>[] | readonly (string | (string & {}))[];
    borderBottom: import("csstype").Property.BorderBottom<string | number> | readonly NonNullable<import("csstype").Property.BorderBottom<string | number>>[] | readonly (string | (string & {}))[];
    borderRight: import("csstype").Property.BorderRight<string | number> | readonly NonNullable<import("csstype").Property.BorderRight<string | number>>[] | readonly (string | (string & {}))[];
    borderLeft: import("csstype").Property.BorderLeft<string | number> | readonly NonNullable<import("csstype").Property.BorderLeft<string | number>>[] | readonly (string | (string & {}))[];
};
export type BorderRadiuses = {
    all?: CSS["borderRadius"];
    bottomLeft?: CSS["borderBottomLeftRadius"];
    bottomRight?: CSS["borderBottomRightRadius"];
    topLeft?: CSS["borderTopLeftRadius"];
    topRight?: CSS["borderTopRightRadius"];
    /** Covers two corners */
    bottom?: CSS["borderTopRightRadius"];
    left?: CSS["borderTopRightRadius"];
    right?: CSS["borderTopRightRadius"];
    top?: CSS["borderTopRightRadius"];
};
export declare const makeBorderRadiuses: (radiuses: BorderRadiuses) => {
    borderTopLeftRadius: string | number | readonly NonNullable<import("csstype").Property.BorderRadius<string | number>>[];
    borderTopRightRadius: string | number | readonly NonNullable<import("csstype").Property.BorderRadius<string | number>>[];
    borderBottomLeftRadius: string | number | readonly NonNullable<import("csstype").Property.BorderRadius<string | number>>[];
    borderBottomRightRadius: string | number | readonly NonNullable<import("csstype").Property.BorderRadius<string | number>>[];
};
export type Margins = {
    all?: CSS["margin"];
    top?: CSS["marginTop"];
    bottom?: CSS["marginBottom"];
    right?: CSS["marginRight"];
    left?: CSS["marginLeft"];
};
export declare const makeMargins: (props: Margins) => {
    margin: import("csstype").Property.Margin<string | number> | readonly NonNullable<import("csstype").Property.Margin<string | number>>[] | readonly (string | (string & {}))[];
    marginTop: import("csstype").Property.MarginTop<string | number> | readonly NonNullable<import("csstype").Property.MarginTop<string | number>>[] | readonly (string | (string & {}))[];
    marginBottom: import("csstype").Property.MarginBottom<string | number> | readonly NonNullable<import("csstype").Property.MarginBottom<string | number>>[] | readonly (string | (string & {}))[];
    marginRight: import("csstype").Property.MarginRight<string | number> | readonly NonNullable<import("csstype").Property.MarginRight<string | number>>[] | readonly (string | (string & {}))[];
    marginLeft: import("csstype").Property.MarginLeft<string | number> | readonly NonNullable<import("csstype").Property.MarginLeft<string | number>>[] | readonly (string | (string & {}))[];
};
export type Padding = {
    all?: CSS["padding"];
    top?: CSS["paddingTop"];
    bottom?: CSS["paddingBottom"];
    right?: CSS["paddingRight"];
    left?: CSS["paddingLeft"];
};
export declare const makePadding: (props: Padding) => {
    padding: import("csstype").Property.Padding<string | number> | readonly NonNullable<import("csstype").Property.Padding<string | number>>[] | readonly (string | (string & {}))[];
    paddingTop: import("csstype").Property.PaddingTop<string | number> | readonly NonNullable<import("csstype").Property.PaddingTop<string | number>>[] | readonly (string | (string & {}))[];
    paddingBottom: import("csstype").Property.PaddingBottom<string | number> | readonly NonNullable<import("csstype").Property.PaddingBottom<string | number>>[] | readonly (string | (string & {}))[];
    paddingRight: import("csstype").Property.PaddingRight<string | number> | readonly NonNullable<import("csstype").Property.PaddingRight<string | number>>[] | readonly (string | (string & {}))[];
    paddingLeft: import("csstype").Property.PaddingLeft<string | number> | readonly NonNullable<import("csstype").Property.PaddingLeft<string | number>>[] | readonly (string | (string & {}))[];
};
type ClassName<T> = {
    [P in keyof T]: CSS;
};
export declare const makeClasses: <Class extends ClassName<Class>, Props = Record<string, any>>(fnOrObj: ClassName<Class> | ((props: Props, theme: Theme) => ClassName<Class>)) => (params: Props) => {
    css: Record<keyof Class, string>;
    cx: Cx;
};
export declare const colors: {
    background: string;
    custom: {
        black: string;
        blue: string;
        blueGrey: string;
        brown: string;
        darkGrey: string;
        green: string;
        grey: string;
        lightBlue: string;
        lightGrey: string;
        orange: string;
        purple: string;
        red: string;
        white: string;
        yellow: string;
    };
    foreground: string;
    foregroundCard: string;
    mui: typeof muiColors;
    tagCategories: string[][];
};
export {};
