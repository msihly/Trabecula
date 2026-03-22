"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateWithTzToIso = exports.dayjs = void 0;
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const dayjs_1 = __importDefault(require("dayjs"));
exports.dayjs = dayjs_1.default;
const customParseFormat_1 = __importDefault(require("dayjs/plugin/customParseFormat"));
const duration_1 = __importDefault(require("dayjs/plugin/duration"));
const relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
dayjs_1.default.extend(customParseFormat_1.default);
dayjs_1.default.extend(duration_1.default);
dayjs_1.default.extend(relativeTime_1.default);
const dateWithTzToIso = (dateStr) => {
    const timezone = dateStr.split(" ")[4];
    const dateWithoutTz = dateStr.replace(timezone, "").trim();
    const date = (0, dayjs_1.default)(dateWithoutTz, "ddd MMM DD HH:mm:ss YYYY");
    if (date.isValid()) {
        const hours = parseInt(timezone.slice(1, 3));
        const minutes = parseInt(timezone.slice(3));
        const offsetMinutes = (timezone[0] === "-" ? 1 : -1) * (hours * 60 + minutes);
        return date.add(offsetMinutes, "minute").toISOString();
    }
    else {
        console.error("Invalid date:", dateStr, date);
        return null;
    }
};
exports.dateWithTzToIso = dateWithTzToIso;
