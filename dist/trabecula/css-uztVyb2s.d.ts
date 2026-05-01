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
type HexColor = `#${string}`;
type RgbColor = `rgb(${number}, ${number}, ${number})` | `rgb(${number} ${number} ${number} / ${number | `${number}%`})` | `rgba(${number}, ${number}, ${number}, ${number | `${number}%`})`;
type HslColor = `hsl(${number}, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number | `${number}%`})`;
type CssNamedColor = "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "transparent" | "currentColor";
type CssColor = HexColor | RgbColor | HslColor | CssNamedColor;
declare const colors: {
    readonly background: "#1E1E1E";
    readonly custom: Record<string, CssColor>;
    readonly foreground: "#2C2C2C";
    readonly foregroundCard: "#343434";
    readonly mui: typeof colors$1;
    readonly tagCategories: string[][];
};

export { type BorderRadiuses as B, type CSS as C, type Margins as M, type Padding as P, type Borders as a, type CssColor as b, type CssNamedColor as c, colors as d, makeBorders as e, makeClasses as f, makeMargins as g, makePadding as h, makeBorderRadiuses as m };
