"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Pagination = ({ className, isLoading, onChange, onFullLoad, count, ...props }) => {
    const { css, cx } = useClasses(null);
    const handleChange = (_, page) => onChange(page);
    const handleLastPageClick = (event, item) => {
        if (onFullLoad)
            (event.preventDefault(), onFullLoad());
        else
            item.onClick?.(event);
    };
    return ((0, jsx_runtime_1.jsx)(components_1.View, { className: css.root, children: (0, jsx_runtime_1.jsxs)(components_1.View, { position: "relative", overflow: "hidden", children: [(0, jsx_runtime_1.jsx)(components_1.LoadingOverlay, { isLoading: isLoading }), (0, jsx_runtime_1.jsx)(material_1.Pagination, { onChange: handleChange, showFirstButton: true, showLastButton: true, siblingCount: 4, boundaryCount: 2, count: count, className: cx(css.pagination, className), renderItem: (item) => ((0, jsx_runtime_1.jsx)(material_1.PaginationItem, { ...item, onClick: item.type === "last" ? (e) => handleLastPageClick(e, item) : item.onClick })), ...props })] }) }));
};
exports.Pagination = Pagination;
const useClasses = (0, client_1.makeClasses)({
    pagination: {
        borderRadius: 0,
        borderTop: "0.2rem solid #1b58a7",
        margin: 0,
        padding: "0.2rem 0.5rem 0.2rem",
        width: "100%",
        backgroundColor: client_1.colors.background,
        "& .MuiPagination-ul": { flexWrap: "nowrap" },
        "& > ul": { justifyContent: "center" },
        "& li button": { borderRadius: "0.2rem" },
    },
    root: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
    },
});
