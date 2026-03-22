// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { colors as muiColors } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Color from "color";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { createMakeAndWithStyles } from "tss-react";
export const makeBorders = (props) => ({
    border: props?.all,
    borderTop: props?.top,
    borderBottom: props?.bottom,
    borderRight: props?.right,
    borderLeft: props?.left,
});
export const makeBorderRadiuses = (radiuses) => ({
    borderTopLeftRadius: radiuses?.topLeft ?? radiuses?.top ?? radiuses?.left ?? radiuses?.all,
    borderTopRightRadius: radiuses?.topRight ?? radiuses?.top ?? radiuses?.right ?? radiuses?.all,
    borderBottomLeftRadius: radiuses?.bottomLeft ?? radiuses?.bottom ?? radiuses?.left ?? radiuses?.all,
    borderBottomRightRadius: radiuses?.bottomRight ?? radiuses?.bottom ?? radiuses?.right ?? radiuses?.all,
});
export const makeMargins = (props) => ({
    margin: props?.all,
    marginTop: props?.top,
    marginBottom: props?.bottom,
    marginRight: props?.right,
    marginLeft: props?.left,
});
export const makePadding = (props) => ({
    padding: props?.all,
    paddingTop: props?.top,
    paddingBottom: props?.bottom,
    paddingRight: props?.right,
    paddingLeft: props?.left,
});
const { makeStyles } = createMakeAndWithStyles({ useTheme });
export const makeClasses = (fnOrObj) => {
    return (params) => {
        const { classes: css, cx } = makeStyles()((props, theme) => typeof fnOrObj === "function" ? fnOrObj(theme, props) : fnOrObj)(params);
        return { css, cx };
    };
};
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
};
const tagCategories = [
    customColors.red,
    customColors.orange,
    customColors.yellow,
    customColors.green,
    customColors.blue,
    customColors.blueGrey,
    customColors.purple,
].map((c) => [
    Color(c).lighten(0.4).hex(),
    Color(c).lighten(0.2).hex(),
    Color(c).hex(),
    Color(c).darken(0.2).hex(),
    Color(c).darken(0.4).hex(),
]);
export const colors = {
    background: "#1E1E1E",
    custom: customColors,
    foreground: "#2C2C2C",
    foregroundCard: "#343434",
    mui: muiColors,
    tagCategories,
};
