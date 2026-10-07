import { DragEvent } from "react";
import Color from "color";
import { View } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

export interface DropOverlayProps {
  onDragLeave: (event: DragEvent) => void;
  onDrop: (event: DragEvent) => void;
}

export const DropOverlay = ({ onDragLeave, onDrop }: DropOverlayProps) => {
  const { css } = useClasses(null);

  return <View onDragLeave={onDragLeave} onDrop={onDrop} className={css.overlay} />;
};

const useClasses = makeClasses({
  overlay: {
    backgroundColor: Color(colors.custom.blue).fade(0.5).string(),
    border: `15px dashed ${colors.custom.blue}`,
    bottom: 0,
    left: 0,
    opacity: 0.3,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 5000, // necessary for MUI z-index values
  },
});
