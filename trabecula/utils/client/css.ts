// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { colors as muiColors } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import Color from "color";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { createMakeAndWithStyles, CSSObject, Cx } from "tss-react";

export type CSS = CSSObject;

export type Borders = {
  all?: CSS["border"];
  top?: CSS["borderTop"];
  bottom?: CSS["borderBottom"];
  right?: CSS["borderRight"];
  left?: CSS["borderLeft"];
};

export const makeBorders = (props: Borders) => ({
  border: props?.all,
  borderTop: props?.top,
  borderBottom: props?.bottom,
  borderRight: props?.right,
  borderLeft: props?.left,
});

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

export const makeBorderRadiuses = (radiuses: BorderRadiuses) => ({
  borderTopLeftRadius: radiuses?.topLeft ?? radiuses?.top ?? radiuses?.left ?? radiuses?.all,
  borderTopRightRadius: radiuses?.topRight ?? radiuses?.top ?? radiuses?.right ?? radiuses?.all,
  borderBottomLeftRadius:
    radiuses?.bottomLeft ?? radiuses?.bottom ?? radiuses?.left ?? radiuses?.all,
  borderBottomRightRadius:
    radiuses?.bottomRight ?? radiuses?.bottom ?? radiuses?.right ?? radiuses?.all,
});

export type Margins = {
  all?: CSS["margin"];
  top?: CSS["marginTop"];
  bottom?: CSS["marginBottom"];
  right?: CSS["marginRight"];
  left?: CSS["marginLeft"];
};

export const makeMargins = (props: Margins) => ({
  margin: props?.all,
  marginTop: props?.top,
  marginBottom: props?.bottom,
  marginRight: props?.right,
  marginLeft: props?.left,
});

export type Padding = {
  all?: CSS["padding"];
  top?: CSS["paddingTop"];
  bottom?: CSS["paddingBottom"];
  right?: CSS["paddingRight"];
  left?: CSS["paddingLeft"];
};

export const makePadding = (props: Padding) => ({
  padding: props?.all,
  paddingTop: props?.top,
  paddingBottom: props?.bottom,
  paddingRight: props?.right,
  paddingLeft: props?.left,
});

type ClassName<T> = { [P in keyof T]: CSS };

const { makeStyles } = createMakeAndWithStyles({ useTheme });

export const makeClasses = <Class extends ClassName<Class>, Props = Record<string, any>>(
  fnOrObj: ClassName<Class> | ((props: Props, theme: Theme) => ClassName<Class>),
) => {
  return (params: Props) => {
    const { classes: css, cx } = makeStyles<Props>()((props, theme) =>
      typeof fnOrObj === "function" ? fnOrObj(theme, props) : fnOrObj,
    )(params);

    return { css, cx } as { css: Record<keyof Class, string>; cx: Cx };
  };
};

type HexColor = `#${string}`;

type RgbColor =
  | `rgb(${number}, ${number}, ${number})`
  | `rgb(${number} ${number} ${number} / ${number | `${number}%`})`
  | `rgba(${number}, ${number}, ${number}, ${number | `${number}%`})`;

type HslColor =
  | `hsl(${number}, ${number}%, ${number}%)`
  | `hsla(${number}, ${number}%, ${number}%, ${number | `${number}%`})`;

export type CssNamedColor =
  | "aliceblue"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightgrey"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen"
  | "transparent"
  | "currentColor";

export type CssColor = HexColor | RgbColor | HslColor | CssNamedColor;

const customColors = {
  black: "#131313",
  blue: "#2866c5",
  blueGrey: "#546e7a",
  brown: "#6d4c41",
  darkGrey: "#2b2b2b",
  green: "#2e7d32",
  grey: "#4b4b4b",
  lightBlue: "#578cdd",
  lightGrey: "#bdbdbd",
  orange: "#ad6a27",
  purple: "#683980",
  red: "#982525",
  white: "#f5f5f5",
  yellow: "#e3c648",
} as const;

const tagCategories = [
  customColors.red,
  customColors.orange,
  customColors.yellow,
  customColors.green,
  customColors.blue,
  customColors.blueGrey,
  customColors.purple,
].map((c) => [
  Color(c).lighten(0.4).hex() as CssColor,
  Color(c).lighten(0.2).hex() as CssColor,
  Color(c).hex() as CssColor,
  Color(c).darken(0.2).hex() as CssColor,
  Color(c).darken(0.4).hex() as CssColor,
]);

export const colors = {
  background: "#1E1E1E",
  custom: customColors,
  foreground: "#2C2C2C",
  foregroundCard: "#343434",
  mui: muiColors,
  tagCategories,
} as const;
