import { createContext, useContext, useRef, useState } from "react";
import Draggable from "react-draggable";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Dialog, DialogProps, Paper, PaperProps } from "@mui/material";
import { LoadingOverlay } from "trabecula/components";
import { colors, CSS, makeClasses } from "trabecula/utils/client";

/**
 * The group modals open in, such as an app's active tab. A modal joins the group active when it
 * shows and is hidden, with its contents kept, while another group is active.
 */
export const ModalGroupContext = createContext<string | undefined>(undefined);

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
  keepMounted = false,
  margin = "20px",
  maxHeight,
  maxWidth,
  onClose,
  scroll = "paper",
  visible = true,
  width,
  ...props
}: ContainerProps) => {
  const group = useContext(ModalGroupContext);

  const { css, cx } = useClasses({ height, margin, maxHeight, maxWidth, width });

  const [ownerGroup, setOwnerGroup] = useState(group);

  // A hidden modal shows again in whichever group is active then.
  if (!visible && ownerGroup !== group) setOwnerGroup(group);

  const isGroupActive = ownerGroup === group;

  const handleClose = (_, reason: "backdropClick" | "escapeKeyDown") => {
    if (reason !== "backdropClick" || closeOnBackdrop) onClose?.();
  };

  return (
    <Dialog
      {...props}
      keepMounted={keepMounted || !isGroupActive}
      scroll={scroll}
      PaperComponent={draggable ? DraggablePaper : undefined}
      open={visible && isGroupActive}
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
      border: `1px solid ${colors.border}`,
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
