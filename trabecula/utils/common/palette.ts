import Color from "color";

/** Tailwind hues from shade 300 to 900, in hue order. */
export const PALETTE = {
  red: {
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  orange: {
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  amber: {
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  yellow: {
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
  },
  lime: {
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
  },
  green: {
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  emerald: {
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  teal: {
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  },
  cyan: {
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
  sky: {
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  blue: {
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  indigo: {
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  violet: {
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  purple: {
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
  },
  fuchsia: {
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
  pink: {
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
  rose: {
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },
  slate: {
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  stone: {
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  },
  neutral: {
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
} as const;

export type PaletteColor = (typeof PALETTE)[PaletteHue][PaletteShade];

export type PaletteHue = keyof typeof PALETTE;

export type PaletteShade = keyof (typeof PALETTE)[PaletteHue];

/** One row per hue. */
export const PALETTE_SWATCHES: PaletteColor[][] = Object.values(PALETTE).map((shades) =>
  Object.values(shades),
);

const PALETTE_NAMES = new Map<string, string>(
  Object.entries(PALETTE).flatMap(([hue, shades]) =>
    Object.entries(shades).map(([shade, hex]): [string, string] => [hex, `${hue} ${shade}`]),
  ),
);

const PALETTE_LABS = [...PALETTE_NAMES.keys()].map((hex) => ({
  hex: hex as PaletteColor,
  lab: Color(hex).lab().array(),
}));

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

const toDegrees = (radians: number) => ((((radians * 180) / Math.PI) % 360) + 360) % 360;

/**
 * CIEDE2000 color difference. Plain Lab distance bends hues in the blue-violet range, so purples
 * measure closer to indigo and blue than to other purples; this corrects hue, chroma, and
 * lightness so the nearest color is the one that looks most alike.
 */
const getColorDifference = ([l1, a1, b1]: number[], [l2, a2, b2]: number[]) => {
  const meanChroma = (Math.hypot(a1, b1) + Math.hypot(a2, b2)) / 2;
  const g = 0.5 * (1 - Math.sqrt(meanChroma ** 7 / (meanChroma ** 7 + 25 ** 7)));

  const a1Prime = a1 * (1 + g);
  const a2Prime = a2 * (1 + g);
  const c1 = Math.hypot(a1Prime, b1);
  const c2 = Math.hypot(a2Prime, b2);
  const h1 = c1 === 0 ? 0 : toDegrees(Math.atan2(b1, a1Prime));
  const h2 = c2 === 0 ? 0 : toDegrees(Math.atan2(b2, a2Prime));

  const hueGap = h2 - h1;
  const deltaHue =
    c1 * c2 === 0
      ? 0
      : Math.abs(hueGap) <= 180
        ? hueGap
        : hueGap > 180
          ? hueGap - 360
          : hueGap + 360;
  const deltaL = l2 - l1;
  const deltaC = c2 - c1;
  const deltaH = 2 * Math.sqrt(c1 * c2) * Math.sin(toRadians(deltaHue / 2));

  const meanL = (l1 + l2) / 2;
  const meanC = (c1 + c2) / 2;
  const meanH =
    c1 * c2 === 0
      ? h1 + h2
      : Math.abs(h1 - h2) <= 180
        ? (h1 + h2) / 2
        : h1 + h2 < 360
          ? (h1 + h2 + 360) / 2
          : (h1 + h2 - 360) / 2;

  const t =
    1 -
    0.17 * Math.cos(toRadians(meanH - 30)) +
    0.24 * Math.cos(toRadians(2 * meanH)) +
    0.32 * Math.cos(toRadians(3 * meanH + 6)) -
    0.2 * Math.cos(toRadians(4 * meanH - 63));
  const rotation = 30 * Math.exp(-(((meanH - 275) / 25) ** 2));
  const rotationC = 2 * Math.sqrt(meanC ** 7 / (meanC ** 7 + 25 ** 7));

  const scaleL = 1 + (0.015 * (meanL - 50) ** 2) / Math.sqrt(20 + (meanL - 50) ** 2);
  const scaleC = 1 + 0.045 * meanC;
  const scaleH = 1 + 0.015 * meanC * t;
  const rotationT = -Math.sin(toRadians(2 * rotation)) * rotationC;

  return Math.sqrt(
    (deltaL / scaleL) ** 2 +
      (deltaC / scaleC) ** 2 +
      (deltaH / scaleH) ** 2 +
      rotationT * (deltaC / scaleC) * (deltaH / scaleH),
  );
};

/** Finds the palette color that looks most like a color, by CIEDE2000 difference. */
export const getClosestPaletteColor = (color: string) => {
  const target = Color(color).lab().array();
  let closest: PaletteColor = null;
  let closestDistance = Infinity;

  for (const { hex, lab } of PALETTE_LABS) {
    const distance = getColorDifference(target, lab);

    if (distance < closestDistance) {
      closest = hex;
      closestDistance = distance;
    }
  }

  return closest;
};

export const getPaletteColorName = (color: string) =>
  PALETTE_NAMES.get(color?.toLowerCase()) ?? null;
