import { useRef } from "react";
import Draggable from "react-draggable";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Dialog, Paper } from "@mui/material";
import { LoadingOverlay } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
export const Container = ({ children, className, closeOnBackdrop = true, draggable = false, height, isLoading, maxHeight, maxWidth = "none", onClose, scroll = "paper", visible = true, width, ...props }) => {
    const { css, cx } = useClasses({ height, maxHeight, maxWidth, width });
    const handleClose = (_, reason) => (reason === "backdropClick" ? closeOnBackdrop : true) && onClose?.();
    return (<Dialog {...props} {...{ scroll }} PaperComponent={draggable ? DraggablePaper : undefined} open={visible} onClose={handleClose} className={cx(css.modal, className)}>
      <LoadingOverlay {...{ isLoading }}/>

      {children}
    </Dialog>);
};
const DraggablePaper = (props) => {
    const { css, cx } = useDraggableClasses(null);
    const ref = useRef(null);
    return (<Draggable nodeRef={ref} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} ref={ref} className={cx(props.className, css.draggable)}/>
    </Draggable>);
};
const useClasses = makeClasses((props) => ({
    modal: {
        "& .MuiDialog-paper": {
            position: "relative",
            maxHeight: props.maxHeight,
            maxWidth: props.maxWidth,
            height: props.height,
            width: props.width,
            background: colors.background,
        },
    },
}));
const useDraggableClasses = makeClasses({
    draggable: {
        cursor: "grab",
        "& .MuiDialogContent-root": {
            cursor: "initial",
        },
    },
});
