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
  toast,
  useElementResize
} from "../chunk-F3RGYJ4N.mjs";
import {
  DENSE_FORM_ROW_HEIGHT,
  Fmt,
  LOGICAL_OPS,
  _CONSTANTS,
  chunkArray,
  dayjs,
  debounce,
  deepMerge
} from "../chunk-CZMNKVKS.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "../chunk-DM4QYMVJ.mjs";

// trabecula/components/comp.tsx
import { forwardRef } from "react";
import { observer } from "mobx-react-lite";
function Comp(component) {
  const Wrapped = forwardRef((props, ref) => component(props, ref));
  return observer(Wrapped);
}

// trabecula/components/buttons/button.tsx
import {
  Button as MuiButton
} from "@mui/material";
import Color from "color";
import { jsx, jsxs } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, {
    borderColorOnHover,
    borderRadiuses = { all: "0.3rem" },
    borders,
    boxShadow,
    className,
    color = colors.custom.grey,
    colorOnHover,
    dense = false,
    endNode,
    fontFamily,
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
    maxWidth,
    onClick,
    outlined = false,
    outlineFill = "transparent",
    outlineFillOnHover,
    padding,
    size = "small",
    startNode,
    text,
    textClassName,
    textColor,
    textColorOnHover,
    textProps = {},
    textTransform = "none",
    tooltip,
    tooltipProps,
    type = "button",
    underline = type === "link" ? "hover" : "none",
    variant = "contained",
    whiteSpace = "nowrap",
    width
  } = _b, props = __objRest(_b, [
    "borderColorOnHover",
    "borderRadiuses",
    "borders",
    "boxShadow",
    "className",
    "color",
    "colorOnHover",
    "dense",
    "endNode",
    "fontFamily",
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
    "maxWidth",
    "onClick",
    "outlined",
    "outlineFill",
    "outlineFillOnHover",
    "padding",
    "size",
    "startNode",
    "text",
    "textClassName",
    "textColor",
    "textColorOnHover",
    "textProps",
    "textTransform",
    "tooltip",
    "tooltipProps",
    "type",
    "underline",
    "variant",
    "whiteSpace",
    "width"
  ]);
  const isAnchor = !!href;
  const isLinkDisplay = type === "link";
  const defaultPadding = isLinkDisplay ? "0" : dense ? "0 0.5rem" : !text ? "0.4rem" : "0.4rem 0.8rem";
  const defaultHeight = !isLinkDisplay && dense ? DENSE_FORM_ROW_HEIGHT : void 0;
  const resolvedTextColor = textColor != null ? textColor : outlined ? color : isLinkDisplay ? colors.custom.lightBlue : colors.custom.white;
  const resolvedColorOnHover = colorOnHover;
  const resolvedTextColorOnHover = textColorOnHover != null ? textColorOnHover : resolvedColorOnHover && outlined ? resolvedColorOnHover : resolvedTextColor;
  const { css, cx } = useClasses({
    borderColorOnHover,
    borderRadiuses,
    borders,
    boxShadow,
    color,
    colorOnHover: resolvedColorOnHover,
    height: height != null ? height : defaultHeight,
    isLinkDisplay,
    justify,
    margins,
    maxWidth,
    outlined,
    outlineFill,
    outlineFillOnHover,
    padding: __spreadValues({ all: defaultPadding }, padding),
    textColor: resolvedTextColor,
    textColorOnHover: resolvedTextColorOnHover,
    textTransform,
    underline,
    whiteSpace,
    width
  });
  const handleClick = (event) => onClick == null ? void 0 : onClick(event);
  return /* @__PURE__ */ jsx(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ jsxs(
    MuiButton,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, props), {
      size,
      variant
    }), isAnchor ? { component: "a", href } : {}), {
      onClick: handleClick,
      className: cx(css.root, className),
      children: [
        /* @__PURE__ */ jsx(LoadingOverlay, { isLoading: loading }),
        /* @__PURE__ */ jsxs(View, { row: true, justify, spacing: "0.3rem", height: "100%", width: "100%", children: [
          startNode,
          icon && /* @__PURE__ */ jsx(Icon, __spreadValues({ name: icon, size: iconSize }, iconProps)),
          typeof text === "string" ? /* @__PURE__ */ jsx(
            Text,
            __spreadProps(__spreadValues({
              fontFamily,
              fontSize,
              fontWeight,
              textTransform
            }, textProps), {
              className: cx(css.text, className, textClassName, textProps.className),
              children: text
            })
          ) : text,
          iconRight && /* @__PURE__ */ jsx(Icon, __spreadValues({ name: iconRight, size: iconSize }, iconProps)),
          endNode
        ] })
      ]
    })
  ) });
};
var useClasses = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const bgColor = props.outlined ? props.outlineFill : props.isLinkDisplay ? "transparent" : props.color;
  const bgColorOnHover = props.isLinkDisplay ? "transparent" : props.outlined ? (_a = props.outlineFillOnHover) != null ? _a : Color(props.outlineFill).lighten(0.1).string() : (_b = props.colorOnHover) != null ? _b : Color(props.color).lighten(0.1).string();
  const borderColor = props.outlined ? props.color : "transparent";
  const borderColorOnHover = (_c = props.borderColorOnHover) != null ? _c : props.outlined && props.colorOnHover ? props.colorOnHover : void 0;
  const linkPadding = props.isLinkDisplay && !((_d = props.padding) == null ? void 0 : _d.all) ? 0 : void 0;
  const textColor = props.textColor;
  const textColorOnHover = props.textColorOnHover;
  const textDecoration = props.underline === "always" ? "underline" : "none";
  const textDecorationOnHover = props.underline === "none" ? "none" : "underline";
  return {
    root: __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: props.justify,
      alignItems: "center",
      border: `1px solid ${borderColor}`
    }, makeBorderRadiuses(props.borderRadiuses)), makeBorders(props.borders)), makeMargins(props.margins)), {
      padding: (_e = props.padding) == null ? void 0 : _e.all,
      paddingTop: (_g = (_f = props.padding) == null ? void 0 : _f.top) != null ? _g : linkPadding,
      paddingBottom: (_i = (_h = props.padding) == null ? void 0 : _h.bottom) != null ? _i : linkPadding,
      paddingRight: (_k = (_j = props.padding) == null ? void 0 : _j.right) != null ? _k : linkPadding,
      paddingLeft: (_m = (_l = props.padding) == null ? void 0 : _l.left) != null ? _m : linkPadding,
      maxWidth: props.maxWidth,
      minWidth: "fit-content",
      height: props.height,
      width: props.width,
      backgroundColor: bgColor,
      color: textColor,
      textDecoration,
      textTransform: props.textTransform,
      overflow: "hidden",
      boxShadow: (_n = props.boxShadow) != null ? _n : "none",
      "&:active": {
        color: textColor,
        textDecoration
      },
      "&:link": {
        color: textColor
      },
      "&:hover, &:link:hover, &:visited:hover": {
        backgroundColor: bgColorOnHover,
        borderColor: borderColorOnHover,
        color: textColorOnHover,
        boxShadow: (_o = props.boxShadow) != null ? _o : props.isLinkDisplay ? "none" : void 0,
        textDecoration: `${textDecorationOnHover} !important`
      },
      "&:visited": {
        color: textColor,
        textDecoration
      }
    }),
    text: {
      alignSelf: "center",
      lineHeight: 1.1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "all 100ms ease-in-out",
      textTransform: props.textTransform,
      whiteSpace: props.whiteSpace
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
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ jsxs2(View, { row: true, spacing: "0.5rem", align: "center", children: [
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
    color,
    disabled,
    iconProps = {},
    margins,
    name,
    onClick,
    padding = {},
    size,
    tooltip,
    tooltipProps
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "color",
    "disabled",
    "iconProps",
    "margins",
    "name",
    "onClick",
    "padding",
    "size",
    "tooltip",
    "tooltipProps"
  ]);
  const { css, cx } = useClasses3({ disabled, margins, padding });
  return /* @__PURE__ */ jsx4(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ jsxs3(
    MuiIconButton,
    __spreadProps(__spreadValues({}, props), {
      disabled,
      onClick,
      size,
      className: cx(css.root, className),
      children: [
        name && /* @__PURE__ */ jsx4(Icon, __spreadProps(__spreadValues({}, iconProps), { color: color != null ? color : iconProps.color, name })),
        children
      ]
    })
  ) });
};
var useClasses3 = makeClasses((props) => ({
  root: __spreadProps(__spreadValues(__spreadValues({}, makeMargins(props.margins)), makePadding(props.padding)), {
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
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ jsxs4(View, { row: true, spacing: "0.5rem", align: "center", padding: { left: "0.5rem" }, children: [
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
      {
        anchorEl,
        keepMounted,
        open: Boolean(anchorEl),
        onClose: handleClose,
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
        transformOrigin: { horizontal: "right", vertical: "top" },
        className: css.menu,
        children: typeof children === "function" ? children(handleClose) : children
      }
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
    height = "inherit",
    rows,
    setValue,
    value,
    width = "fit-content"
  } = _b, buttonProps = __objRest(_b, [
    "color",
    "hasHeader",
    "height",
    "rows",
    "setValue",
    "value",
    "width"
  ]);
  const { css, cx } = useClasses5({ hasHeader });
  const activeRow = rows.find(({ attribute }) => attribute === (value == null ? void 0 : value.key));
  const renderButton = (onOpen) => /* @__PURE__ */ jsx8(
    Button,
    __spreadProps(__spreadValues({}, buttonProps), {
      onClick: onOpen,
      color,
      icon: "Sort",
      iconRight: (value == null ? void 0 : value.isDesc) ? "ArrowDownward" : "ArrowUpward",
      iconProps: { size: "1.15em" },
      justify: "space-between",
      height,
      width,
      borderRadiuses: __spreadValues({ all: "0.3rem" }, hasHeader ? { top: 0 } : {}),
      padding: { left: "0.5em", right: "0.5em" },
      className: cx(css.button, buttonProps == null ? void 0 : buttonProps.className),
      text: /* @__PURE__ */ jsxs6(View, { column: true, align: "flex-start", justify: "center", width: "100%", children: [
        /* @__PURE__ */ jsx8(Text, { className: css.topText, children: "Sort By" }),
        /* @__PURE__ */ jsx8(Text, { className: css.label, children: activeRow == null ? void 0 : activeRow.label })
      ] })
    })
  );
  return /* @__PURE__ */ jsx8(MenuButton, { button: renderButton, children: /* @__PURE__ */ jsx8(View, { column: true, children: rows.map((rowProps) => /* @__PURE__ */ createElement(SortRow, __spreadProps(__spreadValues({}, rowProps), { setValue, value, key: rowProps.attribute }))) }) });
};
var useClasses5 = makeClasses({
  button: {
    flexShrink: 0,
    boxShadow: "none"
  },
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
});

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
    /* @__PURE__ */ jsx9(SortButton, { attribute, setValue, value, isDesc: true }),
    /* @__PURE__ */ jsx9(SortButton, { attribute, setValue, value })
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

// trabecula/components/inputs/auto-complete.tsx
import {
  Autocomplete,
  createFilterOptions
} from "@mui/material";
import { jsx as jsx10 } from "react/jsx-runtime";
var createAutoCompleteOptions = (values) => Array.isArray(values) ? values.map((v) => ({ label: String(v), value: v })) : [];
var AutoComplete = Comp(
  (_a) => {
    var _b = _a, {
      className,
      freeSolo,
      header,
      inputProps = {},
      onChange,
      options,
      required = false,
      value
    } = _b, props = __objRest(_b, [
      "className",
      "freeSolo",
      "header",
      "inputProps",
      "onChange",
      "options",
      "required",
      "value"
    ]);
    var _a2;
    const handleChange = (_, val, reason) => {
      if (val === "" && reason === "reset") return;
      onChange == null ? void 0 : onChange(val != null ? val : "");
    };
    return /* @__PURE__ */ jsx10(
      Autocomplete,
      __spreadProps(__spreadValues({}, props), {
        autoComplete: true,
        autoHighlight: (_a2 = props.autoHighlight) != null ? _a2 : true,
        freeSolo,
        options: options.map((o) => o.label),
        filterOptions: createFilterOptions({ ignoreCase: true, ignoreAccents: true }),
        inputValue: value,
        onInputChange: handleChange,
        renderInput: (params) => /* @__PURE__ */ jsx10(
          Input,
          __spreadValues(__spreadProps(__spreadValues({}, params), {
            variant: "outlined",
            header,
            required,
            value
          }), inputProps)
        ),
        size: "small",
        fullWidth: true,
        className
      })
    );
  }
);

// trabecula/components/inputs/chip-input.tsx
import { useState as useState3 } from "react";
import { Autocomplete as Autocomplete2, Chip, createFilterOptions as createFilterOptions2 } from "@mui/material";
import { jsx as jsx11 } from "react/jsx-runtime";
import { createElement as createElement2 } from "react";
var filterOptions = createFilterOptions2({ limit: 100, matchFrom: "start" });
var ChipInput = Comp(
  (_a) => {
    var _b = _a, { className, opaque = false, options = [], setValue, value = [] } = _b, props = __objRest(_b, ["className", "opaque", "options", "setValue", "value"]);
    const { css, cx } = useClasses7({ opaque });
    const [inputValue, setInputValue] = useState3("");
    return /* @__PURE__ */ jsx11(
      Autocomplete2,
      __spreadValues({
        options,
        value,
        getOptionLabel: (option) => option.label,
        renderInput: (params) => /* @__PURE__ */ jsx11(
          Input,
          __spreadProps(__spreadValues({}, params), {
            value: inputValue,
            setValue: setInputValue,
            className: cx(css.input, className)
          })
        ),
        renderTags: (val, getTagProps) => val.map((option, index) => /* @__PURE__ */ createElement2(Chip, __spreadProps(__spreadValues({}, getTagProps({ index })), { key: index, label: option.label }))),
        onChange: (_, val) => {
          setValue == null ? void 0 : setValue(
            val.map(
              (v) => typeof v === "string" ? { label: v, value: v } : v
            )
          );
          setInputValue("");
        },
        isOptionEqualToValue: (option, val) => option.value === val.value,
        filterOptions,
        size: "small",
        freeSolo: true,
        autoSelect: true,
        forcePopupIcon: false,
        clearOnBlur: false,
        disableClearable: true,
        multiple: true
      }, props)
    );
  }
);
var useClasses7 = makeClasses(({ opaque }) => ({
  input: {
    backgroundColor: opaque ? colors.mui.grey["800"] : "transparent"
  }
}));

// trabecula/components/inputs/date-input.tsx
import { useEffect as useEffect2, useState as useState4 } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { jsx as jsx12 } from "react/jsx-runtime";
var DateInput = Comp(
  (_a) => {
    var _b = _a, {
      header,
      headerProps = {},
      inputProps = {},
      setValue,
      slotProps = {},
      value,
      viewProps = {},
      width
    } = _b, datePickerProps = __objRest(_b, [
      "header",
      "headerProps",
      "inputProps",
      "setValue",
      "slotProps",
      "value",
      "viewProps",
      "width"
    ]);
    const { css } = useClasses8(null);
    const [dateValue, setDateValue] = useState4((value == null ? void 0 : value.length) ? dayjs(value) : null);
    useEffect2(() => {
      if (value == null ? void 0 : value.length) setDateValue(dayjs(value));
      else setDateValue(null);
    }, [value]);
    const handleChange = (val) => {
      setDateValue(val);
      setValue == null ? void 0 : setValue(val.format("YYYY-MM-DD"));
    };
    const textFieldProps = __spreadProps(__spreadValues(__spreadValues({}, inputProps), slotProps == null ? void 0 : slotProps.textField), {
      header,
      headerProps,
      width
    });
    return /* @__PURE__ */ jsx12(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx12(View, __spreadProps(__spreadValues({}, viewProps), { width, children: /* @__PURE__ */ jsx12(
      DatePicker,
      __spreadProps(__spreadValues({}, datePickerProps), {
        value: dateValue,
        onChange: handleChange,
        slots: { textField: DateTextField },
        slotProps: __spreadProps(__spreadValues({}, slotProps), {
          actionBar: __spreadValues({ actions: ["cancel", "clear", "today"] }, slotProps == null ? void 0 : slotProps.actionBar),
          inputAdornment: __spreadProps(__spreadValues({}, slotProps == null ? void 0 : slotProps.inputAdornment), { tabIndex: -1 }),
          openPickerButton: __spreadProps(__spreadValues({}, slotProps == null ? void 0 : slotProps.openPickerButton), { tabIndex: -1 }),
          textField: textFieldProps
        }),
        className: css.datePicker
      })
    ) })) });
  }
);
var DateTextField = (props) => /* @__PURE__ */ jsx12(Input, __spreadValues({}, props));
var useClasses8 = makeClasses({
  datePicker: {
    width: "100%",
    "& .MuiInputBase-input": {
      paddingLeft: "0.5rem"
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem"
    }
  }
});

// trabecula/components/inputs/date-range.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var DateRange = Comp(
  ({
    dateInputProps = {},
    endDate,
    header,
    headerProps,
    setEndDate,
    setStartDate,
    startDate
  }) => {
    return /* @__PURE__ */ jsx13(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ jsx13(
          DateInput,
          __spreadProps(__spreadValues({}, dateInputProps), {
            value: startDate,
            setValue: setStartDate,
            inputProps: { borderRadiuses: { top: 0, right: 0 } }
          })
        ),
        endInput: /* @__PURE__ */ jsx13(
          DateInput,
          __spreadProps(__spreadValues({}, dateInputProps), {
            value: endDate,
            setValue: setEndDate,
            inputProps: { borderRadiuses: { top: 0, left: 0 } }
          })
        )
      }
    );
  }
);

// trabecula/components/inputs/dropdown.tsx
import { useEffect as useEffect3, useRef, useState as useState5 } from "react";
import {
  Autocomplete as Autocomplete3,
  MenuItem
} from "@mui/material";
import Color3 from "color";

// trabecula/components/inputs/input.tsx
import { InputAdornment, TextField } from "@mui/material";
import Color2 from "color";
import { jsx as jsx14 } from "react/jsx-runtime";
var DENSE_INPUT_PADDING = "0.1rem 0.5rem";
var DEFAULT_INPUT_HEADER_PROPS = {
  fontSize: "0.8em",
  padding: { all: "0.2rem 0.3rem" }
};
var Input = Comp((rawProps, ref) => {
  var _b, _c, _d;
  const _a = rawProps, {
    adornment,
    adornmentColor = colors.custom.grey,
    adornmentPosition = "end",
    background = "rgb(0 0 0 / 0.2)",
    borderRadiuses,
    borders,
    children,
    className,
    color,
    dense = false,
    flex,
    fontFamily = "Roboto",
    fontSize,
    fontWeight,
    hasHelper = false,
    header,
    headerProps = {},
    height,
    helperText,
    helperTextProps = {},
    inputProps,
    label,
    labelProps,
    labelTextProps = {},
    margins = {},
    maxLength,
    minWidth,
    noFade = false,
    onChange,
    onClick,
    onEnter,
    onKeyDown,
    padding = {},
    setValue,
    textAlign,
    textColor,
    value,
    variant = "outlined",
    width = "100%"
  } = _a, props = __objRest(_a, [
    "adornment",
    "adornmentColor",
    "adornmentPosition",
    "background",
    "borderRadiuses",
    "borders",
    "children",
    "className",
    "color",
    "dense",
    "flex",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "hasHelper",
    "header",
    "headerProps",
    "height",
    "helperText",
    "helperTextProps",
    "inputProps",
    "label",
    "labelProps",
    "labelTextProps",
    "margins",
    "maxLength",
    "minWidth",
    "noFade",
    "onChange",
    "onClick",
    "onEnter",
    "onKeyDown",
    "padding",
    "setValue",
    "textAlign",
    "textColor",
    "value",
    "variant",
    "width"
  ]);
  const resolvedLabel = label != null ? label : header;
  const resolvedLabelProps = deepMerge(DEFAULT_INPUT_HEADER_PROPS, labelProps != null ? labelProps : headerProps);
  const hasLabel = !!resolvedLabel;
  const inputHeight = rawProps.multiline && rawProps.height === void 0 ? void 0 : height;
  const inputRootHeight = dense && rawProps.height === void 0 && !rawProps.multiline ? DENSE_FORM_ROW_HEIGHT : void 0;
  const inputName = (_b = props.name) != null ? _b : typeof resolvedLabel === "string" ? resolvedLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : void 0;
  const { css, cx } = useClasses9({
    adornmentColor,
    background,
    borderRadiuses,
    borders,
    color,
    dense,
    flex,
    fontFamily,
    fontSize,
    fontWeight,
    hasHelper,
    hasLabel,
    hasOnClick: !!onClick,
    height: inputHeight,
    helperText,
    helperTextProps,
    inputRootHeight,
    margins: hasLabel ? {} : margins,
    minWidth,
    noFade,
    padding,
    textAlign,
    textColor,
    width
  });
  const handleChange = (event) => {
    setValue == null ? void 0 : setValue(event.target.value);
    onChange == null ? void 0 : onChange(event);
  };
  const handleKeyDown = (event) => {
    event.stopPropagation();
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!onEnter || event.defaultPrevented || event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    onEnter();
  };
  return /* @__PURE__ */ jsx14(
    HeaderWrapper,
    {
      flex,
      header: resolvedLabel,
      headerProps: resolvedLabelProps,
      margins: hasLabel ? margins : void 0,
      overflow: "initial",
      textProps: labelTextProps,
      width,
      children: /* @__PURE__ */ jsx14(
        TextField,
        __spreadProps(__spreadValues({}, props), {
          ref,
          id: (_c = props.id) != null ? _c : inputName,
          name: inputName,
          onChange: handleChange,
          onClick,
          onKeyDown: handleKeyDown,
          value,
          variant,
          helperText: !helperText ? void 0 : typeof helperText === "string" ? /* @__PURE__ */ jsx14(Text, __spreadProps(__spreadValues({ color: (_d = helperTextProps.color) != null ? _d : color }, helperTextProps), { children: helperText })) : helperText,
          FormHelperTextProps: { component: "div" },
          inputProps: __spreadProps(__spreadValues({
            title: typeof value === "string" ? value : void 0
          }, inputProps), {
            maxLength,
            value: value != null ? value : ""
          }),
          InputProps: __spreadValues({
            endAdornment: adornmentPosition === "end" && adornment ? /* @__PURE__ */ jsx14(InputAdornment, { position: "end", children: typeof adornment === "string" ? /* @__PURE__ */ jsx14(Text, { fontSize: "0.9em", color: adornmentColor, children: adornment }) : adornment }) : null,
            startAdornment: adornmentPosition === "start" ? adornment : null
          }, props.InputProps),
          size: "small",
          className: cx(css.input, className),
          "aria-label": "input",
          children
        })
      )
    }
  );
});
var useClasses9 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  return {
    input: __spreadProps(__spreadValues({
      flex: props.flex
    }, makeMargins(__spreadProps(__spreadValues({}, props.margins), {
      bottom: (_b = (_a = props.margins) == null ? void 0 : _a.bottom) != null ? _b : props.hasHelper && !props.helperText ? "1.3rem" : 0
    }))), {
      minWidth: props.minWidth,
      width: "100%",
      "& input, & textarea": __spreadProps(__spreadValues({}, makePadding(__spreadProps(__spreadValues({}, props.padding), {
        all: (_c = props.padding.all) != null ? _c : props.dense ? DENSE_INPUT_PADDING : void 0
      }))), {
        color: props.textColor,
        cursor: props.hasOnClick ? "pointer" : void 0,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        height: props.inputRootHeight ? "100%" : props.height,
        textAlign: props.textAlign,
        "&.Mui-disabled": props.noFade || props.textColor ? {
          color: props.textColor,
          opacity: props.noFade ? 1 : void 0,
          WebkitTextFillColor: props.textColor
        } : void 0
      }),
      "& .MuiInputAdornment-root svg": {
        color: props.adornmentColor
      },
      "& .MuiTypography-root": {
        display: "inline-grid",
        width: "100%",
        textAlign: props.textAlign
      },
      "& .MuiOutlinedInput-root": {
        background: props.background,
        minHeight: props.inputRootHeight ? 0 : void 0,
        height: props.inputRootHeight,
        "&.Mui-disabled": props.noFade ? { opacity: 1 } : void 0,
        "& fieldset": __spreadValues(__spreadValues({
          transition: "all 200ms ease-in-out",
          borderColor: props.color,
          borderStyle: "dotted"
        }, makeBorders(props.borders)), makeBorderRadiuses(
          deepMerge(props.hasLabel ? { top: 0 } : {}, (_d = props.borderRadiuses) != null ? _d : {})
        )),
        "&:hover fieldset": {
          borderColor: props.color ? Color2(props.color).lighten(0.3).toString() : void 0
        },
        "&.Mui-focused fieldset": {
          borderColor: props.color
        }
      },
      "& .MuiSelect-select": {
        fontFamily: props.fontFamily,
        fontSize: (_e = props.fontSize) != null ? _e : "0.9em",
        padding: props.dense ? DENSE_INPUT_PADDING : void 0
      },
      "& .MuiFormHelperText-root": {
        margin: "0.3rem 0 0 0",
        color: (_g = (_f = props.helperTextProps) == null ? void 0 : _f.color) != null ? _g : props.color,
        fontSize: "0.75em",
        lineHeight: 1,
        textAlign: "center"
      }
    })
  };
});

// trabecula/components/inputs/dropdown.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
import { createElement as createElement3 } from "react";
function Dropdown(_a) {
  var _b = _a, {
    autoHighlight = true,
    autoSelect = false,
    borderColor,
    caretColor,
    caretSize = "1.4rem",
    dense = false,
    disabled,
    freeSolo = false,
    header,
    headerProps,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputLineHeight,
    inputOutlineWidth,
    inputPadding,
    inputProps,
    inputRootAlignItems,
    inputRootHeight,
    inputRootMinHeight,
    inputRootPadding,
    InputProps: InputProps7,
    itemBgColor,
    label,
    labelProps,
    labelTextProps,
    listboxBorder,
    listboxBorderRadius,
    menuItemBorder,
    menuItemMinHeight,
    menuItemPadding,
    menuItemSelectedBgColor,
    optionTextProps,
    options,
    paperBorder,
    paperBorderRadius,
    required,
    setValue,
    textColor,
    value,
    withClearButton = false,
    withValueTest = false
  } = _b, props = __objRest(_b, [
    "autoHighlight",
    "autoSelect",
    "borderColor",
    "caretColor",
    "caretSize",
    "dense",
    "disabled",
    "freeSolo",
    "header",
    "headerProps",
    "inputFontSize",
    "inputFontWeight",
    "inputHeight",
    "inputLineHeight",
    "inputOutlineWidth",
    "inputPadding",
    "inputProps",
    "inputRootAlignItems",
    "inputRootHeight",
    "inputRootMinHeight",
    "inputRootPadding",
    "InputProps",
    "itemBgColor",
    "label",
    "labelProps",
    "labelTextProps",
    "listboxBorder",
    "listboxBorderRadius",
    "menuItemBorder",
    "menuItemMinHeight",
    "menuItemPadding",
    "menuItemSelectedBgColor",
    "optionTextProps",
    "options",
    "paperBorder",
    "paperBorderRadius",
    "required",
    "setValue",
    "textColor",
    "value",
    "withClearButton",
    "withValueTest"
  ]);
  var _a2, _b2, _c, _d;
  const { css, cx } = useClasses10({
    dense,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputLineHeight,
    inputOutlineWidth,
    inputPadding,
    inputRootAlignItems,
    inputRootHeight: dense && inputRootHeight === void 0 && props.height === void 0 ? DENSE_FORM_ROW_HEIGHT : inputRootHeight,
    inputRootMinHeight,
    inputRootPadding,
    itemBgColor,
    listboxBorder,
    listboxBorderRadius,
    menuItemBorder,
    menuItemMinHeight,
    menuItemPadding,
    menuItemSelectedBgColor,
    paperBorder,
    paperBorderRadius,
    textColor
  });
  const resolvedLabel = label != null ? label : header;
  const resolvedHeader = typeof resolvedLabel === "string" && required ? `${resolvedLabel} *` : resolvedLabel;
  const [valueOption, setValueOption] = useState5(null);
  const committedLabel = value === "" ? "" : (_b2 = (_a2 = options.find((option) => option.value === value)) == null ? void 0 : _a2.label) != null ? _b2 : freeSolo && typeof value === "string" ? value : "";
  const [inputValue, setInputValue] = useState5(committedLabel);
  const isTypingRef = useRef(false);
  useEffect3(() => {
    var _a3, _b3;
    const matched = value === "" ? null : (_a3 = options.find((option) => option.value === value)) != null ? _a3 : null;
    setValueOption(matched);
    if (!isTypingRef.current)
      setInputValue((_b3 = matched == null ? void 0 : matched.label) != null ? _b3 : freeSolo && typeof value === "string" ? value : "");
  }, [freeSolo, options, value]);
  const filterOptions2 = (availableOptions, state) => {
    if (!state.inputValue || !isTypingRef.current) return availableOptions;
    const searchString = state.inputValue.trim().toLowerCase();
    const searchTerms = searchString.split(" ");
    const joinedTerms = searchTerms.join(" ");
    const scoreOption = (option) => {
      const optionLabel = option.label.toLowerCase();
      if (optionLabel === searchString) return 100;
      if (optionLabel.startsWith(searchString)) return 50;
      if (optionLabel.includes(joinedTerms)) return 25;
      return 10;
    };
    return availableOptions.filter((option) => {
      const labelMatches = option.label.toLowerCase().includes(searchString);
      const valueMatches = withValueTest && typeof option.value === "string" ? option.value.toLowerCase().includes(searchString) : false;
      return labelMatches || valueMatches;
    }).map((option) => ({ option, score: scoreOption(option) })).sort((a, b) => b.score - a.score).map(({ option }) => option);
  };
  const handleChange = (_, newValue) => {
    var _a3;
    isTypingRef.current = false;
    if (typeof newValue === "string") {
      setValue(newValue);
      setValueOption(null);
      setInputValue(newValue);
      return;
    }
    const newValueOption = (newValue == null ? void 0 : newValue.value) === "" ? null : newValue;
    setValue(newValue == null ? void 0 : newValue.value);
    setValueOption(newValueOption);
    setInputValue((_a3 = newValueOption == null ? void 0 : newValueOption.label) != null ? _a3 : "");
  };
  const handleInputChange = (_, newInputValue, reason) => {
    if (reason !== "input") return;
    isTypingRef.current = true;
    setInputValue(newInputValue);
    if (freeSolo) setValue(newInputValue);
  };
  const handleInputKeyDown = (event) => {
    var _a3;
    (_a3 = inputProps == null ? void 0 : inputProps.onKeyDown) == null ? void 0 : _a3.call(inputProps, event);
    if (event.defaultPrevented || !freeSolo || event.key !== "Enter") return;
    event.preventDefault();
    event.stopPropagation();
    isTypingRef.current = false;
    setValue(inputValue);
    setValueOption(null);
    setInputValue(inputValue);
  };
  const handleClose = (_, reason) => {
    var _a3;
    if (reason !== "blur" && reason !== "escape") return;
    isTypingRef.current = false;
    if (!freeSolo) setInputValue((_a3 = valueOption == null ? void 0 : valueOption.label) != null ? _a3 : "");
  };
  const renderInput = (params) => /* @__PURE__ */ jsx15(
    Input,
    __spreadProps(__spreadValues(__spreadValues({}, props), params), {
      className: cx(css.input, props.className),
      color: borderColor != null ? borderColor : props.color,
      dense,
      InputProps: __spreadValues(__spreadValues({}, params.InputProps), InputProps7),
      inputProps: __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, params.inputProps), {
        title: inputValue
      }), inputProps), {
        onKeyDown: handleInputKeyDown
      }),
      required,
      value: params.inputProps.value
    })
  );
  const renderOption = (itemProps, option) => /* @__PURE__ */ createElement3(
    MenuItem,
    __spreadProps(__spreadValues({}, itemProps), {
      key: String(option.value),
      className: cx(itemProps.className, css.menuItem),
      title: option.label
    }),
    /* @__PURE__ */ jsx15(Text, __spreadProps(__spreadValues({}, optionTextProps), { children: option.label }))
  );
  const containerRef = useRef(null);
  const { width: inputWidth } = useElementResize(containerRef);
  return /* @__PURE__ */ jsx15(
    HeaderWrapper,
    {
      ref: containerRef,
      header: resolvedHeader,
      headerProps: deepMerge(DEFAULT_INPUT_HEADER_PROPS, (_c = labelProps != null ? labelProps : headerProps) != null ? _c : {}),
      overflow: "initial",
      textProps: labelTextProps,
      width: (_d = props.width) != null ? _d : "100%",
      children: /* @__PURE__ */ jsx15(
        Autocomplete3,
        {
          autoHighlight,
          autoSelect,
          className: css.autocomplete,
          componentsProps: {
            paper: {
              className: css.paper,
              sx: {
                maxWidth: props.width || inputWidth,
                minWidth: props.width || inputWidth
              }
            }
          },
          disableClearable: !withClearButton,
          disabled,
          filterOptions: filterOptions2,
          freeSolo,
          fullWidth: true,
          inputValue,
          ListboxProps: { className: css.listbox },
          onChange: handleChange,
          onClose: handleClose,
          onInputChange: handleInputChange,
          options,
          popupIcon: /* @__PURE__ */ jsx15(Icon, { name: "ArrowDropDown", color: caretColor, size: caretSize }),
          renderInput,
          renderOption,
          selectOnFocus: false,
          size: "small",
          value: valueOption
        }
      )
    }
  );
}
var useClasses10 = makeClasses((props) => {
  var _a;
  const inputPadding = (_a = props.inputPadding) != null ? _a : props.dense ? DENSE_INPUT_PADDING : void 0;
  return {
    autocomplete: {
      height: "100%",
      "& > [aria-label='header-wrapper-content'], & .MuiFormControl-root, & .MuiOutlinedInput-root": {
        height: "100%"
      }
    },
    input: {
      "& input": {
        fontSize: props.inputFontSize,
        fontWeight: props.inputFontWeight,
        height: props.inputHeight,
        lineHeight: props.inputLineHeight,
        padding: inputPadding
      },
      "& .MuiInputBase-input.MuiAutocomplete-input, & .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
        boxSizing: "border-box",
        height: props.inputHeight,
        lineHeight: props.inputLineHeight,
        padding: inputPadding
      },
      "& .MuiOutlinedInput-root": {
        alignItems: props.inputRootAlignItems,
        boxSizing: "border-box",
        minHeight: props.inputRootMinHeight,
        height: props.inputRootHeight,
        padding: props.inputRootPadding,
        "& fieldset": {
          borderWidth: props.inputOutlineWidth
        },
        "&:hover fieldset, &.Mui-focused fieldset": {
          borderWidth: props.inputOutlineWidth
        }
      }
    },
    listbox: {
      padding: 0,
      border: props.listboxBorder,
      borderRadius: props.listboxBorderRadius
    },
    menuItem: {
      alignItems: "center",
      justifyContent: "flex-start",
      minHeight: props.menuItemMinHeight,
      padding: props.menuItemPadding,
      whiteSpace: "normal",
      color: props.textColor,
      backgroundColor: props.itemBgColor,
      "&.Mui-focused, &.Mui-focusVisible, &[aria-selected='true'], &.Mui-focused[aria-selected='true']": {
        backgroundColor: props.menuItemSelectedBgColor
      },
      "&:hover": {
        backgroundColor: props.itemBgColor ? Color3(props.itemBgColor).lighten(0.05).hex() : void 0
      },
      "&:not(:last-of-type)": {
        borderBottom: props.menuItemBorder
      }
    },
    paper: {
      border: props.paperBorder,
      borderRadius: props.paperBorderRadius
    }
  };
});

// trabecula/components/inputs/filter-menu.tsx
import { useEffect as useEffect4, useState as useState6 } from "react";
import { Fragment as Fragment2, jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
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
      width = "8rem"
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
    const hasSavedSearchApi = !!store.applySavedSearch && !!store.deleteSavedSearch && !!store.loadSavedSearches && !!store.saveSavedSearch;
    const handleReset = () => {
      resetFn ? resetFn() : store.reset();
      handleSearch();
    };
    const handleSearch = () => {
      store.setPageCount(1);
      store.loadFiltered({ noCache: true, page: 1 });
    };
    const renderButton = (onOpen) => /* @__PURE__ */ jsx16(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color: store.hasChanges ? colors.custom.purple : color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ jsxs8(View, { row: true, align: "center", spacing: "0.5rem", children: [
          /* @__PURE__ */ jsx16(Icon, { name: "FilterAlt", size: "1.15em" }),
          /* @__PURE__ */ jsx16(Text, { children: "Filter Results" })
        ] })
      })
    );
    return /* @__PURE__ */ jsx16(MenuButton, __spreadProps(__spreadValues({ button: renderButton }, menuProps), { children: /* @__PURE__ */ jsxs8(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ jsxs8(View, { row: true, spacing: "0.5rem", width: "100%", children: [
        /* @__PURE__ */ jsx16(
          Button,
          {
            text: "Search",
            icon: "Search",
            onClick: handleSearch,
            disabled: store.isLoading,
            color: store.hasChanges ? colors.custom.purple : colors.custom.blue,
            width: "100%"
          }
        ),
        /* @__PURE__ */ jsx16(
          Button,
          {
            icon: "Refresh",
            onClick: handleReset,
            disabled: store.isLoading,
            color: colors.foregroundCard,
            colorOnHover: colors.custom.red
          }
        ),
        /* @__PURE__ */ jsx16(
          SortMenu,
          {
            rows: sortOptions,
            value: store.sortValue,
            setValue: store.setSortValue,
            color: colors.foregroundCard,
            width: "9rem"
          }
        ),
        hasSavedSearchApi && /* @__PURE__ */ jsxs8(Fragment2, { children: [
          /* @__PURE__ */ jsx16(Divider, { orientation: "vertical" }),
          /* @__PURE__ */ jsx16(SavedSearchMenu, { store })
        ] })
      ] }),
      children
    ] })) }));
  }
);
var SavedSearchMenu = Comp(({ store }) => {
  var _a;
  const [inputValue, setInputValue] = useState6("");
  const [label, setLabel] = useState6("");
  const activeSearch = store.savedSearches.find((s) => s.id === store.selectedSavedSearchId);
  const options = store.savedSearches.map((savedSearch) => ({
    label: savedSearch.label,
    value: savedSearch.id
  }));
  useEffect4(() => {
    store.loadSavedSearches();
  }, [store]);
  useEffect4(() => {
    var _a2;
    setInputValue((_a2 = activeSearch == null ? void 0 : activeSearch.label) != null ? _a2 : "");
  }, [activeSearch == null ? void 0 : activeSearch.id, activeSearch == null ? void 0 : activeSearch.label]);
  const handleDelete = () => __async(null, null, function* () {
    yield store.deleteSavedSearch(store.selectedSavedSearchId);
    return true;
  });
  const handleEdit = () => {
    var _a2;
    setLabel((_a2 = activeSearch == null ? void 0 : activeSearch.label) != null ? _a2 : "");
    store.setIsSaveModalOpen(true);
  };
  const handleSave = () => store.saveSavedSearch(label);
  const handleSelect = (value) => {
    setInputValue(value);
    const selectedSearch = options.find((option) => option.label === value);
    if (selectedSearch) store.applySavedSearch(selectedSearch.value);
  };
  return /* @__PURE__ */ jsxs8(Fragment2, { children: [
    /* @__PURE__ */ jsx16(
      AutoComplete,
      {
        options,
        value: inputValue,
        onChange: handleSelect,
        inputProps: {
          placeholder: "Saved Searches",
          height: "1em",
          width: "100%"
        }
      }
    ),
    /* @__PURE__ */ jsx16(
      Button,
      {
        icon: "Save",
        onClick: handleEdit,
        disabled: store.isLoading,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.blue
      }
    ),
    /* @__PURE__ */ jsx16(
      Button,
      {
        icon: "Delete",
        onClick: () => store.setIsDeleteModalOpen(true),
        disabled: store.isLoading || !store.selectedSavedSearchId,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.red
      }
    ),
    store.isDeleteModalOpen && /* @__PURE__ */ jsx16(
      ConfirmModal,
      {
        subText: `Delete saved search "${(_a = activeSearch == null ? void 0 : activeSearch.label) != null ? _a : "Selected Search"}"?`,
        setVisible: store.setIsDeleteModalOpen,
        onConfirm: handleDelete
      }
    ),
    store.isSaveModalOpen && /* @__PURE__ */ jsx16(
      SavedSearchModal,
      {
        label,
        onClose: () => store.setIsSaveModalOpen(false),
        onSave: handleSave,
        setLabel
      }
    )
  ] });
});
var SavedSearchModal = Comp(({ label, onClose, onSave, setLabel }) => /* @__PURE__ */ jsxs8(Modal.Container, { onClose, width: "24rem", children: [
  /* @__PURE__ */ jsx16(Modal.Header, { children: /* @__PURE__ */ jsx16(Text, { preset: "title", children: "Save Search" }) }),
  /* @__PURE__ */ jsx16(Modal.Content, { spacing: "0.5rem", dividers: false, children: /* @__PURE__ */ jsx16(Input, { header: "Label", value: label, setValue: setLabel, autoFocus: true }) }),
  /* @__PURE__ */ jsxs8(Modal.Footer, { children: [
    /* @__PURE__ */ jsx16(Button, { text: "Cancel", icon: "Close", onClick: onClose, color: colors.foregroundCard }),
    /* @__PURE__ */ jsx16(
      Button,
      {
        text: "Save",
        icon: "Save",
        onClick: onSave,
        disabled: !label.trim(),
        color: colors.custom.green
      }
    )
  ] })
] }));

// trabecula/components/inputs/log-ops-input.tsx
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
var LOG_OPS_OPTS = [
  { label: "Any", value: "" },
  ...LOGICAL_OPS.map((op) => ({ label: op, value: op }))
];
var LogOpsInput = Comp(
  (_a) => {
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
    return /* @__PURE__ */ jsxs9(HeaderWrapper, __spreadProps(__spreadValues({ row: true, overflow: "hidden", header, headerProps }, props), { children: [
      /* @__PURE__ */ jsx17(
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
      /* @__PURE__ */ jsx17(
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
  }
);

// trabecula/components/inputs/multi-input.tsx
import { useState as useState7 } from "react";

// trabecula/components/inputs/multi-input-list.tsx
import { forwardRef as forwardRef2 } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";

// trabecula/components/inputs/multi-input-row.tsx
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
var MULTI_INPUT_ROW_HEIGHT = 35;
var MultiInputRow = (_a) => {
  var _b = _a, { bgColor } = _b, props = __objRest(_b, ["bgColor"]);
  var _a2, _b2;
  bgColor = bgColor || colors.foreground;
  const hasClick = !!props.onClick;
  const { css } = useClasses11({ bgColor, hasClick });
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
    /* @__PURE__ */ jsx18(
      View,
      {
        onClick: hasClick ? handleClick : null,
        row: true,
        flex: 1,
        overflow: "hidden",
        padding: { all: "0 0.3rem" },
        children: /* @__PURE__ */ jsx18(
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
    props.hasDelete && /* @__PURE__ */ jsx18(
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
var useClasses11 = makeClasses((props) => ({
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
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
var MultiInputList = forwardRef2(
  ({
    hasDelete,
    hasDeleteAll = false,
    hasInput,
    renderRow,
    search,
    viewProps = {}
  }, ref) => {
    const { css } = useClasses12({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return /* @__PURE__ */ jsxs11(View, { column: true, height: "100%", children: [
      /* @__PURE__ */ jsx19(
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
          children: !search.value.length ? /* @__PURE__ */ jsx19(CenteredText, { text: "No items", color: colors.custom.grey }) : /* @__PURE__ */ jsx19(View, { flex: 1, children: /* @__PURE__ */ jsx19(AutoSizer, { disableWidth: true, children: ({ height }) => /* @__PURE__ */ jsx19(
            FixedSizeList,
            {
              ref,
              height,
              width: "100%",
              layout: "vertical",
              itemSize: MULTI_INPUT_ROW_HEIGHT,
              itemCount: search.value.length,
              children: ({ index, style }) => renderRow ? renderRow(index, style) : /* @__PURE__ */ jsx19(
                MultiInputRow,
                {
                  hasDelete,
                  value: search.value[index],
                  search,
                  style
                },
                index
              )
            }
          ) }) })
        })
      ),
      hasDeleteAll && /* @__PURE__ */ jsx19(
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
var useClasses12 = makeClasses((props) => ({
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
import { Fragment as Fragment3, jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
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
    const [inputValue, setInputValue] = useState7("");
    const onKeyDown = (e) => {
      if (e.key === "Enter" && !isMax) {
        e.preventDefault();
        if (!value.includes(inputValue)) onChange([...value, inputValue]);
        setInputValue("");
      }
    };
    const renderList = () => /* @__PURE__ */ jsx20(
      MultiInputList,
      {
        hasDelete,
        hasDeleteAll,
        search: { onChange, value },
        hasInput: true
      }
    );
    return /* @__PURE__ */ jsx20(View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? /* @__PURE__ */ jsx20(HeaderWrapper, { header, headerProps, children: renderList() }) : /* @__PURE__ */ jsxs12(Fragment3, { children: [
      /* @__PURE__ */ jsx20(
        Input,
        __spreadProps(__spreadValues({
          disabled,
          hasHelper,
          header,
          headerProps
        }, inputProps), {
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
import { useState as useState8 } from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
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
    const [error, setError] = useState8(null);
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
    return /* @__PURE__ */ jsx21(
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
import { jsx as jsx22 } from "react/jsx-runtime";
var NumRange = Comp(
  ({
    hasHelper = false,
    header,
    headerProps,
    max,
    min,
    numInputProps = {},
    setMax,
    setMin
  }) => {
    return /* @__PURE__ */ jsx22(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ jsx22(
          NumInput,
          __spreadProps(__spreadValues({}, numInputProps), {
            hasHelper,
            value: min,
            setValue: setMin,
            placeholder: "Min",
            textAlign: "center",
            borderRadiuses: { top: 0, right: 0 }
          })
        ),
        endInput: /* @__PURE__ */ jsx22(
          NumInput,
          __spreadProps(__spreadValues({}, numInputProps), {
            hasHelper,
            value: max,
            setValue: setMax,
            placeholder: "Max",
            textAlign: "center",
            borderRadiuses: { top: 0, left: 0 }
          })
        )
      }
    );
  }
);

// trabecula/components/inputs/range-wrapper.tsx
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
var RangeWrapper = Comp((props) => {
  return /* @__PURE__ */ jsxs13(HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [
    props.startInput,
    /* @__PURE__ */ jsx23(
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
        children: /* @__PURE__ */ jsx23(Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "\u2014" })
      }
    ),
    props.endInput
  ] });
});

// trabecula/components/inputs/time-input.tsx
import { useEffect as useEffect5, useState as useState9 } from "react";
import { LocalizationProvider as LocalizationProvider2 } from "@mui/x-date-pickers";
import { AdapterDayjs as AdapterDayjs2 } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { jsx as jsx24 } from "react/jsx-runtime";
var TimeInput = (rawProps) => {
  const _a = rawProps, {
    inputProps = {},
    label,
    labelProps = {},
    setValue,
    slotProps = {},
    value,
    viewProps = {},
    width
  } = _a, timePickerProps = __objRest(_a, [
    "inputProps",
    "label",
    "labelProps",
    "setValue",
    "slotProps",
    "value",
    "viewProps",
    "width"
  ]);
  const { css } = useClasses13(null);
  const [timeValue, setTimeValue] = useState9(
    (value == null ? void 0 : value.length) ? dayjs(value, TIME_FORMAT) : null
  );
  useEffect5(() => {
    if (value == null ? void 0 : value.length) setTimeValue(dayjs(value, TIME_FORMAT));
    else setTimeValue(null);
  }, [value]);
  const handleChange = (val) => {
    setTimeValue(val);
    setValue == null ? void 0 : setValue(val ? val.format(TIME_FORMAT) : "");
  };
  const textFieldProps = __spreadProps(__spreadValues(__spreadValues({}, inputProps), slotProps == null ? void 0 : slotProps.textField), {
    label,
    labelProps,
    width
  });
  return /* @__PURE__ */ jsx24(LocalizationProvider2, { dateAdapter: AdapterDayjs2, children: /* @__PURE__ */ jsx24(View, __spreadProps(__spreadValues({}, viewProps), { width, children: /* @__PURE__ */ jsx24(
    TimePicker,
    __spreadProps(__spreadValues({}, timePickerProps), {
      value: timeValue,
      onChange: handleChange,
      slots: { textField: TimeTextField },
      slotProps: __spreadProps(__spreadValues({}, slotProps), {
        textField: textFieldProps
      }),
      className: css.timePicker
    })
  ) })) });
};
var TimeTextField = (props) => /* @__PURE__ */ jsx24(Input, __spreadValues({}, props));
var TIME_FORMAT = "HH:mm:ss";
var useClasses13 = makeClasses({
  timePicker: {
    width: "100%",
    "& .MuiInputBase-input": {
      paddingLeft: "0.5rem"
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem"
    }
  }
});

// trabecula/components/list/detail-rows.tsx
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
var DetailRows = ({ labelWidth = "8rem", rows }) => {
  const { css } = useClasses14({ labelWidth });
  return /* @__PURE__ */ jsx25(View, { className: css.table, children: rows.map(({ label, value }, i) => /* @__PURE__ */ jsxs14(View, { className: css.row, children: [
    typeof label === "string" ? /* @__PURE__ */ jsx25(Text, { className: css.label, children: label }) : label,
    typeof value === "string" ? /* @__PURE__ */ jsx25(Text, { noWrap: true, tooltip: value, children: value }) : value
  ] }, `${i}-${label}`)) });
};
var useClasses14 = makeClasses((props) => ({
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

// trabecula/components/list/list.tsx
import { List as MuiList } from "@mui/material";
import { jsx as jsx26 } from "react/jsx-runtime";
var List = (_a) => {
  var _b = _a, {
    children,
    className,
    dividerColor = colors.mui.grey["400"],
    noDividers = false
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "dividerColor",
    "noDividers"
  ]);
  const { css, cx } = useClasses15({ dividerColor, noDividers });
  return /* @__PURE__ */ jsx26(MuiList, __spreadProps(__spreadValues({ className: cx(css.list, className) }, props), { children }));
};
var useClasses15 = makeClasses(({ dividerColor, noDividers }) => ({
  list: {
    padding: 0,
    "& > *:not(:last-child)": {
      borderBottom: noDividers ? void 0 : `1px solid ${dividerColor}`
    }
  }
}));

// trabecula/components/list/list-item.tsx
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import Color4 from "color";
import { jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses16({ color });
  return /* @__PURE__ */ jsx27(
    TooltipWrapper,
    {
      tooltip: children,
      tooltipProps: {
        arrow: false,
        bgColor: Color4(colors.custom.black).fade(0.03).hex(),
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
            icon && /* @__PURE__ */ jsx27(ListItemIcon, { className: css.icon, children: /* @__PURE__ */ jsx27(Icon, __spreadProps(__spreadValues({}, iconProps), { name: icon, margins: iconMargins })) }),
            /* @__PURE__ */ jsx27(ListItemText, { className: css.text, children: text }),
            iconEnd && /* @__PURE__ */ jsx27(ListItemIcon, { className: css.icon, children: /* @__PURE__ */ jsx27(Icon, { name: iconEnd, margins: iconEndMargins }) })
          ]
        })
      )
    }
  );
};
var useClasses16 = makeClasses((props) => ({
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
import { jsx as jsx28 } from "react/jsx-runtime";
import { createElement as createElement4 } from "react";
var Icon = (_a) => {
  var _b = _a, {
    className,
    color = "inherit",
    layers,
    margins,
    name,
    rotation,
    size,
    style,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "className",
    "color",
    "layers",
    "margins",
    "name",
    "rotation",
    "size",
    "style",
    "viewProps"
  ]);
  var _a2;
  const { css, cx } = useClasses17({
    hasLayers: !!(layers == null ? void 0 : layers.length),
    layerSize: size != null ? size : (_a2 = layers == null ? void 0 : layers[0]) == null ? void 0 : _a2.size,
    rotation
  });
  return /* @__PURE__ */ jsx28(View, __spreadProps(__spreadValues({ column: true, margins, className: cx(css.root, className) }, viewProps), { children: (layers == null ? void 0 : layers.length) ? layers.map((layer, i) => {
    var _a3, _b2;
    return /* @__PURE__ */ createElement4(
      MuiIcon,
      __spreadProps(__spreadValues({}, props), {
        key: `${layer.name}-${i}`,
        className: css.layer,
        style: {
          color: (_a3 = layer.color) != null ? _a3 : color,
          fontSize: (_b2 = layer.size) != null ? _b2 : size,
          transform: makeLayerTransform(layer)
        }
      }),
      Fmt.pascalToSnake(layer.name)
    );
  }) : name ? /* @__PURE__ */ jsx28(MuiIcon, __spreadProps(__spreadValues({}, props), { style: __spreadProps(__spreadValues({}, style), { color, fontSize: size }), children: Fmt.pascalToSnake(name) })) : "" }));
};
var defaultCssValue = (value) => {
  if (value === void 0) return "0";
  return typeof value === "number" ? `${value}px` : value;
};
var makeLayerTransform = ({ rotation, x, y }) => {
  const offsetX = defaultCssValue(x);
  const offsetY = defaultCssValue(y);
  const rotate = rotation !== void 0 ? ` rotate(${rotation}deg)` : "";
  return `translate(-50%, -50%) translate(${offsetX}, ${offsetY})${rotate}`;
};
var useClasses17 = makeClasses((props) => {
  const rootSize = !props.hasLayers ? void 0 : defaultCssValue(props.layerSize);
  return {
    layer: {
      left: "50%",
      position: "absolute",
      top: "50%"
    },
    root: {
      alignItems: props.hasLayers ? "center" : void 0,
      height: rootSize,
      justifyContent: "center",
      position: props.hasLayers ? "relative" : void 0,
      transform: props.rotation !== void 0 ? `rotate(${props.rotation}deg)` : void 0,
      transition: "all 200ms ease-in-out",
      width: rootSize
    }
  };
});

// trabecula/components/modals/confirm-modal.tsx
import { useState as useState10 } from "react";
import { jsx as jsx29, jsxs as jsxs16 } from "react/jsx-runtime";
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
  const [isLoading, setIsLoading] = useState10(false);
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
    /* @__PURE__ */ jsx29(Modal.Header, { children: /* @__PURE__ */ jsx29(Text, { preset: "title", children: headerText }) }),
    /* @__PURE__ */ jsxs16(Modal.Content, { align: "center", justify: "center", children: [
      /* @__PURE__ */ jsx29(Icon, { name: "Delete", color: colors.custom.red, size: "5rem" }),
      (subText == null ? void 0 : subText.length) > 0 ? /* @__PURE__ */ jsx29(Text, { fontSize: "1.3em", textAlign: "center", whiteSpace: "normal", children: subText }) : null,
      children
    ] }),
    /* @__PURE__ */ jsxs16(Modal.Footer, { children: [
      /* @__PURE__ */ jsx29(
        Button,
        {
          text: cancelText,
          icon: cancelIcon,
          color: cancelColor,
          onClick: handleCancel,
          disabled: isLoading
        }
      ),
      /* @__PURE__ */ jsx29(
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
import { useRef as useRef2 } from "react";
import Draggable from "react-draggable";
import { Dialog, Paper } from "@mui/material";
import { jsx as jsx30, jsxs as jsxs17 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses18({ height, maxHeight, maxWidth, width });
  const handleClose = (_, reason) => (reason === "backdropClick" ? closeOnBackdrop : true) && (onClose == null ? void 0 : onClose());
  return /* @__PURE__ */ jsxs17(
    Dialog,
    __spreadProps(__spreadValues({}, props), {
      scroll,
      PaperComponent: draggable ? DraggablePaper : void 0,
      open: visible,
      onClose: handleClose,
      className: cx(css.modal, className),
      children: [
        /* @__PURE__ */ jsx30(LoadingOverlay, { isLoading }),
        children
      ]
    })
  );
};
var DraggablePaper = (props) => {
  const { css, cx } = useDraggableClasses(null);
  const ref = useRef2(null);
  return /* @__PURE__ */ jsx30(Draggable, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: /* @__PURE__ */ jsx30(Paper, __spreadProps(__spreadValues({}, props), { ref, className: cx(props.className, css.draggable) })) });
};
var useClasses18 = makeClasses((props) => ({
  modal: {
    "& .MuiDialog-paper": {
      position: "relative",
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      height: props.height,
      width: props.width,
      background: colors.background,
      overflow: "hidden"
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
import { jsx as jsx31 } from "react/jsx-runtime";
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
  const { css } = useClasses19(null);
  padding = __spreadValues({ all: `${dividers ? "0.5rem" : "0.2rem"} 1rem` }, padding);
  return /* @__PURE__ */ jsx31(DialogContent, { dividers, className: css.content, children: /* @__PURE__ */ jsx31(
    View,
    __spreadProps(__spreadValues({
      column: true,
      flex: 1,
      spacing: "0.5rem",
      width: "100%",
      height: "100%",
      className,
      overflow,
      padding,
      position
    }, viewProps), {
      children
    })
  ) });
};
var useClasses19 = makeClasses({
  content: {
    display: "flex",
    padding: 0
  }
});

// trabecula/components/modals/modal/footer.tsx
import { DialogActions } from "@mui/material";
import { jsx as jsx32 } from "react/jsx-runtime";
var Footer = (_a) => {
  var _b = _a, { children, uniformWidth = "10rem" } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  return /* @__PURE__ */ jsx32(DialogActions, { children: /* @__PURE__ */ jsx32(
    UniformList,
    __spreadProps(__spreadValues({
      row: true,
      justify: "center",
      spacing: "0.5rem",
      width: "100%",
      uniformWidth
    }, props), {
      children
    })
  ) });
};

// trabecula/components/modals/modal/header.tsx
import { DialogTitle } from "@mui/material";
import { jsx as jsx33, jsxs as jsxs18 } from "react/jsx-runtime";
var Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode
}) => {
  const { css, cx } = useClasses20({ justify });
  return /* @__PURE__ */ jsx33(DialogTitle, { className: cx(css.root, className), children: /* @__PURE__ */ jsx33(
    ConditionalWrap,
    {
      condition: leftNode !== void 0 || rightNode !== void 0,
      wrap: (wrappedChildren) => /* @__PURE__ */ jsxs18(UniformList, { row: true, flex: 1, align: "center", children: [
        leftNode ? /* @__PURE__ */ jsx33(View, { row: true, align: "center", justify: "flex-start", children: leftNode }) : /* @__PURE__ */ jsx33(View, {}),
        wrappedChildren,
        rightNode ? /* @__PURE__ */ jsx33(View, { row: true, align: "center", justify: "flex-end", children: rightNode }) : /* @__PURE__ */ jsx33(View, {})
      ] }),
      children
    }
  ) });
};
var useClasses20 = makeClasses((props) => ({
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
import { LinearProgress } from "@mui/material";
import Color5 from "color";
import { jsx as jsx34, jsxs as jsxs19 } from "react/jsx-runtime";
var ProgressBar = Comp((props) => {
  var _a, _b, _c, _d;
  const minWidth = (props == null ? void 0 : props.minWidth) || "2em";
  const { css } = useClasses21(null);
  return /* @__PURE__ */ jsxs19(View, __spreadProps(__spreadValues({ row: true, flex: 1, align: "center", spacing: "1rem" }, props.viewProps), { children: [
    props.withText ? /* @__PURE__ */ jsxs19(View, { row: true, spacing: "0.5rem", children: [
      /* @__PURE__ */ jsx34(Text, { minWidth, textAlign: "center", children: props.numerator > -1 ? (_b = (_a = props.numeratorFormatter) == null ? void 0 : _a.call(props, props.numerator)) != null ? _b : props.numerator : "--" }),
      /* @__PURE__ */ jsx34(Text, { children: "/" }),
      /* @__PURE__ */ jsx34(Text, { minWidth, textAlign: "center", color: colors.custom.lightGrey, children: props.denominator > -1 ? (_d = (_c = props.denominatorFormatter) == null ? void 0 : _c.call(props, props.denominator)) != null ? _d : props.denominator : "--" })
    ] }) : null,
    /* @__PURE__ */ jsx34(
      LinearProgress,
      {
        variant: "determinate",
        value: (props.numerator || 0) / (props.denominator || 1) * 100,
        className: css.progressBar
      }
    )
  ] }));
});
var useClasses21 = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: Color5(colors.custom.blue).fade(0.5).string(),
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue
    }
  }
});

// trabecula/components/progress/circle.tsx
import { CircularProgress } from "@mui/material";
import Color6 from "color";
import { jsx as jsx35, jsxs as jsxs20 } from "react/jsx-runtime";
var ProgressCircle = Comp((props) => {
  const color = props.color || colors.custom.white;
  const { css } = useClasses22({
    bgColor: props.bgColor || Color6(color).fade(0.5).hex(),
    color
  });
  return /* @__PURE__ */ jsxs20(View, { column: true, position: "relative", justify: "center", align: "center", children: [
    /* @__PURE__ */ jsx35(View, { column: true, position: "absolute", children: props.children }),
    /* @__PURE__ */ jsx35(
      CircularProgress,
      {
        value: props.percent || 0,
        variant: "determinate",
        size: props.size,
        className: css.circle
      }
    ),
    /* @__PURE__ */ jsx35(View, { column: true, position: "absolute", children: /* @__PURE__ */ jsx35(
      CircularProgress,
      {
        value: 100,
        variant: "determinate",
        size: props.size,
        className: css.bgCircle
      }
    ) })
  ] });
});
var useClasses22 = makeClasses((props) => ({
  bgCircle: {
    zIndex: 1,
    "& circle": { color: props.bgColor }
  },
  circle: {
    zIndex: 10,
    "& circle": { color: props.color }
  }
}));

// trabecula/components/table/data-grid.tsx
import { useEffect as useEffect6, useMemo, useState as useState11 } from "react";
import { jsx as jsx36, jsxs as jsxs21 } from "react/jsx-runtime";
function DataGrid(rawProps) {
  const {
    alternatingBgColor = colors.foregroundCard,
    alternatingColors = true,
    className,
    columns,
    data,
    defaultTextPreset: rawDefaultTextPreset,
    emptyColor = colors.custom.lightBlue,
    emptyJustify = "center",
    emptyMessage = "No data available",
    expandColumnWidth = "5rem",
    expandableContent,
    getRowBgColor,
    hasPagination = false,
    hasResizableColumns = false,
    hasSearch = false,
    hasSorting = false,
    headerBorder = "1px solid #000",
    initialSort,
    isExpanded,
    isRowSelected,
    onRowClick,
    rowGap = "0.5rem",
    rowsPerPage = 15,
    selectedBgColor = colors.custom.blue,
    selectedTextColor = colors.custom.white,
    spacing = "0.3rem",
    textPreset = "default"
  } = rawProps;
  const defaultTextPreset = rawDefaultTextPreset != null ? rawDefaultTextPreset : textPreset;
  const [columnResize, setColumnResize] = useState11(null);
  const [columnWidths, setColumnWidths] = useState11(
    {}
  );
  const [expandedRows, setExpandedRows] = useState11(/* @__PURE__ */ new Set());
  const [page, setPage] = useState11(1);
  const [search, setSearch] = useState11("");
  const [sort, setSort] = useState11(initialSort != null ? initialSort : null);
  useEffect6(() => {
    if (isExpanded === false) setExpandedRows(/* @__PURE__ */ new Set());
  }, [isExpanded]);
  useEffect6(() => {
    if (!columnResize) return;
    const bodyCursor = document.body.style.cursor;
    const bodyUserSelect = document.body.style.userSelect;
    const handlePointerMove = (event) => {
      const width = clampDataGridColumnWidth(
        columnResize.startWidth + event.clientX - columnResize.startClientX,
        columnResize.minWidth,
        columnResize.maxWidth
      );
      setColumnWidths((prev) => __spreadProps(__spreadValues({}, prev), { [columnResize.key]: width }));
    };
    const handlePointerUp = () => setColumnResize(null);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    return () => {
      document.body.style.cursor = bodyCursor;
      document.body.style.userSelect = bodyUserSelect;
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, [columnResize]);
  useEffect6(() => {
    setPage(1);
  }, [data, search, sort]);
  const resizedColumns = useMemo(
    () => columns.map((column) => {
      const width = columnWidths[column.key];
      return width === void 0 ? column : __spreadProps(__spreadValues({}, column), { width: `${width}px` });
    }),
    [columns, columnWidths]
  );
  const filteredData = useMemo(() => {
    const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!searchTerms.length) return data;
    return data.filter((row) => {
      const rowSearchText = resizedColumns.filter((column) => column.searchable !== false).map((column) => getDataGridValueText(getDataGridColumnValue(row, column, "search"))).join(" ").toLowerCase();
      return searchTerms.every((term) => rowSearchText.includes(term));
    });
  }, [data, resizedColumns, search]);
  const sortedData = useMemo(() => {
    if (!hasSorting || !sort) return filteredData;
    const column = resizedColumns.find(({ key }) => key === sort.key);
    if (!column || column.sortable === false) return filteredData;
    return filteredData.map((row, index) => ({ index, row })).sort((a, b) => {
      const compared = compareDataGridValues(
        getDataGridColumnValue(a.row, column, "sort"),
        getDataGridColumnValue(b.row, column, "sort")
      );
      return compared === 0 ? a.index - b.index : sort.direction === "asc" ? compared : -compared;
    }).map(({ row }) => row);
  }, [filteredData, hasSorting, resizedColumns, sort]);
  const displayedData = hasPagination ? sortedData.slice((page - 1) * rowsPerPage, page * rowsPerPage) : sortedData;
  const pageCount = hasPagination ? Math.ceil(sortedData.length / rowsPerPage) : 1;
  const handleSort = (column) => {
    setSort((prev) => ({
      key: column.key,
      direction: (prev == null ? void 0 : prev.key) === column.key && prev.direction === "asc" ? "desc" : "asc"
    }));
  };
  const handleColumnResizeStart = (column, startWidth, startClientX) => {
    if (!startWidth) return;
    setColumnResize({
      key: column.key,
      maxWidth: column.maxWidth,
      minWidth: column.minWidth,
      startClientX,
      startWidth
    });
  };
  return !data.length ? /* @__PURE__ */ jsx36(View, { display: "flex", justify: emptyJustify, children: /* @__PURE__ */ jsx36(Text, { preset: textPreset, color: emptyColor, children: emptyMessage }) }) : /* @__PURE__ */ jsxs21(View, { column: true, spacing, width: "100%", children: [
    !hasSearch ? null : /* @__PURE__ */ jsxs21(View, { row: true, justify: "flex-end", align: "center", spacing: "0.5rem", width: "100%", children: [
      /* @__PURE__ */ jsx36(Text, { preset: textPreset, whiteSpace: "nowrap", children: "Search all columns:" }),
      /* @__PURE__ */ jsx36(Input, { dense: true, value: search, setValue: setSearch, height: "1.5rem", width: "16rem" })
    ] }),
    /* @__PURE__ */ jsx36(
      DataGridHeader,
      {
        columns: resizedColumns,
        expandableContent,
        expandColumnWidth,
        hasResizableColumns,
        hasSorting,
        headerBorder,
        onColumnResizeStart: handleColumnResizeStart,
        onSort: handleSort,
        rowGap,
        sort,
        textPreset
      }
    ),
    !displayedData.length ? /* @__PURE__ */ jsx36(View, { display: "flex", justify: emptyJustify, children: /* @__PURE__ */ jsx36(Text, { preset: textPreset, color: emptyColor, children: emptyMessage }) }) : /* @__PURE__ */ jsx36(View, { column: true, width: "100%", children: displayedData.map((row, index) => /* @__PURE__ */ jsx36(
      DataGridRow,
      {
        alternatingBgColor,
        alternatingColors,
        className,
        columns: resizedColumns,
        defaultTextPreset,
        expandableContent,
        expandedRows,
        expandColumnWidth,
        getRowBgColor,
        index,
        isRowSelected,
        onRowClick,
        row,
        rowGap,
        selectedBgColor,
        selectedTextColor,
        setExpandedRows,
        textPreset
      },
      index
    )) }),
    !hasPagination ? null : /* @__PURE__ */ jsx36(Pagination, { count: pageCount, onChange: setPage, page })
  ] });
}

// trabecula/components/table/data-grid.utils.ts
var getDataGridCellLayout = (width, minWidth, maxWidth) => {
  if (!width || width === "1fr") return { flex: 1, maxWidth, minWidth };
  if (typeof width === "string" && width.endsWith("fr")) {
    const flex = Number(width.replace("fr", ""));
    return { flex: Number.isFinite(flex) && flex > 0 ? flex : 1, maxWidth, minWidth };
  }
  return {
    flex: `0 0 ${typeof width === "number" ? `${width}px` : width}`,
    maxWidth: maxWidth != null ? maxWidth : width,
    minWidth: minWidth != null ? minWidth : width,
    width
  };
};
var clampDataGridColumnWidth = (width, minWidth, maxWidth) => {
  var _a;
  const minWidthPx = (_a = getDataGridPixelValue(minWidth)) != null ? _a : 40;
  const maxWidthPx = getDataGridPixelValue(maxWidth);
  return Math.min(Math.max(width, minWidthPx), maxWidthPx != null ? maxWidthPx : Number.MAX_SAFE_INTEGER);
};
var compareDataGridValues = (a, b) => {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (a instanceof Date || b instanceof Date) {
    const aTime = getTime(a);
    const bTime = getTime(b);
    if (Number.isFinite(aTime) && Number.isFinite(bTime)) return aTime - bTime;
  }
  if (typeof a === "number" && typeof b === "number") return a - b;
  if (typeof a === "boolean" && typeof b === "boolean") return Number(a) - Number(b);
  return String(a).localeCompare(String(b), void 0, { numeric: true, sensitivity: "base" });
};
var getDataGridColumnValue = (row, column, mode) => {
  if (mode === "search" && column.searchValue) return column.searchValue(row);
  if (mode === "sort" && column.sortValue) return column.sortValue(row);
  return row[column.key];
};
var getDataGridValueText = (value) => {
  if (value == null) return "";
  if (value instanceof Date) return value.toISOString();
  return String(value);
};
var getTime = (value) => {
  if (value instanceof Date) return value.getTime();
  if (typeof value === "boolean" || value == null) return NaN;
  return new Date(value).getTime();
};
var getDataGridPixelValue = (value) => {
  if (typeof value === "number") return value;
  if (typeof value !== "string" || !value.endsWith("px")) return void 0;
  const parsed = Number(value.replace("px", ""));
  return Number.isFinite(parsed) ? parsed : void 0;
};

// trabecula/components/table/data-grid-header.tsx
import {
  useRef as useRef3,
  useState as useState12
} from "react";
import { jsx as jsx37, jsxs as jsxs22 } from "react/jsx-runtime";
var DataGridHeader = ({
  columns,
  expandableContent,
  expandColumnWidth,
  headerBorder,
  hasResizableColumns,
  hasSorting,
  onColumnResizeStart,
  onSort,
  rowGap,
  sort,
  textPreset
}) => {
  const { css, cx } = useClasses23(null);
  const suppressSortClickRef = useRef3(false);
  const [hoveredColumnKey, setHoveredColumnKey] = useState12(null);
  return /* @__PURE__ */ jsxs22(
    View,
    {
      row: true,
      align: "flex-start",
      spacing: rowGap,
      borders: { bottom: headerBorder },
      padding: { all: "0 0.3rem 0.3rem" },
      minWidth: 0,
      width: "100%",
      children: [
        columns.map((column, columnIndex) => {
          var _a;
          const isSortable = hasSorting && column.sortable !== false;
          const isResizable = hasResizableColumns && column.resizable !== false;
          const isSorted = (sort == null ? void 0 : sort.key) === column.key;
          const isHovered = hoveredColumnKey === column.key;
          const handleHeaderClick = () => {
            if (suppressSortClickRef.current) {
              suppressSortClickRef.current = false;
              return;
            }
            if (isSortable) onSort(column);
          };
          const handleResizeClick = (event) => {
            event.preventDefault();
            event.stopPropagation();
            suppressSortClickRef.current = false;
          };
          const handleResizeStart = (event) => {
            var _a2, _b;
            event.preventDefault();
            event.stopPropagation();
            suppressSortClickRef.current = true;
            onColumnResizeStart(
              column,
              (_b = (_a2 = event.currentTarget.parentElement) == null ? void 0 : _a2.offsetWidth) != null ? _b : 0,
              event.clientX
            );
          };
          return /* @__PURE__ */ jsxs22(
            View,
            __spreadProps(__spreadValues({
              row: true,
              align: "center",
              className: cx(css.cell, column.wrapText === false && css.noWrapCell),
              cursor: isSortable ? "pointer" : void 0,
              minWidth: 0,
              overflow: "hidden",
              position: "relative",
              spacing: "0.2rem",
              title: typeof column.header === "string" ? column.header : void 0,
              onClick: handleHeaderClick,
              onMouseEnter: () => isSortable && setHoveredColumnKey(column.key),
              onMouseLeave: () => isSortable && setHoveredColumnKey(null)
            }, getDataGridCellLayout(column.width, column.minWidth, column.maxWidth)), {
              children: [
                /* @__PURE__ */ jsx37(
                  Text,
                  {
                    preset: (_a = column.textPreset) != null ? _a : textPreset,
                    textAlign: column.align || "left",
                    overflow: "hidden",
                    children: column.header
                  }
                ),
                !isSortable ? null : /* @__PURE__ */ jsx37(
                  Icon,
                  {
                    name: isSorted && (sort == null ? void 0 : sort.direction) === "asc" ? "ArrowDropUp" : "ArrowDropDown",
                    color: colors.custom.darkGrey,
                    size: "1rem",
                    style: { opacity: isSorted ? 1 : isHovered ? 0.35 : 0 }
                  }
                ),
                !isResizable ? null : /* @__PURE__ */ jsx37(
                  View,
                  {
                    className: css.resizeHandle,
                    cursor: "col-resize",
                    height: "100%",
                    position: "absolute",
                    onClick: handleResizeClick,
                    onPointerDown: handleResizeStart
                  }
                )
              ]
            }),
            `${column.key}-${columnIndex}`
          );
        }),
        expandableContent ? /* @__PURE__ */ jsx37(View, __spreadProps(__spreadValues({ minWidth: 0, overflow: "hidden" }, getDataGridCellLayout(expandColumnWidth)), { children: /* @__PURE__ */ jsx37(Text, { preset: textPreset }) })) : null
      ]
    }
  );
};
var useClasses23 = makeClasses({
  cell: {
    "& > *": {
      maxWidth: "100%",
      minWidth: "0 !important"
    }
  },
  resizeHandle: {
    bottom: 0,
    right: 0,
    top: 0,
    width: "0.4rem",
    "&:hover": {
      background: colors.custom.blue
    }
  },
  noWrapCell: {
    "& .MuiTypography-root": {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%"
    }
  }
});

// trabecula/components/table/data-grid-row.tsx
import React from "react";
import { Collapse } from "@mui/material";
import { jsx as jsx38, jsxs as jsxs23 } from "react/jsx-runtime";
var DataGridRow = ({
  alternatingBgColor,
  alternatingColors,
  className,
  columns,
  defaultTextPreset,
  expandableContent,
  expandedRows,
  expandColumnWidth,
  getRowBgColor,
  index,
  isRowSelected,
  onRowClick,
  row,
  rowGap,
  selectedBgColor,
  selectedTextColor,
  setExpandedRows,
  textPreset
}) => {
  var _a;
  const { css, cx } = useClasses24(null);
  const isExpanded = expandedRows.has(index);
  const isSelected = (_a = isRowSelected == null ? void 0 : isRowSelected(row, index)) != null ? _a : false;
  const getBackgroundColor = () => {
    var _a2;
    return (_a2 = getRowBgColor == null ? void 0 : getRowBgColor(row, index)) != null ? _a2 : isSelected ? selectedBgColor : alternatingColors && index % 2 === 1 ? alternatingBgColor : "transparent";
  };
  const handleRowExpand = () => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(index)) newExpandedRows.delete(index);
    else newExpandedRows.add(index);
    setExpandedRows(newExpandedRows);
  };
  const renderCell = (column) => {
    var _a2;
    const textPresetForColumn = (_a2 = column.textPreset) != null ? _a2 : defaultTextPreset;
    if (column.render) {
      const rendered = column.render({
        index,
        isExpanded,
        isSelected,
        row,
        value: row[column.key]
      });
      if (typeof rendered !== "string") return rendered;
      return /* @__PURE__ */ jsx38(
        Text,
        {
          preset: textPresetForColumn,
          textAlign: column.align || "left",
          color: isSelected ? selectedTextColor : void 0,
          overflow: "hidden",
          whiteSpace: column.wrapText === false ? "nowrap" : void 0,
          textOverflow: column.wrapText === false ? "ellipsis" : void 0,
          overflowWrap: column.wrapText !== false ? "break-word" : void 0,
          wordBreak: column.wrapText !== false ? "break-word" : void 0,
          children: rendered
        }
      );
    }
    return /* @__PURE__ */ jsx38(
      Text,
      {
        preset: textPresetForColumn,
        textAlign: column.align || "left",
        color: isSelected ? selectedTextColor : void 0,
        overflow: "hidden",
        whiteSpace: column.wrapText === false ? "nowrap" : void 0,
        textOverflow: column.wrapText === false ? "ellipsis" : void 0,
        overflowWrap: column.wrapText !== false ? "break-word" : void 0,
        wordBreak: column.wrapText !== false ? "break-word" : void 0,
        children: getDataGridValueText(getDataGridColumnValue(row, column, "search")) || "--"
      }
    );
  };
  return /* @__PURE__ */ jsxs23(React.Fragment, { children: [
    /* @__PURE__ */ jsxs23(
      View,
      {
        row: true,
        align: "start",
        bgColor: getBackgroundColor(),
        cursor: onRowClick ? "pointer" : "default",
        padding: { all: "0.3rem" },
        borderRadiuses: { all: isExpanded ? "0.3rem 0.3rem 0 0" : "0.3rem" },
        spacing: rowGap,
        minWidth: 0,
        width: "100%",
        onClick: () => onRowClick == null ? void 0 : onRowClick(row, index),
        className,
        children: [
          columns.map((column, columnIndex) => {
            const title = column.searchable === false ? void 0 : getDataGridValueText(getDataGridColumnValue(row, column, "search")).trim() || void 0;
            return /* @__PURE__ */ jsx38(
              View,
              __spreadProps(__spreadValues({
                className: cx(css.cell, column.wrapText === false && css.noWrapCell),
                minHeight: "fit-content",
                minWidth: 0,
                overflow: "hidden",
                title
              }, getDataGridCellLayout(column.width, column.minWidth, column.maxWidth)), {
                children: renderCell(column)
              }),
              `${column.key}-${columnIndex}`
            );
          }),
          expandableContent ? /* @__PURE__ */ jsx38(
            View,
            __spreadProps(__spreadValues({
              display: "flex",
              justify: "center",
              align: "flex-start",
              height: "100%"
            }, getDataGridCellLayout(expandColumnWidth)), {
              children: /* @__PURE__ */ jsx38(
                Button,
                {
                  type: "link",
                  text: /* @__PURE__ */ jsx38(Text, { preset: textPreset, color: isSelected ? selectedTextColor : void 0, children: isExpanded ? "Close" : "Open" }),
                  iconRight: isExpanded ? "ArrowDropUp" : "ArrowDropDown",
                  onClick: (e) => {
                    e.stopPropagation();
                    handleRowExpand();
                  },
                  textColor: colors.custom.lightBlue,
                  underline: "hover"
                }
              )
            })
          ) : null
        ]
      }
    ),
    expandableContent ? /* @__PURE__ */ jsx38(Collapse, { in: isExpanded, sx: { margin: 0, padding: 0 }, timeout: 300, easing: "smooth", children: /* @__PURE__ */ jsx38(
      View,
      {
        padding: { all: 0 },
        bgColor: getBackgroundColor(),
        borderRadiuses: { all: "0 0 0.3rem 0.3rem" },
        children: expandableContent(row, index)
      }
    ) }) : null
  ] });
};
var useClasses24 = makeClasses({
  cell: {
    "& > *": {
      maxWidth: "100%",
      minWidth: "0 !important"
    }
  },
  noWrapCell: {
    "& .MuiButton-root": {
      maxWidth: "100%",
      minWidth: "0 !important",
      overflow: "hidden"
    },
    "& .MuiButton-root > *": {
      maxWidth: "100%",
      minWidth: "0 !important"
    },
    "& .MuiTypography-root": {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%"
    }
  }
});

// trabecula/components/table/pagination.tsx
import { useState as useState13 } from "react";
import {
  Pagination as PaginationBase,
  PaginationItem
} from "@mui/material";
import { jsx as jsx39, jsxs as jsxs24 } from "react/jsx-runtime";
var Pagination = Comp(
  (_a) => {
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
    const { css, cx } = useClasses25(null);
    const [isJumpModalOpen, setIsJumpModalOpen] = useState13(false);
    const [jumpPage, setJumpPage] = useState13(null);
    const hasError = !Number.isInteger(jumpPage) || jumpPage < 1 || jumpPage > count;
    const handleChange = (_, page) => onChange(page);
    const handleJump = () => {
      if (hasError) return;
      setIsJumpModalOpen(false);
      onChange(jumpPage);
    };
    const handleJumpModalOpen = () => {
      var _a2;
      const page = (_a2 = props.page) != null ? _a2 : null;
      setJumpPage(page);
      setIsJumpModalOpen(true);
    };
    const handleLastPageClick = (event, item) => {
      var _a2;
      if (onFullLoad) event.preventDefault(), onFullLoad();
      else (_a2 = item.onClick) == null ? void 0 : _a2.call(item, event);
    };
    return /* @__PURE__ */ jsxs24(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.root, viewProps == null ? void 0 : viewProps.className), children: [
      /* @__PURE__ */ jsxs24(View, { position: "relative", overflow: "hidden", children: [
        /* @__PURE__ */ jsx39(LoadingOverlay, { isLoading }),
        /* @__PURE__ */ jsx39(
          PaginationBase,
          __spreadValues({
            onChange: handleChange,
            showFirstButton: true,
            showLastButton: true,
            siblingCount: 4,
            boundaryCount: 2,
            count,
            className: cx(css.pagination, className),
            renderItem: (item) => {
              const isEllipsis = ["start-ellipsis", "end-ellipsis"].includes(item.type);
              return /* @__PURE__ */ jsx39(
                PaginationItem,
                __spreadProps(__spreadValues({}, item), {
                  page: isEllipsis ? "..." : item.page,
                  type: isEllipsis ? "page" : item.type,
                  disabled: isEllipsis ? false : item.disabled,
                  onClick: isEllipsis ? handleJumpModalOpen : item.type === "last" ? (e) => handleLastPageClick(e, item) : item.onClick
                })
              );
            }
          }, props)
        )
      ] }),
      isJumpModalOpen && /* @__PURE__ */ jsxs24(Modal.Container, { onClose: () => setIsJumpModalOpen(false), width: "24rem", children: [
        /* @__PURE__ */ jsx39(Modal.Header, { children: /* @__PURE__ */ jsx39(Text, { preset: "title", children: "Jump to Page" }) }),
        /* @__PURE__ */ jsx39(Modal.Content, { row: true, dividers: false, justify: "center", children: /* @__PURE__ */ jsx39(
          NumInput,
          {
            placeholder: "Page",
            value: jumpPage,
            setValue: setJumpPage,
            minValue: 1,
            maxValue: count,
            error: hasError,
            helperText: `Max: ${count}`,
            autoFocus: true,
            textAlign: "center",
            width: "6rem",
            dense: true
          }
        ) }),
        /* @__PURE__ */ jsxs24(Modal.Footer, { uniformWidth: "7rem", children: [
          /* @__PURE__ */ jsx39(
            Button,
            {
              text: "Cancel",
              icon: "Close",
              onClick: () => setIsJumpModalOpen(false),
              color: colors.foregroundCard
            }
          ),
          /* @__PURE__ */ jsx39(
            Button,
            {
              text: "Jump",
              icon: "Send",
              onClick: handleJump,
              disabled: !Number.isInteger(jumpPage) || jumpPage < 1 || jumpPage > count,
              color: colors.custom.blue
            }
          )
        ] })
      ] })
    ] }));
  }
);
var useClasses25 = makeClasses({
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
    width: "100%",
    zIndex: 100
  }
});

// trabecula/components/table/table.tsx
import { useMemo as useMemo2, useState as useState14 } from "react";
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
import { Fragment as Fragment4, jsx as jsx40, jsxs as jsxs25 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses26(null);
  const [page, setPage] = useState14(0);
  const [rowsPerPage, setRowsPerPage] = useState14(rowCountOptions[0]);
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const displayedRows = useMemo2(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, rows]
  );
  const emptyRows = rowsPerPage - displayedRows.length;
  return /* @__PURE__ */ jsxs25(Fragment4, { children: [
    /* @__PURE__ */ jsx40(TableContainer, { component: Paper2, className, children: /* @__PURE__ */ jsxs25(MuiTable, { size: "small", children: [
      /* @__PURE__ */ jsx40(TableHead, { children: /* @__PURE__ */ jsx40(TableRow, { className: css.tableHeader, children: columns.map((column, i) => /* @__PURE__ */ jsx40(TableCell, { className: css.tableHeaderCell, children: column.header }, `${i}-${column.header}`)) }) }),
      /* @__PURE__ */ jsxs25(TableBody, { children: [
        displayedRows.map((row, rowKey) => /* @__PURE__ */ jsx40(TableRow, { className: css.tableRowAlt, children: columns.map((column, cellKey) => /* @__PURE__ */ jsx40(
          TableCellTrunc,
          {
            value: column.valueFunc(row),
            wrap: column.wrap,
            className: column.className
          },
          `${rowKey}-${cellKey}`
        )) }, `displayed-${rowKey}`)),
        hasEmptyRows && emptyRows > 0 && /* @__PURE__ */ jsx40(
          TableRow,
          {
            className: css.tableRowAlt,
            style: { height: MUI_TABLE_ROW_HEIGHT * emptyRows },
            children: /* @__PURE__ */ jsx40(TableCell, { colSpan: columns.length })
          }
        )
      ] })
    ] }) }),
    hasPagination && /* @__PURE__ */ jsx40(
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
  const { css, cx } = useClasses26(null);
  return /* @__PURE__ */ jsx40(TableCell, { className: cx(css.tableCell, className), title: String(value), children: wrap ? /* @__PURE__ */ jsx40("span", { className: css.wrapped, children: value }) : value });
};
var useClasses26 = makeClasses({
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
import { jsx as jsx41 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx41(View, __spreadProps(__spreadValues({ row: true, justify: "center", align: "center", flex: 1 }, viewProps), { children: /* @__PURE__ */ jsx41(Text, __spreadProps(__spreadValues({}, props), { color, children: text })) }));
};

// trabecula/components/text/date-detail.tsx
import { jsx as jsx42 } from "react/jsx-runtime";
var DateDetail = (props) => {
  var _a;
  return /* @__PURE__ */ jsx42(
    Detail,
    __spreadProps(__spreadValues({}, props), {
      value: ((_a = props.value) == null ? void 0 : _a.length) ? dayjs(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null
    })
  );
};

// trabecula/components/text/detail.tsx
import { jsx as jsx43, jsxs as jsxs26 } from "react/jsx-runtime";
var Detail = (_a) => {
  var _b = _a, {
    emptyValueText = "--",
    label,
    labelProps = {},
    overflow = "hidden",
    row = false,
    tooltip,
    value,
    valueProps,
    whiteSpace = "nowrap",
    withTooltip
  } = _b, props = __objRest(_b, [
    "emptyValueText",
    "label",
    "labelProps",
    "overflow",
    "row",
    "tooltip",
    "value",
    "valueProps",
    "whiteSpace",
    "withTooltip"
  ]);
  return /* @__PURE__ */ jsxs26(View, __spreadProps(__spreadValues({ column: !row, row, spacing: row ? "0.5rem" : null }, props), { children: [
    ["number", "string"].includes(typeof label) ? /* @__PURE__ */ jsx43(Text, __spreadProps(__spreadValues({ preset: "detail-label", fontSize: "0.9em", fontWeight: 600 }, labelProps), { children: label })) : label,
    !value || ["number", "string"].includes(typeof value) ? /* @__PURE__ */ jsx43(
      Text,
      __spreadProps(__spreadValues({
        tooltip: tooltip != null ? tooltip : withTooltip ? value : void 0,
        whiteSpace,
        overflow
      }, valueProps), {
        children: value || emptyValueText
      })
    ) : value
  ] }));
};

// trabecula/components/text/link.tsx
import { Link as MuiLink } from "@mui/material";
import { jsx as jsx44 } from "react/jsx-runtime";
var Link = (_a) => {
  var _b = _a, {
    bold = false,
    children,
    className,
    color = colors.custom.blue,
    fontSize = "1em",
    fontWeight = 400,
    rel = "noopener",
    target = "_blank",
    underline = "hover"
  } = _b, props = __objRest(_b, [
    "bold",
    "children",
    "className",
    "color",
    "fontSize",
    "fontWeight",
    "rel",
    "target",
    "underline"
  ]);
  const { css, cx } = useClasses27({ bold, color });
  return /* @__PURE__ */ jsx44(
    MuiLink,
    __spreadProps(__spreadValues({
      fontSize,
      fontWeight,
      rel,
      target,
      underline
    }, props), {
      className: cx(css.link, className),
      children
    })
  );
};
var useClasses27 = makeClasses(({ bold, color }) => ({
  link: {
    color,
    fontWeight: bold ? 500 : 400
  }
}));

// trabecula/components/text/text.tsx
import { Typography } from "@mui/material";
import { jsx as jsx45 } from "react/jsx-runtime";
var PRESETS = {
  default: {
    fontSize: "1em",
    fontWeight: 500,
    overflow: "hidden"
  },
  "detail-label": {
    color: colors.custom.lightBlue,
    fontWeight: 500,
    whiteSpace: "nowrap"
  },
  "label-glow": {
    color: colors.custom.white,
    fontWeight: 400,
    fontSize: "0.8em",
    textAlign: "center",
    textShadow: `0 0 10px ${colors.custom.blue}`,
    overflow: "visible"
  },
  "sub-text": {
    color: colors.custom.grey,
    fontWeight: 400,
    fontSize: "0.7em",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  title: {
    color: colors.custom.white,
    fontSize: "1.1em",
    fontWeight: 600,
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
};
var Text = (_a) => {
  var _b = _a, {
    bold = false,
    children,
    className,
    color,
    component = "span",
    fontFamily = "Roboto",
    fontSize,
    fontWeight,
    italic = false,
    lineHeight,
    opacity,
    overflow,
    overflowWrap,
    preset = "default",
    tooltip,
    tooltipProps,
    textOverflow,
    whiteSpace = "nowrap",
    wordBreak
  } = _b, props = __objRest(_b, [
    "bold",
    "children",
    "className",
    "color",
    "component",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "italic",
    "lineHeight",
    "opacity",
    "overflow",
    "overflowWrap",
    "preset",
    "tooltip",
    "tooltipProps",
    "textOverflow",
    "whiteSpace",
    "wordBreak"
  ]);
  const { css, cx } = useClasses28({
    bold,
    color,
    fontSize,
    fontWeight,
    italic,
    lineHeight,
    opacity,
    overflow,
    overflowWrap,
    preset,
    textOverflow,
    whiteSpace,
    wordBreak
  });
  return /* @__PURE__ */ jsx45(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ jsx45(
    Typography,
    __spreadProps(__spreadValues({}, props), {
      component,
      fontFamily,
      className: cx(css.root, className),
      children
    })
  ) });
};
Text.Inline = (props) => /* @__PURE__ */ jsx45(Text, __spreadValues({ display: "inline" }, props));
var useClasses28 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const preset = PRESETS[props.preset];
  return {
    root: __spreadProps(__spreadValues({}, preset), {
      color: (_a = props.color) != null ? _a : preset == null ? void 0 : preset.color,
      fontSize: (_b = props.fontSize) != null ? _b : preset == null ? void 0 : preset.fontSize,
      fontWeight: props.bold ? 600 : (_c = props.fontWeight) != null ? _c : preset == null ? void 0 : preset.fontWeight,
      fontStyle: props.italic ? "italic" : void 0,
      lineHeight: (_d = props.lineHeight) != null ? _d : 1.2,
      opacity: props.opacity,
      overflow: (_e = props.overflow) != null ? _e : preset == null ? void 0 : preset.overflow,
      overflowWrap: props.overflowWrap,
      textOverflow: (_f = props.textOverflow) != null ? _f : "ellipsis",
      whiteSpace: (_g = props.whiteSpace) != null ? _g : preset == null ? void 0 : preset.whiteSpace,
      wordBreak: props.wordBreak
    })
  };
});

// trabecula/components/text/truncated-text.tsx
import { jsx as jsx46, jsxs as jsxs27 } from "react/jsx-runtime";
var getTextTruncation = (text, maxLength, wordBoundaryRatio = 0.8) => {
  if (text.length <= maxLength) {
    return {
      isTruncated: false,
      preview: text,
      remainder: "",
      truncationIndex: text.length
    };
  }
  const truncatedText = text.substring(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");
  const truncationIndex = lastSpaceIndex > maxLength * wordBoundaryRatio ? lastSpaceIndex : maxLength;
  return {
    isTruncated: true,
    preview: text.substring(0, truncationIndex),
    remainder: text.substring(truncationIndex).trim(),
    truncationIndex
  };
};
var TruncatedText = (_a) => {
  var _b = _a, {
    expanded = false,
    maxLength,
    text,
    ellipsis = "...",
    lineClamp = 1,
    wordBoundaryRatio,
    display,
    overflow,
    overflowWrap,
    sx,
    textOverflow,
    wordBreak
  } = _b, textProps = __objRest(_b, [
    "expanded",
    "maxLength",
    "text",
    "ellipsis",
    "lineClamp",
    "wordBoundaryRatio",
    "display",
    "overflow",
    "overflowWrap",
    "sx",
    "textOverflow",
    "wordBreak"
  ]);
  const { isTruncated, preview } = getTextTruncation(text, maxLength, wordBoundaryRatio);
  const shouldClamp = lineClamp > 0;
  return /* @__PURE__ */ jsxs27(
    Text,
    __spreadProps(__spreadValues({
      display: display != null ? display : shouldClamp ? "-webkit-box" : void 0,
      overflow: overflow != null ? overflow : shouldClamp ? "hidden" : void 0,
      overflowWrap: overflowWrap != null ? overflowWrap : "break-word",
      textOverflow: textOverflow != null ? textOverflow : shouldClamp ? "ellipsis" : void 0,
      wordBreak: wordBreak != null ? wordBreak : "break-word",
      sx: shouldClamp ? __spreadValues({
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: lineClamp
      }, sx) : sx
    }, textProps), {
      children: [
        preview,
        !expanded && isTruncated ? ellipsis : null
      ]
    })
  );
};
TruncatedText.Remainder = (_a) => {
  var _b = _a, {
    maxLength,
    text,
    wordBoundaryRatio
  } = _b, textProps = __objRest(_b, [
    "maxLength",
    "text",
    "wordBoundaryRatio"
  ]);
  const { isTruncated, remainder } = getTextTruncation(text, maxLength, wordBoundaryRatio);
  if (!isTruncated) return null;
  return /* @__PURE__ */ jsx46(Text, __spreadProps(__spreadValues({}, textProps), { children: remainder }));
};

// trabecula/components/toggles/accordion.tsx
import { useState as useState15 } from "react";
import {
  Accordion as MuiAccordion
} from "@mui/material";
import { jsx as jsx47, jsxs as jsxs28 } from "react/jsx-runtime";
var Accordion = (rawProps) => {
  const _a = rawProps, {
    buttonProps = {},
    borderColor,
    children,
    className,
    color = "transparent",
    contentPadding,
    dense = false,
    expanded,
    fullWidth = false,
    header,
    headerBgColor,
    headerBorderMode = "visibleBorder",
    headerBorderColor,
    headerButton,
    headerPadding,
    isExpanded,
    isLoading = false,
    onToggle,
    setExpanded,
    showBorder = true,
    showExpandToggle = true,
    title,
    titleProps = {},
    toggleButtonProps = {},
    width
  } = _a, props = __objRest(_a, [
    "buttonProps",
    "borderColor",
    "children",
    "className",
    "color",
    "contentPadding",
    "dense",
    "expanded",
    "fullWidth",
    "header",
    "headerBgColor",
    "headerBorderMode",
    "headerBorderColor",
    "headerButton",
    "headerPadding",
    "isExpanded",
    "isLoading",
    "onToggle",
    "setExpanded",
    "showBorder",
    "showExpandToggle",
    "title",
    "titleProps",
    "toggleButtonProps",
    "width"
  ]);
  const [internalExpanded, setInternalExpanded] = useState15(expanded != null ? expanded : false);
  const effectiveExpanded = isExpanded != null ? isExpanded : internalExpanded;
  const contentExpanded = showExpandToggle ? effectiveExpanded : true;
  const { css, cx } = useClasses29({
    borderColor,
    contentPadding,
    contentExpanded,
    dense,
    fullWidth,
    headerBgColor,
    headerBorderMode,
    headerBorderColor,
    headerPadding,
    isLoading,
    showBorder,
    showExpandToggle,
    width
  });
  const handleToggle = () => {
    onToggle == null ? void 0 : onToggle();
    setInternalExpanded(!effectiveExpanded);
    setExpanded == null ? void 0 : setExpanded(!effectiveExpanded);
  };
  const hasHeaderWrapper = title !== void 0 || headerBgColor !== void 0 || headerBorderColor !== void 0 || headerPadding !== void 0;
  const renderHeader = () => {
    var _a2, _b;
    if (title !== void 0) {
      return /* @__PURE__ */ jsxs28(View, { row: true, align: "center", justify: "space-between", width: "100%", children: [
        typeof title === "string" ? /* @__PURE__ */ jsx47(Text, __spreadProps(__spreadValues({}, titleProps), { children: title })) : title,
        /* @__PURE__ */ jsxs28(View, { row: true, align: "center", spacing: "0.6rem", children: [
          headerButton,
          showExpandToggle ? /* @__PURE__ */ jsx47(
            Button,
            __spreadValues({
              type: "link",
              text: contentExpanded ? "Minimize" : "Expand",
              iconRight: contentExpanded ? "ArrowDropUp" : "ArrowDropDown",
              iconSize: "1.3rem",
              onClick: handleToggle
            }, toggleButtonProps)
          ) : null
        ] })
      ] });
    }
    return /* @__PURE__ */ jsx47(
      Button,
      __spreadValues({
        text: header,
        endNode: showExpandToggle ? /* @__PURE__ */ jsx47(
          Icon,
          {
            name: "ExpandMore",
            color: (_b = (_a2 = buttonProps.iconProps) == null ? void 0 : _a2.color) != null ? _b : buttonProps.textColor,
            rotation: contentExpanded ? 180 : 0,
            size: buttonProps.iconSize
          }
        ) : void 0,
        onClick: handleToggle,
        color,
        width: "100%",
        justify: "space-between",
        className: css.button
      }, buttonProps)
    );
  };
  return /* @__PURE__ */ jsxs28(
    MuiAccordion,
    __spreadProps(__spreadValues({}, props), {
      expanded: contentExpanded,
      TransitionProps: { unmountOnExit: true },
      disableGutters: true,
      className: cx(css.accordion, className),
      children: [
        hasHeaderWrapper ? /* @__PURE__ */ jsx47(View, { className: css.header, children: renderHeader() }) : renderHeader(),
        /* @__PURE__ */ jsxs28(View, { column: true, className: css.content, children: [
          /* @__PURE__ */ jsx47(LoadingOverlay, { isLoading }),
          children
        ] })
      ]
    })
  );
};
var shouldShowHeaderBorder = (props) => {
  if (!props.headerBorderColor) return false;
  if (props.headerBorderMode === "always") return true;
  if (props.headerBorderMode === "expanded") return props.contentExpanded;
  return props.showExpandToggle ? props.showBorder : true;
};
var useClasses29 = makeClasses((props) => {
  var _a;
  return {
    accordion: {
      margin: 0,
      padding: 0,
      width: (_a = props.width) != null ? _a : props.fullWidth ? "100%" : "auto",
      background: "transparent",
      border: props.borderColor && props.showBorder ? `1px solid ${props.borderColor}` : void 0,
      borderRadius: props.borderColor && props.showBorder ? "0.3rem" : void 0,
      boxShadow: "none",
      overflow: props.borderColor && props.showBorder ? "hidden" : void 0,
      "& button": {
        boxShadow: "none"
      },
      "&:before": {
        display: "none"
      }
    },
    button: {
      justifyContent: "space-between",
      borderBottomLeftRadius: props.contentExpanded ? 0 : void 0,
      borderBottomRightRadius: props.contentExpanded ? 0 : void 0,
      padding: props.dense ? "0.2rem 0.6rem" : "0.5rem 1rem",
      fontSize: "1em",
      textTransform: "capitalize"
    },
    content: {
      padding: props.contentPadding,
      position: props.isLoading ? "relative" : void 0
    },
    header: {
      background: props.headerBgColor,
      borderBottom: shouldShowHeaderBorder(props) ? `1px solid ${props.headerBorderColor}` : void 0,
      padding: props.headerPadding
    }
  };
});

// trabecula/components/toggles/accordion-group.tsx
import { createContext, useContext, useEffect as useEffect7, useMemo as useMemo3, useState as useState16 } from "react";
import { jsx as jsx48 } from "react/jsx-runtime";
var AccordionGroupContext = createContext(null);
var AccordionGroup = ({
  children,
  defaultExpanded = true,
  sectionIds
}) => {
  const [expandedSections, setExpandedSections] = useState16(
    () => getInitialExpandedSections(sectionIds, defaultExpanded)
  );
  useEffect7(() => {
    setExpandedSections((prev) => {
      const next = __spreadValues({}, prev);
      let hasChanged = false;
      sectionIds.forEach((sectionId) => {
        if (next[sectionId] !== void 0) return;
        next[sectionId] = defaultExpanded;
        hasChanged = true;
      });
      return hasChanged ? next : prev;
    });
  }, [defaultExpanded, sectionIds]);
  const allExpanded = sectionIds.every((sectionId) => expandedSections[sectionId]);
  const value = useMemo3(
    () => ({
      allExpanded,
      expandedSections,
      setAllExpanded: (expanded) => {
        setExpandedSections((prev) => {
          const next = __spreadValues({}, prev);
          sectionIds.forEach((sectionId) => {
            next[sectionId] = expanded;
          });
          return next;
        });
      },
      setExpanded: (sectionId, expanded) => {
        setExpandedSections((prev) => __spreadProps(__spreadValues({}, prev), {
          [sectionId]: expanded
        }));
      }
    }),
    [allExpanded, expandedSections, sectionIds]
  );
  return /* @__PURE__ */ jsx48(AccordionGroupContext.Provider, { value, children });
};
var useAccordionGroup = () => {
  const { allExpanded, setAllExpanded } = useAccordionGroupContext();
  return {
    allExpanded,
    setAllExpanded,
    toggleAll: () => setAllExpanded(!allExpanded)
  };
};
var useAccordionGroupSection = (sectionId) => {
  var _a;
  const { expandedSections, setExpanded } = useAccordionGroupContext();
  const isExpanded = (_a = expandedSections[sectionId]) != null ? _a : true;
  return {
    isExpanded,
    setExpanded: (expanded) => setExpanded(sectionId, expanded)
  };
};
var useAccordionGroupContext = () => {
  const context = useContext(AccordionGroupContext);
  if (!context) {
    throw new Error("AccordionGroup hooks must be used within an AccordionGroup");
  }
  return context;
};
var getInitialExpandedSections = (sectionIds, defaultExpanded) => {
  return sectionIds.reduce((acc, sectionId) => {
    acc[sectionId] = defaultExpanded;
    return acc;
  }, {});
};

// trabecula/components/toggles/checkbox.tsx
import { Checkbox as MuiCheckbox, FormControlLabel as FormControlLabel2 } from "@mui/material";
import Color7 from "color";
import { jsx as jsx49 } from "react/jsx-runtime";
var Checkbox = ({
  center,
  checked,
  checkedIcon,
  className,
  color = colors.custom.blue,
  disabled,
  flex = 1,
  indeterminate,
  indeterminateColor,
  icon,
  label,
  labelProps,
  margins = { all: 0 },
  noHover = false,
  padding = { all: "0.3rem" },
  setChecked,
  stateIcons,
  ternary,
  ternaryColor,
  ternaryIcon,
  whiteSpace = "nowrap",
  width = "100%"
}) => {
  var _a, _b, _c;
  const { css, cx } = useClasses30({
    center,
    color: (ternary != null ? ternary : indeterminate) ? ternaryColor || indeterminateColor || color : color,
    disabled,
    flex,
    margins,
    noHover,
    padding,
    whiteSpace,
    width
  });
  const toggleChecked = () => {
    if (disabled) return;
    if (ternary === void 0) return setChecked(!checked);
    if (ternary) setChecked(true, false);
    else if (checked) setChecked(false, false);
    else setChecked(false, true);
  };
  const labelNode = typeof label === "string" && labelProps ? /* @__PURE__ */ jsx49(Text, __spreadProps(__spreadValues({}, labelProps), { children: label })) : label;
  return /* @__PURE__ */ jsx49(
    FormControlLabel2,
    {
      disabled,
      label: labelNode,
      control: /* @__PURE__ */ jsx49(
        MuiCheckbox,
        {
          checked,
          checkedIcon: (_a = stateIcons == null ? void 0 : stateIcons.true) != null ? _a : checkedIcon,
          disabled,
          icon: (_b = stateIcons == null ? void 0 : stateIcons.false) != null ? _b : icon,
          indeterminate: ternary != null ? ternary : indeterminate,
          indeterminateIcon: (_c = stateIcons == null ? void 0 : stateIcons.null) != null ? _c : ternaryIcon,
          onClick: toggleChecked,
          className: css.checkbox
        }
      ),
      className: cx(css.label, className)
    }
  );
};
var useClasses30 = makeClasses((props) => ({
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
    whiteSpace: props.whiteSpace,
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": props.noHover ? {} : { backgroundColor: Color7(props.color).fade(0.8).string() },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4rem",
      fontFamily: "Roboto"
    }
  })
}));

// trabecula/components/toggles/radio.tsx
import { FormControlLabel as FormControlLabel3, Radio as MuiRadio } from "@mui/material";
import Color8 from "color";
import { jsx as jsx50 } from "react/jsx-runtime";
var Radio2 = (rawProps) => {
  const {
    boldWhenChecked = false,
    center,
    checked,
    checkedIcon,
    className,
    color = colors.custom.blue,
    disabled,
    flex = 1,
    fontFamily,
    icon,
    label,
    margins = { all: 0 },
    name,
    noHover = false,
    padding = { all: "0.3rem" },
    setChecked,
    value,
    whiteSpace = "nowrap",
    width = "100%"
  } = rawProps;
  const { css, cx } = useClasses31({
    center,
    color,
    disabled,
    flex,
    margins,
    noHover,
    padding,
    whiteSpace,
    width
  });
  const selectRadio = () => {
    if (!disabled) setChecked(true);
  };
  const renderedLabel = typeof label === "string" ? /* @__PURE__ */ jsx50(Text, { bold: boldWhenChecked && checked, fontFamily, children: label }) : label;
  return /* @__PURE__ */ jsx50(
    FormControlLabel3,
    {
      label: renderedLabel,
      disabled,
      className: cx(css.label, className),
      control: /* @__PURE__ */ jsx50(
        MuiRadio,
        {
          checked,
          checkedIcon,
          disabled,
          icon,
          name,
          onClick: selectRadio,
          value,
          className: css.radio
        }
      )
    }
  );
};
var useClasses31 = makeClasses((props) => ({
  label: __spreadProps(__spreadValues({
    display: "flex",
    flex: props.flex,
    justifyContent: props.center ? "center" : void 0,
    alignItems: "center",
    borderRadius: "0.5rem",
    border: `1px solid transparent`
  }, makeMargins(props.margins)), {
    width: props.width || "auto",
    whiteSpace: props.whiteSpace,
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": props.noHover ? {} : {
      border: `1px solid ${Color8(props.color).fade(0.8).string()}`,
      backgroundColor: Color8(props.color).fade(0.9).string()
    }
  }),
  radio: __spreadProps(__spreadValues({}, makePadding(props.padding)), {
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1
  })
}));

// trabecula/components/tooltip/tooltip.tsx
import { Tooltip as MuiTooltip } from "@mui/material";
import Color9 from "color";
import { jsx as jsx51 } from "react/jsx-runtime";
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
  const { css } = useClasses32({
    borderColor,
    bgColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding
  });
  return /* @__PURE__ */ jsx51(
    MuiTooltip,
    __spreadProps(__spreadValues({}, props), {
      arrow,
      placement,
      title,
      classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip },
      children: /* @__PURE__ */ jsx51(
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
var useClasses32 = makeClasses((props) => ({
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
    backgroundColor: Color9(props.bgColor).fade(0.03).string(),
    color: props.color,
    fontSize: props.fontSize,
    whiteSpace: "pre-wrap",
    width: "max-content",
    boxShadow: "rgb(0 0 0 / 97%) 0px 0px 2px 0px"
  },
  popper: {
    zIndex: 1e6
  }
}));

// trabecula/components/tooltip/tooltip-wrapper.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
var TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
  const wrap = (c) => /* @__PURE__ */ jsx52(Tooltip, __spreadProps(__spreadValues({ title: tooltip }, tooltipProps), { children: c }));
  return /* @__PURE__ */ jsx52(
    ConditionalWrap,
    {
      wrap,
      condition: tooltip !== void 0 && !(typeof tooltip === "string" && !(tooltip == null ? void 0 : tooltip.length)),
      children
    }
  );
};

// trabecula/components/wrappers/card.tsx
import { jsx as jsx53 } from "react/jsx-runtime";
var Card = Comp(
  (_a, ref) => {
    var _b = _a, {
      bgColor = colors.foreground,
      borderRadiuses = {},
      children,
      className,
      column = true,
      display = "flex",
      elevated = false,
      header,
      height,
      headerProps,
      margins,
      boxShadow,
      overflow,
      padding = {},
      row = false,
      spacing,
      width
    } = _b, viewProps = __objRest(_b, [
      "bgColor",
      "borderRadiuses",
      "children",
      "className",
      "column",
      "display",
      "elevated",
      "header",
      "height",
      "headerProps",
      "margins",
      "boxShadow",
      "overflow",
      "padding",
      "row",
      "spacing",
      "width"
    ]);
    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    headerProps = deepMerge({ width: "100%" }, headerProps != null ? headerProps : {});
    padding = deepMerge({ all: "0.5rem" }, padding);
    const { css, cx } = useClasses33({ boxShadow, elevated });
    return /* @__PURE__ */ jsx53(
      HeaderWrapper,
      __spreadProps(__spreadValues({}, viewProps), {
        borderRadiuses,
        className,
        display,
        header,
        headerProps,
        height,
        margins,
        overflow,
        width,
        children: /* @__PURE__ */ jsx53(
          View,
          __spreadProps(__spreadValues({
            className: cx(css.root, className),
            position: "relative",
            column: column && !row,
            flex: 1,
            bgColor,
            borderRadiuses,
            height,
            overflow,
            padding,
            ref,
            row,
            spacing,
            width: header ? "100%" : width
          }, viewProps), {
            "aria-label": "card",
            children
          })
        )
      })
    );
  }
);
var useClasses33 = makeClasses((props) => {
  var _a;
  return {
    root: {
      boxShadow: (_a = props.boxShadow) != null ? _a : props.elevated ? "0.1rem 0.1rem 0.3rem rgb(0 0 0 / 50%)" : void 0
    }
  };
});

// trabecula/components/wrappers/card-base/chip.tsx
import { jsx as jsx54 } from "react/jsx-runtime";
var Chip3 = (_a) => {
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
  const { css } = useClasses34({ hasFooter, flush, opacity, position });
  return /* @__PURE__ */ jsx54(Chip2, __spreadProps(__spreadValues({}, props), { bgColor, className: css.chip }));
};
var useClasses34 = makeClasses((props) => ({
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
import { Paper as Paper3 } from "@mui/material";
import Color10 from "color";
import { jsx as jsx55 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses35({ disabled, display, height, selected, selectedColor, width });
  return /* @__PURE__ */ jsx55(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.container, className), children: /* @__PURE__ */ jsx55(
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
var useClasses35 = makeClasses((props, theme) => {
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
      background: !props.disabled && props.selected ? `linear-gradient(to bottom right, ${Color10(props.selectedColor).lighten(0.4).string()}, ${props.selectedColor} 60%)` : "transparent",
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
import { jsx as jsx56 } from "react/jsx-runtime";
var Footer2 = ({ children }) => {
  const { css } = useClasses36(null);
  return /* @__PURE__ */ jsx56(View, { className: css.footer, children });
};
var useClasses36 = makeClasses({
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
import { jsx as jsx57 } from "react/jsx-runtime";
var FooterText = (props) => {
  var _a;
  return ((_a = props.text) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx57(Text, { fontSize: "0.9em", width: "100%", textAlign: "center", padding: { all: "0 0.4rem 0.2rem" }, children: props.text });
};

// trabecula/components/wrappers/card-base/image.tsx
import {
  useEffect as useEffect8,
  useRef as useRef4,
  useState as useState17
} from "react";
import { jsx as jsx58, jsxs as jsxs29 } from "react/jsx-runtime";
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
  const thumbInterval = useRef4(null);
  const [hasError, setHasError] = useState17(false);
  const [imagePos, setImagePos] = useState17(null);
  const [thumbIndex, setThumbIndex] = useState17(0);
  const { css, cx } = useClasses37({ fit, height, imagePos, rounded });
  const hasListeners = !disabled && !autoAnimate && (thumbPaths == null ? void 0 : thumbPaths.length) > 1;
  const createThumbInterval = () => {
    thumbInterval.current = setInterval(() => {
      setHasError(false);
      setThumbIndex((thumbIndex2) => thumbIndex2 + 1 === (thumbPaths == null ? void 0 : thumbPaths.length) ? 0 : thumbIndex2 + 1);
    }, 300);
  };
  useEffect8(() => {
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
  return /* @__PURE__ */ jsxs29(
    View,
    {
      onMouseEnter: hasListeners ? handleMouseEnter : void 0,
      onMouseLeave: hasListeners ? handleMouseLeave : void 0,
      className: cx(css.imageContainer, className),
      children: [
        hasError ? /* @__PURE__ */ jsx58(View, { className: css.image, children: /* @__PURE__ */ jsx58(
          Icon,
          {
            name: "ImageNotSupported",
            size: "4rem",
            color: colors.custom.grey,
            viewProps: { align: "center", height: "100%" }
          }
        ) }) : (thumbPaths == null ? void 0 : thumbPaths.length) > 0 ? /* @__PURE__ */ jsx58(
          "img",
          {
            draggable,
            loading,
            onDragEnd,
            onDragStart,
            src: thumbPaths[thumbIndex],
            alt: title,
            onError: handleError,
            onMouseMove: fit === "cover" ? handleMouseMove : void 0,
            onMouseLeave: fit === "cover" ? handleMouseLeave : void 0,
            className: css.image
          }
        ) : /* @__PURE__ */ jsx58(View, { className: css.image }),
        children
      ]
    }
  );
};
var useClasses37 = makeClasses((props) => {
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
import { jsx as jsx59 } from "react/jsx-runtime";
var Tooltip2 = ({ children, tooltip }) => {
  return /* @__PURE__ */ jsx59(
    Tooltip,
    {
      enterDelay: 700,
      enterNextDelay: 300,
      minWidth: "15rem",
      title: /* @__PURE__ */ jsx59(View, { column: true, padding: { all: "0.3rem" }, spacing: "0.5rem", children: tooltip }),
      children: /* @__PURE__ */ jsx59(View, { column: true, width: "100%", children })
    }
  );
};

// trabecula/components/wrappers/card-base/index.ts
var CardBase = {
  Chip: Chip3,
  Container: Container2,
  Footer: Footer2,
  FooterText,
  Image,
  Tooltip: Tooltip2
};

// trabecula/components/wrappers/card-grid.tsx
import { jsx as jsx60, jsxs as jsxs30 } from "react/jsx-runtime";
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
    const { css, cx } = useClasses38({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return /* @__PURE__ */ jsxs30(View, __spreadProps(__spreadValues({}, props), { className: cx(css.root, className), children: [
      cards.length ? /* @__PURE__ */ jsx60(
        View,
        __spreadProps(__spreadValues({}, cardsProps), {
          padding,
          ref,
          className: cx(css.cards, cardsProps == null ? void 0 : cardsProps.className),
          children: cards
        })
      ) : /* @__PURE__ */ jsx60(View, { column: true, flex: 1, children: /* @__PURE__ */ jsx60(CenteredText, { text: noResultsText }) }),
      children
    ] }));
  }
);
var useClasses38 = makeClasses((props, theme) => ({
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
import { jsx as jsx61 } from "react/jsx-runtime";
var Chip2 = Comp(
  (_a) => {
    var _b = _a, {
      bgColor,
      className,
      color,
      fontSize,
      fontWeight,
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
      "fontSize",
      "fontWeight",
      "height",
      "icon",
      "iconColor",
      "iconProps",
      "label",
      "padding",
      "radiuses",
      "width"
    ]);
    const { css, cx } = useClasses39({
      bgColor,
      color,
      fontSize,
      fontWeight,
      height,
      padding,
      radiuses,
      width
    });
    return /* @__PURE__ */ jsx61(
      MuiChip,
      __spreadProps(__spreadValues({}, props), {
        label,
        icon: icon ? /* @__PURE__ */ jsx61(
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
  }
);
var useClasses39 = makeClasses((props) => ({
  chip: __spreadProps(__spreadValues({}, makeBorderRadiuses(props.radiuses)), {
    height: props.height,
    width: props.width,
    backgroundColor: props.bgColor,
    color: props.color,
    transition: "all 200ms ease-in-out",
    "& > .MuiChip-label": __spreadProps(__spreadValues({}, makePadding(props.padding)), {
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    })
  })
}));

// trabecula/components/wrappers/conditional.tsx
import { Fragment as Fragment5, jsx as jsx62 } from "react/jsx-runtime";
var ConditionalWrap = ({
  condition,
  wrap,
  children
}) => condition ? wrap(children) : /* @__PURE__ */ jsx62(Fragment5, { children });

// trabecula/components/wrappers/context-menu.tsx
import { useState as useState18 } from "react";
import { Menu as Menu2 } from "@mui/material";
import Color11 from "color";
import { jsx as jsx63, jsxs as jsxs31 } from "react/jsx-runtime";
var ContextMenu = (_a) => {
  var _b = _a, { children, disabled, id, menuItems } = _b, props = __objRest(_b, ["children", "disabled", "id", "menuItems"]);
  const { css } = useClasses40(null);
  const [mouseX, setMouseX] = useState18(null);
  const [mouseY, setMouseY] = useState18(null);
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
  return /* @__PURE__ */ jsxs31(View, __spreadProps(__spreadValues({}, props), { id, onContextMenu: handleContext, children: [
    children,
    /* @__PURE__ */ jsx63(
      Menu2,
      {
        open: mouseY !== null,
        onClose: handleClose,
        anchorReference: "anchorPosition",
        anchorPosition: mouseX !== null && mouseY !== null ? { top: mouseY, left: mouseX } : void 0,
        PopoverClasses: { paper: css.contextMenu },
        MenuListProps: { className: css.contextMenuInner },
        children: menuItems.filter(Boolean).map((item) => [
          item.divider === "top" ? /* @__PURE__ */ jsx63(Divider, {}) : null,
          /* @__PURE__ */ jsx63(Item, { item, onClose: handleClose }),
          item.divider === "bottom" ? /* @__PURE__ */ jsx63(Divider, {}) : null
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
  const { css } = useClasses40(null);
  const color = item.color || colors.custom.lightGrey;
  const handleClick = item.onClick ? () => {
    item.onClick();
    onClose();
  } : void 0;
  return /* @__PURE__ */ jsx63(
    ListItem,
    {
      text: item.label,
      icon: item.icon,
      iconProps: __spreadValues({ color }, (_a = item.iconProps) != null ? _a : {}),
      color,
      iconEnd: ((_b = item.subItems) == null ? void 0 : _b.length) ? "ChevronRight" : null,
      onClick: handleClick,
      className: css.item,
      children: ((_c = item.subItems) == null ? void 0 : _c.length) ? /* @__PURE__ */ jsx63(View, { column: true, children: item.subItems.map((subItem) => /* @__PURE__ */ jsx63(SubItem, { subItem, onClose }, subItem.label)) }) : null
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
  return /* @__PURE__ */ jsx63(ListItem, { text: subItem.label, icon: subItem.icon, onClick: handleClick });
};
var useClasses40 = makeClasses({
  contextMenu: {
    background: Color11(colors.custom.black).fade(0.03).string()
  },
  contextMenuInner: {
    padding: 0
  },
  item: {
    padding: "0.35rem 1rem 0.35rem 0.7rem"
  }
});

// trabecula/components/wrappers/disabled-overlay.tsx
import { Fragment as Fragment6, jsx as jsx64, jsxs as jsxs32 } from "react/jsx-runtime";
var DisabledOverlay = ({
  children,
  isDisabled = false,
  zIndex = 2
}) => {
  const { css } = useClasses41({ isDisabled, zIndex });
  return /* @__PURE__ */ jsxs32(Fragment6, { children: [
    children,
    isDisabled && /* @__PURE__ */ jsx64(View, { className: css.disabledOverlay })
  ] });
};
var useClasses41 = makeClasses((props) => ({
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
    zIndex: props == null ? void 0 : props.zIndex,
    opacity: (props == null ? void 0 : props.isDisabled) ? 1 : 0,
    transition: "all 225ms ease-in-out",
    pointerEvents: (props == null ? void 0 : props.isDisabled) ? "auto" : "none"
  }
}));

// trabecula/components/wrappers/divider.tsx
import { Divider as MuiDivider } from "@mui/material";
import { jsx as jsx65 } from "react/jsx-runtime";
var Divider = Comp(
  (_a, ref) => {
    var _b = _a, {
      alignSelf,
      borderWidth,
      className,
      color,
      flexItem = true,
      height,
      margins = {},
      orientation = "horizontal"
    } = _b, props = __objRest(_b, [
      "alignSelf",
      "borderWidth",
      "className",
      "color",
      "flexItem",
      "height",
      "margins",
      "orientation"
    ]);
    const { css, cx } = useClasses42({ alignSelf, borderWidth, color, height, margins, orientation });
    return /* @__PURE__ */ jsx65(
      MuiDivider,
      __spreadProps(__spreadValues({}, props), {
        ref,
        flexItem,
        orientation,
        className: cx(css.divider, className)
      })
    );
  }
);
var useClasses42 = makeClasses((props) => ({
  divider: __spreadValues({
    alignSelf: props.alignSelf,
    borderColor: props.color,
    borderBottomWidth: props.orientation === "horizontal" ? props.borderWidth : void 0,
    borderRightWidth: props.orientation === "vertical" ? props.borderWidth : void 0,
    height: props.height
  }, makeMargins(props.margins))
}));

// trabecula/components/wrappers/header.tsx
import { jsx as jsx66, jsxs as jsxs33 } from "react/jsx-runtime";
var DEFAULT_HEADER_PROPS = {
  bgColor: colors.custom.black,
  borderRadiuses: { top: 6 },
  fontSize: "0.8em",
  justify: "center",
  padding: { all: "0.2rem 0.3rem" },
  row: true
};
var HeaderWrapper = Comp(
  (_a, ref) => {
    var _b = _a, {
      children,
      display,
      header,
      height = "auto",
      headerProps = {},
      margins,
      position = "relative",
      row,
      spacing,
      textProps = {},
      width
    } = _b, viewProps = __objRest(_b, [
      "children",
      "display",
      "header",
      "height",
      "headerProps",
      "margins",
      "position",
      "row",
      "spacing",
      "textProps",
      "width"
    ]);
    headerProps = deepMerge(DEFAULT_HEADER_PROPS, headerProps);
    const wrap = (content) => /* @__PURE__ */ jsxs33(
      View,
      __spreadProps(__spreadValues({}, viewProps), {
        ref,
        column: true,
        height,
        margins,
        width,
        "aria-label": "header-wrapper",
        children: [
          /* @__PURE__ */ jsx66(View, __spreadProps(__spreadValues({}, headerProps), { "aria-label": "header", children: typeof header === "string" ? /* @__PURE__ */ jsx66(Text, __spreadProps(__spreadValues({ flex: 1, fontSize: headerProps.fontSize, textAlign: "center" }, textProps), { children: header })) : header })),
          content
        ]
      })
    );
    return /* @__PURE__ */ jsx66(ConditionalWrap, { condition: !!header, wrap, children: /* @__PURE__ */ jsx66(
      View,
      __spreadProps(__spreadValues({
        overflow: "auto"
      }, viewProps), {
        ref: header ? void 0 : ref,
        "aria-label": "header-wrapper-content",
        display,
        height,
        margins: header ? void 0 : margins,
        position,
        row,
        spacing,
        width: header ? "100%" : width,
        children
      })
    ) });
  }
);

// trabecula/components/wrappers/loading-overlay.tsx
import { CircularProgress as CircularProgress2 } from "@mui/material";
import { Fragment as Fragment7, jsx as jsx67, jsxs as jsxs34 } from "react/jsx-runtime";
var LoadingOverlay = ({ children, isLoading, sub }) => {
  const { css } = useClasses43({ isLoading });
  return /* @__PURE__ */ jsxs34(Fragment7, { children: [
    children,
    /* @__PURE__ */ jsxs34(
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
          /* @__PURE__ */ jsx67(CircularProgress2, { color: "inherit" }),
          typeof sub === "string" ? /* @__PURE__ */ jsx67(Text, { preset: "title", fontSize: "0.9em", children: sub }) : sub
        ]
      }
    )
  ] });
};
var useClasses43 = makeClasses((props) => ({
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
import { useEffect as useEffect9, useRef as useRef5, useState as useState19 } from "react";
import { jsx as jsx68, jsxs as jsxs35 } from "react/jsx-runtime";
var SideScroller = ({ children, className, innerClassName }) => {
  const ref = useRef5(null);
  const { width } = useElementResize(ref);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState19(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState19(false);
  const [scrollPos, setScrollPos] = useState19(0);
  const { css, cx } = useClasses44({ isLeftButtonVisible, isRightButtonVisible });
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
  useEffect9(() => {
    const node = ref.current;
    const scrollListener = debounce(setScrollPos.bind(node.scrollLeft), 50);
    node.addEventListener("scroll", scrollListener);
    return () => node.removeEventListener("scroll", scrollListener);
  }, []);
  useEffect9(() => {
    const [left, right] = getButtonVisibility();
    setIsLeftButtonVisible(left);
    setIsRightButtonVisible(right);
  }, [scrollPos]);
  return /* @__PURE__ */ jsxs35(View, { className: cx(css.root, className), children: [
    /* @__PURE__ */ jsx68(
      IconButton,
      {
        name: "ChevronLeft",
        onClick: () => handleScroll("left"),
        className: cx(css.scrollButton, "left"),
        size: "large"
      }
    ),
    /* @__PURE__ */ jsx68(View, { ref, className: cx(css.items, innerClassName), children }),
    /* @__PURE__ */ jsx68(
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
var useClasses44 = makeClasses((props) => ({
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
import { jsx as jsx69 } from "react/jsx-runtime";
var UniformList = (_a) => {
  var _b = _a, { children, uniformWidth } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  const { css, cx } = useClasses45({ uniformWidth });
  return /* @__PURE__ */ jsx69(View, __spreadProps(__spreadValues({}, props), { className: cx(css.uniform, props == null ? void 0 : props.className), children }));
};
var useClasses45 = makeClasses((props) => ({
  uniform: {
    "& > *": {
      flexBasis: "100%",
      maxWidth: props.uniformWidth
    }
  }
}));

// trabecula/components/wrappers/view.tsx
import { jsx as jsx70 } from "react/jsx-runtime";
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
      cursor,
      display,
      flex,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
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
      "cursor",
      "display",
      "flex",
      "height",
      "justify",
      "margins",
      "maxHeight",
      "maxWidth",
      "minHeight",
      "minWidth",
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
    const { css, cx } = useClasses46({
      align,
      bgColor,
      borders,
      borderRadiuses,
      column,
      cursor,
      display,
      flex,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap
    });
    return /* @__PURE__ */ jsx70("div", __spreadProps(__spreadValues({}, props), { ref, className: cx(className, css.view), children }));
  }
);
var useClasses46 = makeClasses((props) => {
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
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      minHeight: props.minHeight,
      minWidth: props.minWidth,
      height: props.height,
      width: props.width,
      backgroundColor: props.bgColor,
      opacity: props.opacity,
      overflow: props.overflow,
      cursor: props.cursor
    }), props.spacing ? {
      "& > *:not(:last-child)": {
        [props.column ? "marginBottom" : "marginRight"]: props.spacing
      }
    } : {})
  };
});

// trabecula/views/mui-provider.tsx
import { StrictMode, useRef as useRef6 } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { TssCacheProvider } from "tss-react";
import { jsx as jsx71 } from "react/jsx-runtime";
var MuiProvider = ({
  children,
  portalContainer,
  styleContainer
}) => {
  const themeRef = useRef6(
    createTheme({
      components: {
        MuiModal: { defaultProps: { container: portalContainer } },
        MuiPopover: { defaultProps: { container: portalContainer } },
        MuiPopper: { defaultProps: { container: portalContainer } }
      },
      palette: { mode: "dark" }
    })
  );
  const muiCacheRef = useRef6(
    createCache({ container: styleContainer, key: "mui", prepend: true, stylisPlugins: [] })
  );
  const tssCacheRef = useRef6(
    createCache({ container: styleContainer, key: "tss", stylisPlugins: [] })
  );
  return /* @__PURE__ */ jsx71(StrictMode, { children: /* @__PURE__ */ jsx71(CacheProvider, { value: muiCacheRef.current, children: /* @__PURE__ */ jsx71(TssCacheProvider, { value: tssCacheRef.current, children: /* @__PURE__ */ jsx71(ThemeProvider, { theme: themeRef.current, children }) }) }) });
};
export {
  Accordion,
  AccordionGroup,
  AutoComplete,
  Button,
  ButtonWithInset,
  Card,
  CardBase,
  CardGrid,
  CenteredText,
  Checkbox,
  Chip2 as Chip,
  ChipInput,
  ColorPicker,
  Comp,
  ConditionalWrap,
  ConfirmModal,
  ContextMenu,
  DEFAULT_INPUT_HEADER_PROPS,
  DENSE_INPUT_PADDING,
  DataGrid,
  DataGridHeader,
  DataGridRow,
  DateDetail,
  DateInput,
  DateRange,
  Detail,
  DetailRows,
  DisabledOverlay,
  Divider,
  Dropdown,
  FilterMenu,
  HeaderWrapper,
  Icon,
  IconButton,
  IconPicker,
  Input,
  Link,
  List,
  ListItem,
  LoadingOverlay,
  LogOpsInput,
  MULTI_INPUT_ROW_HEIGHT,
  MenuButton,
  Modal,
  MuiProvider,
  MultiActionButton,
  MultiInput,
  MultiInputList,
  MultiInputRow,
  NumInput,
  NumRange,
  Pagination,
  ProgressBar,
  ProgressCircle,
  Radio2 as Radio,
  RangeWrapper,
  SideScroller,
  SortMenu,
  SortRow,
  PRESETS as TEXT_PRESETS,
  Table,
  Text,
  TimeInput,
  Tooltip,
  TooltipWrapper,
  TruncatedText,
  UniformList,
  View,
  clampDataGridColumnWidth,
  compareDataGridValues,
  createAutoCompleteOptions,
  getDataGridCellLayout,
  getDataGridColumnValue,
  getDataGridValueText,
  getTextTruncation,
  useAccordionGroup,
  useAccordionGroupSection
};
//# sourceMappingURL=index.mjs.map