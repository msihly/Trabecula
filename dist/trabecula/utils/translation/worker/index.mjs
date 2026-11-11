import {
  TRANSLATION_MODEL,
  makeTranslationPrompt
} from "../../../chunk-W3RHUJUU.mjs";
import {
  __async
} from "../../../chunk-OJBUL6U5.mjs";

// trabecula/utils/translation/worker.ts
import path from "path";
var MAX_NEW_TOKENS_PER_SOURCE_TOKEN = 3;
var MIN_NEW_TOKENS = 32;
var REPETITION_PENALTY = 1.05;
var createTranslator = () => {
  let generator = null;
  let generatorKey = "";
  let transformers = null;
  const dispose = () => __async(null, null, function* () {
    yield generator == null ? void 0 : generator.dispose();
    generator = null;
    generatorKey = "";
  });
  const getGenerator = (config, onProgress) => __async(null, null, function* () {
    const key = `${config.device}:${config.modelCachePath}:${config.quantization}`;
    if (generator && generatorKey === key) return generator;
    yield dispose();
    transformers != null ? transformers : transformers = yield import("@huggingface/transformers");
    transformers.env.cacheDir = path.resolve(config.modelCachePath);
    let reportedProgress = -1;
    onProgress == null ? void 0 : onProgress("Preparing translation model.");
    const loadGenerator = (device) => transformers.pipeline("text-generation", TRANSLATION_MODEL, {
      device,
      dtype: config.quantization,
      progress_callback: ({ file, progress, status }) => {
        if (status === "ready") {
          onProgress == null ? void 0 : onProgress(`Translation model loaded on ${device === "dml" ? "GPU" : "CPU"}.`);
        } else if (status === "progress" && progress !== void 0) {
          const percent = Math.round(progress);
          if (reportedProgress !== percent) {
            reportedProgress = percent;
            if (percent === 100) onProgress == null ? void 0 : onProgress("Loading translation model.");
            else onProgress == null ? void 0 : onProgress(`Downloading translation model: ${file}.`, percent);
          }
        }
      }
    });
    if (config.device === "cpu") generator = yield loadGenerator("cpu");
    else {
      try {
        generator = yield loadGenerator(config.device);
      } catch (error) {
        console.warn("Failed to initialize GPU translation. Falling back to CPU.", error);
        onProgress == null ? void 0 : onProgress("GPU translation unavailable. Falling back to CPU.");
        generator = yield loadGenerator("cpu");
      }
    }
    generatorKey = key;
    return generator;
  });
  const translate = (_0, _1) => __async(null, [_0, _1], function* ({ config, language, texts }, onProgress) {
    const generate = yield getGenerator(config, onProgress);
    const translations = [];
    for (const text of texts) {
      if (!text.trim()) translations.push(text);
      else {
        const source = text.trim();
        const [output] = yield generate(
          [{ content: makeTranslationPrompt(source, language), role: "user" }],
          {
            do_sample: false,
            max_new_tokens: generate.tokenizer.encode(source).length * MAX_NEW_TOKENS_PER_SOURCE_TOKEN + MIN_NEW_TOKENS,
            repetition_penalty: REPETITION_PENALTY
          }
        );
        translations.push(output.generated_text.at(-1).content.trim());
      }
    }
    return translations;
  });
  return { dispose, translate };
};
export {
  createTranslator
};
//# sourceMappingURL=index.mjs.map