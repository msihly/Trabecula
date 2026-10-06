import {
  deepClone,
  handleErrors,
  isDeepEqual
} from "./chunk-2UO6TGNC.mjs";
import {
  __async,
  __publicField,
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
  const [absPosition, setAbsPosition] = useState({ left: 0, top: 0 });
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  useEffect(() => {
    const nodeRef = ref == null ? void 0 : ref.current;
    const getDimensions = () => ({
      height: (nodeRef == null ? void 0 : nodeRef.offsetHeight) || 0,
      width: (nodeRef == null ? void 0 : nodeRef.offsetWidth) || 0
    });
    const getPosition = () => {
      var _a;
      const rect = (_a = nodeRef == null ? void 0 : nodeRef.getBoundingClientRect) == null ? void 0 : _a.call(nodeRef);
      return { left: (rect == null ? void 0 : rect.left) || 0, top: (rect == null ? void 0 : rect.top) || 0 };
    };
    const handleResize = () => {
      setDimensions(getDimensions());
      setAbsPosition(getPosition());
    };
    const observer = new ResizeObserver(handleResize);
    if (nodeRef) {
      handleResize();
      observer.observe(nodeRef, { box: "border-box" });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, condition]);
  return __spreadValues(__spreadValues({}, dimensions), absPosition);
};
var useForceUpdate = () => {
  const [, setTick] = useState(0);
  const update = useCallback(() => setTick((tick) => tick + 1), []);
  return update;
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
var copyToClipboard = (value, message) => {
  navigator.clipboard.writeText(value).then(
    () => message && toast.info(message),
    () => toast.error("Failed to copy to clipboard")
  );
};

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
        if (!controller.signal.aborted)
          setError(error2 instanceof Error ? error2.message : String(error2));
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
          if (pollIntervalMs > 0) timer = setTimeout(load, pollIntervalMs);
        }
      }
    });
    void load();
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
    if (!totalCount) void complete();
    else {
      for (const item of items) {
        void queue.add(() => action(item, onEscape)).catch((error) => {
          if (!isComplete) {
            hasError = true;
            console.error(error);
            toast.error(error instanceof Error ? error.message : String(error));
          }
        }).finally(() => {
          if (!isComplete) {
            completedCount++;
            if (completedCount >= totalCount) void complete();
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
    if (typeof boundFn !== "function") throw new Error("Bound function is not a function");
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
      if (key === "_touched") continue;
      if (touched[key]) continue;
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
  if (isTreeNode2(value)) return getSnapshot2(value);
  if (Array.isArray(value)) {
    const len = value.length;
    let changed2 = false;
    const out2 = new Array(len);
    for (let i = 0; i < len; i++) {
      const v = derefMobx(value[i]);
      if (v !== value[i]) changed2 = true;
      out2[i] = v;
    }
    return changed2 ? out2 : value;
  }
  let changed = false;
  const out = {};
  for (const k in value) {
    const v = derefMobx(value[k]);
    if (v !== value[k]) changed = true;
    out[k] = v;
  }
  return changed ? out : value;
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
import { Icon as MuiIcon } from "@mui/material";
import { jsx } from "react/jsx-runtime";
var toast = {
  error: _toast.error,
  info: _toast.info,
  success: _toast.success,
  warn: _toast.warn
};
var Toaster = class {
  constructor() {
    __publicField(this, "toastTimeoutRef", null);
    __publicField(this, "toastRef", null);
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
  const { css } = useClasses(null);
  return /* @__PURE__ */ jsx(
    ToastContainerBase,
    __spreadValues({
      autoClose: 2e3,
      className: css.toast,
      hideProgressBar: true,
      icon: ({ type }) => {
        var _a, _b;
        return /* @__PURE__ */ jsx(MuiIcon, { style: { color: colors.custom.white }, children: ((_b = (_a = STATUSES[type]) == null ? void 0 : _a.icon) != null ? _b : "Error").split(/(?=[A-Z])/).join("_").toLowerCase() });
      },
      limit: 3,
      pauseOnFocusLoss: false,
      position: "bottom-left",
      newestOnTop: true,
      style: { bottom: "3rem" }
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
var useClasses = makeClasses({
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
    }
  }
});

export {
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
  ToastContainer
};
//# sourceMappingURL=chunk-BE3UTLYC.mjs.map