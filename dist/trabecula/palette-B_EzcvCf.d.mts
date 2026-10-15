/** Tailwind hues from shade 300 to 900, in hue order. */
declare const PALETTE: {
    readonly red: {
        readonly 300: "#fca5a5";
        readonly 400: "#f87171";
        readonly 500: "#ef4444";
        readonly 600: "#dc2626";
        readonly 700: "#b91c1c";
        readonly 800: "#991b1b";
        readonly 900: "#7f1d1d";
    };
    readonly orange: {
        readonly 300: "#fdba74";
        readonly 400: "#fb923c";
        readonly 500: "#f97316";
        readonly 600: "#ea580c";
        readonly 700: "#c2410c";
        readonly 800: "#9a3412";
        readonly 900: "#7c2d12";
    };
    readonly amber: {
        readonly 300: "#fcd34d";
        readonly 400: "#fbbf24";
        readonly 500: "#f59e0b";
        readonly 600: "#d97706";
        readonly 700: "#b45309";
        readonly 800: "#92400e";
        readonly 900: "#78350f";
    };
    readonly yellow: {
        readonly 300: "#fde047";
        readonly 400: "#facc15";
        readonly 500: "#eab308";
        readonly 600: "#ca8a04";
        readonly 700: "#a16207";
        readonly 800: "#854d0e";
        readonly 900: "#713f12";
    };
    readonly lime: {
        readonly 300: "#bef264";
        readonly 400: "#a3e635";
        readonly 500: "#84cc16";
        readonly 600: "#65a30d";
        readonly 700: "#4d7c0f";
        readonly 800: "#3f6212";
        readonly 900: "#365314";
    };
    readonly green: {
        readonly 300: "#86efac";
        readonly 400: "#4ade80";
        readonly 500: "#22c55e";
        readonly 600: "#16a34a";
        readonly 700: "#15803d";
        readonly 800: "#166534";
        readonly 900: "#14532d";
    };
    readonly emerald: {
        readonly 300: "#6ee7b7";
        readonly 400: "#34d399";
        readonly 500: "#10b981";
        readonly 600: "#059669";
        readonly 700: "#047857";
        readonly 800: "#065f46";
        readonly 900: "#064e3b";
    };
    readonly teal: {
        readonly 300: "#5eead4";
        readonly 400: "#2dd4bf";
        readonly 500: "#14b8a6";
        readonly 600: "#0d9488";
        readonly 700: "#0f766e";
        readonly 800: "#115e59";
        readonly 900: "#134e4a";
    };
    readonly cyan: {
        readonly 300: "#67e8f9";
        readonly 400: "#22d3ee";
        readonly 500: "#06b6d4";
        readonly 600: "#0891b2";
        readonly 700: "#0e7490";
        readonly 800: "#155e75";
        readonly 900: "#164e63";
    };
    readonly sky: {
        readonly 300: "#7dd3fc";
        readonly 400: "#38bdf8";
        readonly 500: "#0ea5e9";
        readonly 600: "#0284c7";
        readonly 700: "#0369a1";
        readonly 800: "#075985";
        readonly 900: "#0c4a6e";
    };
    readonly blue: {
        readonly 300: "#93c5fd";
        readonly 400: "#60a5fa";
        readonly 500: "#3b82f6";
        readonly 600: "#2563eb";
        readonly 700: "#1d4ed8";
        readonly 800: "#1e40af";
        readonly 900: "#1e3a8a";
    };
    readonly indigo: {
        readonly 300: "#a5b4fc";
        readonly 400: "#818cf8";
        readonly 500: "#6366f1";
        readonly 600: "#4f46e5";
        readonly 700: "#4338ca";
        readonly 800: "#3730a3";
        readonly 900: "#312e81";
    };
    readonly violet: {
        readonly 300: "#c4b5fd";
        readonly 400: "#a78bfa";
        readonly 500: "#8b5cf6";
        readonly 600: "#7c3aed";
        readonly 700: "#6d28d9";
        readonly 800: "#5b21b6";
        readonly 900: "#4c1d95";
    };
    readonly purple: {
        readonly 300: "#d8b4fe";
        readonly 400: "#c084fc";
        readonly 500: "#a855f7";
        readonly 600: "#9333ea";
        readonly 700: "#7e22ce";
        readonly 800: "#6b21a8";
        readonly 900: "#581c87";
    };
    readonly fuchsia: {
        readonly 300: "#f0abfc";
        readonly 400: "#e879f9";
        readonly 500: "#d946ef";
        readonly 600: "#c026d3";
        readonly 700: "#a21caf";
        readonly 800: "#86198f";
        readonly 900: "#701a75";
    };
    readonly pink: {
        readonly 300: "#f9a8d4";
        readonly 400: "#f472b6";
        readonly 500: "#ec4899";
        readonly 600: "#db2777";
        readonly 700: "#be185d";
        readonly 800: "#9d174d";
        readonly 900: "#831843";
    };
    readonly rose: {
        readonly 300: "#fda4af";
        readonly 400: "#fb7185";
        readonly 500: "#f43f5e";
        readonly 600: "#e11d48";
        readonly 700: "#be123c";
        readonly 800: "#9f1239";
        readonly 900: "#881337";
    };
    readonly slate: {
        readonly 300: "#cbd5e1";
        readonly 400: "#94a3b8";
        readonly 500: "#64748b";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1e293b";
        readonly 900: "#0f172a";
    };
    readonly stone: {
        readonly 300: "#d6d3d1";
        readonly 400: "#a8a29e";
        readonly 500: "#78716c";
        readonly 600: "#57534e";
        readonly 700: "#44403c";
        readonly 800: "#292524";
        readonly 900: "#1c1917";
    };
    readonly neutral: {
        readonly 300: "#d4d4d4";
        readonly 400: "#a3a3a3";
        readonly 500: "#737373";
        readonly 600: "#525252";
        readonly 700: "#404040";
        readonly 800: "#262626";
        readonly 900: "#171717";
    };
};
type PaletteColor = (typeof PALETTE)[PaletteHue][PaletteShade];
type PaletteHue = keyof typeof PALETTE;
type PaletteShade = keyof (typeof PALETTE)[PaletteHue];
/** One row per hue. */
declare const PALETTE_SWATCHES: PaletteColor[][];
/** Finds the palette color that looks most like a color, by CIEDE2000 difference. */
declare const getClosestPaletteColor: (color: string) => PaletteColor;
declare const getPaletteColorName: (color: string) => string;

export { type PaletteColor as P, PALETTE as a, PALETTE_SWATCHES as b, type PaletteHue as c, type PaletteShade as d, getPaletteColorName as e, getClosestPaletteColor as g };
