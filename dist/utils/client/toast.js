"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = exports.Toaster = exports.toast = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_toastify_1 = require("react-toastify");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const client_1 = require("trabecula/utils/client");
exports.toast = {
    error: react_toastify_1.toast.error,
    info: react_toastify_1.toast.info,
    success: react_toastify_1.toast.success,
    warn: react_toastify_1.toast.warn,
};
class Toaster {
    constructor() {
        Object.defineProperty(this, "toastTimeoutRef", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "toastRef", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    toast(text, options) {
        const autoClose = options?.autoClose === false ? false : options?.autoClose || 1000;
        clearTimeout(this.toastTimeoutRef);
        if (autoClose)
            this.toastTimeoutRef = setTimeout(() => (this.toastRef = null), autoClose);
        if (this.toastRef)
            react_toastify_1.toast.update(this.toastRef, { autoClose, render: text, type: options?.type || "info" });
        else
            this.toastRef = (0, react_toastify_1.toast)(() => text, { autoClose, type: options?.type || "info" });
    }
}
exports.Toaster = Toaster;
const ToastContainer = (props) => {
    const { css } = useClasses(null);
    return ((0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { autoClose: 2000, className: css.toast, hideProgressBar: true, icon: ({ type }) => ((0, jsx_runtime_1.jsx)(material_1.Icon, { style: { color: client_1.colors.custom.white }, children: (STATUSES[type]?.icon ?? "Error")
                .split(/(?=[A-Z])/)
                .join("_")
                .toLowerCase() })), limit: 3, pauseOnFocusLoss: false, position: "bottom-left", newestOnTop: true, style: { bottom: "3rem" }, ...props }));
};
exports.ToastContainer = ToastContainer;
const STATUSES = {
    default: {
        color: client_1.colors.custom.blue,
        icon: "CircleNotifications",
    },
    error: {
        color: client_1.colors.custom.red,
        icon: "Error",
    },
    info: {
        color: client_1.colors.custom.blue,
        icon: "Info",
    },
    success: {
        color: client_1.colors.custom.green,
        icon: "CheckCircle",
    },
    warning: {
        color: client_1.colors.custom.orange,
        icon: "NewReleases",
    },
};
const useClasses = (0, client_1.makeClasses)({
    toast: {
        "& .Toastify__toast": {
            border: "none",
            color: client_1.colors.custom.white,
            "&-body": {
                display: "flex",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "1.1em",
                fontWeight: 400,
                whiteSpace: "break-spaces",
            },
            "&-icon": { marginRight: "1em" },
            "&--default": { backgroundColor: STATUSES.default.color },
            "&--error": { backgroundColor: STATUSES.error.color },
            "&--info": { backgroundColor: STATUSES.info.color },
            "&--success": { backgroundColor: STATUSES.success.color },
            "&--warning": { backgroundColor: STATUSES.warning.color },
            "& .Toastify__close-button": {
                margin: 0,
                lineHeight: 1,
                color: client_1.colors.custom.lightGrey,
                "&:hover": {
                    backgroundColor: "transparent",
                    color: client_1.colors.custom.red,
                },
            },
        },
    },
});
