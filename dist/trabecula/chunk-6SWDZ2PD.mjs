import {
  COUNTRY_FLAG_LIGATURES,
  ICON_LIGATURES,
  ICON_NAMES
} from "./chunk-M7SRQWZA.mjs";
import {
  DENSE_FORM_ROW_HEIGHT,
  FORM_ROW_HEIGHT,
  LOGICAL_OPS,
  _CONSTANTS,
  chunkArray,
  dayjs,
  debounce,
  deepClone,
  deepMerge,
  handleErrors,
  isDeepEqual
} from "./chunk-PI7DDEAG.mjs";
import {
  __async,
  __objRest,
  __publicField,
  __spreadProps,
  __spreadValues,
  __yieldStar
} from "./chunk-DM4QYMVJ.mjs";

// trabecula/utils/client/css.ts
import { colors as muiColors } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Color from "color";
import { createMakeAndWithStyles } from "tss-react";
var makeBorders = (props) => ({
  border: props == null ? void 0 : props.all,
  borderTop: props == null ? void 0 : props.top,
  borderBottom: props == null ? void 0 : props.bottom,
  borderRight: props == null ? void 0 : props.right,
  borderLeft: props == null ? void 0 : props.left
});
var makeBorderRadiuses = (radiuses) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return {
    borderTopLeftRadius: (_c = (_b = (_a = radiuses == null ? void 0 : radiuses.topLeft) != null ? _a : radiuses == null ? void 0 : radiuses.top) != null ? _b : radiuses == null ? void 0 : radiuses.left) != null ? _c : radiuses == null ? void 0 : radiuses.all,
    borderTopRightRadius: (_f = (_e = (_d = radiuses == null ? void 0 : radiuses.topRight) != null ? _d : radiuses == null ? void 0 : radiuses.top) != null ? _e : radiuses == null ? void 0 : radiuses.right) != null ? _f : radiuses == null ? void 0 : radiuses.all,
    borderBottomLeftRadius: (_i = (_h = (_g = radiuses == null ? void 0 : radiuses.bottomLeft) != null ? _g : radiuses == null ? void 0 : radiuses.bottom) != null ? _h : radiuses == null ? void 0 : radiuses.left) != null ? _i : radiuses == null ? void 0 : radiuses.all,
    borderBottomRightRadius: (_l = (_k = (_j = radiuses == null ? void 0 : radiuses.bottomRight) != null ? _j : radiuses == null ? void 0 : radiuses.bottom) != null ? _k : radiuses == null ? void 0 : radiuses.right) != null ? _l : radiuses == null ? void 0 : radiuses.all
  };
};
var makeMargins = (props) => ({
  margin: props == null ? void 0 : props.all,
  marginTop: props == null ? void 0 : props.top,
  marginBottom: props == null ? void 0 : props.bottom,
  marginRight: props == null ? void 0 : props.right,
  marginLeft: props == null ? void 0 : props.left
});
var makePadding = (props) => ({
  padding: props == null ? void 0 : props.all,
  paddingTop: props == null ? void 0 : props.top,
  paddingBottom: props == null ? void 0 : props.bottom,
  paddingRight: props == null ? void 0 : props.right,
  paddingLeft: props == null ? void 0 : props.left
});
var { makeStyles } = createMakeAndWithStyles({ useTheme });
var makeClasses = (fnOrObj) => {
  return (params) => {
    const { classes: css, cx } = makeStyles()(
      (props, theme) => typeof fnOrObj === "function" ? fnOrObj(theme, props) : fnOrObj
    )(params);
    return { css, cx };
  };
};
var customColors = {
  black: "#131313",
  blue: "#2866c5",
  blueGrey: "#546e7a",
  brown: "#6d4c41",
  darkGrey: "#2b2b2b",
  green: "#2e7d32",
  grey: "#4b4b4b",
  lightBlue: "#578cdd",
  lightGrey: "#bdbdbd",
  orange: "#ad6a27",
  purple: "#683980",
  red: "#982525",
  white: "#f5f5f5",
  yellow: "#e3c648"
};
var tagCategories = [
  customColors.red,
  customColors.orange,
  customColors.yellow,
  customColors.green,
  customColors.blue,
  customColors.blueGrey,
  customColors.purple
].map((c) => [
  Color(c).lighten(0.4).hex(),
  Color(c).lighten(0.2).hex(),
  Color(c).hex(),
  Color(c).darken(0.2).hex(),
  Color(c).darken(0.4).hex()
]);
var colors = {
  background: "#1E1E1E",
  custom: customColors,
  foreground: "#2C2C2C",
  foregroundCard: "#343434",
  mui: muiColors,
  tagCategories
};

// trabecula/utils/client/hooks.ts
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { isObservable, toJS } from "mobx";
import { getSnapshot, isTreeNode } from "mobx-keystone";
var getComparisonValue = (value) => isTreeNode(value) ? getSnapshot(value) : isObservable(value) ? toJS(value) : value;
var useDeepEffect = (cb, deps) => {
  const dependencies = useDeepMemo(deps.map(getComparisonValue));
  useEffect(cb, [dependencies]);
};
var useDeepMemo = (value) => {
  const comparisonValue = getComparisonValue(value);
  const comparisonRef = useRef();
  const depRef = useRef(0);
  const valueRef = useRef(value);
  if (!isDeepEqual(comparisonValue, comparisonRef.current)) {
    comparisonRef.current = deepClone(comparisonValue);
    depRef.current += 1;
    valueRef.current = value;
  }
  return useMemo(() => valueRef.current, [depRef.current]);
};
var useElementResize = (ref, condition) => {
  const [dimensions, setDimensions] = useState({ height: 0, left: 0, top: 0, width: 0 });
  useEffect(() => {
    const nodeRef = ref == null ? void 0 : ref.current;
    const handleResize = () => {
      var _a;
      const rect = (_a = nodeRef == null ? void 0 : nodeRef.getBoundingClientRect) == null ? void 0 : _a.call(nodeRef);
      const next = {
        height: (nodeRef == null ? void 0 : nodeRef.offsetHeight) || 0,
        left: (rect == null ? void 0 : rect.left) || 0,
        top: (rect == null ? void 0 : rect.top) || 0,
        width: (nodeRef == null ? void 0 : nodeRef.offsetWidth) || 0
      };
      setDimensions(
        (prev) => prev.height === next.height && prev.left === next.left && prev.top === next.top && prev.width === next.width ? prev : next
      );
    };
    const observer2 = new ResizeObserver(handleResize);
    if (nodeRef) {
      handleResize();
      observer2.observe(nodeRef, { box: "border-box" });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      observer2.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, condition]);
  return dimensions;
};
var useForceUpdate = () => {
  const [, setTick] = useState(0);
  return useCallback(() => setTick((tick) => tick + 1), []);
};
var useLazyLoad = (containerRef, options) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);
  useEffect(() => {
    var _a, _b;
    if (!containerRef.current) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      {
        rootMargin: (_a = options == null ? void 0 : options.rootMargin) != null ? _a : "200px 0px",
        threshold: (_b = options == null ? void 0 : options.threshold) != null ? _b : 0
      }
    );
    observerRef.current.observe(containerRef.current);
    return () => {
      var _a2;
      return (_a2 = observerRef.current) == null ? void 0 : _a2.disconnect();
    };
  }, [options == null ? void 0 : options.rootMargin, options == null ? void 0 : options.threshold]);
  return isVisible;
};

// trabecula/utils/client/miscellaneous.ts
var copyToClipboard = (value, message) => __async(null, null, function* () {
  try {
    yield navigator.clipboard.writeText(value);
    if (message) toast.info(message);
  } catch (e) {
    toast.error("Failed to copy to clipboard");
  }
});

// trabecula/utils/client/mobx.ts
var mobxKeystoneBindings = null;
var initMobx = (bindings) => mobxKeystoneBindings = bindings;
var getMobx = () => {
  if (!mobxKeystoneBindings) throw new Error("Call initMobx() at app startup");
  return mobxKeystoneBindings;
};

// trabecula/utils/client/pagination.ts
import { useEffect as useEffect2, useState as useState2 } from "react";
var usePaginatedList = (loadPage, { pollIntervalMs = 0 } = {}) => {
  const [error, setError] = useState2("");
  const [isLoading, setIsLoading] = useState2(true);
  const [items, setItems] = useState2([]);
  const [page, setPage] = useState2(1);
  const [pageCount, setPageCount] = useState2(1);
  const [revision, setRevision] = useState2(0);
  useEffect2(() => {
    const controller = new AbortController();
    let timer;
    setIsLoading(true);
    setError("");
    const load = () => __async(null, null, function* () {
      var _a;
      try {
        const result = yield loadPage(page, controller.signal);
        if (!controller.signal.aborted) {
          const count = Math.max(1, result.pageCount);
          setError("");
          setPageCount(count);
          if (page > count) setPage(count);
          else setItems(result.items);
        }
      } catch (error2) {
        if (!controller.signal.aborted) setError((_a = error2 == null ? void 0 : error2.message) != null ? _a : String(error2));
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
          if (pollIntervalMs > 0) timer = setTimeout(load, pollIntervalMs);
        }
      }
    });
    load();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [loadPage, page, pollIntervalMs, revision]);
  const refresh = () => setRevision((value) => value + 1);
  return { error, isLoading, items, page, pageCount, refresh, setError, setPage };
};

// trabecula/utils/client/queue.ts
var makeQueue = ({
  action,
  items,
  logPrefix = "Refreshed",
  logSuffix,
  onComplete,
  queue,
  withTabTitle
}) => {
  return new Promise((resolve, reject) => {
    const totalCount = items.length;
    let completedCount = 0;
    let completion;
    let hasError = false;
    let isComplete = false;
    const getToastText = () => `${logPrefix} ${completedCount} / ${totalCount} ${logSuffix}${isComplete ? "." : "..."}`;
    const toaster = new Toaster();
    const complete = () => {
      if (!completion) {
        isComplete = true;
        updateProgress();
        completion = Promise.resolve().then(() => onComplete == null ? void 0 : onComplete(hasError)).then(() => resolve(), reject);
      }
      return completion;
    };
    const onEscape = () => {
      queue.cancel();
      return complete();
    };
    const updateProgress = () => {
      toaster.toast(getToastText(), {
        autoClose: isComplete ? 3e3 : false,
        type: isComplete ? hasError ? "error" : "success" : "info"
      });
      if (withTabTitle)
        document.title = isComplete ? hasError ? "\u274C Error!" : "\u2705 Done!" : `[${completedCount}/${totalCount}] Downloading`;
    };
    updateProgress();
    if (!totalCount) complete();
    else {
      for (const item of items) {
        queue.add(() => action(item, onEscape)).catch((error) => {
          var _a;
          if (!isComplete) {
            hasError = true;
            console.error(error);
            toast.error((_a = error == null ? void 0 : error.message) != null ? _a : String(error));
          }
        }).finally(() => {
          if (!isComplete) {
            completedCount++;
            if (completedCount >= totalCount) complete();
            else updateProgress();
          }
        });
      }
    }
  });
};

// trabecula/utils/client/scrolling.ts
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
var useDragScroll = ({
  listOuterRef,
  listRef,
  momentum = 0.8,
  scrollLeft,
  width
}) => {
  const dragDirection = useRef2(null);
  const dragResetTimeout = useRef2(null);
  const initialMouseX = useRef2(null);
  const momentumId = useRef2(null);
  const removeDragListeners = useRef2(null);
  const scrollFinal = useRef2(0);
  const scrollStart = useRef2(0);
  const velocity = useRef2(0);
  const [isDragging, setIsDragging] = useState3(false);
  useEffect3(() => {
    return () => {
      var _a;
      clearTimeout(dragResetTimeout.current);
      cancelAnimationFrame(momentumId.current);
      (_a = removeDragListeners.current) == null ? void 0 : _a.call(removeDragListeners);
    };
  }, []);
  const handleMouseDown = (event) => {
    var _a;
    if (!listRef.current || event.button !== 0) return;
    clearTimeout(dragResetTimeout.current);
    (_a = removeDragListeners.current) == null ? void 0 : _a.call(removeDragListeners);
    setIsDragging(false);
    initialMouseX.current = event.clientX;
    scrollStart.current = scrollLeft.current;
    velocity.current = 0;
    cancelMomentumTracking();
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    removeDragListeners.current = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  };
  const mouseMoveHandler = (event) => {
    if (!listRef.current) return;
    const walk = (event.clientX - initialMouseX.current) * 3;
    const newScrollLeft = scrollStart.current - walk;
    const isScrollValid = validateScrollLeft(newScrollLeft);
    if (!isScrollValid) return;
    listRef.current.scrollTo(newScrollLeft);
    velocity.current = newScrollLeft - scrollStart.current;
    dragDirection.current = velocity.current > 0 ? "left" : "right";
    if (Math.abs(velocity.current) > 5) setIsDragging(true);
  };
  const mouseUpHandler = () => {
    var _a;
    scrollFinal.current = scrollLeft.current;
    if (Math.abs(scrollFinal.current - scrollStart.current) > 5) {
      velocity.current = Math.max(Math.abs(velocity.current), 30) * (dragDirection.current === "right" ? -1 : 1);
      beginMomentumTracking();
    }
    dragResetTimeout.current = setTimeout(() => setIsDragging(false), 0);
    (_a = removeDragListeners.current) == null ? void 0 : _a.call(removeDragListeners);
    removeDragListeners.current = null;
  };
  const validateScrollLeft = (newScrollLeft) => {
    var _a;
    return newScrollLeft >= 0 && newScrollLeft <= ((_a = listOuterRef.current) == null ? void 0 : _a.scrollWidth) - width * 0.8;
  };
  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    momentumId.current = requestAnimationFrame(momentumLoop);
  };
  const cancelMomentumTracking = () => cancelAnimationFrame(momentumId.current);
  const momentumLoop = () => {
    const newScrollLeft = scrollLeft.current + velocity.current;
    const isScrollValid = validateScrollLeft(newScrollLeft);
    if (!isScrollValid || !listRef.current) return;
    listRef.current.scrollTo(newScrollLeft);
    velocity.current *= momentum;
    if (Math.abs(velocity.current) > 0.5) momentumId.current = requestAnimationFrame(momentumLoop);
  };
  return { handleMouseDown, isDragging };
};

// trabecula/utils/client/store.ts
import { prop } from "mobx-keystone";
var asyncAction = (fn) => {
  const { _async, _await } = getMobx();
  return _async(function* (input) {
    if (typeof fn !== "function") throw new Error("Provided function is not a function");
    const boundFn = fn.bind(this);
    return yield* __yieldStar(_await(handleErrors(() => boundFn(input))));
  });
};
var attachTouchedTracker = (model) => {
  const { onPatches } = getMobx();
  onPatches(model, (patches) => {
    const touched = model._touched;
    for (const p of patches) {
      if (p.path.length !== 1) continue;
      const key = p.path[0];
      if (key === "_touched" || touched[key]) continue;
      touched[key] = true;
    }
  });
};
var clearTouched = (model, keys) => {
  for (const k of keys) model._touched[k] = false;
};
var derefMobx = (value) => {
  const { getSnapshot: getSnapshot2, isTreeNode: isTreeNode2 } = getMobx();
  if (value === null || typeof value !== "object") return value;
  else if (isTreeNode2(value)) return getSnapshot2(value);
  else if (Array.isArray(value)) {
    const len = value.length;
    let changed = false;
    const out = new Array(len);
    for (let i = 0; i < len; i++) {
      const v = derefMobx(value[i]);
      if (v !== value[i]) changed = true;
      out[i] = v;
    }
    return changed ? out : value;
  } else {
    let changed = false;
    const out = {};
    for (const k in value) {
      const v = derefMobx(value[k]);
      if (v !== value[k]) changed = true;
      out[k] = v;
    }
    return changed ? out : value;
  }
};
var makeTouchedProp = () => ({
  _touched: prop(() => ({}))
});
var triggerAllTouched = (model) => {
  const touched = model._touched;
  for (const k in touched) touched[k] = true;
};
var validateProp = (store, field, validator) => {
  var _a;
  if (!((_a = store._touched) == null ? void 0 : _a[field])) return "";
  return validator() || "";
};

// trabecula/utils/client/toast.tsx
import {
  toast as _toast,
  ToastContainer as ToastContainerBase
} from "react-toastify";

// trabecula/components/comp.tsx
import { forwardRef } from "react";
import { observer } from "mobx-react-lite";
function Comp(component) {
  const Wrapped = forwardRef((props, ref) => component(props, ref));
  return observer(Wrapped);
}

// trabecula/components/activity/activity-modal.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ActivityModal = Comp(
  ({
    children,
    error,
    isEmpty,
    isLoading,
    onClose,
    onPageChange,
    onRefresh,
    page,
    pageCount,
    title = "Activity Log"
  }) => /* @__PURE__ */ jsxs(Modal.Container, { onClose, height: "90%", width: "90%", children: [
    /* @__PURE__ */ jsx(Modal.Header, { children: /* @__PURE__ */ jsx(Text, { preset: "title", children: title }) }),
    /* @__PURE__ */ jsxs(Modal.Content, { flex: 1, minHeight: 0, minWidth: 0, overflow: "hidden auto", spacing: "0.5rem", children: [
      error && /* @__PURE__ */ jsx(Text, { color: colors.custom.red, overflowWrap: "anywhere", whiteSpace: "pre-wrap", children: error }),
      isLoading && /* @__PURE__ */ jsx(Text, { children: "Loading background operations..." }),
      !isLoading && !error && isEmpty && /* @__PURE__ */ jsx(Text, { children: "No background operations." }),
      children
    ] }),
    /* @__PURE__ */ jsx(Pagination, { inline: true, count: pageCount, page, onChange: onPageChange, siblingCount: 2 }),
    /* @__PURE__ */ jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsx(Button, { text: "Refresh", icon: "Refresh", onClick: onRefresh, disabled: isLoading }),
      /* @__PURE__ */ jsx(Button, { text: "Close", icon: "Close", onClick: onClose })
    ] })
  ] })
);

// trabecula/components/activity/operation-card.tsx
import { LinearProgress } from "@mui/material";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ActivityOperationCard = Comp(
  ({
    children,
    controls,
    dateText,
    error,
    icon,
    isActive,
    label,
    message,
    processedCount,
    statusColor,
    statusText,
    totalCount
  }) => {
    const { css } = useClasses(null);
    return /* @__PURE__ */ jsxs2(
      Card,
      {
        bgColor: colors.background,
        flex: "none",
        minWidth: 0,
        padding: { all: "0.6rem" },
        spacing: "0.4rem",
        width: "100%",
        children: [
          /* @__PURE__ */ jsxs2(View, { row: true, align: "center", justify: "space-between", spacing: "1rem", wrap: "wrap", children: [
            /* @__PURE__ */ jsxs2(View, { row: true, flex: 1, align: "center", minWidth: 0, spacing: "0.5rem", children: [
              /* @__PURE__ */ jsx2(Icon, { color: statusColor, name: icon }),
              /* @__PURE__ */ jsx2(Text, { minWidth: 0, overflowWrap: "anywhere", whiteSpace: "normal", children: label })
            ] }),
            /* @__PURE__ */ jsxs2(View, { row: true, align: "center", spacing: "0.75rem", wrap: "wrap", children: [
              /* @__PURE__ */ jsx2(Text, { color: statusColor, fontSize: "0.8em", whiteSpace: "nowrap", children: statusText }),
              controls
            ] })
          ] }),
          isActive && /* @__PURE__ */ jsx2(
            LinearProgress,
            {
              value: totalCount > 0 ? Math.min(100, Math.max(0, processedCount / totalCount * 100)) : 0,
              variant: totalCount > 0 ? "determinate" : "indeterminate"
            }
          ),
          (error || message) && /* @__PURE__ */ jsx2(View, { maxHeight: "12rem", minWidth: 0, overflow: "hidden auto", children: /* @__PURE__ */ jsx2(
            Text,
            {
              className: css.message,
              color: error ? colors.custom.red : colors.custom.lightGrey,
              fontSize: "0.8em",
              minWidth: 0,
              overflowWrap: "anywhere",
              whiteSpace: "pre-wrap",
              children: error != null ? error : message
            }
          ) }),
          dateText && /* @__PURE__ */ jsx2(Text, { color: colors.custom.lightGrey, flex: "none", fontSize: "0.8em", whiteSpace: "normal", children: dateText }),
          children
        ]
      }
    );
  }
);
var useClasses = makeClasses({
  message: { userSelect: "text" }
});

// trabecula/components/buttons/button.tsx
import {
  Button as MuiButton
} from "@mui/material";
import Color2 from "color";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
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
  const defaultPadding = isLinkDisplay ? "0" : dense ? "0 0.5rem" : !text ? "0.3rem" : "0.3rem 0.7rem";
  const defaultHeight = !isLinkDisplay && dense ? DENSE_FORM_ROW_HEIGHT : void 0;
  const resolvedTextColor = textColor != null ? textColor : outlined ? color : isLinkDisplay ? colors.custom.lightBlue : colors.custom.white;
  const resolvedTextColorOnHover = textColorOnHover != null ? textColorOnHover : colorOnHover && outlined ? colorOnHover : resolvedTextColor;
  const { css, cx } = useClasses2({
    borderColorOnHover,
    borderRadiuses,
    borders,
    boxShadow,
    color,
    colorOnHover,
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
  return /* @__PURE__ */ jsx3(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ jsxs3(
    MuiButton,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, props), {
      size,
      variant
    }), isAnchor ? { component: "a", href } : {}), {
      onClick,
      className: cx(css.root, className),
      children: [
        /* @__PURE__ */ jsx3(LoadingOverlay, { isLoading: loading }),
        /* @__PURE__ */ jsxs3(View, { row: true, justify, spacing: "0.3rem", height: "100%", width: "100%", children: [
          startNode,
          icon && /* @__PURE__ */ jsx3(Icon, __spreadValues({ name: icon, size: iconSize }, iconProps)),
          typeof text === "string" ? /* @__PURE__ */ jsx3(
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
          iconRight && /* @__PURE__ */ jsx3(Icon, __spreadValues({ name: iconRight, size: iconSize }, iconProps)),
          endNode
        ] })
      ]
    })
  ) });
};
var useClasses2 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const bgColor = props.outlined ? props.outlineFill : props.isLinkDisplay ? "transparent" : props.color;
  const bgColorOnHover = props.isLinkDisplay ? "transparent" : props.outlined ? (_a = props.outlineFillOnHover) != null ? _a : Color2(props.outlineFill).lighten(0.1).string() : (_b = props.colorOnHover) != null ? _b : Color2(props.color).lighten(0.1).string();
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
      alignItems: "center"
    }, makeBorderRadiuses(props.borderRadiuses)), makeBorders(__spreadValues({ all: `1px solid ${borderColor}` }, props.borders))), makeMargins(props.margins)), {
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
      boxShadow: (_n = props.boxShadow) != null ? _n : "none",
      color: textColor,
      textDecoration,
      textTransform: props.textTransform,
      overflow: "hidden",
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
import { jsx as jsx4 } from "react/jsx-runtime";
var ButtonWithInset = Comp(
  (_a) => {
    var _b = _a, { insetText, insetWidth = "2.5rem" } = _b, props = __objRest(_b, ["insetText", "insetWidth"]);
    const { css } = useClasses3({ insetWidth });
    return /* @__PURE__ */ jsx4(
      Button,
      __spreadValues({
        startNode: /* @__PURE__ */ jsx4(View, { column: true, className: css.insetContainer, children: /* @__PURE__ */ jsx4(Text, { fontSize: "0.7em", children: insetText }) }),
        justify: "flex-start",
        width: "100%",
        padding: { all: 0 }
      }, props)
    );
  }
);
var useClasses3 = makeClasses((props) => ({
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
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
    const renderButton = (onOpen) => /* @__PURE__ */ jsx5(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ jsxs4(View, { row: true, spacing: "0.5rem", align: "center", children: [
          noIcon ? /* @__PURE__ */ jsx5(View, {}) : /* @__PURE__ */ jsx5(Icon, { name: "Palette", size: "1.15em" }),
          /* @__PURE__ */ jsx5(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ jsx5(Icon, { name: "Circle", color: value === null ? "transparent" : value })
        ] })
      })
    );
    return /* @__PURE__ */ jsx5(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ jsxs4(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ jsx5(
        Button,
        {
          text: "No Color",
          icon: "Close",
          onClick: handleNoColor,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ jsx5(View, { column: true, children: swatches.map((swatch, i) => /* @__PURE__ */ jsx5(View, { row: true, children: swatch.map((c) => /* @__PURE__ */ jsx5(
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
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses4({ disabled, margins, padding });
  return /* @__PURE__ */ jsx6(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ jsxs5(
    MuiIconButton,
    __spreadProps(__spreadValues({}, props), {
      disabled,
      onClick,
      size,
      className: cx(css.root, className),
      children: [
        name && /* @__PURE__ */ jsx6(Icon, __spreadProps(__spreadValues({}, iconProps), { color: color != null ? color : iconProps.color, name })),
        children
      ]
    })
  ) });
};
var useClasses4 = makeClasses((props) => ({
  root: __spreadProps(__spreadValues(__spreadValues({}, makeMargins(props.margins)), makePadding(props.padding)), {
    opacity: props.disabled ? 0.5 : 1,
    transition: "all 100ms ease-in-out"
  })
}));

// trabecula/components/buttons/icon-picker.tsx
import { useEffect as useEffect4, useState as useState4 } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
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
    const [page, setPage] = useState4(1);
    const [searchStyle, setSearchStyle] = useState4("Filled");
    const [searchVal, setSearchVal] = useState4("");
    const searchTerms = searchVal.split(" ").filter((t) => t.length > 0);
    const filteredIcons = ICON_NAMES.filter((icon) => {
      const name = icon.toLowerCase();
      if (icon === value) return false;
      if (withStylePicker) {
        if (searchStyle === "Filled") {
          if (SEARCH_STYLES_UNFILLED.some((s) => name.includes(s.toLowerCase()))) return false;
        } else if (!name.includes(searchStyle.toLowerCase())) return false;
      }
      if (!searchTerms.length) return true;
      return searchTerms.every((term) => name.includes(term.toLowerCase()));
    });
    const pageSize = 25 - ((value == null ? void 0 : value.length) ? 1 : 0);
    const pageCount = Math.ceil(filteredIcons.length / pageSize);
    const pageIcons = [
      (value == null ? void 0 : value.length) ? value : null,
      ...filteredIcons.slice(pageSize * (page - 1), pageSize * page)
    ].filter(Boolean);
    useEffect4(() => {
      if (page > pageCount) setPage(1);
    }, [pageCount, page]);
    const handleNoIcon = () => setValue(null);
    const handleSearchStyleChange = (event) => setSearchStyle(event.target.value);
    const renderButton = (onOpen) => /* @__PURE__ */ jsx7(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ jsxs6(View, { row: true, spacing: "0.5rem", align: "center", padding: { left: "0.5rem" }, children: [
          /* @__PURE__ */ jsx7(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ jsx7(Icon, { name: value })
        ] })
      })
    );
    return /* @__PURE__ */ jsx7(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ jsxs6(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ jsx7(Input, { header: "Search", value: searchVal, setValue: setSearchVal }),
      /* @__PURE__ */ jsx7(
        Button,
        {
          text: "No Icon",
          icon: "Close",
          onClick: handleNoIcon,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ jsxs6(View, { row: true, position: "relative", spacing: "0.5rem", children: [
        !withStylePicker ? null : /* @__PURE__ */ jsx7(Card, { column: true, header: "Style", children: /* @__PURE__ */ jsxs6(RadioGroup, { value: searchStyle, onChange: handleSearchStyleChange, children: [
          /* @__PURE__ */ jsx7(FormControlLabel, { label: "Filled", value: "Filled", control: /* @__PURE__ */ jsx7(Radio, {}) }),
          /* @__PURE__ */ jsx7(FormControlLabel, { label: "Outlined", value: "Outlined", control: /* @__PURE__ */ jsx7(Radio, {}) }),
          /* @__PURE__ */ jsx7(FormControlLabel, { label: "Rounded", value: "Rounded", control: /* @__PURE__ */ jsx7(Radio, {}) }),
          /* @__PURE__ */ jsx7(FormControlLabel, { label: "Two Tone", value: "TwoTone", control: /* @__PURE__ */ jsx7(Radio, {}) }),
          /* @__PURE__ */ jsx7(FormControlLabel, { label: "Sharp", value: "Sharp", control: /* @__PURE__ */ jsx7(Radio, {}) })
        ] }) }),
        /* @__PURE__ */ jsx7(View, { column: true, width: "16rem", height: "19rem", children: chunkArray(pageIcons, 5).map((swatch, i) => /* @__PURE__ */ jsx7(View, { row: true, children: swatch.map((icon) => /* @__PURE__ */ jsx7(
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
        /* @__PURE__ */ jsx7(
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
import { useState as useState5 } from "react";
import { Menu } from "@mui/material";
import { Fragment, jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var MenuButton = (_a) => {
  var _b = _a, {
    anchorOrigin = { horizontal: "right", vertical: "bottom" },
    bgColor = colors.background,
    button,
    children,
    color,
    icon = "MoreVert",
    keepMounted = true,
    menuClassName,
    menuWidth,
    transformOrigin = { horizontal: "right", vertical: "top" }
  } = _b, props = __objRest(_b, [
    "anchorOrigin",
    "bgColor",
    "button",
    "children",
    "color",
    "icon",
    "keepMounted",
    "menuClassName",
    "menuWidth",
    "transformOrigin"
  ]);
  const { css, cx } = useClasses5({ bgColor, menuWidth });
  const [anchorEl, setAnchorEl] = useState5(null);
  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  return /* @__PURE__ */ jsxs7(Fragment, { children: [
    button ? button(handleOpen) : /* @__PURE__ */ jsx8(IconButton, __spreadValues({ name: icon, onClick: handleOpen, iconProps: { color } }, props)),
    /* @__PURE__ */ jsx8(
      Menu,
      {
        anchorEl,
        keepMounted,
        open: Boolean(anchorEl),
        onClose: handleClose,
        anchorOrigin,
        transformOrigin,
        className: cx(css.menu, menuClassName),
        children: typeof children === "function" ? children(handleClose) : children
      }
    )
  ] });
};
var useClasses5 = makeClasses((props) => {
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
import { jsx as jsx9 } from "react/jsx-runtime";
var MultiActionButton = (_a) => {
  var _b = _a, { tooltipProps = {} } = _b, props = __objRest(_b, ["tooltipProps"]);
  return /* @__PURE__ */ jsx9(IconButton, __spreadProps(__spreadValues({}, props), { size: "medium", tooltipProps: __spreadValues({ placement: "bottom" }, tooltipProps) }));
};

// trabecula/components/buttons/sort-menu.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses6({ hasHeader });
  const activeRow = rows.find(({ attribute }) => attribute === (value == null ? void 0 : value.key));
  const renderButton = (onOpen) => /* @__PURE__ */ jsx10(
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
      text: /* @__PURE__ */ jsxs8(View, { column: true, align: "flex-start", justify: "center", width: "100%", children: [
        /* @__PURE__ */ jsx10(Text, { className: css.topText, children: "Sort By" }),
        /* @__PURE__ */ jsx10(Text, { className: css.label, children: activeRow == null ? void 0 : activeRow.label })
      ] })
    })
  );
  return /* @__PURE__ */ jsx10(MenuButton, { button: renderButton, children: /* @__PURE__ */ jsx10(View, { column: true, children: rows.map((rowProps) => /* @__PURE__ */ createElement(SortRow, __spreadProps(__spreadValues({}, rowProps), { setValue, value, key: rowProps.attribute }))) }) });
};
var useClasses6 = makeClasses({
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
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var SortRow = ({
  attribute,
  icon,
  iconProps = {},
  label,
  setValue,
  value
}) => {
  const { css } = useClasses7(null);
  return /* @__PURE__ */ jsxs9(View, { className: css.row, children: [
    /* @__PURE__ */ jsx11(Icon, __spreadValues({ name: icon }, iconProps)),
    /* @__PURE__ */ jsx11(Text, { className: css.label, children: label }),
    /* @__PURE__ */ jsx11(SortButton, { attribute, setValue, value, isDesc: true }),
    /* @__PURE__ */ jsx11(SortButton, { attribute, setValue, value })
  ] });
};
var SortButton = ({ attribute, isDesc = false, setValue, value }) => {
  const isActive = attribute === (value == null ? void 0 : value.key) && isDesc === (value == null ? void 0 : value.isDesc);
  const color = isActive ? colors.custom.blue : colors.custom.lightGrey;
  const updateSort = () => setValue({ isDesc, key: attribute });
  return /* @__PURE__ */ jsx11(
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
var useClasses7 = makeClasses({
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
import { Autocomplete } from "@mui/material";
import { jsx as jsx12 } from "react/jsx-runtime";
var createAutoCompleteOptions = (values) => Array.isArray(values) ? values.map((v) => ({ label: String(v), value: v })) : [];
var AutoComplete = Comp(
  (_a, ref) => {
    var _b = _a, {
      header,
      inputProps = {},
      renderInput,
      required = false
    } = _b, props = __objRest(_b, [
      "header",
      "inputProps",
      "renderInput",
      "required"
    ]);
    return /* @__PURE__ */ jsx12(
      Autocomplete,
      __spreadProps(__spreadValues({
        autoComplete: true,
        autoHighlight: true,
        fullWidth: true,
        size: "small"
      }, props), {
        ref,
        renderInput: renderInput != null ? renderInput : ((params) => /* @__PURE__ */ jsx12(
          Input,
          __spreadProps(__spreadValues(__spreadValues({
            header,
            required,
            variant: "outlined"
          }, inputProps), params), {
            inputProps: __spreadValues(__spreadValues({}, inputProps.inputProps), params.inputProps),
            InputProps: __spreadValues(__spreadValues({}, inputProps.InputProps), params.InputProps),
            stopKeyPropagation: false,
            value: params.inputProps.value
          })
        ))
      })
    );
  }
);

// trabecula/components/inputs/chip-input.tsx
import { useState as useState6 } from "react";
import { Autocomplete as Autocomplete2, Chip, createFilterOptions } from "@mui/material";
import { jsx as jsx13 } from "react/jsx-runtime";
import { createElement as createElement2 } from "react";
var filterOptions = createFilterOptions({ limit: 100, matchFrom: "start" });
var ChipInput = Comp(
  (_a) => {
    var _b = _a, { className, opaque = false, options = [], setValue, value = [] } = _b, props = __objRest(_b, ["className", "opaque", "options", "setValue", "value"]);
    const { css, cx } = useClasses8({ opaque });
    const [inputValue, setInputValue] = useState6("");
    const handleChange = (_, val) => {
      setValue == null ? void 0 : setValue(
        val.map((v) => typeof v === "string" ? { label: v, value: v } : v)
      );
      setInputValue("");
    };
    return /* @__PURE__ */ jsx13(
      Autocomplete2,
      __spreadValues({
        options,
        value,
        getOptionLabel: (option) => option.label,
        renderInput: (params) => /* @__PURE__ */ jsx13(
          Input,
          __spreadProps(__spreadValues({}, params), {
            value: inputValue,
            setValue: setInputValue,
            className: cx(css.input, className)
          })
        ),
        renderTags: (val, getTagProps) => val.map((option, index) => /* @__PURE__ */ createElement2(Chip, __spreadProps(__spreadValues({}, getTagProps({ index })), { key: index, label: option.label }))),
        onChange: handleChange,
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
var useClasses8 = makeClasses((props) => ({
  input: {
    backgroundColor: props.opaque ? colors.mui.grey["800"] : "transparent"
  }
}));

// trabecula/components/inputs/date-input.tsx
import { useEffect as useEffect5, useState as useState7 } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { jsx as jsx14 } from "react/jsx-runtime";
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
    const { css } = useClasses9(null);
    const [dateValue, setDateValue] = useState7((value == null ? void 0 : value.length) ? dayjs(value) : null);
    useEffect5(() => {
      if (value == null ? void 0 : value.length) setDateValue(dayjs(value));
      else setDateValue(null);
    }, [value]);
    const handleChange = (val) => {
      setDateValue(val);
      if (val === null) setValue == null ? void 0 : setValue("");
      else if (val.isValid()) setValue == null ? void 0 : setValue(val.format("YYYY-MM-DD"));
    };
    const textFieldProps = __spreadProps(__spreadValues(__spreadValues({}, inputProps), slotProps == null ? void 0 : slotProps.textField), {
      header,
      headerProps,
      width
    });
    return /* @__PURE__ */ jsx14(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx14(View, __spreadProps(__spreadValues({}, viewProps), { width, children: /* @__PURE__ */ jsx14(
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
var DateTextField = (props) => /* @__PURE__ */ jsx14(Input, __spreadValues({}, props));
var useClasses9 = makeClasses({
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
import { jsx as jsx15 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx15(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ jsx15(
          DateInput,
          __spreadProps(__spreadValues({}, dateInputProps), {
            value: startDate,
            setValue: setStartDate,
            inputProps: { borderRadiuses: { top: 0, right: 0 } }
          })
        ),
        endInput: /* @__PURE__ */ jsx15(
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
import { useEffect as useEffect6, useRef as useRef3, useState as useState8 } from "react";
import {
  Autocomplete as Autocomplete3,
  MenuItem
} from "@mui/material";
import Color4 from "color";

// trabecula/components/inputs/input.tsx
import { InputAdornment, TextField } from "@mui/material";
import Color3 from "color";
import { jsx as jsx16 } from "react/jsx-runtime";
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
    stopKeyPropagation = true,
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
    "stopKeyPropagation",
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
  const inputRootHeight = rawProps.height === void 0 && !rawProps.multiline ? dense ? DENSE_FORM_ROW_HEIGHT : FORM_ROW_HEIGHT : void 0;
  const inputName = (_b = props.name) != null ? _b : typeof resolvedLabel === "string" ? resolvedLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : void 0;
  const { css, cx } = useClasses10({
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
    if (stopKeyPropagation) event.stopPropagation();
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!onEnter || event.defaultPrevented || event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    onEnter();
  };
  return /* @__PURE__ */ jsx16(
    HeaderWrapper,
    {
      flex,
      header: resolvedLabel,
      headerProps: resolvedLabelProps,
      margins: hasLabel ? margins : void 0,
      overflow: "initial",
      textProps: labelTextProps,
      width,
      children: /* @__PURE__ */ jsx16(
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
          helperText: !helperText ? void 0 : typeof helperText === "string" ? /* @__PURE__ */ jsx16(Text, __spreadProps(__spreadValues({ color: (_d = helperTextProps.color) != null ? _d : color }, helperTextProps), { children: helperText })) : helperText,
          FormHelperTextProps: { component: "div" },
          inputProps: __spreadProps(__spreadValues({
            title: typeof value === "string" ? value : void 0
          }, inputProps), {
            maxLength,
            value: value != null ? value : ""
          }),
          InputProps: __spreadValues({
            endAdornment: adornmentPosition === "end" && adornment ? /* @__PURE__ */ jsx16(InputAdornment, { position: "end", children: typeof adornment === "string" ? /* @__PURE__ */ jsx16(Text, { fontSize: "0.9em", color: adornmentColor, children: adornment }) : adornment }) : null,
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
var useClasses10 = makeClasses((props) => {
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
        boxSizing: props.inputRootHeight ? "border-box" : void 0,
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
          borderColor: props.color ? Color3(props.color).lighten(0.3).toString() : void 0
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
import { jsx as jsx17 } from "react/jsx-runtime";
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
  const resolvedLabel = label != null ? label : header;
  const resolvedHeader = typeof resolvedLabel === "string" && required ? `${resolvedLabel} *` : resolvedLabel;
  const committedLabel = value === "" ? "" : (_b2 = (_a2 = options.find((option) => option.value === value)) == null ? void 0 : _a2.label) != null ? _b2 : freeSolo && typeof value === "string" ? value : "";
  const [inputValue, setInputValue] = useState8(committedLabel);
  const [valueOption, setValueOption] = useState8(null);
  const containerRef = useRef3(null);
  const isTypingRef = useRef3(false);
  const { width: inputWidth } = useElementResize(containerRef);
  const { css, cx } = useClasses11({
    dense,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputLineHeight,
    inputOutlineWidth,
    inputPadding,
    inputRootAlignItems,
    inputRootHeight,
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
    paperWidth: props.width || inputWidth,
    textColor
  });
  useEffect6(() => {
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
      else if (optionLabel.startsWith(searchString)) return 50;
      else if (optionLabel.includes(joinedTerms)) return 25;
      else return 10;
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
    } else {
      const newValueOption = (newValue == null ? void 0 : newValue.value) === "" ? null : newValue;
      setValue(newValue == null ? void 0 : newValue.value);
      setValueOption(newValueOption);
      setInputValue((_a3 = newValueOption == null ? void 0 : newValueOption.label) != null ? _a3 : "");
    }
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
  const renderInput = (params) => /* @__PURE__ */ jsx17(
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
    /* @__PURE__ */ jsx17(Text, __spreadProps(__spreadValues({}, optionTextProps), { children: option.label }))
  );
  return /* @__PURE__ */ jsx17(
    HeaderWrapper,
    {
      ref: containerRef,
      header: resolvedHeader,
      headerProps: deepMerge(DEFAULT_INPUT_HEADER_PROPS, (_c = labelProps != null ? labelProps : headerProps) != null ? _c : {}),
      overflow: "initial",
      textProps: labelTextProps,
      width: (_d = props.width) != null ? _d : "100%",
      children: /* @__PURE__ */ jsx17(
        Autocomplete3,
        {
          autoHighlight,
          autoSelect,
          className: css.autocomplete,
          componentsProps: { paper: { className: css.paper } },
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
          popupIcon: /* @__PURE__ */ jsx17(Icon, { name: "ArrowDropDown", color: caretColor, size: caretSize }),
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
var useClasses11 = makeClasses((props) => {
  var _a;
  const inputPadding = (_a = props.inputPadding) != null ? _a : props.dense ? DENSE_INPUT_PADDING : void 0;
  return {
    autocomplete: {
      height: "100%",
      "& > [aria-label='header-wrapper-content'], & .MuiFormControl-root": {
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
        backgroundColor: props.itemBgColor ? Color4(props.itemBgColor).lighten(0.05).hex() : void 0
      },
      "&:not(:last-of-type)": {
        borderBottom: props.menuItemBorder
      }
    },
    paper: {
      border: props.paperBorder,
      borderRadius: props.paperBorderRadius,
      maxWidth: props.paperWidth,
      minWidth: props.paperWidth
    }
  };
});

// trabecula/components/inputs/filter-header.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var FilterHeader = Comp(({ label, mode, setMode }) => {
  const toggleMode = () => setMode(mode === "required" ? "optional" : "required");
  return /* @__PURE__ */ jsx18(
    HeaderContent,
    {
      rightNode: /* @__PURE__ */ jsx18(
        IconButton,
        {
          color: mode === "optional" ? colors.custom.lightBlue : colors.custom.grey,
          iconProps: { size: "0.8rem" },
          name: mode === "optional" ? "AddCircle" : "Circle",
          onClick: toggleMode,
          padding: { all: 0 },
          tooltip: mode === "optional" ? "Optional" : "Required"
        }
      ),
      children: /* @__PURE__ */ jsx18(Text, { fontSize: "0.8em", textAlign: "center", children: label })
    }
  );
});

// trabecula/components/inputs/filter-menu.tsx
import { useEffect as useEffect7, useState as useState9 } from "react";
import { Fragment as Fragment2, jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
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
    const renderButton = (onOpen) => /* @__PURE__ */ jsx19(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color: store.hasChanges ? colors.custom.purple : color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ jsxs10(View, { row: true, align: "center", spacing: "0.5rem", children: [
          /* @__PURE__ */ jsx19(Icon, { name: "FilterAlt", size: "1.15em" }),
          /* @__PURE__ */ jsx19(Text, { children: "Filter Results" })
        ] })
      })
    );
    return /* @__PURE__ */ jsx19(MenuButton, __spreadProps(__spreadValues({ button: renderButton }, menuProps), { children: /* @__PURE__ */ jsxs10(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ jsxs10(View, { row: true, spacing: "0.5rem", width: "100%", children: [
        /* @__PURE__ */ jsx19(
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
        /* @__PURE__ */ jsx19(
          Button,
          {
            icon: "Refresh",
            onClick: handleReset,
            disabled: store.isLoading,
            color: colors.foregroundCard,
            colorOnHover: colors.custom.red
          }
        ),
        /* @__PURE__ */ jsx19(
          SortMenu,
          {
            rows: sortOptions,
            value: store.sortValue,
            setValue: store.setSortValue,
            color: colors.foregroundCard,
            width: "9rem"
          }
        ),
        hasSavedSearchApi && /* @__PURE__ */ jsxs10(Fragment2, { children: [
          /* @__PURE__ */ jsx19(Divider, { orientation: "vertical" }),
          /* @__PURE__ */ jsx19(SavedSearchMenu, { store })
        ] })
      ] }),
      children
    ] })) }));
  }
);
var SavedSearchMenu = Comp(({ store }) => {
  var _a;
  const [inputValue, setInputValue] = useState9("");
  const [label, setLabel] = useState9("");
  const activeSearch = store.savedSearches.find((s) => s.id === store.selectedSavedSearchId);
  const options = store.savedSearches.map((savedSearch) => ({
    label: savedSearch.label,
    value: savedSearch.id
  }));
  useEffect7(() => {
    store.loadSavedSearches();
  }, [store]);
  useEffect7(() => {
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
  const handleSelect = (_, value, reason) => {
    if (value === "" && reason === "reset") return;
    setInputValue(value);
    const selectedSearch = options.find((option) => option.label === value);
    if (selectedSearch) store.applySavedSearch(selectedSearch.value);
  };
  return /* @__PURE__ */ jsxs10(Fragment2, { children: [
    /* @__PURE__ */ jsx19(
      AutoComplete,
      {
        options,
        inputValue,
        isOptionEqualToValue: (option, value) => option.value === value.value,
        onInputChange: handleSelect,
        inputProps: {
          height: "1em",
          placeholder: "Saved Searches",
          width: "100%"
        }
      }
    ),
    /* @__PURE__ */ jsx19(
      Button,
      {
        icon: "Save",
        onClick: handleEdit,
        disabled: store.isLoading,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.blue
      }
    ),
    /* @__PURE__ */ jsx19(
      Button,
      {
        icon: "Delete",
        onClick: () => store.setIsDeleteModalOpen(true),
        disabled: store.isLoading || !store.selectedSavedSearchId,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.red
      }
    ),
    store.isDeleteModalOpen && /* @__PURE__ */ jsx19(
      ConfirmModal,
      {
        subText: `Delete saved search "${(_a = activeSearch == null ? void 0 : activeSearch.label) != null ? _a : "Selected Search"}"?`,
        setVisible: store.setIsDeleteModalOpen,
        onConfirm: handleDelete
      }
    ),
    store.isSaveModalOpen && /* @__PURE__ */ jsx19(
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
var SavedSearchModal = Comp(({ label, onClose, onSave, setLabel }) => /* @__PURE__ */ jsxs10(Modal.Container, { onClose, width: "24rem", children: [
  /* @__PURE__ */ jsx19(Modal.Header, { children: /* @__PURE__ */ jsx19(Text, { preset: "title", children: "Save Search" }) }),
  /* @__PURE__ */ jsx19(Modal.Content, { spacing: "0.5rem", dividers: false, children: /* @__PURE__ */ jsx19(Input, { header: "Label", value: label, setValue: setLabel, autoFocus: true }) }),
  /* @__PURE__ */ jsxs10(Modal.Footer, { children: [
    /* @__PURE__ */ jsx19(Button, { text: "Cancel", icon: "Close", onClick: onClose, color: colors.foregroundCard }),
    /* @__PURE__ */ jsx19(
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
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs11(HeaderWrapper, __spreadProps(__spreadValues({ row: true, overflow: "hidden", header, headerProps }, props), { children: [
      /* @__PURE__ */ jsx20(
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
      /* @__PURE__ */ jsx20(
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
import { useState as useState10 } from "react";

// trabecula/components/inputs/multi-input-list.tsx
import { forwardRef as forwardRef2 } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";

// trabecula/components/inputs/multi-input-row.tsx
import { jsx as jsx21, jsxs as jsxs12 } from "react/jsx-runtime";
var MULTI_INPUT_ROW_HEIGHT = 35;
var MultiInputRow = (_a) => {
  var _b = _a, { bgColor } = _b, props = __objRest(_b, ["bgColor"]);
  var _a2, _b2;
  const hasClick = !!props.onClick;
  const { css } = useClasses12({ bgColor: bgColor || colors.foreground, hasClick });
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
  return /* @__PURE__ */ jsxs12(View, { row: true, className: css.root, style: props.style, children: [
    props.leftNode,
    /* @__PURE__ */ jsx21(
      View,
      {
        onClick: hasClick ? handleClick : null,
        row: true,
        flex: 1,
        overflow: "hidden",
        padding: { all: "0 0.3rem" },
        children: /* @__PURE__ */ jsx21(
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
    props.hasDelete && /* @__PURE__ */ jsx21(
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
var useClasses12 = makeClasses((props) => ({
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
import { jsx as jsx22, jsxs as jsxs13 } from "react/jsx-runtime";
var MultiInputList = forwardRef2(
  ({
    hasDelete,
    hasDeleteAll = false,
    hasInput,
    renderRow,
    search,
    viewProps = {}
  }, ref) => {
    const { css } = useClasses13({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return /* @__PURE__ */ jsxs13(View, { column: true, height: "100%", children: [
      /* @__PURE__ */ jsx22(
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
          children: !search.value.length ? /* @__PURE__ */ jsx22(CenteredText, { text: "No items", color: colors.custom.grey }) : /* @__PURE__ */ jsx22(View, { flex: 1, children: /* @__PURE__ */ jsx22(AutoSizer, { disableWidth: true, children: ({ height }) => /* @__PURE__ */ jsx22(
            FixedSizeList,
            {
              ref,
              height,
              width: "100%",
              layout: "vertical",
              itemSize: MULTI_INPUT_ROW_HEIGHT,
              itemCount: search.value.length,
              children: ({ index, style }) => renderRow ? renderRow(index, style) : /* @__PURE__ */ jsx22(
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
      hasDeleteAll && /* @__PURE__ */ jsx22(
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
var useClasses13 = makeClasses((props) => ({
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
import { Fragment as Fragment3, jsx as jsx23, jsxs as jsxs14 } from "react/jsx-runtime";
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
    const [inputValue, setInputValue] = useState10("");
    const onKeyDown = (e) => {
      if (e.key === "Enter" && !isMax) {
        e.preventDefault();
        if (!value.includes(inputValue)) onChange([...value, inputValue]);
        setInputValue("");
      }
    };
    const renderList = () => /* @__PURE__ */ jsx23(
      MultiInputList,
      {
        hasDelete,
        hasDeleteAll,
        search: { onChange, value },
        hasInput: true
      }
    );
    return /* @__PURE__ */ jsx23(View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? /* @__PURE__ */ jsx23(HeaderWrapper, { header, headerProps, children: renderList() }) : /* @__PURE__ */ jsxs14(Fragment3, { children: [
      /* @__PURE__ */ jsx23(
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
import { useState as useState11 } from "react";
import { jsx as jsx24 } from "react/jsx-runtime";
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
    const [error, setError] = useState11(null);
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
        if (maxValue != null && +val > maxValue)
          hasHelper ? setError(`Max: ${maxValue}`) : toast.error(`Max: ${maxValue}`);
        else if (minValue != null && +val < minValue)
          hasHelper ? setError(`Min: ${minValue}`) : toast.error(`Min: ${minValue}`);
        else setError(null);
      }
    };
    return /* @__PURE__ */ jsx24(
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
import { jsx as jsx25 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx25(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ jsx25(
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
        endInput: /* @__PURE__ */ jsx25(
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
import { jsx as jsx26, jsxs as jsxs15 } from "react/jsx-runtime";
var RangeWrapper = Comp((props) => {
  return /* @__PURE__ */ jsxs15(HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [
    props.startInput,
    /* @__PURE__ */ jsx26(
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
        children: /* @__PURE__ */ jsx26(Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "\u2014" })
      }
    ),
    props.endInput
  ] });
});

// trabecula/components/inputs/slider.tsx
import { Slider as MuiSlider } from "@mui/material";
import { jsx as jsx27 } from "react/jsx-runtime";
var Slider = Comp(
  (_a, ref) => {
    var _b = _a, {
      className,
      color = colors.custom.lightBlue,
      flex,
      height,
      margins,
      onCommit,
      orientation = "horizontal",
      padding,
      setValue,
      value,
      width
    } = _b, props = __objRest(_b, [
      "className",
      "color",
      "flex",
      "height",
      "margins",
      "onCommit",
      "orientation",
      "padding",
      "setValue",
      "value",
      "width"
    ]);
    const { css, cx } = useClasses14({ color, flex, height, margins, orientation, padding, width });
    const handleChange = (_, value2) => setValue == null ? void 0 : setValue(value2);
    const handleCommit = (_, value2) => onCommit == null ? void 0 : onCommit(value2);
    return /* @__PURE__ */ jsx27(
      MuiSlider,
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: cx(css.slider, className),
        onChange: handleChange,
        onChangeCommitted: handleCommit,
        orientation,
        value
      })
    );
  }
);
var useClasses14 = makeClasses((props) => ({
  slider: __spreadProps(__spreadValues(__spreadValues({
    color: props.color,
    "& .MuiSlider-markLabel": {
      top: props.orientation === "horizontal" ? -10 : void 0,
      fontSize: "0.65em",
      fontWeight: 600
    },
    "& .MuiSlider-thumb": {
      borderRadius: "0.5rem",
      height: props.orientation === "vertical" ? 4 : 18,
      width: props.orientation === "vertical" ? 18 : 4
    },
    flex: props.flex,
    height: props.height
  }, makeMargins(props.margins)), makePadding(props.padding)), {
    width: props.width
  })
}));

// trabecula/components/inputs/time-input.tsx
import { useEffect as useEffect8, useState as useState12 } from "react";
import { LocalizationProvider as LocalizationProvider2 } from "@mui/x-date-pickers";
import { AdapterDayjs as AdapterDayjs2 } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { jsx as jsx28 } from "react/jsx-runtime";
var TimeInput = (_a) => {
  var _b = _a, {
    inputProps = {},
    label,
    labelProps = {},
    setValue,
    slotProps = {},
    value,
    viewProps = {},
    width
  } = _b, timePickerProps = __objRest(_b, [
    "inputProps",
    "label",
    "labelProps",
    "setValue",
    "slotProps",
    "value",
    "viewProps",
    "width"
  ]);
  const { css } = useClasses15(null);
  const [timeValue, setTimeValue] = useState12(
    (value == null ? void 0 : value.length) ? dayjs(value, TIME_FORMAT) : null
  );
  useEffect8(() => {
    if (value == null ? void 0 : value.length) setTimeValue(dayjs(value, TIME_FORMAT));
    else setTimeValue(null);
  }, [value]);
  const handleChange = (val) => {
    setTimeValue(val);
    if (val === null) setValue == null ? void 0 : setValue("");
    else if (val.isValid()) setValue == null ? void 0 : setValue(val.format(TIME_FORMAT));
  };
  const textFieldProps = __spreadProps(__spreadValues(__spreadValues({}, inputProps), slotProps == null ? void 0 : slotProps.textField), {
    label,
    labelProps,
    width
  });
  return /* @__PURE__ */ jsx28(LocalizationProvider2, { dateAdapter: AdapterDayjs2, children: /* @__PURE__ */ jsx28(View, __spreadProps(__spreadValues({}, viewProps), { width, children: /* @__PURE__ */ jsx28(
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
var TimeTextField = (props) => /* @__PURE__ */ jsx28(Input, __spreadValues({}, props));
var TIME_FORMAT = "HH:mm:ss";
var useClasses15 = makeClasses({
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
import { jsx as jsx29, jsxs as jsxs16 } from "react/jsx-runtime";
var DetailRows = ({ labelWidth = "8rem", rows }) => {
  const { css } = useClasses16({ labelWidth });
  return /* @__PURE__ */ jsx29(View, { className: css.table, children: rows.map(({ label, value }, i) => /* @__PURE__ */ jsxs16(View, { className: css.row, children: [
    typeof label === "string" ? /* @__PURE__ */ jsx29(Text, { className: css.label, children: label }) : label,
    typeof value === "string" ? /* @__PURE__ */ jsx29(Text, { noWrap: true, tooltip: value, children: value }) : value
  ] }, `${i}-${label}`)) });
};
var useClasses16 = makeClasses((props) => ({
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
import { jsx as jsx30 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses17({ dividerColor, noDividers });
  return /* @__PURE__ */ jsx30(MuiList, __spreadProps(__spreadValues({ className: cx(css.list, className) }, props), { children }));
};
var useClasses17 = makeClasses((props) => ({
  list: {
    padding: 0,
    "& > *:not(:last-child)": {
      borderBottom: props.noDividers ? void 0 : `1px solid ${props.dividerColor}`
    }
  }
}));

// trabecula/components/list/list-item.tsx
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import Color5 from "color";
import { jsx as jsx31, jsxs as jsxs17 } from "react/jsx-runtime";
var DEFAULT_ICON_END_MARGINS = { left: "1em" };
var DEFAULT_ICON_MARGINS = { right: "1em" };
var ListItem = (_a) => {
  var _b = _a, {
    children,
    color,
    icon,
    iconEnd,
    iconEndMargins,
    iconMargins,
    iconProps,
    onClick,
    text
  } = _b, props = __objRest(_b, [
    "children",
    "color",
    "icon",
    "iconEnd",
    "iconEndMargins",
    "iconMargins",
    "iconProps",
    "onClick",
    "text"
  ]);
  iconMargins = __spreadValues(__spreadValues({}, DEFAULT_ICON_MARGINS), iconMargins);
  iconEndMargins = __spreadValues(__spreadValues({}, DEFAULT_ICON_END_MARGINS), iconEndMargins);
  const { css, cx } = useClasses18({ color });
  return /* @__PURE__ */ jsx31(
    TooltipWrapper,
    {
      tooltip: children,
      tooltipProps: {
        arrow: false,
        bgColor: Color5(colors.custom.black).fade(0.03).hex(),
        padding: 0,
        placement: "right-start",
        PopperProps: { className: css.tooltipPopper }
      },
      children: /* @__PURE__ */ jsxs17(
        MuiListItem,
        __spreadProps(__spreadValues({
          button: Boolean(onClick),
          onClick,
          className: cx(css.root, props.className)
        }, props), {
          children: [
            icon && /* @__PURE__ */ jsx31(ListItemIcon, { className: css.icon, children: /* @__PURE__ */ jsx31(Icon, __spreadProps(__spreadValues({}, iconProps), { name: icon, margins: iconMargins })) }),
            /* @__PURE__ */ jsx31(ListItemText, { className: css.text, children: text }),
            iconEnd && /* @__PURE__ */ jsx31(ListItemIcon, { className: css.icon, children: /* @__PURE__ */ jsx31(Icon, { name: iconEnd, margins: iconEndMargins }) })
          ]
        })
      )
    }
  );
};
var useClasses18 = makeClasses((props) => ({
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
  tooltipPopper: {
    marginLeft: "-0.75rem !important"
  }
}));

// trabecula/components/media/icon.tsx
import { Icon as MuiIcon } from "@mui/material";
import { jsx as jsx32 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses19({
    color,
    hasLayers: !!(layers == null ? void 0 : layers.length),
    layers,
    layerSize: size != null ? size : (_a2 = layers == null ? void 0 : layers[0]) == null ? void 0 : _a2.size,
    rotation,
    size
  });
  return /* @__PURE__ */ jsx32(View, __spreadProps(__spreadValues({ column: true, margins, className: cx(css.root, className) }, viewProps), { children: (layers == null ? void 0 : layers.length) ? layers.map((layer, i) => /* @__PURE__ */ createElement4(
    MuiIcon,
    __spreadProps(__spreadValues({}, props), {
      baseClassName: getIconClassName(layer.name),
      key: `${layer.name}-${i}`,
      className: css.layer,
      "data-icon-layer": i
    }),
    ICON_LIGATURES[layer.name]
  )) : name ? /* @__PURE__ */ jsx32(
    MuiIcon,
    __spreadProps(__spreadValues({}, props), {
      baseClassName: getIconClassName(name),
      className: css.icon,
      style: style && __spreadProps(__spreadValues({}, style), { color, fontSize: size }),
      children: ICON_LIGATURES[name]
    })
  ) : "" }));
};
var getIconClassName = (name) => name in COUNTRY_FLAG_LIGATURES ? "country-flags" : "material-icons";
var defaultCssValue = (value) => value === void 0 ? "0" : typeof value === "number" ? `${value}px` : value;
var makeLayerTransform = ({ rotation, x, y }) => {
  const offsetX = defaultCssValue(x);
  const offsetY = defaultCssValue(y);
  const rotate = rotation !== void 0 ? ` rotate(${rotation}deg)` : "";
  return `translate(-50%, -50%) translate(${offsetX}, ${offsetY})${rotate}`;
};
var useClasses19 = makeClasses((props) => {
  var _a;
  const rootSize = !props.hasLayers ? void 0 : defaultCssValue(props.layerSize);
  return {
    icon: {
      "&.MuiIcon-root": {
        color: props.color,
        fontSize: props.size
      }
    },
    layer: {
      left: "50%",
      position: "absolute",
      top: "50%"
    },
    root: __spreadProps(__spreadValues({}, Object.fromEntries(
      ((_a = props.layers) != null ? _a : []).map((layer, index) => {
        var _a2, _b;
        return [
          `& > [data-icon-layer="${index}"]`,
          {
            color: (_a2 = layer.color) != null ? _a2 : props.color,
            fontSize: (_b = layer.size) != null ? _b : props.size,
            transform: makeLayerTransform(layer)
          }
        ];
      })
    )), {
      alignItems: props.hasLayers ? "center" : void 0,
      height: rootSize,
      justifyContent: "center",
      position: props.hasLayers ? "relative" : void 0,
      transform: props.rotation !== void 0 ? `rotate(${props.rotation}deg)` : void 0,
      transition: "all 200ms ease-in-out",
      width: rootSize
    })
  };
});

// trabecula/components/modals/confirm-modal.tsx
import { useState as useState13 } from "react";
import { jsx as jsx33, jsxs as jsxs18 } from "react/jsx-runtime";
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
  const [isLoading, setIsLoading] = useState13(false);
  const handleClose = () => setVisible(false);
  const handleCancel = () => {
    if (!isLoading) {
      onCancel == null ? void 0 : onCancel();
      handleClose();
    }
  };
  const handleConfirm = () => __async(null, null, function* () {
    var _a;
    if (!isLoading) {
      setIsLoading(true);
      try {
        const success = yield onConfirm();
        if (success) handleClose();
      } catch (error) {
        toast.error((_a = error == null ? void 0 : error.message) != null ? _a : String(error));
      } finally {
        setIsLoading(false);
      }
    }
  });
  return /* @__PURE__ */ jsxs18(Modal.Container, { isLoading, onClose: handleCancel, height, width, children: [
    /* @__PURE__ */ jsx33(Modal.Header, { children: /* @__PURE__ */ jsx33(Text, { preset: "title", children: headerText }) }),
    /* @__PURE__ */ jsxs18(Modal.Content, { align: "center", justify: "center", children: [
      /* @__PURE__ */ jsx33(Icon, { name: "Delete", color: colors.custom.red, size: "5rem" }),
      (subText == null ? void 0 : subText.length) > 0 ? /* @__PURE__ */ jsx33(Text, { fontSize: "1.3em", textAlign: "center", whiteSpace: "normal", children: subText }) : null,
      children
    ] }),
    /* @__PURE__ */ jsxs18(Modal.Footer, { children: [
      /* @__PURE__ */ jsx33(
        Button,
        {
          text: cancelText,
          icon: cancelIcon,
          color: cancelColor,
          onClick: handleCancel,
          disabled: isLoading
        }
      ),
      /* @__PURE__ */ jsx33(
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
import { useRef as useRef4 } from "react";
import Draggable from "react-draggable";
import { Dialog, Paper } from "@mui/material";
import { jsx as jsx34, jsxs as jsxs19 } from "react/jsx-runtime";
var Container = (_a) => {
  var _b = _a, {
    children,
    className,
    closeOnBackdrop = true,
    draggable = false,
    height,
    isLoading,
    margin = "20px",
    maxHeight,
    maxWidth,
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
    "margin",
    "maxHeight",
    "maxWidth",
    "onClose",
    "scroll",
    "visible",
    "width"
  ]);
  const { css, cx } = useClasses20({ height, margin, maxHeight, maxWidth, width });
  const handleClose = (_, reason) => {
    if (reason !== "backdropClick" || closeOnBackdrop) onClose == null ? void 0 : onClose();
  };
  return /* @__PURE__ */ jsxs19(
    Dialog,
    __spreadProps(__spreadValues({}, props), {
      scroll,
      PaperComponent: draggable ? DraggablePaper : void 0,
      open: visible,
      onClose: handleClose,
      className: cx(css.modal, className),
      children: [
        /* @__PURE__ */ jsx34(LoadingOverlay, { isLoading }),
        children
      ]
    })
  );
};
var DraggablePaper = (props) => {
  const { css, cx } = useDraggableClasses(null);
  const ref = useRef4(null);
  return /* @__PURE__ */ jsx34(Draggable, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: /* @__PURE__ */ jsx34(Paper, __spreadProps(__spreadValues({}, props), { ref, className: cx(props.className, css.draggable) })) });
};
var useClasses20 = makeClasses((props) => {
  var _a, _b;
  return {
    modal: {
      "& .MuiDialog-paper": {
        position: "relative",
        margin: props.margin,
        maxHeight: (_a = props.maxHeight) != null ? _a : `calc(100% - 2 * ${props.margin})`,
        maxWidth: (_b = props.maxWidth) != null ? _b : `calc(100% - 2 * ${props.margin})`,
        height: props.height,
        width: props.width,
        background: colors.background,
        overflow: "hidden"
      }
    }
  };
});
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
import { jsx as jsx35 } from "react/jsx-runtime";
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
  const { css } = useClasses21(null);
  padding = __spreadValues({ all: `${dividers ? "0.5rem" : "0.2rem"} 1rem` }, padding);
  return /* @__PURE__ */ jsx35(DialogContent, { dividers, className: css.content, children: /* @__PURE__ */ jsx35(
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
var useClasses21 = makeClasses({
  content: {
    display: "flex",
    padding: 0
  }
});

// trabecula/components/modals/modal/footer.tsx
import { DialogActions } from "@mui/material";
import { jsx as jsx36 } from "react/jsx-runtime";
var Footer = (_a) => {
  var _b = _a, { children, uniformWidth = "10rem" } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  return /* @__PURE__ */ jsx36(DialogActions, { children: /* @__PURE__ */ jsx36(
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
import { jsx as jsx37 } from "react/jsx-runtime";
var Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode
}) => {
  const { css, cx } = useClasses22({ justify });
  return /* @__PURE__ */ jsx37(DialogTitle, { className: cx(css.root, className), children: /* @__PURE__ */ jsx37(HeaderContent, { leftNode, rightNode, children }) });
};
var useClasses22 = makeClasses((props) => ({
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
import { LinearProgress as LinearProgress2 } from "@mui/material";
import Color6 from "color";
import { jsx as jsx38, jsxs as jsxs20 } from "react/jsx-runtime";
var ProgressBar = Comp((props) => {
  var _a, _b, _c, _d, _e;
  const minWidth = (props == null ? void 0 : props.minWidth) || "2em";
  const { css } = useClasses23(null);
  return /* @__PURE__ */ jsxs20(View, __spreadProps(__spreadValues({ row: true, flex: 1, align: "center", spacing: "1rem" }, props.viewProps), { children: [
    props.withText ? /* @__PURE__ */ jsxs20(View, { row: true, spacing: "0.5rem", children: [
      /* @__PURE__ */ jsx38(Text, { minWidth, textAlign: "center", children: props.numerator > -1 ? (_b = (_a = props.numeratorFormatter) == null ? void 0 : _a.call(props, props.numerator)) != null ? _b : props.numerator : "--" }),
      /* @__PURE__ */ jsx38(Text, { children: "/" }),
      /* @__PURE__ */ jsx38(Text, { minWidth, textAlign: "center", color: colors.custom.lightGrey, children: props.denominator > -1 ? (_d = (_c = props.denominatorFormatter) == null ? void 0 : _c.call(props, props.denominator)) != null ? _d : props.denominator : "--" })
    ] }) : null,
    /* @__PURE__ */ jsx38(
      LinearProgress2,
      {
        "aria-label": props["aria-label"],
        "aria-labelledby": props["aria-labelledby"],
        variant: (_e = props.variant) != null ? _e : "determinate",
        value: Math.min(
          100,
          Math.max(0, (props.numerator || 0) / (props.denominator || 1) * 100)
        ),
        className: css.progressBar
      }
    )
  ] }));
});
var useClasses23 = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: Color6(colors.custom.blue).fade(0.5).string(),
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue
    }
  }
});

// trabecula/components/progress/circle.tsx
import { CircularProgress } from "@mui/material";
import Color7 from "color";
import { jsx as jsx39, jsxs as jsxs21 } from "react/jsx-runtime";
var ProgressCircle = Comp((props) => {
  var _a;
  const color = props.color || colors.custom.white;
  const { css } = useClasses24({
    bgColor: props.variant === "indeterminate" ? void 0 : props.bgColor || Color7(color).fade(0.5).string(),
    color
  });
  return /* @__PURE__ */ jsxs21(View, { column: true, position: "relative", justify: "center", align: "center", children: [
    /* @__PURE__ */ jsx39(View, { column: true, position: "absolute", children: props.children }),
    /* @__PURE__ */ jsx39(
      CircularProgress,
      {
        color: "inherit",
        value: props.percent || 0,
        variant: (_a = props.variant) != null ? _a : "determinate",
        size: props.size,
        className: css.circle
      }
    ),
    props.variant !== "indeterminate" && /* @__PURE__ */ jsx39(View, { column: true, position: "absolute", children: /* @__PURE__ */ jsx39(
      CircularProgress,
      {
        color: "inherit",
        value: 100,
        variant: "determinate",
        size: props.size,
        className: css.bgCircle
      }
    ) })
  ] });
});
var useClasses24 = makeClasses((props) => ({
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
import { useEffect as useEffect9, useMemo as useMemo2, useState as useState14 } from "react";
import { jsx as jsx40, jsxs as jsxs22 } from "react/jsx-runtime";
var DataGrid = ({
  alternatingBgColor = colors.foregroundCard,
  alternatingColors = true,
  className,
  columns,
  data,
  defaultTextPreset,
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
  rowAlign = "start",
  rowGap = "0.5rem",
  rowPadding = { all: "0.3rem" },
  rowsPerPage = 15,
  selectedBgColor = colors.custom.blue,
  selectedTextColor = colors.custom.white,
  spacing = "0.3rem",
  textPreset = "default"
}) => {
  const [columnResize, setColumnResize] = useState14(null);
  const [columnWidths, setColumnWidths] = useState14(
    {}
  );
  const [expandedRows, setExpandedRows] = useState14(/* @__PURE__ */ new Set());
  const [page, setPage] = useState14(1);
  const [search, setSearch] = useState14("");
  const [sort, setSort] = useState14(initialSort != null ? initialSort : null);
  useEffect9(() => {
    if (isExpanded === false) setExpandedRows(/* @__PURE__ */ new Set());
  }, [isExpanded]);
  useEffect9(() => {
    if (!columnResize) return;
    const bodyCursor = document.body.style.cursor;
    const bodyUserSelect = document.body.style.userSelect;
    const handlePointerMove = (event) => {
      const width = clampDataGridColumnWidth(
        columnResize.startWidth + event.clientX - columnResize.startClientX,
        columnResize.minWidth,
        columnResize.maxWidth
      );
      setColumnWidths(
        (prev) => prev[columnResize.key] === width ? prev : __spreadProps(__spreadValues({}, prev), { [columnResize.key]: width })
      );
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
  useEffect9(() => {
    setPage(1);
  }, [data, search, sort]);
  const resizedColumns = useMemo2(
    () => columns.map((column) => {
      const width = columnWidths[column.key];
      return width === void 0 ? column : __spreadProps(__spreadValues({}, column), { width: `${width}px` });
    }),
    [columns, columnWidths]
  );
  const filteredData = useMemo2(() => {
    const indexedData = data.map((row, index) => ({ index, row }));
    const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!searchTerms.length) return indexedData;
    const searchColumns = columns.filter((column) => column.searchable !== false);
    return indexedData.filter(({ row }) => {
      const searchText = searchColumns.map((column) => getDataGridValueText(getDataGridColumnValue(row, column, "search"))).join(" ").toLowerCase();
      return searchTerms.every((term) => searchText.includes(term));
    });
  }, [columns, data, search]);
  const sortedData = useMemo2(() => {
    if (!hasSorting || !sort) return filteredData;
    const column = columns.find(({ key }) => key === sort.key);
    if (!column || column.sortable === false) return filteredData;
    return filteredData.map((item) => ({ item, value: getDataGridColumnValue(item.row, column, "sort") })).sort((a, b) => {
      const compared = compareDataGridValues(a.value, b.value);
      return compared === 0 ? a.item.index - b.item.index : sort.direction === "asc" ? compared : -compared;
    }).map(({ item }) => item);
  }, [columns, filteredData, hasSorting, sort]);
  const pageSize = Number.isSafeInteger(rowsPerPage) && rowsPerPage > 0 ? rowsPerPage : 15;
  const pageCount = hasPagination ? Math.ceil(sortedData.length / pageSize) : 1;
  const currentPage = Math.min(page, Math.max(pageCount, 1));
  const displayedData = hasPagination ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sortedData;
  useEffect9(() => {
    setPage((previous) => Math.min(previous, Math.max(pageCount, 1)));
  }, [pageCount]);
  const handleSort = (column) => {
    setSort((prev) => ({
      direction: (prev == null ? void 0 : prev.key) === column.key && prev.direction === "asc" ? "desc" : "asc",
      key: column.key
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
  return !data.length ? /* @__PURE__ */ jsx40(View, { display: "flex", justify: emptyJustify, children: /* @__PURE__ */ jsx40(Text, { preset: textPreset, color: emptyColor, children: emptyMessage }) }) : /* @__PURE__ */ jsxs22(View, { column: true, spacing, width: "100%", children: [
    !hasSearch ? null : /* @__PURE__ */ jsxs22(View, { row: true, justify: "flex-end", align: "center", spacing: "0.5rem", width: "100%", children: [
      /* @__PURE__ */ jsx40(Text, { preset: textPreset, whiteSpace: "nowrap", children: "Search all columns:" }),
      /* @__PURE__ */ jsx40(Input, { dense: true, value: search, setValue: setSearch, height: "1.5rem", width: "16rem" })
    ] }),
    /* @__PURE__ */ jsx40(
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
    !displayedData.length ? /* @__PURE__ */ jsx40(View, { display: "flex", justify: emptyJustify, children: /* @__PURE__ */ jsx40(Text, { preset: textPreset, color: emptyColor, children: emptyMessage }) }) : /* @__PURE__ */ jsx40(View, { column: true, width: "100%", children: displayedData.map(({ row }, index) => /* @__PURE__ */ jsx40(
      DataGridRow,
      {
        alternatingBgColor,
        alternatingColors,
        className,
        columns: resizedColumns,
        defaultTextPreset: defaultTextPreset != null ? defaultTextPreset : textPreset,
        expandableContent,
        expandedRows,
        expandColumnWidth,
        getRowBgColor,
        index,
        isRowSelected,
        onRowClick,
        row,
        rowAlign,
        rowGap,
        rowPadding,
        selectedBgColor,
        selectedTextColor,
        setExpandedRows,
        textPreset
      },
      index
    )) }),
    !hasPagination ? null : /* @__PURE__ */ jsx40(Pagination, { inline: true, count: pageCount, onChange: setPage, page: currentPage })
  ] });
};

// trabecula/components/table/data-grid.utils.ts
var valueCollator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
var dataGridCellClasses = {
  cell: {
    "& > *": {
      maxWidth: "100%",
      minWidth: "0 !important"
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
};
var getDataGridCellLayout = (width, minWidth, maxWidth) => {
  if (!width || width === "1fr") return { flex: 1, maxWidth, minWidth };
  else if (typeof width === "string" && width.endsWith("fr")) {
    const flex = Number(width.replace("fr", ""));
    return { flex: Number.isFinite(flex) && flex > 0 ? flex : 1, maxWidth, minWidth };
  } else {
    return {
      flex: `0 0 ${typeof width === "number" ? `${width}px` : width}`,
      maxWidth: maxWidth != null ? maxWidth : width,
      minWidth: minWidth != null ? minWidth : width,
      width
    };
  }
};
var clampDataGridColumnWidth = (width, minWidth, maxWidth) => {
  var _a;
  const minWidthPx = (_a = getDataGridPixelValue(minWidth)) != null ? _a : 40;
  const maxWidthPx = getDataGridPixelValue(maxWidth);
  return Math.min(Math.max(width, minWidthPx), maxWidthPx != null ? maxWidthPx : Number.MAX_SAFE_INTEGER);
};
var compareDataGridValues = (a, b) => {
  if (a == null && b == null) return 0;
  else if (a == null) return 1;
  else if (b == null) return -1;
  if (a instanceof Date || b instanceof Date) {
    const aTime = getTime(a);
    const bTime = getTime(b);
    if (Number.isFinite(aTime) && Number.isFinite(bTime)) return aTime - bTime;
  }
  if (typeof a === "number" && typeof b === "number") return a - b;
  else if (typeof a === "boolean" && typeof b === "boolean") return Number(a) - Number(b);
  else return valueCollator.compare(String(a), String(b));
};
var getDataGridColumnValue = (row, column, mode) => {
  if (mode === "search" && column.searchValue) return column.searchValue(row);
  else if (mode === "sort" && column.sortValue) return column.sortValue(row);
  else return row[column.key];
};
var getDataGridValueText = (value) => {
  if (value == null) return "";
  else if (value instanceof Date) return value.toISOString();
  else return String(value);
};
var getTime = (value) => {
  if (value instanceof Date) return value.getTime();
  else if (typeof value === "boolean" || value == null) return NaN;
  else return new Date(value).getTime();
};
var getDataGridPixelValue = (value) => {
  if (typeof value === "number") return value;
  else if (typeof value !== "string" || !value.endsWith("px")) return void 0;
  else {
    const parsed = Number(value.replace("px", ""));
    return Number.isFinite(parsed) ? parsed : void 0;
  }
};

// trabecula/components/table/data-grid-header.tsx
import {
  useRef as useRef5,
  useState as useState15
} from "react";
import { jsx as jsx41, jsxs as jsxs23 } from "react/jsx-runtime";
var DataGridHeader = ({
  columns,
  expandableContent,
  expandColumnWidth,
  hasResizableColumns,
  hasSorting,
  headerBorder,
  onColumnResizeStart,
  onSort,
  rowGap,
  sort,
  textPreset
}) => {
  const { css, cx } = useClasses25(null);
  const [hoveredColumnKey, setHoveredColumnKey] = useState15(null);
  const suppressSortClickRef = useRef5(false);
  return /* @__PURE__ */ jsxs23(
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
            if (suppressSortClickRef.current) suppressSortClickRef.current = false;
            else if (isSortable) onSort(column);
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
          return /* @__PURE__ */ jsxs23(
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
                /* @__PURE__ */ jsx41(
                  Text,
                  {
                    preset: (_a = column.textPreset) != null ? _a : textPreset,
                    textAlign: column.align || "left",
                    overflow: "hidden",
                    children: column.header
                  }
                ),
                !isSortable ? null : /* @__PURE__ */ jsx41(
                  Icon,
                  {
                    name: isSorted && (sort == null ? void 0 : sort.direction) === "asc" ? "ArrowDropUp" : "ArrowDropDown",
                    color: colors.custom.darkGrey,
                    size: "1rem",
                    viewProps: { opacity: isSorted ? 1 : isHovered ? 0.35 : 0 }
                  }
                ),
                !isResizable ? null : /* @__PURE__ */ jsx41(
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
        expandableContent ? /* @__PURE__ */ jsx41(View, __spreadProps(__spreadValues({ minWidth: 0, overflow: "hidden" }, getDataGridCellLayout(expandColumnWidth)), { children: /* @__PURE__ */ jsx41(Text, { preset: textPreset }) })) : null
      ]
    }
  );
};
var useClasses25 = makeClasses({
  cell: dataGridCellClasses.cell,
  resizeHandle: {
    bottom: 0,
    right: 0,
    top: 0,
    width: "0.4rem",
    "&:hover": {
      background: colors.custom.blue
    }
  },
  noWrapCell: dataGridCellClasses.noWrapCell
});

// trabecula/components/table/data-grid-row.tsx
import React from "react";
import { Collapse } from "@mui/material";
import { jsx as jsx42, jsxs as jsxs24 } from "react/jsx-runtime";
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
  rowAlign,
  rowGap,
  rowPadding,
  selectedBgColor,
  selectedTextColor,
  setExpandedRows,
  textPreset
}) => {
  var _a;
  const { css, cx } = useClasses26(null);
  const isExpanded = expandedRows.has(index);
  const isSelected = (_a = isRowSelected == null ? void 0 : isRowSelected(row, index)) != null ? _a : false;
  const getBackgroundColor = () => {
    var _a2;
    return (_a2 = getRowBgColor == null ? void 0 : getRowBgColor(row, index)) != null ? _a2 : isSelected ? selectedBgColor : alternatingColors && index % 2 === 1 ? alternatingBgColor : "transparent";
  };
  const handleRowExpand = (event) => {
    const newExpandedRows = new Set(expandedRows);
    event.stopPropagation();
    if (newExpandedRows.has(index)) newExpandedRows.delete(index);
    else newExpandedRows.add(index);
    setExpandedRows(newExpandedRows);
  };
  return /* @__PURE__ */ jsxs24(React.Fragment, { children: [
    /* @__PURE__ */ jsxs24(
      View,
      {
        row: true,
        align: rowAlign,
        bgColor: getBackgroundColor(),
        cursor: onRowClick ? "pointer" : "default",
        padding: rowPadding,
        borderRadiuses: { all: isExpanded ? "0.3rem 0.3rem 0 0" : "0.3rem" },
        spacing: rowGap,
        minWidth: 0,
        width: "100%",
        onClick: () => onRowClick == null ? void 0 : onRowClick(row, index),
        className,
        children: [
          columns.map((column, columnIndex) => {
            var _a2;
            const title = column.searchable === false ? void 0 : getDataGridValueText(getDataGridColumnValue(row, column, "search")).trim() || void 0;
            const value = column.render ? column.render({ index, isExpanded, isSelected, row, value: row[column.key] }) : getDataGridValueText(getDataGridColumnValue(row, column, "search")) || "--";
            return /* @__PURE__ */ jsx42(
              View,
              __spreadProps(__spreadValues({
                className: cx(css.cell, column.wrapText === false && css.noWrapCell),
                minHeight: "fit-content",
                minWidth: 0,
                overflow: "hidden",
                title
              }, getDataGridCellLayout(column.width, column.minWidth, column.maxWidth)), {
                children: typeof value !== "string" ? value : /* @__PURE__ */ jsx42(
                  Text,
                  {
                    preset: (_a2 = column.textPreset) != null ? _a2 : defaultTextPreset,
                    textAlign: column.align || "left",
                    color: isSelected ? selectedTextColor : void 0,
                    overflow: "hidden",
                    whiteSpace: column.wrapText === false ? "nowrap" : void 0,
                    textOverflow: column.wrapText === false ? "ellipsis" : void 0,
                    overflowWrap: column.wrapText !== false ? "break-word" : void 0,
                    wordBreak: column.wrapText !== false ? "break-word" : void 0,
                    children: value
                  }
                )
              }),
              `${column.key}-${columnIndex}`
            );
          }),
          expandableContent ? /* @__PURE__ */ jsx42(
            View,
            __spreadProps(__spreadValues({
              display: "flex",
              justify: "center",
              align: "flex-start",
              height: "100%"
            }, getDataGridCellLayout(expandColumnWidth)), {
              children: /* @__PURE__ */ jsx42(
                Button,
                {
                  type: "link",
                  text: /* @__PURE__ */ jsx42(Text, { preset: textPreset, color: isSelected ? selectedTextColor : void 0, children: isExpanded ? "Close" : "Open" }),
                  iconRight: isExpanded ? "ArrowDropUp" : "ArrowDropDown",
                  onClick: handleRowExpand,
                  textColor: colors.custom.lightBlue,
                  underline: "hover"
                }
              )
            })
          ) : null
        ]
      }
    ),
    expandableContent ? /* @__PURE__ */ jsx42(Collapse, { in: isExpanded, className: css.expansion, timeout: 300, easing: "smooth", children: /* @__PURE__ */ jsx42(
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
var useClasses26 = makeClasses({
  cell: dataGridCellClasses.cell,
  expansion: {
    margin: 0,
    padding: 0
  },
  noWrapCell: __spreadValues({
    "& .MuiButton-root": {
      maxWidth: "100%",
      minWidth: "0 !important",
      overflow: "hidden"
    },
    "& .MuiButton-root > *": {
      maxWidth: "100%",
      minWidth: "0 !important"
    }
  }, dataGridCellClasses.noWrapCell)
});

// trabecula/components/table/pagination.tsx
import { useState as useState16 } from "react";
import {
  Pagination as PaginationBase,
  PaginationItem
} from "@mui/material";
import { jsx as jsx43, jsxs as jsxs25 } from "react/jsx-runtime";
var Pagination = Comp(
  (_a) => {
    var _b = _a, {
      className,
      count,
      inline = false,
      isLoading,
      onChange,
      onFullLoad,
      viewProps = {}
    } = _b, props = __objRest(_b, [
      "className",
      "count",
      "inline",
      "isLoading",
      "onChange",
      "onFullLoad",
      "viewProps"
    ]);
    const { css, cx } = useClasses27(null);
    const [isJumpModalOpen, setIsJumpModalOpen] = useState16(false);
    const [jumpPage, setJumpPage] = useState16(null);
    const hasError = !Number.isInteger(jumpPage) || jumpPage < 1 || jumpPage > count;
    const handleChange = (_, page) => onChange(page);
    const handleJump = () => {
      if (!hasError) {
        setIsJumpModalOpen(false);
        onChange(jumpPage);
      }
    };
    const handleJumpModalOpen = () => {
      var _a2;
      setJumpPage((_a2 = props.page) != null ? _a2 : null);
      setIsJumpModalOpen(true);
    };
    const handleLastPageClick = (event, item) => {
      var _a2;
      if (onFullLoad) {
        event.preventDefault();
        onFullLoad();
      } else (_a2 = item.onClick) == null ? void 0 : _a2.call(item, event);
    };
    return /* @__PURE__ */ jsxs25(
      View,
      __spreadProps(__spreadValues({}, viewProps), {
        className: cx(css.root, viewProps == null ? void 0 : viewProps.className),
        flex: inline ? "0 0 auto" : viewProps.flex,
        position: inline ? "relative" : viewProps.position,
        children: [
          /* @__PURE__ */ jsxs25(View, { position: "relative", overflow: "hidden", children: [
            /* @__PURE__ */ jsx43(LoadingOverlay, { isLoading }),
            /* @__PURE__ */ jsx43(
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
                  const isEllipsis = ["end-ellipsis", "start-ellipsis"].includes(item.type);
                  return /* @__PURE__ */ jsx43(
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
          isJumpModalOpen && /* @__PURE__ */ jsxs25(Modal.Container, { onClose: () => setIsJumpModalOpen(false), width: "24rem", children: [
            /* @__PURE__ */ jsx43(Modal.Header, { children: /* @__PURE__ */ jsx43(Text, { preset: "title", children: "Jump to Page" }) }),
            /* @__PURE__ */ jsx43(Modal.Content, { row: true, dividers: false, justify: "center", children: /* @__PURE__ */ jsx43(
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
            /* @__PURE__ */ jsxs25(Modal.Footer, { uniformWidth: "7rem", children: [
              /* @__PURE__ */ jsx43(
                Button,
                {
                  text: "Cancel",
                  icon: "Close",
                  onClick: () => setIsJumpModalOpen(false),
                  color: colors.foregroundCard
                }
              ),
              /* @__PURE__ */ jsx43(
                Button,
                {
                  text: "Jump",
                  icon: "Send",
                  onClick: handleJump,
                  disabled: hasError,
                  color: colors.custom.blue
                }
              )
            ] })
          ] })
        ]
      })
    );
  }
);
var useClasses27 = makeClasses({
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
import { useMemo as useMemo3, useState as useState17 } from "react";
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
import { Fragment as Fragment4, jsx as jsx44, jsxs as jsxs26 } from "react/jsx-runtime";
var MUI_TABLE_ROW_HEIGHT = 33;
var Table = ({
  className,
  columns,
  hasEmptyRows = false,
  hasPagination = false,
  paginationClassName,
  rowCountOptions = [10, 25, 50],
  rows
}) => {
  const [page, setPage] = useState17(0);
  const [rowsPerPage, setRowsPerPage] = useState17(rowCountOptions[0]);
  const displayedRows = useMemo3(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, rows]
  );
  const emptyRows = rowsPerPage - displayedRows.length;
  const { css, cx } = useClasses28({ emptyRows });
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return /* @__PURE__ */ jsxs26(Fragment4, { children: [
    /* @__PURE__ */ jsx44(TableContainer, { component: Paper2, className, children: /* @__PURE__ */ jsxs26(MuiTable, { size: "small", children: [
      /* @__PURE__ */ jsx44(TableHead, { children: /* @__PURE__ */ jsx44(TableRow, { className: css.tableHeader, children: columns.map((column, i) => /* @__PURE__ */ jsx44(TableCell, { className: css.tableHeaderCell, children: column.header }, `${i}-${column.header}`)) }) }),
      /* @__PURE__ */ jsxs26(TableBody, { children: [
        displayedRows.map((row, rowKey) => /* @__PURE__ */ jsx44(TableRow, { className: css.tableRowAlt, children: columns.map((column, cellKey) => /* @__PURE__ */ jsx44(
          TableCellTrunc,
          {
            value: column.valueFunc(row),
            wrap: column.wrap,
            className: column.className
          },
          `${rowKey}-${cellKey}`
        )) }, `displayed-${rowKey}`)),
        hasEmptyRows && emptyRows > 0 && /* @__PURE__ */ jsx44(TableRow, { className: cx(css.emptyRow, css.tableRowAlt), children: /* @__PURE__ */ jsx44(TableCell, { colSpan: columns.length }) })
      ] })
    ] }) }),
    hasPagination && /* @__PURE__ */ jsx44(
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
  const { css, cx } = useClasses28(null);
  return /* @__PURE__ */ jsx44(TableCell, { className: cx(css.tableCell, className), title: String(value), children: wrap ? /* @__PURE__ */ jsx44(
    Text,
    {
      className: css.wrapped,
      component: "span",
      fontFamily: "inherit",
      fontSize: "inherit",
      fontWeight: "inherit",
      lineHeight: "inherit",
      whiteSpace: "normal",
      children: value
    }
  ) : value });
};
var useClasses28 = makeClasses((props) => {
  var _a;
  return {
    emptyRow: { height: MUI_TABLE_ROW_HEIGHT * ((_a = props == null ? void 0 : props.emptyRows) != null ? _a : 0) },
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
  };
});

// trabecula/components/text/centered-text.tsx
import { jsx as jsx45 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx45(View, __spreadProps(__spreadValues({ row: true, justify: "center", align: "center", flex: 1 }, viewProps), { children: /* @__PURE__ */ jsx45(Text, __spreadProps(__spreadValues({}, props), { color, children: text })) }));
};

// trabecula/components/text/date-detail.tsx
import { jsx as jsx46 } from "react/jsx-runtime";
var DateDetail = (props) => {
  var _a;
  return /* @__PURE__ */ jsx46(
    Detail,
    __spreadProps(__spreadValues({}, props), {
      value: ((_a = props.value) == null ? void 0 : _a.length) ? dayjs(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null
    })
  );
};

// trabecula/components/text/detail.tsx
import { jsx as jsx47, jsxs as jsxs27 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs27(View, __spreadProps(__spreadValues({ column: !row, row, spacing: row ? "0.5rem" : null }, props), { children: [
    ["number", "string"].includes(typeof label) ? /* @__PURE__ */ jsx47(Text, __spreadProps(__spreadValues({ preset: "detail-label", fontSize: "0.9em", fontWeight: 600 }, labelProps), { children: label })) : label,
    !value || ["number", "string"].includes(typeof value) ? /* @__PURE__ */ jsx47(
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
import { jsx as jsx48 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses29({ bold, color });
  return /* @__PURE__ */ jsx48(
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
var useClasses29 = makeClasses((props) => ({
  link: {
    color: props.color,
    fontWeight: props.bold ? 500 : 400
  }
}));

// trabecula/components/text/text.tsx
import { Typography } from "@mui/material";
import { jsx as jsx49 } from "react/jsx-runtime";
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
    textOverflow,
    tooltip,
    tooltipProps,
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
    "textOverflow",
    "tooltip",
    "tooltipProps",
    "whiteSpace",
    "wordBreak"
  ]);
  const { css, cx } = useClasses30({
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
  return /* @__PURE__ */ jsx49(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ jsx49(
    Typography,
    __spreadProps(__spreadValues({}, props), {
      component,
      fontFamily,
      className: cx(css.root, className),
      children
    })
  ) });
};
Text.Inline = (props) => /* @__PURE__ */ jsx49(Text, __spreadValues({ display: "inline" }, props));
var useClasses30 = makeClasses((props) => {
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
import { jsx as jsx50, jsxs as jsxs28 } from "react/jsx-runtime";
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
    className,
    display,
    ellipsis = "...",
    expanded = false,
    lineClamp = 1,
    maxLength,
    overflow,
    overflowWrap,
    sx,
    text,
    textOverflow,
    wordBoundaryRatio,
    wordBreak
  } = _b, textProps = __objRest(_b, [
    "className",
    "display",
    "ellipsis",
    "expanded",
    "lineClamp",
    "maxLength",
    "overflow",
    "overflowWrap",
    "sx",
    "text",
    "textOverflow",
    "wordBoundaryRatio",
    "wordBreak"
  ]);
  const { css, cx } = useClasses31({ lineClamp });
  const { isTruncated, preview } = getTextTruncation(text, maxLength, wordBoundaryRatio);
  const shouldClamp = lineClamp > 0;
  return /* @__PURE__ */ jsxs28(
    Text,
    __spreadProps(__spreadValues({
      className: cx(!sx && css.text, className),
      display: display != null ? display : shouldClamp ? "-webkit-box" : void 0,
      overflow: overflow != null ? overflow : shouldClamp ? "hidden" : void 0,
      overflowWrap: overflowWrap != null ? overflowWrap : "break-word",
      textOverflow: textOverflow != null ? textOverflow : shouldClamp ? "ellipsis" : void 0,
      wordBreak: wordBreak != null ? wordBreak : "break-word",
      sx: sx && shouldClamp ? __spreadValues({ WebkitBoxOrient: "vertical", WebkitLineClamp: lineClamp }, sx) : sx
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
  return /* @__PURE__ */ jsx50(Text, __spreadProps(__spreadValues({}, textProps), { children: remainder }));
};
var useClasses31 = makeClasses((props) => ({
  text: {
    WebkitBoxOrient: props.lineClamp > 0 ? "vertical" : void 0,
    WebkitLineClamp: props.lineClamp > 0 ? props.lineClamp : void 0
  }
}));

// trabecula/components/toggles/accordion.tsx
import { useState as useState18 } from "react";
import {
  Accordion as MuiAccordion
} from "@mui/material";
import { jsx as jsx51, jsxs as jsxs29 } from "react/jsx-runtime";
var Accordion = (rawProps) => {
  var _b, _c;
  const _a = rawProps, {
    borderColor,
    buttonProps = {},
    children,
    className,
    color = "transparent",
    contentPadding,
    dense = false,
    expanded,
    fullWidth = false,
    header,
    headerBgColor,
    headerBorderColor,
    headerBorderMode = "visibleBorder",
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
    "borderColor",
    "buttonProps",
    "children",
    "className",
    "color",
    "contentPadding",
    "dense",
    "expanded",
    "fullWidth",
    "header",
    "headerBgColor",
    "headerBorderColor",
    "headerBorderMode",
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
  const [internalExpanded, setInternalExpanded] = useState18(expanded != null ? expanded : false);
  const effectiveExpanded = isExpanded != null ? isExpanded : internalExpanded;
  const contentExpanded = showExpandToggle ? effectiveExpanded : true;
  const hasHeaderWrapper = title !== void 0 || headerBgColor !== void 0 || headerBorderColor !== void 0 || headerPadding !== void 0;
  const { css, cx } = useClasses32({
    borderColor,
    contentExpanded,
    contentPadding,
    dense,
    fullWidth,
    headerBgColor,
    headerBorderColor,
    headerBorderMode,
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
  const headerContent = title !== void 0 ? /* @__PURE__ */ jsxs29(View, { row: true, align: "center", justify: "space-between", width: "100%", children: [
    typeof title === "string" ? /* @__PURE__ */ jsx51(Text, __spreadProps(__spreadValues({}, titleProps), { children: title })) : title,
    /* @__PURE__ */ jsxs29(View, { row: true, align: "center", spacing: "0.6rem", children: [
      headerButton,
      showExpandToggle ? /* @__PURE__ */ jsx51(
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
  ] }) : /* @__PURE__ */ jsx51(
    Button,
    __spreadValues({
      text: header,
      endNode: showExpandToggle ? /* @__PURE__ */ jsx51(
        Icon,
        {
          name: "ExpandMore",
          color: (_c = (_b = buttonProps.iconProps) == null ? void 0 : _b.color) != null ? _c : buttonProps.textColor,
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
  return /* @__PURE__ */ jsxs29(
    MuiAccordion,
    __spreadProps(__spreadValues({}, props), {
      expanded: contentExpanded,
      TransitionProps: { unmountOnExit: true },
      disableGutters: true,
      className: cx(css.accordion, className),
      children: [
        hasHeaderWrapper ? /* @__PURE__ */ jsx51(View, { className: css.header, children: headerContent }) : headerContent,
        /* @__PURE__ */ jsxs29(View, { column: true, className: css.content, children: [
          /* @__PURE__ */ jsx51(LoadingOverlay, { isLoading }),
          children
        ] })
      ]
    })
  );
};
var shouldShowHeaderBorder = (props) => {
  if (!props.headerBorderColor) return false;
  else if (props.headerBorderMode === "always") return true;
  else if (props.headerBorderMode === "expanded") return props.contentExpanded;
  else return props.showExpandToggle ? props.showBorder : true;
};
var useClasses32 = makeClasses((props) => {
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
import { createContext, useContext, useEffect as useEffect10, useMemo as useMemo4, useState as useState19 } from "react";
import { jsx as jsx52 } from "react/jsx-runtime";
var AccordionGroupContext = createContext(null);
var AccordionGroup = ({
  children,
  defaultExpanded = true,
  sectionIds
}) => {
  const [expandedSections, setExpandedSections] = useState19(
    () => getInitialExpandedSections(sectionIds, defaultExpanded)
  );
  useEffect10(() => {
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
  const value = useMemo4(
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
  return /* @__PURE__ */ jsx52(AccordionGroupContext.Provider, { value, children });
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
import Color8 from "color";
import { jsx as jsx53 } from "react/jsx-runtime";
var Checkbox = ({
  center,
  checked,
  checkedIcon,
  className,
  color = colors.custom.blue,
  disabled,
  flex = 1,
  icon,
  indeterminate,
  indeterminateColor,
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
  const { css, cx } = useClasses33({
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
  const toggleChecked = (event) => {
    if (disabled) return;
    if (ternary === void 0) setChecked(!checked, void 0, event);
    else if (ternary) setChecked(true, false, event);
    else if (checked) setChecked(false, false, event);
    else setChecked(false, true, event);
  };
  const labelNode = typeof label === "string" && labelProps ? /* @__PURE__ */ jsx53(Text, __spreadProps(__spreadValues({}, labelProps), { children: label })) : label;
  return /* @__PURE__ */ jsx53(
    FormControlLabel2,
    {
      disabled,
      label: labelNode,
      control: /* @__PURE__ */ jsx53(
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
var useClasses33 = makeClasses((props) => ({
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
    "&:hover": props.noHover ? {} : { backgroundColor: Color8(props.color).fade(0.8).string() },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4rem",
      fontFamily: "Roboto"
    }
  })
}));

// trabecula/components/toggles/radio.tsx
import { FormControlLabel as FormControlLabel3, Radio as MuiRadio } from "@mui/material";
import Color9 from "color";
import { jsx as jsx54 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses34({
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
  const renderedLabel = typeof label === "string" ? /* @__PURE__ */ jsx54(Text, { bold: boldWhenChecked && checked, fontFamily, children: label }) : label;
  return /* @__PURE__ */ jsx54(
    FormControlLabel3,
    {
      label: renderedLabel,
      disabled,
      className: cx(css.label, className),
      control: /* @__PURE__ */ jsx54(
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
var useClasses34 = makeClasses((props) => ({
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
      border: `1px solid ${Color9(props.color).fade(0.8).string()}`,
      backgroundColor: Color9(props.color).fade(0.9).string()
    }
  }),
  radio: __spreadProps(__spreadValues({}, makePadding(props.padding)), {
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1
  })
}));

// trabecula/components/tooltip/tooltip.tsx
import { Tooltip as MuiTooltip } from "@mui/material";
import Color10 from "color";
import { jsx as jsx55 } from "react/jsx-runtime";
var Tooltip = (_a) => {
  var _b = _a, {
    arrow = true,
    bgColor = colors.background,
    borderColor = colors.custom.blue,
    children,
    color,
    flexShrink = 0,
    fontSize = "0.95em",
    maxWidth = "25rem",
    minWidth,
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
    "maxWidth",
    "minWidth",
    "padding",
    "placement",
    "title",
    "viewProps"
  ]);
  const { css } = useClasses35({
    bgColor,
    borderColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding
  });
  return /* @__PURE__ */ jsx55(
    MuiTooltip,
    __spreadProps(__spreadValues({}, props), {
      arrow,
      placement,
      title,
      classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip },
      children: /* @__PURE__ */ jsx55(
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
var useClasses35 = makeClasses((props) => ({
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
    backgroundColor: Color10(props.bgColor).fade(0.03).string(),
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
import { jsx as jsx56 } from "react/jsx-runtime";
var TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
  const wrap = (c) => /* @__PURE__ */ jsx56(Tooltip, __spreadProps(__spreadValues({ title: tooltip }, tooltipProps), { children: c }));
  return /* @__PURE__ */ jsx56(
    ConditionalWrap,
    {
      wrap,
      condition: tooltip !== void 0 && !(typeof tooltip === "string" && !(tooltip == null ? void 0 : tooltip.length)),
      children
    }
  );
};

// trabecula/components/wrappers/card.tsx
import { jsx as jsx57 } from "react/jsx-runtime";
var Card = Comp(
  (_a, ref) => {
    var _b = _a, {
      align,
      bgColor = colors.foreground,
      borderRadiuses = {},
      borders,
      boxShadow,
      children,
      className,
      column = true,
      cursor,
      display = "flex",
      elevated = false,
      flex,
      header,
      headerProps,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      onScroll,
      opacity,
      overflow,
      padding = {},
      position,
      row = false,
      spacing,
      width,
      wrap
    } = _b, viewProps = __objRest(_b, [
      "align",
      "bgColor",
      "borderRadiuses",
      "borders",
      "boxShadow",
      "children",
      "className",
      "column",
      "cursor",
      "display",
      "elevated",
      "flex",
      "header",
      "headerProps",
      "height",
      "justify",
      "margins",
      "maxHeight",
      "maxWidth",
      "minHeight",
      "minWidth",
      "onScroll",
      "opacity",
      "overflow",
      "padding",
      "position",
      "row",
      "spacing",
      "width",
      "wrap"
    ]);
    const layoutProps = {
      align,
      borders,
      cursor,
      flex,
      justify,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      position,
      wrap
    };
    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    headerProps = deepMerge({ width: "100%" }, headerProps != null ? headerProps : {});
    padding = deepMerge({ all: "0.5rem" }, padding);
    const { css, cx } = useClasses36({ boxShadow, elevated });
    return /* @__PURE__ */ jsx57(
      HeaderWrapper,
      __spreadProps(__spreadValues(__spreadValues({}, layoutProps), viewProps), {
        borderRadiuses,
        className,
        display,
        header,
        headerProps,
        height,
        margins,
        onScroll,
        overflow,
        width,
        children: /* @__PURE__ */ jsx57(
          View,
          __spreadProps(__spreadValues({}, layoutProps), {
            className: cx(css.root, className),
            position: position != null ? position : "relative",
            column: column && !row,
            flex: flex != null ? flex : 1,
            bgColor,
            borderRadiuses,
            height,
            onScroll,
            overflow,
            padding,
            ref,
            row,
            spacing,
            width: header ? "100%" : width,
            "aria-label": "card",
            children
          })
        )
      })
    );
  }
);
var useClasses36 = makeClasses((props) => {
  var _a;
  return {
    root: {
      boxShadow: (_a = props.boxShadow) != null ? _a : props.elevated ? "0.1rem 0.1rem 0.3rem rgb(0 0 0 / 50%)" : void 0
    }
  };
});

// trabecula/components/wrappers/card-base/chip.tsx
import { jsx as jsx58 } from "react/jsx-runtime";
var Chip3 = (_a) => {
  var _b = _a, {
    bgColor = colors.background,
    flush = false,
    hasFooter,
    opacity = 0.6,
    position
  } = _b, props = __objRest(_b, [
    "bgColor",
    "flush",
    "hasFooter",
    "opacity",
    "position"
  ]);
  const { css } = useClasses37({ flush, hasFooter, opacity, position });
  return /* @__PURE__ */ jsx58(Chip2, __spreadProps(__spreadValues({}, props), { bgColor, className: css.chip }));
};
var useClasses37 = makeClasses((props) => ({
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
import Color11 from "color";
import { jsx as jsx59 } from "react/jsx-runtime";
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
  const { css, cx } = useClasses38({ disabled, display, height, selected, selectedColor, width });
  return /* @__PURE__ */ jsx59(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.container, className), children: /* @__PURE__ */ jsx59(
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
var useClasses38 = makeClasses((props, theme) => {
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
      background: !props.disabled && props.selected ? `linear-gradient(to bottom right, ${Color11(props.selectedColor).lighten(0.4).string()}, ${props.selectedColor} 60%)` : "transparent",
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
import { jsx as jsx60 } from "react/jsx-runtime";
var Footer2 = ({ children }) => {
  const { css } = useClasses39(null);
  return /* @__PURE__ */ jsx60(View, { className: css.footer, children });
};
var useClasses39 = makeClasses({
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
import { jsx as jsx61 } from "react/jsx-runtime";
var FooterText = (props) => {
  var _a;
  return ((_a = props.text) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx61(Text, { fontSize: "0.9em", width: "100%", textAlign: "center", padding: { all: "0 0.4rem 0.2rem" }, children: props.text });
};

// trabecula/components/wrappers/card-base/image.tsx
import { useEffect as useEffect11, useState as useState20 } from "react";
import { jsx as jsx62, jsxs as jsxs30 } from "react/jsx-runtime";
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
  var _a;
  const [hasError, setHasError] = useState20(false);
  const [imagePos, setImagePos] = useState20(null);
  const [isHovered, setIsHovered] = useState20(false);
  const [thumbIndex, setThumbIndex] = useState20(0);
  const { css, cx } = useClasses40({ fit, height, imagePos, rounded });
  const thumbPath = (_a = thumbPaths == null ? void 0 : thumbPaths[thumbIndex]) != null ? _a : thumbPaths == null ? void 0 : thumbPaths[0];
  useEffect11(() => {
    const interval = !disabled && (autoAnimate || isHovered) && (thumbPaths == null ? void 0 : thumbPaths.length) > 1 ? setInterval(() => setThumbIndex((index) => (index + 1) % thumbPaths.length), 300) : null;
    return () => clearInterval(interval);
  }, [autoAnimate, disabled, isHovered, thumbPaths == null ? void 0 : thumbPaths.length]);
  useEffect11(() => {
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
    if (!autoAnimate) setThumbIndex(0);
  };
  const handleMouseMove = (event) => {
    const { height: height2, left, top, width } = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - left;
    const offsetY = event.clientY - top;
    const pos = `${Math.max(0, offsetX) / width * 100}% ${Math.max(0, offsetY) / height2 * 100}%`;
    setImagePos(pos);
  };
  return /* @__PURE__ */ jsxs30(
    View,
    {
      className: cx(css.imageContainer, className),
      onMouseEnter: !disabled ? handleMouseEnter : void 0,
      onMouseLeave: handleMouseLeave,
      children: [
        hasError ? /* @__PURE__ */ jsx62(View, { className: css.image, children: /* @__PURE__ */ jsx62(
          Icon,
          {
            color: colors.custom.grey,
            name: "ImageNotSupported",
            size: "4rem",
            viewProps: { align: "center", height: "100%" }
          }
        ) }) : thumbPath ? /* @__PURE__ */ jsx62(
          View,
          {
            component: "img",
            alt: title,
            className: css.image,
            draggable,
            loading,
            onDragEnd,
            onDragStart,
            onError: handleError,
            onMouseMove: fit === "cover" ? handleMouseMove : void 0,
            src: thumbPath
          }
        ) : /* @__PURE__ */ jsx62(View, { className: css.image }),
        children
      ]
    }
  );
};
var useClasses40 = makeClasses((props) => {
  var _a;
  const radii = __spreadValues(__spreadValues({}, ["all", "top"].includes(props.rounded) && {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }), ["all", "bottom"].includes(props.rounded) && {
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit"
  });
  return {
    image: __spreadProps(__spreadValues({}, radii), {
      height: (_a = props.height) != null ? _a : "inherit",
      width: "100%",
      userSelect: "none",
      transition: "all 100ms ease",
      objectFit: props.fit,
      objectPosition: props.imagePos
    }),
    imageContainer: __spreadProps(__spreadValues({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: "inherit",
      height: "100%"
    }, radii), {
      backgroundColor: "inherit",
      overflow: "hidden"
    })
  };
});

// trabecula/components/wrappers/card-base/tooltip.tsx
import { jsx as jsx63 } from "react/jsx-runtime";
var Tooltip2 = ({ children, tooltip }) => {
  return /* @__PURE__ */ jsx63(
    Tooltip,
    {
      enterDelay: 700,
      enterNextDelay: 300,
      minWidth: "15rem",
      title: /* @__PURE__ */ jsx63(View, { column: true, padding: { all: "0.3rem" }, spacing: "0.5rem", children: tooltip }),
      children: /* @__PURE__ */ jsx63(View, { column: true, width: "100%", children })
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
import { jsx as jsx64, jsxs as jsxs31 } from "react/jsx-runtime";
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
    const { css, cx } = useClasses41({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return /* @__PURE__ */ jsxs31(View, __spreadProps(__spreadValues({}, props), { className: cx(css.root, className), children: [
      cards.length ? /* @__PURE__ */ jsx64(
        View,
        __spreadProps(__spreadValues({}, cardsProps), {
          padding,
          ref,
          className: cx(css.cards, cardsProps == null ? void 0 : cardsProps.className),
          children: cards
        })
      ) : /* @__PURE__ */ jsx64(View, { column: true, flex: 1, children: /* @__PURE__ */ jsx64(CenteredText, { text: noResultsText }) }),
      children
    ] }));
  }
);
var useClasses41 = makeClasses((props, theme) => ({
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
import { jsx as jsx65 } from "react/jsx-runtime";
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
    const { css, cx } = useClasses42({
      bgColor,
      color,
      fontSize,
      fontWeight,
      height,
      padding,
      radiuses,
      width
    });
    return /* @__PURE__ */ jsx65(
      MuiChip,
      __spreadProps(__spreadValues({}, props), {
        label,
        icon: icon ? /* @__PURE__ */ jsx65(
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
var useClasses42 = makeClasses((props) => ({
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
import { Fragment as Fragment5, jsx as jsx66 } from "react/jsx-runtime";
var ConditionalWrap = ({
  children,
  condition,
  wrap
}) => condition ? wrap(children) : /* @__PURE__ */ jsx66(Fragment5, { children });

// trabecula/components/wrappers/context-menu.tsx
import { useState as useState21 } from "react";
import { Menu as Menu2 } from "@mui/material";
import Color12 from "color";
import { jsx as jsx67, jsxs as jsxs32 } from "react/jsx-runtime";
var ContextMenu = (_a) => {
  var _b = _a, { children, disabled, id, menuItems } = _b, props = __objRest(_b, ["children", "disabled", "id", "menuItems"]);
  const { css } = useClasses43(null);
  const [mouseX, setMouseX] = useState21(null);
  const [mouseY, setMouseY] = useState21(null);
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
  return /* @__PURE__ */ jsxs32(View, __spreadProps(__spreadValues({}, props), { id, onContextMenu: handleContext, children: [
    children,
    /* @__PURE__ */ jsx67(
      Menu2,
      {
        open: mouseY !== null,
        onClose: handleClose,
        anchorReference: "anchorPosition",
        anchorPosition: mouseX !== null && mouseY !== null ? { top: mouseY, left: mouseX } : void 0,
        PopoverClasses: { paper: css.contextMenu },
        MenuListProps: { className: css.contextMenuInner },
        children: menuItems.filter(Boolean).map((item) => [
          item.divider === "top" ? /* @__PURE__ */ jsx67(Divider, {}) : null,
          /* @__PURE__ */ jsx67(Item, { item, onClose: handleClose }),
          item.divider === "bottom" ? /* @__PURE__ */ jsx67(Divider, {}) : null
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
  const { css } = useClasses43(null);
  const color = item.color || colors.custom.lightGrey;
  const handleClick = item.onClick ? () => {
    item.onClick();
    onClose();
  } : void 0;
  return /* @__PURE__ */ jsx67(
    ListItem,
    {
      text: item.label,
      icon: item.icon,
      iconProps: __spreadValues({ color }, (_a = item.iconProps) != null ? _a : {}),
      color,
      iconEnd: ((_b = item.subItems) == null ? void 0 : _b.length) ? "ChevronRight" : null,
      onClick: handleClick,
      className: css.item,
      children: ((_c = item.subItems) == null ? void 0 : _c.length) ? /* @__PURE__ */ jsx67(View, { column: true, children: item.subItems.map((subItem) => /* @__PURE__ */ jsx67(SubItem, { subItem, onClose }, subItem.label)) }) : null
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
  return /* @__PURE__ */ jsx67(ListItem, { text: subItem.label, icon: subItem.icon, onClick: handleClick });
};
var useClasses43 = makeClasses({
  contextMenu: {
    background: Color12(colors.custom.black).fade(0.03).string()
  },
  contextMenuInner: {
    padding: 0
  },
  item: {
    padding: "0.35rem 1rem 0.35rem 0.7rem"
  }
});

// trabecula/components/wrappers/disabled-overlay.tsx
import { Fragment as Fragment6, jsx as jsx68, jsxs as jsxs33 } from "react/jsx-runtime";
var DisabledOverlay = ({
  children,
  isDisabled = false,
  zIndex = 2
}) => {
  const { css } = useClasses44({ isDisabled, zIndex });
  return /* @__PURE__ */ jsxs33(Fragment6, { children: [
    children,
    isDisabled && /* @__PURE__ */ jsx68(View, { className: css.disabledOverlay })
  ] });
};
var useClasses44 = makeClasses((props) => ({
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
import { jsx as jsx69 } from "react/jsx-runtime";
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
    const { css, cx } = useClasses45({ alignSelf, borderWidth, color, height, margins, orientation });
    return /* @__PURE__ */ jsx69(
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
var useClasses45 = makeClasses((props) => ({
  divider: __spreadValues({
    alignSelf: props.alignSelf,
    borderColor: props.color,
    borderBottomWidth: props.orientation === "horizontal" ? props.borderWidth : void 0,
    borderRightWidth: props.orientation === "vertical" ? props.borderWidth : void 0,
    height: props.height
  }, makeMargins(props.margins))
}));

// trabecula/components/wrappers/drop-overlay.tsx
import Color13 from "color";
import { jsx as jsx70 } from "react/jsx-runtime";
var DropOverlay = ({ onDragLeave, onDrop }) => {
  const { css } = useClasses46(null);
  return /* @__PURE__ */ jsx70(View, { onDragLeave, onDrop, className: css.overlay });
};
var useClasses46 = makeClasses({
  overlay: {
    backgroundColor: Color13(colors.custom.blue).fade(0.5).string(),
    border: `15px dashed ${colors.custom.blue}`,
    bottom: 0,
    left: 0,
    opacity: 0.3,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 5e3
    // necessary for MUI z-index values
  }
});

// trabecula/components/wrappers/header.tsx
import { jsx as jsx71, jsxs as jsxs34 } from "react/jsx-runtime";
var DEFAULT_HEADER_PROPS = {
  bgColor: colors.custom.black,
  borderRadiuses: { top: 6 },
  fontSize: "0.8em",
  justify: "center",
  padding: { all: "0.2rem 0.3rem" },
  row: true
};
var HeaderWrapper = Comp((rawProps, ref) => {
  const _a = rawProps, {
    align,
    bgColor,
    borderRadiuses,
    borders,
    children,
    className,
    column,
    cursor,
    display,
    flex,
    header,
    headerProps = {},
    height = "auto",
    justify,
    margins,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    onScroll,
    opacity,
    overflow,
    padding,
    position = "relative",
    row,
    spacing,
    textProps = {},
    width,
    wrap
  } = _a, viewProps = __objRest(_a, [
    "align",
    "bgColor",
    "borderRadiuses",
    "borders",
    "children",
    "className",
    "column",
    "cursor",
    "display",
    "flex",
    "header",
    "headerProps",
    "height",
    "justify",
    "margins",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "onScroll",
    "opacity",
    "overflow",
    "padding",
    "position",
    "row",
    "spacing",
    "textProps",
    "width",
    "wrap"
  ]);
  const layoutProps = {
    align,
    bgColor,
    borderRadiuses,
    borders,
    className,
    column,
    cursor,
    flex,
    justify,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    padding,
    wrap
  };
  const mergedHeaderProps = deepMerge(DEFAULT_HEADER_PROPS, headerProps);
  const wrapHeader = (content) => /* @__PURE__ */ jsxs34(
    View,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, layoutProps), {
      "aria-label": "header-wrapper"
    }), viewProps), {
      ref,
      column: true,
      height,
      margins,
      onScroll,
      overflow,
      width,
      children: [
        /* @__PURE__ */ jsx71(View, __spreadProps(__spreadValues({}, mergedHeaderProps), { "aria-label": "header", children: typeof header === "string" ? /* @__PURE__ */ jsx71(Text, __spreadProps(__spreadValues({ flex: 1, fontSize: mergedHeaderProps.fontSize, textAlign: "center" }, textProps), { children: header })) : header })),
        content
      ]
    })
  );
  return /* @__PURE__ */ jsx71(ConditionalWrap, { condition: !!header, wrap: wrapHeader, children: /* @__PURE__ */ jsx71(
    View,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, layoutProps), {
      "aria-label": "header-wrapper-content"
    }), header ? {} : viewProps), {
      ref: header ? void 0 : ref,
      display,
      height,
      margins: header ? void 0 : margins,
      onScroll,
      overflow: "overflow" in rawProps ? overflow : "auto",
      position,
      row,
      spacing,
      width: header ? "100%" : width,
      children
    })
  ) });
});

// trabecula/components/wrappers/header-content.tsx
import { jsx as jsx72, jsxs as jsxs35 } from "react/jsx-runtime";
var HeaderContent = ({ children, leftNode, rightNode }) => /* @__PURE__ */ jsx72(
  ConditionalWrap,
  {
    condition: leftNode !== void 0 || rightNode !== void 0,
    wrap: (wrappedChildren) => /* @__PURE__ */ jsxs35(View, { row: true, flex: 1, minWidth: 0, align: "center", children: [
      /* @__PURE__ */ jsx72(View, { row: true, flex: "1 1 0", minWidth: 0, align: "center", justify: "flex-start", children: leftNode }),
      wrappedChildren,
      /* @__PURE__ */ jsx72(View, { row: true, flex: "1 1 0", minWidth: 0, align: "center", justify: "flex-end", children: rightNode })
    ] }),
    children
  }
);

// trabecula/components/wrappers/loading-overlay.tsx
import { CircularProgress as CircularProgress2 } from "@mui/material";
import { Fragment as Fragment7, jsx as jsx73, jsxs as jsxs36 } from "react/jsx-runtime";
var LoadingOverlay = ({ children, isLoading, sub }) => {
  const { css } = useClasses47({ isLoading });
  return /* @__PURE__ */ jsxs36(Fragment7, { children: [
    children,
    /* @__PURE__ */ jsxs36(
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
          /* @__PURE__ */ jsx73(CircularProgress2, { color: "inherit" }),
          typeof sub === "string" ? /* @__PURE__ */ jsx73(Text, { preset: "title", fontSize: "0.9em", children: sub }) : sub
        ]
      }
    )
  ] });
};
var useClasses47 = makeClasses((props) => ({
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
import { useEffect as useEffect12, useRef as useRef6, useState as useState22 } from "react";
import { jsx as jsx74, jsxs as jsxs37 } from "react/jsx-runtime";
var SideScroller = ({ children, className, innerClassName }) => {
  const ref = useRef6(null);
  const { width } = useElementResize(ref);
  const [buttonVisibility, setButtonVisibility] = useState22({
    isLeftButtonVisible: false,
    isRightButtonVisible: false
  });
  const { css, cx } = useClasses48(buttonVisibility);
  const handleScroll = (direction) => {
    if (!ref.current) return;
    const scrollAmount = (direction === "left" ? -1 : 1) * width / 2;
    ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  const updateButtonVisibility = () => {
    const node = ref.current;
    const hasOverflow = node && node.clientWidth < node.scrollWidth;
    const isLeftButtonVisible = !!hasOverflow && node.scrollLeft > 0;
    const isRightButtonVisible = !!hasOverflow && node.clientWidth + node.scrollLeft < node.scrollWidth - 5;
    setButtonVisibility(
      (prev) => prev.isLeftButtonVisible === isLeftButtonVisible && prev.isRightButtonVisible === isRightButtonVisible ? prev : { isLeftButtonVisible, isRightButtonVisible }
    );
  };
  useEffect12(() => {
    const node = ref.current;
    const scrollListener = debounce(updateButtonVisibility, 50);
    node.addEventListener("scroll", scrollListener);
    return () => {
      node.removeEventListener("scroll", scrollListener);
      scrollListener.cancel();
    };
  }, []);
  useEffect12(() => {
    updateButtonVisibility();
  }, [children, width]);
  return /* @__PURE__ */ jsxs37(View, { className: cx(css.root, className), children: [
    /* @__PURE__ */ jsx74(
      IconButton,
      {
        name: "ChevronLeft",
        onClick: () => handleScroll("left"),
        className: cx(css.scrollButton, "left"),
        size: "large"
      }
    ),
    /* @__PURE__ */ jsx74(View, { ref, className: cx(css.items, innerClassName), children }),
    /* @__PURE__ */ jsx74(
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
var useClasses48 = makeClasses((props) => ({
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

// trabecula/components/wrappers/tab-container.tsx
import { useState as useState23 } from "react";
import { Tab, Tabs } from "@mui/material";
import Color14 from "color";
import { jsx as jsx75, jsxs as jsxs38 } from "react/jsx-runtime";
var TabContainer = ({
  activeTab,
  borderRadius = "0.5rem",
  color = colors.custom.blue,
  contentClassName,
  headerRightNode,
  maxWidth,
  minHeight,
  onTabChange,
  tabHeight = "1.5rem",
  tabs,
  viewProps = {},
  withBorder = false
}) => {
  const { css, cx } = useClasses49({
    borderRadius,
    color,
    maxWidth,
    minHeight,
    tabHeight,
    withBorder
  });
  const [selectedTab, setSelectedTab] = useState23("0");
  const currentTab = activeTab != null ? activeTab : selectedTab;
  const handleChange = (_event, tabIndex) => {
    if (activeTab === void 0) setSelectedTab(tabIndex);
    onTabChange == null ? void 0 : onTabChange(tabIndex);
  };
  return /* @__PURE__ */ jsxs38(View, __spreadProps(__spreadValues({ column: true, height: "100%", minHeight: 0 }, viewProps), { children: [
    /* @__PURE__ */ jsxs38(View, { row: true, height: tabHeight, className: css.header, children: [
      /* @__PURE__ */ jsx75(
        Tabs,
        {
          "aria-label": "tabs",
          className: css.tabList,
          onChange: handleChange,
          value: currentTab,
          variant: "scrollable",
          children: tabs.map((tab, index) => /* @__PURE__ */ jsx75(
            Tab,
            {
              className: css.tab,
              label: tab.label,
              value: index.toString(),
              wrapped: true
            },
            index
          ))
        }
      ),
      headerRightNode && /* @__PURE__ */ jsx75(View, { flex: "none", height: "100%", children: headerRightNode })
    ] }),
    /* @__PURE__ */ jsx75(View, { className: cx(css.content, contentClassName), "aria-label": "tab-content", children: tabs.map((tab, index) => {
      const isActive = currentTab === index.toString();
      return tab.keepMounted || isActive ? /* @__PURE__ */ jsx75(
        View,
        {
          "aria-label": tab.label,
          className: cx(css.tabPanel, !isActive && css.hidden),
          role: "tabpanel",
          children: tab.content
        },
        index
      ) : null;
    }) })
  ] }));
};
var useClasses49 = makeClasses((props) => {
  var _a;
  return {
    content: {
      border: props.withBorder ? `3px solid ${props.color}` : void 0,
      borderRadius: props.withBorder ? `0 0 ${props.borderRadius} ${props.borderRadius}` : void 0,
      borderTop: "none",
      flex: 1,
      maxWidth: props.maxWidth,
      minHeight: (_a = props.minHeight) != null ? _a : 0,
      padding: "0.4rem"
    },
    header: {
      backgroundColor: props.color,
      borderRadius: props.withBorder ? `${props.borderRadius} ${props.borderRadius} 0 0` : void 0,
      flexShrink: 0
    },
    hidden: {
      display: "none"
    },
    tab: {
      "&.Mui-selected": {
        backgroundColor: props.color,
        borderBottom: "none",
        color: colors.custom.white
      },
      "&:hover": {
        backgroundColor: Color14(props.color).lighten(0.3).string(),
        transition: "all 200ms ease-in-out"
      },
      "&:not(:last-child)": {
        borderRight: `2px solid ${Color14(props.color).lighten(0.4).string()}`
      },
      backgroundColor: props.color,
      color: colors.custom.grey,
      height: props.tabHeight,
      minHeight: 0,
      minWidth: "7em",
      padding: "0.3rem 0.5rem",
      textTransform: "none",
      transition: "all 200ms ease-in-out",
      whiteSpace: "break-spaces"
    },
    tabList: {
      "& .MuiTabs-indicator": { display: "none" },
      backgroundColor: props.color,
      borderRadius: props.withBorder ? `${props.borderRadius} ${props.borderRadius} 0 0` : void 0,
      flex: 1,
      height: props.tabHeight,
      minHeight: 0,
      minWidth: 0
    },
    tabPanel: {
      height: "100%",
      padding: 0
    }
  };
});

// trabecula/components/wrappers/uniform-list.tsx
import { jsx as jsx76 } from "react/jsx-runtime";
var UniformList = (_a) => {
  var _b = _a, { children, uniformWidth } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  const { css, cx } = useClasses50({ uniformWidth });
  return /* @__PURE__ */ jsx76(View, __spreadProps(__spreadValues({}, props), { className: cx(css.uniform, props == null ? void 0 : props.className), children }));
};
var useClasses50 = makeClasses((props) => ({
  uniform: {
    "& > *": {
      flexBasis: "100%",
      maxWidth: props.uniformWidth
    }
  }
}));

// trabecula/components/wrappers/view.tsx
import {
  createElement as createElement5
} from "react";
var View = Comp(
  (_a, ref) => {
    var _b = _a, {
      align,
      bgColor,
      borderRadiuses,
      borders,
      children,
      className,
      column,
      component = "div",
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
      "borderRadiuses",
      "borders",
      "children",
      "className",
      "column",
      "component",
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
    const { css, cx } = useClasses51({
      align,
      bgColor,
      borderRadiuses,
      borders,
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
    return createElement5(
      component,
      __spreadProps(__spreadValues({}, props), { className: cx(className, css.view), ref }),
      children
    );
  }
);
var useClasses51 = makeClasses((props) => {
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
import { createContext as createContext2, StrictMode, useContext as useContext2, useRef as useRef7 } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { TssCacheProvider } from "tss-react";
import { jsx as jsx77 } from "react/jsx-runtime";
var PortalContainerContext = createContext2(void 0);
var usePortalContainer = () => useContext2(PortalContainerContext);
var MuiProvider = ({
  children,
  portalContainer,
  styleContainer
}) => {
  const themeRef = useRef7(
    createTheme({
      components: {
        MuiModal: { defaultProps: { container: portalContainer } },
        MuiPopover: { defaultProps: { container: portalContainer } },
        MuiPopper: { defaultProps: { container: portalContainer } }
      },
      palette: { mode: "dark" }
    })
  );
  const muiCacheRef = useRef7(
    createCache({ container: styleContainer, key: "mui", prepend: true, stylisPlugins: [] })
  );
  const tssCacheRef = useRef7(
    createCache({ container: styleContainer, key: "tss", stylisPlugins: [] })
  );
  return /* @__PURE__ */ jsx77(StrictMode, { children: /* @__PURE__ */ jsx77(CacheProvider, { value: muiCacheRef.current, children: /* @__PURE__ */ jsx77(TssCacheProvider, { value: tssCacheRef.current, children: /* @__PURE__ */ jsx77(ThemeProvider, { theme: themeRef.current, children: /* @__PURE__ */ jsx77(PortalContainerContext.Provider, { value: portalContainer, children }) }) }) }) });
};

// trabecula/utils/client/toast.tsx
import { jsx as jsx78 } from "react/jsx-runtime";
var toast = {
  error: _toast.error,
  info: _toast.info,
  success: _toast.success,
  warn: _toast.warn
};
var Toaster = class {
  constructor() {
    __publicField(this, "toastRef", null);
    __publicField(this, "toastTimeoutRef", null);
  }
  toast(text, options) {
    const autoClose = (options == null ? void 0 : options.autoClose) === false ? false : (options == null ? void 0 : options.autoClose) || 1e3;
    clearTimeout(this.toastTimeoutRef);
    if (autoClose) this.toastTimeoutRef = setTimeout(() => this.toastRef = null, autoClose);
    if (this.toastRef)
      _toast.update(this.toastRef, { autoClose, render: text, type: (options == null ? void 0 : options.type) || "info" });
    else this.toastRef = _toast(() => text, { autoClose, type: (options == null ? void 0 : options.type) || "info" });
  }
};
var ToastContainer = (props) => {
  const { css } = useClasses52(null);
  return /* @__PURE__ */ jsx78(
    ToastContainerBase,
    __spreadValues({
      autoClose: 2e3,
      className: css.toast,
      hideProgressBar: true,
      icon: ({ type }) => {
        var _a, _b;
        return /* @__PURE__ */ jsx78(Icon, { color: colors.custom.white, name: (_b = (_a = STATUSES[type]) == null ? void 0 : _a.icon) != null ? _b : "Error" });
      },
      limit: 3,
      pauseOnFocusLoss: false,
      position: "bottom-left",
      newestOnTop: true
    }, props)
  );
};
var STATUSES = {
  default: {
    color: colors.custom.blue,
    icon: "CircleNotifications"
  },
  error: {
    color: colors.custom.red,
    icon: "Error"
  },
  info: {
    color: colors.custom.blue,
    icon: "Info"
  },
  success: {
    color: colors.custom.green,
    icon: "CheckCircle"
  },
  warning: {
    color: colors.custom.orange,
    icon: "NewReleases"
  }
};
var useClasses52 = makeClasses({
  toast: {
    "& .Toastify__toast": {
      border: "none",
      color: colors.custom.white,
      "&-body": {
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.1rem",
        fontWeight: 500,
        whiteSpace: "break-spaces"
      },
      "&-icon": { marginRight: "1em" },
      "&--default": { backgroundColor: STATUSES.default.color },
      "&--error": { backgroundColor: STATUSES.error.color },
      "&--info": { backgroundColor: STATUSES.info.color },
      "&--success": { backgroundColor: STATUSES.success.color },
      "&--warning": { backgroundColor: STATUSES.warning.color },
      "& .Toastify__close-button": {
        margin: 0,
        lineHeight: 1,
        color: colors.custom.lightGrey,
        "&:hover": {
          backgroundColor: "transparent",
          color: colors.custom.red
        }
      }
    },
    bottom: "3rem"
  }
});

export {
  Comp,
  makeBorders,
  makeBorderRadiuses,
  makeMargins,
  makePadding,
  makeClasses,
  colors,
  useDeepEffect,
  useDeepMemo,
  useElementResize,
  useForceUpdate,
  useLazyLoad,
  copyToClipboard,
  initMobx,
  getMobx,
  usePaginatedList,
  makeQueue,
  useDragScroll,
  asyncAction,
  attachTouchedTracker,
  clearTouched,
  derefMobx,
  makeTouchedProp,
  triggerAllTouched,
  validateProp,
  toast,
  Toaster,
  ToastContainer,
  ActivityModal,
  ActivityOperationCard,
  Button,
  ButtonWithInset,
  ColorPicker,
  IconButton,
  IconPicker,
  MenuButton,
  MultiActionButton,
  SortMenu,
  SortRow,
  createAutoCompleteOptions,
  AutoComplete,
  ChipInput,
  DateInput,
  DateRange,
  DENSE_INPUT_PADDING,
  DEFAULT_INPUT_HEADER_PROPS,
  Input,
  Dropdown,
  FilterHeader,
  FilterMenu,
  LogOpsInput,
  MULTI_INPUT_ROW_HEIGHT,
  MultiInputRow,
  MultiInputList,
  MultiInput,
  NumInput,
  NumRange,
  RangeWrapper,
  Slider,
  TimeInput,
  DetailRows,
  List,
  ListItem,
  Icon,
  ConfirmModal,
  Modal,
  ProgressBar,
  ProgressCircle,
  DataGrid,
  dataGridCellClasses,
  getDataGridCellLayout,
  clampDataGridColumnWidth,
  compareDataGridValues,
  getDataGridColumnValue,
  getDataGridValueText,
  DataGridHeader,
  DataGridRow,
  Pagination,
  Table,
  CenteredText,
  DateDetail,
  Detail,
  Link,
  PRESETS,
  Text,
  getTextTruncation,
  TruncatedText,
  Accordion,
  AccordionGroup,
  useAccordionGroup,
  useAccordionGroupSection,
  Checkbox,
  Radio2 as Radio,
  Tooltip,
  TooltipWrapper,
  Card,
  CardBase,
  CardGrid,
  Chip2 as Chip,
  ConditionalWrap,
  ContextMenu,
  DisabledOverlay,
  Divider,
  DropOverlay,
  HeaderWrapper,
  HeaderContent,
  LoadingOverlay,
  SideScroller,
  TabContainer,
  UniformList,
  View,
  usePortalContainer,
  MuiProvider
};
//# sourceMappingURL=chunk-6SWDZ2PD.mjs.map