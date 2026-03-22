"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = void 0;
const client_1 = require("trabecula/utils/client");
const copyToClipboard = (value, message) => {
    navigator.clipboard.writeText(value).then(() => client_1.toast.info(message), () => client_1.toast.error("Failed to copy to clipboard"));
};
exports.copyToClipboard = copyToClipboard;
