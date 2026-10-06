import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { Icon, View } from "trabecula/components";
import { colors, CSS, makeClasses } from "trabecula/utils/client";

export interface ImageProps extends Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  "alt" | "height" | "src" | "title" | "width"
> {
  autoAnimate?: boolean;
  children?: ReactNode | ReactNode[];
  disabled?: boolean;
  draggable?: boolean;
  fit?: "contain" | "cover";
  height?: CSS["height"];
  rounded?: "all" | "bottom" | "top";
  thumbPaths: string[];
  title?: string;
}

export const Image = ({
  autoAnimate = false,
  children,
  className,
  disabled,
  draggable = false,
  fit = "cover",
  height,
  loading = "lazy",
  onDragEnd,
  onDragStart,
  rounded = "all",
  thumbPaths,
  title,
}: ImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [imagePos, setImagePos] = useState<CSS["objectPosition"]>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);

  const { css, cx } = useClasses({ fit, height, imagePos, rounded });

  const thumbPath = thumbPaths?.[thumbIndex] ?? thumbPaths?.[0];

  useEffect(() => {
    const interval =
      !disabled && (autoAnimate || isHovered) && thumbPaths?.length > 1
        ? setInterval(() => setThumbIndex((index) => (index + 1) % thumbPaths.length), 300)
        : null;

    return () => clearInterval(interval);
  }, [autoAnimate, disabled, isHovered, thumbPaths?.length]);

  useEffect(() => {
    setHasError(false);
  }, [thumbPath]);

  const handleError = () => {
    setHasError(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImagePos(null);
    setHasError(false);

    if (!autoAnimate) setThumbIndex(0);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const { height, left, top, width } = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - left;
    const offsetY = event.clientY - top;
    const pos = `${(Math.max(0, offsetX) / width) * 100}% ${
      (Math.max(0, offsetY) / height) * 100
    }%`;

    setImagePos(pos);
  };

  return (
    <View
      className={cx(css.imageContainer, className)}
      onMouseEnter={!disabled ? handleMouseEnter : undefined}
      onMouseLeave={handleMouseLeave}
    >
      {hasError ? (
        <View className={css.image}>
          <Icon
            color={colors.custom.grey}
            name="ImageNotSupported"
            size="4rem"
            viewProps={{ align: "center", height: "100%" }}
          />
        </View>
      ) : thumbPath ? (
        <View
          component="img"
          alt={title}
          className={css.image}
          draggable={draggable}
          loading={loading}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          onError={handleError}
          onMouseMove={fit === "cover" ? handleMouseMove : undefined}
          src={thumbPath}
        />
      ) : (
        <View className={css.image} />
      )}

      {children}
    </View>
  );
};

interface ClassesProps extends Pick<ImageProps, "fit" | "height" | "rounded"> {
  imagePos: CSS["objectPosition"];
}

const useClasses = makeClasses((props: ClassesProps) => ({
  image: {
    ...(["all", "top"].includes(props.rounded) && {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
    }),
    ...(["all", "bottom"].includes(props.rounded) && {
      borderBottomLeftRadius: "inherit",
      borderBottomRightRadius: "inherit",
    }),
    height: props.height ?? "inherit",
    width: "100%",
    userSelect: "none",
    transition: "all 100ms ease",
    objectFit: props.fit,
    objectPosition: props.imagePos,
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "inherit",
    height: "100%",
    ...(["all", "top"].includes(props.rounded) && {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
    }),
    ...(["all", "bottom"].includes(props.rounded) && {
      borderBottomLeftRadius: "inherit",
      borderBottomRightRadius: "inherit",
    }),
    backgroundColor: "inherit",
    overflow: "hidden",
  },
}));
