import chalk from "chalk";
import { CLIENT_FILE_DEFS } from "trabecula/generator/file-defs";
import { createFiles, ROOT_PATH } from "trabecula/utils/generator";

(async () => {
  try {
    console.log(chalk.cyan("\nGenerating files..."));
    await createFiles(`${ROOT_PATH}/_generated/client`, CLIENT_FILE_DEFS);
    console.log(chalk.green("\nDone!"));
  } catch (err) {
    console.error(chalk.red(err.message));
  }
})();
