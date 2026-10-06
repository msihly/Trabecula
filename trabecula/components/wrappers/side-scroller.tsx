import { useEffect, useRef, useState } from "react";
import { IconButton, View } from "trabecula/components";
import { colors, makeClasses, useElementResize } from "trabecula/utils/client";
import { debounce } from "trabecula/utils/common";

interface SideScrollerProps {
  children: JSX.Element[];
  className?: string;
  innerClassName?: string;
}

export const SideScroller = ({ children, className, innerClassName }: SideScrollerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { width } = useElementResize(ref);

  const [buttonVisibility, setButtonVisibility] = useState({
    isLeftButtonVisible: false,
    isRightButtonVisible: false,
  });

  const { css, cx } = useClasses(buttonVisibility);

  const handleScroll = (direction: "left" | "right") => {
    if (!ref.current) return;

    const scrollAmount = ((direction === "left" ? -1 : 1) * width) / 2;

    ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateButtonVisibility = () => {
    const node = ref.current;
    const hasOverflow = node && node.clientWidth < node.scrollWidth;
    const isLeftButtonVisible = !!hasOverflow && node.scrollLeft > 0;
    const isRightButtonVisible =
      !!hasOverflow && node.clientWidth + node.scrollLeft < node.scrollWidth - 5;

    setButtonVisibility((prev) =>
      prev.isLeftButtonVisible === isLeftButtonVisible &&
      prev.isRightButtonVisible === isRightButtonVisible
        ? prev
        : { isLeftButtonVisible, isRightButtonVisible },
    );
  };

  useEffect(() => {
    const node = ref.current;
    const scrollListener = debounce(updateButtonVisibility, 50);

    node.addEventListener("scroll", scrollListener);

    return () => {
      node.removeEventListener("scroll", scrollListener);
      scrollListener.cancel();
    };
  }, []);

  useEffect(() => {
    updateButtonVisibility();
  }, [children, width]);

  return (
    <View className={cx(css.root, className)}>
      <IconButton
        name="ChevronLeft"
        onClick={() => handleScroll("left")}
        className={cx(css.scrollButton, "left")}
        size="large"
      />

      <View ref={ref} className={cx(css.items, innerClassName)}>
        {children}
      </View>

      <IconButton
        name="ChevronRight"
        onClick={() => handleScroll("right")}
        className={cx(css.scrollButton, "right")}
        size="large"
      />
    </View>
  );
};

interface ClassesProps {
  isLeftButtonVisible: boolean;
  isRightButtonVisible: boolean;
}

const useClasses = makeClasses((props: ClassesProps) => ({
  items: {
    display: "flex",
    flexFlow: "row nowrap",
    flex: 1,
    overflowX: "auto",
    overflowY: "hidden",
    "& > *:last-child": {
      marginRight: "1rem",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    minWidth: 0,
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  scrollButton: {
    margin: "0 0.2rem",
    width: "1rem",
    height: "1rem",
    backgroundColor: colors.custom.blue,
    "&:hover": {
      backgroundColor: colors.custom.blue,
    },
    "& svg": {
      width: "0.6em",
      height: "0.6em",
    },
    "&.left": {
      display: props.isLeftButtonVisible ? "flex" : "none",
    },
    "&.right": {
      display: props.isRightButtonVisible ? "flex" : "none",
    },
  },
}));
