"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideScroller = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
const SideScroller = ({ children, className, innerClassName }) => {
    const ref = (0, react_1.useRef)(null);
    const { width } = (0, client_1.useElementResize)(ref);
    const [isLeftButtonVisible, setIsLeftButtonVisible] = (0, react_1.useState)(false);
    const [isRightButtonVisible, setIsRightButtonVisible] = (0, react_1.useState)(false);
    const [scrollPos, setScrollPos] = (0, react_1.useState)(0);
    const { css, cx } = useClasses({ isLeftButtonVisible, isRightButtonVisible });
    const getButtonVisibility = () => {
        if (!ref.current)
            return [false, false];
        const { clientWidth, scrollWidth, scrollLeft } = ref.current;
        if (!(clientWidth < scrollWidth))
            return [false, false];
        return [scrollLeft > 0, clientWidth + scrollLeft < scrollWidth - 5];
    };
    const handleScroll = (direction) => {
        if (!ref.current)
            return false;
        const maxLeft = ref.current.clientWidth;
        const scrollAmount = ((direction === "left" ? -1 : 1) * width) / 2;
        const newScrollPos = direction === "left"
            ? Math.max(ref.current.scrollLeft - width / 2, 0)
            : Math.min(ref.current.scrollLeft + width / 2, maxLeft);
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setScrollPos(newScrollPos);
    };
    (0, react_1.useEffect)(() => {
        const node = ref.current;
        const scrollListener = (0, common_1.debounce)(setScrollPos.bind(node.scrollLeft), 50);
        node.addEventListener("scroll", scrollListener);
        return () => node.removeEventListener("scroll", scrollListener);
    }, []);
    (0, react_1.useEffect)(() => {
        const [left, right] = getButtonVisibility();
        setIsLeftButtonVisible(left);
        setIsRightButtonVisible(right);
    }, [scrollPos]);
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { className: cx(css.root, className), children: [(0, jsx_runtime_1.jsx)(components_1.IconButton, { name: "ChevronLeft", onClick: () => handleScroll("left"), className: cx(css.scrollButton, "left"), size: "large" }), (0, jsx_runtime_1.jsx)(components_1.View, { ref: ref, className: cx(css.items, innerClassName), children: children }), (0, jsx_runtime_1.jsx)(components_1.IconButton, { name: "ChevronRight", onClick: () => handleScroll("right"), className: cx(css.scrollButton, "right"), size: "large" })] }));
};
exports.SideScroller = SideScroller;
const useClasses = (0, client_1.makeClasses)((props) => ({
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
        backgroundColor: client_1.colors.custom.blue,
        "&:hover": {
            backgroundColor: client_1.colors.custom.blue,
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
