type TranslationQuantization = "fp16" | "fp32" | "q4" | "q4f16";
interface TranslationConfig {
    modelCachePath: string;
    /** Downloads the model from Hugging Face when it isn't in the model cache. */
    modelDownloads: boolean;
    quantization: TranslationQuantization;
}
interface TranslationLanguage {
    /** The language's name in the model's Chinese prompt. */
    chineseName: string;
    label: string;
    value: string;
}
/** Tencent's HY-MT1.5-1.8B, exported to ONNX for Transformers.js. */
declare const TRANSLATION_MODEL = "onnx-community/HY-MT1.5-1.8B-ONNX";
/** The languages HY-MT1.5 translates between, as its model card names them. */
declare const TRANSLATION_LANGUAGES: TranslationLanguage[];
/** The precisions the ONNX export ships. */
declare const TRANSLATION_QUANTIZATION_OPTIONS: Array<{
    label: string;
    value: TranslationQuantization;
}>;
declare const getTranslationLanguage: (language: string) => TranslationLanguage;
/** The model card's prompts: its Chinese one for translations to or from Chinese. */
declare const makeTranslationPrompt: (text: string, language: string) => string;

export { TRANSLATION_LANGUAGES, TRANSLATION_MODEL, TRANSLATION_QUANTIZATION_OPTIONS, getTranslationLanguage, makeTranslationPrompt };
export type { TranslationConfig, TranslationLanguage, TranslationQuantization };
