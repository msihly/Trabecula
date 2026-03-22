"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Accordion = ({ children, className, color = "transparent", dense = false, expanded = false, fullWidth = false, header, setExpanded, }) => {
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(expanded);
    const handleClick = () => {
        setIsExpanded(!isExpanded);
        setExpanded?.(!isExpanded);
    };
    const { css, cx } = useClasses({ dense, expanded: isExpanded, fullWidth });
    return ((0, jsx_runtime_1.jsxs)(material_1.Accordion, { expanded: isExpanded, disableGutters: true, TransitionProps: { unmountOnExit: true }, className: cx(css.accordion, className), children: [(0, jsx_runtime_1.jsx)(components_1.Button, { onClick: handleClick, endNode: (0, jsx_runtime_1.jsx)(components_1.Icon, { name: "ExpandMore", rotation: expanded ? 180 : 0 }), color: color, width: "100%", className: css.button, children: header }), (0, jsx_runtime_1.jsx)(components_1.View, { column: true, children: children })] }));
};
exports.Accordion = Accordion;
const useClasses = (0, client_1.makeClasses)((props) => ({
    accordion: {
        margin: 0,
        padding: 0,
        width: props.fullWidth ? "100%" : "auto",
        background: "transparent",
        boxShadow: "none",
        "& button": {
            boxShadow: "none",
        },
        "&:before": {
            display: "none",
        },
    },
    button: {
        justifyContent: "space-between",
        borderBottomRightRadius: props.expanded ? 0 : undefined,
        borderBottomLeftRadius: props.expanded ? 0 : undefined,
        padding: props.dense ? "0.2rem 0.6rem" : "0.5rem 1rem",
        fontSize: "1em",
        textTransform: "capitalize",
    },
}));
