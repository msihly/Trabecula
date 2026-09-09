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
  AccordionGroup: () => AccordionGroup,
  AutoComplete: () => AutoComplete,
  Button: () => Button,
  ButtonWithInset: () => ButtonWithInset,
  Card: () => Card,
  CardBase: () => CardBase,
  CardGrid: () => CardGrid,
  CenteredText: () => CenteredText,
  Checkbox: () => Checkbox,
  Chip: () => Chip2,
  ChipInput: () => ChipInput,
  ColorPicker: () => ColorPicker,
  Comp: () => Comp,
  ConditionalWrap: () => ConditionalWrap,
  ConfirmModal: () => ConfirmModal,
  ContextMenu: () => ContextMenu,
  DEFAULT_INPUT_HEADER_PROPS: () => DEFAULT_INPUT_HEADER_PROPS,
  DENSE_INPUT_PADDING: () => DENSE_INPUT_PADDING,
  DataGrid: () => DataGrid,
  DataGridHeader: () => DataGridHeader,
  DataGridRow: () => DataGridRow,
  DateDetail: () => DateDetail,
  DateInput: () => DateInput,
  DateRange: () => DateRange,
  Detail: () => Detail,
  DetailRows: () => DetailRows,
  DisabledOverlay: () => DisabledOverlay,
  Divider: () => Divider,
  Dropdown: () => Dropdown,
  FilterMenu: () => FilterMenu,
  HeaderWrapper: () => HeaderWrapper,
  Icon: () => Icon,
  IconButton: () => IconButton,
  IconPicker: () => IconPicker,
  Input: () => Input,
  Link: () => Link,
  List: () => List,
  ListItem: () => ListItem,
  LoadingOverlay: () => LoadingOverlay,
  LogOpsInput: () => LogOpsInput,
  MULTI_INPUT_ROW_HEIGHT: () => MULTI_INPUT_ROW_HEIGHT,
  MenuButton: () => MenuButton,
  Modal: () => Modal,
  MuiProvider: () => MuiProvider,
  MultiActionButton: () => MultiActionButton,
  MultiInput: () => MultiInput,
  MultiInputList: () => MultiInputList,
  MultiInputRow: () => MultiInputRow,
  NumInput: () => NumInput,
  NumRange: () => NumRange,
  Pagination: () => Pagination,
  ProgressBar: () => ProgressBar,
  ProgressCircle: () => ProgressCircle,
  Radio: () => Radio2,
  RangeWrapper: () => RangeWrapper,
  SideScroller: () => SideScroller,
  SortMenu: () => SortMenu,
  SortRow: () => SortRow,
  TEXT_PRESETS: () => PRESETS,
  Table: () => Table,
  Text: () => Text,
  TimeInput: () => TimeInput,
  Tooltip: () => Tooltip,
  TooltipWrapper: () => TooltipWrapper,
  TruncatedText: () => TruncatedText,
  UniformList: () => UniformList,
  View: () => View,
  clampDataGridColumnWidth: () => clampDataGridColumnWidth,
  compareDataGridValues: () => compareDataGridValues,
  createAutoCompleteOptions: () => createAutoCompleteOptions,
  getDataGridCellLayout: () => getDataGridCellLayout,
  getDataGridColumnValue: () => getDataGridColumnValue,
  getDataGridValueText: () => getDataGridValueText,
  getTextTruncation: () => getTextTruncation,
  useAccordionGroup: () => useAccordionGroup,
  useAccordionGroupSection: () => useAccordionGroupSection
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
var IMAGE_EXTS_UNCOMMON = ["apng", "avif", "bmp", "jfif", "jif", "jiff", "svg", "tiff"];
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
var WEB_VIDEO_CODECS = ["h264", "hevc", "vp8", "vp9", "theora", "av1"];
var WEB_VIDEO_EXTS = ["mp4", "webm", "ogv", "wav"];
var DENSE_FORM_ROW_HEIGHT = "1.8rem";
var _CONSTANTS = {
  AUDIO: {
    CODECS: AUDIO_CODECS,
    CODECS_COMMON: AUDIO_CODECS_COMMON,
    CODECS_UNCOMMON: AUDIO_CODECS_UNCOMMON
  },
  IMAGE: {
    EXTS: IMAGE_EXTS,
    EXTS_COMMON: IMAGE_EXTS_COMMON,
    EXTS_UNCOMMON: IMAGE_EXTS_UNCOMMON
  },
  TOOLTIP: {
    ENTER_DELAY: 1e3,
    ENTER_NEXT_DELAY: 500
  },
  VIDEO: {
    CODECS: VIDEO_CODECS,
    CODECS_COMMON: VIDEO_CODECS_COMMON,
    CODECS_UNCOMMON: VIDEO_CODECS_UNCOMMON,
    EXTS: VIDEO_EXTS,
    EXTS_COMMON: VIDEO_EXTS_COMMON,
    EXTS_UNCOMMON: VIDEO_EXTS_UNCOMMON
  },
  WEB_VIDEO: {
    CODECS: WEB_VIDEO_CODECS,
    EXTS: WEB_VIDEO_EXTS
  }
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

// trabecula/components/buttons/button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_material3.Button,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, props), {
      size,
      variant
    }), isAnchor ? { component: "a", href } : {}), {
      onClick: handleClick,
      className: cx(css.root, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingOverlay, { isLoading: loading }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(View, { row: true, justify, spacing: "0.3rem", height: "100%", width: "100%", children: [
          startNode,
          icon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, __spreadValues({ name: icon, size: iconSize }, iconProps)),
          typeof text === "string" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
          iconRight && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, __spreadValues({ name: iconRight, size: iconSize }, iconProps)),
          endNode
        ] })
      ]
    })
  ) });
};
var useClasses2 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const bgColor = props.outlined ? props.outlineFill : props.isLinkDisplay ? "transparent" : props.color;
  const bgColorOnHover = props.isLinkDisplay ? "transparent" : props.outlined ? (_a = props.outlineFillOnHover) != null ? _a : (0, import_color2.default)(props.outlineFill).lighten(0.1).string() : (_b = props.colorOnHover) != null ? _b : (0, import_color2.default)(props.color).lighten(0.1).string();
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_material4.IconButton,
    __spreadProps(__spreadValues({}, props), {
      disabled,
      onClick,
      size,
      className: cx(css.root, className),
      children: [
        name && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, __spreadProps(__spreadValues({}, iconProps), { color: color != null ? color : iconProps.color, name })),
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
  const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
      text: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(View, { column: true, align: "flex-start", justify: "center", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Text, { className: css.topText, children: "Sort By" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Text, { className: css.label, children: activeRow == null ? void 0 : activeRow.label })
      ] })
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MenuButton, { button: renderButton, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(View, { column: true, children: rows.map((rowProps) => /* @__PURE__ */ (0, import_react6.createElement)(SortRow, __spreadProps(__spreadValues({}, rowProps), { setValue, value, key: rowProps.attribute }))) }) });
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
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SortButton, { attribute, setValue, value, isDesc: true }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SortButton, { attribute, setValue, value })
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

// trabecula/components/inputs/auto-complete.tsx
var import_material7 = require("@mui/material");
var import_jsx_runtime11 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_material7.Autocomplete,
      __spreadProps(__spreadValues({}, props), {
        autoComplete: true,
        autoHighlight: (_a2 = props.autoHighlight) != null ? _a2 : true,
        freeSolo,
        options: options.map((o) => o.label),
        filterOptions: (0, import_material7.createFilterOptions)({ ignoreCase: true, ignoreAccents: true }),
        inputValue: value,
        onInputChange: handleChange,
        renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_react7 = require("react");
var import_material8 = require("@mui/material");
var import_jsx_runtime12 = require("react/jsx-runtime");
var import_react8 = require("react");
var filterOptions = (0, import_material8.createFilterOptions)({ limit: 100, matchFrom: "start" });
var ChipInput = Comp(
  (_a) => {
    var _b = _a, { className, opaque = false, options = [], setValue, value = [] } = _b, props = __objRest(_b, ["className", "opaque", "options", "setValue", "value"]);
    const { css, cx } = useClasses8({ opaque });
    const [inputValue, setInputValue] = (0, import_react7.useState)("");
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      import_material8.Autocomplete,
      __spreadValues({
        options,
        value,
        getOptionLabel: (option) => option.label,
        renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Input,
          __spreadProps(__spreadValues({}, params), {
            value: inputValue,
            setValue: setInputValue,
            className: cx(css.input, className)
          })
        ),
        renderTags: (val, getTagProps) => val.map((option, index) => /* @__PURE__ */ (0, import_react8.createElement)(import_material8.Chip, __spreadProps(__spreadValues({}, getTagProps({ index })), { key: index, label: option.label }))),
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
var useClasses8 = makeClasses(({ opaque }) => ({
  input: {
    backgroundColor: opaque ? colors.mui.grey["800"] : "transparent"
  }
}));

// trabecula/components/inputs/date-input.tsx
var import_react9 = require("react");
var import_x_date_pickers = require("@mui/x-date-pickers");
var import_AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var import_DatePicker = require("@mui/x-date-pickers/DatePicker");
var import_jsx_runtime13 = require("react/jsx-runtime");
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
    const [dateValue, setDateValue] = (0, import_react9.useState)((value == null ? void 0 : value.length) ? (0, import_dayjs.default)(value) : null);
    (0, import_react9.useEffect)(() => {
      if (value == null ? void 0 : value.length) setDateValue((0, import_dayjs.default)(value));
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_x_date_pickers.LocalizationProvider, { dateAdapter: import_AdapterDayjs.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { width, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      import_DatePicker.DatePicker,
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
var DateTextField = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, __spreadValues({}, props));
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
var import_jsx_runtime14 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          DateInput,
          __spreadProps(__spreadValues({}, dateInputProps), {
            value: startDate,
            setValue: setStartDate,
            inputProps: { borderRadiuses: { top: 0, right: 0 } }
          })
        ),
        endInput: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_react10 = require("react");
var import_material10 = require("@mui/material");
var import_color4 = __toESM(require("color"));

// trabecula/components/inputs/input.tsx
var import_material9 = require("@mui/material");
var import_color3 = __toESM(require("color"));
var import_jsx_runtime15 = require("react/jsx-runtime");
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
    event.stopPropagation();
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!onEnter || event.defaultPrevented || event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    onEnter();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    HeaderWrapper,
    {
      flex,
      header: resolvedLabel,
      headerProps: resolvedLabelProps,
      margins: hasLabel ? margins : void 0,
      overflow: "initial",
      textProps: labelTextProps,
      width,
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_material9.TextField,
        __spreadProps(__spreadValues({}, props), {
          ref,
          id: (_c = props.id) != null ? _c : inputName,
          name: inputName,
          onChange: handleChange,
          onClick,
          onKeyDown: handleKeyDown,
          value,
          variant,
          helperText: !helperText ? void 0 : typeof helperText === "string" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Text, __spreadProps(__spreadValues({ color: (_d = helperTextProps.color) != null ? _d : color }, helperTextProps), { children: helperText })) : helperText,
          FormHelperTextProps: { component: "div" },
          inputProps: __spreadProps(__spreadValues({
            title: typeof value === "string" ? value : void 0
          }, inputProps), {
            maxLength,
            value: value != null ? value : ""
          }),
          InputProps: __spreadValues({
            endAdornment: adornmentPosition === "end" && adornment ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_material9.InputAdornment, { position: "end", children: typeof adornment === "string" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Text, { fontSize: "0.9em", color: adornmentColor, children: adornment }) : adornment }) : null,
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
          borderColor: props.color ? (0, import_color3.default)(props.color).lighten(0.3).toString() : void 0
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
var import_jsx_runtime16 = require("react/jsx-runtime");
var import_react11 = require("react");
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
  const { css, cx } = useClasses11({
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
  const [valueOption, setValueOption] = (0, import_react10.useState)(null);
  const committedLabel = value === "" ? "" : (_b2 = (_a2 = options.find((option) => option.value === value)) == null ? void 0 : _a2.label) != null ? _b2 : freeSolo && typeof value === "string" ? value : "";
  const [inputValue, setInputValue] = (0, import_react10.useState)(committedLabel);
  const isTypingRef = (0, import_react10.useRef)(false);
  (0, import_react10.useEffect)(() => {
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
  const renderInput = (params) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
  const renderOption = (itemProps, option) => /* @__PURE__ */ (0, import_react11.createElement)(
    import_material10.MenuItem,
    __spreadProps(__spreadValues({}, itemProps), {
      key: String(option.value),
      className: cx(itemProps.className, css.menuItem),
      title: option.label
    }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Text, __spreadProps(__spreadValues({}, optionTextProps), { children: option.label }))
  );
  const containerRef = (0, import_react10.useRef)(null);
  const { width: inputWidth } = useElementResize(containerRef);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    HeaderWrapper,
    {
      ref: containerRef,
      header: resolvedHeader,
      headerProps: deepMerge(DEFAULT_INPUT_HEADER_PROPS, (_c = labelProps != null ? labelProps : headerProps) != null ? _c : {}),
      overflow: "initial",
      textProps: labelTextProps,
      width: (_d = props.width) != null ? _d : "100%",
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        import_material10.Autocomplete,
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
          popupIcon: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon, { name: "ArrowDropDown", color: caretColor, size: caretSize }),
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
        backgroundColor: props.itemBgColor ? (0, import_color4.default)(props.itemBgColor).lighten(0.05).hex() : void 0
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
var import_react12 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
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
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Button,
      __spreadProps(__spreadValues({}, buttonProps), {
        onClick: onOpen,
        color: store.hasChanges ? colors.custom.purple : color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width,
        text: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(View, { row: true, align: "center", spacing: "0.5rem", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Icon, { name: "FilterAlt", size: "1.15em" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Text, { children: "Filter Results" })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(View, { row: true, spacing: "0.5rem", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          Button,
          {
            icon: "Refresh",
            onClick: handleReset,
            disabled: store.isLoading,
            color: colors.foregroundCard,
            colorOnHover: colors.custom.red
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          SortMenu,
          {
            rows: sortOptions,
            value: store.sortValue,
            setValue: store.setSortValue,
            color: colors.foregroundCard,
            width: "9rem"
          }
        ),
        hasSavedSearchApi && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Divider, { orientation: "vertical" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SavedSearchMenu, { store })
        ] })
      ] }),
      children
    ] })) }));
  }
);
var SavedSearchMenu = Comp(({ store }) => {
  var _a;
  const [inputValue, setInputValue] = (0, import_react12.useState)("");
  const [label, setLabel] = (0, import_react12.useState)("");
  const activeSearch = store.savedSearches.find((s) => s.id === store.selectedSavedSearchId);
  const options = store.savedSearches.map((savedSearch) => ({
    label: savedSearch.label,
    value: savedSearch.id
  }));
  (0, import_react12.useEffect)(() => {
    store.loadSavedSearches();
  }, [store]);
  (0, import_react12.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Button,
      {
        icon: "Save",
        onClick: handleEdit,
        disabled: store.isLoading,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.blue
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Button,
      {
        icon: "Delete",
        onClick: () => store.setIsDeleteModalOpen(true),
        disabled: store.isLoading || !store.selectedSavedSearchId,
        color: colors.foregroundCard,
        colorOnHover: colors.custom.red
      }
    ),
    store.isDeleteModalOpen && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      ConfirmModal,
      {
        subText: `Delete saved search "${(_a = activeSearch == null ? void 0 : activeSearch.label) != null ? _a : "Selected Search"}"?`,
        setVisible: store.setIsDeleteModalOpen,
        onConfirm: handleDelete
      }
    ),
    store.isSaveModalOpen && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var SavedSearchModal = Comp(({ label, onClose, onSave, setLabel }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Modal.Container, { onClose, width: "24rem", children: [
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Text, { preset: "title", children: "Save Search" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Modal.Content, { spacing: "0.5rem", dividers: false, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Input, { header: "Label", value: label, setValue: setLabel, autoFocus: true }) }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Modal.Footer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Button, { text: "Cancel", icon: "Close", onClick: onClose, color: colors.foregroundCard }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_jsx_runtime18 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(HeaderWrapper, __spreadProps(__spreadValues({ row: true, overflow: "hidden", header, headerProps }, props), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var import_react14 = require("react");

// trabecula/components/inputs/multi-input-list.tsx
var import_react13 = require("react");
var import_react_virtualized_auto_sizer = __toESM(require("react-virtualized-auto-sizer"));
var import_react_window = require("react-window");

// trabecula/components/inputs/multi-input-row.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var MULTI_INPUT_ROW_HEIGHT = 35;
var MultiInputRow = (_a) => {
  var _b = _a, { bgColor } = _b, props = __objRest(_b, ["bgColor"]);
  var _a2, _b2;
  bgColor = bgColor || colors.foreground;
  const hasClick = !!props.onClick;
  const { css } = useClasses12({ bgColor, hasClick });
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(View, { row: true, className: css.root, style: props.style, children: [
    props.leftNode,
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      View,
      {
        onClick: hasClick ? handleClick : null,
        row: true,
        flex: 1,
        overflow: "hidden",
        padding: { all: "0 0.3rem" },
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
    props.hasDelete && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_jsx_runtime20 = require("react/jsx-runtime");
var MultiInputList = (0, import_react13.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(View, { column: true, height: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
          children: !search.value.length ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CenteredText, { text: "No items", color: colors.custom.grey }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(View, { flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_virtualized_auto_sizer.default, { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_react_window.FixedSizeList,
            {
              ref,
              height,
              width: "100%",
              layout: "vertical",
              itemSize: MULTI_INPUT_ROW_HEIGHT,
              itemCount: search.value.length,
              children: ({ index, style }) => renderRow ? renderRow(index, style) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
      hasDeleteAll && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
var import_jsx_runtime21 = require("react/jsx-runtime");
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
    const [inputValue, setInputValue] = (0, import_react14.useState)("");
    const onKeyDown = (e) => {
      if (e.key === "Enter" && !isMax) {
        e.preventDefault();
        if (!value.includes(inputValue)) onChange([...value, inputValue]);
        setInputValue("");
      }
    };
    const renderList = () => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      MultiInputList,
      {
        hasDelete,
        hasDeleteAll,
        search: { onChange, value },
        hasInput: true
      }
    );
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(HeaderWrapper, { header, headerProps, children: renderList() }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_react15 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
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
    const [error, setError] = (0, import_react15.useState)(null);
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
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
var import_jsx_runtime23 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      RangeWrapper,
      {
        header,
        headerProps,
        startInput: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
        endInput: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_jsx_runtime24 = require("react/jsx-runtime");
var RangeWrapper = Comp((props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [
    props.startInput,
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "\u2014" })
      }
    ),
    props.endInput
  ] });
});

// trabecula/components/inputs/time-input.tsx
var import_react16 = require("react");
var import_x_date_pickers2 = require("@mui/x-date-pickers");
var import_AdapterDayjs2 = require("@mui/x-date-pickers/AdapterDayjs");
var import_TimePicker = require("@mui/x-date-pickers/TimePicker");
var import_jsx_runtime25 = require("react/jsx-runtime");
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
  const { css } = useClasses14(null);
  const [timeValue, setTimeValue] = (0, import_react16.useState)(
    (value == null ? void 0 : value.length) ? (0, import_dayjs.default)(value, TIME_FORMAT) : null
  );
  (0, import_react16.useEffect)(() => {
    if (value == null ? void 0 : value.length) setTimeValue((0, import_dayjs.default)(value, TIME_FORMAT));
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_x_date_pickers2.LocalizationProvider, { dateAdapter: import_AdapterDayjs2.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { width, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_TimePicker.TimePicker,
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
var TimeTextField = (props) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Input, __spreadValues({}, props));
var TIME_FORMAT = "HH:mm:ss";
var useClasses14 = makeClasses({
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
var import_jsx_runtime26 = require("react/jsx-runtime");
var DetailRows = ({ labelWidth = "8rem", rows }) => {
  const { css } = useClasses15({ labelWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(View, { className: css.table, children: rows.map(({ label, value }, i) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(View, { className: css.row, children: [
    typeof label === "string" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Text, { className: css.label, children: label }) : label,
    typeof value === "string" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Text, { noWrap: true, tooltip: value, children: value }) : value
  ] }, `${i}-${label}`)) });
};
var useClasses15 = makeClasses((props) => ({
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
var import_material11 = require("@mui/material");
var import_jsx_runtime27 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses16({ dividerColor, noDividers });
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_material11.List, __spreadProps(__spreadValues({ className: cx(css.list, className) }, props), { children }));
};
var useClasses16 = makeClasses(({ dividerColor, noDividers }) => ({
  list: {
    padding: 0,
    "& > *:not(:last-child)": {
      borderBottom: noDividers ? void 0 : `1px solid ${dividerColor}`
    }
  }
}));

// trabecula/components/list/list-item.tsx
var import_material12 = require("@mui/material");
var import_color5 = __toESM(require("color"));
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses17({ color });
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    TooltipWrapper,
    {
      tooltip: children,
      tooltipProps: {
        arrow: false,
        bgColor: (0, import_color5.default)(colors.custom.black).fade(0.03).hex(),
        classes: { tooltip: css.tooltip },
        placement: "right-start",
        PopperProps: { className: css.tooltipPopper }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
        import_material12.ListItem,
        __spreadProps(__spreadValues({
          button: Boolean(onClick),
          onClick,
          className: cx(css.root, props.className)
        }, props), {
          children: [
            icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_material12.ListItemIcon, { className: css.icon, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Icon, __spreadProps(__spreadValues({}, iconProps), { name: icon, margins: iconMargins })) }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_material12.ListItemText, { className: css.text, children: text }),
            iconEnd && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_material12.ListItemIcon, { className: css.icon, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Icon, { name: iconEnd, margins: iconEndMargins }) })
          ]
        })
      )
    }
  );
};
var useClasses17 = makeClasses((props) => ({
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
var import_material13 = require("@mui/material");
var import_jsx_runtime29 = require("react/jsx-runtime");
var import_react17 = require("react");
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
  const { css, cx } = useClasses18({
    hasLayers: !!(layers == null ? void 0 : layers.length),
    layerSize: size != null ? size : (_a2 = layers == null ? void 0 : layers[0]) == null ? void 0 : _a2.size,
    rotation
  });
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(View, __spreadProps(__spreadValues({ column: true, margins, className: cx(css.root, className) }, viewProps), { children: (layers == null ? void 0 : layers.length) ? layers.map((layer, i) => {
    var _a3, _b2;
    return /* @__PURE__ */ (0, import_react17.createElement)(
      import_material13.Icon,
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
  }) : name ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_material13.Icon, __spreadProps(__spreadValues({}, props), { style: __spreadProps(__spreadValues({}, style), { color, fontSize: size }), children: Fmt.pascalToSnake(name) })) : "" }));
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
var useClasses18 = makeClasses((props) => {
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
var import_react18 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
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
  const [isLoading, setIsLoading] = (0, import_react18.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Modal.Container, { isLoading, onClose: handleCancel, height, width, children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Text, { preset: "title", children: headerText }) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Modal.Content, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Icon, { name: "Delete", color: colors.custom.red, size: "5rem" }),
      (subText == null ? void 0 : subText.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Text, { fontSize: "1.3em", textAlign: "center", whiteSpace: "normal", children: subText }) : null,
      children
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        Button,
        {
          text: cancelText,
          icon: cancelIcon,
          color: cancelColor,
          onClick: handleCancel,
          disabled: isLoading
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
var import_react19 = require("react");
var import_react_draggable = __toESM(require("react-draggable"));
var import_material14 = require("@mui/material");
var import_jsx_runtime31 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses19({ height, maxHeight, maxWidth, width });
  const handleClose = (_, reason) => (reason === "backdropClick" ? closeOnBackdrop : true) && (onClose == null ? void 0 : onClose());
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    import_material14.Dialog,
    __spreadProps(__spreadValues({}, props), {
      scroll,
      PaperComponent: draggable ? DraggablePaper : void 0,
      open: visible,
      onClose: handleClose,
      className: cx(css.modal, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(LoadingOverlay, { isLoading }),
        children
      ]
    })
  );
};
var DraggablePaper = (props) => {
  const { css, cx } = useDraggableClasses(null);
  const ref = (0, import_react19.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_draggable.default, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material14.Paper, __spreadProps(__spreadValues({}, props), { ref, className: cx(props.className, css.draggable) })) });
};
var useClasses19 = makeClasses((props) => ({
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
var import_material15 = require("@mui/material");
var import_jsx_runtime32 = require("react/jsx-runtime");
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
  const { css } = useClasses20(null);
  padding = __spreadValues({ all: `${dividers ? "0.5rem" : "0.2rem"} 1rem` }, padding);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_material15.DialogContent, { dividers, className: css.content, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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
var useClasses20 = makeClasses({
  content: {
    display: "flex",
    padding: 0
  }
});

// trabecula/components/modals/modal/footer.tsx
var import_material16 = require("@mui/material");
var import_jsx_runtime33 = require("react/jsx-runtime");
var Footer = (_a) => {
  var _b = _a, { children, uniformWidth = "10rem" } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material16.DialogActions, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
var import_material17 = require("@mui/material");
var import_jsx_runtime34 = require("react/jsx-runtime");
var Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode
}) => {
  const { css, cx } = useClasses21({ justify });
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material17.DialogTitle, { className: cx(css.root, className), children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    ConditionalWrap,
    {
      condition: leftNode !== void 0 || rightNode !== void 0,
      wrap: (wrappedChildren) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(UniformList, { row: true, flex: 1, align: "center", children: [
        leftNode ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(View, { row: true, align: "center", justify: "flex-start", children: leftNode }) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(View, {}),
        wrappedChildren,
        rightNode ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(View, { row: true, align: "center", justify: "flex-end", children: rightNode }) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(View, {})
      ] }),
      children
    }
  ) });
};
var useClasses21 = makeClasses((props) => ({
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
var import_material18 = require("@mui/material");
var import_color6 = __toESM(require("color"));
var import_jsx_runtime35 = require("react/jsx-runtime");
var ProgressBar = Comp((props) => {
  var _a, _b, _c, _d;
  const minWidth = (props == null ? void 0 : props.minWidth) || "2em";
  const { css } = useClasses22(null);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(View, __spreadProps(__spreadValues({ row: true, flex: 1, align: "center", spacing: "1rem" }, props.viewProps), { children: [
    props.withText ? /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(View, { row: true, spacing: "0.5rem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Text, { minWidth, textAlign: "center", children: props.numerator > -1 ? (_b = (_a = props.numeratorFormatter) == null ? void 0 : _a.call(props, props.numerator)) != null ? _b : props.numerator : "--" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Text, { children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Text, { minWidth, textAlign: "center", color: colors.custom.lightGrey, children: props.denominator > -1 ? (_d = (_c = props.denominatorFormatter) == null ? void 0 : _c.call(props, props.denominator)) != null ? _d : props.denominator : "--" })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      import_material18.LinearProgress,
      {
        variant: "determinate",
        value: (props.numerator || 0) / (props.denominator || 1) * 100,
        className: css.progressBar
      }
    )
  ] }));
});
var useClasses22 = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: (0, import_color6.default)(colors.custom.blue).fade(0.5).string(),
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue
    }
  }
});

// trabecula/components/progress/circle.tsx
var import_material19 = require("@mui/material");
var import_color7 = __toESM(require("color"));
var import_jsx_runtime36 = require("react/jsx-runtime");
var ProgressCircle = Comp((props) => {
  const color = props.color || colors.custom.white;
  const { css } = useClasses23({
    bgColor: props.bgColor || (0, import_color7.default)(color).fade(0.5).hex(),
    color
  });
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(View, { column: true, position: "relative", justify: "center", align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(View, { column: true, position: "absolute", children: props.children }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      import_material19.CircularProgress,
      {
        value: props.percent || 0,
        variant: "determinate",
        size: props.size,
        className: css.circle
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(View, { column: true, position: "absolute", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      import_material19.CircularProgress,
      {
        value: 100,
        variant: "determinate",
        size: props.size,
        className: css.bgCircle
      }
    ) })
  ] });
});
var useClasses23 = makeClasses((props) => ({
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
var import_react20 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
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
  const [columnResize, setColumnResize] = (0, import_react20.useState)(null);
  const [columnWidths, setColumnWidths] = (0, import_react20.useState)(
    {}
  );
  const [expandedRows, setExpandedRows] = (0, import_react20.useState)(/* @__PURE__ */ new Set());
  const [page, setPage] = (0, import_react20.useState)(1);
  const [search, setSearch] = (0, import_react20.useState)("");
  const [sort, setSort] = (0, import_react20.useState)(initialSort != null ? initialSort : null);
  (0, import_react20.useEffect)(() => {
    if (isExpanded === false) setExpandedRows(/* @__PURE__ */ new Set());
  }, [isExpanded]);
  (0, import_react20.useEffect)(() => {
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
  (0, import_react20.useEffect)(() => {
    setPage(1);
  }, [data, search, sort]);
  const resizedColumns = (0, import_react20.useMemo)(
    () => columns.map((column) => {
      const width = columnWidths[column.key];
      return width === void 0 ? column : __spreadProps(__spreadValues({}, column), { width: `${width}px` });
    }),
    [columns, columnWidths]
  );
  const filteredData = (0, import_react20.useMemo)(() => {
    const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!searchTerms.length) return data;
    return data.filter((row) => {
      const rowSearchText = resizedColumns.filter((column) => column.searchable !== false).map((column) => getDataGridValueText(getDataGridColumnValue(row, column, "search"))).join(" ").toLowerCase();
      return searchTerms.every((term) => rowSearchText.includes(term));
    });
  }, [data, resizedColumns, search]);
  const sortedData = (0, import_react20.useMemo)(() => {
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
  return !data.length ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(View, { display: "flex", justify: emptyJustify, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Text, { preset: textPreset, color: emptyColor, children: emptyMessage }) }) : /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(View, { column: true, spacing, width: "100%", children: [
    !hasSearch ? null : /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(View, { row: true, justify: "flex-end", align: "center", spacing: "0.5rem", width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Text, { preset: textPreset, whiteSpace: "nowrap", children: "Search all columns:" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Input, { dense: true, value: search, setValue: setSearch, height: "1.5rem", width: "16rem" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
    !displayedData.length ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(View, { display: "flex", justify: emptyJustify, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Text, { preset: textPreset, color: emptyColor, children: emptyMessage }) }) : /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(View, { column: true, width: "100%", children: displayedData.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
    !hasPagination ? null : /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Pagination, { count: pageCount, onChange: setPage, page })
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
var import_react21 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses24(null);
  const suppressSortClickRef = (0, import_react21.useRef)(false);
  const [hoveredColumnKey, setHoveredColumnKey] = (0, import_react21.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  Text,
                  {
                    preset: (_a = column.textPreset) != null ? _a : textPreset,
                    textAlign: column.align || "left",
                    overflow: "hidden",
                    children: column.header
                  }
                ),
                !isSortable ? null : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  Icon,
                  {
                    name: isSorted && (sort == null ? void 0 : sort.direction) === "asc" ? "ArrowDropUp" : "ArrowDropDown",
                    color: colors.custom.darkGrey,
                    size: "1rem",
                    style: { opacity: isSorted ? 1 : isHovered ? 0.35 : 0 }
                  }
                ),
                !isResizable ? null : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
        expandableContent ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(View, __spreadProps(__spreadValues({ minWidth: 0, overflow: "hidden" }, getDataGridCellLayout(expandColumnWidth)), { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Text, { preset: textPreset }) })) : null
      ]
    }
  );
};
var useClasses24 = makeClasses({
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
var import_react22 = __toESM(require("react"));
var import_material20 = require("@mui/material");
var import_jsx_runtime39 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses25(null);
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
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react22.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
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
            return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
          expandableContent ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            View,
            __spreadProps(__spreadValues({
              display: "flex",
              justify: "center",
              align: "flex-start",
              height: "100%"
            }, getDataGridCellLayout(expandColumnWidth)), {
              children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Button,
                {
                  type: "link",
                  text: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Text, { preset: textPreset, color: isSelected ? selectedTextColor : void 0, children: isExpanded ? "Close" : "Open" }),
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
    expandableContent ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_material20.Collapse, { in: isExpanded, sx: { margin: 0, padding: 0 }, timeout: 300, easing: "smooth", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
var useClasses25 = makeClasses({
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
var import_react23 = require("react");
var import_material21 = require("@mui/material");
var import_jsx_runtime40 = require("react/jsx-runtime");
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
    const { css, cx } = useClasses26(null);
    const [isJumpModalOpen, setIsJumpModalOpen] = (0, import_react23.useState)(false);
    const [jumpPage, setJumpPage] = (0, import_react23.useState)(null);
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
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.root, viewProps == null ? void 0 : viewProps.className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(View, { position: "relative", overflow: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(LoadingOverlay, { isLoading }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          import_material21.Pagination,
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
              return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                import_material21.PaginationItem,
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
      isJumpModalOpen && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(Modal.Container, { onClose: () => setIsJumpModalOpen(false), width: "24rem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Text, { preset: "title", children: "Jump to Page" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Modal.Content, { row: true, dividers: false, justify: "center", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(Modal.Footer, { uniformWidth: "7rem", children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            Button,
            {
              text: "Cancel",
              icon: "Close",
              onClick: () => setIsJumpModalOpen(false),
              color: colors.foregroundCard
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
var useClasses26 = makeClasses({
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
var import_react24 = require("react");
var import_material22 = require("@mui/material");
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses27(null);
  const [page, setPage] = (0, import_react24.useState)(0);
  const [rowsPerPage, setRowsPerPage] = (0, import_react24.useState)(rowCountOptions[0]);
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const displayedRows = (0, import_react24.useMemo)(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, rows]
  );
  const emptyRows = rowsPerPage - displayedRows.length;
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_jsx_runtime41.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material22.TableContainer, { component: import_material22.Paper, className, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_material22.Table, { size: "small", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material22.TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material22.TableRow, { className: css.tableHeader, children: columns.map((column, i) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material22.TableCell, { className: css.tableHeaderCell, children: column.header }, `${i}-${column.header}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_material22.TableBody, { children: [
        displayedRows.map((row, rowKey) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material22.TableRow, { className: css.tableRowAlt, children: columns.map((column, cellKey) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          TableCellTrunc,
          {
            value: column.valueFunc(row),
            wrap: column.wrap,
            className: column.className
          },
          `${rowKey}-${cellKey}`
        )) }, `displayed-${rowKey}`)),
        hasEmptyRows && emptyRows > 0 && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          import_material22.TableRow,
          {
            className: css.tableRowAlt,
            style: { height: MUI_TABLE_ROW_HEIGHT * emptyRows },
            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material22.TableCell, { colSpan: columns.length })
          }
        )
      ] })
    ] }) }),
    hasPagination && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      import_material22.TablePagination,
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
  const { css, cx } = useClasses27(null);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material22.TableCell, { className: cx(css.tableCell, className), title: String(value), children: wrap ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: css.wrapped, children: value }) : value });
};
var useClasses27 = makeClasses({
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
var import_jsx_runtime42 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(View, __spreadProps(__spreadValues({ row: true, justify: "center", align: "center", flex: 1 }, viewProps), { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Text, __spreadProps(__spreadValues({}, props), { color, children: text })) }));
};

// trabecula/components/text/date-detail.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var DateDetail = (props) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    Detail,
    __spreadProps(__spreadValues({}, props), {
      value: ((_a = props.value) == null ? void 0 : _a.length) ? (0, import_dayjs.default)(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null
    })
  );
};

// trabecula/components/text/detail.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(View, __spreadProps(__spreadValues({ column: !row, row, spacing: row ? "0.5rem" : null }, props), { children: [
    ["number", "string"].includes(typeof label) ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Text, __spreadProps(__spreadValues({ preset: "detail-label", fontSize: "0.9em", fontWeight: 600 }, labelProps), { children: label })) : label,
    !value || ["number", "string"].includes(typeof value) ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
var import_material23 = require("@mui/material");
var import_jsx_runtime45 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses28({ bold, color });
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    import_material23.Link,
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
var useClasses28 = makeClasses(({ bold, color }) => ({
  link: {
    color,
    fontWeight: bold ? 500 : 400
  }
}));

// trabecula/components/text/text.tsx
var import_material24 = require("@mui/material");
var import_jsx_runtime46 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses29({
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(TooltipWrapper, { tooltip, tooltipProps, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_material24.Typography,
    __spreadProps(__spreadValues({}, props), {
      component,
      fontFamily,
      className: cx(css.root, className),
      children
    })
  ) });
};
Text.Inline = (props) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Text, __spreadValues({ display: "inline" }, props));
var useClasses29 = makeClasses((props) => {
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
var import_jsx_runtime47 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Text, __spreadProps(__spreadValues({}, textProps), { children: remainder }));
};

// trabecula/components/toggles/accordion.tsx
var import_react25 = require("react");
var import_material25 = require("@mui/material");
var import_jsx_runtime48 = require("react/jsx-runtime");
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
  const [internalExpanded, setInternalExpanded] = (0, import_react25.useState)(expanded != null ? expanded : false);
  const effectiveExpanded = isExpanded != null ? isExpanded : internalExpanded;
  const contentExpanded = showExpandToggle ? effectiveExpanded : true;
  const { css, cx } = useClasses30({
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
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(View, { row: true, align: "center", justify: "space-between", width: "100%", children: [
        typeof title === "string" ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Text, __spreadProps(__spreadValues({}, titleProps), { children: title })) : title,
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(View, { row: true, align: "center", spacing: "0.6rem", children: [
          headerButton,
          showExpandToggle ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      Button,
      __spreadValues({
        text: header,
        endNode: showExpandToggle ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
    import_material25.Accordion,
    __spreadProps(__spreadValues({}, props), {
      expanded: contentExpanded,
      TransitionProps: { unmountOnExit: true },
      disableGutters: true,
      className: cx(css.accordion, className),
      children: [
        hasHeaderWrapper ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(View, { className: css.header, children: renderHeader() }) : renderHeader(),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(View, { column: true, className: css.content, children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(LoadingOverlay, { isLoading }),
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
var useClasses30 = makeClasses((props) => {
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
var import_react26 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime");
var AccordionGroupContext = (0, import_react26.createContext)(null);
var AccordionGroup = ({
  children,
  defaultExpanded = true,
  sectionIds
}) => {
  const [expandedSections, setExpandedSections] = (0, import_react26.useState)(
    () => getInitialExpandedSections(sectionIds, defaultExpanded)
  );
  (0, import_react26.useEffect)(() => {
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
  const value = (0, import_react26.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(AccordionGroupContext.Provider, { value, children });
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
  const context = (0, import_react26.useContext)(AccordionGroupContext);
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
var import_material26 = require("@mui/material");
var import_color8 = __toESM(require("color"));
var import_jsx_runtime50 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses31({
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
  const labelNode = typeof label === "string" && labelProps ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Text, __spreadProps(__spreadValues({}, labelProps), { children: label })) : label;
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_material26.FormControlLabel,
    {
      disabled,
      label: labelNode,
      control: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        import_material26.Checkbox,
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
var useClasses31 = makeClasses((props) => ({
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
    "&:hover": props.noHover ? {} : { backgroundColor: (0, import_color8.default)(props.color).fade(0.8).string() },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4rem",
      fontFamily: "Roboto"
    }
  })
}));

// trabecula/components/toggles/radio.tsx
var import_material27 = require("@mui/material");
var import_color9 = __toESM(require("color"));
var import_jsx_runtime51 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses32({
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
  const renderedLabel = typeof label === "string" ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Text, { bold: boldWhenChecked && checked, fontFamily, children: label }) : label;
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_material27.FormControlLabel,
    {
      label: renderedLabel,
      disabled,
      className: cx(css.label, className),
      control: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        import_material27.Radio,
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
var useClasses32 = makeClasses((props) => ({
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
      border: `1px solid ${(0, import_color9.default)(props.color).fade(0.8).string()}`,
      backgroundColor: (0, import_color9.default)(props.color).fade(0.9).string()
    }
  }),
  radio: __spreadProps(__spreadValues({}, makePadding(props.padding)), {
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1
  })
}));

// trabecula/components/tooltip/tooltip.tsx
var import_material28 = require("@mui/material");
var import_color10 = __toESM(require("color"));
var import_jsx_runtime52 = require("react/jsx-runtime");
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
  const { css } = useClasses33({
    borderColor,
    bgColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding
  });
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    import_material28.Tooltip,
    __spreadProps(__spreadValues({}, props), {
      arrow,
      placement,
      title,
      classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip },
      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
var useClasses33 = makeClasses((props) => ({
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
    backgroundColor: (0, import_color10.default)(props.bgColor).fade(0.03).string(),
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
var import_jsx_runtime53 = require("react/jsx-runtime");
var TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
  const wrap = (c) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Tooltip, __spreadProps(__spreadValues({ title: tooltip }, tooltipProps), { children: c }));
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    ConditionalWrap,
    {
      wrap,
      condition: tooltip !== void 0 && !(typeof tooltip === "string" && !(tooltip == null ? void 0 : tooltip.length)),
      children
    }
  );
};

// trabecula/components/wrappers/card.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
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
    const { css, cx } = useClasses34({ boxShadow, elevated });
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
var useClasses34 = makeClasses((props) => {
  var _a;
  return {
    root: {
      boxShadow: (_a = props.boxShadow) != null ? _a : props.elevated ? "0.1rem 0.1rem 0.3rem rgb(0 0 0 / 50%)" : void 0
    }
  };
});

// trabecula/components/wrappers/card-base/chip.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
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
  const { css } = useClasses35({ hasFooter, flush, opacity, position });
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Chip2, __spreadProps(__spreadValues({}, props), { bgColor, className: css.chip }));
};
var useClasses35 = makeClasses((props) => ({
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
var import_material29 = require("@mui/material");
var import_color11 = __toESM(require("color"));
var import_jsx_runtime56 = require("react/jsx-runtime");
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
  const { css, cx } = useClasses36({ disabled, display, height, selected, selectedColor, width });
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.container, className), children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    import_material29.Paper,
    {
      onClick: !disabled ? onClick : void 0,
      onDoubleClick: !disabled ? onDoubleClick : void 0,
      elevation: 3,
      className: css.paper,
      children
    }
  ) }));
};
var useClasses36 = makeClasses((props, theme) => {
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
      background: !props.disabled && props.selected ? `linear-gradient(to bottom right, ${(0, import_color11.default)(props.selectedColor).lighten(0.4).string()}, ${props.selectedColor} 60%)` : "transparent",
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
var import_jsx_runtime57 = require("react/jsx-runtime");
var Footer2 = ({ children }) => {
  const { css } = useClasses37(null);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(View, { className: css.footer, children });
};
var useClasses37 = makeClasses({
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
var import_jsx_runtime58 = require("react/jsx-runtime");
var FooterText = (props) => {
  var _a;
  return ((_a = props.text) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Text, { fontSize: "0.9em", width: "100%", textAlign: "center", padding: { all: "0 0.4rem 0.2rem" }, children: props.text });
};

// trabecula/components/wrappers/card-base/image.tsx
var import_react27 = require("react");
var import_jsx_runtime59 = require("react/jsx-runtime");
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
  const thumbInterval = (0, import_react27.useRef)(null);
  const [hasError, setHasError] = (0, import_react27.useState)(false);
  const [imagePos, setImagePos] = (0, import_react27.useState)(null);
  const [thumbIndex, setThumbIndex] = (0, import_react27.useState)(0);
  const { css, cx } = useClasses38({ fit, height, imagePos, rounded });
  const hasListeners = !disabled && !autoAnimate && (thumbPaths == null ? void 0 : thumbPaths.length) > 1;
  const createThumbInterval = () => {
    thumbInterval.current = setInterval(() => {
      setHasError(false);
      setThumbIndex((thumbIndex2) => thumbIndex2 + 1 === (thumbPaths == null ? void 0 : thumbPaths.length) ? 0 : thumbIndex2 + 1);
    }, 300);
  };
  (0, import_react27.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
    View,
    {
      onMouseEnter: hasListeners ? handleMouseEnter : void 0,
      onMouseLeave: hasListeners ? handleMouseLeave : void 0,
      className: cx(css.imageContainer, className),
      children: [
        hasError ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(View, { className: css.image, children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          Icon,
          {
            name: "ImageNotSupported",
            size: "4rem",
            color: colors.custom.grey,
            viewProps: { align: "center", height: "100%" }
          }
        ) }) : (thumbPaths == null ? void 0 : thumbPaths.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
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
        ) : /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(View, { className: css.image }),
        children
      ]
    }
  );
};
var useClasses38 = makeClasses((props) => {
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
var import_jsx_runtime60 = require("react/jsx-runtime");
var Tooltip2 = ({ children, tooltip }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    Tooltip,
    {
      enterDelay: 700,
      enterNextDelay: 300,
      minWidth: "15rem",
      title: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(View, { column: true, padding: { all: "0.3rem" }, spacing: "0.5rem", children: tooltip }),
      children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(View, { column: true, width: "100%", children })
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
var import_jsx_runtime61 = require("react/jsx-runtime");
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
    const { css, cx } = useClasses39({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.root, className), children: [
      cards.length ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        View,
        __spreadProps(__spreadValues({}, cardsProps), {
          padding,
          ref,
          className: cx(css.cards, cardsProps == null ? void 0 : cardsProps.className),
          children: cards
        })
      ) : /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(View, { column: true, flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(CenteredText, { text: noResultsText }) }),
      children
    ] }));
  }
);
var useClasses39 = makeClasses((props, theme) => ({
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
var import_material30 = require("@mui/material");
var import_jsx_runtime62 = require("react/jsx-runtime");
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
    const { css, cx } = useClasses40({
      bgColor,
      color,
      fontSize,
      fontWeight,
      height,
      padding,
      radiuses,
      width
    });
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      import_material30.Chip,
      __spreadProps(__spreadValues({}, props), {
        label,
        icon: icon ? /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
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
var useClasses40 = makeClasses((props) => ({
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
var import_jsx_runtime63 = require("react/jsx-runtime");
var ConditionalWrap = ({
  condition,
  wrap,
  children
}) => condition ? wrap(children) : /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_jsx_runtime63.Fragment, { children });

// trabecula/components/wrappers/context-menu.tsx
var import_react28 = require("react");
var import_material31 = require("@mui/material");
var import_color12 = __toESM(require("color"));
var import_jsx_runtime64 = require("react/jsx-runtime");
var ContextMenu = (_a) => {
  var _b = _a, { children, disabled, id, menuItems } = _b, props = __objRest(_b, ["children", "disabled", "id", "menuItems"]);
  const { css } = useClasses41(null);
  const [mouseX, setMouseX] = (0, import_react28.useState)(null);
  const [mouseY, setMouseY] = (0, import_react28.useState)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(View, __spreadProps(__spreadValues({}, props), { id, onContextMenu: handleContext, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
      import_material31.Menu,
      {
        open: mouseY !== null,
        onClose: handleClose,
        anchorReference: "anchorPosition",
        anchorPosition: mouseX !== null && mouseY !== null ? { top: mouseY, left: mouseX } : void 0,
        PopoverClasses: { paper: css.contextMenu },
        MenuListProps: { className: css.contextMenuInner },
        children: menuItems.filter(Boolean).map((item) => [
          item.divider === "top" ? /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Divider, {}) : null,
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Item, { item, onClose: handleClose }),
          item.divider === "bottom" ? /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Divider, {}) : null
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
  const { css } = useClasses41(null);
  const color = item.color || colors.custom.lightGrey;
  const handleClick = item.onClick ? () => {
    item.onClick();
    onClose();
  } : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    ListItem,
    {
      text: item.label,
      icon: item.icon,
      iconProps: __spreadValues({ color }, (_a = item.iconProps) != null ? _a : {}),
      color,
      iconEnd: ((_b = item.subItems) == null ? void 0 : _b.length) ? "ChevronRight" : null,
      onClick: handleClick,
      className: css.item,
      children: ((_c = item.subItems) == null ? void 0 : _c.length) ? /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(View, { column: true, children: item.subItems.map((subItem) => /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(SubItem, { subItem, onClose }, subItem.label)) }) : null
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
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(ListItem, { text: subItem.label, icon: subItem.icon, onClick: handleClick });
};
var useClasses41 = makeClasses({
  contextMenu: {
    background: (0, import_color12.default)(colors.custom.black).fade(0.03).string()
  },
  contextMenuInner: {
    padding: 0
  },
  item: {
    padding: "0.35rem 1rem 0.35rem 0.7rem"
  }
});

// trabecula/components/wrappers/disabled-overlay.tsx
var import_jsx_runtime65 = require("react/jsx-runtime");
var DisabledOverlay = ({
  children,
  isDisabled = false,
  zIndex = 2
}) => {
  const { css } = useClasses42({ isDisabled, zIndex });
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_jsx_runtime65.Fragment, { children: [
    children,
    isDisabled && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(View, { className: css.disabledOverlay })
  ] });
};
var useClasses42 = makeClasses((props) => ({
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
var import_material32 = require("@mui/material");
var import_jsx_runtime66 = require("react/jsx-runtime");
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
    const { css, cx } = useClasses43({ alignSelf, borderWidth, color, height, margins, orientation });
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
      import_material32.Divider,
      __spreadProps(__spreadValues({}, props), {
        ref,
        flexItem,
        orientation,
        className: cx(css.divider, className)
      })
    );
  }
);
var useClasses43 = makeClasses((props) => ({
  divider: __spreadValues({
    alignSelf: props.alignSelf,
    borderColor: props.color,
    borderBottomWidth: props.orientation === "horizontal" ? props.borderWidth : void 0,
    borderRightWidth: props.orientation === "vertical" ? props.borderWidth : void 0,
    height: props.height
  }, makeMargins(props.margins))
}));

// trabecula/components/wrappers/header.tsx
var import_jsx_runtime67 = require("react/jsx-runtime");
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
    const wrap = (content) => /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
      View,
      __spreadProps(__spreadValues({}, viewProps), {
        ref,
        column: true,
        height,
        margins,
        width,
        "aria-label": "header-wrapper",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(View, __spreadProps(__spreadValues({}, headerProps), { "aria-label": "header", children: typeof header === "string" ? /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(Text, __spreadProps(__spreadValues({ flex: 1, fontSize: headerProps.fontSize, textAlign: "center" }, textProps), { children: header })) : header })),
          content
        ]
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(ConditionalWrap, { condition: !!header, wrap, children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
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
var import_material33 = require("@mui/material");
var import_jsx_runtime68 = require("react/jsx-runtime");
var LoadingOverlay = ({ children, isLoading, sub }) => {
  const { css } = useClasses44({ isLoading });
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(import_jsx_runtime68.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_material33.CircularProgress, { color: "inherit" }),
          typeof sub === "string" ? /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Text, { preset: "title", fontSize: "0.9em", children: sub }) : sub
        ]
      }
    )
  ] });
};
var useClasses44 = makeClasses((props) => ({
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
var import_react29 = require("react");
var import_jsx_runtime69 = require("react/jsx-runtime");
var SideScroller = ({ children, className, innerClassName }) => {
  const ref = (0, import_react29.useRef)(null);
  const { width } = useElementResize(ref);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = (0, import_react29.useState)(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = (0, import_react29.useState)(false);
  const [scrollPos, setScrollPos] = (0, import_react29.useState)(0);
  const { css, cx } = useClasses45({ isLeftButtonVisible, isRightButtonVisible });
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
  (0, import_react29.useEffect)(() => {
    const node = ref.current;
    const scrollListener = debounce(setScrollPos.bind(node.scrollLeft), 50);
    node.addEventListener("scroll", scrollListener);
    return () => node.removeEventListener("scroll", scrollListener);
  }, []);
  (0, import_react29.useEffect)(() => {
    const [left, right] = getButtonVisibility();
    setIsLeftButtonVisible(left);
    setIsRightButtonVisible(right);
  }, [scrollPos]);
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(View, { className: cx(css.root, className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      IconButton,
      {
        name: "ChevronLeft",
        onClick: () => handleScroll("left"),
        className: cx(css.scrollButton, "left"),
        size: "large"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(View, { ref, className: cx(css.items, innerClassName), children }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
var useClasses45 = makeClasses((props) => ({
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
var import_jsx_runtime70 = require("react/jsx-runtime");
var UniformList = (_a) => {
  var _b = _a, { children, uniformWidth } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  const { css, cx } = useClasses46({ uniformWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.uniform, props == null ? void 0 : props.className), children }));
};
var useClasses46 = makeClasses((props) => ({
  uniform: {
    "& > *": {
      flexBasis: "100%",
      maxWidth: props.uniformWidth
    }
  }
}));

// trabecula/components/wrappers/view.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
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
    const { css, cx } = useClasses47({
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
    return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", __spreadProps(__spreadValues({}, props), { ref, className: cx(className, css.view), children }));
  }
);
var useClasses47 = makeClasses((props) => {
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
var import_react30 = require("react");
var import_cache = __toESM(require("@emotion/cache"));
var import_react31 = require("@emotion/react");
var import_material34 = require("@mui/material");
var import_tss_react2 = require("tss-react");
var import_jsx_runtime72 = require("react/jsx-runtime");
var MuiProvider = ({
  children,
  portalContainer,
  styleContainer
}) => {
  const themeRef = (0, import_react30.useRef)(
    (0, import_material34.createTheme)({
      components: {
        MuiModal: { defaultProps: { container: portalContainer } },
        MuiPopover: { defaultProps: { container: portalContainer } },
        MuiPopper: { defaultProps: { container: portalContainer } }
      },
      palette: { mode: "dark" }
    })
  );
  const muiCacheRef = (0, import_react30.useRef)(
    (0, import_cache.default)({ container: styleContainer, key: "mui", prepend: true, stylisPlugins: [] })
  );
  const tssCacheRef = (0, import_react30.useRef)(
    (0, import_cache.default)({ container: styleContainer, key: "tss", stylisPlugins: [] })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react30.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react31.CacheProvider, { value: muiCacheRef.current, children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_tss_react2.TssCacheProvider, { value: tssCacheRef.current, children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_material34.ThemeProvider, { theme: themeRef.current, children }) }) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  Chip,
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
  Radio,
  RangeWrapper,
  SideScroller,
  SortMenu,
  SortRow,
  TEXT_PRESETS,
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
});
//# sourceMappingURL=index.js.map