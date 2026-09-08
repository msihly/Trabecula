import { ReactNode } from "react";
import { View } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

export interface DisabledOverlayProps {
  children?: ReactNode | ReactNode[];
  isDisabled: boolean;
  zIndex?: number;
}

export const DisabledOverlay = ({
  children,
  isDisabled = false,
  zIndex = 2,
}: DisabledOverlayProps) => {
  const { css } = useClasses({ isDisabled, zIndex });
  return (
    <>
      {children}
      {isDisabled && <View className={css.disabledOverlay} />}
    </>
  );
};

interface ClassesProps {
  isDisabled?: boolean;
  zIndex?: number;
}

const useClasses = makeClasses((props: ClassesProps) => ({
  disabledOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    color: colors.custom.blue,
    backgroundColor: "rgb(255 255 255 / 0.5)",
    zIndex: props?.zIndex,
    opacity: props?.isDisabled ? 1 : 0,
    transition: "all 225ms ease-in-out",
    pointerEvents: props?.isDisabled ? "auto" : "none",
  },
}));
