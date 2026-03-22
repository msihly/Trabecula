"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const IdButton = ({ value, ...props }) => {
    const onClick = () => (0, client_1.copyToClipboard)(value, `Copied ID`);
    return (0, jsx_runtime_1.jsx)(components_1.Button, { text: "ID", onClick: onClick, color: client_1.colors.custom.black, ...props });
};
exports.IdButton = IdButton;
