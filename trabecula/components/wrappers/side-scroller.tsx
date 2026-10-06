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

  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const { css, cx } = useClasses({ isLeftButtonVisible, isRightButtonVisible });

  const getButtonVisibility = () => {
    if (!ref.current) return [false, false];

    const { clientWidth, scrollLeft, scrollWidth } = ref.current;

    if (!(clientWidth < scrollWidth)) return [false, false];

    return [scrollLeft > 0, clientWidth + scrollLeft < scrollWidth - 5];
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!ref.current) return false;

    const scrollAmount = ((direction === "left" ? -1 : 1) * width) / 2;

    ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const node = ref.current;
    const scrollListener = debounce(() => setScrollPos(node.scrollLeft), 50);

    node.addEventListener("scroll", scrollListener);

    return () => {
      node.removeEventListener("scroll", scrollListener);
      scrollListener.cancel();
    };
  }, []);

  useEffect(() => {
    const [left, right] = getButtonVisibility();

    setIsLeftButtonVisible(left);
    setIsRightButtonVisible(right);
  }, [children, scrollPos, width]);

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
