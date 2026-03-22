import { dayjs, round } from "trabecula/utils/common";
const abbrevNum = (num) => Intl.NumberFormat("en", { notation: "compact" }).format(num);
const bytes = (bytes) => {
    if (bytes < 1)
        return "0 B";
    const power = Math.floor(Math.log2(bytes) / 10);
    return `${(bytes / 1024 ** power).toFixed(2)} ${"KMGTPEZY"[power - 1] || ""}B`;
};
const camelCase = (str) => `${str[0].toLowerCase()}${str.slice(1)}`;
const capitalize = (str, restLower = false) => str[0].toUpperCase() + (restLower ? str.substring(1).toLocaleLowerCase() : str.substring(1));
const commas = (num) => Intl.NumberFormat().format(num);
const decodeHtmlEntities = (s) => s.replace(htmlEntityRegex, (m) => {
    if (m.startsWith("&#x") || m.startsWith("&#X"))
        return String.fromCharCode(parseInt(m.slice(3, -1), 16));
    if (m.startsWith("&#"))
        return String.fromCharCode(parseInt(m.slice(2, -1), 10));
    return { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[m.slice(1, -1)] ?? m;
});
const duration = (val, isMs = false) => !isNaN(val) ? dayjs.duration(val, isMs ? "ms" : "s").format("HH:mm:ss") : null;
const frameToSec = (frame, frameRate) => round(frame / frameRate, 3);
const htmlEntityRegex = /&(#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g;
const jstr = (val) => JSON.stringify(val, null, 2);
const leadZeros = (num, places) => String(num).padStart(places, "0");
const pascalToSnake = (str) => !str?.length
    ? ""
    : str
        .split(/(?=[A-Z])/)
        .join("_")
        .toLowerCase();
const regexEscape = (string, replacementOnly = false) => string
    ? replacementOnly
        ? String(string).replace(/\\/g, "\\\\")
        : String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    : string;
const sanitizeWinPath = (winPath, isBasename = false) => {
    if (!winPath)
        return winPath;
    const sanitize = (part) => part
        .replace(/[\\:*?"<>|]/g, "-")
        .replace(/[. ]+$/, "")
        .replace(isBasename ? "/" : "", "")
        .trim();
    return isBasename
        ? sanitize(winPath)
        : winPath
            .split(/[/\\]/)
            .map((part, idx) => (idx === 0 && /^[a-zA-Z]:$/.test(part) ? part : sanitize(part)))
            .join("\\");
};
const snakeToPascal = (str) => !str?.length
    ? ""
    : str
        .split("_")
        .map((s) => capitalize(s))
        .join("");
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
};
