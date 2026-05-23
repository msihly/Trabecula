import {
  MUI_ICONS
} from "../chunk-7TIIU46R.mjs";
import {
  colors,
  makeBorderRadiuses,
  makeBorders,
  makeClasses,
  makeMargins,
  makePadding,
  require_color,
  toast,
  useElementResize
} from "../chunk-PUAU47FZ.mjs";
import {
  Fmt,
  LOGICAL_OPS,
  _CONSTANTS,
  chunkArray,
  dayjs,
  debounce,
  deepMerge
} from "../chunk-NDZ73THA.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "../chunk-A7PY2W7U.mjs";

// trabecula/components/comp.tsx
import { forwardRef } from "react";
import { observer } from "mobx-react-lite";
function Comp(component) {
  const Wrapped = forwardRef((props, ref) => component(props, ref));
  return observer(Wrapped);
}

// trabecula/components/buttons/button.tsx
var import_color = __toESM(require_color());
import {
  Button as MuiButton,
  CircularProgress
} from "@mui/material";
import { jsx, jsxs } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, {
    borderRadiuses = { all: "0.3rem" },
    boxShadow,
    children,
    className,
    color = colors.custom.grey,
    colorOnHover,
    endNode,
    fontSize = "1.15em",
    fontWeight = 400,
    height,
    href,
    icon,
    iconProps,
    iconRight,
    iconSize = "1.15em",
    justify = "center",
    loading = false,
    margins,
    onClick,
    outlined = false,
    outlineFill = "transparent",
    padding,
    size: size2 = "small",
    startNode,
    text,
    textColor,
    textTransform = "none",
    tooltip,
    tooltipProps,
    type = "button",
    width
  } = _b, props = __objRest(_b, [
    "borderRadiuses",
    "boxShadow",
    "children",
    "className",
    "color",
    "colorOnHover",
    "endNode",
    "fontSize",
    "fontWeight",
    "height",
    "href",
    "icon",
    "iconProps",
    "iconRight",
    "iconSize",
    "justify",
    "loading",
    "margins",
    "onClick",
    "outlined",
    "outlineFill",
    "padding",
    "size",
    "startNode",
    "text",
    "textColor",
    "textTransform",
    "tooltip",
    "tooltipProps",
    "type",
    "width"
  ]);
  const { css, cx } = useClasses({
    borderRadiuses,
    boxShadow,
    color,
    colorOnHover,
    height,
    isLink: type === "link",
    justify,
    margins,
    outlined,
    outlineFill,
    padding: __spreadValues({ all: !(text == null ? void 0 : text.length) ? "0.4em" : "0.4em 0.8em" }, padding),
    textColor,
    textTransform,
    width
  });
  const handleClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    if (href) window.open(href, "_blank");
  };
  return /* @__PURE__ */ jsx(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ jsxs(
    MuiButton,
    __spreadProps(__spreadValues(__spreadValues({}, props), { size: size2 }), {
      onClick: handleClick,
      variant: "contained",
      className: cx(css.root, className),
      children: [
        startNode,
        icon && /* @__PURE__ */ jsx(View, { margins: text || iconRight ? { right: "0.3em" } : void 0, children: !loading ? /* @__PURE__ */ jsx(Icon, __spreadValues({ name: icon, size: iconSize, color: textColor }, iconProps)) : /* @__PURE__ */ jsx(CircularProgress, { color: "inherit", size: iconSize }) }),
        text && /* @__PURE__ */ jsx(Text, __spreadProps(__spreadValues({}, { fontSize, fontWeight }), { color: textColor, className: cx(css.text, className), children: text })),
        children,
        iconRight && /* @__PURE__ */ jsx(View, { margins: text || icon ? { left: "0.3em" } : void 0, children: !loading ? /* @__PURE__ */ jsx(Icon, { name: iconRight, size: iconSize }) : /* @__PURE__ */ jsx(CircularProgress, { color: "inherit", size: iconSize }) }),
        endNode
      ]
    })
  ) }));
};
var useClasses = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  return {
    root: __spreadProps(__spreadValues(__spreadValues({
      display: "flex",
      flexDirection: "row",
      justifyContent: props.justify,
      alignItems: "center",
      border: `1px solid ${props.outlined ? props.color : "transparent"}`
    }, makeBorderRadiuses(props.borderRadiuses)), makeMargins(props.margins)), {
      padding: (_a = props.padding) == null ? void 0 : _a.all,
      paddingTop: (_c = (_b = props.padding) == null ? void 0 : _b.top) != null ? _c : props.isLink ? 0 : void 0,
      paddingBottom: (_e = (_d = props.padding) == null ? void 0 : _d.bottom) != null ? _e : props.isLink ? 0 : void 0,
      paddingRight: (_g = (_f = props.padding) == null ? void 0 : _f.right) != null ? _g : props.isLink ? 0 : void 0,
      paddingLeft: (_i = (_h = props.padding) == null ? void 0 : _h.left) != null ? _i : props.isLink ? 0 : void 0,
      minWidth: "fit-content",
      height: props.height,
      width: props.width,
      backgroundColor: props.isLink ? "transparent" : props.outlined ? props.outlineFill : props.color,
      boxShadow: (_j = props.boxShadow) != null ? _j : "none",
      color: props.outlined ? props.color : (_k = props.textColor) != null ? _k : props.isLink ? colors.custom.lightBlue : props.outlined ? props.color : colors.custom.white,
      textTransform: props.textTransform,
      "&:hover": {
        background: props.isLink ? "transparent" : props.colorOnHover || (0, import_color.default)(props.outlined ? props.outlineFill : props.color).lighten(0.1).string(),
        boxShadow: props.isLink ? "none" : void 0,
        textDecoration: props.isLink ? "underline" : void 0
      }
    }),
    text: {
      lineHeight: 1.1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "all 100ms ease-in-out",
      textTransform: props.textTransform
    }
  };
});

// trabecula/components/buttons/button-with-inset.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ButtonWithInset = Comp(
  (_a) => {
    var _b = _a, { insetText, insetWidth = "2.5rem" } = _b, props = __objRest(_b, ["insetText", "insetWidth"]);
    const { css } = useClasses2({ insetWidth });
    return /* @__PURE__ */ jsx2(
      Button,
      __spreadValues({
        startNode: /* @__PURE__ */ jsx2(View, { column: true, className: css.insetContainer, children: /* @__PURE__ */ jsx2(Text, { fontSize: "0.7em", children: insetText }) }),
        justify: "flex-start",
        width: "100%",
        padding: { all: 0 }
      }, props)
    );
  }
);
var useClasses2 = makeClasses((props) => ({
  insetContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.5rem",
    padding: "0.5rem 0.4rem 0.5rem 0.5rem",
    width: props.insetWidth,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    "& > span": {
      whiteSpace: "nowrap",
      cursor: "pointer"
    }
  }
}));

// trabecula/components/buttons/color-picker.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var ColorPicker = Comp(
  (_a) => {
    var _b = _a, {
      color = colors.custom.black,
      label = "Color",
      menuProps = {},
      noIcon = false,
      setValue,
      swatches = [],
      value,
      viewProps = {},
      width = "fit-content"
    } = _b, buttonProps = __objRest(_b, [
      "color",
      "label",
      "menuProps",
      "noIcon",
      "setValue",
      "swatches",
      "value",
      "viewProps",
      "width"
    ]);
    const handleNoColor = () => setValue(null);
    const renderButton = (onOpen) => /* @__PURE__ */ jsx3(
      Button,
      __spreadProps(__spreadValues({
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width
      }, buttonProps), {
        children: /* @__PURE__ */ jsxs2(View, { row: true, spacing: "0.5rem", align: "center", children: [
          noIcon ? /* @__PURE__ */ jsx3(View, {}) : /* @__PURE__ */ jsx3(Icon, { name: "Palette", size: "1.15em" }),
          /* @__PURE__ */ jsx3(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ jsx3(Icon, { name: "Circle", color: value === null ? "transparent" : value })
        ] })
      })
    );
    return /* @__PURE__ */ jsx3(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ jsxs2(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ jsx3(
        Button,
        {
          text: "No Color",
          icon: "Close",
          onClick: handleNoColor,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ jsx3(View, { column: true, children: swatches.map((swatch, i) => /* @__PURE__ */ jsx3(View, { row: true, children: swatch.map((c) => /* @__PURE__ */ jsx3(
        IconButton,
        {
          name: "Circle",
          iconProps: { color: c, size: "1.4em" },
          sx: { border: `3px solid ${value === c ? c : "transparent"}` },
          onClick: () => setValue(c)
        },
        c
      )) }, i)) })
    ] })) }));
  }
);

// trabecula/components/buttons/icon.tsx
import { IconButton as MuiIconButton } from "@mui/material";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var IconButton = (_a) => {
  var _b = _a, {
    children,
    className,
    disabled,
    iconProps = {},
    margins,
    name,
    onClick,
    size: size2,
    tooltip,
    tooltipProps
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "disabled",
    "iconProps",
    "margins",
    "name",
    "onClick",
    "size",
    "tooltip",
    "tooltipProps"
  ]);
  const { css, cx } = useClasses3({ disabled, margins });
  return /* @__PURE__ */ jsx4(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ jsxs3(
    MuiIconButton,
    __spreadProps(__spreadValues(__spreadValues({}, props), { disabled, onClick, size: size2 }), {
      className: cx(css.root, className),
      children: [
        name && /* @__PURE__ */ jsx4(Icon, __spreadProps(__spreadValues({}, iconProps), { name })),
        children
      ]
    })
  ) }));
};
var useClasses3 = makeClasses((props) => ({
  root: __spreadProps(__spreadValues({}, makeMargins(props.margins)), {
    opacity: props.disabled ? 0.5 : 1,
    transition: "all 100ms ease-in-out"
  })
}));

// trabecula/components/buttons/icon-picker.tsx
import { useEffect, useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var SEARCH_STYLES = ["Filled", "Outlined", "Rounded", "TwoTone", "Sharp"];
var SEARCH_STYLES_UNFILLED = SEARCH_STYLES.filter((s) => s !== "Filled");
var IconPicker = Comp(
  (_a) => {
    var _b = _a, {
      color = colors.custom.black,
      label = "Icon",
      menuProps = {},
      setValue,
      value,
      viewProps = {},
      width = "fit-content",
      withStylePicker = false
    } = _b, buttonProps = __objRest(_b, [
      "color",
      "label",
      "menuProps",
      "setValue",
      "value",
      "viewProps",
      "width",
      "withStylePicker"
    ]);
    const [page, setPage] = useState(1);
    const [searchStyle, setSearchStyle] = useState("Filled");
    const [searchVal, setSearchVal] = useState("");
    const searchTerms = searchVal.split(" ").filter((t) => t.length > 0);
    const filteredIcons = MUI_ICONS.filter((icon) => {
      const name = icon.toLowerCase();
      if ((value == null ? void 0 : value.length) && name.includes(value.toLowerCase())) return false;
      if (searchStyle === "Filled") {
        if (SEARCH_STYLES_UNFILLED.some((s) => name.includes(s.toLowerCase()))) return false;
      } else if (!name.includes(searchStyle.toLowerCase())) return false;
      if (!searchTerms.length) return true;
      return searchTerms.every((term) => name.includes(term.toLowerCase()));
    });
    const pageSize = 25 - ((value == null ? void 0 : value.length) ? 1 : 0);
    const pageCount = Math.ceil(filteredIcons.length / pageSize);
    const pageIcons = [
      (value == null ? void 0 : value.length) ? value : null,
      ...filteredIcons.slice(pageSize * (page - 1), pageSize * page)
    ].filter(Boolean);
    useEffect(() => {
      if (page > pageCount) setPage(1);
    }, [pageCount, page]);
    const handleNoIcon = () => setValue(null);
    const handleSearchStyleChange = (event) => setSearchStyle(event.target.value);
    const renderButton = (onOpen) => /* @__PURE__ */ jsx5(
      Button,
      __spreadProps(__spreadValues({
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width
      }, buttonProps), {
        children: /* @__PURE__ */ jsxs4(View, { row: true, spacing: "0.5rem", align: "center", padding: { left: "0.5rem" }, children: [
          /* @__PURE__ */ jsx5(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ jsx5(Icon, { name: value })
        ] })
      })
    );
    return /* @__PURE__ */ jsx5(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ jsxs4(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ jsx5(Input, { header: "Search", value: searchVal, setValue: setSearchVal }),
      /* @__PURE__ */ jsx5(
        Button,
        {
          text: "No Icon",
          icon: "Close",
          onClick: handleNoIcon,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ jsxs4(View, { row: true, position: "relative", spacing: "0.5rem", children: [
        !withStylePicker ? null : /* @__PURE__ */ jsx5(Card, { column: true, header: "Style", children: /* @__PURE__ */ jsxs4(RadioGroup, { value: searchStyle, onChange: handleSearchStyleChange, children: [
          /* @__PURE__ */ jsx5(FormControlLabel, { label: "Filled", value: "Filled", control: /* @__PURE__ */ jsx5(Radio, {}) }),
          /* @__PURE__ */ jsx5(FormControlLabel, { label: "Outlined", value: "Outlined", control: /* @__PURE__ */ jsx5(Radio, {}) }),
          /* @__PURE__ */ jsx5(FormControlLabel, { label: "Rounded", value: "Rounded", control: /* @__PURE__ */ jsx5(Radio, {}) }),
          /* @__PURE__ */ jsx5(FormControlLabel, { label: "Two Tone", value: "TwoTone", control: /* @__PURE__ */ jsx5(Radio, {}) }),
          /* @__PURE__ */ jsx5(FormControlLabel, { label: "Sharp", value: "Sharp", control: /* @__PURE__ */ jsx5(Radio, {}) })
        ] }) }),
        /* @__PURE__ */ jsx5(View, { column: true, width: "16rem", height: "19rem", children: chunkArray(pageIcons, 5).map((swatch, i) => /* @__PURE__ */ jsx5(View, { row: true, children: swatch.map((icon) => /* @__PURE__ */ jsx5(
          IconButton,
          {
            name: icon,
            tooltip: icon,
            iconProps: { size: "1.4em" },
            sx: {
              border: `3px solid ${value === icon ? colors.custom.white : "transparent"}`
            },
            onClick: () => setValue(icon)
          },
          icon
        )) }, i)) }),
        /* @__PURE__ */ jsx5(
          Pagination,
          {
            count: pageCount,
            page,
            onChange: setPage,
            siblingCount: 0,
            boundaryCount: withStylePicker ? 1 : 0
          }
        )
      ] })
    ] })) }));
  }
);

// trabecula/components/buttons/menu-button.tsx
import { useState as useState2 } from "react";
import { Menu } from "@mui/material";
import { Fragment, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var MenuButton = (_a) => {
  var _b = _a, {
    bgColor = colors.background,
    button,
    children,
    color,
    icon = "MoreVert",
    keepMounted = true,
    menuWidth
  } = _b, props = __objRest(_b, [
    "bgColor",
    "button",
    "children",
    "color",
    "icon",
    "keepMounted",
    "menuWidth"
  ]);
  const { css } = useClasses4({ bgColor, menuWidth });
  const [anchorEl, setAnchorEl] = useState2(null);
  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  return /* @__PURE__ */ jsxs5(Fragment, { children: [
    button ? button(handleOpen) : /* @__PURE__ */ jsx6(IconButton, __spreadValues({ name: icon, onClick: handleOpen, iconProps: { color } }, props)),
    /* @__PURE__ */ jsx6(
      Menu,
      __spreadProps(__spreadValues({}, { anchorEl, keepMounted }), {
        open: Boolean(anchorEl),
        onClose: handleClose,
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
        transformOrigin: { horizontal: "right", vertical: "top" },
        className: css.menu,
        children
      })
    )
  ] });
};
var useClasses4 = makeClasses((props) => {
  var _a;
  return {
    menu: {
      "& .MuiPaper-root": {
        background: props.bgColor,
        minWidth: (_a = props.menuWidth) != null ? _a : "10rem",
        width: props.menuWidth
      },
      "& .MuiList-root": {
        padding: "4px 0"
      }
    }
  };
});

// trabecula/components/buttons/multi-action-button.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var MultiActionButton = (_a) => {
  var _b = _a, { tooltipProps = {} } = _b, props = __objRest(_b, ["tooltipProps"]);
  return /* @__PURE__ */ jsx7(IconButton, __spreadProps(__spreadValues({}, props), { size: "medium", tooltipProps: __spreadValues({ placement: "bottom" }, tooltipProps) }));
};

// trabecula/components/buttons/sort-menu.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
import { createElement } from "react";
var SortMenu = (_a) => {
  var _b = _a, {
    color = colors.custom.black,
    hasHeader,
    rows,
    setValue,
    value,
    width = "fit-content"
  } = _b, buttonProps = __objRest(_b, [
    "color",
    "hasHeader",
    "rows",
    "setValue",
    "value",
    "width"
  ]);
  const { css, cx } = useClasses5({ hasHeader, width });
  const activeRow = rows.find(({ attribute }) => attribute === (value == null ? void 0 : value.key));
  const renderButton = (onOpen) => /* @__PURE__ */ jsxs6(
    Button,
    __spreadProps(__spreadValues({
      onClick: onOpen,
      color,
      justify: "space-between",
      padding: { left: "0.5em", right: "0.5em" },
      className: cx(css.button, buttonProps == null ? void 0 : buttonProps.className)
    }, buttonProps), {
      children: [
        /* @__PURE__ */ jsxs6(View, { row: true, children: [
          /* @__PURE__ */ jsx8(Icon, { name: "Sort", size: "1.15em" }),
          /* @__PURE__ */ jsxs6(View, { column: true, align: "flex-start", margins: { left: "0.5em", right: "0.5em" }, children: [
            /* @__PURE__ */ jsx8(Text, { className: css.topText, children: "Sort By" }),
            /* @__PURE__ */ jsx8(Text, { className: css.label, children: activeRow == null ? void 0 : activeRow.label })
          ] })
        ] }),
        /* @__PURE__ */ jsx8(Icon, { name: (value == null ? void 0 : value.isDesc) ? "ArrowDownward" : "ArrowUpward", size: "1.15em" })
      ]
    })
  );
  return /* @__PURE__ */ jsx8(MenuButton, { button: renderButton, children: /* @__PURE__ */ jsx8(View, { column: true, children: rows.map((rowProps) => /* @__PURE__ */ createElement(SortRow, __spreadProps(__spreadValues(__spreadValues({}, rowProps), { setValue, value }), { key: rowProps.attribute }))) }) });
};
var useClasses5 = makeClasses((props) => ({
  button: __spreadProps(__spreadValues({}, makeBorderRadiuses(__spreadValues({ all: "0.3rem" }, props.hasHeader ? { top: 0 } : {}))), {
    height: "inherit",
    width: props.width,
    boxShadow: "none"
  }),
  label: {
    fontSize: "0.9em",
    lineHeight: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    whiteSpace: "nowrap"
  },
  topText: {
    color: colors.custom.lightGrey,
    fontSize: "0.7em",
    fontWeight: 600,
    lineHeight: 1
  }
}));

// trabecula/components/buttons/sort-row.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var SortRow = ({
  attribute,
  label,
  icon,
  iconProps = {},
  setValue,
  value
}) => {
  const { css } = useClasses6(null);
  return /* @__PURE__ */ jsxs7(View, { className: css.row, children: [
    /* @__PURE__ */ jsx9(Icon, __spreadValues({ name: icon }, iconProps)),
    /* @__PURE__ */ jsx9(Text, { className: css.label, children: label }),
    /* @__PURE__ */ jsx9(SortButton, __spreadProps(__spreadValues({}, { attribute, setValue, value }), { isDesc: true })),
    /* @__PURE__ */ jsx9(SortButton, __spreadValues({}, { attribute, setValue, value }))
  ] });
};
var SortButton = ({ attribute, isDesc = false, setValue, value }) => {
  const isActive = attribute === (value == null ? void 0 : value.key) && isDesc === (value == null ? void 0 : value.isDesc);
  const color = isActive ? colors.custom.blue : colors.custom.lightGrey;
  const updateSort = () => setValue({ key: attribute, isDesc });
  return /* @__PURE__ */ jsx9(
    IconButton,
    {
      name: isDesc ? "ArrowDownward" : "ArrowUpward",
      onClick: updateSort,
      iconProps: { color },
      margins: { left: "0.5rem" },
      size: "small"
    }
  );
};
var useClasses6 = makeClasses({
  label: {
    flex: 1,
    whiteSpace: "nowrap",
    padding: "0 0.5rem"
  },
  row: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    padding: "0.5rem 0.8rem"
  }
});

// trabecula/components/inputs/date-input.tsx
import { useEffect as useEffect2, useState as useState3 } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { jsx as jsx10 } from "react/jsx-runtime";
var DateInput = (_a) => {
  var _b = _a, {
    header,
    headerProps = {},
    inputProps = {},
    setValue,
    value,
    width
  } = _b, datePickerProps = __objRest(_b, [
    "header",
    "headerProps",
    "inputProps",
    "setValue",
    "value",
    "width"
  ]);
  const { css } = useClasses7({ width });
  const [dateValue, setDateValue] = useState3((value == null ? void 0 : value.length) ? dayjs(value) : null);
  useEffect2(() => {
    setDateValue((value == null ? void 0 : value.length) ? dayjs(value) : null);
  }, [value]);
  const handleChange = (val) => setValue == null ? void 0 : setValue(val == null ? void 0 : val.format("YYYY-MM-DD"));
  return /* @__PURE__ */ jsx10(HeaderWrapper, { header, headerProps, children: /* @__PURE__ */ jsx10(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx10(
    DatePicker,
    __spreadProps(__spreadValues({}, datePickerProps), {
      value: dateValue,
      onChange: handleChange,
      slots: {
        textField: (props) => /* @__PURE__ */ jsx10(
          Input,
          __spreadProps(__spreadValues(__spreadValues({}, props), inputProps), {
            color: inputProps.color,
            value: props == null ? void 0 : props.value
          })
        )
      },
      slotProps: { actionBar: { actions: ["cancel", "clear", "today"] } },
      className: css.datePicker
    })
  ) }) });
};
var useClasses7 = makeClasses((props) => ({
  datePicker: {
    width: props.width,
    "& .MuiInputBase-input": {
      padding: "0.5rem 0 0.5rem 0.5rem"
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem"
    },
    "& input": {
      fontSize: "0.9em"
    }
  }
}));

// trabecula/components/inputs/date-range.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var DateRange = ({
  dateInputProps = {},
  endDate,
  header,
  headerProps,
  setEndDate,
  setStartDate,
  startDate
}) => {
  return /* @__PURE__ */ jsx11(
    RangeWrapper,
    {
      header,
      headerProps,
      startInput: /* @__PURE__ */ jsx11(
        DateInput,
        __spreadProps(__spreadValues({}, dateInputProps), {
          value: startDate,
          setValue: setStartDate,
          inputProps: { borderRadiuses: { top: 0, right: 0 } }
        })
      ),
      endInput: /* @__PURE__ */ jsx11(
        DateInput,
        __spreadProps(__spreadValues({}, dateInputProps), {
          value: endDate,
          setValue: setEndDate,
          inputProps: { borderRadiuses: { top: 0, left: 0 } }
        })
      )
    }
  );
};

// trabecula/components/inputs/dropdown.tsx
import { MenuItem } from "@mui/material";
import { jsx as jsx12 } from "react/jsx-runtime";
var Dropdown = (_a) => {
  var _b = _a, { options, value } = _b, props = __objRest(_b, ["options", "value"]);
  return /* @__PURE__ */ jsx12(Input, __spreadProps(__spreadValues({}, props), { value, select: true, children: options.map((o, i) => /* @__PURE__ */ jsx12(MenuItem, { value: o.value, children: /* @__PURE__ */ jsx12(Text, { children: o.label }) }, i)) }));
};

// trabecula/components/inputs/filter-menu.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var FilterMenu = Comp(
  (_a) => {
    var _b = _a, {
      children,
      color = colors.custom.black,
      menuProps = {},
      resetFn,
      sortOptions,
      store,
      viewProps = {},
      width = "fit-content"
    } = _b, buttonProps = __objRest(_b, [
      "children",
      "color",
      "menuProps",
      "resetFn",
      "sortOptions",
      "store",
      "viewProps",
      "width"
    ]);
    const handleReset = () => {
      resetFn ? resetFn() : store.reset();
      handleSearch();
    };
    const handleSearch = () => {
      store.setPageCount(1);
      store.loadFiltered({ noCache: true, page: 1 });
    };
    const renderButton = (onOpen) => /* @__PURE__ */ jsxs8(
      Button,
      __spreadProps(__spreadValues({
        onClick: onOpen,
        color: store.hasChanges ? colors.custom.purple : color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width
      }, buttonProps), {
        children: [
          /* @__PURE__ */ jsxs8(View, { row: true, spacing: "0.5rem", margins: { right: "0.5rem" }, children: [
            /* @__PURE__ */ jsx13(Icon, { name: "FilterAlt", size: "1.15em" }),
            /* @__PURE__ */ jsx13(Text, { children: "Filter Results" })
          ] }),
          /* @__PURE__ */ jsx13(
            Chip,
            {
              label: store.numOfFilters,
              bgColor: store.numOfFilters > 0 ? colors.custom.blue : colors.foregroundCard,
              height: "1.2rem",
              width: "2rem",
              size: "small"
            }
          )
        ]
      })
    );
    return /* @__PURE__ */ jsx13(MenuButton, __spreadProps(__spreadValues({ button: renderButton }, menuProps), { children: /* @__PURE__ */ jsxs8(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ jsxs8(UniformList, { row: true, spacing: "0.5rem", children: [
        /* @__PURE__ */ jsx13(
          Button,
          {
            text: "Search",
            icon: "Search",
            onClick: handleSearch,
            disabled: store.isLoading,
            color: store.hasChanges ? colors.custom.purple : colors.custom.blue
          }
        ),
        /* @__PURE__ */ jsx13(
          Button,
          {
            text: "Reset",
            icon: "Refresh",
            onClick: handleReset,
            disabled: store.isLoading,
            color: colors.foregroundCard,
            colorOnHover: colors.custom.red
          }
        ),
        /* @__PURE__ */ jsx13(
          SortMenu,
          {
            rows: sortOptions,
            value: store.sortValue,
            setValue: store.setSortValue,
            color: colors.foregroundCard
          }
        )
      ] }),
      children
    ] })) }));
  }
);

// trabecula/components/inputs/input.tsx
var import_color2 = __toESM(require_color());
import { InputAdornment, TextField } from "@mui/material";
import { jsx as jsx14 } from "react/jsx-runtime";
var DEFAULT_HEADER_PROPS = {
  fontSize: "0.8em",
  padding: { all: "0.15rem 0.3rem" }
};
var Input = Comp(
  (_a, ref) => {
    var _b = _a, {
      adornment,
      adornmentPosition = "end",
      borders,
      borderRadiuses,
      children,
      className,
      color,
      dense = false,
      flex,
      hasHelper = false,
      header,
      headerProps = {},
      helperText,
      inputProps,
      margins = {},
      maxLength,
      minWidth,
      onClick,
      onKeyDown,
      setValue,
      textAlign,
      value,
      variant = "outlined",
      width = "100%"
    } = _b, props = __objRest(_b, [
      "adornment",
      "adornmentPosition",
      "borders",
      "borderRadiuses",
      "children",
      "className",
      "color",
      "dense",
      "flex",
      "hasHelper",
      "header",
      "headerProps",
      "helperText",
      "inputProps",
      "margins",
      "maxLength",
      "minWidth",
      "onClick",
      "onKeyDown",
      "setValue",
      "textAlign",
      "value",
      "variant",
      "width"
    ]);
    headerProps = deepMerge(DEFAULT_HEADER_PROPS, headerProps);
    const { css, cx } = useClasses8({
      borders,
      borderRadiuses,
      color,
      dense,
      flex,
      hasHeader: header !== void 0,
      hasHelper,
      hasHelperText: !!helperText,
      hasOnClick: !!onClick,
      margins,
      minWidth,
      textAlign,
      width
    });
    const handleChange = (event) => setValue == null ? void 0 : setValue(event.target.value);
    const handleKeyDown = (event) => {
      event.stopPropagation();
      onKeyDown == null ? void 0 : onKeyDown(event);
    };
    return /* @__PURE__ */ jsx14(
      HeaderWrapper,
      __spreadProps(__spreadValues({}, { flex, header, headerProps, width }), {
        overflow: "initial",
        "aria-label": "input-wrapper",
        children: /* @__PURE__ */ jsx14(
          TextField,
          __spreadProps(__spreadValues(__spreadValues({}, props), { onClick, ref, value, variant }), {
            onChange: handleChange,
            onKeyDown: handleKeyDown,
            helperText: helperText ? typeof helperText === "string" ? /* @__PURE__ */ jsx14(Text, { children: helperText }) : helperText : void 0,
            FormHelperTextProps: { component: "div" },
            inputProps: __spreadProps(__spreadValues({}, inputProps), { maxLength, value: value != null ? value : "" }),
            InputProps: __spreadValues({
              endAdornment: adornmentPosition === "end" && adornment ? /* @__PURE__ */ jsx14(InputAdornment, { position: "end", children: typeof adornment === "string" ? /* @__PURE__ */ jsx14(Text, { fontSize: "0.9em", color: colors.custom.grey, children: adornment }) : adornment }) : null,
              startAdornment: adornmentPosition === "start" ? adornment : null
            }, props.InputProps),
            size: "small",
            className: cx(css.input, className),
            "aria-label": "input",
            children
          })
        )
      })
    );
  }
);
var useClasses8 = makeClasses((props) => {
  var _a, _b, _c;
  return {
    input: __spreadProps(__spreadValues({
      flex: props.flex
    }, makeMargins(__spreadProps(__spreadValues({}, props.margins), {
      bottom: (_b = (_a = props.margins) == null ? void 0 : _a.bottom) != null ? _b : props.hasHelper && !props.hasHelperText ? "1.3em" : 0
    }))), {
      minWidth: props.minWidth,
      width: "100%",
      "& input": {
        borderRadius: "inherit",
        padding: props.dense ? "0.2em 0.5em" : void 0,
        textAlign: props.textAlign,
        cursor: props.hasOnClick ? "pointer" : void 0
      },
      "& .MuiTypography-root": {
        display: "inline-grid",
        width: "100%",
        textAlign: props.textAlign
      },
      "& .MuiOutlinedInput-root": {
        background: "rgb(0 0 0 / 0.2)",
        "& fieldset": __spreadValues(__spreadValues({
          transition: "all 200ms ease-in-out",
          borderColor: props.color,
          borderStyle: "dotted"
        }, makeBorders(props.borders)), makeBorderRadiuses(
          deepMerge(props.hasHeader ? { top: 0 } : {}, (_c = props.borderRadiuses) != null ? _c : {})
        )),
        "&:hover fieldset": {
          borderColor: props.color ? (0, import_color2.default)(props.color).lighten(0.3).toString() : void 0
        },
        "&.Mui-focused fieldset": {
          borderColor: props.color
        }
      },
      "& .MuiSelect-select": {
        fontSize: "0.9em"
      },
      "& .MuiFormHelperText-root": {
        margin: "0.3em 0 0 0",
        color: props.color,
        fontSize: "0.75em",
        lineHeight: 1,
        textAlign: "center"
      }
    })
  };
});

// trabecula/components/inputs/log-ops-input.tsx
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var LOG_OPS_OPTS = [
  { label: "Any", value: "" },
  ...LOGICAL_OPS.map((op) => ({ label: op, value: op }))
];
var LogOpsInput = (_a) => {
  var _b = _a, {
    dropdownProps = {},
    header,
    headerProps,
    logOpValue,
    numInputProps,
    numValue,
    numValueDisplay,
    setLogOpValue,
    setNumValue,
    setNumValueDisplay
  } = _b, props = __objRest(_b, [
    "dropdownProps",
    "header",
    "headerProps",
    "logOpValue",
    "numInputProps",
    "numValue",
    "numValueDisplay",
    "setLogOpValue",
    "setNumValue",
    "setNumValueDisplay"
  ]);
  return /* @__PURE__ */ jsxs9(HeaderWrapper, __spreadProps(__spreadValues(__spreadValues({ row: true, overflow: "hidden" }, { header, headerProps }), props), { children: [
    /* @__PURE__ */ jsx15(
      Dropdown,
      __spreadValues({
        value: logOpValue,
        setValue: setLogOpValue,
        options: LOG_OPS_OPTS,
        minWidth: "3.7em",
        borderRadiuses: { top: 0, right: 0 },
        textAlign: "center"
      }, dropdownProps)
    ),
    /* @__PURE__ */ jsx15(
      NumInput,
      __spreadValues({
        value: numValue,
        valueDisplay: numValueDisplay,
        setValue: setNumValue,
        setValueDisplay: setNumValueDisplay,
        disabled: logOpValue === "",
        width: "100%",
        textAlign: "center",
        hasHelper: false,
        borderRadiuses: { top: 0, left: 0 }
      }, numInputProps)
    )
  ] }));
};

// trabecula/components/inputs/multi-input.tsx
import { useState as useState4 } from "react";

// trabecula/components/inputs/multi-input-list.tsx
import { forwardRef as forwardRef2 } from "react";

// node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js
import { Component, createElement as createElement2 } from "react";
var windowObject;
if (typeof window !== "undefined") {
  windowObject = window;
} else if (typeof self !== "undefined") {
  windowObject = self;
} else {
  windowObject = global;
}
var cancelFrame = null;
var requestFrame = null;
var TIMEOUT_DURATION = 20;
var clearTimeoutFn = windowObject.clearTimeout;
var setTimeoutFn = windowObject.setTimeout;
var cancelAnimationFrameFn = windowObject.cancelAnimationFrame || windowObject.mozCancelAnimationFrame || windowObject.webkitCancelAnimationFrame;
var requestAnimationFrameFn = windowObject.requestAnimationFrame || windowObject.mozRequestAnimationFrame || windowObject.webkitRequestAnimationFrame;
if (cancelAnimationFrameFn == null || requestAnimationFrameFn == null) {
  cancelFrame = clearTimeoutFn;
  requestFrame = function requestAnimationFrameViaSetTimeout(callback) {
    return setTimeoutFn(callback, TIMEOUT_DURATION);
  };
} else {
  cancelFrame = function cancelFrame2([animationFrameID, timeoutID]) {
    cancelAnimationFrameFn(animationFrameID);
    clearTimeoutFn(timeoutID);
  };
  requestFrame = function requestAnimationFrameWithSetTimeoutFallback(callback) {
    const animationFrameID = requestAnimationFrameFn(function animationFrameCallback() {
      clearTimeoutFn(timeoutID);
      callback();
    });
    const timeoutID = setTimeoutFn(function timeoutCallback() {
      cancelAnimationFrameFn(animationFrameID);
      callback();
    }, TIMEOUT_DURATION);
    return [animationFrameID, timeoutID];
  };
}
function createDetectElementResize(nonce) {
  let animationKeyframes;
  let animationName;
  let animationStartEvent;
  let animationStyle;
  let checkTriggers;
  let resetTriggers;
  let scrollListener;
  const attachEvent = typeof document !== "undefined" && document.attachEvent;
  if (!attachEvent) {
    resetTriggers = function(element) {
      const triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    checkTriggers = function(element) {
      return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
    };
    scrollListener = function(e) {
      if (e.target.className && typeof e.target.className.indexOf === "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
        return;
      }
      const element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function animationFrame() {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function forEachResizeListener(fn) {
            fn.call(element, e);
          });
        }
      });
    };
    let animation = false;
    let keyframeprefix = "";
    animationStartEvent = "animationstart";
    const domPrefixes = "Webkit Moz O ms".split(" ");
    let startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
    let pfx = "";
    {
      const elm = document.createElement("fakeelement");
      if (elm.style.animationName !== void 0) {
        animation = true;
      }
      if (animation === false) {
        for (let i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== void 0) {
            pfx = domPrefixes[i];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationStartEvent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    animationName = "resizeanim";
    animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
    animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  }
  const createStyles = function(doc) {
    if (!doc.getElementById("detectElementResize")) {
      const css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
      style.id = "detectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  const addResizeListener = function(element, fn) {
    if (attachEvent) {
      element.attachEvent("onresize", fn);
    } else {
      if (!element.__resizeTriggers__) {
        const doc = element.ownerDocument;
        const elementStyle = windowObject.getComputedStyle(element);
        if (elementStyle && elementStyle.position === "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers";
        const expandTrigger = doc.createElement("div");
        expandTrigger.className = "expand-trigger";
        expandTrigger.appendChild(doc.createElement("div"));
        const contractTrigger = doc.createElement("div");
        contractTrigger.className = "contract-trigger";
        element.__resizeTriggers__.appendChild(expandTrigger);
        element.__resizeTriggers__.appendChild(contractTrigger);
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);
        if (animationStartEvent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName === animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };
  const removeResizeListener = function(element, fn) {
    if (attachEvent) {
      element.detachEvent("onresize", fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
        }
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}
var AutoSizer = class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      height: this.props.defaultHeight || 0,
      width: this.props.defaultWidth || 0
    };
    this._autoSizer = null;
    this._detectElementResize = null;
    this._didLogDeprecationWarning = false;
    this._parentNode = null;
    this._resizeObserver = null;
    this._timeoutId = null;
    this._onResize = () => {
      this._timeoutId = null;
      const {
        disableHeight,
        disableWidth,
        onResize
      } = this.props;
      if (this._parentNode) {
        const style = window.getComputedStyle(this._parentNode) || {};
        const paddingLeft = parseFloat(style.paddingLeft || "0");
        const paddingRight = parseFloat(style.paddingRight || "0");
        const paddingTop = parseFloat(style.paddingTop || "0");
        const paddingBottom = parseFloat(style.paddingBottom || "0");
        const rect = this._parentNode.getBoundingClientRect();
        const height = rect.height - paddingTop - paddingBottom;
        const width = rect.width - paddingLeft - paddingRight;
        if (!disableHeight && this.state.height !== height || !disableWidth && this.state.width !== width) {
          this.setState({
            height,
            width
          });
          const maybeLogDeprecationWarning = () => {
            if (!this._didLogDeprecationWarning) {
              this._didLogDeprecationWarning = true;
              console.warn("scaledWidth and scaledHeight parameters have been deprecated; use width and height instead");
            }
          };
          if (typeof onResize === "function") {
            onResize({
              height,
              width,
              // TODO Remove these params in the next major release
              get scaledHeight() {
                maybeLogDeprecationWarning();
                return height;
              },
              get scaledWidth() {
                maybeLogDeprecationWarning();
                return width;
              }
            });
          }
        }
      }
    };
    this._setRef = (autoSizer) => {
      this._autoSizer = autoSizer;
    };
  }
  componentDidMount() {
    const {
      nonce
    } = this.props;
    const parentNode = this._autoSizer ? this._autoSizer.parentNode : null;
    if (parentNode != null && parentNode.ownerDocument && parentNode.ownerDocument.defaultView && parentNode instanceof parentNode.ownerDocument.defaultView.HTMLElement) {
      this._parentNode = parentNode;
      const ResizeObserverInstance = parentNode.ownerDocument.defaultView.ResizeObserver;
      if (ResizeObserverInstance != null) {
        this._resizeObserver = new ResizeObserverInstance(() => {
          this._timeoutId = setTimeout(this._onResize, 0);
        });
        this._resizeObserver.observe(parentNode);
      } else {
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(parentNode, this._onResize);
      }
      this._onResize();
    }
  }
  componentWillUnmount() {
    if (this._parentNode) {
      if (this._detectElementResize) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
      if (this._timeoutId !== null) {
        clearTimeout(this._timeoutId);
      }
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
      }
    }
  }
  render() {
    const _a = this.props, {
      children,
      defaultHeight,
      defaultWidth,
      disableHeight = false,
      disableWidth = false,
      doNotBailOutOnEmptyChildren = false,
      nonce,
      onResize,
      style = {},
      tagName = "div"
    } = _a, rest = __objRest(_a, [
      "children",
      "defaultHeight",
      "defaultWidth",
      "disableHeight",
      "disableWidth",
      "doNotBailOutOnEmptyChildren",
      "nonce",
      "onResize",
      "style",
      "tagName"
    ]);
    const {
      height,
      width
    } = this.state;
    const outerStyle = {
      overflow: "visible"
    };
    const childParams = {};
    let bailoutOnChildren = false;
    if (!disableHeight) {
      if (height === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.height = 0;
      childParams.height = height;
      childParams.scaledHeight = height;
    }
    if (!disableWidth) {
      if (width === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.width = 0;
      childParams.width = width;
      childParams.scaledWidth = width;
    }
    if (doNotBailOutOnEmptyChildren) {
      bailoutOnChildren = false;
    }
    return createElement2(tagName, __spreadValues({
      ref: this._setRef,
      style: __spreadValues(__spreadValues({}, outerStyle), style)
    }, rest), !bailoutOnChildren && children(childParams));
  }
};

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/react-window/dist/index.esm.js
import { createElement as createElement3, PureComponent } from "react";
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();
  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var size = -1;
function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (size === -1 || recalculate) {
    var div = document.createElement("div");
    var style = div.style;
    style.width = "50px";
    style.height = "50px";
    style.overflow = "scroll";
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return size;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;
if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsOverscanCount = /* @__PURE__ */ new WeakSet();
    devWarningsOverscanRowsColumnsCount = /* @__PURE__ */ new WeakSet();
    devWarningsTagName = /* @__PURE__ */ new WeakSet();
  }
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
};
var devWarningsDirection = null;
var devWarningsTagName$1 = null;
if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsDirection = /* @__PURE__ */ new WeakSet();
    devWarningsTagName$1 = /* @__PURE__ */ new WeakSet();
  }
}
function createListComponent(_ref) {
  var _class;
  var getItemOffset2 = _ref.getItemOffset, getEstimatedTotalSize2 = _ref.getEstimatedTotalSize, getItemSize2 = _ref.getItemSize, getOffsetForIndexAndAlignment2 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset2 = _ref.getStartIndexForOffset, getStopIndexForStartIndex2 = _ref.getStopIndexForStartIndex, initInstanceProps2 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps2 = _ref.validateProps;
  return _class = /* @__PURE__ */ (function(_PureComponent) {
    _inheritsLoose(List, _PureComponent);
    function List(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps2(_this.props, _assertThisInitialized(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_this),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm_default(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm_default(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset2(_this.props, index, _this._instanceProps);
          var size2 = getItemSize2(_this.props, index, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          var isRtl = direction === "rtl";
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: "absolute",
            left: isRtl ? void 0 : offsetHorizontal,
            right: isRtl ? offsetHorizontal : void 0,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size2 : "100%",
            width: isHorizontal ? size2 : "100%"
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm_default(function(_, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps2(nextProps);
      return null;
    };
    var _proto = List.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      var _this$props2 = this.props, itemCount = _this$props2.itemCount, layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      var scrollbarSize = 0;
      if (this._outerRef) {
        var outerRef = this._outerRef;
        if (layout === "vertical") {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }
      this.scrollTo(getOffsetForIndexAndAlignment2(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props, direction = _this$props3.direction, initialScrollOffset = _this$props3.initialScrollOffset, layout = _this$props3.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props, direction = _this$props4.direction, layout = _this$props4.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props5 = this.props, children = _this$props5.children, className = _this$props5.className, direction = _this$props5.direction, height = _this$props5.height, innerRef = _this$props5.innerRef, innerElementType = _this$props5.innerElementType, innerTagName = _this$props5.innerTagName, itemCount = _this$props5.itemCount, itemData = _this$props5.itemData, _this$props5$itemKey = _this$props5.itemKey, itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey, layout = _this$props5.layout, outerElementType = _this$props5.outerElementType, outerTagName = _this$props5.outerTagName, style = _this$props5.style, useIsScrolling = _this$props5.useIsScrolling, width = _this$props5.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(createElement3(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize2(this.props, this._instanceProps);
      return createElement3(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, createElement3(innerElementType || innerTagName || "div", {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props, itemCount = _this$props6.itemCount, overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset2(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex2(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List;
  })(PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
}
var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children, direction = _ref2.direction, height = _ref2.height, layout = _ref2.layout, innerTagName = _ref2.innerTagName, outerTagName = _ref2.outerTagName, width = _ref2.width;
  var instance = _ref3.instance;
  if (process.env.NODE_ENV !== "production") {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.");
      }
    }
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    switch (direction) {
      case "horizontal":
      case "vertical":
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + direction + '" was specified.'));
    }
    switch (layout) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + layout + '" was specified.'));
    }
    if (children == null) {
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (children === null ? "null" : typeof children) + '" was specified.'));
    }
    if (isHorizontal && typeof width !== "number") {
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (width === null ? "null" : typeof width) + '" was specified.'));
    } else if (!isHorizontal && typeof height !== "number") {
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (height === null ? "null" : typeof height) + '" was specified.'));
    }
  }
};
var FixedSizeList = /* @__PURE__ */ createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size2);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size2 + itemSize + scrollbarSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size2 / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size2 / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset = startIndex * itemSize;
    var size2 = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size2 + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(
      itemCount - 1,
      startIndex + numVisibleItems - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;
    if (process.env.NODE_ENV !== "production") {
      if (typeof itemSize !== "number") {
        throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (itemSize === null ? "null" : typeof itemSize) + '" was specified.'));
      }
    }
  }
});

// trabecula/components/inputs/multi-input-row.tsx
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var MULTI_INPUT_ROW_HEIGHT = 35;
var MultiInputRow = (_a) => {
  var _b = _a, { bgColor } = _b, props = __objRest(_b, ["bgColor"]);
  var _a2, _b2;
  bgColor = bgColor || colors.foreground;
  const hasClick = !!props.onClick;
  const { css } = useClasses9({ bgColor, hasClick });
  const value = (_b2 = (_a2 = props.valueExtractor) == null ? void 0 : _a2.call(props, props.value)) != null ? _b2 : props.value;
  const handleClick = () => {
    var _a3;
    return (_a3 = props.onClick) == null ? void 0 : _a3.call(props, props.value);
  };
  const handleDelete = () => props.search.onChange(
    props.search.value.filter((v) => {
      var _a3, _b3;
      return ((_b3 = (_a3 = props.valueExtractor) == null ? void 0 : _a3.call(props, v)) != null ? _b3 : v) !== value;
    })
  );
  return /* @__PURE__ */ jsxs10(View, { row: true, className: css.root, style: props.style, children: [
    props.leftNode,
    /* @__PURE__ */ jsx16(
      View,
      {
        onClick: hasClick ? handleClick : null,
        row: true,
        flex: 1,
        overflow: "hidden",
        padding: { all: "0 0.3rem" },
        children: /* @__PURE__ */ jsx16(
          Text,
          {
            tooltip: value,
            tooltipProps: {
              enterDelay: _CONSTANTS.TOOLTIP.ENTER_DELAY,
              enterNextDelay: _CONSTANTS.TOOLTIP.ENTER_NEXT_DELAY,
              flexShrink: 1
            },
            className: css.label,
            children: value
          }
        )
      }
    ),
    props.rightNode,
    props.hasDelete && /* @__PURE__ */ jsx16(
      Button,
      {
        onClick: handleDelete,
        icon: "Close",
        color: "transparent",
        colorOnHover: colors.custom.red,
        boxShadow: "none"
      }
    )
  ] });
};
var useClasses9 = makeClasses((props) => ({
  label: {
    padding: "0 0.3rem",
    fontSize: "0.8em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  root: {
    alignItems: "center",
    borderBottom: `1px solid ${colors.custom.black}`,
    height: MULTI_INPUT_ROW_HEIGHT,
    width: "100%",
    backgroundColor: props.bgColor,
    cursor: props.hasClick ? "pointer" : void 0
  }
}));

// trabecula/components/inputs/multi-input-list.tsx
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
var MultiInputList = forwardRef2(
  (_a, ref) => {
    var _b = _a, {
      hasDeleteAll = false,
      hasInput,
      renderRow,
      search,
      viewProps = {}
    } = _b, props = __objRest(_b, [
      "hasDeleteAll",
      "hasInput",
      "renderRow",
      "search",
      "viewProps"
    ]);
    const { css } = useClasses10({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return /* @__PURE__ */ jsxs11(View, { column: true, height: "100%", children: [
      /* @__PURE__ */ jsx17(
        View,
        __spreadProps(__spreadValues({}, viewProps), {
          column: true,
          height: "100%",
          borderRadiuses: {
            all: "0.3rem",
            top: hasInput ? 0 : void 0,
            bottom: hasDeleteAll ? 0 : void 0
          },
          className: css.listContainer,
          children: !search.value.length ? /* @__PURE__ */ jsx17(CenteredText, { text: "No items", color: colors.custom.grey }) : /* @__PURE__ */ jsx17(View, { flex: 1, children: /* @__PURE__ */ jsx17(AutoSizer, { disableWidth: true, children: ({ height }) => /* @__PURE__ */ jsx17(
            FixedSizeList,
            {
              ref,
              height,
              width: "100%",
              layout: "vertical",
              itemSize: MULTI_INPUT_ROW_HEIGHT,
              itemCount: search.value.length,
              children: ({ index, style }) => renderRow ? renderRow(index, style) : /* @__PURE__ */ jsx17(
                MultiInputRow,
                __spreadValues(__spreadValues({
                  value: search.value[index]
                }, { search, style }), props),
                index
              )
            }
          ) }) })
        })
      ),
      hasDeleteAll && /* @__PURE__ */ jsx17(
        Button,
        {
          text: "Delete All",
          icon: "Close",
          onClick: handleDeleteAll,
          colorOnHover: colors.custom.red,
          textColor: colors.custom.lightGrey,
          outlined: true,
          width: "100%",
          borderRadiuses: { top: 0 }
        }
      )
    ] });
  }
);
var useClasses10 = makeClasses((props) => ({
  listContainer: {
    border: `1px dotted ${colors.custom.grey}`,
    borderTop: props.hasInput ? "none" : void 0,
    borderBottom: props.hasDeleteAll ? "none" : void 0,
    minHeight: "2.5rem",
    backgroundColor: "rgb(0 0 0 / 0.2)",
    overflowY: "auto"
  }
}));

// trabecula/components/inputs/multi-input.tsx
import { Fragment as Fragment2, jsx as jsx18, jsxs as jsxs12 } from "react/jsx-runtime";
var MultiInput = Comp(
  ({
    hasDelete = true,
    hasDeleteAll = false,
    hasHelper = false,
    hasList = true,
    header,
    headerProps = {},
    inputProps,
    max,
    onChange,
    single,
    value = []
  }, inputRef) => {
    const isMax = max > -1 && value.length >= max;
    const disabled = (inputProps == null ? void 0 : inputProps.disabled) || isMax;
    const [inputValue, setInputValue] = useState4("");
    const onKeyDown = (e) => {
      if (e.key === "Enter" && !isMax) {
        e.preventDefault();
        if (!value.includes(inputValue)) onChange([...value, inputValue]);
        setInputValue("");
      }
    };
    const renderList = () => /* @__PURE__ */ jsx18(MultiInputList, __spreadProps(__spreadValues({}, { hasDelete, hasDeleteAll }), { search: { onChange, value }, hasInput: true }));
    return /* @__PURE__ */ jsx18(View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? /* @__PURE__ */ jsx18(HeaderWrapper, __spreadProps(__spreadValues({}, { header, headerProps }), { children: renderList() })) : /* @__PURE__ */ jsxs12(Fragment2, { children: [
      /* @__PURE__ */ jsx18(
        Input,
        __spreadProps(__spreadValues(__spreadValues({}, { disabled, hasHelper, header, headerProps }), inputProps), {
          onKeyDown,
          ref: inputRef,
          value: inputValue,
          setValue: setInputValue,
          borderRadiuses: { bottom: !single && hasList ? 0 : void 0 }
        })
      ),
      !single && hasList && renderList()
    ] }) });
  }
);

// trabecula/components/inputs/num-input.tsx
import { useState as useState5 } from "react";
import { jsx as jsx19 } from "react/jsx-runtime";
var NumInput = Comp(
  (_a, ref) => {
    var _b = _a, {
      hasHelper,
      maxValue,
      minValue,
      setValue,
      setValueDisplay,
      value,
      valueDisplay
    } = _b, props = __objRest(_b, [
      "hasHelper",
      "maxValue",
      "minValue",
      "setValue",
      "setValueDisplay",
      "value",
      "valueDisplay"
    ]);
    const [error, setError] = useState5(null);
    const handleChange = (val) => {
      if (!val) {
        setValue == null ? void 0 : setValue(null);
        setValueDisplay == null ? void 0 : setValueDisplay(null);
        setError(null);
      } else if (setValueDisplay) {
        setValueDisplay(val);
      } else if (isNaN(+val)) {
        toast.error("Must be a number");
      } else {
        setValue == null ? void 0 : setValue(+val);
        if (maxValue && +val > maxValue)
          hasHelper ? setError(`Max: ${maxValue}`) : toast.error(`Max: ${maxValue}`);
        else if (minValue && +val < minValue)
          hasHelper ? setError(`Min: ${minValue}`) : toast.error(`Min: ${minValue}`);
        else setError(null);
      }
    };
    return /* @__PURE__ */ jsx19(
      Input,
      __spreadValues({
        ref,
        value: valueDisplay != null ? valueDisplay : value !== null && !isNaN(+value) ? String(value) : "",
        setValue: handleChange,
        error: hasHelper && !!error,
        helperText: hasHelper ? error : null,
        hasHelper
      }, props)
    );
  }
);

// trabecula/components/inputs/num-range.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var NumRange = ({
  hasHelper = false,
  header,
  headerProps,
  max,
  min,
  numInputProps = {},
  setMax,
  setMin
}) => {
  return /* @__PURE__ */ jsx20(
    RangeWrapper,
    {
      header,
      headerProps,
      startInput: /* @__PURE__ */ jsx20(
        NumInput,
        __spreadProps(__spreadValues(__spreadValues({}, numInputProps), { hasHelper }), {
          value: min,
          setValue: setMin,
          placeholder: "Min",
          textAlign: "center",
          borderRadiuses: { top: 0, right: 0 }
        })
      ),
      endInput: /* @__PURE__ */ jsx20(
        NumInput,
        __spreadProps(__spreadValues(__spreadValues({}, numInputProps), { hasHelper }), {
          value: max,
          setValue: setMax,
          placeholder: "Max",
          textAlign: "center",
          borderRadiuses: { top: 0, left: 0 }
        })
      )
    }
  );
};

// trabecula/components/inputs/range-wrapper.tsx
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
var RangeWrapper = (props) => {
  return /* @__PURE__ */ jsxs13(HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [
    props.startInput,
    /* @__PURE__ */ jsx21(
      View,
      {
        column: true,
        justify: "center",
        bgColor: "rgb(0 0 0 / 0.2)",
        padding: { all: "0 0.4rem" },
        borders: {
          top: `1px dotted ${colors.custom.grey}`,
          bottom: `1px dotted ${colors.custom.grey}`
        },
        children: /* @__PURE__ */ jsx21(Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "\u2014" })
      }
    ),
    props.endInput
  ] });
};

// trabecula/components/list/detail-rows.tsx
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
var DetailRows = ({ labelWidth = "8rem", rows }) => {
  const { css } = useClasses11({ labelWidth });
  return /* @__PURE__ */ jsx22(View, { className: css.table, children: rows.map(({ label, value }, i) => /* @__PURE__ */ jsxs14(View, { className: css.row, children: [
    typeof label === "string" ? /* @__PURE__ */ jsx22(Text, { className: css.label, children: label }) : label,
    typeof value === "string" ? /* @__PURE__ */ jsx22(Text, { noWrap: true, tooltip: value, children: value }) : value
  ] }, `${i}-${label}`)) });
};
var useClasses11 = makeClasses((props) => ({
  label: {
    flexShrink: 0,
    marginRight: "1rem",
    width: props.labelWidth,
    color: colors.custom.blue,
    fontWeight: "bold",
    whiteSpace: "nowrap"
  },
  row: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  table: {
    display: "flex",
    flexFlow: "column nowrap",
    padding: "0.5rem"
  }
}));

// trabecula/components/list/list-item.tsx
var import_color3 = __toESM(require_color());
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
var DEFAULT_ICON_END_MARGINS = { left: "1em" };
var DEFAULT_ICON_MARGINS = { right: "1em" };
var ListItem = (_a) => {
  var _b = _a, {
    children,
    color,
    icon,
    iconProps,
    iconEnd,
    iconEndMargins,
    iconMargins,
    onClick,
    text
  } = _b, props = __objRest(_b, [
    "children",
    "color",
    "icon",
    "iconProps",
    "iconEnd",
    "iconEndMargins",
    "iconMargins",
    "onClick",
    "text"
  ]);
  iconMargins = __spreadValues(__spreadValues({}, DEFAULT_ICON_MARGINS), iconMargins);
  iconEndMargins = __spreadValues(__spreadValues({}, DEFAULT_ICON_END_MARGINS), iconEndMargins);
  const { css, cx } = useClasses12({ color });
  return /* @__PURE__ */ jsx23(
    TooltipWrapper,
    {
      tooltip: children,
      tooltipProps: {
        arrow: false,
        bgColor: (0, import_color3.default)(colors.custom.black).fade(0.03).hex(),
        classes: { tooltip: css.tooltip },
        placement: "right-start",
        PopperProps: { className: css.tooltipPopper }
      },
      children: /* @__PURE__ */ jsxs15(
        MuiListItem,
        __spreadProps(__spreadValues({
          button: Boolean(onClick),
          onClick,
          className: cx(css.root, props.className)
        }, props), {
          children: [
            icon && /* @__PURE__ */ jsx23(ListItemIcon, { className: css.icon, children: /* @__PURE__ */ jsx23(Icon, __spreadProps(__spreadValues({}, iconProps), { name: icon, margins: iconMargins })) }),
            /* @__PURE__ */ jsx23(ListItemText, { className: css.text, children: text }),
            iconEnd && /* @__PURE__ */ jsx23(ListItemIcon, { className: css.icon, children: /* @__PURE__ */ jsx23(Icon, { name: iconEnd, margins: iconEndMargins }) })
          ]
        })
      )
    }
  );
};
var useClasses12 = makeClasses((props) => ({
  icon: {
    minWidth: 0
  },
  root: {
    padding: "0.1rem 0.8rem",
    "&:not(:last-child)": {
      borderBottom: `1px solid ${colors.custom.darkGrey}`
    }
  },
  text: {
    color: props.color
  },
  tooltip: {
    margin: 0,
    padding: 0
  },
  tooltipPopper: {
    marginLeft: "-0.75rem !important"
  }
}));

// trabecula/components/media/icon.tsx
import { Icon as MuiIcon } from "@mui/material";
import { jsx as jsx24 } from "react/jsx-runtime";
var Icon = (_a) => {
  var _b = _a, {
    className,
    color,
    margins,
    name,
    rotation,
    size: size2,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "className",
    "color",
    "margins",
    "name",
    "rotation",
    "size",
    "viewProps"
  ]);
  const { css, cx } = useClasses13({ rotation });
  return /* @__PURE__ */ jsx24(View, __spreadProps(__spreadValues({ column: true, className: cx(css.root, className), margins }, viewProps), { children: /* @__PURE__ */ jsx24(MuiIcon, __spreadProps(__spreadValues({}, props), { style: { color, fontSize: size2 }, children: Fmt.pascalToSnake(name) })) }));
};
var useClasses13 = makeClasses((props) => ({
  root: {
    justifyContent: "center",
    transform: props.rotation !== void 0 ? `rotate(${props.rotation}deg)` : void 0,
    transition: "all 200ms ease-in-out"
  }
}));

// trabecula/components/modals/confirm-modal.tsx
import { useState as useState6 } from "react";
import { jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";
var ConfirmModal = ({
  cancelColor = colors.custom.grey,
  cancelIcon = "Close",
  cancelText = "Cancel",
  children,
  confirmColor = colors.custom.red,
  confirmIcon = "Delete",
  confirmText = "Delete",
  headerText = "Confirm Delete",
  height = "25rem",
  onCancel,
  onConfirm,
  setVisible,
  subText,
  width = "25rem"
}) => {
  const [isLoading, setIsLoading] = useState6(false);
  const handleClose = () => setVisible(false);
  const handleCancel = () => {
    onCancel == null ? void 0 : onCancel();
    handleClose();
  };
  const handleConfirm = () => __async(null, null, function* () {
    setIsLoading(true);
    const success = yield onConfirm();
    setIsLoading(false);
    if (success) handleClose();
  });
  return /* @__PURE__ */ jsxs16(Modal.Container, { isLoading, onClose: handleCancel, height, width, children: [
    /* @__PURE__ */ jsx25(Modal.Header, { children: /* @__PURE__ */ jsx25(Text, { preset: "title", children: headerText }) }),
    /* @__PURE__ */ jsxs16(Modal.Content, { align: "center", justify: "center", children: [
      /* @__PURE__ */ jsx25(Icon, { name: "Delete", color: colors.custom.red, size: "5rem" }),
      (subText == null ? void 0 : subText.length) > 0 ? /* @__PURE__ */ jsx25(Text, { fontSize: "1.3em", textAlign: "center", children: subText }) : null,
      children
    ] }),
    /* @__PURE__ */ jsxs16(Modal.Footer, { children: [
      /* @__PURE__ */ jsx25(
        Button,
        {
          text: cancelText,
          icon: cancelIcon,
          color: cancelColor,
          onClick: handleCancel,
          disabled: isLoading
        }
      ),
      /* @__PURE__ */ jsx25(
        Button,
        {
          text: confirmText,
          icon: confirmIcon,
          color: confirmColor,
          onClick: handleConfirm,
          disabled: isLoading
        }
      )
    ] })
  ] });
};

// trabecula/components/modals/modal/container.tsx
import { useRef } from "react";
import Draggable from "react-draggable";
import { Dialog, Paper } from "@mui/material";
import { jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
var Container = (_a) => {
  var _b = _a, {
    children,
    className,
    closeOnBackdrop = true,
    draggable = false,
    height,
    isLoading,
    maxHeight,
    maxWidth = "none",
    onClose,
    scroll = "paper",
    visible = true,
    width
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "closeOnBackdrop",
    "draggable",
    "height",
    "isLoading",
    "maxHeight",
    "maxWidth",
    "onClose",
    "scroll",
    "visible",
    "width"
  ]);
  const { css, cx } = useClasses14({ height, maxHeight, maxWidth, width });
  const handleClose = (_, reason) => (reason === "backdropClick" ? closeOnBackdrop : true) && (onClose == null ? void 0 : onClose());
  return /* @__PURE__ */ jsxs17(
    Dialog,
    __spreadProps(__spreadValues(__spreadValues({}, props), { scroll }), {
      PaperComponent: draggable ? DraggablePaper : void 0,
      open: visible,
      onClose: handleClose,
      className: cx(css.modal, className),
      children: [
        /* @__PURE__ */ jsx26(LoadingOverlay, __spreadValues({}, { isLoading })),
        children
      ]
    })
  );
};
var DraggablePaper = (props) => {
  const { css, cx } = useDraggableClasses(null);
  const ref = useRef(null);
  return /* @__PURE__ */ jsx26(Draggable, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: /* @__PURE__ */ jsx26(Paper, __spreadProps(__spreadValues({}, props), { ref, className: cx(props.className, css.draggable) })) });
};
var useClasses14 = makeClasses((props) => ({
  modal: {
    "& .MuiDialog-paper": {
      position: "relative",
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      height: props.height,
      width: props.width,
      background: colors.background
    }
  }
}));
var useDraggableClasses = makeClasses({
  draggable: {
    cursor: "grab",
    "& .MuiDialogContent-root": {
      cursor: "initial"
    }
  }
});

// trabecula/components/modals/modal/content.tsx
import { DialogContent } from "@mui/material";
import { jsx as jsx27 } from "react/jsx-runtime";
var Content = (_a) => {
  var _b = _a, {
    children,
    className,
    dividers = true,
    overflow = "auto",
    padding,
    position = "relative"
  } = _b, viewProps = __objRest(_b, [
    "children",
    "className",
    "dividers",
    "overflow",
    "padding",
    "position"
  ]);
  const { css } = useClasses15(null);
  padding = __spreadValues({ all: `${dividers ? "0.5rem" : "0.2rem"} 1rem` }, padding);
  return /* @__PURE__ */ jsx27(DialogContent, __spreadProps(__spreadValues({}, { dividers }), { className: css.content, children: /* @__PURE__ */ jsx27(
    View,
    __spreadProps(__spreadValues(__spreadValues({
      column: true,
      flex: 1,
      spacing: "0.5rem",
      width: "100%",
      height: "100%"
    }, { className, overflow, padding, position }), viewProps), {
      children
    })
  ) }));
};
var useClasses15 = makeClasses({
  content: {
    display: "flex",
    padding: 0
  }
});

// trabecula/components/modals/modal/footer.tsx
import { DialogActions } from "@mui/material";
import { jsx as jsx28 } from "react/jsx-runtime";
var Footer = (_a) => {
  var _b = _a, { children, uniformWidth = "10rem" } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  return /* @__PURE__ */ jsx28(DialogActions, { children: /* @__PURE__ */ jsx28(
    UniformList,
    __spreadProps(__spreadValues(__spreadValues({
      row: true,
      justify: "center",
      spacing: "0.5rem",
      width: "100%"
    }, { uniformWidth }), props), {
      children
    })
  ) });
};

// trabecula/components/modals/modal/header.tsx
import { DialogTitle } from "@mui/material";
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode
}) => {
  const { css, cx } = useClasses16({ justify });
  return /* @__PURE__ */ jsx29(DialogTitle, { className: cx(css.root, className), children: /* @__PURE__ */ jsx29(
    ConditionalWrap,
    {
      condition: leftNode !== void 0 || rightNode !== void 0,
      wrap: (wrappedChildren) => /* @__PURE__ */ jsxs18(UniformList, { row: true, flex: 1, align: "center", children: [
        leftNode ? /* @__PURE__ */ jsx29(View, { row: true, align: "center", justify: "flex-start", children: leftNode }) : /* @__PURE__ */ jsx29(View, {}),
        wrappedChildren,
        rightNode ? /* @__PURE__ */ jsx29(View, { row: true, align: "center", justify: "flex-end", children: rightNode }) : /* @__PURE__ */ jsx29(View, {})
      ] }),
      children
    }
  ) });
};
var useClasses16 = makeClasses((props) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justify,
    alignItems: "center",
    padding: "0.5rem 1rem",
    textAlign: "center"
  }
}));

// trabecula/components/modals/modal/index.ts
var Modal = {
  Container,
  Content,
  Footer,
  Header
};

// trabecula/components/progress/bar.tsx
var import_color4 = __toESM(require_color());
import { LinearProgress } from "@mui/material";
import { jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var ProgressBar = Comp((props) => {
  var _a, _b, _c, _d;
  const minWidth = (props == null ? void 0 : props.minWidth) || "2em";
  const { css } = useClasses17(null);
  return /* @__PURE__ */ jsxs19(View, __spreadProps(__spreadValues({ row: true, flex: 1, align: "center", spacing: "1rem" }, props.viewProps), { children: [
    props.withText ? /* @__PURE__ */ jsxs19(View, { row: true, spacing: "0.5rem", children: [
      /* @__PURE__ */ jsx30(Text, { minWidth, textAlign: "center", children: props.numerator > -1 ? (_b = (_a = props.numeratorFormatter) == null ? void 0 : _a.call(props, props.numerator)) != null ? _b : props.numerator : "--" }),
      /* @__PURE__ */ jsx30(Text, { children: "/" }),
      /* @__PURE__ */ jsx30(Text, { minWidth, textAlign: "center", color: colors.custom.lightGrey, children: props.denominator > -1 ? (_d = (_c = props.denominatorFormatter) == null ? void 0 : _c.call(props, props.denominator)) != null ? _d : props.denominator : "--" })
    ] }) : null,
    /* @__PURE__ */ jsx30(
      LinearProgress,
      {
        variant: "determinate",
        value: (props.numerator || 0) / (props.denominator || 1) * 100,
        className: css.progressBar
      }
    )
  ] }));
});
var useClasses17 = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: (0, import_color4.default)(colors.custom.blue).fade(0.5).string(),
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue
    }
  }
});

// trabecula/components/progress/circle.tsx
var import_color5 = __toESM(require_color());
import { CircularProgress as CircularProgress2 } from "@mui/material";
import { jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
var ProgressCircle = Comp((props) => {
  const color = props.color || colors.custom.white;
  const { css } = useClasses18({
    bgColor: props.bgColor || (0, import_color5.default)(color).fade(0.5).hex(),
    color
  });
  return /* @__PURE__ */ jsxs20(View, { column: true, position: "relative", justify: "center", align: "center", children: [
    /* @__PURE__ */ jsx31(View, { column: true, position: "absolute", children: props.children }),
    /* @__PURE__ */ jsx31(
      CircularProgress2,
      {
        value: props.percent || 0,
        variant: "determinate",
        size: props.size,
        className: css.circle
      }
    ),
    /* @__PURE__ */ jsx31(View, { column: true, position: "absolute", children: /* @__PURE__ */ jsx31(
      CircularProgress2,
      {
        value: 100,
        variant: "determinate",
        size: props.size,
        className: css.bgCircle
      }
    ) })
  ] });
});
var useClasses18 = makeClasses((props) => ({
  bgCircle: {
    zIndex: 1,
    "& circle": { color: props.bgColor }
  },
  circle: {
    zIndex: 10,
    "& circle": { color: props.color }
  }
}));

// trabecula/components/table/pagination.tsx
import {
  Pagination as PaginationBase,
  PaginationItem
} from "@mui/material";
import { jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";
var Pagination = (_a) => {
  var _b = _a, {
    className,
    count,
    isLoading,
    onChange,
    onFullLoad,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "className",
    "count",
    "isLoading",
    "onChange",
    "onFullLoad",
    "viewProps"
  ]);
  const { css, cx } = useClasses19(null);
  const handleChange = (_, page) => onChange(page);
  const handleLastPageClick = (event, item) => {
    var _a2;
    if (onFullLoad) event.preventDefault(), onFullLoad();
    else (_a2 = item.onClick) == null ? void 0 : _a2.call(item, event);
  };
  return /* @__PURE__ */ jsx32(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.root, viewProps == null ? void 0 : viewProps.className), children: /* @__PURE__ */ jsxs21(View, { position: "relative", overflow: "hidden", children: [
    /* @__PURE__ */ jsx32(LoadingOverlay, { isLoading }),
    /* @__PURE__ */ jsx32(
      PaginationBase,
      __spreadValues({
        onChange: handleChange,
        showFirstButton: true,
        showLastButton: true,
        siblingCount: 4,
        boundaryCount: 2,
        count,
        className: cx(css.pagination, className),
        renderItem: (item) => /* @__PURE__ */ jsx32(
          PaginationItem,
          __spreadProps(__spreadValues({}, item), {
            onClick: item.type === "last" ? (e) => handleLastPageClick(e, item) : item.onClick
          })
        )
      }, props)
    )
  ] }) }));
};
var useClasses19 = makeClasses({
  pagination: {
    borderRadius: 0,
    borderTop: "0.2rem solid #1b58a7",
    margin: 0,
    padding: "0.2rem 0.5rem 0.2rem",
    width: "100%",
    backgroundColor: colors.background,
    "& .MuiPagination-ul": { flexWrap: "nowrap" },
    "& > ul": { justifyContent: "center" },
    "& li button": { borderRadius: "0.2rem" }
  },
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%"
  }
});

// trabecula/components/table/table.tsx
import { useMemo, useState as useState7 } from "react";
import {
  Paper as Paper2,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import { Fragment as Fragment3, jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
var MUI_TABLE_ROW_HEIGHT = 33;
var Table = ({
  className,
  columns,
  hasEmptyRows = false,
  hasPagination = false,
  rowCountOptions = [10, 25, 50],
  rows,
  paginationClassName
}) => {
  const { css, cx } = useClasses20(null);
  const [page, setPage] = useState7(0);
  const [rowsPerPage, setRowsPerPage] = useState7(rowCountOptions[0]);
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const displayedRows = useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, rows]
  );
  const emptyRows = rowsPerPage - displayedRows.length;
  return /* @__PURE__ */ jsxs22(Fragment3, { children: [
    /* @__PURE__ */ jsx33(TableContainer, { component: Paper2, className, children: /* @__PURE__ */ jsxs22(MuiTable, { size: "small", children: [
      /* @__PURE__ */ jsx33(TableHead, { children: /* @__PURE__ */ jsx33(TableRow, { className: css.tableHeader, children: columns.map((column, i) => /* @__PURE__ */ jsx33(TableCell, { className: css.tableHeaderCell, children: column.header }, `${i}-${column.header}`)) }) }),
      /* @__PURE__ */ jsxs22(TableBody, { children: [
        displayedRows.map((row, rowKey) => /* @__PURE__ */ jsx33(TableRow, { className: css.tableRowAlt, children: columns.map((column, cellKey) => /* @__PURE__ */ jsx33(
          TableCellTrunc,
          {
            value: column.valueFunc(row),
            wrap: column.wrap,
            className: column.className
          },
          `${rowKey}-${cellKey}`
        )) }, `displayed-${rowKey}`)),
        hasEmptyRows && emptyRows > 0 && /* @__PURE__ */ jsx33(
          TableRow,
          {
            className: css.tableRowAlt,
            style: { height: MUI_TABLE_ROW_HEIGHT * emptyRows },
            children: /* @__PURE__ */ jsx33(TableCell, { colSpan: columns.length })
          }
        )
      ] })
    ] }) }),
    hasPagination && /* @__PURE__ */ jsx33(
      TablePagination,
      {
        count: rows.length,
        page,
        onPageChange: (_, p) => setPage(p),
        labelRowsPerPage: "Row count :",
        rowsPerPage,
        rowsPerPageOptions: rowCountOptions,
        onRowsPerPageChange: handleRowsPerPageChange,
        className: cx(css.pagination, paginationClassName)
      }
    )
  ] });
};
var TableCellTrunc = ({ className, value, wrap = false }) => {
  const { css, cx } = useClasses20(null);
  return /* @__PURE__ */ jsx33(TableCell, { className: cx(css.tableCell, className), title: String(value), children: wrap ? /* @__PURE__ */ jsx33("span", { className: css.wrapped, children: value }) : value });
};
var useClasses20 = makeClasses({
  pagination: {
    borderBottom: "none",
    padding: 0
  },
  tableHeader: {
    backgroundColor: colors.custom.blue
  },
  tableHeaderCell: {
    color: colors.custom.white,
    fontWeight: 400,
    fontSize: "1em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  tableCell: {
    maxWidth: "10em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  tableRowAlt: {
    "&:nth-of-type(even) > td": { backgroundColor: colors.custom.grey },
    "&:nth-of-type(odd) > td": { backgroundColor: colors.foreground }
  },
  wrapped: {
    display: "-webkit-inline-box",
    overflow: "hidden",
    whiteSpace: "normal",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2
  }
});

// trabecula/components/text/centered-text.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
var CenteredText = (_a) => {
  var _b = _a, {
    color = colors.custom.lightGrey,
    text,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "color",
    "text",
    "viewProps"
  ]);
  return /* @__PURE__ */ jsx34(View, __spreadProps(__spreadValues({ row: true, justify: "center", align: "center", flex: 1 }, viewProps), { children: /* @__PURE__ */ jsx34(Text, __spreadProps(__spreadValues(__spreadValues({}, props), { color }), { children: text })) }));
};

// trabecula/components/text/date-detail.tsx
import { jsx as jsx35 } from "react/jsx-runtime";
var DateDetail = (props) => {
  var _a;
  return /* @__PURE__ */ jsx35(
    Detail,
    __spreadProps(__spreadValues({}, props), {
      value: ((_a = props.value) == null ? void 0 : _a.length) ? dayjs(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null
    })
  );
};

// trabecula/components/text/detail.tsx
import { jsx as jsx36, jsxs as jsxs23 } from "react/jsx-runtime";
var Detail = (_a) => {
  var _b = _a, {
    emptyValueText = "--",
    label,
    labelProps = {},
    overflowX = "auto",
    overflowY = "hidden",
    row = false,
    tooltip,
    value,
    valueProps,
    withTooltip
  } = _b, props = __objRest(_b, [
    "emptyValueText",
    "label",
    "labelProps",
    "overflowX",
    "overflowY",
    "row",
    "tooltip",
    "value",
    "valueProps",
    "withTooltip"
  ]);
  const { css, cx } = useClasses21({ overflowX, overflowY });
  return /* @__PURE__ */ jsxs23(View, __spreadProps(__spreadValues({ column: !row, row, spacing: row ? "0.5rem" : null }, props), { children: [
    typeof label === "string" ? /* @__PURE__ */ jsx36(Text, __spreadProps(__spreadValues({ preset: "detail-label" }, labelProps), { children: label })) : label,
    !value || typeof value === "string" ? /* @__PURE__ */ jsx36(
      Text,
      __spreadProps(__spreadValues({
        tooltip: tooltip != null ? tooltip : withTooltip ? value : void 0,
        className: cx(css.value, valueProps == null ? void 0 : valueProps.className)
      }, valueProps), {
        children: value || emptyValueText
      })
    ) : value
  ] }));
};
var useClasses21 = makeClasses((props) => ({
  value: {
    overflowX: props.overflowX,
    overflowY: props.overflowY,
    whiteSpace: "nowrap"
  }
}));

// trabecula/components/text/text.tsx
import { Typography } from "@mui/material";
import { jsx as jsx37 } from "react/jsx-runtime";
var PRESETS = {
  default: {
    fontSize: "1em",
    fontWeight: 400,
    overflow: "hidden"
  },
  "detail-label": {
    color: colors.custom.lightBlue,
    fontWeight: 500,
    whiteSpace: "nowrap"
  },
  "label-glow": {
    color: colors.custom.white,
    fontSize: "0.8em",
    textAlign: "center",
    textShadow: `0 0 10px ${colors.custom.blue}`,
    overflow: "visible"
  },
  "sub-text": {
    color: colors.custom.grey,
    fontSize: "0.7em",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  title: {
    color: colors.custom.white,
    fontSize: "1.1em",
    fontWeight: 500,
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
};
var Text = (_a) => {
  var _b = _a, {
    children,
    className,
    color,
    component = "span",
    fontSize,
    fontWeight,
    overflow,
    preset = "default",
    tooltip,
    tooltipProps
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "fontWeight",
    "overflow",
    "preset",
    "tooltip",
    "tooltipProps"
  ]);
  const { css, cx } = useClasses22({ color, fontSize, fontWeight, overflow, preset });
  return /* @__PURE__ */ jsx37(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ jsx37(Typography, __spreadProps(__spreadValues(__spreadValues({}, { component }), props), { className: cx(css.root, className), children })) }));
};
var useClasses22 = makeClasses((props) => {
  var _a, _b, _c, _d;
  const preset = PRESETS[props.preset];
  return {
    root: __spreadProps(__spreadValues({}, preset), {
      color: (_a = props.color) != null ? _a : preset == null ? void 0 : preset.color,
      fontSize: (_b = props.fontSize) != null ? _b : preset == null ? void 0 : preset.fontSize,
      fontWeight: (_c = props.fontWeight) != null ? _c : preset == null ? void 0 : preset.fontWeight,
      overflow: (_d = props.overflow) != null ? _d : preset == null ? void 0 : preset.overflow
    })
  };
});

// trabecula/components/toggles/accordion.tsx
import { useState as useState8 } from "react";
import { Accordion as MuiAccordion } from "@mui/material";
import { jsx as jsx38, jsxs as jsxs24 } from "react/jsx-runtime";
var Accordion = ({
  children,
  className,
  color = "transparent",
  dense = false,
  expanded = false,
  fullWidth = false,
  header,
  setExpanded
}) => {
  const [isExpanded, setIsExpanded] = useState8(expanded);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setExpanded == null ? void 0 : setExpanded(!isExpanded);
  };
  const { css, cx } = useClasses23({ dense, expanded: isExpanded, fullWidth });
  return /* @__PURE__ */ jsxs24(
    MuiAccordion,
    {
      expanded: isExpanded,
      disableGutters: true,
      TransitionProps: { unmountOnExit: true },
      className: cx(css.accordion, className),
      children: [
        /* @__PURE__ */ jsx38(
          Button,
          {
            onClick: handleClick,
            endNode: /* @__PURE__ */ jsx38(Icon, { name: "ExpandMore", rotation: expanded ? 180 : 0 }),
            color,
            width: "100%",
            className: css.button,
            children: header
          }
        ),
        /* @__PURE__ */ jsx38(View, { column: true, children })
      ]
    }
  );
};
var useClasses23 = makeClasses((props) => ({
  accordion: {
    margin: 0,
    padding: 0,
    width: props.fullWidth ? "100%" : "auto",
    background: "transparent",
    boxShadow: "none",
    "& button": {
      boxShadow: "none"
    },
    "&:before": {
      display: "none"
    }
  },
  button: {
    justifyContent: "space-between",
    borderBottomRightRadius: props.expanded ? 0 : void 0,
    borderBottomLeftRadius: props.expanded ? 0 : void 0,
    padding: props.dense ? "0.2rem 0.6rem" : "0.5rem 1rem",
    fontSize: "1em",
    textTransform: "capitalize"
  }
}));

// trabecula/components/toggles/checkbox.tsx
var import_color6 = __toESM(require_color());
import { Checkbox as MuiCheckbox, FormControlLabel as FormControlLabel2 } from "@mui/material";
import { jsx as jsx39 } from "react/jsx-runtime";
var Checkbox = ({
  center,
  checked,
  className,
  color = colors.custom.blue,
  disabled,
  flex = 1,
  indeterminate,
  indeterminateColor,
  label,
  margins = { left: 0, right: 0 },
  padding = { all: "0.3rem" },
  setChecked,
  width = "100%"
}) => {
  const { css, cx } = useClasses24({
    center,
    color: indeterminate ? indeterminateColor : color,
    disabled,
    flex,
    margins,
    padding,
    width
  });
  const toggleChecked = () => !disabled && setChecked(!checked);
  return /* @__PURE__ */ jsx39(
    FormControlLabel2,
    __spreadProps(__spreadValues({}, { disabled, label }), {
      control: /* @__PURE__ */ jsx39(
        MuiCheckbox,
        __spreadProps(__spreadValues({}, { checked, disabled, indeterminate }), {
          onClick: toggleChecked,
          className: css.checkbox
        })
      ),
      className: cx(css.label, className)
    })
  );
};
var useClasses24 = makeClasses((props) => ({
  checkbox: __spreadProps(__spreadValues({}, makePadding(props.padding)), {
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1
  }),
  label: __spreadProps(__spreadValues({
    display: "flex",
    flex: props.flex,
    justifyContent: props.center ? "center" : void 0,
    borderRadius: "0.5rem"
  }, makeMargins(props.margins)), {
    width: props.width || "auto",
    whiteSpace: "nowrap",
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: (0, import_color6.default)(props.color).fade(0.8).string()
    },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4em"
    }
  })
}));

// trabecula/components/tooltip/tooltip.tsx
var import_color7 = __toESM(require_color());
import { Tooltip as MuiTooltip } from "@mui/material";
import { jsx as jsx40 } from "react/jsx-runtime";
var Tooltip = (_a) => {
  var _b = _a, {
    arrow = true,
    bgColor = colors.background,
    borderColor = colors.custom.blue,
    children,
    color,
    flexShrink = 0,
    fontSize = "0.95em",
    minWidth,
    maxWidth = "25rem",
    padding = "0.4rem 0.8rem",
    placement = "bottom-start",
    title,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "arrow",
    "bgColor",
    "borderColor",
    "children",
    "color",
    "flexShrink",
    "fontSize",
    "minWidth",
    "maxWidth",
    "padding",
    "placement",
    "title",
    "viewProps"
  ]);
  const { css } = useClasses25({
    borderColor,
    bgColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding
  });
  return /* @__PURE__ */ jsx40(
    MuiTooltip,
    __spreadProps(__spreadValues(__spreadValues({}, props), { arrow, placement, title }), {
      classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip },
      children: /* @__PURE__ */ jsx40(
        View,
        __spreadProps(__spreadValues({}, viewProps), {
          onMouseEnter: props.onMouseEnter,
          onMouseLeave: props.onMouseLeave,
          className: css.container,
          children
        })
      )
    })
  );
};
var useClasses25 = makeClasses((props) => ({
  arrow: {
    color: props.borderColor
  },
  container: {
    display: "flex",
    flexShrink: props.flexShrink,
    overflow: "hidden",
    textOverflow: "ellipsis",
    userSelect: "auto"
  },
  tooltip: {
    border: `3px solid ${props.borderColor}`,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    padding: props.padding,
    backgroundColor: (0, import_color7.default)(props.bgColor).fade(0.03).string(),
    color: props.color,
    fontSize: props.fontSize,
    whiteSpace: "pre-wrap",
    boxShadow: "rgb(0 0 0 / 97%) 0px 0px 2px 0px"
  },
  popper: {
    zIndex: 1e6
  }
}));

// trabecula/components/tooltip/tooltip-wrapper.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
var TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
  const wrap = (c) => /* @__PURE__ */ jsx41(Tooltip, __spreadProps(__spreadValues({ title: tooltip }, tooltipProps), { children: c }));
  return /* @__PURE__ */ jsx41(
    ConditionalWrap,
    {
      wrap,
      condition: tooltip !== void 0 && !(typeof tooltip === "string" && !(tooltip == null ? void 0 : tooltip.length)),
      children
    }
  );
};

// trabecula/components/wrappers/card.tsx
import { jsx as jsx42 } from "react/jsx-runtime";
var Card = Comp(
  (_a, ref) => {
    var _b = _a, {
      bgColor = colors.foreground,
      borderRadiuses = {},
      children,
      column = true,
      display = "flex",
      header,
      height,
      headerProps,
      overflow,
      padding = {},
      row = false,
      spacing,
      width
    } = _b, viewProps = __objRest(_b, [
      "bgColor",
      "borderRadiuses",
      "children",
      "column",
      "display",
      "header",
      "height",
      "headerProps",
      "overflow",
      "padding",
      "row",
      "spacing",
      "width"
    ]);
    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    padding = deepMerge({ all: "0.5rem" }, padding);
    return /* @__PURE__ */ jsx42(
      HeaderWrapper,
      __spreadProps(__spreadValues(__spreadValues({}, viewProps), { borderRadiuses, display, header, headerProps, height, overflow, width }), {
        children: /* @__PURE__ */ jsx42(
          View,
          __spreadProps(__spreadValues(__spreadValues({
            position: "relative",
            column: column && !row,
            flex: 1
          }, { bgColor, borderRadiuses, height, overflow, padding, ref, row, spacing, width }), viewProps), {
            "aria-label": "card",
            children
          })
        )
      })
    );
  }
);

// trabecula/components/wrappers/card-base/chip.tsx
import { jsx as jsx43 } from "react/jsx-runtime";
var Chip2 = (_a) => {
  var _b = _a, {
    bgColor = colors.background,
    hasFooter,
    flush = false,
    opacity = 0.6,
    position
  } = _b, props = __objRest(_b, [
    "bgColor",
    "hasFooter",
    "flush",
    "opacity",
    "position"
  ]);
  const { css } = useClasses26({ hasFooter, flush, opacity, position });
  return /* @__PURE__ */ jsx43(Chip, __spreadProps(__spreadValues(__spreadValues({}, props), { bgColor }), { className: css.chip }));
};
var useClasses26 = makeClasses((props) => ({
  chip: {
    position: "absolute",
    top: props.position.includes("top") ? props.flush ? 0 : "0.3rem" : void 0,
    right: props.position.includes("right") ? props.flush ? 0 : "0.3rem" : void 0,
    bottom: props.position.includes("bottom") ? props.hasFooter ? "2rem" : props.flush ? 0 : "0.3rem" : void 0,
    left: props.position.includes("left") ? props.flush ? 0 : "0.3rem" : void 0,
    cursor: "pointer",
    opacity: props.opacity,
    "&:hover": { opacity: Math.min(1, props.opacity + 0.3) }
  }
}));

// trabecula/components/wrappers/card-base/container.tsx
var import_color8 = __toESM(require_color());
import { Paper as Paper3 } from "@mui/material";
import { jsx as jsx44 } from "react/jsx-runtime";
var Container2 = (_a) => {
  var _b = _a, {
    children,
    className,
    disabled,
    display = "block",
    height,
    onClick,
    onDoubleClick,
    selected,
    selectedColor = colors.custom.blue,
    width
  } = _b, viewProps = __objRest(_b, [
    "children",
    "className",
    "disabled",
    "display",
    "height",
    "onClick",
    "onDoubleClick",
    "selected",
    "selectedColor",
    "width"
  ]);
  const { css, cx } = useClasses27({ disabled, display, height, selected, selectedColor, width });
  return /* @__PURE__ */ jsx44(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.container, className), children: /* @__PURE__ */ jsx44(
    Paper3,
    {
      onClick: !disabled ? onClick : void 0,
      onDoubleClick: !disabled ? onDoubleClick : void 0,
      elevation: 3,
      className: css.paper,
      children
    }
  ) }));
};
var useClasses27 = makeClasses((props, theme) => {
  var _a;
  return {
    container: __spreadProps(__spreadValues({
      position: "relative",
      display: props.display,
      border: `2px solid ${colors.background}`,
      borderRadius: 4,
      padding: "0.25rem",
      height: (_a = props.height) != null ? _a : "20rem",
      [theme.breakpoints.down("xl")]: props.height ? void 0 : { height: "18rem" },
      [theme.breakpoints.down("lg")]: props.height ? void 0 : { height: "16rem" },
      [theme.breakpoints.down("md")]: props.height ? void 0 : { height: "14rem" },
      [theme.breakpoints.down("sm")]: props.height ? void 0 : { height: "12rem" }
    }, props.width ? { width: props.width } : {}), {
      background: !props.disabled && props.selected ? `linear-gradient(to bottom right, ${(0, import_color8.default)(props.selectedColor).lighten(0.4).string()}, ${props.selectedColor} 60%)` : "transparent",
      overflow: "hidden",
      cursor: "pointer",
      userSelect: "none"
    }),
    paper: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      height: "100%",
      backgroundColor: colors.background,
      userSelect: "none"
    }
  };
});

// trabecula/components/wrappers/card-base/footer.tsx
import { jsx as jsx45 } from "react/jsx-runtime";
var Footer2 = ({ children }) => {
  const { css } = useClasses28(null);
  return /* @__PURE__ */ jsx45(View, { className: css.footer, children });
};
var useClasses28 = makeClasses({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit",
    padding: 0,
    height: "3rem",
    background: "linear-gradient(to bottom, transparent, black)"
  }
});

// trabecula/components/wrappers/card-base/footer-text.tsx
import { jsx as jsx46 } from "react/jsx-runtime";
var FooterText = (props) => {
  var _a;
  const { css } = useClasses29(null);
  return ((_a = props.text) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx46(Text, { className: css.title, children: props.text });
};
var useClasses29 = makeClasses({
  title: {
    padding: "0 0.4rem 0.2rem",
    width: "100%",
    fontSize: "0.9em",
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
});

// trabecula/components/wrappers/card-base/image.tsx
import {
  useEffect as useEffect3,
  useRef as useRef2,
  useState as useState9
} from "react";
import { jsx as jsx47, jsxs as jsxs25 } from "react/jsx-runtime";
var Image = ({
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
  title
}) => {
  const thumbInterval = useRef2(null);
  const [hasError, setHasError] = useState9(false);
  const [imagePos, setImagePos] = useState9(null);
  const [thumbIndex, setThumbIndex] = useState9(0);
  const { css, cx } = useClasses30({ fit, height, imagePos, rounded });
  const hasListeners = !disabled && !autoAnimate && (thumbPaths == null ? void 0 : thumbPaths.length) > 1;
  const createThumbInterval = () => {
    thumbInterval.current = setInterval(() => {
      setHasError(false);
      setThumbIndex((thumbIndex2) => thumbIndex2 + 1 === (thumbPaths == null ? void 0 : thumbPaths.length) ? 0 : thumbIndex2 + 1);
    }, 300);
  };
  useEffect3(() => {
    if (!autoAnimate) return;
    createThumbInterval();
    return () => clearInterval(thumbInterval.current);
  }, []);
  const handleError = () => {
    setHasError(true);
  };
  const handleMouseEnter = () => {
    clearInterval(thumbInterval.current);
    createThumbInterval();
  };
  const handleMouseLeave = () => {
    clearInterval(thumbInterval.current);
    thumbInterval.current = null;
    setThumbIndex(0);
    setImagePos(null);
    setHasError(false);
  };
  const handleMouseMove = (event) => {
    const { height: height2, left, top, width } = event.currentTarget.getBoundingClientRect();
    const offsetX = event.pageX - left;
    const offsetY = event.pageY - top;
    const pos = `${Math.max(0, offsetX) / width * 100}% ${Math.max(0, offsetY) / height2 * 100}%`;
    setImagePos(pos);
  };
  return /* @__PURE__ */ jsxs25(
    View,
    {
      onMouseEnter: hasListeners ? handleMouseEnter : void 0,
      onMouseLeave: hasListeners ? handleMouseLeave : void 0,
      className: cx(css.imageContainer, className),
      children: [
        hasError ? /* @__PURE__ */ jsx47(View, { className: css.image, children: /* @__PURE__ */ jsx47(
          Icon,
          {
            name: "ImageNotSupported",
            size: "4rem",
            color: colors.custom.grey,
            viewProps: { align: "center", height: "100%" }
          }
        ) }) : (thumbPaths == null ? void 0 : thumbPaths.length) > 0 ? /* @__PURE__ */ jsx47(
          "img",
          __spreadProps(__spreadValues({}, { draggable, loading, onDragEnd, onDragStart }), {
            src: thumbPaths[thumbIndex],
            alt: title,
            onError: handleError,
            onMouseMove: fit === "cover" ? handleMouseMove : void 0,
            onMouseLeave: fit === "cover" ? handleMouseLeave : void 0,
            className: css.image
          })
        ) : /* @__PURE__ */ jsx47(View, { className: css.image }),
        children
      ]
    }
  );
};
var useClasses30 = makeClasses((props) => {
  var _a;
  return {
    image: __spreadProps(__spreadValues(__spreadValues({}, ["all", "top"].includes(props.rounded) && {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }), ["all", "bottom"].includes(props.rounded) && {
      borderBottomLeftRadius: "inherit",
      borderBottomRightRadius: "inherit"
    }), {
      height: (_a = props.height) != null ? _a : "inherit",
      width: "100%",
      userSelect: "none",
      transition: "all 100ms ease",
      objectFit: props.fit,
      objectPosition: props.imagePos
    }),
    imageContainer: __spreadProps(__spreadValues(__spreadValues({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: "inherit",
      height: "100%"
    }, ["all", "top"].includes(props.rounded) && {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }), ["all", "bottom"].includes(props.rounded) && {
      borderBottomLeftRadius: "inherit",
      borderBottomRightRadius: "inherit"
    }), {
      backgroundColor: "inherit",
      overflow: "hidden"
    })
  };
});

// trabecula/components/wrappers/card-base/tooltip.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
var Tooltip2 = ({ children, tooltip }) => {
  return /* @__PURE__ */ jsx48(
    Tooltip,
    {
      enterDelay: 700,
      enterNextDelay: 300,
      minWidth: "15rem",
      title: /* @__PURE__ */ jsx48(View, { column: true, padding: { all: "0.3rem" }, spacing: "0.5rem", children: tooltip }),
      children: /* @__PURE__ */ jsx48(View, { column: true, width: "100%", children })
    }
  );
};

// trabecula/components/wrappers/card-base/index.ts
var CardBase = {
  Chip: Chip2,
  Container: Container2,
  Footer: Footer2,
  FooterText,
  Image,
  Tooltip: Tooltip2
};

// trabecula/components/wrappers/card-grid.tsx
import { jsx as jsx49, jsxs as jsxs26 } from "react/jsx-runtime";
var CardGrid = Comp(
  (_a, ref) => {
    var _b = _a, {
      cards,
      cardsProps,
      children,
      className,
      flexFlow = "row wrap",
      maxCards = 6,
      noResultsText = "No results found",
      padding = { all: "0.3rem 0.3rem 7rem" },
      position = "relative"
    } = _b, props = __objRest(_b, [
      "cards",
      "cardsProps",
      "children",
      "className",
      "flexFlow",
      "maxCards",
      "noResultsText",
      "padding",
      "position"
    ]);
    const { css, cx } = useClasses31({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return /* @__PURE__ */ jsxs26(View, __spreadProps(__spreadValues({}, props), { className: cx(css.root, className), children: [
      cards.length ? /* @__PURE__ */ jsx49(
        View,
        __spreadProps(__spreadValues(__spreadValues({}, cardsProps), { padding, ref }), {
          className: cx(css.cards, cardsProps == null ? void 0 : cardsProps.className),
          children: cards
        })
      ) : /* @__PURE__ */ jsx49(View, { column: true, flex: 1, children: /* @__PURE__ */ jsx49(CenteredText, { text: noResultsText }) }),
      children
    ] }));
  }
);
var useClasses31 = makeClasses((props, theme) => ({
  cards: __spreadProps(__spreadValues({
    display: "flex",
    flexFlow: props.flexFlow,
    flex: "initial",
    overflowY: "auto"
  }, !props.hasCards ? { height: "-webkit-fill-available" } : {}), {
    "& > *": {
      overflow: "hidden",
      flexBasis: `calc(100% / ${props.maxCards})`,
      [theme.breakpoints.down("xl")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 1)})`
      },
      [theme.breakpoints.down("lg")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 2)})`
      },
      [theme.breakpoints.down("md")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 3)})`
      },
      [theme.breakpoints.down("sm")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 4)})`
      }
    }
  }),
  root: {
    position: props.position,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflowY: "auto"
  }
}));

// trabecula/components/wrappers/chip.tsx
import { Chip as MuiChip } from "@mui/material";
import { jsx as jsx50 } from "react/jsx-runtime";
var Chip = (_a) => {
  var _b = _a, {
    bgColor,
    className,
    color,
    height,
    icon,
    iconColor,
    iconProps,
    label,
    padding,
    radiuses,
    width
  } = _b, props = __objRest(_b, [
    "bgColor",
    "className",
    "color",
    "height",
    "icon",
    "iconColor",
    "iconProps",
    "label",
    "padding",
    "radiuses",
    "width"
  ]);
  const { css, cx } = useClasses32({ bgColor, color, height, padding, radiuses, width });
  return /* @__PURE__ */ jsx50(
    MuiChip,
    __spreadProps(__spreadValues(__spreadValues({}, props), { label }), {
      icon: icon ? /* @__PURE__ */ jsx50(
        Icon,
        __spreadValues({
          name: icon,
          color: iconColor,
          size: "inherit",
          margins: { left: "0.5rem !important" }
        }, iconProps)
      ) : void 0,
      className: cx(css.chip, className)
    })
  );
};
var useClasses32 = makeClasses((props) => ({
  chip: __spreadProps(__spreadValues({}, makeBorderRadiuses(props.radiuses)), {
    height: props.height,
    backgroundColor: props.bgColor,
    color: props.color,
    transition: "all 200ms ease-in-out",
    width: props.width,
    "& > .MuiChip-label": __spreadValues({}, makePadding(props.padding))
  })
}));

// trabecula/components/wrappers/conditional.tsx
import { Fragment as Fragment4, jsx as jsx51 } from "react/jsx-runtime";
var ConditionalWrap = ({
  condition,
  wrap,
  children
}) => condition ? wrap(children) : /* @__PURE__ */ jsx51(Fragment4, { children });

// trabecula/components/wrappers/context-menu.tsx
var import_color9 = __toESM(require_color());
import { useState as useState10 } from "react";
import { Menu as Menu2 } from "@mui/material";
import { jsx as jsx52, jsxs as jsxs27 } from "react/jsx-runtime";
var ContextMenu = (_a) => {
  var _b = _a, { children, disabled, id, menuItems } = _b, props = __objRest(_b, ["children", "disabled", "id", "menuItems"]);
  const { css } = useClasses33(null);
  const [mouseX, setMouseX] = useState10(null);
  const [mouseY, setMouseY] = useState10(null);
  const handleContext = (event) => {
    event.preventDefault();
    if (disabled) return;
    setMouseX(event.clientX - 2);
    setMouseY(event.clientY - 4);
  };
  const handleClose = () => {
    setMouseX(null);
    setMouseY(null);
  };
  return /* @__PURE__ */ jsxs27(View, __spreadProps(__spreadValues({}, props), { id, onContextMenu: handleContext, children: [
    children,
    /* @__PURE__ */ jsx52(
      Menu2,
      {
        open: mouseY !== null,
        onClose: handleClose,
        anchorReference: "anchorPosition",
        anchorPosition: mouseX !== null && mouseY !== null ? { top: mouseY, left: mouseX } : void 0,
        PopoverClasses: { paper: css.contextMenu },
        MenuListProps: { className: css.contextMenuInner },
        children: menuItems.filter(Boolean).map((item) => [
          item.divider === "top" ? /* @__PURE__ */ jsx52(Divider, {}) : null,
          /* @__PURE__ */ jsx52(Item, { item, onClose: handleClose }),
          item.divider === "bottom" ? /* @__PURE__ */ jsx52(Divider, {}) : null
        ])
      }
    )
  ] }));
};
var Item = ({
  item,
  onClose
}) => {
  var _a, _b, _c;
  const { css } = useClasses33(null);
  const color = item.color || colors.custom.lightGrey;
  const handleClick = item.onClick ? () => {
    item.onClick();
    onClose();
  } : void 0;
  return /* @__PURE__ */ jsx52(
    ListItem,
    {
      text: item.label,
      icon: item.icon,
      iconProps: __spreadValues({ color }, (_a = item.iconProps) != null ? _a : {}),
      color,
      iconEnd: ((_b = item.subItems) == null ? void 0 : _b.length) ? "ChevronRight" : null,
      onClick: handleClick,
      className: css.item,
      children: ((_c = item.subItems) == null ? void 0 : _c.length) ? /* @__PURE__ */ jsx52(View, { column: true, children: item.subItems.map((subItem) => /* @__PURE__ */ jsx52(SubItem, __spreadValues({}, { subItem, onClose }), subItem.label)) }) : null
    },
    item.label
  );
};
var SubItem = ({
  onClose,
  subItem
}) => {
  const handleClick = () => {
    subItem.onClick();
    onClose();
  };
  return /* @__PURE__ */ jsx52(ListItem, { text: subItem.label, icon: subItem.icon, onClick: handleClick });
};
var useClasses33 = makeClasses({
  contextMenu: {
    background: (0, import_color9.default)(colors.custom.black).fade(0.03).string()
  },
  contextMenuInner: {
    padding: 0
  },
  item: {
    padding: "0.35rem 1rem 0.35rem 0.7rem"
  }
});

// trabecula/components/wrappers/divider.tsx
import { Divider as DividerBase } from "@mui/material";
import { jsx as jsx53 } from "react/jsx-runtime";
var Divider = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx53(DividerBase, __spreadValues({ flexItem: true }, props));
};

// trabecula/components/wrappers/header.tsx
import { jsx as jsx54, jsxs as jsxs28 } from "react/jsx-runtime";
var DEFAULT_HEADER_PROPS2 = {
  bgColor: colors.custom.black,
  borderRadiuses: { top: "0.5rem" },
  fontSize: "0.8em",
  justify: "center",
  padding: { all: "0.15rem 0.3rem" },
  row: true
};
var HeaderWrapper = (_a) => {
  var _b = _a, {
    children,
    display,
    header,
    height = "auto",
    headerProps = {},
    position = "relative",
    row,
    spacing
  } = _b, viewProps = __objRest(_b, [
    "children",
    "display",
    "header",
    "height",
    "headerProps",
    "position",
    "row",
    "spacing"
  ]);
  headerProps = deepMerge(DEFAULT_HEADER_PROPS2, headerProps);
  const wrap = (c) => /* @__PURE__ */ jsxs28(View, __spreadProps(__spreadValues({}, viewProps), { column: true, height, "aria-label": "header-wrapper", children: [
    /* @__PURE__ */ jsx54(View, __spreadProps(__spreadValues({}, headerProps), { "aria-label": "header", children: typeof header === "string" ? /* @__PURE__ */ jsx54(Text, { flex: 1, fontSize: headerProps.fontSize, textAlign: "center", children: header }) : header })),
    c
  ] }));
  return /* @__PURE__ */ jsx54(ConditionalWrap, { condition: !!header, wrap, children: /* @__PURE__ */ jsx54(
    View,
    __spreadProps(__spreadValues(__spreadValues({
      overflow: "auto"
    }, viewProps), { display, height, position, row, spacing }), {
      "aria-label": "header-wrapper-content",
      children
    })
  ) });
};

// trabecula/components/wrappers/loading-overlay.tsx
import { CircularProgress as CircularProgress3 } from "@mui/material";
import { Fragment as Fragment5, jsx as jsx55, jsxs as jsxs29 } from "react/jsx-runtime";
var LoadingOverlay = ({ children, isLoading, sub }) => {
  const { css } = useClasses34({ isLoading });
  return /* @__PURE__ */ jsxs29(Fragment5, { children: [
    children,
    /* @__PURE__ */ jsxs29(
      View,
      {
        column: true,
        align: "center",
        justify: "center",
        spacing: "1rem",
        height: "100%",
        width: "100%",
        opacity: isLoading ? 1 : 0,
        className: css.loadingOverlay,
        children: [
          /* @__PURE__ */ jsx55(CircularProgress3, { color: "inherit" }),
          typeof sub === "string" ? /* @__PURE__ */ jsx55(Text, { preset: "title", fontSize: "0.9em", children: sub }) : sub
        ]
      }
    )
  ] });
};
var useClasses34 = makeClasses((props) => ({
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
    transition: "all 225ms ease-in-out",
    pointerEvents: props.isLoading ? "auto" : "none"
  }
}));

// trabecula/components/wrappers/side-scroller.tsx
import { useEffect as useEffect4, useRef as useRef3, useState as useState11 } from "react";
import { jsx as jsx56, jsxs as jsxs30 } from "react/jsx-runtime";
var SideScroller = ({ children, className, innerClassName }) => {
  const ref = useRef3(null);
  const { width } = useElementResize(ref);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState11(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState11(false);
  const [scrollPos, setScrollPos] = useState11(0);
  const { css, cx } = useClasses35({ isLeftButtonVisible, isRightButtonVisible });
  const getButtonVisibility = () => {
    if (!ref.current) return [false, false];
    const { clientWidth, scrollWidth, scrollLeft } = ref.current;
    if (!(clientWidth < scrollWidth)) return [false, false];
    return [scrollLeft > 0, clientWidth + scrollLeft < scrollWidth - 5];
  };
  const handleScroll = (direction) => {
    if (!ref.current) return false;
    const maxLeft = ref.current.clientWidth;
    const scrollAmount = (direction === "left" ? -1 : 1) * width / 2;
    const newScrollPos = direction === "left" ? Math.max(ref.current.scrollLeft - width / 2, 0) : Math.min(ref.current.scrollLeft + width / 2, maxLeft);
    ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPos(newScrollPos);
  };
  useEffect4(() => {
    const node = ref.current;
    const scrollListener = debounce(setScrollPos.bind(node.scrollLeft), 50);
    node.addEventListener("scroll", scrollListener);
    return () => node.removeEventListener("scroll", scrollListener);
  }, []);
  useEffect4(() => {
    const [left, right] = getButtonVisibility();
    setIsLeftButtonVisible(left);
    setIsRightButtonVisible(right);
  }, [scrollPos]);
  return /* @__PURE__ */ jsxs30(View, { className: cx(css.root, className), children: [
    /* @__PURE__ */ jsx56(
      IconButton,
      {
        name: "ChevronLeft",
        onClick: () => handleScroll("left"),
        className: cx(css.scrollButton, "left"),
        size: "large"
      }
    ),
    /* @__PURE__ */ jsx56(View, { ref, className: cx(css.items, innerClassName), children }),
    /* @__PURE__ */ jsx56(
      IconButton,
      {
        name: "ChevronRight",
        onClick: () => handleScroll("right"),
        className: cx(css.scrollButton, "right"),
        size: "large"
      }
    )
  ] });
};
var useClasses35 = makeClasses((props) => ({
  items: {
    display: "flex",
    flexFlow: "row nowrap",
    flex: 1,
    overflowX: "auto",
    overflowY: "hidden",
    "& > *:last-child": {
      marginRight: "1rem"
    },
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    minWidth: 0,
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  scrollButton: {
    margin: "0 0.2rem",
    width: "1rem",
    height: "1rem",
    backgroundColor: colors.custom.blue,
    "&:hover": {
      backgroundColor: colors.custom.blue
    },
    "& svg": {
      width: "0.6em",
      height: "0.6em"
    },
    "&.left": {
      display: props.isLeftButtonVisible ? "flex" : "none"
    },
    "&.right": {
      display: props.isRightButtonVisible ? "flex" : "none"
    }
  }
}));

// trabecula/components/wrappers/uniform-list.tsx
import { jsx as jsx57 } from "react/jsx-runtime";
var UniformList = (_a) => {
  var _b = _a, { children, uniformWidth } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  const { css, cx } = useClasses36({ uniformWidth });
  return /* @__PURE__ */ jsx57(View, __spreadProps(__spreadValues({}, props), { className: cx(css.uniform, props == null ? void 0 : props.className), children }));
};
var useClasses36 = makeClasses((props) => ({
  uniform: {
    "& > *": {
      flexBasis: "100%",
      maxWidth: props.uniformWidth
    }
  }
}));

// trabecula/components/wrappers/view.tsx
import { jsx as jsx58 } from "react/jsx-runtime";
var View = Comp(
  (_a, ref) => {
    var _b = _a, {
      align,
      bgColor,
      borders,
      borderRadiuses,
      children,
      className,
      column,
      display,
      flex,
      height,
      justify,
      margins,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap
    } = _b, props = __objRest(_b, [
      "align",
      "bgColor",
      "borders",
      "borderRadiuses",
      "children",
      "className",
      "column",
      "display",
      "flex",
      "height",
      "justify",
      "margins",
      "opacity",
      "overflow",
      "padding",
      "position",
      "row",
      "spacing",
      "width",
      "wrap"
    ]);
    if (row) column = false;
    const { css, cx } = useClasses37({
      align,
      bgColor,
      borders,
      borderRadiuses,
      column,
      display,
      flex,
      height,
      justify,
      margins,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap
    });
    return /* @__PURE__ */ jsx58("div", __spreadProps(__spreadValues({}, props), { ref, className: cx(className, css.view), children }));
  }
);
var useClasses37 = makeClasses((props) => {
  var _a;
  return {
    view: __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
      position: props.position,
      display: (_a = props.display) != null ? _a : props.column || props.row ? "flex" : void 0,
      flexDirection: props.column ? "column" : props.row ? "row" : void 0,
      flex: props.flex,
      flexWrap: props.wrap,
      alignItems: props.align,
      justifyContent: props.justify
    }, makeBorders(props.borders)), makeBorderRadiuses(props.borderRadiuses)), makeMargins(props.margins)), makePadding(props.padding)), {
      height: props.height,
      width: props.width,
      backgroundColor: props.bgColor,
      opacity: props.opacity,
      overflow: props.overflow
    }), props.spacing ? {
      "& > *:not(:last-child)": {
        [props.column ? "marginBottom" : "marginRight"]: props.spacing
      }
    } : {})
  };
});
export {
  Accordion,
  Button,
  ButtonWithInset,
  Card,
  CardBase,
  CardGrid,
  CenteredText,
  Checkbox,
  Chip,
  ColorPicker,
  Comp,
  ConditionalWrap,
  ConfirmModal,
  ContextMenu,
  DateDetail,
  DateInput,
  DateRange,
  Detail,
  DetailRows,
  Divider,
  Dropdown,
  FilterMenu,
  HeaderWrapper,
  Icon,
  IconButton,
  IconPicker,
  Input,
  ListItem,
  LoadingOverlay,
  LogOpsInput,
  MULTI_INPUT_ROW_HEIGHT,
  MenuButton,
  Modal,
  MultiActionButton,
  MultiInput,
  MultiInputList,
  MultiInputRow,
  NumInput,
  NumRange,
  Pagination,
  ProgressBar,
  ProgressCircle,
  RangeWrapper,
  SideScroller,
  SortMenu,
  SortRow,
  Table,
  Text,
  Tooltip,
  TooltipWrapper,
  UniformList,
  View
};
//# sourceMappingURL=index.mjs.map