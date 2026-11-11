type TranslationDevice = "cpu" | "dml";
type TranslationQuantization = "fp16" | "fp32" | "q4" | "q4f16";
interface TranslationConfig {
    device: TranslationDevice;
    modelCachePath: string;
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
declare const TRANSLATION_DEVICE_OPTIONS: Array<{
    label: string;
    value: TranslationDevice;
}>;
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

export { TRANSLATION_DEVICE_OPTIONS, TRANSLATION_LANGUAGES, TRANSLATION_MODEL, TRANSLATION_QUANTIZATION_OPTIONS, getTranslationLanguage, makeTranslationPrompt };
export type { TranslationConfig, TranslationDevice, TranslationLanguage, TranslationQuantization };
