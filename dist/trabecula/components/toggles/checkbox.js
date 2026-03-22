"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const color_1 = __importDefault(require("color"));
const client_1 = require("trabecula/utils/client");
const Checkbox = ({ center, checked, className, color = client_1.colors.custom.blue, disabled, flex = 1, fullWidth = true, indeterminate, label, margins = { left: 0, right: 0 }, padding = { all: "0.3rem" }, setChecked, }) => {
    const { css, cx } = useClasses({ center, color, disabled, flex, fullWidth, margins, padding });
    const toggleChecked = () => !disabled && setChecked(!checked);
    return ((0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { disabled, label, control: (0, jsx_runtime_1.jsx)(material_1.Checkbox, { checked, disabled, indeterminate, onClick: toggleChecked, className: css.checkbox }), className: cx(css.label, className) }));
};
exports.Checkbox = Checkbox;
const useClasses = (0, client_1.makeClasses)((props) => ({
    checkbox: {
        ...(0, client_1.makePadding)(props.padding),
        color: `${props.color} !important`,
        opacity: props.disabled ? 0.5 : 1,
    },
    label: {
        display: "flex",
        flex: props.flex,
        justifyContent: props.center ? "center" : undefined,
        borderRadius: "0.5rem",
        ...(0, client_1.makeMargins)(props.margins),
        width: props.fullWidth ? "100%" : "auto",
        whiteSpace: "nowrap",
        transition: "all 200ms ease-in-out",
        userSelect: "none",
        "&:hover": {
            backgroundColor: (0, color_1.default)(client_1.colors.custom.blue).fade(0.8).string(),
        },
        "& .MuiFormControlLabel-label": {
            paddingRight: "0.4em",
        },
    },
}));
