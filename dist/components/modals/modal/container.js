"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_draggable_1 = __importDefault(require("react-draggable"));
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Container = ({ children, className, closeOnBackdrop = true, draggable = false, height, isLoading, maxHeight, maxWidth = "none", onClose, scroll = "paper", visible = true, width, ...props }) => {
    const { css, cx } = useClasses({ height, maxHeight, maxWidth, width });
    const handleClose = (_, reason) => (reason === "backdropClick" ? closeOnBackdrop : true) && onClose?.();
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { ...props, scroll, PaperComponent: draggable ? DraggablePaper : undefined, open: visible, onClose: handleClose, className: cx(css.modal, className), children: [(0, jsx_runtime_1.jsx)(components_1.LoadingOverlay, { isLoading }), children] }));
};
exports.Container = Container;
const DraggablePaper = (props) => {
    const { css, cx } = useDraggableClasses(null);
    const ref = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(react_draggable_1.default, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: (0, jsx_runtime_1.jsx)(material_1.Paper, { ...props, ref: ref, className: cx(props.className, css.draggable) }) }));
};
const useClasses = (0, client_1.makeClasses)((props) => ({
    modal: {
        "& .MuiDialog-paper": {
            position: "relative",
            maxHeight: props.maxHeight,
            maxWidth: props.maxWidth,
            height: props.height,
            width: props.width,
            background: client_1.colors.background,
        },
    },
}));
const useDraggableClasses = (0, client_1.makeClasses)({
    draggable: {
        cursor: "grab",
        "& .MuiDialogContent-root": {
            cursor: "initial",
        },
    },
});
