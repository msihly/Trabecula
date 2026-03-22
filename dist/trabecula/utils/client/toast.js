import { 
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
toast as _toast, 
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
ToastContainer as ToastContainerBase, } from "react-toastify";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Icon as MuiIcon } from "@mui/material";
import { colors, makeClasses } from "trabecula/utils/client";
export const toast = {
    error: _toast.error,
    info: _toast.info,
    success: _toast.success,
    warn: _toast.warn,
};
export class Toaster {
    constructor() {
        this.toastTimeoutRef = null;
        this.toastRef = null;
    }
    toast(text, options) {
        const autoClose = options?.autoClose === false ? false : options?.autoClose || 1000;
        clearTimeout(this.toastTimeoutRef);
        if (autoClose)
            this.toastTimeoutRef = setTimeout(() => (this.toastRef = null), autoClose);
        if (this.toastRef)
            _toast.update(this.toastRef, { autoClose, render: text, type: options?.type || "info" });
        else
            this.toastRef = _toast(() => text, { autoClose, type: options?.type || "info" });
    }
}
export const ToastContainer = (props) => {
    const { css } = useClasses(null);
    return (<ToastContainerBase autoClose={2000} className={css.toast} hideProgressBar icon={({ type }) => (<MuiIcon style={{ color: colors.custom.white }}>
          {(STATUSES[type]?.icon ?? "Error")
                .split(/(?=[A-Z])/)
                .join("_")
                .toLowerCase()}
        </MuiIcon>)} limit={3} pauseOnFocusLoss={false} position="bottom-left" newestOnTop style={{ bottom: "3rem" }} {...props}/>);
};
const STATUSES = {
    default: {
        color: colors.custom.blue,
        icon: "CircleNotifications",
    },
    error: {
        color: colors.custom.red,
        icon: "Error",
    },
    info: {
        color: colors.custom.blue,
        icon: "Info",
    },
    success: {
        color: colors.custom.green,
        icon: "CheckCircle",
    },
    warning: {
        color: colors.custom.orange,
        icon: "NewReleases",
    },
};
const useClasses = makeClasses({
    toast: {
        "& .Toastify__toast": {
            border: "none",
            color: colors.custom.white,
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
                color: colors.custom.lightGrey,
                "&:hover": {
                    backgroundColor: "transparent",
                    color: colors.custom.red,
                },
            },
        },
    },
});
