import path from "path";
import { getLigaturesFromPath } from "ligatures";
import { Fmt } from "trabecula/utils/common";

export const FILE_DEF_ICONS: FileDef = {
  name: "icons",
  makeFile: async () => {
    const definitions = await Promise.all(
      [
        ["COUNTRY_FLAG_LIGATURES", "country-flags.woff2"],
        ["MUI_ICON_LIGATURES", "material-icons-round.woff2"],
      ].map(async ([name, filename]) => {
        const iconLigatures = new Map<string, string>(
          (await getLigaturesFromPath(path.resolve("trabecula/css/fonts", filename)))
            .sort()
            .map((ligature) => [Fmt.snakeToPascal(ligature), ligature]),
        );

        return `export const ${name} = {${[...iconLigatures]
          .sort()
          .map(([icon, ligature]) => `${JSON.stringify(icon)}: ${JSON.stringify(ligature)}`)
          .join(",\n")}} as const;`;
      }),
    );

    return `${definitions.join("\n")}\n
      export const ICON_LIGATURES = { ...COUNTRY_FLAG_LIGATURES, ...MUI_ICON_LIGATURES } as const;\n
      export type IconName = keyof typeof ICON_LIGATURES;\n
      export const ICON_NAMES = Object.keys(ICON_LIGATURES).sort() as readonly IconName[];\n
      export const MUI_ICONS = Object.keys(MUI_ICON_LIGATURES).sort() as readonly (keyof typeof MUI_ICON_LIGATURES)[];`;
  },
};
