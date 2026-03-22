"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const client_1 = require("trabecula/utils/client");
const MUI_TABLE_ROW_HEIGHT = 33;
const Table = ({ className, columns, hasEmptyRows = false, hasPagination = false, rowCountOptions = [10, 25, 50], rows, paginationClassName, }) => {
    const { css, cx } = useClasses(null);
    const [page, setPage] = (0, react_1.useState)(0);
    const [rowsPerPage, setRowsPerPage] = (0, react_1.useState)(rowCountOptions[0]);
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const displayedRows = (0, react_1.useMemo)(() => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [page, rowsPerPage, rows]);
    const emptyRows = rowsPerPage - displayedRows.length;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.TableContainer, { component: material_1.Paper, className: className, children: (0, jsx_runtime_1.jsxs)(material_1.Table, { size: "small", children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, { children: (0, jsx_runtime_1.jsx)(material_1.TableRow, { className: css.tableHeader, children: columns.map((column, i) => ((0, jsx_runtime_1.jsx)(material_1.TableCell, { className: css.tableHeaderCell, children: column.header }, `${i}-${column.header}`))) }) }), (0, jsx_runtime_1.jsxs)(material_1.TableBody, { children: [displayedRows.map((row, rowKey) => ((0, jsx_runtime_1.jsx)(material_1.TableRow, { className: css.tableRowAlt, children: columns.map((column, cellKey) => ((0, jsx_runtime_1.jsx)(TableCellTrunc, { value: column.valueFunc(row), wrap: column.wrap, className: column.className }, `${rowKey}-${cellKey}`))) }, `displayed-${rowKey}`))), hasEmptyRows && emptyRows > 0 && ((0, jsx_runtime_1.jsx)(material_1.TableRow, { className: css.tableRowAlt, style: { height: MUI_TABLE_ROW_HEIGHT * emptyRows }, children: (0, jsx_runtime_1.jsx)(material_1.TableCell, { colSpan: columns.length }) }))] })] }) }), hasPagination && ((0, jsx_runtime_1.jsx)(material_1.TablePagination, { count: rows.length, page: page, onPageChange: (_, p) => setPage(p), labelRowsPerPage: "Row count :", rowsPerPage: rowsPerPage, rowsPerPageOptions: rowCountOptions, onRowsPerPageChange: handleRowsPerPageChange, className: cx(css.pagination, paginationClassName) }))] }));
};
exports.Table = Table;
const TableCellTrunc = ({ className, value, wrap = false }) => {
    const { css, cx } = useClasses(null);
    return ((0, jsx_runtime_1.jsx)(material_1.TableCell, { className: cx(css.tableCell, className), title: String(value), children: wrap ? (0, jsx_runtime_1.jsx)("span", { className: css.wrapped, children: value }) : value }));
};
const useClasses = (0, client_1.makeClasses)({
    pagination: {
        borderBottom: "none",
        padding: 0,
    },
    tableHeader: {
        backgroundColor: client_1.colors.custom.blue,
    },
    tableHeaderCell: {
        color: client_1.colors.custom.white,
        fontWeight: 400,
        fontSize: "1em",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    tableCell: {
        maxWidth: "10em",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    tableRowAlt: {
        "&:nth-of-type(even) > td": { backgroundColor: client_1.colors.custom.grey },
        "&:nth-of-type(odd) > td": { backgroundColor: client_1.colors.foreground },
    },
    wrapped: {
        display: "-webkit-inline-box",
        overflow: "hidden",
        whiteSpace: "normal",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
    },
});
