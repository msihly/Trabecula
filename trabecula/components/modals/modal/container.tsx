import { useRef } from "react";
import Draggable from "react-draggable";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Dialog, DialogProps, Paper, PaperProps } from "@mui/material";
import { LoadingOverlay } from "trabecula/components";
import { colors, CSS, makeClasses } from "trabecula/utils/client";

export interface ContainerProps extends Omit<
  DialogProps,
  "maxWidth" | "open" | "onClose" | "title"
> {
  closeOnBackdrop?: boolean;
  height?: CSS["height"];
  isLoading?: boolean;
  /** Single CSS length applied to every side and subtracted from the default max height and width. */
  margin?: string;
  maxHeight?: CSS["maxHeight"];
  maxWidth?: CSS["maxWidth"];
  onClose?: () => void;
  visible?: boolean;
  width?: CSS["width"];
}

export const Container = ({
  children,
  className,
  closeOnBackdrop = true,
  draggable = false,
  height,
  isLoading,
  margin = "20px",
  maxHeight,
  maxWidth,
  onClose,
  scroll = "paper",
  visible = true,
  width,
  ...props
}: ContainerProps) => {
  const { css, cx } = useClasses({ height, margin, maxHeight, maxWidth, width });

  const handleClose = (_, reason: "backdropClick" | "escapeKeyDown") => {
    if (reason !== "backdropClick" || closeOnBackdrop) onClose?.();
  };

  return (
    <Dialog
      {...props}
      scroll={scroll}
      PaperComponent={draggable ? DraggablePaper : undefined}
      open={visible}
      onClose={handleClose}
      className={cx(css.modal, className)}
    >
      <LoadingOverlay isLoading={isLoading} />

      {children}
    </Dialog>
  );
};

const DraggablePaper = (props: PaperProps) => {
  const { css, cx } = useDraggableClasses(null);

  const ref = useRef(null);

  return (
    <Draggable nodeRef={ref} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} ref={ref} className={cx(props.className, css.draggable)} />
    </Draggable>
  );
};

interface ClassesProps extends Pick<
  ContainerProps,
  "height" | "margin" | "maxHeight" | "maxWidth" | "width"
> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  modal: {
    "& .MuiDialog-paper": {
      position: "relative",
      margin: props.margin,
      maxHeight: props.maxHeight ?? `calc(100% - 2 * ${props.margin})`,
      maxWidth: props.maxWidth ?? `calc(100% - 2 * ${props.margin})`,
      height: props.height,
      width: props.width,
      background: colors.background,
      overflow: "hidden",
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
