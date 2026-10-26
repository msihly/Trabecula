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

// trabecula/utils/process/socket.ts
var socket_exports = {};
__export(socket_exports, {
  registerSocketProcess: () => registerSocketProcess
});
module.exports = __toCommonJS(socket_exports);
var import_http = require("http");
var import_socket = require("socket.io");

// trabecula/utils/process/lifecycle.ts
var import_events = require("events");

// trabecula/utils/process/process-job.ts
var import_path = __toESM(require("path"));
var import_child_process = require("child_process");
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

// trabecula/utils/server/files.ts
var import_fdir = require("fdir");
var import_trash = __toESM(require("trash"));

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

// trabecula/utils/server/files.ts
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
var mainRequests = /* @__PURE__ */ new Map();
var stopping = false;
var shutdownController = new AbortController();
var serverShutdownSignal = shutdownController.signal;
var checkServerShutdown = () => {
  if (stopping) throw new Error("Server task cancelled for shutdown.");
};
var registerProcessLifecycle = ({
  reload,
  start,
  stop
}) => {
  ownProcessTree();
  (0, import_events.setMaxListeners)(0, serverShutdownSignal);
  let shutdown;
  let startup;
  const reply = (message) => {
    if (!process.connected) return;
    process.send(message, (error) => {
      if (error) console.error("Lifecycle response could not be delivered:", error);
    });
  };
  const shutdownProcess = (code = 0) => {
    if (shutdown) return shutdown;
    stopping = true;
    shutdownController.abort(new Error("Server is shutting down."));
    shutdown = (() => __async(null, null, function* () {
      yield stop();
      process.stdout.write("", () => process.stderr.write("", () => process.exit(code)));
    }))().catch((error) => {
      console.error("Graceful shutdown failed:", error);
      reply({ error: error.message, type: "shutdown-error" });
      process.exit(1);
    });
    return shutdown;
  };
  const startProcess = (message) => __async(null, null, function* () {
    if (process.env.LOGS_PATH) yield setLogsPath(process.env.LOGS_PATH);
    return yield start(message);
  });
  process.on("message", (message) => {
    if ((message == null ? void 0 : message.type) !== "main-response") return;
    const request = mainRequests.get(message.requestId);
    if (!request) return;
    mainRequests.delete(message.requestId);
    if (message.error !== void 0) request.reject(new Error(message.error));
    else request.resolve(message.data);
  });
  process.on("message", (message) => __async(null, null, function* () {
    var _a;
    try {
      if ((message == null ? void 0 : message.type) === "stop") yield shutdownProcess();
      else if ((message == null ? void 0 : message.type) === "start") {
        if (stopping) throw new Error("Process is shutting down.");
        startup != null ? startup : startup = startProcess(message);
        const response = yield startup;
        if (!shutdown) reply(__spreadProps(__spreadValues({}, response), { requestId: message.requestId, type: "ready" }));
      } else if ((message == null ? void 0 : message.type) === "reload-config") {
        if (stopping) throw new Error("Process is shutting down.");
        yield reload == null ? void 0 : reload();
        reply({ requestId: message.requestId, type: "config-reloaded" });
      }
    } catch (error) {
      console.error(`[${message == null ? void 0 : message.type}] Failed:`, error);
      reply({
        error: (_a = error.stack) != null ? _a : error.message,
        requestId: message == null ? void 0 : message.requestId,
        type: "error"
      });
      if ((message == null ? void 0 : message.type) === "start") shutdownProcess(1).catch(() => {
      });
    }
  }));
  process.on("disconnect", () => {
    for (const request of mainRequests.values())
      request.reject(new Error("The main process disconnected."));
    mainRequests.clear();
    shutdownProcess().catch(() => {
    });
  });
  process.on(
    "unhandledRejection",
    (error) => {
      var _a;
      return fileLog(["Unhandled rejection", (_a = error == null ? void 0 : error.stack) != null ? _a : String(error)], { type: "error" });
    }
  );
  for (const signal of ["SIGINT", "SIGTERM"])
    process.on(signal, () => {
      if (!process.connected) shutdownProcess().catch(() => {
      });
      else fileLog(`Waiting for parent shutdown after ${signal}.`);
    });
};

// trabecula/utils/process/server-manager.ts
var START_TIMEOUT_MS = 6 * 60 * 1e3;

// trabecula/utils/process/socket.ts
var registerSocketProcess = (getOptions) => {
  let io;
  let server;
  registerProcessLifecycle({
    start: () => __async(null, null, function* () {
      const { events, port, serverOptions } = yield getOptions();
      checkServerShutdown();
      server = (0, import_http.createServer)();
      io = new import_socket.Server(server, serverOptions);
      io.on("connection", (socket) => {
        socket.emit("connected");
        events.forEach(
          (event) => socket.on(event, (...args) => socket.broadcast.emit(event, ...args))
        );
      });
      yield new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(port, "127.0.0.1", resolve);
      });
      fileLog(`[SOCKET] Listening on ${port}`);
    }),
    stop: () => __async(null, null, function* () {
      if (server == null ? void 0 : server.listening)
        yield new Promise(
          (resolve, reject) => io.close((error) => error ? reject(error) : resolve())
        );
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  registerSocketProcess
});
//# sourceMappingURL=index.js.map