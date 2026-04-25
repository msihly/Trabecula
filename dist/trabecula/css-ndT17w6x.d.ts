import * as csstype from 'csstype';
import { colors as colors$1 } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { CSSObject, Cx } from 'tss-react';

type CSS = CSSObject;
type Borders = {
    all?: CSS["border"];
    top?: CSS["borderTop"];
    bottom?: CSS["borderBottom"];
    right?: CSS["borderRight"];
    left?: CSS["borderLeft"];
};
declare const makeBorders: (props: Borders) => {
    border: csstype.Property.Border<string | number> | readonly NonNullable<csstype.Property.Border<string | number>>[] | readonly (string | (string & {}))[];
    borderTop: readonly (string | (string & {}))[] | csstype.Property.BorderTop<string | number> | readonly NonNullable<csstype.Property.BorderTop<string | number>>[];
    borderBottom: readonly (string | (string & {}))[] | csstype.Property.BorderBottom<string | number> | readonly NonNullable<csstype.Property.BorderBottom<string | number>>[];
    borderRight: readonly (string | (string & {}))[] | csstype.Property.BorderRight<string | number> | readonly NonNullable<csstype.Property.BorderRight<string | number>>[];
    borderLeft: readonly (string | (string & {}))[] | csstype.Property.BorderLeft<string | number> | readonly NonNullable<csstype.Property.BorderLeft<string | number>>[];
};
type BorderRadiuses = {
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
declare const makeBorderRadiuses: (radiuses: BorderRadiuses) => {
    borderTopLeftRadius: string | number | readonly NonNullable<csstype.Property.BorderRadius<string | number>>[];
    borderTopRightRadius: string | number | readonly NonNullable<csstype.Property.BorderRadius<string | number>>[];
    borderBottomLeftRadius: string | number | readonly NonNullable<csstype.Property.BorderRadius<string | number>>[];
    borderBottomRightRadius: string | number | readonly NonNullable<csstype.Property.BorderRadius<string | number>>[];
};
type Margins = {
    all?: CSS["margin"];
    top?: CSS["marginTop"];
    bottom?: CSS["marginBottom"];
    right?: CSS["marginRight"];
    left?: CSS["marginLeft"];
};
declare const makeMargins: (props: Margins) => {
    margin: readonly (string | (string & {}))[] | csstype.Property.Margin<string | number> | readonly NonNullable<csstype.Property.Margin<string | number>>[];
    marginTop: readonly (string | (string & {}))[] | csstype.Property.MarginTop<string | number> | readonly NonNullable<csstype.Property.MarginTop<string | number>>[];
    marginBottom: readonly (string | (string & {}))[] | csstype.Property.MarginBottom<string | number> | readonly NonNullable<csstype.Property.MarginBottom<string | number>>[];
    marginRight: readonly (string | (string & {}))[] | csstype.Property.MarginRight<string | number> | readonly NonNullable<csstype.Property.MarginRight<string | number>>[];
    marginLeft: readonly (string | (string & {}))[] | csstype.Property.MarginLeft<string | number> | readonly NonNullable<csstype.Property.MarginLeft<string | number>>[];
};
type Padding = {
    all?: CSS["padding"];
    top?: CSS["paddingTop"];
    bottom?: CSS["paddingBottom"];
    right?: CSS["paddingRight"];
    left?: CSS["paddingLeft"];
};
declare const makePadding: (props: Padding) => {
    padding: readonly (string | (string & {}))[] | csstype.Property.Padding<string | number> | readonly NonNullable<csstype.Property.Padding<string | number>>[];
    paddingTop: readonly (string | (string & {}))[] | csstype.Property.PaddingTop<string | number> | readonly NonNullable<csstype.Property.PaddingTop<string | number>>[];
    paddingBottom: readonly (string | (string & {}))[] | csstype.Property.PaddingBottom<string | number> | readonly NonNullable<csstype.Property.PaddingBottom<string | number>>[];
    paddingRight: readonly (string | (string & {}))[] | csstype.Property.PaddingRight<string | number> | readonly NonNullable<csstype.Property.PaddingRight<string | number>>[];
    paddingLeft: readonly (string | (string & {}))[] | csstype.Property.PaddingLeft<string | number> | readonly NonNullable<csstype.Property.PaddingLeft<string | number>>[];
};
type ClassName<T> = {
    [P in keyof T]: CSS;
};
declare const makeClasses: <Class extends ClassName<Class>, Props = Record<string, any>>(fnOrObj: ClassName<Class> | ((props: Props, theme: Theme) => ClassName<Class>)) => (params: Props) => {
    css: Record<keyof Class, string>;
    cx: Cx;
};
declare const colors: {
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
    mui: typeof colors$1;
    tagCategories: string[][];
};

export { type BorderRadiuses as B, type CSS as C, type Margins as M, type Padding as P, type Borders as a, makeBorders as b, colors as c, makeClasses as d, makeMargins as e, makePadding as f, makeBorderRadiuses as m };
