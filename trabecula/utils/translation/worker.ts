import path from "path";
import {
  makeTranslationPrompt,
  TRANSLATION_MODEL,
  TranslationConfig,
} from "trabecula/utils/translation";

interface ModelProgress {
  file?: string;
  progress?: number;
  status: "done" | "download" | "initiate" | "progress" | "ready";
}

interface TextGenerator {
  (
    prompt: string,
    options: {
      add_special_tokens: false;
      do_sample: false;
      max_new_tokens: number;
      repetition_penalty: number;
      return_full_text: false;
    },
  ): Promise<Array<{ generated_text: string }>>;
  dispose: () => Promise<void>;
  tokenizer: {
    apply_chat_template: (
      chat: Array<{ content: string; role: "user" }>,
      options: { add_generation_prompt: false; tokenize: false },
    ) => string;
    encode: (text: string) => number[];
  };
}

interface TransformersModule {
  env: { allowRemoteModels: boolean; cacheDir: string };
  pipeline: (
    task: "text-generation",
    model: string,
    options: {
      device: "cpu";
      dtype: TranslationConfig["quantization"];
      progress_callback: (progress: ModelProgress) => void;
    },
  ) => Promise<TextGenerator>;
}

export interface TranslateInput {
  config: TranslationConfig;
  /** The target language's code. */
  language: string;
  texts: string[];
}

export type TranslationProgress = (message: string, percent?: number) => void;

/** Room for translations to run longer than their source, as CJK to English ones do. */
const MAX_NEW_TOKENS_PER_SOURCE_TOKEN = 3;
const MIN_NEW_TOKENS = 32;
/** The repetition penalty Tencent recommends for HY-MT1.5. */
const REPETITION_PENALTY = 1.05;

/**
 * Translates texts with HY-MT1.5, loading the model on first use and again only when its settings
 * change. Blank texts are returned as they are.
 */
export const createTranslator = () => {
  let generator: TextGenerator = null;
  let generatorKey = "";
  let transformers: TransformersModule = null;

  const dispose = async () => {
    await generator?.dispose();
    generator = null;
    generatorKey = "";
  };

  const getGenerator = async (config: TranslationConfig, onProgress?: TranslationProgress) => {
    const key = `${config.modelCachePath}:${config.quantization}`;

    if (generator && generatorKey === key) return generator;

    await dispose();

    // Packaged apps reach node_modules via NODE_PATH, which require follows and import() doesn't.
    transformers ??= require("@huggingface/transformers") as TransformersModule;

    // The model comes only from the cache unless the app's settings allow downloading it.
    transformers.env.allowRemoteModels = config.modelDownloads;
    transformers.env.cacheDir = path.resolve(config.modelCachePath);

    let reportedProgress = -1;

    onProgress?.("Preparing translation model.");

    // On DirectML, the model's Q4 and Q4F16 builds returned broken translations, so it runs on CPU.
    generator = await transformers.pipeline("text-generation", TRANSLATION_MODEL, {
      device: "cpu",
      dtype: config.quantization,
      progress_callback: ({ file, progress, status }) => {
        if (status === "ready") {
          onProgress?.("Translation model loaded.");
        } else if (status === "progress" && progress !== undefined) {
          const percent = Math.round(progress);

          if (reportedProgress !== percent) {
            reportedProgress = percent;

            if (percent === 100) onProgress?.("Loading translation model.");
            else onProgress?.(`Downloading translation model: ${file}.`, percent);
          }
        }
      },
    });

    generatorKey = key;

    return generator;
  };

  /** Loads the model ahead of translating, so loading reports its progress apart from translation. */
  const load = async (config: TranslationConfig, onProgress?: TranslationProgress) => {
    await getGenerator(config, onProgress);
  };

  const translate = async (
    { config, language, texts }: TranslateInput,
    onProgress?: TranslationProgress,
  ) => {
    const generate = await getGenerator(config, onProgress);
    const translations: string[] = [];

    for (const text of texts) {
      if (!text.trim()) translations.push(text);
      else {
        const source = text.trim();

        // Tencent's usage renders the chat without a generation prompt, so it ends in the template's
        // placeholder token rather than the assistant turn the pipeline's chat input adds.
        const prompt = generate.tokenizer.apply_chat_template(
          [{ content: makeTranslationPrompt(source, language), role: "user" }],
          { add_generation_prompt: false, tokenize: false },
        );

        const [output] = await generate(prompt, {
          add_special_tokens: false,
          do_sample: false,
          max_new_tokens:
            generate.tokenizer.encode(source).length * MAX_NEW_TOKENS_PER_SOURCE_TOKEN +
            MIN_NEW_TOKENS,
          repetition_penalty: REPETITION_PENALTY,
          return_full_text: false,
        });

        translations.push(output.generated_text.trim());
      }
    }

    return translations;
  };

  return { dispose, load, translate };
};
