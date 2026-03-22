"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const IconButton = ({ children, className, disabled, iconProps = {}, margins, name, onClick, size, tooltip, tooltipProps, ...props }) => {
    const { css, cx } = useClasses({ disabled, margins });
    return ((0, jsx_runtime_1.jsx)(components_1.TooltipWrapper, { tooltip, tooltipProps, children: (0, jsx_runtime_1.jsxs)(material_1.IconButton, { ...props, disabled, onClick, size, className: cx(css.root, className), children: [name && (0, jsx_runtime_1.jsx)(components_1.Icon, { ...iconProps, name: name }), children] }) }));
};
exports.IconButton = IconButton;
const useClasses = (0, client_1.makeClasses)((props) => ({
    root: {
        ...(0, client_1.makeMargins)(props.margins),
        opacity: props.disabled ? 0.5 : 1,
        transition: "all 100ms ease-in-out",
    },
}));
