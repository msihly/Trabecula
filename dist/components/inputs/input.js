"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const color_1 = __importDefault(require("color"));
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
const DEFAULT_HEADER_PROPS = {
    fontSize: "0.8em",
    padding: { all: "0.15rem 0.3rem" },
};
exports.Input = (0, components_1.Comp)(({ adornment, adornmentPosition = "end", borders, borderRadiuses, children, className, color, dense = false, flex, hasHelper = false, header, headerProps = {}, helperText, inputProps, margins = {}, maxLength, minWidth, onClick, onKeyDown, setValue, textAlign, value, variant = "outlined", width = "100%", ...props }, ref) => {
    headerProps = (0, common_1.deepMerge)(DEFAULT_HEADER_PROPS, headerProps);
    const { css, cx } = useClasses({
        borders,
        borderRadiuses,
        color,
        dense,
        flex,
        hasHeader: header !== undefined,
        hasHelper,
        hasHelperText: !!helperText,
        hasOnClick: !!onClick,
        margins,
        minWidth,
        textAlign,
        width,
    });
    const handleChange = (event) => setValue?.(event.target.value);
    const handleKeyDown = (event) => {
        event.stopPropagation();
        onKeyDown?.(event);
    };
    return ((0, jsx_runtime_1.jsx)(components_1.HeaderWrapper, { flex, header, headerProps, width, overflow: "initial", "aria-label": "input-wrapper", children: (0, jsx_runtime_1.jsx)(material_1.TextField, { ...props, onClick, ref, value, variant, onChange: handleChange, onKeyDown: handleKeyDown, helperText: helperText ? (typeof helperText === "string" ? ((0, jsx_runtime_1.jsx)(components_1.Text, { children: helperText })) : (helperText)) : undefined, 
            // @ts-expect-error
            FormHelperTextProps: { component: "div" }, inputProps: { ...inputProps, maxLength, value: value ?? "" }, InputProps: {
                endAdornment: adornmentPosition === "end" && adornment ? ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", children: typeof adornment === "string" ? ((0, jsx_runtime_1.jsx)(components_1.Text, { fontSize: "0.9em", color: client_1.colors.custom.grey, children: adornment })) : (adornment) })) : null,
                startAdornment: adornmentPosition === "start" ? adornment : null,
                ...props.InputProps,
            }, size: "small", className: cx(css.input, className), "aria-label": "input", children: children }) }));
});
const useClasses = (0, client_1.makeClasses)((props) => ({
    input: {
        flex: props.flex,
        ...(0, client_1.makeMargins)({
            ...props.margins,
            bottom: props.margins?.bottom ?? (props.hasHelper && !props.hasHelperText ? "1.3em" : 0),
        }),
        minWidth: props.minWidth,
        width: "100%",
        "& input": {
            borderRadius: "inherit",
            padding: props.dense ? "0.2em 0.5em" : undefined,
            textAlign: props.textAlign,
            cursor: props.hasOnClick ? "pointer" : undefined,
        },
        "& .MuiTypography-root": {
            display: "inline-grid",
            width: "100%",
            textAlign: props.textAlign,
        },
        "& .MuiOutlinedInput-root": {
            background: "rgb(0 0 0 / 0.2)",
            "& fieldset": {
                transition: "all 200ms ease-in-out",
                borderColor: props.color,
                borderStyle: "dotted",
                ...(0, client_1.makeBorders)(props.borders),
                ...(0, client_1.makeBorderRadiuses)((0, common_1.deepMerge)(props.hasHeader ? { top: 0 } : {}, props.borderRadiuses ?? {})),
            },
            "&:hover fieldset": {
                borderColor: props.color ? (0, color_1.default)(props.color).lighten(0.3).toString() : undefined,
            },
            "&.Mui-focused fieldset": {
                borderColor: props.color,
            },
        },
        "& .MuiSelect-select": {
            fontSize: "0.9em",
        },
        "& .MuiFormHelperText-root": {
            margin: "0.3em 0 0 0",
            color: props.color,
            fontSize: "0.75em",
            lineHeight: 1,
            textAlign: "center",
        },
    },
}));
