"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const color_1 = __importDefault(require("color"));
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Button = ({ borderRadiuses = { all: "0.3rem" }, boxShadow, children, className, color = client_1.colors.custom.grey, colorOnHover, endNode, fontSize = "1.15em", fontWeight = 400, href, icon, iconProps, iconRight, iconSize = "1.15em", justify = "center", loading = false, margins, onClick, outlined = false, outlineFill = "transparent", padding, size = "small", startNode, text, textColor, textTransform = "none", tooltip, tooltipProps, type = "button", width, ...props }) => {
    const { css, cx } = useClasses({
        borderRadiuses,
        boxShadow,
        color,
        colorOnHover,
        isLink: type === "link",
        justify,
        margins,
        outlined,
        outlineFill,
        padding: { all: !text?.length ? "0.4em" : "0.4em 0.8em", ...padding },
        textColor,
        textTransform,
        width,
    });
    const handleClick = (event) => {
        onClick?.(event);
        if (href)
            window.open(href, "_blank");
    };
    return ((0, jsx_runtime_1.jsx)(components_1.TooltipWrapper, { tooltip, tooltipProps, children: (0, jsx_runtime_1.jsxs)(material_1.Button, { ...props, size, onClick: handleClick, variant: "contained", className: cx(css.root, className), children: [startNode, icon && ((0, jsx_runtime_1.jsx)(components_1.View, { margins: text || iconRight ? { right: "0.3em" } : undefined, children: !loading ? ((0, jsx_runtime_1.jsx)(components_1.Icon, { name: icon, size: iconSize, color: textColor, ...iconProps })) : ((0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: "inherit", size: iconSize })) })), text && ((0, jsx_runtime_1.jsx)(components_1.Text, { fontSize, fontWeight, tooltip, tooltipProps, color: textColor, className: cx(css.text, className), children: text })), children, iconRight && ((0, jsx_runtime_1.jsx)(components_1.View, { margins: text || icon ? { left: "0.3em" } : undefined, children: !loading ? ((0, jsx_runtime_1.jsx)(components_1.Icon, { name: iconRight, size: iconSize })) : ((0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: "inherit", size: iconSize })) })), endNode] }) }));
};
exports.Button = Button;
const useClasses = (0, client_1.makeClasses)((props) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: props.justify,
        alignItems: "center",
        border: `1px solid ${props.outlined ? props.color : "transparent"}`,
        ...(0, client_1.makeBorderRadiuses)(props.borderRadiuses),
        ...(0, client_1.makeMargins)(props.margins),
        padding: props.padding?.all,
        paddingTop: props.padding?.top ?? (props.isLink ? 0 : undefined),
        paddingBottom: props.padding?.bottom ?? (props.isLink ? 0 : undefined),
        paddingRight: props.padding?.right ?? (props.isLink ? 0 : undefined),
        paddingLeft: props.padding?.left ?? (props.isLink ? 0 : undefined),
        minWidth: "fit-content",
        width: props.width,
        backgroundColor: props.isLink
            ? "transparent"
            : props.outlined
                ? props.outlineFill
                : props.color,
        boxShadow: props.boxShadow ?? "none",
        color: props.outlined
            ? props.color
            : (props.textColor ??
                (props.isLink
                    ? client_1.colors.custom.lightBlue
                    : props.outlined
                        ? props.color
                        : client_1.colors.custom.white)),
        textTransform: props.textTransform,
        "&:hover": {
            background: props.isLink
                ? "transparent"
                : props.colorOnHover ||
                    (0, color_1.default)(props.outlined ? props.outlineFill : props.color)
                        .lighten(0.1)
                        .string(),
            boxShadow: props.isLink ? "none" : undefined,
            textDecoration: props.isLink ? "underline" : undefined,
        },
    },
    text: {
        lineHeight: 1.1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        transition: "all 100ms ease-in-out",
        textTransform: props.textTransform,
    },
}));
