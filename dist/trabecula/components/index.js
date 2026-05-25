var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop2 in source)
    if (__hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
      target[prop2] = source[prop2];
  if (source != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source, prop2))
        target[prop2] = source[prop2];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// trabecula/components/index.ts
var components_exports = {};
__export(components_exports, {
  Accordion: () => Accordion,
  Button: () => Button,
  ButtonWithInset: () => ButtonWithInset,
  Card: () => Card,
  CardBase: () => CardBase,
  CardGrid: () => CardGrid,
  CenteredText: () => CenteredText,
  Checkbox: () => Checkbox,
  Chip: () => Chip,
  ColorPicker: () => ColorPicker,
  Comp: () => Comp,
  ConditionalWrap: () => ConditionalWrap,
  ConfirmModal: () => ConfirmModal,
  ContextMenu: () => ContextMenu,
  DateDetail: () => DateDetail,
  DateInput: () => DateInput,
  DateRange: () => DateRange,
  Detail: () => Detail,
  DetailRows: () => DetailRows,
  Divider: () => Divider,
  Dropdown: () => Dropdown,
  FilterMenu: () => FilterMenu,
  HeaderWrapper: () => HeaderWrapper,
  Icon: () => Icon,
  IconButton: () => IconButton,
  IconPicker: () => IconPicker,
  Input: () => Input,
  ListItem: () => ListItem,
  LoadingOverlay: () => LoadingOverlay,
  LogOpsInput: () => LogOpsInput,
  MULTI_INPUT_ROW_HEIGHT: () => MULTI_INPUT_ROW_HEIGHT,
  MenuButton: () => MenuButton,
  Modal: () => Modal,
  MultiActionButton: () => MultiActionButton,
  MultiInput: () => MultiInput,
  MultiInputList: () => MultiInputList,
  MultiInputRow: () => MultiInputRow,
  NumInput: () => NumInput,
  NumRange: () => NumRange,
  Pagination: () => Pagination,
  ProgressBar: () => ProgressBar,
  ProgressCircle: () => ProgressCircle,
  RangeWrapper: () => RangeWrapper,
  SideScroller: () => SideScroller,
  SortMenu: () => SortMenu,
  SortRow: () => SortRow,
  Table: () => Table,
  Text: () => Text,
  Tooltip: () => Tooltip,
  TooltipWrapper: () => TooltipWrapper,
  UniformList: () => UniformList,
  View: () => View
});
module.exports = __toCommonJS(components_exports);

// trabecula/components/comp.tsx
var import_react = require("react");
var import_mobx_react_lite = require("mobx-react-lite");
function Comp(component) {
  const Wrapped = (0, import_react.forwardRef)((props, ref) => component(props, ref));
  return (0, import_mobx_react_lite.observer)(Wrapped);
}

// trabecula/components/buttons/button.tsx
var import_material3 = require("@mui/material");
var import_color2 = __toESM(require("color"));

// trabecula/utils/client/css.ts
var import_material = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_color = __toESM(require("color"));
var import_tss_react = require("tss-react");
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
var { makeStyles } = (0, import_tss_react.createMakeAndWithStyles)({ useTheme: import_styles.useTheme });
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
  (0, import_color.default)(c).lighten(0.4).hex(),
  (0, import_color.default)(c).lighten(0.2).hex(),
  (0, import_color.default)(c).hex(),
  (0, import_color.default)(c).darken(0.2).hex(),
  (0, import_color.default)(c).darken(0.4).hex()
]);
var colors = {
  background: "#1E1E1E",
  custom: customColors,
  foreground: "#2C2C2C",
  foregroundCard: "#343434",
  mui: import_material.colors,
  tagCategories
};

// trabecula/utils/client/hooks.ts
var import_react2 = require("react");
var import_mobx = require("mobx");
var import_mobx_keystone = require("mobx-keystone");

// trabecula/utils/common/arrays.ts
var chunkArray = (arr, size) => [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));

// trabecula/utils/common/constants.ts
var AUDIO_CODECS_COMMON = [
  "None",
  "aac_he",
  "aac_ld",
  "aac",
  "ac3",
  "aiff",
  "alac",
  "avc",
  "dts",
  "flac",
  "mp2",
  "mp3",
  "mp4als",
  "opus",
  "pcm_alaw",
  "pcm_bluray",
  "pcm_dvd",
  "pcm_s16be",
  "pcm_s16le",
  "pcm_s24le",
  "pcm_s32le",
  "pcm_u8",
  "pcm",
  "tta",
  "vorbis",
  "wav",
  "wmapro",
  "wmav1",
  "wmav2"
];
var AUDIO_CODECS_UNCOMMON = [
  "aac_latm",
  "alac",
  "ape",
  "aptx_hd",
  "aptx",
  "avs",
  "binkaudio_dct",
  "binkaudio_rdft",
  "cavs",
  "cook",
  "hcom",
  "iac",
  "mace3",
  "mace6",
  "paf_audio",
  "ra_144",
  "ra_288",
  "ralf",
  "sipr",
  "tak",
  "westwood_snd1",
  "wmalossless",
  "wmavoice",
  "xma1",
  "xma2"
];
var AUDIO_CODECS = [...AUDIO_CODECS_COMMON, ...AUDIO_CODECS_UNCOMMON];
var IMAGE_EXTS_COMMON = ["gif", "heic", "jpeg", "jpg", "png", "webp"];
var IMAGE_EXTS_UNCOMMON = [
  "apng",
  "avif",
  "bmp",
  "jfif",
  "jif",
  "jiff",
  "svg",
  "tiff"
];
var IMAGE_EXTS = [...IMAGE_EXTS_COMMON, ...IMAGE_EXTS_UNCOMMON];
var VIDEO_CODECS_COMMON = [
  "av1",
  "h264",
  "hevc",
  "mpeg4",
  "prores",
  "vp8",
  "vp9",
  "wmv1"
];
var VIDEO_CODECS_UNCOMMON = [
  "amv",
  "asv1",
  "asv2",
  "auravision",
  "binkvideo",
  "camstudio",
  "cinepak",
  "dirac",
  "dnxhd",
  "dnxhr",
  "dvvideo",
  "ffv1",
  "flv1",
  "h263",
  "h263p",
  "huffyuv",
  "indeo3",
  "indeo5",
  "jpeg2000",
  "jpegls",
  "lagarith",
  "mjpeg",
  "mjpegb",
  "mpeg1video",
  "mpeg2video",
  "msmpeg4v1",
  "msmpeg4v2",
  "msmpeg4v3",
  "rawvideo",
  "rv10",
  "rv20",
  "rv30",
  "rv40",
  "smacker",
  "snow",
  "sp5x",
  "svq1",
  "svq3",
  "theora",
  "tscc",
  "utvideo",
  "uyvy422",
  "v210",
  "vixl",
  "vp6",
  "vp6f",
  "wmv2",
  "wmv3",
  "yuyv422",
  "zlib",
  "zmbv"
];
var VIDEO_CODECS = [...VIDEO_CODECS_COMMON, ...VIDEO_CODECS_UNCOMMON];
var VIDEO_EXTS_COMMON = [
  "3gp",
  "avi",
  "f4v",
  "flv",
  "m4v",
  "mkv",
  "mov",
  "mp4",
  "ts",
  "webm",
  "wmv"
];
var VIDEO_EXTS_UNCOMMON = [
  "3gp2",
  "3gpp",
  "amv",
  "asf",
  "avi",
  "divx",
  "m2t",
  "m2ts",
  "m2v",
  "m4b",
  "m4p",
  "mpeg",
  "mpg",
  "mts",
  "ogv",
  "qt",
  "vob",
  "wm",
  "wmp"
];
var VIDEO_EXTS = [...VIDEO_EXTS_COMMON, ...VIDEO_EXTS_UNCOMMON];
var _CONSTANTS = {
  IMAGE_EXTS,
  TOOLTIP: {
    ENTER_DELAY: 1e3,
    ENTER_NEXT_DELAY: 500
  },
  VIDEO_CODECS,
  VIDEO_EXTS
};

// trabecula/utils/common/date-and-time.ts
var import_dayjs = __toESM(require("dayjs"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_duration = __toESM(require("dayjs/plugin/duration"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);

// trabecula/utils/common/formatting.ts
var abbrevNum = (num) => Intl.NumberFormat("en", { notation: "compact" }).format(num);
var bytes = (bytes2) => {
  if (bytes2 < 1) return "0 B";
  const power = Math.floor(Math.log2(bytes2) / 10);
  return `${(bytes2 / __pow(1024, power)).toFixed(2)} ${"KMGTPEZY"[power - 1] || ""}B`;
};
var camelCase = (str) => `${str[0].toLowerCase()}${str.slice(1)}`;
var capitalize = (str, restLower = false) => str[0].toUpperCase() + (restLower ? str.substring(1).toLocaleLowerCase() : str.substring(1));
var commas = (num) => Intl.NumberFormat().format(num);
var decodeHtmlEntities = (s) => s.replace(htmlEntityRegex, (m) => {
  var _a;
  if (m.startsWith("&#x") || m.startsWith("&#X"))
    return String.fromCharCode(parseInt(m.slice(3, -1), 16));
  if (m.startsWith("&#")) return String.fromCharCode(parseInt(m.slice(2, -1), 10));
  return (_a = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[m.slice(1, -1)]) != null ? _a : m;
});
var duration2 = (val, isMs = false) => !isNaN(val) ? import_dayjs.default.duration(val, isMs ? "ms" : "s").format("HH:mm:ss") : null;
var frameToSec = (frame, frameRate) => round(frame / frameRate, 3);
var htmlEntityRegex = /&(#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g;
var jstr = (val) => JSON.stringify(val, null, 2);
var leadZeros = (num, places) => String(num).padStart(places, "0");
var pascalToSnake = (str) => !(str == null ? void 0 : str.length) ? "" : str.split(/(?=[A-Z])/).join("_").toLowerCase();
var regexEscape = (string, replacementOnly = false) => string ? replacementOnly ? String(string).replace(/(^|[^\\])(\/)/g, "$1\\$2") : String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : string;
var sanitizeWinPath = (winPath, isBasename = false, isFolderOnly = false) => {
  if (!winPath) return winPath;
  const sanitize = (part, isBase = false) => {
    return part.replaceAll(".", isBase ? "." : "\u2024").replaceAll("<", "\uFE64").replaceAll(">", "\uFE65").replaceAll(":", " \u02D0 ").replaceAll('"', "\u201C").replaceAll("/", " \u2044 ").replaceAll("|", "\u2F01").replaceAll("?", "\uFE56").replaceAll("*", "\uFE61").trim();
  };
  return isBasename ? sanitize(winPath, true) : winPath.split(/[/\\]/).map(
    (part, idx, parts) => idx === 0 && /^[a-zA-Z]:$/.test(part) ? part : sanitize(part, isFolderOnly ? false : idx === parts.length - 1)
  ).join("\\");
};
var snakeToPascal = (str) => !(str == null ? void 0 : str.length) ? "" : str.split("_").map((s) => capitalize(s)).join("");
var titleCase = (str) => str.split(" ").map((s) => capitalize(s)).join(" ");
var Fmt = {
  abbrevNum,
  bytes,
  camelCase,
  capitalize,
  commas,
  decodeHtmlEntities,
  duration: duration2,
  frameToSec,
  htmlEntityRegex,
  jstr,
  leadZeros,
  pascalToSnake,
  regexEscape,
  sanitizeWinPath,
  snakeToPascal,
  titleCase
};

// trabecula/utils/common/math.ts
var LOGICAL_OPS = ["=", "!=", ">", ">=", "<", "<="];
var round = (num, decimals = 2) => {
  const n = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * n) / n;
};

// trabecula/utils/common/miscellaneous.ts
var import_es_toolkit = require("es-toolkit");
var import_compat = require("es-toolkit/compat");
var debounce = import_es_toolkit.debounce;
var deepMerge = import_es_toolkit.toMerged;

// trabecula/utils/client/hooks.ts
var useElementResize = (ref, condition) => {
  const [dimensions, setDimensions] = (0, import_react2.useState)({ width: 0, height: 0 });
  const [absPosition, setAbsPosition] = (0, import_react2.useState)({ top: 0, left: 0 });
  (0, import_react2.useEffect)(() => {
    const nodeRef = ref == null ? void 0 : ref.current;
    const getDimensions = () => ({
      width: (nodeRef == null ? void 0 : nodeRef.offsetWidth) || 0,
      height: (nodeRef == null ? void 0 : nodeRef.offsetHeight) || 0
    });
    const getPosition = () => {
      var _a;
      const rect = (_a = nodeRef == null ? void 0 : nodeRef.getBoundingClientRect) == null ? void 0 : _a.call(nodeRef);
      return { top: (rect == null ? void 0 : rect.top) || 0, left: (rect == null ? void 0 : rect.left) || 0 };
    };
    const handleResize = () => {
      setDimensions(getDimensions());
      setAbsPosition(getPosition());
    };
    if (nodeRef) handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, condition]);
  return __spreadValues(__spreadValues({}, dimensions), absPosition);
};

// trabecula/utils/client/scrolling.ts
var import_react3 = require("react");

// trabecula/utils/client/store.ts
var import_mobx_keystone2 = require("mobx-keystone");

// trabecula/utils/client/toast.tsx
var import_react_toastify = require("react-toastify");
var import_material2 = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var toast = {
  error: import_react_toastify.toast.error,
  info: import_react_toastify.toast.info,
  success: import_react_toastify.toast.success,
  warn: import_react_toastify.toast.warn
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
        fontFamily: "Avenir",
        fontSize: "1.1rem",
        fontWeight: 400,
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

// trabecula/components/buttons/button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, {
    borderRadiuses = { all: "0.3rem" },
    boxShadow,
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
    size = "small",
    startNode,
    text,
    textColor,
    textTransform = "none",
    tooltip,
    tooltipProps,
    type = "button",
    width,
    whiteSpace = "nowrap"
  } = _b, props = __objRest(_b, [
    "borderRadiuses",
    "boxShadow",
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
    "width",
    "whiteSpace"
  ]);
  const { css, cx } = useClasses2({
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
    padding: __spreadValues({ all: !text ? "0.4em" : "0.4em 0.8em" }, padding),
    textColor,
    textTransform,
    width,
    whiteSpace
  });
  const handleClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    if (href) window.open(href, "_blank");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_material3.Button,
    __spreadProps(__spreadValues({}, props), {
      size,
      onClick: handleClick,
      variant: "contained",
      className: cx(css.root, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingOverlay, { isLoading: loading }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(View, { row: true, justify, spacing: "0.3rem", width: "100%", children: [
          startNode,
          icon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, __spreadValues({ name: icon, size: iconSize, color: textColor }, iconProps)),
          typeof text === "string" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Text,
            __spreadProps(__spreadValues({}, { fontSize, fontWeight }), {
              color: textColor,
              className: cx(css.text, className),
              children: text
            })
          ) : text,
          iconRight && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, __spreadValues({ name: iconRight, size: iconSize, color: textColor }, iconProps)),
          endNode
        ] })
      ]
    })
  ) }));
};
var useClasses2 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  return {
    root: __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: props.justify,
      alignItems: "center",
      border: `1px solid ${props.outlined ? props.color : "transparent"}`
    }, makeBorderRadiuses(props.borderRadiuses)), makeMargins(props.margins)), makePadding({
      all: (_a = props.padding) == null ? void 0 : _a.all,
      top: (_c = (_b = props.padding) == null ? void 0 : _b.top) != null ? _c : props.isLink ? 0 : void 0,
      bottom: (_e = (_d = props.padding) == null ? void 0 : _d.bottom) != null ? _e : props.isLink ? 0 : void 0,
      right: (_g = (_f = props.padding) == null ? void 0 : _f.right) != null ? _g : props.isLink ? 0 : void 0,
      left: (_i = (_h = props.padding) == null ? void 0 : _h.left) != null ? _i : props.isLink ? 0 : void 0
    })), {
      minWidth: "fit-content",
      height: props.height,
      width: props.width,
      backgroundColor: props.isLink ? "transparent" : props.outlined ? props.outlineFill : props.color,
      boxShadow: (_j = props.boxShadow) != null ? _j : "none",
      color: props.outlined ? props.color : (_k = props.textColor) != null ? _k : props.isLink ? colors.custom.lightBlue : props.outlined ? props.color : colors.custom.white,
      textTransform: props.textTransform,
      overflow: "hidden",
      "&:hover": {
        background: props.isLink ? "transparent" : props.colorOnHover || (0, import_color2.default)(props.outlined ? props.outlineFill : props.color).lighten(0.1).string(),
        boxShadow: props.isLink ? "none" : void 0,
        textDecoration: props.isLink ? "underline" : void 0
      }
    }),
    text: {
      lineHeight: 1.1,
      alignContent: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "all 100ms ease-in-out",
      textTransform: props.textTransform,
      whiteSpace: props.whiteSpace
    }
  };
});

// trabecula/components/buttons/button-with-inset.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ButtonWithInset = Comp(
  (_a) => {
    var _b = _a, { insetText, insetWidth = "2.5rem" } = _b, props = __objRest(_b, ["insetText", "insetWidth"]);
    const { css } = useClasses3({ insetWidth });
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Button,
      __spreadValues({
        startNode: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(View, { column: true, className: css.insetContainer, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { fontSize: "0.7em", children: insetText }) }),
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
var import_jsx_runtime4 = require("react/jsx-runtime");
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
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(View, { row: true, spacing: "0.5rem", align: "center", children: [
          noIcon ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(View, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "Palette", size: "1.15em" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { name: "Circle", color: value === null ? "transparent" : value })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Button,
        {
          text: "No Color",
          icon: "Close",
          onClick: handleNoColor,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(View, { column: true, children: swatches.map((swatch, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(View, { row: true, children: swatch.map((c) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_material4 = require("@mui/material");
var import_jsx_runtime5 = require("react/jsx-runtime");
var IconButton = (_a) => {
  var _b = _a, {
    children,
    className,
    disabled,
    iconProps = {},
    margins,
    name,
    onClick,
    size,
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
  const { css, cx } = useClasses4({ disabled, margins });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_material4.IconButton,
    __spreadProps(__spreadValues(__spreadValues({}, props), { disabled, onClick, size }), {
      className: cx(css.root, className),
      children: [
        name && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, __spreadProps(__spreadValues({}, iconProps), { name })),
        children
      ]
    })
  ) }));
};
var useClasses4 = makeClasses((props) => ({
  root: __spreadProps(__spreadValues({}, makeMargins(props.margins)), {
    opacity: props.disabled ? 0.5 : 1,
    transition: "all 100ms ease-in-out"
  })
}));

// trabecula/components/buttons/icon-picker.tsx
var import_react4 = require("react");
var import_material5 = require("@mui/material");

// trabecula/_generated/client/icons.ts
var MUI_ICONS = [
  "10k",
  "10mp",
  "11mp",
  "123",
  "12mp",
  "13mp",
  "14mp",
  "15mp",
  "16mp",
  "17mp",
  "18UpRating",
  "18mp",
  "19mp",
  "1k",
  "1kPlus",
  "1xMobiledata",
  "20mp",
  "21mp",
  "22mp",
  "23mp",
  "24mp",
  "2k",
  "2kPlus",
  "2mp",
  "30fps",
  "30fpsSelect",
  "360",
  "3dRotation",
  "3gMobiledata",
  "3k",
  "3kPlus",
  "3mp",
  "3p",
  "4gMobiledata",
  "4gPlusMobiledata",
  "4k",
  "4kPlus",
  "4mp",
  "5g",
  "5k",
  "5kPlus",
  "5mp",
  "60fps",
  "60fpsSelect",
  "6FtApart",
  "6k",
  "6kPlus",
  "6mp",
  "7k",
  "7kPlus",
  "7mp",
  "8k",
  "8kPlus",
  "8mp",
  "9k",
  "9kPlus",
  "9mp",
  "Abc",
  "AcUnit",
  "AccessAlarm",
  "AccessAlarms",
  "AccessTime",
  "AccessTimeFilled",
  "Accessibility",
  "AccessibilityNew",
  "Accessible",
  "AccessibleForward",
  "AccountBalance",
  "AccountBalanceWallet",
  "AccountBox",
  "AccountCircle",
  "AccountTree",
  "AdUnits",
  "Adb",
  "Add",
  "AddAPhoto",
  "AddAlarm",
  "AddAlert",
  "AddBox",
  "AddBusiness",
  "AddCard",
  "AddChart",
  "AddCircle",
  "AddCircleOutline",
  "AddComment",
  "AddHome",
  "AddHomeWork",
  "AddIcCall",
  "AddLink",
  "AddLocation",
  "AddLocationAlt",
  "AddModerator",
  "AddPhotoAlternate",
  "AddReaction",
  "AddRoad",
  "AddShoppingCart",
  "AddTask",
  "AddToDrive",
  "AddToHomeScreen",
  "AddToPhotos",
  "AddToQueue",
  "Addchart",
  "AdfScanner",
  "Adjust",
  "AdminPanelSettings",
  "Adobe",
  "AdsClick",
  "Agriculture",
  "Air",
  "AirlineSeatFlat",
  "AirlineSeatFlatAngled",
  "AirlineSeatIndividualSuite",
  "AirlineSeatLegroomExtra",
  "AirlineSeatLegroomNormal",
  "AirlineSeatLegroomReduced",
  "AirlineSeatReclineExtra",
  "AirlineSeatReclineNormal",
  "AirlineStops",
  "Airlines",
  "AirplaneTicket",
  "AirplanemodeActive",
  "AirplanemodeInactive",
  "AirplanemodeOff",
  "AirplanemodeOn",
  "Airplay",
  "AirportShuttle",
  "Alarm",
  "AlarmAdd",
  "AlarmOff",
  "AlarmOn",
  "Album",
  "AlignHorizontalCenter",
  "AlignHorizontalLeft",
  "AlignHorizontalRight",
  "AlignVerticalBottom",
  "AlignVerticalCenter",
  "AlignVerticalTop",
  "AllInbox",
  "AllInclusive",
  "AllOut",
  "AltRoute",
  "AlternateEmail",
  "AmpStories",
  "Analytics",
  "Anchor",
  "Android",
  "Animation",
  "Announcement",
  "Aod",
  "Apartment",
  "Api",
  "AppBlocking",
  "AppRegistration",
  "AppSettingsAlt",
  "AppShortcut",
  "Apple",
  "Approval",
  "Apps",
  "AppsOutage",
  "Architecture",
  "Archive",
  "AreaChart",
  "ArrowBack",
  "ArrowBackIos",
  "ArrowBackIosNew",
  "ArrowCircleDown",
  "ArrowCircleLeft",
  "ArrowCircleRight",
  "ArrowCircleUp",
  "ArrowDownward",
  "ArrowDropDown",
  "ArrowDropDownCircle",
  "ArrowDropUp",
  "ArrowForward",
  "ArrowForwardIos",
  "ArrowLeft",
  "ArrowOutward",
  "ArrowRight",
  "ArrowRightAlt",
  "ArrowUpward",
  "ArtTrack",
  "Article",
  "AspectRatio",
  "Assessment",
  "Assignment",
  "AssignmentInd",
  "AssignmentLate",
  "AssignmentReturn",
  "AssignmentReturned",
  "AssignmentTurnedIn",
  "AssistWalker",
  "Assistant",
  "AssistantDirection",
  "AssistantPhoto",
  "AssuredWorkload",
  "Atm",
  "AttachEmail",
  "AttachFile",
  "AttachMoney",
  "Attachment",
  "Attractions",
  "Attribution",
  "AudioFile",
  "Audiotrack",
  "AutoAwesome",
  "AutoAwesomeMosaic",
  "AutoAwesomeMotion",
  "AutoDelete",
  "AutoFixHigh",
  "AutoFixNormal",
  "AutoFixOff",
  "AutoGraph",
  "AutoMode",
  "AutoStories",
  "AutofpsSelect",
  "Autorenew",
  "AvTimer",
  "BabyChangingStation",
  "BackHand",
  "Backpack",
  "Backspace",
  "Backup",
  "BackupTable",
  "Badge",
  "BakeryDining",
  "Balance",
  "Balcony",
  "Ballot",
  "BarChart",
  "BatchPrediction",
  "Bathroom",
  "Bathtub",
  "Battery0Bar",
  "Battery1Bar",
  "Battery2Bar",
  "Battery3Bar",
  "Battery4Bar",
  "Battery5Bar",
  "Battery6Bar",
  "BatteryAlert",
  "BatteryChargingFull",
  "BatteryFull",
  "BatterySaver",
  "BatteryStd",
  "BatteryUnknown",
  "BeachAccess",
  "Bed",
  "BedroomBaby",
  "BedroomChild",
  "BedroomParent",
  "Bedtime",
  "BedtimeOff",
  "Beenhere",
  "Bento",
  "BikeScooter",
  "Biotech",
  "Blender",
  "Blind",
  "Blinds",
  "BlindsClosed",
  "Block",
  "Bloodtype",
  "Bluetooth",
  "BluetoothAudio",
  "BluetoothConnected",
  "BluetoothDisabled",
  "BluetoothDrive",
  "BluetoothSearching",
  "BlurCircular",
  "BlurLinear",
  "BlurOff",
  "BlurOn",
  "Bolt",
  "Book",
  "BookOnline",
  "Bookmark",
  "BookmarkAdd",
  "BookmarkAdded",
  "BookmarkBorder",
  "BookmarkOutline",
  "BookmarkRemove",
  "Bookmarks",
  "BorderAll",
  "BorderBottom",
  "BorderClear",
  "BorderColor",
  "BorderHorizontal",
  "BorderInner",
  "BorderLeft",
  "BorderOuter",
  "BorderRight",
  "BorderStyle",
  "BorderTop",
  "BorderVertical",
  "Boy",
  "BrandingWatermark",
  "BreakfastDining",
  "Brightness1",
  "Brightness2",
  "Brightness3",
  "Brightness4",
  "Brightness5",
  "Brightness6",
  "Brightness7",
  "BrightnessAuto",
  "BrightnessHigh",
  "BrightnessLow",
  "BrightnessMedium",
  "BroadcastOnHome",
  "BroadcastOnPersonal",
  "BrokenImage",
  "BrowseGallery",
  "BrowserNotSupported",
  "BrowserUpdated",
  "BrunchDining",
  "Brush",
  "BubbleChart",
  "BugReport",
  "Build",
  "BuildCircle",
  "Bungalow",
  "BurstMode",
  "BusAlert",
  "Business",
  "BusinessCenter",
  "Cabin",
  "Cable",
  "Cached",
  "Cake",
  "Calculate",
  "CalendarMonth",
  "CalendarToday",
  "CalendarViewDay",
  "CalendarViewMonth",
  "CalendarViewWeek",
  "Call",
  "CallEnd",
  "CallMade",
  "CallMerge",
  "CallMissed",
  "CallMissedOutgoing",
  "CallReceived",
  "CallSplit",
  "CallToAction",
  "Camera",
  "CameraAlt",
  "CameraEnhance",
  "CameraFront",
  "CameraIndoor",
  "CameraOutdoor",
  "CameraRear",
  "CameraRoll",
  "Cameraswitch",
  "Campaign",
  "Cancel",
  "CancelPresentation",
  "CancelScheduleSend",
  "CandlestickChart",
  "CarCrash",
  "CarRental",
  "CarRepair",
  "CardGiftcard",
  "CardMembership",
  "CardTravel",
  "Carpenter",
  "Cases",
  "Casino",
  "Cast",
  "CastConnected",
  "CastForEducation",
  "Castle",
  "CatchingPokemon",
  "Category",
  "Celebration",
  "CellTower",
  "CellWifi",
  "CenterFocusStrong",
  "CenterFocusWeak",
  "Chair",
  "ChairAlt",
  "Chalet",
  "ChangeCircle",
  "ChangeHistory",
  "ChargingStation",
  "Chat",
  "ChatBubble",
  "ChatBubbleOutline",
  "Check",
  "CheckBox",
  "CheckBoxOutlineBlank",
  "CheckCircle",
  "CheckCircleOutline",
  "Checklist",
  "ChecklistRtl",
  "Checkroom",
  "ChevronLeft",
  "ChevronRight",
  "ChildCare",
  "ChildFriendly",
  "ChromeReaderMode",
  "Church",
  "Circle",
  "CircleNotifications",
  "Class",
  "CleanHands",
  "CleaningServices",
  "Clear",
  "ClearAll",
  "Close",
  "CloseFullscreen",
  "ClosedCaption",
  "ClosedCaptionDisabled",
  "ClosedCaptionOff",
  "Cloud",
  "CloudCircle",
  "CloudDone",
  "CloudDownload",
  "CloudOff",
  "CloudQueue",
  "CloudSync",
  "CloudUpload",
  "Co2",
  "CoPresent",
  "Code",
  "CodeOff",
  "Coffee",
  "CoffeeMaker",
  "Collections",
  "CollectionsBookmark",
  "ColorLens",
  "Colorize",
  "Comment",
  "CommentBank",
  "CommentsDisabled",
  "Commit",
  "Commute",
  "Compare",
  "CompareArrows",
  "CompassCalibration",
  "Compost",
  "Compress",
  "Computer",
  "ConfirmationNum",
  "ConfirmationNumber",
  "ConnectWithoutContact",
  "ConnectedTv",
  "ConnectingAirports",
  "Construction",
  "ContactEmergency",
  "ContactMail",
  "ContactPage",
  "ContactPhone",
  "ContactSupport",
  "Contactless",
  "Contacts",
  "ContentCopy",
  "ContentCut",
  "ContentPaste",
  "ContentPasteGo",
  "ContentPasteOff",
  "ContentPasteSearch",
  "Contrast",
  "ControlCamera",
  "ControlPoint",
  "ControlPointDuplicate",
  "Cookie",
  "Copy",
  "CopyAll",
  "Copyright",
  "Coronavirus",
  "CorporateFare",
  "Cottage",
  "Countertops",
  "Create",
  "CreateNewFolder",
  "CreditCard",
  "CreditCardOff",
  "CreditScore",
  "Crib",
  "CrisisAlert",
  "Crop",
  "Crop169",
  "Crop32",
  "Crop54",
  "Crop75",
  "CropDin",
  "CropFree",
  "CropLandscape",
  "CropOriginal",
  "CropPortrait",
  "CropRotate",
  "CropSquare",
  "CrueltyFree",
  "Css",
  "CurrencyBitcoin",
  "CurrencyExchange",
  "CurrencyFranc",
  "CurrencyLira",
  "CurrencyPound",
  "CurrencyRuble",
  "CurrencyRupee",
  "CurrencyYen",
  "CurrencyYuan",
  "Curtains",
  "CurtainsClosed",
  "Cut",
  "Cyclone",
  "Dangerous",
  "DarkMode",
  "Dashboard",
  "DashboardCustomize",
  "DataArray",
  "DataExploration",
  "DataObject",
  "DataSaverOff",
  "DataSaverOn",
  "DataThresholding",
  "DataUsage",
  "Dataset",
  "DatasetLinked",
  "DateRange",
  "Deblur",
  "Deck",
  "Dehaze",
  "Delete",
  "DeleteForever",
  "DeleteOutline",
  "DeleteSweep",
  "DeliveryDining",
  "DensityLarge",
  "DensityMedium",
  "DensitySmall",
  "DepartureBoard",
  "Description",
  "Deselect",
  "DesignServices",
  "Desk",
  "DesktopAccessDisabled",
  "DesktopMac",
  "DesktopWindows",
  "Details",
  "DeveloperBoard",
  "DeveloperBoardOff",
  "DeveloperMode",
  "DeviceHub",
  "DeviceThermostat",
  "DeviceUnknown",
  "Devices",
  "DevicesFold",
  "DevicesOther",
  "DialerSip",
  "Dialpad",
  "Diamond",
  "Difference",
  "Dining",
  "DinnerDining",
  "Directions",
  "DirectionsBike",
  "DirectionsBoat",
  "DirectionsBoatFilled",
  "DirectionsBus",
  "DirectionsBusFilled",
  "DirectionsCar",
  "DirectionsCarFilled",
  "DirectionsFerry",
  "DirectionsOff",
  "DirectionsRailway",
  "DirectionsRailwayFilled",
  "DirectionsRun",
  "DirectionsSubway",
  "DirectionsSubwayFilled",
  "DirectionsTrain",
  "DirectionsTransit",
  "DirectionsTransitFilled",
  "DirectionsWalk",
  "DirtyLens",
  "DisabledByDefault",
  "DisabledVisible",
  "DiscFull",
  "Discord",
  "Discount",
  "DisplaySettings",
  "Diversity1",
  "Diversity2",
  "Diversity3",
  "DndForwardslash",
  "Dns",
  "DoDisturb",
  "DoDisturbAlt",
  "DoDisturbOff",
  "DoDisturbOn",
  "DoNotDisturb",
  "DoNotDisturbAlt",
  "DoNotDisturbOff",
  "DoNotDisturbOn",
  "DoNotDisturbOnTotalSilence",
  "DoNotStep",
  "DoNotTouch",
  "Dock",
  "DocumentScanner",
  "Domain",
  "DomainAdd",
  "DomainDisabled",
  "DomainVerification",
  "Done",
  "DoneAll",
  "DoneOutline",
  "DonutLarge",
  "DonutSmall",
  "DoorBack",
  "DoorFront",
  "DoorSliding",
  "Doorbell",
  "DoubleArrow",
  "DownhillSkiing",
  "Download",
  "DownloadDone",
  "DownloadForOffline",
  "Downloading",
  "Drafts",
  "DragHandle",
  "DragIndicator",
  "Draw",
  "DriveEta",
  "DriveFileMove",
  "DriveFileMoveRtl",
  "DriveFileRenameOutline",
  "DriveFolderUpload",
  "Dry",
  "DryCleaning",
  "Duo",
  "Dvr",
  "DynamicFeed",
  "DynamicForm",
  "EMobiledata",
  "Earbuds",
  "EarbudsBattery",
  "East",
  "Eco",
  "EdgesensorHigh",
  "EdgesensorLow",
  "Edit",
  "EditAttributes",
  "EditCalendar",
  "EditLocation",
  "EditLocationAlt",
  "EditNote",
  "EditNotifications",
  "EditOff",
  "EditRoad",
  "Egg",
  "EggAlt",
  "Eject",
  "Elderly",
  "ElderlyWoman",
  "ElectricBike",
  "ElectricBolt",
  "ElectricCar",
  "ElectricMeter",
  "ElectricMoped",
  "ElectricRickshaw",
  "ElectricScooter",
  "ElectricalServices",
  "Elevator",
  "Email",
  "Emergency",
  "EmergencyRecording",
  "EmergencyShare",
  "EmojiEmotions",
  "EmojiEvents",
  "EmojiFlags",
  "EmojiFoodBeverage",
  "EmojiNature",
  "EmojiObjects",
  "EmojiPeople",
  "EmojiSymbols",
  "EmojiTransportation",
  "EnergySavingsLeaf",
  "Engineering",
  "EnhancePhotoTranslate",
  "EnhancedEncryption",
  "Equalizer",
  "Error",
  "ErrorOutline",
  "Escalator",
  "EscalatorWarning",
  "Euro",
  "EuroSymbol",
  "EvStation",
  "Event",
  "EventAvailable",
  "EventBusy",
  "EventNote",
  "EventRepeat",
  "EventSeat",
  "ExitToApp",
  "Expand",
  "ExpandCircleDown",
  "ExpandLess",
  "ExpandMore",
  "Explicit",
  "Explore",
  "ExploreOff",
  "Exposure",
  "ExposureMinus1",
  "ExposureMinus2",
  "ExposureNeg1",
  "ExposureNeg2",
  "ExposurePlus1",
  "ExposurePlus2",
  "ExposureZero",
  "Extension",
  "ExtensionOff",
  "Face",
  "Face2",
  "Face3",
  "Face4",
  "Face5",
  "Face6",
  "FaceRetouchingNatural",
  "FaceRetouchingOff",
  "FaceUnlock",
  "Facebook",
  "FactCheck",
  "Factory",
  "FamilyRestroom",
  "FastForward",
  "FastRewind",
  "Fastfood",
  "Favorite",
  "FavoriteBorder",
  "FavoriteOutline",
  "Fax",
  "FeaturedPlayList",
  "FeaturedVideo",
  "Feed",
  "Feedback",
  "Female",
  "Fence",
  "Festival",
  "FiberDvr",
  "FiberManualRecord",
  "FiberNew",
  "FiberPin",
  "FiberSmartRecord",
  "FileCopy",
  "FileDownload",
  "FileDownloadDone",
  "FileDownloadOff",
  "FileOpen",
  "FilePresent",
  "FileUpload",
  "Filter",
  "Filter1",
  "Filter2",
  "Filter3",
  "Filter4",
  "Filter5",
  "Filter6",
  "Filter7",
  "Filter8",
  "Filter9",
  "Filter9Plus",
  "FilterAlt",
  "FilterAltOff",
  "FilterBAndW",
  "FilterCenterFocus",
  "FilterDrama",
  "FilterFrames",
  "FilterHdr",
  "FilterList",
  "FilterListOff",
  "FilterNone",
  "FilterTiltShift",
  "FilterVintage",
  "FindInPage",
  "FindReplace",
  "Fingerprint",
  "FireExtinguisher",
  "FireHydrantAlt",
  "FireTruck",
  "Fireplace",
  "FirstPage",
  "FitScreen",
  "Fitbit",
  "FitnessCenter",
  "Flag",
  "FlagCircle",
  "Flaky",
  "Flare",
  "FlashAuto",
  "FlashOff",
  "FlashOn",
  "FlashlightOff",
  "FlashlightOn",
  "Flatware",
  "Flight",
  "FlightClass",
  "FlightLand",
  "FlightTakeoff",
  "Flip",
  "FlipCameraAndroid",
  "FlipCameraIos",
  "FlipToBack",
  "FlipToFront",
  "Flood",
  "Flourescent",
  "Fluorescent",
  "FlutterDash",
  "FmdBad",
  "FmdGood",
  "Folder",
  "FolderCopy",
  "FolderDelete",
  "FolderOff",
  "FolderOpen",
  "FolderShared",
  "FolderSpecial",
  "FolderZip",
  "FollowTheSigns",
  "FontDownload",
  "FontDownloadOff",
  "FoodBank",
  "Forest",
  "ForkLeft",
  "ForkRight",
  "FormatAlignCenter",
  "FormatAlignJustify",
  "FormatAlignLeft",
  "FormatAlignRight",
  "FormatBold",
  "FormatClear",
  "FormatColorFill",
  "FormatColorReset",
  "FormatColorText",
  "FormatIndentDecrease",
  "FormatIndentIncrease",
  "FormatItalic",
  "FormatLineSpacing",
  "FormatListBulleted",
  "FormatListNumbered",
  "FormatListNumberedRtl",
  "FormatOverline",
  "FormatPaint",
  "FormatQuote",
  "FormatShapes",
  "FormatSize",
  "FormatStrikethrough",
  "FormatTextdirectionLToR",
  "FormatTextdirectionRToL",
  "FormatUnderline",
  "FormatUnderlined",
  "Fort",
  "Forum",
  "Forward",
  "Forward10",
  "Forward30",
  "Forward5",
  "ForwardToInbox",
  "Foundation",
  "FreeBreakfast",
  "FreeCancellation",
  "FrontHand",
  "Fullscreen",
  "FullscreenExit",
  "Functions",
  "GMobiledata",
  "GTranslate",
  "Gamepad",
  "Games",
  "Garage",
  "GasMeter",
  "Gavel",
  "GeneratingTokens",
  "Gesture",
  "GetApp",
  "Gif",
  "GifBox",
  "Girl",
  "Gite",
  "GolfCourse",
  "GppBad",
  "GppGood",
  "GppMaybe",
  "GpsFixed",
  "GpsNotFixed",
  "GpsOff",
  "Grade",
  "Gradient",
  "Grading",
  "Grain",
  "GraphicEq",
  "Grass",
  "Grid3x3",
  "Grid4x4",
  "GridGoldenratio",
  "GridOff",
  "GridOn",
  "GridView",
  "Group",
  "GroupAdd",
  "GroupOff",
  "GroupRemove",
  "GroupWork",
  "Groups",
  "Groups2",
  "Groups3",
  "HMobiledata",
  "HPlusMobiledata",
  "Hail",
  "Handshake",
  "Handyman",
  "Hardware",
  "Hd",
  "HdrAuto",
  "HdrAutoSelect",
  "HdrEnhancedSelect",
  "HdrOff",
  "HdrOffSelect",
  "HdrOn",
  "HdrOnSelect",
  "HdrPlus",
  "HdrStrong",
  "HdrWeak",
  "Headphones",
  "HeadphonesBattery",
  "Headset",
  "HeadsetMic",
  "HeadsetOff",
  "Healing",
  "HealthAndSafety",
  "Hearing",
  "HearingDisabled",
  "HeartBroken",
  "HeatPump",
  "Height",
  "Help",
  "HelpCenter",
  "HelpOutline",
  "Hevc",
  "Hexagon",
  "HideImage",
  "HideSource",
  "HighQuality",
  "Highlight",
  "HighlightAlt",
  "HighlightOff",
  "HighlightRemove",
  "Hiking",
  "History",
  "HistoryEdu",
  "HistoryToggleOff",
  "Hive",
  "Hls",
  "HlsOff",
  "HolidayVillage",
  "Home",
  "HomeMax",
  "HomeMini",
  "HomeRepairService",
  "HomeWork",
  "HorizontalDistribute",
  "HorizontalRule",
  "HorizontalSplit",
  "HotTub",
  "Hotel",
  "HotelClass",
  "HourglassBottom",
  "HourglassDisabled",
  "HourglassEmpty",
  "HourglassFull",
  "HourglassTop",
  "House",
  "HouseSiding",
  "Houseboat",
  "HowToReg",
  "HowToVote",
  "Html",
  "Http",
  "Https",
  "Hub",
  "Hvac",
  "IceSkating",
  "Icecream",
  "Image",
  "ImageAspectRatio",
  "ImageNotSupported",
  "ImageSearch",
  "ImagesearchRoller",
  "ImportContacts",
  "ImportExport",
  "ImportantDevices",
  "Inbox",
  "IncompleteCircle",
  "IndeterminateCheckBox",
  "Info",
  "InfoOutline",
  "Input",
  "InsertChart",
  "InsertChartOutlined",
  "InsertComment",
  "InsertDriveFile",
  "InsertEmoticon",
  "InsertInvitation",
  "InsertLink",
  "InsertPageBreak",
  "InsertPhoto",
  "Insights",
  "InstallDesktop",
  "InstallMobile",
  "IntegrationInstructions",
  "Interests",
  "InterpreterMode",
  "Inventory",
  "Inventory2",
  "InvertColors",
  "InvertColorsOff",
  "InvertColorsOn",
  "IosShare",
  "Iron",
  "Iso",
  "Javascript",
  "JoinFull",
  "JoinInner",
  "JoinLeft",
  "JoinRight",
  "Kayaking",
  "KebabDining",
  "Key",
  "KeyOff",
  "Keyboard",
  "KeyboardAlt",
  "KeyboardArrowDown",
  "KeyboardArrowLeft",
  "KeyboardArrowRight",
  "KeyboardArrowUp",
  "KeyboardBackspace",
  "KeyboardCapslock",
  "KeyboardCommandKey",
  "KeyboardControl",
  "KeyboardControlKey",
  "KeyboardDoubleArrowDown",
  "KeyboardDoubleArrowLeft",
  "KeyboardDoubleArrowRight",
  "KeyboardDoubleArrowUp",
  "KeyboardHide",
  "KeyboardOptionKey",
  "KeyboardReturn",
  "KeyboardTab",
  "KeyboardVoice",
  "KingBed",
  "Kitchen",
  "Kitesurfing",
  "Label",
  "LabelImportant",
  "LabelImportantOutline",
  "LabelOff",
  "LabelOutline",
  "Lan",
  "Landscape",
  "Landslide",
  "Language",
  "Laptop",
  "LaptopChromebook",
  "LaptopMac",
  "LaptopWindows",
  "LastPage",
  "Launch",
  "Layers",
  "LayersClear",
  "Leaderboard",
  "LeakAdd",
  "LeakRemove",
  "LeaveBagsAtHome",
  "LegendToggle",
  "Lens",
  "LensBlur",
  "LibraryAdd",
  "LibraryAddCheck",
  "LibraryBooks",
  "LibraryMusic",
  "Light",
  "LightMode",
  "Lightbulb",
  "LightbulbCircle",
  "LightbulbOutline",
  "LineAxis",
  "LineStyle",
  "LineWeight",
  "LinearScale",
  "Link",
  "LinkOff",
  "LinkedCamera",
  "Liquor",
  "List",
  "ListAlt",
  "LiveHelp",
  "LiveTv",
  "Living",
  "LocalActivity",
  "LocalAirport",
  "LocalAtm",
  "LocalAttraction",
  "LocalBar",
  "LocalCafe",
  "LocalCarWash",
  "LocalConvenienceStore",
  "LocalDining",
  "LocalDrink",
  "LocalFireDepartment",
  "LocalFlorist",
  "LocalGasStation",
  "LocalGroceryStore",
  "LocalHospital",
  "LocalHotel",
  "LocalLaundryService",
  "LocalLibrary",
  "LocalMall",
  "LocalMovies",
  "LocalOffer",
  "LocalParking",
  "LocalPharmacy",
  "LocalPhone",
  "LocalPizza",
  "LocalPlay",
  "LocalPolice",
  "LocalPostOffice",
  "LocalPrintShop",
  "LocalPrintshop",
  "LocalRestaurant",
  "LocalSee",
  "LocalShipping",
  "LocalTaxi",
  "LocationCity",
  "LocationDisabled",
  "LocationHistory",
  "LocationOff",
  "LocationOn",
  "LocationSearching",
  "Lock",
  "LockClock",
  "LockOpen",
  "LockOutline",
  "LockPerson",
  "LockReset",
  "Login",
  "LogoDev",
  "Logout",
  "Looks",
  "Looks3",
  "Looks4",
  "Looks5",
  "Looks6",
  "LooksOne",
  "LooksTwo",
  "Loop",
  "Loupe",
  "LowPriority",
  "Loyalty",
  "LteMobiledata",
  "LtePlusMobiledata",
  "Luggage",
  "LunchDining",
  "Lyrics",
  "MacroOff",
  "Mail",
  "MailLock",
  "MailOutline",
  "Male",
  "Man",
  "Man2",
  "Man3",
  "Man4",
  "ManageAccounts",
  "ManageHistory",
  "ManageSearch",
  "Map",
  "MapsHomeWork",
  "MapsUgc",
  "Margin",
  "MarkAsUnread",
  "MarkChatRead",
  "MarkChatUnread",
  "MarkEmailRead",
  "MarkEmailUnread",
  "MarkUnreadChatAlt",
  "Markunread",
  "MarkunreadMailbox",
  "Masks",
  "Maximize",
  "MediaBluetoothOff",
  "MediaBluetoothOn",
  "Mediation",
  "MedicalInformation",
  "MedicalServices",
  "Medication",
  "MedicationLiquid",
  "MeetingRoom",
  "Memory",
  "Menu",
  "MenuBook",
  "MenuOpen",
  "Merge",
  "MergeType",
  "Message",
  "Messenger",
  "MessengerOutline",
  "Mic",
  "MicExternalOff",
  "MicExternalOn",
  "MicNone",
  "MicOff",
  "Microwave",
  "MilitaryTech",
  "Minimize",
  "MinorCrash",
  "MiscellaneousServices",
  "MissedVideoCall",
  "Mms",
  "MobileFriendly",
  "MobileOff",
  "MobileScreenShare",
  "MobiledataOff",
  "Mode",
  "ModeComment",
  "ModeEdit",
  "ModeEditOutline",
  "ModeFanOff",
  "ModeNight",
  "ModeOfTravel",
  "ModeStandby",
  "ModelTraining",
  "MonetizationOn",
  "Money",
  "MoneyOff",
  "MoneyOffCsred",
  "Monitor",
  "MonitorHeart",
  "MonitorWeight",
  "MonochromePhotos",
  "Mood",
  "MoodBad",
  "Moped",
  "More",
  "MoreHoriz",
  "MoreTime",
  "MoreVert",
  "Mosque",
  "MotionPhotosAuto",
  "MotionPhotosOff",
  "MotionPhotosOn",
  "MotionPhotosPause",
  "MotionPhotosPaused",
  "Motorcycle",
  "Mouse",
  "MoveDown",
  "MoveToInbox",
  "MoveUp",
  "Movie",
  "MovieCreation",
  "MovieFilter",
  "Moving",
  "Mp",
  "MultilineChart",
  "MultipleStop",
  "MultitrackAudio",
  "Museum",
  "MusicNote",
  "MusicOff",
  "MusicVideo",
  "MyLibraryAdd",
  "MyLibraryBooks",
  "MyLibraryMusic",
  "MyLocation",
  "Nat",
  "Nature",
  "NaturePeople",
  "NavigateBefore",
  "NavigateNext",
  "Navigation",
  "NearMe",
  "NearMeDisabled",
  "NearbyError",
  "NearbyOff",
  "NestCamWiredStand",
  "NetworkCell",
  "NetworkCheck",
  "NetworkLocked",
  "NetworkPing",
  "NetworkWifi",
  "NetworkWifi1Bar",
  "NetworkWifi2Bar",
  "NetworkWifi3Bar",
  "NewLabel",
  "NewReleases",
  "Newspaper",
  "NextPlan",
  "NextWeek",
  "Nfc",
  "NightShelter",
  "Nightlife",
  "Nightlight",
  "NightlightRound",
  "NightsStay",
  "NoAccounts",
  "NoAdultContent",
  "NoBackpack",
  "NoCell",
  "NoCrash",
  "NoDrinks",
  "NoEncryption",
  "NoEncryptionGmailerrorred",
  "NoFlash",
  "NoFood",
  "NoLuggage",
  "NoMeals",
  "NoMeetingRoom",
  "NoPhotography",
  "NoSim",
  "NoStroller",
  "NoTransfer",
  "NoiseAware",
  "NoiseControlOff",
  "NordicWalking",
  "North",
  "NorthEast",
  "NorthWest",
  "NotAccessible",
  "NotInterested",
  "NotListedLocation",
  "NotStarted",
  "Note",
  "NoteAdd",
  "NoteAlt",
  "Notes",
  "NotificationAdd",
  "NotificationImportant",
  "Notifications",
  "NotificationsActive",
  "NotificationsNone",
  "NotificationsOff",
  "NotificationsOn",
  "NotificationsPaused",
  "NowWallpaper",
  "NowWidgets",
  "Numbers",
  "OfflineBolt",
  "OfflinePin",
  "OfflineShare",
  "OilBarrel",
  "OnDeviceTraining",
  "OndemandVideo",
  "OnlinePrediction",
  "Opacity",
  "OpenInBrowser",
  "OpenInFull",
  "OpenInNew",
  "OpenInNewOff",
  "OpenWith",
  "OtherHouses",
  "Outbond",
  "Outbound",
  "Outbox",
  "OutdoorGrill",
  "Outlet",
  "OutlinedFlag",
  "Output",
  "Padding",
  "Pages",
  "Pageview",
  "Paid",
  "Palette",
  "PanTool",
  "PanToolAlt",
  "Panorama",
  "PanoramaFishEye",
  "PanoramaFisheye",
  "PanoramaHorizontal",
  "PanoramaHorizontalSelect",
  "PanoramaPhotosphere",
  "PanoramaPhotosphereSelect",
  "PanoramaVertical",
  "PanoramaVerticalSelect",
  "PanoramaWideAngle",
  "PanoramaWideAngleSelect",
  "Paragliding",
  "Park",
  "PartyMode",
  "Password",
  "Paste",
  "Pattern",
  "Pause",
  "PauseCircle",
  "PauseCircleFilled",
  "PauseCircleOutline",
  "PausePresentation",
  "Payment",
  "Payments",
  "Paypal",
  "PedalBike",
  "Pending",
  "PendingActions",
  "Pentagon",
  "People",
  "PeopleAlt",
  "PeopleOutline",
  "Percent",
  "PermCameraMic",
  "PermContactCal",
  "PermContactCalendar",
  "PermDataSetting",
  "PermDeviceInfo",
  "PermDeviceInformation",
  "PermIdentity",
  "PermMedia",
  "PermPhoneMsg",
  "PermScanWifi",
  "Person",
  "Person2",
  "Person3",
  "Person4",
  "PersonAdd",
  "PersonAddAlt",
  "PersonAddAlt1",
  "PersonAddDisabled",
  "PersonOff",
  "PersonOutline",
  "PersonPin",
  "PersonPinCircle",
  "PersonRemove",
  "PersonRemoveAlt1",
  "PersonSearch",
  "PersonalInjury",
  "PersonalVideo",
  "PestControl",
  "PestControlRodent",
  "Pets",
  "Phishing",
  "Phone",
  "PhoneAndroid",
  "PhoneBluetoothSpeaker",
  "PhoneCallback",
  "PhoneDisabled",
  "PhoneEnabled",
  "PhoneForwarded",
  "PhoneInTalk",
  "PhoneIphone",
  "PhoneLocked",
  "PhoneMissed",
  "PhonePaused",
  "Phonelink",
  "PhonelinkErase",
  "PhonelinkLock",
  "PhonelinkOff",
  "PhonelinkRing",
  "PhonelinkSetup",
  "Photo",
  "PhotoAlbum",
  "PhotoCamera",
  "PhotoCameraBack",
  "PhotoCameraFront",
  "PhotoFilter",
  "PhotoLibrary",
  "PhotoSizeSelectActual",
  "PhotoSizeSelectLarge",
  "PhotoSizeSelectSmall",
  "Php",
  "Piano",
  "PianoOff",
  "PictureAsPdf",
  "PictureInPicture",
  "PictureInPictureAlt",
  "PieChart",
  "PieChartOutline",
  "Pin",
  "PinDrop",
  "PinEnd",
  "PinInvoke",
  "Pinch",
  "PivotTableChart",
  "Pix",
  "Place",
  "Plagiarism",
  "PlayArrow",
  "PlayCircle",
  "PlayCircleFill",
  "PlayCircleFilled",
  "PlayCircleOutline",
  "PlayDisabled",
  "PlayForWork",
  "PlayLesson",
  "PlaylistAdd",
  "PlaylistAddCheck",
  "PlaylistAddCheckCircle",
  "PlaylistAddCircle",
  "PlaylistPlay",
  "PlaylistRemove",
  "Plumbing",
  "PlusOne",
  "Podcasts",
  "PointOfSale",
  "Policy",
  "Poll",
  "Polyline",
  "Polymer",
  "Pool",
  "PortableWifiOff",
  "Portrait",
  "PostAdd",
  "Power",
  "PowerInput",
  "PowerOff",
  "PowerSettingsNew",
  "PrecisionManufacturing",
  "PregnantWoman",
  "PresentToAll",
  "Preview",
  "PriceChange",
  "PriceCheck",
  "Print",
  "PrintDisabled",
  "PriorityHigh",
  "PrivacyTip",
  "PrivateConnectivity",
  "ProductionQuantityLimits",
  "Propane",
  "PropaneTank",
  "Psychology",
  "PsychologyAlt",
  "Public",
  "PublicOff",
  "Publish",
  "PublishedWithChanges",
  "PunchClock",
  "PushPin",
  "QrCode",
  "QrCode2",
  "QrCodeScanner",
  "QueryBuilder",
  "QueryStats",
  "QuestionAnswer",
  "QuestionMark",
  "Queue",
  "QueueMusic",
  "QueuePlayNext",
  "QuickContactsDialer",
  "QuickContactsMail",
  "Quickreply",
  "Quiz",
  "Quora",
  "RMobiledata",
  "Radar",
  "Radio",
  "RadioButtonChecked",
  "RadioButtonOff",
  "RadioButtonOn",
  "RadioButtonUnchecked",
  "RailwayAlert",
  "RamenDining",
  "RampLeft",
  "RampRight",
  "RateReview",
  "RawOff",
  "RawOn",
  "ReadMore",
  "RealEstateAgent",
  "Receipt",
  "ReceiptLong",
  "RecentActors",
  "Recommend",
  "RecordVoiceOver",
  "Rectangle",
  "Recycling",
  "Reddit",
  "Redeem",
  "Redo",
  "ReduceCapacity",
  "Refresh",
  "RememberMe",
  "Remove",
  "RemoveCircle",
  "RemoveCircleOutline",
  "RemoveDone",
  "RemoveFromQueue",
  "RemoveModerator",
  "RemoveRedEye",
  "RemoveRoad",
  "RemoveShoppingCart",
  "Reorder",
  "Repartition",
  "Repeat",
  "RepeatOn",
  "RepeatOne",
  "RepeatOneOn",
  "Replay",
  "Replay10",
  "Replay30",
  "Replay5",
  "ReplayCircleFilled",
  "Reply",
  "ReplyAll",
  "Report",
  "ReportGmailerrorred",
  "ReportOff",
  "ReportProblem",
  "RequestPage",
  "RequestQuote",
  "ResetTv",
  "RestartAlt",
  "Restaurant",
  "RestaurantMenu",
  "Restore",
  "RestoreFromTrash",
  "RestorePage",
  "Reviews",
  "RiceBowl",
  "RingVolume",
  "Rocket",
  "RocketLaunch",
  "RollerShades",
  "RollerShadesClosed",
  "RollerSkating",
  "Roofing",
  "Room",
  "RoomPreferences",
  "RoomService",
  "Rotate90DegreesCcw",
  "Rotate90DegreesCw",
  "RotateLeft",
  "RotateRight",
  "RoundaboutLeft",
  "RoundaboutRight",
  "RoundedCorner",
  "Route",
  "Router",
  "Rowing",
  "RssFeed",
  "Rsvp",
  "Rtt",
  "Rule",
  "RuleFolder",
  "RunCircle",
  "RunningWithErrors",
  "RvHookup",
  "SafetyCheck",
  "SafetyDivider",
  "Sailing",
  "Sanitizer",
  "Satellite",
  "SatelliteAlt",
  "Save",
  "SaveAlt",
  "SaveAs",
  "SavedSearch",
  "Savings",
  "Scale",
  "Scanner",
  "ScatterPlot",
  "Schedule",
  "ScheduleSend",
  "Schema",
  "School",
  "Science",
  "Score",
  "Scoreboard",
  "ScreenLockLandscape",
  "ScreenLockPortrait",
  "ScreenLockRotation",
  "ScreenRotation",
  "ScreenRotationAlt",
  "ScreenSearchDesktop",
  "ScreenShare",
  "Screenshot",
  "ScreenshotMonitor",
  "ScubaDiving",
  "Sd",
  "SdCard",
  "SdCardAlert",
  "SdStorage",
  "Search",
  "SearchOff",
  "Security",
  "SecurityUpdate",
  "SecurityUpdateGood",
  "SecurityUpdateWarning",
  "Segment",
  "SelectAll",
  "SelfImprovement",
  "Sell",
  "Send",
  "SendAndArchive",
  "SendTimeExtension",
  "SendToMobile",
  "SensorDoor",
  "SensorOccupied",
  "SensorWindow",
  "Sensors",
  "SensorsOff",
  "SentimentDissatisfied",
  "SentimentNeutral",
  "SentimentSatisfied",
  "SentimentSatisfiedAlt",
  "SentimentVeryDissatisfied",
  "SentimentVerySatisfied",
  "SetMeal",
  "Settings",
  "SettingsAccessibility",
  "SettingsApplications",
  "SettingsBackupRestore",
  "SettingsBluetooth",
  "SettingsBrightness",
  "SettingsCell",
  "SettingsDisplay",
  "SettingsEthernet",
  "SettingsInputAntenna",
  "SettingsInputComponent",
  "SettingsInputComposite",
  "SettingsInputHdmi",
  "SettingsInputSvideo",
  "SettingsOverscan",
  "SettingsPhone",
  "SettingsPower",
  "SettingsRemote",
  "SettingsSuggest",
  "SettingsSystemDaydream",
  "SettingsVoice",
  "SevereCold",
  "ShapeLine",
  "Share",
  "ShareArrivalTime",
  "ShareLocation",
  "Shield",
  "ShieldMoon",
  "Shop",
  "Shop2",
  "ShopTwo",
  "Shopify",
  "ShoppingBag",
  "ShoppingBasket",
  "ShoppingCart",
  "ShoppingCartCheckout",
  "ShortText",
  "Shortcut",
  "ShowChart",
  "Shower",
  "Shuffle",
  "ShuffleOn",
  "ShutterSpeed",
  "Sick",
  "SignLanguage",
  "SignalCellular0Bar",
  "SignalCellular4Bar",
  "SignalCellularAlt",
  "SignalCellularAlt1Bar",
  "SignalCellularAlt2Bar",
  "SignalCellularConnectedNoInternet0Bar",
  "SignalCellularConnectedNoInternet4Bar",
  "SignalCellularNoSim",
  "SignalCellularNodata",
  "SignalCellularNull",
  "SignalCellularOff",
  "SignalWifi0Bar",
  "SignalWifi4Bar",
  "SignalWifi4BarLock",
  "SignalWifiBad",
  "SignalWifiConnectedNoInternet4",
  "SignalWifiOff",
  "SignalWifiStatusbar4Bar",
  "SignalWifiStatusbarConnectedNoInternet4",
  "SignalWifiStatusbarNull",
  "Signpost",
  "SimCard",
  "SimCardAlert",
  "SimCardDownload",
  "SingleBed",
  "Sip",
  "Skateboarding",
  "SkipNext",
  "SkipPrevious",
  "Sledding",
  "Slideshow",
  "SlowMotionVideo",
  "SmartButton",
  "SmartDisplay",
  "SmartScreen",
  "SmartToy",
  "Smartphone",
  "SmokeFree",
  "SmokingRooms",
  "Sms",
  "SmsFailed",
  "Snapchat",
  "SnippetFolder",
  "Snooze",
  "Snowboarding",
  "Snowmobile",
  "Snowshoeing",
  "Soap",
  "SocialDistance",
  "SolarPower",
  "Sort",
  "SortByAlpha",
  "Sos",
  "SoupKitchen",
  "Source",
  "South",
  "SouthAmerica",
  "SouthEast",
  "SouthWest",
  "Spa",
  "SpaceBar",
  "SpaceDashboard",
  "SpatialAudio",
  "SpatialAudioOff",
  "SpatialTracking",
  "Speaker",
  "SpeakerGroup",
  "SpeakerNotes",
  "SpeakerNotesOff",
  "SpeakerPhone",
  "Speed",
  "Spellcheck",
  "Splitscreen",
  "Spoke",
  "Sports",
  "SportsBar",
  "SportsBaseball",
  "SportsBasketball",
  "SportsCricket",
  "SportsEsports",
  "SportsFootball",
  "SportsGolf",
  "SportsGymnastics",
  "SportsHandball",
  "SportsHockey",
  "SportsKabaddi",
  "SportsMartialArts",
  "SportsMma",
  "SportsMotorsports",
  "SportsRugby",
  "SportsScore",
  "SportsSoccer",
  "SportsTennis",
  "SportsVolleyball",
  "Square",
  "SquareFoot",
  "SsidChart",
  "StackedBarChart",
  "StackedLineChart",
  "Stadium",
  "Stairs",
  "Star",
  "StarBorder",
  "StarBorderPurple500",
  "StarHalf",
  "StarOutline",
  "StarPurple500",
  "StarRate",
  "Stars",
  "Start",
  "StayCurrentLandscape",
  "StayCurrentPortrait",
  "StayPrimaryLandscape",
  "StayPrimaryPortrait",
  "StickyNote2",
  "Stop",
  "StopCircle",
  "StopScreenShare",
  "Storage",
  "Store",
  "StoreMallDirectory",
  "Storefront",
  "Storm",
  "Straight",
  "Straighten",
  "Stream",
  "Streetview",
  "StrikethroughS",
  "Stroller",
  "Style",
  "SubdirectoryArrowLeft",
  "SubdirectoryArrowRight",
  "Subject",
  "Subscript",
  "Subscriptions",
  "Subtitles",
  "SubtitlesOff",
  "Subway",
  "Summarize",
  "Superscript",
  "SupervisedUserCircle",
  "SupervisorAccount",
  "Support",
  "SupportAgent",
  "Surfing",
  "SurroundSound",
  "SwapCalls",
  "SwapHoriz",
  "SwapHorizontalCircle",
  "SwapVert",
  "SwapVertCircle",
  "SwapVerticalCircle",
  "Swipe",
  "SwipeDown",
  "SwipeDownAlt",
  "SwipeLeft",
  "SwipeLeftAlt",
  "SwipeRight",
  "SwipeRightAlt",
  "SwipeUp",
  "SwipeUpAlt",
  "SwipeVertical",
  "SwitchAccessShortcut",
  "SwitchAccessShortcutAdd",
  "SwitchAccount",
  "SwitchCamera",
  "SwitchLeft",
  "SwitchRight",
  "SwitchVideo",
  "Synagogue",
  "Sync",
  "SyncAlt",
  "SyncDisabled",
  "SyncLock",
  "SyncProblem",
  "SystemSecurityUpdate",
  "SystemSecurityUpdateGood",
  "SystemSecurityUpdateWarning",
  "SystemUpdate",
  "SystemUpdateAlt",
  "SystemUpdateTv",
  "Tab",
  "TabUnselected",
  "TableBar",
  "TableChart",
  "TableRestaurant",
  "TableRows",
  "TableView",
  "Tablet",
  "TabletAndroid",
  "TabletMac",
  "Tag",
  "TagFaces",
  "TakeoutDining",
  "TapAndPlay",
  "Tapas",
  "Task",
  "TaskAlt",
  "TaxiAlert",
  "Telegram",
  "TempleBuddhist",
  "TempleHindu",
  "Terminal",
  "Terrain",
  "TextDecrease",
  "TextFields",
  "TextFormat",
  "TextIncrease",
  "TextRotateUp",
  "TextRotateVertical",
  "TextRotationAngledown",
  "TextRotationAngleup",
  "TextRotationDown",
  "TextRotationNone",
  "TextSnippet",
  "Textsms",
  "Texture",
  "TheaterComedy",
  "Theaters",
  "Thermostat",
  "ThermostatAuto",
  "ThumbDown",
  "ThumbDownAlt",
  "ThumbDownOffAlt",
  "ThumbUp",
  "ThumbUpAlt",
  "ThumbUpOffAlt",
  "ThumbsUpDown",
  "Thunderstorm",
  "Tiktok",
  "TimeToLeave",
  "Timelapse",
  "Timeline",
  "Timer",
  "Timer10",
  "Timer10Select",
  "Timer3",
  "Timer3Select",
  "TimerOff",
  "TipsAndUpdates",
  "TireRepair",
  "Title",
  "Toc",
  "Today",
  "ToggleOff",
  "ToggleOn",
  "Token",
  "Toll",
  "Tonality",
  "Topic",
  "Tornado",
  "TouchApp",
  "Tour",
  "Toys",
  "TrackChanges",
  "Traffic",
  "Train",
  "Tram",
  "Transcribe",
  "TransferWithinAStation",
  "Transform",
  "Transgender",
  "TransitEnterexit",
  "Translate",
  "TravelExplore",
  "TrendingDown",
  "TrendingFlat",
  "TrendingNeutral",
  "TrendingUp",
  "TripOrigin",
  "Troubleshoot",
  "Try",
  "Tsunami",
  "Tty",
  "Tune",
  "Tungsten",
  "TurnLeft",
  "TurnRight",
  "TurnSharpLeft",
  "TurnSharpRight",
  "TurnSlightLeft",
  "TurnSlightRight",
  "TurnedIn",
  "TurnedInNot",
  "Tv",
  "TvOff",
  "TwoWheeler",
  "TypeSpecimen",
  "UTurnLeft",
  "UTurnRight",
  "Umbrella",
  "Unarchive",
  "Undo",
  "UnfoldLess",
  "UnfoldLessDouble",
  "UnfoldMore",
  "UnfoldMoreDouble",
  "Unpublished",
  "Unsubscribe",
  "Upcoming",
  "Update",
  "UpdateDisabled",
  "Upgrade",
  "Upload",
  "UploadFile",
  "Usb",
  "UsbOff",
  "Vaccines",
  "VapeFree",
  "VapingRooms",
  "Verified",
  "VerifiedUser",
  "VerticalAlignBottom",
  "VerticalAlignCenter",
  "VerticalAlignTop",
  "VerticalDistribute",
  "VerticalShades",
  "VerticalShadesClosed",
  "VerticalSplit",
  "Vibration",
  "VideoCall",
  "VideoCameraBack",
  "VideoCameraFront",
  "VideoChat",
  "VideoCollection",
  "VideoFile",
  "VideoLabel",
  "VideoLibrary",
  "VideoSettings",
  "VideoStable",
  "Videocam",
  "VideocamOff",
  "VideogameAsset",
  "VideogameAssetOff",
  "ViewAgenda",
  "ViewArray",
  "ViewCarousel",
  "ViewColumn",
  "ViewComfortable",
  "ViewComfy",
  "ViewComfyAlt",
  "ViewCompact",
  "ViewCompactAlt",
  "ViewCozy",
  "ViewDay",
  "ViewHeadline",
  "ViewInAr",
  "ViewKanban",
  "ViewList",
  "ViewModule",
  "ViewQuilt",
  "ViewSidebar",
  "ViewStream",
  "ViewTimeline",
  "ViewWeek",
  "Vignette",
  "Villa",
  "Visibility",
  "VisibilityOff",
  "VoiceChat",
  "VoiceOverOff",
  "Voicemail",
  "Volcano",
  "VolumeDown",
  "VolumeMute",
  "VolumeOff",
  "VolumeUp",
  "VolunteerActivism",
  "VpnKey",
  "VpnKeyOff",
  "VpnLock",
  "Vrpano",
  "Wallet",
  "WalletGiftcard",
  "WalletMembership",
  "WalletTravel",
  "Wallpaper",
  "Warehouse",
  "Warning",
  "WarningAmber",
  "Wash",
  "Watch",
  "WatchLater",
  "WatchOff",
  "Water",
  "WaterDamage",
  "WaterDrop",
  "WaterfallChart",
  "Waves",
  "WavingHand",
  "WbAuto",
  "WbCloudy",
  "WbIncandescent",
  "WbIridescent",
  "WbShade",
  "WbSunny",
  "WbTwilight",
  "Wc",
  "Web",
  "WebAsset",
  "WebAssetOff",
  "WebStories",
  "Webhook",
  "Wechat",
  "Weekend",
  "West",
  "Whatshot",
  "WheelchairPickup",
  "WhereToVote",
  "Widgets",
  "WidthFull",
  "WidthNormal",
  "WidthWide",
  "Wifi",
  "Wifi1Bar",
  "Wifi2Bar",
  "WifiCalling",
  "WifiCalling3",
  "WifiChannel",
  "WifiFind",
  "WifiLock",
  "WifiOff",
  "WifiPassword",
  "WifiProtectedSetup",
  "WifiTethering",
  "WifiTetheringError",
  "WifiTetheringErrorRounded",
  "WifiTetheringOff",
  "WindPower",
  "Window",
  "WineBar",
  "Woman",
  "Woman2",
  "WooCommerce",
  "Wordpress",
  "Work",
  "WorkHistory",
  "WorkOff",
  "WorkOutline",
  "WorkspacePremium",
  "Workspaces",
  "WrapText",
  "WrongLocation",
  "Wysiwyg",
  "Yard",
  "YoutubeSearchedFor",
  "ZoomIn",
  "ZoomInMap",
  "ZoomOut",
  "ZoomOutMap"
];

// trabecula/components/buttons/icon-picker.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
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
    const [page, setPage] = (0, import_react4.useState)(1);
    const [searchStyle, setSearchStyle] = (0, import_react4.useState)("Filled");
    const [searchVal, setSearchVal] = (0, import_react4.useState)("");
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
    (0, import_react4.useEffect)(() => {
      if (page > pageCount) setPage(1);
    }, [pageCount, page]);
    const handleNoIcon = () => setValue(null);
    const handleSearchStyleChange = (event) => setSearchStyle(event.target.value);
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(View, { row: true, spacing: "0.5rem", align: "center", padding: { left: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { name: value })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Input, { header: "Search", value: searchVal, setValue: setSearchVal }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Button,
        {
          text: "No Icon",
          icon: "Close",
          onClick: handleNoIcon,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(View, { row: true, position: "relative", spacing: "0.5rem", children: [
        !withStylePicker ? null : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Card, { column: true, header: "Style", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_material5.RadioGroup, { value: searchStyle, onChange: handleSearchStyleChange, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.FormControlLabel, { label: "Filled", value: "Filled", control: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.FormControlLabel, { label: "Outlined", value: "Outlined", control: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.FormControlLabel, { label: "Rounded", value: "Rounded", control: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.FormControlLabel, { label: "Two Tone", value: "TwoTone", control: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.FormControlLabel, { label: "Sharp", value: "Sharp", control: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Radio, {}) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(View, { column: true, width: "16rem", height: "19rem", children: chunkArray(pageIcons, 5).map((swatch, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(View, { row: true, children: swatch.map((icon) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_react5 = require("react");
var import_material6 = require("@mui/material");
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  const { css } = useClasses5({ bgColor, menuWidth });
  const [anchorEl, setAnchorEl] = (0, import_react5.useState)(null);
  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    button ? button(handleOpen) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconButton, __spreadValues({ name: icon, onClick: handleOpen, iconProps: { color } }, props)),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_material6.Menu,
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
var import_jsx_runtime8 = require("react/jsx-runtime");
var MultiActionButton = (_a) => {
  var _b = _a, { tooltipProps = {} } = _b, props = __objRest(_b, ["tooltipProps"]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(IconButton, __spreadProps(__spreadValues({}, props), { size: "medium", tooltipProps: __spreadValues({ placement: "bottom" }, tooltipProps) }));
};

// trabecula/components/buttons/sort-menu.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_react6 = require("react");
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
  const { css, cx } = useClasses6({ hasHeader, width });
  const activeRow = rows.find(({ attribute }) => attribute === (value == null ? void 0 : value.key));
  const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Button,
    __spreadProps(__spreadValues({}, buttonProps), {
      onClick: onOpen,
      color,
      justify: "space-between",
      padding: { left: "0.5em", right: "0.5em" },
      className: cx(css.button, buttonProps == null ? void 0 : buttonProps.className),
      icon: "Sort",
      iconRight: (value == null ? void 0 : value.isDesc) ? "ArrowDownward" : "ArrowUpward",
      iconProps: { size: "1.15em" },
      text: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(View, { column: true, align: "flex-start", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Text, { className: css.topText, children: "Sort By" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Text, { className: css.label, children: activeRow == null ? void 0 : activeRow.label })
      ] })
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MenuButton, { button: renderButton, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(View, { column: true, children: rows.map((rowProps) => /* @__PURE__ */ (0, import_react6.createElement)(SortRow, __spreadProps(__spreadValues(__spreadValues({}, rowProps), { setValue, value }), { key: rowProps.attribute }))) }) });
};
var useClasses6 = makeClasses((props) => ({
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
var import_jsx_runtime10 = require("react/jsx-runtime");
var SortRow = ({
  attribute,
  label,
  icon,
  iconProps = {},
  setValue,
  value
}) => {
  const { css } = useClasses7(null);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(View, { className: css.row, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, __spreadValues({ name: icon }, iconProps)),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { className: css.label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SortButton, __spreadProps(__spreadValues({}, { attribute, setValue, value }), { isDesc: true })),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SortButton, __spreadValues({}, { attribute, setValue, value }))
  ] });
};
var SortButton = ({ attribute, isDesc = false, setValue, value }) => {
  const isActive = attribute === (value == null ? void 0 : value.key) && isDesc === (value == null ? void 0 : value.isDesc);
  const color = isActive ? colors.custom.blue : colors.custom.lightGrey;
  const updateSort = () => setValue({ key: attribute, isDesc });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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

// trabecula/components/inputs/date-input.tsx
var import_react7 = require("react");
var import_AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var import_DatePicker = require("@mui/x-date-pickers/DatePicker");
var import_LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  const { css } = useClasses8({ width });
  const [dateValue, setDateValue] = (0, import_react7.useState)((value == null ? void 0 : value.length) ? (0, import_dayjs.default)(value) : null);
  (0, import_react7.useEffect)(() => {
    setDateValue((value == null ? void 0 : value.length) ? (0, import_dayjs.default)(value) : null);
  }, [value]);
  const handleChange = (val) => setValue == null ? void 0 : setValue(val == null ? void 0 : val.format("YYYY-MM-DD"));
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(HeaderWrapper, { header, headerProps, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_LocalizationProvider.LocalizationProvider, { dateAdapter: import_AdapterDayjs.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_DatePicker.DatePicker,
    __spreadProps(__spreadValues({}, datePickerProps), {
      value: dateValue,
      onChange: handleChange,
      slots: {
        textField: (props) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var useClasses8 = makeClasses((props) => ({
  datePicker: {
    width: props.width,
    "& .MuiInputBase-input": {
      padding: "0.5rem 0 0.5rem 0.5rem"
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem"
    },
    "& input": {
      fontFamily: "Avenir",
      fontSize: "0.9em"
    }
  }
}));

// trabecula/components/inputs/date-range.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var DateRange = ({
  dateInputProps = {},
  endDate,
  header,
  headerProps,
  setEndDate,
  setStartDate,
  startDate
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    RangeWrapper,
    {
      header,
      headerProps,
      startInput: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        DateInput,
        __spreadProps(__spreadValues({}, dateInputProps), {
          value: startDate,
          setValue: setStartDate,
          inputProps: { borderRadiuses: { top: 0, right: 0 } }
        })
      ),
      endInput: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var import_material7 = require("@mui/material");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Dropdown = (_a) => {
  var _b = _a, { options, value } = _b, props = __objRest(_b, ["options", "value"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, __spreadProps(__spreadValues({}, props), { value, select: true, children: options.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material7.MenuItem, { value: o.value, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Text, { fontSize: "0.9em", children: o.label }) }, i)) }));
};

// trabecula/components/inputs/filter-menu.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
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
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color: store.hasChanges ? colors.custom.purple : color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(View, { row: true, spacing: "0.5rem", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Icon, { name: "FilterAlt", size: "1.15em" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { children: "Filter Results" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            Chip,
            {
              label: store.numOfFilters,
              bgColor: store.numOfFilters > 0 ? colors.custom.blue : colors.foregroundCard,
              height: "1.2rem",
              width: "2rem",
              size: "small"
            }
          )
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(UniformList, { row: true, spacing: "0.5rem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Button,
          {
            text: "Search",
            icon: "Search",
            onClick: handleSearch,
            disabled: store.isLoading,
            color: store.hasChanges ? colors.custom.purple : colors.custom.blue
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_material8 = require("@mui/material");
var import_color3 = __toESM(require("color"));
var import_jsx_runtime15 = require("react/jsx-runtime");
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
    const { css, cx } = useClasses9({
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      HeaderWrapper,
      __spreadProps(__spreadValues({}, { flex, header, headerProps, width }), {
        overflow: "initial",
        "aria-label": "input-wrapper",
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          import_material8.TextField,
          __spreadProps(__spreadValues(__spreadValues({}, props), { onClick, ref, value, variant }), {
            onChange: handleChange,
            onKeyDown: handleKeyDown,
            helperText: helperText ? typeof helperText === "string" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Text, { children: helperText }) : helperText : void 0,
            FormHelperTextProps: { component: "div" },
            inputProps: __spreadProps(__spreadValues({}, inputProps), { maxLength, value: value != null ? value : "" }),
            InputProps: __spreadValues({
              endAdornment: adornmentPosition === "end" && adornment ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_material8.InputAdornment, { position: "end", children: typeof adornment === "string" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Text, { fontSize: "0.9em", color: colors.custom.grey, children: adornment }) : adornment }) : null,
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
var useClasses9 = makeClasses((props) => {
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
        fontFamily: "Avenir",
        borderRadius: "inherit",
        padding: props.dense ? "0.25rem 0.5rem" : void 0,
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
          borderColor: props.color ? (0, import_color3.default)(props.color).lighten(0.3).toString() : void 0
        },
        "&.Mui-focused fieldset": {
          borderColor: props.color
        }
      },
      "& .MuiSelect-select": {
        padding: props.dense ? "0.25rem 0.5rem" : void 0,
        fontFamily: "Avenir",
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
var import_jsx_runtime16 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(HeaderWrapper, __spreadProps(__spreadValues(__spreadValues({ row: true, overflow: "hidden" }, { header, headerProps }), props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_react9 = require("react");

// trabecula/components/inputs/multi-input-list.tsx
var import_react8 = require("react");
var import_react_virtualized_auto_sizer = __toESM(require("react-virtualized-auto-sizer"));
var import_react_window = require("react-window");

// trabecula/components/inputs/multi-input-row.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var MULTI_INPUT_ROW_HEIGHT = 35;
var MultiInputRow = (_a) => {
  var _b = _a, { bgColor } = _b, props = __objRest(_b, ["bgColor"]);
  var _a2, _b2;
  bgColor = bgColor || colors.foreground;
  const hasClick = !!props.onClick;
  const { css } = useClasses10({ bgColor, hasClick });
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(View, { row: true, className: css.root, style: props.style, children: [
    props.leftNode,
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      View,
      {
        onClick: hasClick ? handleClick : null,
        row: true,
        flex: 1,
        overflow: "hidden",
        padding: { all: "0 0.3rem" },
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
    props.hasDelete && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var useClasses10 = makeClasses((props) => ({
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
var import_jsx_runtime18 = require("react/jsx-runtime");
var MultiInputList = (0, import_react8.forwardRef)(
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
    const { css } = useClasses11({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(View, { column: true, height: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
          children: !search.value.length ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CenteredText, { text: "No items", color: colors.custom.grey }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(View, { flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_virtualized_auto_sizer.default, { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            import_react_window.FixedSizeList,
            {
              ref,
              height,
              width: "100%",
              layout: "vertical",
              itemSize: MULTI_INPUT_ROW_HEIGHT,
              itemCount: search.value.length,
              children: ({ index, style }) => renderRow ? renderRow(index, style) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
      hasDeleteAll && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var useClasses11 = makeClasses((props) => ({
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
var import_jsx_runtime19 = require("react/jsx-runtime");
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
    const [inputValue, setInputValue] = (0, import_react9.useState)("");
    const onKeyDown = (e) => {
      if (e.key === "Enter" && !isMax) {
        e.preventDefault();
        if (!value.includes(inputValue)) onChange([...value, inputValue]);
        setInputValue("");
      }
    };
    const renderList = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MultiInputList, __spreadProps(__spreadValues({}, { hasDelete, hasDeleteAll }), { search: { onChange, value }, hasInput: true }));
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(HeaderWrapper, __spreadProps(__spreadValues({}, { header, headerProps }), { children: renderList() })) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_react10 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
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
    const [error, setError] = (0, import_react10.useState)(null);
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
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    RangeWrapper,
    {
      header,
      headerProps,
      startInput: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        NumInput,
        __spreadProps(__spreadValues(__spreadValues({}, numInputProps), { hasHelper }), {
          value: min,
          setValue: setMin,
          placeholder: "Min",
          textAlign: "center",
          borderRadiuses: { top: 0, right: 0 }
        })
      ),
      endInput: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_jsx_runtime22 = require("react/jsx-runtime");
var RangeWrapper = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [
    props.startInput,
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "\u2014" })
      }
    ),
    props.endInput
  ] });
};

// trabecula/components/list/detail-rows.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var DetailRows = ({ labelWidth = "8rem", rows }) => {
  const { css } = useClasses12({ labelWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(View, { className: css.table, children: rows.map(({ label, value }, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(View, { className: css.row, children: [
    typeof label === "string" ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Text, { className: css.label, children: label }) : label,
    typeof value === "string" ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Text, { noWrap: true, tooltip: value, children: value }) : value
  ] }, `${i}-${label}`)) });
};
var useClasses12 = makeClasses((props) => ({
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
var import_material9 = require("@mui/material");
var import_color4 = __toESM(require("color"));
var import_jsx_runtime24 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses13({ color });
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    TooltipWrapper,
    {
      tooltip: children,
      tooltipProps: {
        arrow: false,
        bgColor: (0, import_color4.default)(colors.custom.black).fade(0.03).hex(),
        classes: { tooltip: css.tooltip },
        placement: "right-start",
        PopperProps: { className: css.tooltipPopper }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
        import_material9.ListItem,
        __spreadProps(__spreadValues({
          button: Boolean(onClick),
          onClick,
          className: cx(css.root, props.className)
        }, props), {
          children: [
            icon && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material9.ListItemIcon, { className: css.icon, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Icon, __spreadProps(__spreadValues({}, iconProps), { name: icon, margins: iconMargins })) }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material9.ListItemText, { className: css.text, children: text }),
            iconEnd && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material9.ListItemIcon, { className: css.icon, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Icon, { name: iconEnd, margins: iconEndMargins }) })
          ]
        })
      )
    }
  );
};
var useClasses13 = makeClasses((props) => ({
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
var import_material10 = require("@mui/material");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Icon = (_a) => {
  var _b = _a, {
    className,
    color,
    margins,
    name,
    rotation,
    size,
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
  const { css, cx } = useClasses14({ rotation });
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(View, __spreadProps(__spreadValues({ column: true, className: cx(css.root, className), margins }, viewProps), { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material10.Icon, __spreadProps(__spreadValues({}, props), { style: { color, fontSize: size }, children: Fmt.pascalToSnake(name) })) }));
};
var useClasses14 = makeClasses((props) => ({
  root: {
    justifyContent: "center",
    transform: props.rotation !== void 0 ? `rotate(${props.rotation}deg)` : void 0,
    transition: "all 200ms ease-in-out"
  }
}));

// trabecula/components/modals/confirm-modal.tsx
var import_react11 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
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
  const [isLoading, setIsLoading] = (0, import_react11.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Modal.Container, { isLoading, onClose: handleCancel, height, width, children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Text, { preset: "title", children: headerText }) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Modal.Content, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Icon, { name: "Delete", color: colors.custom.red, size: "5rem" }),
      (subText == null ? void 0 : subText.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Text, { fontSize: "1.3em", textAlign: "center", children: subText }) : null,
      children
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        Button,
        {
          text: cancelText,
          icon: cancelIcon,
          color: cancelColor,
          onClick: handleCancel,
          disabled: isLoading
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
var import_react12 = require("react");
var import_react_draggable = __toESM(require("react-draggable"));
var import_material11 = require("@mui/material");
var import_jsx_runtime27 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses15({ height, maxHeight, maxWidth, width });
  const handleClose = (_, reason) => (reason === "backdropClick" ? closeOnBackdrop : true) && (onClose == null ? void 0 : onClose());
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    import_material11.Dialog,
    __spreadProps(__spreadValues(__spreadValues({}, props), { scroll }), {
      PaperComponent: draggable ? DraggablePaper : void 0,
      open: visible,
      onClose: handleClose,
      className: cx(css.modal, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(LoadingOverlay, __spreadValues({}, { isLoading })),
        children
      ]
    })
  );
};
var DraggablePaper = (props) => {
  const { css, cx } = useDraggableClasses(null);
  const ref = (0, import_react12.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_draggable.default, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_material11.Paper, __spreadProps(__spreadValues({}, props), { ref, className: cx(props.className, css.draggable) })) });
};
var useClasses15 = makeClasses((props) => ({
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
var import_material12 = require("@mui/material");
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  const { css } = useClasses16(null);
  padding = __spreadValues({ all: `${dividers ? "0.5rem" : "0.2rem"} 1rem` }, padding);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_material12.DialogContent, __spreadProps(__spreadValues({}, { dividers }), { className: css.content, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
var useClasses16 = makeClasses({
  content: {
    display: "flex",
    padding: 0
  }
});

// trabecula/components/modals/modal/footer.tsx
var import_material13 = require("@mui/material");
var import_jsx_runtime29 = require("react/jsx-runtime");
var Footer = (_a) => {
  var _b = _a, { children, uniformWidth = "10rem" } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_material13.DialogActions, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var import_material14 = require("@mui/material");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode
}) => {
  const { css, cx } = useClasses17({ justify });
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_material14.DialogTitle, { className: cx(css.root, className), children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    ConditionalWrap,
    {
      condition: leftNode !== void 0 || rightNode !== void 0,
      wrap: (wrappedChildren) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(UniformList, { row: true, flex: 1, align: "center", children: [
        leftNode ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(View, { row: true, align: "center", justify: "flex-start", children: leftNode }) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(View, {}),
        wrappedChildren,
        rightNode ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(View, { row: true, align: "center", justify: "flex-end", children: rightNode }) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(View, {})
      ] }),
      children
    }
  ) });
};
var useClasses17 = makeClasses((props) => ({
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
var import_material15 = require("@mui/material");
var import_color5 = __toESM(require("color"));
var import_jsx_runtime31 = require("react/jsx-runtime");
var ProgressBar = Comp((props) => {
  var _a, _b, _c, _d;
  const minWidth = (props == null ? void 0 : props.minWidth) || "2em";
  const { css } = useClasses18(null);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(View, __spreadProps(__spreadValues({ row: true, flex: 1, align: "center", spacing: "1rem" }, props.viewProps), { children: [
    props.withText ? /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(View, { row: true, spacing: "0.5rem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Text, { minWidth, textAlign: "center", children: props.numerator > -1 ? (_b = (_a = props.numeratorFormatter) == null ? void 0 : _a.call(props, props.numerator)) != null ? _b : props.numerator : "--" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Text, { children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Text, { minWidth, textAlign: "center", color: colors.custom.lightGrey, children: props.denominator > -1 ? (_d = (_c = props.denominatorFormatter) == null ? void 0 : _c.call(props, props.denominator)) != null ? _d : props.denominator : "--" })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      import_material15.LinearProgress,
      {
        variant: "determinate",
        value: (props.numerator || 0) / (props.denominator || 1) * 100,
        className: css.progressBar
      }
    )
  ] }));
});
var useClasses18 = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: (0, import_color5.default)(colors.custom.blue).fade(0.5).string(),
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue
    }
  }
});

// trabecula/components/progress/circle.tsx
var import_material16 = require("@mui/material");
var import_color6 = __toESM(require("color"));
var import_jsx_runtime32 = require("react/jsx-runtime");
var ProgressCircle = Comp((props) => {
  const color = props.color || colors.custom.white;
  const { css } = useClasses19({
    bgColor: props.bgColor || (0, import_color6.default)(color).fade(0.5).hex(),
    color
  });
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(View, { column: true, position: "relative", justify: "center", align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(View, { column: true, position: "absolute", children: props.children }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      import_material16.CircularProgress,
      {
        value: props.percent || 0,
        variant: "determinate",
        size: props.size,
        className: css.circle
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(View, { column: true, position: "absolute", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      import_material16.CircularProgress,
      {
        value: 100,
        variant: "determinate",
        size: props.size,
        className: css.bgCircle
      }
    ) })
  ] });
});
var useClasses19 = makeClasses((props) => ({
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
var import_material17 = require("@mui/material");
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses20(null);
  const handleChange = (_, page) => onChange(page);
  const handleLastPageClick = (event, item) => {
    var _a2;
    if (onFullLoad) event.preventDefault(), onFullLoad();
    else (_a2 = item.onClick) == null ? void 0 : _a2.call(item, event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.root, viewProps == null ? void 0 : viewProps.className), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(View, { position: "relative", overflow: "hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(LoadingOverlay, { isLoading }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      import_material17.Pagination,
      __spreadValues({
        onChange: handleChange,
        showFirstButton: true,
        showLastButton: true,
        siblingCount: 4,
        boundaryCount: 2,
        count,
        className: cx(css.pagination, className),
        renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_material17.PaginationItem,
          __spreadProps(__spreadValues({}, item), {
            onClick: item.type === "last" ? (e) => handleLastPageClick(e, item) : item.onClick
          })
        )
      }, props)
    )
  ] }) }));
};
var useClasses20 = makeClasses({
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
var import_react13 = require("react");
var import_material18 = require("@mui/material");
var import_jsx_runtime34 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses21(null);
  const [page, setPage] = (0, import_react13.useState)(0);
  const [rowsPerPage, setRowsPerPage] = (0, import_react13.useState)(rowCountOptions[0]);
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const displayedRows = (0, import_react13.useMemo)(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, rows]
  );
  const emptyRows = rowsPerPage - displayedRows.length;
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material18.TableContainer, { component: import_material18.Paper, className, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_material18.Table, { size: "small", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material18.TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material18.TableRow, { className: css.tableHeader, children: columns.map((column, i) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material18.TableCell, { className: css.tableHeaderCell, children: column.header }, `${i}-${column.header}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_material18.TableBody, { children: [
        displayedRows.map((row, rowKey) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material18.TableRow, { className: css.tableRowAlt, children: columns.map((column, cellKey) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          TableCellTrunc,
          {
            value: column.valueFunc(row),
            wrap: column.wrap,
            className: column.className
          },
          `${rowKey}-${cellKey}`
        )) }, `displayed-${rowKey}`)),
        hasEmptyRows && emptyRows > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_material18.TableRow,
          {
            className: css.tableRowAlt,
            style: { height: MUI_TABLE_ROW_HEIGHT * emptyRows },
            children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material18.TableCell, { colSpan: columns.length })
          }
        )
      ] })
    ] }) }),
    hasPagination && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      import_material18.TablePagination,
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
  const { css, cx } = useClasses21(null);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material18.TableCell, { className: cx(css.tableCell, className), title: String(value), children: wrap ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: css.wrapped, children: value }) : value });
};
var useClasses21 = makeClasses({
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
var import_jsx_runtime35 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(View, __spreadProps(__spreadValues({ row: true, justify: "center", align: "center", flex: 1 }, viewProps), { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Text, __spreadProps(__spreadValues(__spreadValues({}, props), { color }), { children: text })) }));
};

// trabecula/components/text/date-detail.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var DateDetail = (props) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    Detail,
    __spreadProps(__spreadValues({}, props), {
      value: ((_a = props.value) == null ? void 0 : _a.length) ? (0, import_dayjs.default)(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null
    })
  );
};

// trabecula/components/text/detail.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses22({ overflowX, overflowY });
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(View, __spreadProps(__spreadValues({ column: !row, row, spacing: row ? "0.5rem" : null }, props), { children: [
    typeof label === "string" ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Text, __spreadProps(__spreadValues({ preset: "detail-label" }, labelProps), { children: label })) : label,
    !value || typeof value === "string" ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
var useClasses22 = makeClasses((props) => ({
  value: {
    overflowX: props.overflowX,
    overflowY: props.overflowY,
    whiteSpace: "nowrap"
  }
}));

// trabecula/components/text/text.tsx
var import_material19 = require("@mui/material");
var import_jsx_runtime38 = require("react/jsx-runtime");
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
    fontFamily = "Avenir",
    fontSize,
    fontWeight,
    overflow,
    preset = "default",
    tooltip,
    tooltipProps,
    whiteSpace = "nowrap"
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "color",
    "component",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "overflow",
    "preset",
    "tooltip",
    "tooltipProps",
    "whiteSpace"
  ]);
  const { css, cx } = useClasses23({ color, fontSize, fontWeight, overflow, preset, whiteSpace });
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    import_material19.Typography,
    __spreadProps(__spreadValues({}, props), {
      component,
      fontFamily,
      className: cx(css.root, className),
      children
    })
  ) }));
};
var useClasses23 = makeClasses((props) => {
  var _a, _b, _c, _d, _e;
  const preset = PRESETS[props.preset];
  return {
    root: __spreadProps(__spreadValues({}, preset), {
      paddingTop: "0.1em",
      color: (_a = props.color) != null ? _a : preset == null ? void 0 : preset.color,
      fontSize: (_b = props.fontSize) != null ? _b : preset == null ? void 0 : preset.fontSize,
      fontWeight: (_c = props.fontWeight) != null ? _c : preset == null ? void 0 : preset.fontWeight,
      lineHeight: 1.1,
      overflow: (_d = props.overflow) != null ? _d : preset == null ? void 0 : preset.overflow,
      textOverflow: "ellipsis",
      whiteSpace: (_e = props.whiteSpace) != null ? _e : preset == null ? void 0 : preset.whiteSpace
    })
  };
});

// trabecula/components/toggles/accordion.tsx
var import_react14 = require("react");
var import_material20 = require("@mui/material");
var import_jsx_runtime39 = require("react/jsx-runtime");
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
  const [isExpanded, setIsExpanded] = (0, import_react14.useState)(expanded);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setExpanded == null ? void 0 : setExpanded(!isExpanded);
  };
  const { css, cx } = useClasses24({ dense, expanded: isExpanded, fullWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    import_material20.Accordion,
    {
      expanded: isExpanded,
      disableGutters: true,
      TransitionProps: { unmountOnExit: true },
      className: cx(css.accordion, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          Button,
          {
            text: header,
            onClick: handleClick,
            endNode: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Icon, { name: "ExpandMore", rotation: expanded ? 180 : 0 }),
            color,
            width: "100%",
            className: css.button
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(View, { column: true, children })
      ]
    }
  );
};
var useClasses24 = makeClasses((props) => ({
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
var import_material21 = require("@mui/material");
var import_color7 = __toESM(require("color"));
var import_jsx_runtime40 = require("react/jsx-runtime");
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
  margins = { all: 0 },
  padding = { all: "0.3rem" },
  setChecked,
  width = "100%"
}) => {
  const { css, cx } = useClasses25({
    center,
    color: indeterminate ? indeterminateColor || color : color,
    disabled,
    flex,
    margins,
    padding,
    width
  });
  const toggleChecked = () => !disabled && setChecked(!checked);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    import_material21.FormControlLabel,
    __spreadProps(__spreadValues({}, { disabled, label }), {
      control: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        import_material21.Checkbox,
        __spreadProps(__spreadValues({}, { checked, disabled, indeterminate }), {
          onClick: toggleChecked,
          className: css.checkbox
        })
      ),
      className: cx(css.label, className)
    })
  );
};
var useClasses25 = makeClasses((props) => ({
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
      backgroundColor: (0, import_color7.default)(props.color).fade(0.8).string()
    },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4em",
      fontFamily: "Avenir"
    }
  })
}));

// trabecula/components/tooltip/tooltip.tsx
var import_material22 = require("@mui/material");
var import_color8 = __toESM(require("color"));
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  const { css } = useClasses26({
    borderColor,
    bgColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding
  });
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_material22.Tooltip,
    __spreadProps(__spreadValues(__spreadValues({}, props), { arrow, placement, title }), {
      classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip },
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
var useClasses26 = makeClasses((props) => ({
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
    backgroundColor: (0, import_color8.default)(props.bgColor).fade(0.03).string(),
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
var import_jsx_runtime42 = require("react/jsx-runtime");
var TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
  const wrap = (c) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Tooltip, __spreadProps(__spreadValues({ title: tooltip }, tooltipProps), { children: c }));
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    ConditionalWrap,
    {
      wrap,
      condition: tooltip !== void 0 && !(typeof tooltip === "string" && !(tooltip == null ? void 0 : tooltip.length)),
      children
    }
  );
};

// trabecula/components/wrappers/card.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      HeaderWrapper,
      __spreadProps(__spreadValues(__spreadValues({}, viewProps), { borderRadiuses, display, header, headerProps, height, overflow, width }), {
        children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
var import_jsx_runtime44 = require("react/jsx-runtime");
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
  const { css } = useClasses27({ hasFooter, flush, opacity, position });
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Chip, __spreadProps(__spreadValues(__spreadValues({}, props), { bgColor }), { className: css.chip }));
};
var useClasses27 = makeClasses((props) => ({
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
var import_material23 = require("@mui/material");
var import_color9 = __toESM(require("color"));
var import_jsx_runtime45 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses28({ disabled, display, height, selected, selectedColor, width });
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.container, className), children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    import_material23.Paper,
    {
      onClick: !disabled ? onClick : void 0,
      onDoubleClick: !disabled ? onDoubleClick : void 0,
      elevation: 3,
      className: css.paper,
      children
    }
  ) }));
};
var useClasses28 = makeClasses((props, theme) => {
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
      background: !props.disabled && props.selected ? `linear-gradient(to bottom right, ${(0, import_color9.default)(props.selectedColor).lighten(0.4).string()}, ${props.selectedColor} 60%)` : "transparent",
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
var import_jsx_runtime46 = require("react/jsx-runtime");
var Footer2 = ({ children }) => {
  const { css } = useClasses29(null);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(View, { className: css.footer, children });
};
var useClasses29 = makeClasses({
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
var import_jsx_runtime47 = require("react/jsx-runtime");
var FooterText = (props) => {
  var _a;
  return ((_a = props.text) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Text, { fontSize: "0.9em", width: "100%", textAlign: "center", padding: { all: "0 0.4rem 0.2rem" }, children: props.text });
};

// trabecula/components/wrappers/card-base/image.tsx
var import_react15 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime");
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
  const thumbInterval = (0, import_react15.useRef)(null);
  const [hasError, setHasError] = (0, import_react15.useState)(false);
  const [imagePos, setImagePos] = (0, import_react15.useState)(null);
  const [thumbIndex, setThumbIndex] = (0, import_react15.useState)(0);
  const { css, cx } = useClasses30({ fit, height, imagePos, rounded });
  const hasListeners = !disabled && !autoAnimate && (thumbPaths == null ? void 0 : thumbPaths.length) > 1;
  const createThumbInterval = () => {
    thumbInterval.current = setInterval(() => {
      setHasError(false);
      setThumbIndex((thumbIndex2) => thumbIndex2 + 1 === (thumbPaths == null ? void 0 : thumbPaths.length) ? 0 : thumbIndex2 + 1);
    }, 300);
  };
  (0, import_react15.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
    View,
    {
      onMouseEnter: hasListeners ? handleMouseEnter : void 0,
      onMouseLeave: hasListeners ? handleMouseLeave : void 0,
      className: cx(css.imageContainer, className),
      children: [
        hasError ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(View, { className: css.image, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Icon,
          {
            name: "ImageNotSupported",
            size: "4rem",
            color: colors.custom.grey,
            viewProps: { align: "center", height: "100%" }
          }
        ) }) : (thumbPaths == null ? void 0 : thumbPaths.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          "img",
          __spreadProps(__spreadValues({}, { draggable, loading, onDragEnd, onDragStart }), {
            src: thumbPaths[thumbIndex],
            alt: title,
            onError: handleError,
            onMouseMove: fit === "cover" ? handleMouseMove : void 0,
            onMouseLeave: fit === "cover" ? handleMouseLeave : void 0,
            className: css.image
          })
        ) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(View, { className: css.image }),
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
var import_jsx_runtime49 = require("react/jsx-runtime");
var Tooltip2 = ({ children, tooltip }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    Tooltip,
    {
      enterDelay: 700,
      enterNextDelay: 300,
      minWidth: "15rem",
      title: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(View, { column: true, padding: { all: "0.3rem" }, spacing: "0.5rem", children: tooltip }),
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(View, { column: true, width: "100%", children })
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
var import_jsx_runtime50 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.root, className), children: [
      cards.length ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        View,
        __spreadProps(__spreadValues(__spreadValues({}, cardsProps), { padding, ref }), {
          className: cx(css.cards, cardsProps == null ? void 0 : cardsProps.className),
          children: cards
        })
      ) : /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(View, { column: true, flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(CenteredText, { text: noResultsText }) }),
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
var import_material24 = require("@mui/material");
var import_jsx_runtime51 = require("react/jsx-runtime");
var Chip = (_a) => {
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
  const { css, cx } = useClasses32({
    bgColor,
    color,
    fontSize,
    fontWeight,
    height,
    padding,
    radiuses,
    width
  });
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_material24.Chip,
    __spreadProps(__spreadValues({}, props), {
      label,
      icon: icon ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
var import_jsx_runtime52 = require("react/jsx-runtime");
var ConditionalWrap = ({
  condition,
  wrap,
  children
}) => condition ? wrap(children) : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children });

// trabecula/components/wrappers/context-menu.tsx
var import_react16 = require("react");
var import_material25 = require("@mui/material");
var import_color10 = __toESM(require("color"));
var import_jsx_runtime53 = require("react/jsx-runtime");
var ContextMenu = (_a) => {
  var _b = _a, { children, disabled, id, menuItems } = _b, props = __objRest(_b, ["children", "disabled", "id", "menuItems"]);
  const { css } = useClasses33(null);
  const [mouseX, setMouseX] = (0, import_react16.useState)(null);
  const [mouseY, setMouseY] = (0, import_react16.useState)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(View, __spreadProps(__spreadValues({}, props), { id, onContextMenu: handleContext, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      import_material25.Menu,
      {
        open: mouseY !== null,
        onClose: handleClose,
        anchorReference: "anchorPosition",
        anchorPosition: mouseX !== null && mouseY !== null ? { top: mouseY, left: mouseX } : void 0,
        PopoverClasses: { paper: css.contextMenu },
        MenuListProps: { className: css.contextMenuInner },
        children: menuItems.filter(Boolean).map((item) => [
          item.divider === "top" ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Divider, {}) : null,
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Item, { item, onClose: handleClose }),
          item.divider === "bottom" ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Divider, {}) : null
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    ListItem,
    {
      text: item.label,
      icon: item.icon,
      iconProps: __spreadValues({ color }, (_a = item.iconProps) != null ? _a : {}),
      color,
      iconEnd: ((_b = item.subItems) == null ? void 0 : _b.length) ? "ChevronRight" : null,
      onClick: handleClick,
      className: css.item,
      children: ((_c = item.subItems) == null ? void 0 : _c.length) ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(View, { column: true, children: item.subItems.map((subItem) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(SubItem, __spreadValues({}, { subItem, onClose }), subItem.label)) }) : null
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ListItem, { text: subItem.label, icon: subItem.icon, onClick: handleClick });
};
var useClasses33 = makeClasses({
  contextMenu: {
    background: (0, import_color10.default)(colors.custom.black).fade(0.03).string()
  },
  contextMenuInner: {
    padding: 0
  },
  item: {
    padding: "0.35rem 1rem 0.35rem 0.7rem"
  }
});

// trabecula/components/wrappers/divider.tsx
var import_material26 = require("@mui/material");
var import_jsx_runtime54 = require("react/jsx-runtime");
var Divider = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_material26.Divider, __spreadValues({ flexItem: true }, props));
};

// trabecula/components/wrappers/header.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
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
  const wrap = (c) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(View, __spreadProps(__spreadValues({}, viewProps), { column: true, height, "aria-label": "header-wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(View, __spreadProps(__spreadValues({}, headerProps), { "aria-label": "header", children: typeof header === "string" ? /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Text, { flex: 1, fontSize: headerProps.fontSize, textAlign: "center", children: header }) : header })),
    c
  ] }));
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ConditionalWrap, { condition: !!header, wrap, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
var import_material27 = require("@mui/material");
var import_jsx_runtime56 = require("react/jsx-runtime");
var LoadingOverlay = ({ children, isLoading, sub }) => {
  const { css } = useClasses34({ isLoading });
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_material27.CircularProgress, { color: "inherit" }),
          typeof sub === "string" ? /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Text, { preset: "title", fontSize: "0.9em", children: sub }) : sub
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
var import_react17 = require("react");
var import_jsx_runtime57 = require("react/jsx-runtime");
var SideScroller = ({ children, className, innerClassName }) => {
  const ref = (0, import_react17.useRef)(null);
  const { width } = useElementResize(ref);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = (0, import_react17.useState)(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = (0, import_react17.useState)(false);
  const [scrollPos, setScrollPos] = (0, import_react17.useState)(0);
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
  (0, import_react17.useEffect)(() => {
    const node = ref.current;
    const scrollListener = debounce(setScrollPos.bind(node.scrollLeft), 50);
    node.addEventListener("scroll", scrollListener);
    return () => node.removeEventListener("scroll", scrollListener);
  }, []);
  (0, import_react17.useEffect)(() => {
    const [left, right] = getButtonVisibility();
    setIsLeftButtonVisible(left);
    setIsRightButtonVisible(right);
  }, [scrollPos]);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(View, { className: cx(css.root, className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      IconButton,
      {
        name: "ChevronLeft",
        onClick: () => handleScroll("left"),
        className: cx(css.scrollButton, "left"),
        size: "large"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(View, { ref, className: cx(css.items, innerClassName), children }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
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
var import_jsx_runtime58 = require("react/jsx-runtime");
var UniformList = (_a) => {
  var _b = _a, { children, uniformWidth } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  const { css, cx } = useClasses36({ uniformWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.uniform, props == null ? void 0 : props.className), children }));
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
var import_jsx_runtime59 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", __spreadProps(__spreadValues({}, props), { ref, className: cx(className, css.view), children }));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map