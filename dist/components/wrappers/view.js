"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
exports.View = (0, components_1.Comp)(({ align, bgColor, borders, borderRadiuses, children, className, column, display, flex, height, justify, margins, opacity, overflow, padding, position, row, spacing, width, wrap, ...props }, ref) => {
    if (row)
        column = false;
    const { css, cx } = useClasses({
        align,
        bgColor,
        borders,
        borderRadiuses,
        column,
        display,
        flex,
        height,
        justify,
        margins,
        opacity,
        overflow,
        padding,
        position,
        row,
        spacing,
        width,
        wrap,
    });
    return ((0, jsx_runtime_1.jsx)("div", { ...props, ref: ref, className: cx(className, css.view), children: children }));
});
const useClasses = (0, client_1.makeClasses)((props) => ({
    view: {
        position: props.position,
        display: props.display ?? (props.column || props.row ? "flex" : undefined),
        flexDirection: props.column ? "column" : props.row ? "row" : undefined,
        flex: props.flex,
        flexWrap: props.wrap,
        alignItems: props.align,
        justifyContent: props.justify,
        ...(0, client_1.makeBorders)(props.borders),
        ...(0, client_1.makeBorderRadiuses)(props.borderRadiuses),
        ...(0, client_1.makeMargins)(props.margins),
        ...(0, client_1.makePadding)(props.padding),
        height: props.height,
        width: props.width,
        backgroundColor: props.bgColor,
        opacity: props.opacity,
        overflow: props.overflow,
        ...(props.spacing
            ? {
                "& > *:not(:last-child)": {
                    [props.column ? "marginBottom" : "marginRight"]: props.spacing,
                },
            }
            : {}),
    },
}));
