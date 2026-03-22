"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniformList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const UniformList = ({ children, uniformWidth, ...props }) => {
    const { css, cx } = useClasses({ uniformWidth });
    return ((0, jsx_runtime_1.jsx)(components_1.View, { ...props, className: cx(css.uniform, props?.className), children: children }));
};
exports.UniformList = UniformList;
const useClasses = (0, client_1.makeClasses)((props) => ({
    uniform: {
        "& > *": {
            flexBasis: "100%",
            maxWidth: props.uniformWidth,
        },
    },
}));
