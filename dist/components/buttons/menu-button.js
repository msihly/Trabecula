"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const buttons_1 = require("trabecula/components/buttons");
const client_1 = require("trabecula/utils/client");
const MenuButton = ({ bgColor = client_1.colors.background, button, children, color, icon = "MoreVert", keepMounted = true, menuWidth, ...props }) => {
    const { css } = useClasses({ bgColor, menuWidth });
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const handleClose = () => setAnchorEl(null);
    const handleOpen = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [button ? (button(handleOpen)) : ((0, jsx_runtime_1.jsx)(buttons_1.IconButton, { name: icon, onClick: handleOpen, iconProps: { color }, ...props })), (0, jsx_runtime_1.jsx)(material_1.Menu, { anchorEl, keepMounted, open: Boolean(anchorEl), onClose: handleClose, anchorOrigin: { horizontal: "right", vertical: "bottom" }, transformOrigin: { horizontal: "right", vertical: "top" }, className: css.menu, children: children })] }));
};
exports.MenuButton = MenuButton;
const useClasses = (0, client_1.makeClasses)((props) => ({
    menu: {
        "& .MuiPaper-root": {
            background: props.bgColor,
            minWidth: props.menuWidth ?? "10rem",
            width: props.menuWidth,
        },
        "& .MuiList-root": {
            padding: "4px 0",
        },
    },
}));
