import dayjs from 'dayjs';
export { default as dayjs } from 'dayjs';
export { L as LOGICAL_OPS, a as LogicalOp, c as compareLogic, b as compareLogicOps, d as durationToSeconds, f as fractionStringToNumber, l as logicOpsToMongo, r as round } from '../../math-CcFdo8Hz.mjs';
import { debounce as debounce$1, cloneDeep, toMerged, isEqual, throttle as throttle$1 } from 'es-toolkit';
import { set } from 'es-toolkit/compat';
export { P as PromiseQueue, a as PromiseQueueOptions } from '../../queue-CNnYljaI.mjs';
export { default as customParseFormat } from 'dayjs/plugin/customParseFormat';
export { default as duration } from 'dayjs/plugin/duration';
export { default as relativeTime } from 'dayjs/plugin/relativeTime';

declare const arrayIntersect: <T>(...arrays: T[][]) => T[];
declare const bisectArrayChanges: <T>(oldArr: T[], newArr: T[]) => {
    added: T[];
    removed: T[];
};
declare const centeredSlice: <T>(arr: T[], indexToCenter: number, maxCount?: number) => T[];
declare const chunkArray: <T>(arr: T[], size: number) => T[][];
interface CountItemsResult<T> {
    value: T;
    count: number;
}
declare const countItems: <T>(arr: T[]) => CountItemsResult<T>[];
declare const getArrayDiff: <T>(a: T[], b: T[]) => T[];
declare const objectToFloat32Array: (obj: object) => Float32Array;
declare const range: (length: number) => number[];
declare const rotateArrayPos: (direction: "prev" | "next", current: number, length: number) => number;
declare const sortArray: <T>(arr: T[], key: string, isDesc?: boolean, isNumber?: boolean) => T[];
/** @return [falsy values, truthy values] */
declare const splitArray: <T>(arr: T[], filterFn: (element: T) => boolean) => T[][];
declare const sumArray: <T>(arr: T[], fn: (num: T) => number) => number;
declare const uniqueArrayFilter: <T>(...arrays: T[][]) => T[];
declare const uniqueArrayMerge: <T>(oldArray: T[], newArrays: T[]) => T[];

declare const AUDIO_CODECS_COMMON: readonly ["None", "aac_he", "aac_ld", "aac", "ac3", "aiff", "alac", "avc", "dts", "flac", "mp2", "mp3", "mp4als", "opus", "pcm_alaw", "pcm_bluray", "pcm_dvd", "pcm_s16be", "pcm_s16le", "pcm_s24le", "pcm_s32le", "pcm_u8", "pcm", "tta", "vorbis", "wav", "wmapro", "wmav1", "wmav2"];
declare const AUDIO_CODECS_UNCOMMON: readonly ["aac_latm", "alac", "ape", "aptx_hd", "aptx", "avs", "binkaudio_dct", "binkaudio_rdft", "cavs", "cook", "hcom", "iac", "mace3", "mace6", "paf_audio", "ra_144", "ra_288", "ralf", "sipr", "tak", "westwood_snd1", "wmalossless", "wmavoice", "xma1", "xma2"];
declare const AUDIO_CODECS: readonly ["None", "aac_he", "aac_ld", "aac", "ac3", "aiff", "alac", "avc", "dts", "flac", "mp2", "mp3", "mp4als", "opus", "pcm_alaw", "pcm_bluray", "pcm_dvd", "pcm_s16be", "pcm_s16le", "pcm_s24le", "pcm_s32le", "pcm_u8", "pcm", "tta", "vorbis", "wav", "wmapro", "wmav1", "wmav2", "aac_latm", "alac", "ape", "aptx_hd", "aptx", "avs", "binkaudio_dct", "binkaudio_rdft", "cavs", "cook", "hcom", "iac", "mace3", "mace6", "paf_audio", "ra_144", "ra_288", "ralf", "sipr", "tak", "westwood_snd1", "wmalossless", "wmavoice", "xma1", "xma2"];
type AudioCodec = (typeof AUDIO_CODECS)[number];
declare const IMAGE_EXTS_COMMON: readonly ["gif", "heic", "jpeg", "jpg", "png", "webp"];
declare const IMAGE_EXTS_UNCOMMON: readonly ["apng", "avif", "bmp", "jfif", "jif", "jiff", "svg", "tiff"];
declare const IMAGE_EXTS: ("gif" | "heic" | "jpeg" | "jpg" | "png" | "webp" | "apng" | "avif" | "bmp" | "jfif" | "jif" | "jiff" | "svg" | "tiff")[];
type ImageExt = (typeof IMAGE_EXTS)[number];
declare const VIDEO_CODECS_COMMON: readonly ["av1", "h264", "hevc", "mpeg4", "prores", "vp8", "vp9", "wmv1"];
declare const VIDEO_CODECS_UNCOMMON: readonly ["amv", "asv1", "asv2", "auravision", "binkvideo", "camstudio", "cinepak", "dirac", "dnxhd", "dnxhr", "dvvideo", "ffv1", "flv1", "h263", "h263p", "huffyuv", "indeo3", "indeo5", "jpeg2000", "jpegls", "lagarith", "mjpeg", "mjpegb", "mpeg1video", "mpeg2video", "msmpeg4v1", "msmpeg4v2", "msmpeg4v3", "rawvideo", "rv10", "rv20", "rv30", "rv40", "smacker", "snow", "sp5x", "svq1", "svq3", "theora", "tscc", "utvideo", "uyvy422", "v210", "vixl", "vp6", "vp6f", "wmv2", "wmv3", "yuyv422", "zlib", "zmbv"];
declare const VIDEO_CODECS: readonly ["av1", "h264", "hevc", "mpeg4", "prores", "vp8", "vp9", "wmv1", "amv", "asv1", "asv2", "auravision", "binkvideo", "camstudio", "cinepak", "dirac", "dnxhd", "dnxhr", "dvvideo", "ffv1", "flv1", "h263", "h263p", "huffyuv", "indeo3", "indeo5", "jpeg2000", "jpegls", "lagarith", "mjpeg", "mjpegb", "mpeg1video", "mpeg2video", "msmpeg4v1", "msmpeg4v2", "msmpeg4v3", "rawvideo", "rv10", "rv20", "rv30", "rv40", "smacker", "snow", "sp5x", "svq1", "svq3", "theora", "tscc", "utvideo", "uyvy422", "v210", "vixl", "vp6", "vp6f", "wmv2", "wmv3", "yuyv422", "zlib", "zmbv"];
type VideoCodec = (typeof VIDEO_CODECS)[number];
declare const VIDEO_EXTS_COMMON: readonly ["3gp", "avi", "f4v", "flv", "m4v", "mkv", "mov", "mp4", "ts", "webm", "wmv"];
declare const VIDEO_EXTS_UNCOMMON: readonly ["3gp2", "3gpp", "amv", "asf", "avi", "divx", "m2t", "m2ts", "m2v", "m4b", "m4p", "mpeg", "mpg", "mts", "ogv", "qt", "vob", "wm", "wmp"];
declare const VIDEO_EXTS: ("amv" | "3gp" | "avi" | "f4v" | "flv" | "m4v" | "mkv" | "mov" | "mp4" | "ts" | "webm" | "wmv" | "3gp2" | "3gpp" | "asf" | "divx" | "m2t" | "m2ts" | "m2v" | "m4b" | "m4p" | "mpeg" | "mpg" | "mts" | "ogv" | "qt" | "vob" | "wm" | "wmp")[];
type VideoExt = (typeof VIDEO_EXTS)[number];
declare const WEB_VIDEO_CODECS: string[];
declare const WEB_VIDEO_EXTS: string[];
interface _Constants {
    IMAGE_EXTS: readonly ImageExt[];
    TOOLTIP: {
        ENTER_DELAY: number;
        ENTER_NEXT_DELAY: number;
    };
    VIDEO_CODECS: readonly VideoCodec[];
    VIDEO_EXTS: readonly VideoExt[];
}
declare const _CONSTANTS: _Constants;

type DayJsInput = string | number | Date | dayjs.Dayjs;

declare const dateWithTzToIso: (dateStr: string) => string;

declare const isArchive: (filePath: string) => boolean;
declare const isArchivePart: (filePath: string) => boolean;
declare const isArchiveFirstPart: (filePath: string) => boolean;

declare const Fmt: {
    abbrevNum: (num: number) => string;
    bytes: (bytes: number) => string;
    camelCase: (str: string) => string;
    capitalize: (str: string, restLower?: boolean) => string;
    commas: (num: number) => string;
    decodeHtmlEntities: (s: string) => string;
    duration: (val: number, isMs?: boolean) => string;
    frameToSec: (frame: number, frameRate: number) => number;
    htmlEntityRegex: RegExp;
    jstr: (val: any) => string;
    leadZeros: (num: number, places: number) => string;
    pascalToSnake: (str: string) => string;
    regexEscape: (string: string, replacementOnly?: boolean) => string;
    sanitizeWinPath: (winPath: string, isBasename?: boolean) => string;
    snakeToPascal: (str: string) => string;
};

type IsPlainObject<T> = T extends object ? T extends any[] ? false : T extends Function ? false : true : false;
type NestedKeys<T> = {
    [K in keyof T]: K extends string ? IsPlainObject<T[K]> extends true ? K | `${K}.${NestedKeys<T[K]>}` : K : never;
}[keyof T];
declare const attempt: <T>(fn: () => Promise<T>, retries?: number, delay?: number) => Promise<T>;
declare const convertNestedKeys: (updates: Record<string, any>) => Record<string, any>;
declare const debounce: typeof debounce$1;
declare const deepClone: typeof cloneDeep;
type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
declare const deepMerge: typeof toMerged;
declare const handleErrors: <T>(fn: () => Promise<T>) => Promise<{
    data?: T;
    error?: string;
    success: boolean;
}>;
declare const isDeepEqual: typeof isEqual;
declare const isObject: (item: any) => boolean;
declare const rng: (min: number, max: number) => number;
declare const setObj: typeof set;
declare const sleep: (min: number, max?: number) => Promise<unknown>;
declare const throttle: typeof throttle$1;
declare const uuid: () => `${string}-${string}-${string}-${string}-${string}`;

export { AUDIO_CODECS, AUDIO_CODECS_COMMON, AUDIO_CODECS_UNCOMMON, type AudioCodec, type DayJsInput, type DeepPartial, Fmt, IMAGE_EXTS, IMAGE_EXTS_COMMON, IMAGE_EXTS_UNCOMMON, type ImageExt, type NestedKeys, VIDEO_CODECS, VIDEO_CODECS_COMMON, VIDEO_CODECS_UNCOMMON, VIDEO_EXTS, VIDEO_EXTS_COMMON, VIDEO_EXTS_UNCOMMON, type VideoCodec, type VideoExt, WEB_VIDEO_CODECS, WEB_VIDEO_EXTS, _CONSTANTS, type _Constants, arrayIntersect, attempt, bisectArrayChanges, centeredSlice, chunkArray, convertNestedKeys, countItems, dateWithTzToIso, debounce, deepClone, deepMerge, getArrayDiff, handleErrors, isArchive, isArchiveFirstPart, isArchivePart, isDeepEqual, isObject, objectToFloat32Array, range, rng, rotateArrayPos, setObj, sleep, sortArray, splitArray, sumArray, throttle, uniqueArrayFilter, uniqueArrayMerge, uuid };
