import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { dayjs, round } from "trabecula/utils/common";

let logsPath: string;
let logStream: fs.WriteStream | null = null;

export const setLogsPath = async (filePath: string) => {
  const nextLogsPath = path.resolve(filePath);

  await fsPromises.mkdir(path.dirname(nextLogsPath), { recursive: true });

  const previousStream = logStream;
  const stream = fs.createWriteStream(nextLogsPath, { encoding: "utf8", flags: "a" });

  stream.on("error", (err) => {
    console.error("Log stream error:", err);

    if (logStream === stream) logStream = null;
  });

  logsPath = nextLogsPath;
  logStream = stream;
  previousStream?.end();
};

const stringify = (args: any | any[]) => {
  try {
    if (Array.isArray(args)) return args.map((arg) => JSON.stringify(arg, null, 2)).join(" ");
    else return JSON.stringify(args, null, 2);
  } catch {
    return String(args);
  }
};

export const fileLog = async (
  args: any | any[],
  options?: { type: "debug" | "error" | "warn" },
) => {
  try {
    // fallback to console if logsPath is missing
    if (!logsPath) return console[options?.type ?? "debug"]("[LOG]", args);

    const timestamp = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const logType = (options?.type ?? "debug").toUpperCase();
    const logContent = `[${timestamp}] [${logType}] ${stringify(args)}\n`;

    if (!logStream) await setLogsPath(logsPath);

    const stream = logStream;

    await new Promise<void>((resolve, reject) => {
      stream.write(logContent, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  } catch (err) {
    console.error("Failed to log to file:", err);
  }
};

export const makePerfLog = (logTag: string, toFile = false) => {
  const funcPerfStart = performance.now();
  let perfStart = performance.now();

  const perfLog = (logStr: string) => {
    const str = `${logTag} ${round(performance.now() - perfStart, 0)} ms - ${logStr}`;

    toFile ? fileLog(str) : console.debug(str);
    perfStart = performance.now();
  };

  const perfLogTotal = (logStr: string) => {
    const str = `${logTag} Total: ${round(performance.now() - funcPerfStart, 0)} ms - ${logStr}`;

    toFile ? fileLog(str) : console.debug(str);
  };

  return { perfLog, perfLogTotal, perfStart };
};
