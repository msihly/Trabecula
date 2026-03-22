"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const color_1 = __importDefault(require("color"));
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const DEFAULT_ICON_END_MARGINS = { left: "1em" };
const DEFAULT_ICON_MARGINS = { right: "1em" };
const ListItem = ({ children, color, icon, iconProps, iconEnd, iconEndMargins, iconMargins, onClick, text, ...props }) => {
    iconMargins = { ...DEFAULT_ICON_MARGINS, ...iconMargins };
    iconEndMargins = { ...DEFAULT_ICON_END_MARGINS, ...iconEndMargins };
    const { css, cx } = useClasses({ color });
    return ((0, jsx_runtime_1.jsx)(components_1.TooltipWrapper, { tooltip: children, tooltipProps: {
            arrow: false,
            bgColor: (0, color_1.default)(client_1.colors.custom.black).fade(0.03).string(),
            classes: { tooltip: css.tooltip },
            placement: "right-start",
            PopperProps: { className: css.tooltipPopper },
        }, children: (0, jsx_runtime_1.jsxs)(material_1.ListItem
        // @ts-expect-error
        , { 
            // @ts-expect-error
            button: Boolean(onClick), onClick: onClick, className: cx(css.root, props.className), ...props, children: [icon && ((0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { className: css.icon, children: (0, jsx_runtime_1.jsx)(components_1.Icon, { ...iconProps, name: icon, margins: iconMargins }) })), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { className: css.text, children: text }), iconEnd && ((0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { className: css.icon, children: (0, jsx_runtime_1.jsx)(components_1.Icon, { name: iconEnd, margins: iconEndMargins }) }))] }) }));
};
exports.ListItem = ListItem;
const useClasses = (0, client_1.makeClasses)((props) => ({
    icon: {
        minWidth: 0,
    },
    root: {
        padding: "0.1rem 0.8rem",
        "&:not(:last-child)": {
            borderBottom: `1px solid ${client_1.colors.custom.darkGrey}`,
        },
    },
    text: {
        color: props.color,
    },
    tooltip: {
        margin: 0,
        padding: 0,
    },
    tooltipPopper: {
        marginLeft: "-0.75rem !important",
    },
}));
