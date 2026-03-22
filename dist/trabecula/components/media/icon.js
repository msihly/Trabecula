"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
const Icon = ({ className, color, margins, name, rotation, size, viewProps = {}, ...props }) => {
    const { css, cx } = useClasses({ rotation });
    return ((0, jsx_runtime_1.jsx)(components_1.View, { column: true, className: cx(css.root, className), margins: margins, ...viewProps, children: (0, jsx_runtime_1.jsx)(material_1.Icon, { ...props, style: { color, fontSize: size }, children: common_1.Fmt.pascalToSnake(name) }) }));
};
exports.Icon = Icon;
const useClasses = (0, client_1.makeClasses)((props) => ({
    root: {
        justifyContent: "center",
        transform: props.rotation !== undefined ? `rotate(${props.rotation}deg)` : undefined,
        transition: "all 200ms ease-in-out",
    },
}));
