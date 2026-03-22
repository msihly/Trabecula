"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Chip = ({ bgColor, className, color, height, icon, iconColor, iconProps, label, padding, width, ...props }) => {
    const { css, cx } = useClasses({ bgColor, color, height, padding, width });
    return ((0, jsx_runtime_1.jsx)(material_1.Chip, { ...props, label, icon: icon ? ((0, jsx_runtime_1.jsx)(components_1.Icon, { name: icon, color: iconColor, size: "inherit", margins: { left: "0.5rem !important" }, ...iconProps })) : undefined, className: cx(css.chip, className) }));
};
exports.Chip = Chip;
const useClasses = (0, client_1.makeClasses)((props) => ({
    chip: {
        height: props.height,
        backgroundColor: props.bgColor,
        color: props.color,
        transition: "all 200ms ease-in-out",
        width: props.width,
        "& > .MuiChip-label": {
            ...(0, client_1.makePadding)(props.padding),
        },
    },
}));
