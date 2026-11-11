export type TranslationQuantization = "fp16" | "fp32" | "q4" | "q4f16";

export interface TranslationConfig {
  modelCachePath: string;
  /** Downloads the model from Hugging Face when it isn't in the model cache. */
  modelDownloads: boolean;
  quantization: TranslationQuantization;
}

export interface TranslationLanguage {
  /** The language's name in the model's Chinese prompt. */
  chineseName: string;
  label: string;
  value: string;
}

/** Tencent's HY-MT1.5-1.8B, exported to ONNX for Transformers.js. */
export const TRANSLATION_MODEL = "onnx-community/HY-MT1.5-1.8B-ONNX";

/** The languages HY-MT1.5 translates between, as its model card names them. */
export const TRANSLATION_LANGUAGES: TranslationLanguage[] = [
  { chineseName: "阿拉伯语", label: "Arabic", value: "ar" },
  { chineseName: "孟加拉语", label: "Bengali", value: "bn" },
  { chineseName: "缅甸语", label: "Burmese", value: "my" },
  { chineseName: "粤语", label: "Cantonese", value: "yue" },
  { chineseName: "中文", label: "Chinese", value: "zh" },
  { chineseName: "捷克语", label: "Czech", value: "cs" },
  { chineseName: "荷兰语", label: "Dutch", value: "nl" },
  { chineseName: "英语", label: "English", value: "en" },
  { chineseName: "菲律宾语", label: "Filipino", value: "tl" },
  { chineseName: "法语", label: "French", value: "fr" },
  { chineseName: "德语", label: "German", value: "de" },
  { chineseName: "古吉拉特语", label: "Gujarati", value: "gu" },
  { chineseName: "希伯来语", label: "Hebrew", value: "he" },
  { chineseName: "印地语", label: "Hindi", value: "hi" },
  { chineseName: "印尼语", label: "Indonesian", value: "id" },
  { chineseName: "意大利语", label: "Italian", value: "it" },
  { chineseName: "日语", label: "Japanese", value: "ja" },
  { chineseName: "哈萨克语", label: "Kazakh", value: "kk" },
  { chineseName: "高棉语", label: "Khmer", value: "km" },
  { chineseName: "韩语", label: "Korean", value: "ko" },
  { chineseName: "马来语", label: "Malay", value: "ms" },
  { chineseName: "马拉地语", label: "Marathi", value: "mr" },
  { chineseName: "蒙古语", label: "Mongolian", value: "mn" },
  { chineseName: "波斯语", label: "Persian", value: "fa" },
  { chineseName: "波兰语", label: "Polish", value: "pl" },
  { chineseName: "葡萄牙语", label: "Portuguese", value: "pt" },
  { chineseName: "俄语", label: "Russian", value: "ru" },
  { chineseName: "西班牙语", label: "Spanish", value: "es" },
  { chineseName: "泰米尔语", label: "Tamil", value: "ta" },
  { chineseName: "泰卢固语", label: "Telugu", value: "te" },
  { chineseName: "泰语", label: "Thai", value: "th" },
  { chineseName: "藏语", label: "Tibetan", value: "bo" },
  { chineseName: "繁体中文", label: "Traditional Chinese", value: "zh-Hant" },
  { chineseName: "土耳其语", label: "Turkish", value: "tr" },
  { chineseName: "乌克兰语", label: "Ukrainian", value: "uk" },
  { chineseName: "乌尔都语", label: "Urdu", value: "ur" },
  { chineseName: "维吾尔语", label: "Uyghur", value: "ug" },
  { chineseName: "越南语", label: "Vietnamese", value: "vi" },
];

/** The precisions the ONNX export ships. */
export const TRANSLATION_QUANTIZATION_OPTIONS: Array<{
  label: string;
  value: TranslationQuantization;
}> = [
  { label: "FP16", value: "fp16" },
  { label: "FP32", value: "fp32" },
  { label: "Q4", value: "q4" },
  { label: "Q4F16", value: "q4f16" },
];

const CHINESE_LANGUAGES = new Set(["yue", "zh", "zh-Hant"]);

/** CJK Unified Ideographs, Extension A, and Compatibility Ideographs. */
const HAN_RANGES = [
  [0x3400, 0x4dbf],
  [0x4e00, 0x9fff],
  [0xf900, 0xfaff],
];

/** The Hangul, Hiragana, Katakana, and Halfwidth Katakana blocks. */
const KANA_AND_HANGUL_RANGES = [
  [0x1100, 0x11ff],
  [0x3040, 0x30ff],
  [0x3130, 0x318f],
  [0x31f0, 0x31ff],
  [0xac00, 0xd7af],
  [0xff66, 0xff9f],
];

const hasCharacterIn = (text: string, ranges: number[][]) =>
  [...text].some((char) => {
    const codePoint = char.codePointAt(0);
    return ranges.some(([start, end]) => codePoint >= start && codePoint <= end);
  });

/** Han characters without the kana or hangul that Japanese and Korean text would have. */
const isChineseText = (text: string) =>
  hasCharacterIn(text, HAN_RANGES) && !hasCharacterIn(text, KANA_AND_HANGUL_RANGES);

export const getTranslationLanguage = (language: string) => {
  const translationLanguage = TRANSLATION_LANGUAGES.find(({ value }) => value === language);
  if (!translationLanguage) throw new Error(`Unsupported translation language: ${language}.`);
  return translationLanguage;
};

/** The model card's prompts: its Chinese one for translations to or from Chinese. */
export const makeTranslationPrompt = (text: string, language: string) => {
  const { chineseName, label } = getTranslationLanguage(language);

  if (CHINESE_LANGUAGES.has(language) || isChineseText(text))
    return `将以下文本翻译为${chineseName}，注意只需要输出翻译后的结果，不要额外解释：\n\n${text}`;
  else
    return `Translate the following segment into ${label}, without additional explanation.\n\n${text}`;
};
