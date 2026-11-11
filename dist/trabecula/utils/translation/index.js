var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// trabecula/utils/translation/index.ts
var translation_exports = {};
__export(translation_exports, {
  TRANSLATION_DEVICE_OPTIONS: () => TRANSLATION_DEVICE_OPTIONS,
  TRANSLATION_LANGUAGES: () => TRANSLATION_LANGUAGES,
  TRANSLATION_MODEL: () => TRANSLATION_MODEL,
  TRANSLATION_QUANTIZATION_OPTIONS: () => TRANSLATION_QUANTIZATION_OPTIONS,
  getTranslationLanguage: () => getTranslationLanguage,
  makeTranslationPrompt: () => makeTranslationPrompt
});
module.exports = __toCommonJS(translation_exports);
var TRANSLATION_MODEL = "onnx-community/HY-MT1.5-1.8B-ONNX";
var TRANSLATION_DEVICE_OPTIONS = [
  { label: "CPU", value: "cpu" },
  { label: "DirectML", value: "dml" }
];
var TRANSLATION_LANGUAGES = [
  { chineseName: "\u963F\u62C9\u4F2F\u8BED", label: "Arabic", value: "ar" },
  { chineseName: "\u5B5F\u52A0\u62C9\u8BED", label: "Bengali", value: "bn" },
  { chineseName: "\u7F05\u7538\u8BED", label: "Burmese", value: "my" },
  { chineseName: "\u7CA4\u8BED", label: "Cantonese", value: "yue" },
  { chineseName: "\u4E2D\u6587", label: "Chinese", value: "zh" },
  { chineseName: "\u6377\u514B\u8BED", label: "Czech", value: "cs" },
  { chineseName: "\u8377\u5170\u8BED", label: "Dutch", value: "nl" },
  { chineseName: "\u82F1\u8BED", label: "English", value: "en" },
  { chineseName: "\u83F2\u5F8B\u5BBE\u8BED", label: "Filipino", value: "tl" },
  { chineseName: "\u6CD5\u8BED", label: "French", value: "fr" },
  { chineseName: "\u5FB7\u8BED", label: "German", value: "de" },
  { chineseName: "\u53E4\u5409\u62C9\u7279\u8BED", label: "Gujarati", value: "gu" },
  { chineseName: "\u5E0C\u4F2F\u6765\u8BED", label: "Hebrew", value: "he" },
  { chineseName: "\u5370\u5730\u8BED", label: "Hindi", value: "hi" },
  { chineseName: "\u5370\u5C3C\u8BED", label: "Indonesian", value: "id" },
  { chineseName: "\u610F\u5927\u5229\u8BED", label: "Italian", value: "it" },
  { chineseName: "\u65E5\u8BED", label: "Japanese", value: "ja" },
  { chineseName: "\u54C8\u8428\u514B\u8BED", label: "Kazakh", value: "kk" },
  { chineseName: "\u9AD8\u68C9\u8BED", label: "Khmer", value: "km" },
  { chineseName: "\u97E9\u8BED", label: "Korean", value: "ko" },
  { chineseName: "\u9A6C\u6765\u8BED", label: "Malay", value: "ms" },
  { chineseName: "\u9A6C\u62C9\u5730\u8BED", label: "Marathi", value: "mr" },
  { chineseName: "\u8499\u53E4\u8BED", label: "Mongolian", value: "mn" },
  { chineseName: "\u6CE2\u65AF\u8BED", label: "Persian", value: "fa" },
  { chineseName: "\u6CE2\u5170\u8BED", label: "Polish", value: "pl" },
  { chineseName: "\u8461\u8404\u7259\u8BED", label: "Portuguese", value: "pt" },
  { chineseName: "\u4FC4\u8BED", label: "Russian", value: "ru" },
  { chineseName: "\u897F\u73ED\u7259\u8BED", label: "Spanish", value: "es" },
  { chineseName: "\u6CF0\u7C73\u5C14\u8BED", label: "Tamil", value: "ta" },
  { chineseName: "\u6CF0\u5362\u56FA\u8BED", label: "Telugu", value: "te" },
  { chineseName: "\u6CF0\u8BED", label: "Thai", value: "th" },
  { chineseName: "\u85CF\u8BED", label: "Tibetan", value: "bo" },
  { chineseName: "\u7E41\u4F53\u4E2D\u6587", label: "Traditional Chinese", value: "zh-Hant" },
  { chineseName: "\u571F\u8033\u5176\u8BED", label: "Turkish", value: "tr" },
  { chineseName: "\u4E4C\u514B\u5170\u8BED", label: "Ukrainian", value: "uk" },
  { chineseName: "\u4E4C\u5C14\u90FD\u8BED", label: "Urdu", value: "ur" },
  { chineseName: "\u7EF4\u543E\u5C14\u8BED", label: "Uyghur", value: "ug" },
  { chineseName: "\u8D8A\u5357\u8BED", label: "Vietnamese", value: "vi" }
];
var TRANSLATION_QUANTIZATION_OPTIONS = [
  { label: "FP16", value: "fp16" },
  { label: "FP32", value: "fp32" },
  { label: "Q4", value: "q4" },
  { label: "Q4F16", value: "q4f16" }
];
var CHINESE_LANGUAGES = /* @__PURE__ */ new Set(["yue", "zh", "zh-Hant"]);
var HAN_RANGES = [
  [13312, 19903],
  [19968, 40959],
  [63744, 64255]
];
var KANA_AND_HANGUL_RANGES = [
  [4352, 4607],
  [12352, 12543],
  [12592, 12687],
  [12784, 12799],
  [44032, 55215],
  [65382, 65439]
];
var hasCharacterIn = (text, ranges) => [...text].some((char) => {
  const codePoint = char.codePointAt(0);
  return ranges.some(([start, end]) => codePoint >= start && codePoint <= end);
});
var isChineseText = (text) => hasCharacterIn(text, HAN_RANGES) && !hasCharacterIn(text, KANA_AND_HANGUL_RANGES);
var getTranslationLanguage = (language) => {
  const translationLanguage = TRANSLATION_LANGUAGES.find(({ value }) => value === language);
  if (!translationLanguage) throw new Error(`Unsupported translation language: ${language}.`);
  return translationLanguage;
};
var makeTranslationPrompt = (text, language) => {
  const { chineseName, label } = getTranslationLanguage(language);
  if (CHINESE_LANGUAGES.has(language) || isChineseText(text))
    return `\u5C06\u4EE5\u4E0B\u6587\u672C\u7FFB\u8BD1\u4E3A${chineseName}\uFF0C\u6CE8\u610F\u53EA\u9700\u8981\u8F93\u51FA\u7FFB\u8BD1\u540E\u7684\u7ED3\u679C\uFF0C\u4E0D\u8981\u989D\u5916\u89E3\u91CA\uFF1A

${text}`;
  else
    return `Translate the following segment into ${label}, without additional explanation.

${text}`;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TRANSLATION_DEVICE_OPTIONS,
  TRANSLATION_LANGUAGES,
  TRANSLATION_MODEL,
  TRANSLATION_QUANTIZATION_OPTIONS,
  getTranslationLanguage,
  makeTranslationPrompt
});
//# sourceMappingURL=index.js.map