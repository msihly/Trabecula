import { P as PaletteColor } from './palette-CoCY-L8m.js';
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
declare const makeBorders: (props?: Borders) => {
    border: readonly (string | (string & {}))[] | csstype.Property.Border<string | number> | readonly NonNullable<csstype.Property.Border<string | number>>[];
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
    borderTopLeftRadius: string | number | readonly NonNullable<csstype.Property.BorderTopLeftRadius<string | number>>[];
    borderTopRightRadius: string | number | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number>>[];
    borderBottomLeftRadius: string | number | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number>>[];
    borderBottomRightRadius: string | number | readonly NonNullable<csstype.Property.BorderTopRightRadius<string | number>>[];
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
type CssColor = "inherit" | HexColor | RgbColor | HslColor | CssNamedColor;
declare const colors: {
    readonly background: "#1B1B1E";
    /** The hairline around panels and controls, and between their parts. */
    readonly border: "rgba(255, 255, 255, 0.07)";
    /** The fill of neutral buttons, which lightens whatever surface they sit on. */
    readonly control: "rgba(255, 255, 255, 0.07)";
    readonly custom: {
        readonly black: "#131313";
        readonly blue: "#578cdd";
        readonly blueGrey: "#546e7a";
        readonly brown: "#6d4c41";
        readonly darkGrey: "#2b2b2b";
        readonly green: "#3d8b45";
        /** Recedes on the app's dark surfaces, too dark for text meant to be read; use lightGrey. */
        readonly grey: "#4b4b4b";
        /** The primary blue too, so no paler blue resembling MUI's default ever shows. */
        readonly lightBlue: "#578cdd";
        readonly lightGrey: "#bdbdbd";
        readonly orange: "#b9772f";
        readonly purple: "#71438e";
        readonly red: "#b33c3c";
        readonly white: "#ededef";
        readonly yellow: "#e3c648";
    };
    readonly foreground: "#222225";
    /** Raised one step above foreground, such as headers nested in a panel. */
    readonly foregroundCard: "#29292D";
    /** Recessed below the surface around it, so fields read as places to type. */
    readonly input: "#161618";
    readonly mui: typeof colors$1;
    /** Menus and tooltips, floating above everything else. */
    readonly overlay: "#303035";
    readonly palette: {
        readonly red: {
            readonly 300: "#fca5a5";
            readonly 400: "#f87171";
            readonly 500: "#ef4444";
            readonly 600: "#dc2626";
            readonly 700: "#b91c1c";
            readonly 800: "#991b1b";
            readonly 900: "#7f1d1d";
        };
        readonly orange: {
            readonly 300: "#fdba74";
            readonly 400: "#fb923c";
            readonly 500: "#f97316";
            readonly 600: "#ea580c";
            readonly 700: "#c2410c";
            readonly 800: "#9a3412";
            readonly 900: "#7c2d12";
        };
        readonly amber: {
            readonly 300: "#fcd34d";
            readonly 400: "#fbbf24";
            readonly 500: "#f59e0b";
            readonly 600: "#d97706";
            readonly 700: "#b45309";
            readonly 800: "#92400e";
            readonly 900: "#78350f";
        };
        readonly yellow: {
            readonly 300: "#fde047";
            readonly 400: "#facc15";
            readonly 500: "#eab308";
            readonly 600: "#ca8a04";
            readonly 700: "#a16207";
            readonly 800: "#854d0e";
            readonly 900: "#713f12";
        };
        readonly lime: {
            readonly 300: "#bef264";
            readonly 400: "#a3e635";
            readonly 500: "#84cc16";
            readonly 600: "#65a30d";
            readonly 700: "#4d7c0f";
            readonly 800: "#3f6212";
            readonly 900: "#365314";
        };
        readonly green: {
            readonly 300: "#86efac";
            readonly 400: "#4ade80";
            readonly 500: "#22c55e";
            readonly 600: "#16a34a";
            readonly 700: "#15803d";
            readonly 800: "#166534";
            readonly 900: "#14532d";
        };
        readonly emerald: {
            readonly 300: "#6ee7b7";
            readonly 400: "#34d399";
            readonly 500: "#10b981";
            readonly 600: "#059669";
            readonly 700: "#047857";
            readonly 800: "#065f46";
            readonly 900: "#064e3b";
        };
        readonly teal: {
            readonly 300: "#5eead4";
            readonly 400: "#2dd4bf";
            readonly 500: "#14b8a6";
            readonly 600: "#0d9488";
            readonly 700: "#0f766e";
            readonly 800: "#115e59";
            readonly 900: "#134e4a";
        };
        readonly cyan: {
            readonly 300: "#67e8f9";
            readonly 400: "#22d3ee";
            readonly 500: "#06b6d4";
            readonly 600: "#0891b2";
            readonly 700: "#0e7490";
            readonly 800: "#155e75";
            readonly 900: "#164e63";
        };
        readonly sky: {
            readonly 300: "#7dd3fc";
            readonly 400: "#38bdf8";
            readonly 500: "#0ea5e9";
            readonly 600: "#0284c7";
            readonly 700: "#0369a1";
            readonly 800: "#075985";
            readonly 900: "#0c4a6e";
        };
        readonly blue: {
            readonly 300: "#93c5fd";
            readonly 400: "#60a5fa";
            readonly 500: "#3b82f6";
            readonly 600: "#2563eb";
            readonly 700: "#1d4ed8";
            readonly 800: "#1e40af";
            readonly 900: "#1e3a8a";
        };
        readonly indigo: {
            readonly 300: "#a5b4fc";
            readonly 400: "#818cf8";
            readonly 500: "#6366f1";
            readonly 600: "#4f46e5";
            readonly 700: "#4338ca";
            readonly 800: "#3730a3";
            readonly 900: "#312e81";
        };
        readonly violet: {
            readonly 300: "#c4b5fd";
            readonly 400: "#a78bfa";
            readonly 500: "#8b5cf6";
            readonly 600: "#7c3aed";
            readonly 700: "#6d28d9";
            readonly 800: "#5b21b6";
            readonly 900: "#4c1d95";
        };
        readonly purple: {
            readonly 300: "#d8b4fe";
            readonly 400: "#c084fc";
            readonly 500: "#a855f7";
            readonly 600: "#9333ea";
            readonly 700: "#7e22ce";
            readonly 800: "#6b21a8";
            readonly 900: "#581c87";
        };
        readonly fuchsia: {
            readonly 300: "#f0abfc";
            readonly 400: "#e879f9";
            readonly 500: "#d946ef";
            readonly 600: "#c026d3";
            readonly 700: "#a21caf";
            readonly 800: "#86198f";
            readonly 900: "#701a75";
        };
        readonly pink: {
            readonly 300: "#f9a8d4";
            readonly 400: "#f472b6";
            readonly 500: "#ec4899";
            readonly 600: "#db2777";
            readonly 700: "#be185d";
            readonly 800: "#9d174d";
            readonly 900: "#831843";
        };
        readonly rose: {
            readonly 300: "#fda4af";
            readonly 400: "#fb7185";
            readonly 500: "#f43f5e";
            readonly 600: "#e11d48";
            readonly 700: "#be123c";
            readonly 800: "#9f1239";
            readonly 900: "#881337";
        };
        readonly slate: {
            readonly 300: "#cbd5e1";
            readonly 400: "#94a3b8";
            readonly 500: "#64748b";
            readonly 600: "#475569";
            readonly 700: "#334155";
            readonly 800: "#1e293b";
            readonly 900: "#0f172a";
        };
        readonly stone: {
            readonly 300: "#d6d3d1";
            readonly 400: "#a8a29e";
            readonly 500: "#78716c";
            readonly 600: "#57534e";
            readonly 700: "#44403c";
            readonly 800: "#292524";
            readonly 900: "#1c1917";
        };
        readonly neutral: {
            readonly 300: "#d4d4d4";
            readonly 400: "#a3a3a3";
            readonly 500: "#737373";
            readonly 600: "#525252";
            readonly 700: "#404040";
            readonly 800: "#262626";
            readonly 900: "#171717";
        };
    };
    readonly swatches: PaletteColor[][];
};
/** A translucent tint of the color, outlined in it, with text readable against the tint. */
declare const getChipColors: (color: CssColor, opacity?: number) => {
    background: CssColor;
    border: string;
    color: "#131313" | "#ededef";
};
/** Picks the light or dark text color with more contrast against an opaque background. */
declare const getContrastText: (background: CssColor) => "#131313" | "#ededef";

export { colors as d, getContrastText as e, makeBorders as f, getChipColors as g, makeClasses as h, makeMargins as i, makePadding as j, makeBorderRadiuses as m };
export type { BorderRadiuses as B, CSS as C, Margins as M, Padding as P, Borders as a, CssColor as b, CssNamedColor as c };
