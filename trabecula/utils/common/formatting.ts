import { dayjs, round } from "trabecula/utils/common";

const abbrevNum = (num: number) => Intl.NumberFormat("en", { notation: "compact" }).format(num);

const bytes = (bytes: number) => {
  if (bytes < 1) return "0 B";

  const power = Math.floor(Math.log2(bytes) / 10);

  return `${(bytes / 1024 ** power).toFixed(2)} ${"KMGTPEZY"[power - 1] || ""}B`;
};

const camelCase = (str: string) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

const capitalize = (str: string, restLower = false) =>
  str.charAt(0).toUpperCase() +
  (restLower ? str.substring(1).toLocaleLowerCase() : str.substring(1));

const commas = (num: number) => Intl.NumberFormat().format(num);

const decodeHtmlEntities = (s: string) =>
  s.replace(htmlEntityRegex, (m) => {
    let decoded = m;

    if (m.startsWith("&#")) {
      const isHex = m[2].toLowerCase() === "x";
      const codePoint = parseInt(m.slice(isHex ? 3 : 2, -1), isHex ? 16 : 10);

      decoded =
        codePoint > 0 && codePoint <= 0x10ffff && !(codePoint >= 0xd800 && codePoint <= 0xdfff)
          ? String.fromCodePoint(codePoint)
          : "\uFFFD";
    } else {
      decoded = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }[m.slice(1, -1)] ?? m;
    }

    return decoded;
  });

const duration = (val: number, isMs = false) =>
  !isNaN(val) ? dayjs.duration(val, isMs ? "ms" : "s").format("HH:mm:ss") : null;

const frameToSec = (frame: number, frameRate: number) => round(frame / frameRate, 3);

const htmlEntityRegex = /&(#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g;

const jstr = (val: any) => JSON.stringify(val, null, 2);

const leadZeros = (num: number, places: number) => String(num).padStart(places, "0");

const pascalToSnake = (str: string) =>
  !str?.length
    ? ""
    : str
        .split(/(?=[A-Z])/)
        .join("_")
        .toLowerCase();

const regexEscape = (string: string, replacementOnly = false) =>
  string
    ? replacementOnly
      ? String(string).replace(/(^|[^\\])(\/)/g, "$1\\$2")
      : String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    : string;

const sanitizeWinPath = (winPath: string, isBasename = false, isFolderOnly = false): string => {
  if (!winPath) return winPath;

  const sanitize = (part: string, isBase = false) => {
    return part
      .replaceAll(".", isBase ? "." : "․")
      .replaceAll("<", "﹤")
      .replaceAll(">", "﹥")
      .replaceAll(":", " ː ")
      .replaceAll('"', "“")
      .replaceAll("/", " ⁄ ")
      .replaceAll("\\", " ＼ ")
      .replaceAll("|", "⼁")
      .replaceAll("?", "﹖")
      .replaceAll("*", "﹡")
      .replace(/[\u0000-\u001f]/g, "")
      .trim()
      .replace(/\.+$/, (dots) => "․".repeat(dots.length))
      .replace(/^(con|prn|aux|nul|com[1-9¹²³]|lpt[1-9¹²³])(?=\.|$)/i, "_$1");
  };

  return isBasename
    ? sanitize(winPath, true)
    : winPath
        .split(/[/\\]/)
        .map((part, idx, parts) =>
          idx === 0 && /^[a-zA-Z]:$/.test(part)
            ? part
            : sanitize(part, isFolderOnly ? false : idx === parts.length - 1),
        )
        .join("\\");
};

const snakeToPascal = (str: string) =>
  !str?.length
    ? ""
    : str
        .split("_")
        .map((s) => capitalize(s))
        .join("");

const titleCase = (str: string) =>
  str
    .split(" ")
    .map((s) => capitalize(s))
    .join(" ");

export const Fmt = {
  abbrevNum,
  bytes,
  camelCase,
  capitalize,
  commas,
  decodeHtmlEntities,
  duration,
  frameToSec,
  htmlEntityRegex,
  jstr,
  leadZeros,
  pascalToSnake,
  regexEscape,
  sanitizeWinPath,
  snakeToPascal,
  titleCase,
};
