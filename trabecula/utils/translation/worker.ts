import path from "path";
import {
  makeTranslationPrompt,
  TRANSLATION_MODEL,
  TranslationConfig,
  TranslationDevice,
} from "trabecula/utils/translation";

type Chat = Array<{ content: string; role: "assistant" | "user" }>;

interface ModelProgress {
  file?: string;
  progress?: number;
  status: "done" | "download" | "initiate" | "progress" | "ready";
}

interface TextGenerator {
  (
    chat: Chat,
    options: { do_sample: false; max_new_tokens: number; repetition_penalty: number },
  ): Promise<Array<{ generated_text: Chat }>>;
  dispose: () => Promise<void>;
  tokenizer: { encode: (text: string) => number[] };
}

interface TransformersModule {
  env: { allowRemoteModels: boolean; cacheDir: string };
  pipeline: (
    task: "text-generation",
    model: string,
    options: {
      device: TranslationDevice;
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
    const key = `${config.device}:${config.modelCachePath}:${config.quantization}`;

    if (generator && generatorKey === key) return generator;

    await dispose();

    // Packaged apps reach node_modules via NODE_PATH, which require follows and import() doesn't.
    transformers ??= require("@huggingface/transformers") as TransformersModule;

    // The model comes only from the cache unless the app's settings allow downloading it.
    transformers.env.allowRemoteModels = config.modelDownloads;
    transformers.env.cacheDir = path.resolve(config.modelCachePath);

    let reportedProgress = -1;

    onProgress?.("Preparing translation model.");

    const loadGenerator = (device: TranslationDevice) =>
      transformers.pipeline("text-generation", TRANSLATION_MODEL, {
        device,
        dtype: config.quantization,
        progress_callback: ({ file, progress, status }) => {
          if (status === "ready") {
            onProgress?.(`Translation model loaded on ${device === "dml" ? "GPU" : "CPU"}.`);
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

    if (config.device === "cpu") generator = await loadGenerator("cpu");
    else {
      try {
        generator = await loadGenerator(config.device);
      } catch (error) {
        console.warn("Failed to initialize GPU translation. Falling back to CPU.", error);
        onProgress?.("GPU translation unavailable. Falling back to CPU.");
        generator = await loadGenerator("cpu");
      }
    }

    generatorKey = key;

    return generator;
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

        const [output] = await generate(
          [{ content: makeTranslationPrompt(source, language), role: "user" }],
          {
            do_sample: false,
            max_new_tokens:
              generate.tokenizer.encode(source).length * MAX_NEW_TOKENS_PER_SOURCE_TOKEN +
              MIN_NEW_TOKENS,
            repetition_penalty: REPETITION_PENALTY,
          },
        );

        translations.push(output.generated_text.at(-1).content.trim());
      }
    }

    return translations;
  };

  return { dispose, translate };
};
