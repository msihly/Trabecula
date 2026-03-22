export declare const Fmt: {
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
