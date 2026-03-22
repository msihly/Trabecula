"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const ConfirmModal = ({ cancelColor = client_1.colors.custom.grey, cancelIcon = "Close", cancelText = "Cancel", children, confirmColor = client_1.colors.custom.red, confirmIcon = "Delete", confirmText = "Delete", headerText = "Confirm Delete", height = "25rem", onCancel, onConfirm, setVisible, subText, width = "25rem", }) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const handleClose = () => setVisible(false);
    const handleCancel = () => {
        onCancel?.();
        handleClose();
    };
    const handleConfirm = async () => {
        setIsLoading(true);
        const success = await onConfirm();
        setIsLoading(false);
        if (success)
            handleClose();
    };
    return ((0, jsx_runtime_1.jsxs)(components_1.Modal.Container, { isLoading: isLoading, onClose: handleCancel, height: height, width: width, children: [(0, jsx_runtime_1.jsx)(components_1.Modal.Header, { children: (0, jsx_runtime_1.jsx)(components_1.Text, { preset: "title", children: headerText }) }), (0, jsx_runtime_1.jsxs)(components_1.Modal.Content, { align: "center", justify: "center", children: [(0, jsx_runtime_1.jsx)(components_1.Icon, { name: "Delete", color: client_1.colors.custom.red, size: "5rem" }), subText?.length > 0 ? ((0, jsx_runtime_1.jsx)(components_1.Text, { fontSize: "1.3em", textAlign: "center", children: subText })) : null, children] }), (0, jsx_runtime_1.jsxs)(components_1.Modal.Footer, { children: [(0, jsx_runtime_1.jsx)(components_1.Button, { text: cancelText, icon: cancelIcon, color: cancelColor, onClick: handleCancel, disabled: isLoading }), (0, jsx_runtime_1.jsx)(components_1.Button, { text: confirmText, icon: confirmIcon, color: confirmColor, onClick: handleConfirm, disabled: isLoading })] })] }));
};
exports.ConfirmModal = ConfirmModal;
