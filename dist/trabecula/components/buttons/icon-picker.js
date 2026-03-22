"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const client_1 = require("trabecula/_generated/client");
const components_1 = require("trabecula/components");
const client_2 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
const SEARCH_STYLES = ["Filled", "Outlined", "Rounded", "TwoTone", "Sharp"];
const SEARCH_STYLES_UNFILLED = SEARCH_STYLES.filter((s) => s !== "Filled");
exports.IconPicker = (0, components_1.Comp)(({ color = client_2.colors.custom.black, label = "Icon", menuProps = {}, setValue, value, viewProps = {}, width = "fit-content", withStylePicker = false, // Not used with icon font
...buttonProps }) => {
    const [page, setPage] = (0, react_1.useState)(1);
    const [searchStyle, setSearchStyle] = (0, react_1.useState)("Filled");
    const [searchVal, setSearchVal] = (0, react_1.useState)("");
    const searchTerms = searchVal.split(" ").filter((t) => t.length > 0);
    const filteredIcons = client_1.MUI_ICONS.filter((icon) => {
        const name = icon.toLowerCase();
        if (value?.length && name.includes(value.toLowerCase()))
            return false;
        if (searchStyle === "Filled") {
            if (SEARCH_STYLES_UNFILLED.some((s) => name.includes(s.toLowerCase())))
                return false;
        }
        else if (!name.includes(searchStyle.toLowerCase()))
            return false;
        if (!searchTerms.length)
            return true;
        return searchTerms.every((term) => name.includes(term.toLowerCase()));
    });
    const pageSize = 25 - (value?.length ? 1 : 0);
    const pageCount = Math.ceil(filteredIcons.length / pageSize);
    const pageIcons = [
        value?.length ? value : null,
        ...filteredIcons.slice(pageSize * (page - 1), pageSize * page),
    ].filter(Boolean);
    (0, react_1.useEffect)(() => {
        if (page > pageCount)
            setPage(1);
    }, [pageCount, page]);
    const handleNoIcon = () => setValue(null);
    const handleSearchStyleChange = (event) => setSearchStyle(event.target.value);
    const renderButton = (onOpen) => ((0, jsx_runtime_1.jsx)(components_1.Button, { onClick: onOpen, color: color, justify: "space-between", padding: { left: "0.5em", right: "0.5em" }, width: width, ...buttonProps, children: (0, jsx_runtime_1.jsxs)(components_1.View, { row: true, spacing: "0.5rem", align: "center", padding: { left: "0.5rem" }, children: [(0, jsx_runtime_1.jsx)(components_1.Text, { lineHeight: 1, children: label }), (0, jsx_runtime_1.jsx)(components_1.Icon, { name: value })] }) }));
    return ((0, jsx_runtime_1.jsx)(components_1.MenuButton, { button: renderButton, keepMounted: false, ...menuProps, children: (0, jsx_runtime_1.jsxs)(components_1.View, { column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto", ...viewProps, children: [(0, jsx_runtime_1.jsx)(components_1.Input, { header: "Search", value: searchVal, setValue: setSearchVal }), (0, jsx_runtime_1.jsx)(components_1.Button, { text: "No Icon", icon: "Close", onClick: handleNoIcon, color: value === null ? client_2.colors.custom.black : client_2.colors.background, textColor: value === null ? client_2.colors.custom.white : client_2.colors.custom.lightGrey }), (0, jsx_runtime_1.jsxs)(components_1.View, { row: true, position: "relative", spacing: "0.5rem", children: [!withStylePicker ? null : ((0, jsx_runtime_1.jsx)(components_1.Card, { column: true, header: "Style", children: (0, jsx_runtime_1.jsxs)(material_1.RadioGroup, { value: searchStyle, onChange: handleSearchStyleChange, children: [(0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { label: "Filled", value: "Filled", control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}) }), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { label: "Outlined", value: "Outlined", control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}) }), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { label: "Rounded", value: "Rounded", control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}) }), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { label: "Two Tone", value: "TwoTone", control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}) }), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { label: "Sharp", value: "Sharp", control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}) })] }) })), (0, jsx_runtime_1.jsx)(components_1.View, { column: true, width: "16rem", height: "19rem", children: (0, common_1.chunkArray)(pageIcons, 5).map((swatch, i) => ((0, jsx_runtime_1.jsx)(components_1.View, { row: true, children: swatch.map((icon) => ((0, jsx_runtime_1.jsx)(components_1.IconButton, { name: icon, tooltip: icon, iconProps: { size: "1.4em" }, sx: {
                                        border: `3px solid ${value === icon ? client_2.colors.custom.white : "transparent"}`,
                                    }, onClick: () => setValue(icon) }, icon))) }, i))) }), (0, jsx_runtime_1.jsx)(components_1.Pagination, { count: pageCount, page: page, onChange: setPage, siblingCount: 0, boundaryCount: withStylePicker ? 1 : 0 })] })] }) }));
});
