import { TranslationConfig } from '../index.js';

interface TranslateInput {
    config: TranslationConfig;
    /** The target language's code. */
    language: string;
    texts: string[];
}
type TranslationProgress = (message: string, percent?: number) => void;
/**
 * Translates texts with HY-MT1.5, loading the model on first use and again only when its settings
 * change. Blank texts are returned as they are.
 */
declare const createTranslator: () => {
    dispose: () => Promise<void>;
    translate: ({ config, language, texts }: TranslateInput, onProgress?: TranslationProgress) => Promise<string[]>;
};

export { createTranslator };
export type { TranslateInput, TranslationProgress };
