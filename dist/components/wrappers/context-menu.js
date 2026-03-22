"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const color_1 = __importDefault(require("color"));
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const ContextMenu = ({ children, disabled, id, menuItems, ...props }) => {
    const { css } = useClasses(null);
    const [mouseX, setMouseX] = (0, react_1.useState)(null);
    const [mouseY, setMouseY] = (0, react_1.useState)(null);
    const handleContext = (event) => {
        event.preventDefault();
        if (disabled)
            return;
        setMouseX(event.clientX - 2);
        setMouseY(event.clientY - 4);
    };
    const handleClose = () => {
        setMouseX(null);
        setMouseY(null);
    };
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { ...props, id: id, onContextMenu: handleContext, children: [children, (0, jsx_runtime_1.jsx)(material_1.Menu, { open: mouseY !== null, onClose: handleClose, anchorReference: "anchorPosition", anchorPosition: mouseX !== null && mouseY !== null ? { top: mouseY, left: mouseX } : undefined, PopoverClasses: { paper: css.contextMenu }, MenuListProps: { className: css.contextMenuInner }, children: menuItems
                    .filter(Boolean)
                    .map((item) => [
                    item.divider === "top" ? (0, jsx_runtime_1.jsx)(components_1.Divider, {}) : null,
                    (0, jsx_runtime_1.jsx)(Item, { item: item, onClose: handleClose }),
                    item.divider === "bottom" ? (0, jsx_runtime_1.jsx)(components_1.Divider, {}) : null,
                ]) })] }));
};
exports.ContextMenu = ContextMenu;
const Item = ({ item, onClose, }) => {
    const { css } = useClasses(null);
    const color = item.color || client_1.colors.custom.lightGrey;
    const handleClick = item.onClick
        ? () => {
            item.onClick();
            onClose();
        }
        : undefined;
    return ((0, jsx_runtime_1.jsx)(components_1.ListItem, { text: item.label, icon: item.icon, iconProps: { color, ...(item.iconProps ?? {}) }, color: color, iconEnd: item.subItems?.length ? "ChevronRight" : null, onClick: handleClick, className: css.item, children: item.subItems?.length ? ((0, jsx_runtime_1.jsx)(components_1.View, { column: true, children: item.subItems.map((subItem) => ((0, jsx_runtime_1.jsx)(SubItem, { subItem, onClose }, subItem.label))) })) : null }, item.label));
};
const SubItem = ({ onClose, subItem, }) => {
    const handleClick = () => {
        subItem.onClick();
        onClose();
    };
    return (0, jsx_runtime_1.jsx)(components_1.ListItem, { text: subItem.label, icon: subItem.icon, onClick: handleClick });
};
const useClasses = (0, client_1.makeClasses)({
    contextMenu: {
        background: (0, color_1.default)(client_1.colors.custom.black).fade(0.03).string(),
    },
    contextMenuInner: {
        padding: 0,
    },
    item: {
        padding: "0.35rem 1rem 0.35rem 0.7rem",
    },
});
