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
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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

// trabecula/utils/electron/index.ts
var electron_exports = {};
__export(electron_exports, {
  registerMainProcess: () => registerMainProcess
});
module.exports = __toCommonJS(electron_exports);

// trabecula/utils/electron/main-process.ts
var import_electron = require("electron");
var import_path4 = __toESM(require("path"));

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

// trabecula/utils/common/date-and-time.ts
var import_dayjs = __toESM(require("dayjs"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_duration = __toESM(require("dayjs/plugin/duration"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.extend(import_utc.default);

// trabecula/utils/common/miscellaneous.ts
var import_es_toolkit = require("es-toolkit");
var import_compat = require("es-toolkit/compat");

// trabecula/utils/common/palette.ts
var import_color = __toESM(require("color"));
var PALETTE = {
  red: {
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  orange: {
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  amber: {
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  yellow: {
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  lime: {
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  green: {
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  emerald: {
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  teal: {
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  cyan: {
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  },
  sky: {
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  blue: {
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  indigo: {
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  violet: {
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  purple: {
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  fuchsia: {
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  pink: {
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  rose: {
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  },
  slate: {
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  stone: {
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  neutral: {
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  }
};
var PALETTE_SWATCHES = Object.values(PALETTE).map(
  (shades) => Object.values(shades)
);
var PALETTE_NAMES = new Map(
  Object.entries(PALETTE).flatMap(
    ([hue, shades]) => Object.entries(shades).map(([shade, hex]) => [hex, `${hue} ${shade}`])
  )
);
var PALETTE_LABS = [...PALETTE_NAMES.keys()].map((hex) => ({
  hex,
  lab: (0, import_color.default)(hex).lab().array()
}));

// trabecula/utils/common/server-status.ts
var SERVER_STATUS_IPC = {
  changed: "server-status-changed",
  get: "getServerStatuses"
};

// trabecula/utils/process/process-job.ts
var import_path = __toESM(require("path"));
var import_child_process = require("child_process");
var PROCESS_SHUTDOWN_TIMEOUT_MS = 3e4;
var ownedJobHandle;
var runProcessJob = (command) => {
  const options = {
    detached: true,
    env: __spreadProps(__spreadValues({}, process.env), { ELECTRON_RUN_AS_NODE: "1" }),
    stdio: "pipe",
    timeout: 3e4,
    windowsHide: true
  };
  const result = (0, import_child_process.spawnSync)(
    process.execPath,
    [
      "-e",
      `const { execFileSync } = require("child_process");

try {
  process.stdout.write(execFileSync(process.argv[1], [
    "-NoLogo", "-NoProfile", "-NonInteractive", "-EncodedCommand", process.argv[2]
  ], { stdio: "pipe", timeout: 25000, windowsHide: true }));
} catch (error) {
  process.stderr.write(String(error.stderr ?? error.message));
  process.exitCode = 1;
}`,
      import_path.default.join(process.env.SystemRoot, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"),
      Buffer.from(
        `$ErrorActionPreference = 'Stop'
Add-Type -TypeDefinition @'
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;

public static class TrabeculaProcessJob
{
    [StructLayout(LayoutKind.Sequential)]
    private struct BasicLimits
    {
        public long PerProcessUserTimeLimit;
        public long PerJobUserTimeLimit;
        public uint LimitFlags;
        public UIntPtr MinimumWorkingSetSize;
        public UIntPtr MaximumWorkingSetSize;
        public uint ActiveProcessLimit;
        public UIntPtr Affinity;
        public uint PriorityClass;
        public uint SchedulingClass;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct IoCounters
    {
        public ulong ReadOperationCount;
        public ulong WriteOperationCount;
        public ulong OtherOperationCount;
        public ulong ReadTransferCount;
        public ulong WriteTransferCount;
        public ulong OtherTransferCount;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct ExtendedLimits
    {
        public BasicLimits BasicLimitInformation;
        public IoCounters IoInfo;
        public UIntPtr ProcessMemoryLimit;
        public UIntPtr JobMemoryLimit;
        public UIntPtr PeakProcessMemoryUsed;
        public UIntPtr PeakJobMemoryUsed;
    }

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool AssignProcessToJobObject(IntPtr job, IntPtr process);

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool CloseHandle(IntPtr handle);

    [DllImport("kernel32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    private static extern IntPtr CreateJobObject(IntPtr attributes, string name);

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool DuplicateHandle(IntPtr sourceProcess, IntPtr sourceHandle,
        IntPtr targetProcess, out IntPtr targetHandle, uint access, bool inherit, uint options);

    [DllImport("kernel32.dll")]
    private static extern IntPtr GetCurrentProcess();

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern IntPtr OpenProcess(uint access, bool inherit, int processId);

    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool SetInformationJobObject(IntPtr job, int informationClass,
        ref ExtendedLimits information, uint length);

    public static long Attach(int processId)
    {
        // PROCESS_TERMINATE | PROCESS_DUP_HANDLE | PROCESS_SET_QUOTA
        IntPtr owner = OpenProcess(0x141, false, processId);
        if (owner == IntPtr.Zero) throw new Win32Exception();

        IntPtr job = IntPtr.Zero;

        try
        {
            job = CreateJobObject(IntPtr.Zero, null);
            if (job == IntPtr.Zero) throw new Win32Exception();

            ExtendedLimits limits = new ExtendedLimits();
            limits.BasicLimitInformation.LimitFlags = 0x2000; // KILL_ON_JOB_CLOSE

            if (!SetInformationJobObject(job, 9, ref limits, (uint)Marshal.SizeOf(limits)))
                throw new Win32Exception();

            IntPtr ownedHandle;
            if (!DuplicateHandle(GetCurrentProcess(), job, owner, out ownedHandle, 0, false, 2))
                throw new Win32Exception();

            if (!AssignProcessToJobObject(job, owner)) throw new Win32Exception();

            return ownedHandle.ToInt64();
        }
        finally
        {
            if (job != IntPtr.Zero) CloseHandle(job);

            CloseHandle(owner);
        }
    }

    public static void ReleaseForRelaunch(int processId, long handle)
    {
        IntPtr owner = OpenProcess(0x40, false, processId); // PROCESS_DUP_HANDLE
        if (owner == IntPtr.Zero) throw new Win32Exception();

        IntPtr job = IntPtr.Zero;

        try
        {
            if (!DuplicateHandle(owner, new IntPtr(handle), GetCurrentProcess(), out job, 0, false, 2))
                throw new Win32Exception();

            ExtendedLimits limits = new ExtendedLimits();
            if (!SetInformationJobObject(job, 9, ref limits, (uint)Marshal.SizeOf(limits)))
                throw new Win32Exception();
        }
        finally
        {
            if (job != IntPtr.Zero) CloseHandle(job);

            CloseHandle(owner);
        }
    }
}
'@
[TrabeculaProcessJob]::${command}`,
        "utf16le"
      ).toString("base64")
    ],
    options
  );
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`Windows process ownership failed: ${result.stderr.toString().trim()}`);
  return result.stdout;
};
var ownProcessTree = () => {
  if (process.platform !== "win32" || ownedJobHandle) return;
  ownedJobHandle = Number(runProcessJob(`Attach(${process.pid})`).toString().trim());
  if (!Number.isSafeInteger(ownedJobHandle) || ownedJobHandle <= 0)
    throw new Error("Windows did not return the process ownership handle.");
};
var releaseProcessTreeForRelaunch = () => {
  if (process.platform !== "win32") return;
  if (!ownedJobHandle) throw new Error("The application does not own its process tree.");
  runProcessJob(`ReleaseForRelaunch(${process.pid}, ${ownedJobHandle})`);
};

// trabecula/utils/server/files.ts
var import_fdir = require("fdir");
var import_trash = __toESM(require("trash"));
var import_md5_file = __toESM(require("md5-file"));

// trabecula/utils/server/logging.ts
var import_fs = __toESM(require("fs"));
var import_promises = __toESM(require("fs/promises"));
var import_path2 = __toESM(require("path"));
var logsPath;
var logStream = null;
var setLogsPath = (filePath) => __async(null, null, function* () {
  const nextLogsPath = import_path2.default.resolve(filePath);
  yield import_promises.default.mkdir(import_path2.default.dirname(nextLogsPath), { recursive: true });
  const previousStream = logStream;
  const stream = import_fs.default.createWriteStream(nextLogsPath, { encoding: "utf8", flags: "a" });
  stream.on("error", (err) => {
    console.error("Log stream error:", err);
    if (logStream === stream) logStream = null;
  });
  logsPath = nextLogsPath;
  logStream = stream;
  previousStream == null ? void 0 : previousStream.end();
});
var stringify = (args) => {
  try {
    if (Array.isArray(args)) return args.map((arg) => JSON.stringify(arg, null, 2)).join(" ");
    else return JSON.stringify(args, null, 2);
  } catch (e) {
    return String(args);
  }
};
var fileLog = (args, options) => __async(null, null, function* () {
  var _a, _b;
  try {
    if (!logsPath) return console[(_a = options == null ? void 0 : options.type) != null ? _a : "debug"]("[LOG]", args);
    const timestamp = (0, import_dayjs.default)().format("YYYY-MM-DD HH:mm:ss");
    const logType = ((_b = options == null ? void 0 : options.type) != null ? _b : "debug").toUpperCase();
    const logContent = `[${timestamp}] [${logType}] ${stringify(args)}
`;
    if (!logStream) yield setLogsPath(logsPath);
    const stream = logStream;
    yield new Promise((resolve, reject) => {
      stream.write(logContent, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  } catch (err) {
    console.error("Failed to log to file:", err);
  }
});

// trabecula/utils/process/lifecycle.ts
var shutdownController = new AbortController();
var serverShutdownSignal = shutdownController.signal;

// trabecula/utils/process/server-manager.ts
var import_path3 = __toESM(require("path"));
var import_child_process2 = require("child_process");
var import_crypto = require("crypto");
var BASE_RESTART_DELAY_MS = 2e3;
var MAX_RESTARTS = 5;
var READY_TIMEOUT_MS = 3e4;
var START_TIMEOUT_MS = 6 * 60 * 1e3;
var ManagedProcess = class {
  constructor(def, options, getPayload, onStatusChange) {
    __publicField(this, "def", def);
    __publicField(this, "options", options);
    __publicField(this, "getPayload", getPayload);
    __publicField(this, "onStatusChange", onStatusChange);
    __publicField(this, "intentionalStop", false);
    __publicField(this, "message", null);
    __publicField(this, "proc", null);
    __publicField(this, "rejectStartup", null);
    __publicField(this, "resolveStartup", null);
    __publicField(this, "restartCount", 0);
    __publicField(this, "restartTimer", null);
    __publicField(this, "startup", null);
    __publicField(this, "state", "starting");
  }
  getStatus() {
    return {
      label: this.def.label,
      message: this.message,
      restartCount: this.restartCount,
      state: this.state
    };
  }
  handleExit(child, code) {
    if (this.proc !== child) return;
    this.proc = null;
    if (this.intentionalStop) return;
    fileLog(`${this.def.label} exited with code ${code}`, { type: "error" });
    this.scheduleRestart();
  }
  handleMainRequest(_0, _1) {
    return __async(this, arguments, function* (child, { action, args, requestId }) {
      var _a, _b;
      const reply = (response) => {
        if (!child.connected) return;
        child.send(__spreadProps(__spreadValues({}, response), { requestId, type: "main-response" }), (error) => {
          if (error)
            fileLog(`${this.def.label} main process response failed: ${error.message}`, {
              type: "error"
            });
        });
      };
      try {
        const handler = (_a = this.options.mainRequestHandlers) == null ? void 0 : _a[action];
        if (!handler) throw new Error(`Unknown main process request: ${action}`);
        reply({ data: yield handler(args) });
      } catch (error) {
        reply({ error: (_b = error == null ? void 0 : error.message) != null ? _b : String(error) });
      }
    });
  }
  prepareStop() {
    var _a;
    (_a = this.rejectStartup) == null ? void 0 : _a.call(this, new Error(`${this.def.label} startup was stopped.`));
    this.rejectStartup = null;
    this.resolveStartup = null;
    this.startup = null;
    clearTimeout(this.restartTimer);
    this.restartTimer = null;
    this.intentionalStop = true;
  }
  reloadConfig() {
    return __async(this, null, function* () {
      yield this.sendAndWait({ type: "reload-config" }, "config-reloaded");
    });
  }
  scheduleRestart() {
    var _a;
    if (this.intentionalStop || this.restartTimer) return;
    if (this.restartCount >= MAX_RESTARTS) {
      this.setState("failed");
      (_a = this.rejectStartup) == null ? void 0 : _a.call(this, new Error(`${this.def.label} failed after ${MAX_RESTARTS} restarts.`));
      fileLog(`${this.def.label} hit max restarts (${MAX_RESTARTS}). Giving up.`, {
        type: "error"
      });
      return;
    }
    const delay = BASE_RESTART_DELAY_MS * __pow(2, this.restartCount);
    this.restartCount++;
    this.setState("restarting");
    fileLog(
      `Restarting ${this.def.label} in ${delay}ms (attempt ${this.restartCount}/${MAX_RESTARTS})...`,
      { type: "error" }
    );
    this.restartTimer = setTimeout(() => __async(this, null, function* () {
      this.restartTimer = null;
      try {
        yield this.spawn();
        fileLog(`${this.def.label} restarted successfully.`);
      } catch (error) {
        fileLog(`${this.def.label} failed to restart: ${error.message}`, { type: "error" });
        if (!this.proc) this.scheduleRestart();
      }
    }), delay);
  }
  sendAndWait(message, successType, timeoutMs = READY_TIMEOUT_MS) {
    return new Promise((resolve, reject) => {
      const child = this.proc;
      if (!(child == null ? void 0 : child.connected)) return reject(new Error(`${this.def.label} process is unavailable.`));
      const requestId = (0, import_crypto.randomUUID)();
      const cleanup = () => {
        clearTimeout(timeout);
        child.off("error", handleError);
        child.off("exit", handleExit);
        child.off("message", handleMessage);
      };
      const handleError = (error) => {
        cleanup();
        reject(error);
      };
      const handleExit = () => {
        cleanup();
        reject(new Error(`${this.def.label} process exited before responding.`));
      };
      const handleMessage = (response) => {
        if ((response == null ? void 0 : response.requestId) !== requestId) return;
        if (response.type === "error") {
          cleanup();
          reject(new Error(response.error));
        } else if (response.type === successType) {
          cleanup();
          resolve(response);
        }
      };
      const timeout = setInterval(() => {
        var _a;
        if (message.type === "start") {
          fileLog(
            `${this.def.label} is still starting: ${(_a = this.message) != null ? _a : "waiting for the service to report progress"}`
          );
        } else {
          cleanup();
          reject(new Error(`${this.def.label} process response timed out; process retained.`));
        }
      }, timeoutMs);
      child.on("error", handleError);
      child.on("exit", handleExit);
      child.on("message", handleMessage);
      child.send(__spreadProps(__spreadValues({}, message), { requestId }), (error) => {
        if (error) handleError(error);
      });
    });
  }
  setState(state) {
    this.state = state;
    this.onStatusChange();
  }
  spawn() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e;
      if (this.intentionalStop) throw new Error(`${this.def.label} is stopping.`);
      this.message = null;
      this.setState(this.restartCount ? "restarting" : "starting");
      const { base, configPath, isPackaged, logsPath: logsPath2, resourcesPath } = this.options;
      const options = {
        // Isolate terminal signals while keeping descendants inside the owner's Windows job.
        detached: true,
        env: __spreadValues(__spreadProps(__spreadValues({}, process.env), {
          CONFIG_PATH: configPath,
          IS_PACKAGED: isPackaged ? "1" : "0",
          LOGS_PATH: logsPath2,
          NODE_PATH: isPackaged ? import_path3.default.join(resourcesPath, "app.asar", "node_modules") : import_path3.default.resolve("node_modules"),
          RESOURCES_PATH: resourcesPath
        }), (_b = (_a = this.def).getEnv) == null ? void 0 : _b.call(_a)),
        stdio: ["ignore", "pipe", "pipe", "ipc"],
        windowsHide: true
      };
      const child = (0, import_child_process2.fork)(import_path3.default.resolve(base, `${this.def.fileName}.js`), [], options);
      this.proc = child;
      (_c = child.stdout) == null ? void 0 : _c.on("data", (data) => fileLog(`[${this.def.label}] ${data}`));
      (_d = child.stderr) == null ? void 0 : _d.on("data", (data) => {
        const output = String(data).replace(/\\"/g, '"');
        const isDebug = output.includes("MongoMS:") && !/"s"\s*:\s*"[EF]"|Error:/.test(output);
        fileLog(`[${this.def.label}] ${data}`, { type: isDebug ? "debug" : "error" });
      });
      child.on("error", (error) => {
        fileLog(`${this.def.label}: ${error.message}`, { type: "error" });
        if (!child.pid) this.handleExit(child, 1);
      });
      child.on("message", (message2) => {
        var _a2, _b2;
        if ((message2 == null ? void 0 : message2.type) === "main-request") this.handleMainRequest(child, message2);
        else if (this.proc === child) {
          if ((message2 == null ? void 0 : message2.type) === "startup-progress" && !this.intentionalStop) {
            this.message = message2.message;
            this.onStatusChange();
          } else if ((message2 == null ? void 0 : message2.type) === "error" || (message2 == null ? void 0 : message2.type) === "shutdown-error") {
            this.message = (_a2 = message2.error) == null ? void 0 : _a2.split(/\r?\n/)[0];
            if (message2.type === "shutdown-error") {
              this.setState("failed");
              (_b2 = this.rejectStartup) == null ? void 0 : _b2.call(this, new Error(message2.error));
            } else {
              this.onStatusChange();
            }
          }
        }
      });
      child.once("exit", (code) => this.handleExit(child, code));
      const message = yield this.sendAndWait(
        __spreadValues({ type: "start" }, this.getPayload()),
        "ready",
        START_TIMEOUT_MS
      );
      this.restartCount = 0;
      this.message = null;
      this.setState("ready");
      (_e = this.resolveStartup) == null ? void 0 : _e.call(this, message);
      return message;
    });
  }
  start() {
    if (this.startup) return this.startup;
    this.intentionalStop = false;
    this.startup = new Promise((resolve, reject) => {
      this.rejectStartup = reject;
      this.resolveStartup = resolve;
    });
    this.spawn().catch((error) => {
      fileLog(`${this.def.label} failed to start: ${error.message}`, { type: "error" });
      if (!this.proc) this.scheduleRestart();
    });
    return this.startup;
  }
  stop() {
    return __async(this, null, function* () {
      this.prepareStop();
      const child = this.proc;
      if (!child || child.exitCode !== null || child.signalCode !== null) return;
      if (!this.def.isGraceful) {
        yield new Promise((resolve, reject) => {
          child.once("exit", () => resolve());
          child.once("error", reject);
          if (!child.kill()) reject(new Error(`Could not terminate ${this.def.label}.`));
        });
      } else {
        yield new Promise((resolve, reject) => {
          const requestId = (0, import_crypto.randomUUID)();
          const warning = setInterval(
            () => fileLog(`Waiting for ${this.def.label} to shut down cleanly...`),
            3e4
          );
          const cleanup = () => {
            clearInterval(warning);
            child.off("exit", onExit);
            child.off("message", onMessage);
          };
          const onExit = (code, signal) => {
            cleanup();
            if (code === 0) resolve();
            else
              reject(
                new Error(
                  `${this.def.label} exited during shutdown (code: ${code}, signal: ${signal}).`
                )
              );
          };
          const fail = (error) => {
            cleanup();
            reject(error);
          };
          const onMessage = (message) => {
            if ((message == null ? void 0 : message.type) === "shutdown-error" || (message == null ? void 0 : message.requestId) === requestId && message.type === "error") {
              fail(new Error(message.error));
            }
          };
          child.once("exit", onExit);
          child.on("message", onMessage);
          if (!child.connected) {
            fail(new Error(`${this.def.label} IPC is disconnected during shutdown.`));
            return;
          }
          child.send({ requestId, type: "stop" }, (error) => {
            if (error) fail(error);
          });
        });
      }
    });
  }
};
var ServerManager = class {
  constructor(options) {
    __publicField(this, "options", options);
    __publicField(this, "configRestartCount", 0);
    __publicField(this, "isStopping", false);
    __publicField(this, "lifecycleRevision", 0);
    __publicField(this, "stages");
    __publicField(this, "uri");
    __publicField(this, "notifyStatusChange", () => this.options.onStatusChange(this.getStatuses()));
    this.stages = options.stages.map(
      (stage) => stage.map(
        (def) => new ManagedProcess(def, options, () => ({ uri: this.uri }), this.notifyStatusChange)
      )
    );
  }
  getStatuses() {
    return this.stages.flat().map((serverProcess) => __spreadProps(__spreadValues({}, serverProcess.getStatus()), {
      isConfigRestart: this.configRestartCount > 0
    })).sort((a, b) => a.label.localeCompare(b.label));
  }
  reloadConfig() {
    return __async(this, null, function* () {
      yield Promise.all(this.stages.flat().map((serverProcess) => serverProcess.reloadConfig()));
    });
  }
  restart() {
    return __async(this, null, function* () {
      this.configRestartCount++;
      this.notifyStatusChange();
      try {
        const stopping = this.stop();
        const revision = this.lifecycleRevision;
        yield stopping;
        if (revision !== this.lifecycleRevision)
          throw new Error("Restart cancelled by a later lifecycle request.");
        yield this.start();
      } finally {
        this.configRestartCount--;
        this.notifyStatusChange();
      }
    });
  }
  start() {
    return __async(this, null, function* () {
      var _a, _b;
      const revision = ++this.lifecycleRevision;
      this.isStopping = false;
      for (const stage of this.stages) {
        const responses = yield Promise.all(stage.map((serverProcess) => serverProcess.start()));
        if (this.isStopping || revision !== this.lifecycleRevision)
          throw new Error("Startup cancelled by a later lifecycle request.");
        this.uri = (_b = (_a = responses.find((response) => response.uri)) == null ? void 0 : _a.uri) != null ? _b : this.uri;
      }
      fileLog("All services started.");
    });
  }
  stop() {
    return __async(this, null, function* () {
      const revision = ++this.lifecycleRevision;
      this.isStopping = true;
      for (const serverProcess of this.stages.flat()) serverProcess.prepareStop();
      const errors = [];
      for (const stage of [...this.stages].reverse()) {
        if (revision !== this.lifecycleRevision) return;
        const results = yield Promise.allSettled(stage.map((serverProcess) => serverProcess.stop()));
        for (const result of results) {
          if (result.status === "rejected") errors.push(result.reason);
        }
      }
      if (errors.length)
        throw new AggregateError(errors, "One or more services failed to shut down.");
    });
  }
};

// trabecula/utils/electron/main-process.ts
var registerMainProcess = ({
  appName,
  devPort,
  mainDir,
  resourcesFolder
}) => {
  try {
    ownProcessTree();
  } catch (error) {
    console.error("Process ownership could not be established:", error);
    import_electron.app.exit(1);
  }
  const isPackaged = import_electron.app.isPackaged;
  const isBundled = isPackaged || !!process.env.BUILD_DEV;
  const rootDir = import_path4.default.resolve(mainDir, "..", "..");
  const folderPath = isPackaged ? process.resourcesPath : rootDir;
  const baseUrl = isBundled ? `file://${import_path4.default.resolve(rootDir, "..", isPackaged ? "" : "build", "index.html")}` : `http://localhost:${devPort}${!!process.env.HMR ? "/index.hmr.html" : ""}`;
  const configPath = import_path4.default.resolve(folderPath, "..", "config.json");
  const logsDir = import_path4.default.resolve(folderPath, "..", "logs", (0, import_dayjs.default)().format("YYYY-MM-DD"));
  const logsPath2 = import_path4.default.resolve(logsDir, `${(0, import_dayjs.default)().format("HH[h]mm[m]ss[s]")}.log`);
  let relaunchAfterShutdown = false;
  let servers = null;
  let shutdown = null;
  let shutdownComplete = false;
  if (!import_electron.app.requestSingleInstanceLock()) {
    console.error(
      `${appName} is already running or still shutting down. This launch cannot start services.`
    );
    import_electron.dialog.showErrorBox(
      `${appName} is already running`,
      `Another ${appName} instance still holds the application lock. It may be waiting for active work to finish shutting down. This launch has not started any services.`
    );
    import_electron.app.exit(1);
  }
  import_electron.app.setAppLogsPath(logsDir);
  import_electron.app.setPath("appData", folderPath);
  import_electron.app.setPath("userData", import_path4.default.resolve(folderPath, "userData"));
  const logsReady = setLogsPath(logsPath2).catch(
    (error) => console.error("Failed to initialize file logging:", error)
  );
  import_electron.ipcMain.handle("getConfigPath", () => configPath);
  import_electron.ipcMain.handle(SERVER_STATUS_IPC.get, () => {
    var _a;
    return (_a = servers == null ? void 0 : servers.getStatuses()) != null ? _a : [];
  });
  import_electron.app.on("before-quit", (event) => {
    if (shutdownComplete) return;
    event.preventDefault();
    shutdown != null ? shutdown : shutdown = (() => __async(null, null, function* () {
      const deadline = setTimeout(() => {
        fileLog("Shutdown deadline exceeded; terminating the owned process tree.", {
          type: "error"
        });
        import_electron.app.exit(1);
      }, PROCESS_SHUTDOWN_TIMEOUT_MS);
      try {
        yield servers == null ? void 0 : servers.stop();
        if (relaunchAfterShutdown) {
          if (process.connected)
            yield new Promise(
              (resolve, reject) => process.send(
                { type: "relaunch" },
                (error) => error ? reject(error) : resolve()
              )
            );
          else {
            releaseProcessTreeForRelaunch();
            import_electron.app.relaunch();
          }
        }
        shutdownComplete = true;
        import_electron.app.exit(0);
      } finally {
        clearTimeout(deadline);
      }
    }))().catch((error) => {
      fileLog(`Shutdown failed: ${error.message}`, { type: "error" });
      import_electron.app.exit(1);
    });
  });
  process.on("SIGINT", () => import_electron.app.quit());
  process.on("SIGTERM", () => import_electron.app.quit());
  process.on("disconnect", () => import_electron.app.quit());
  process.on("message", (message) => {
    if ((message == null ? void 0 : message.type) === "stop") import_electron.app.quit();
  });
  const broadcastServerStatuses = (statuses) => import_electron.BrowserWindow.getAllWindows().forEach(
    (window) => window.webContents.send(SERVER_STATUS_IPC.changed, statuses)
  );
  const relaunch = () => {
    relaunchAfterShutdown = true;
    import_electron.app.quit();
  };
  const startServers = ({
    mainRequestHandlers,
    stages
  }) => {
    servers = new ServerManager({
      base: isPackaged ? import_path4.default.join(process.resourcesPath, "extraResources", resourcesFolder, "server") : mainDir,
      configPath,
      isPackaged,
      logsPath: logsPath2,
      mainRequestHandlers,
      onStatusChange: broadcastServerStatuses,
      resourcesPath: process.resourcesPath,
      stages
    });
    servers.start().catch((error) => {
      fileLog(`Server startup failed: ${error.message}`, { type: "error" });
    });
    return servers;
  };
  return {
    baseUrl,
    configPath,
    folderPath,
    getServers: () => servers,
    isBundled,
    isPackaged,
    isShuttingDown: () => !!shutdown,
    logsPath: logsPath2,
    /** Settles once file logging is set up, or has failed and falls back to the console. */
    logsReady,
    relaunch,
    startServers
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  registerMainProcess
});
//# sourceMappingURL=index.js.map