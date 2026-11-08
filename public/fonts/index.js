import localFont from "next/font/local";

// Only Regular (400), Medium (500), Semibold (600) and Bold (700) are used —
// no italics anywhere in the codebase. Add weights back only when used.
export const calibre = localFont({
  src: [
    { path: "./Calibre/Calibre-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Calibre/Calibre-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Calibre/Calibre-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./Calibre/Calibre-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-calibre",
});

export const jetbrains_mono = localFont({
  src: "./JetBrainsMono/JetBrainsMono-var.woff2",
  weight: "100 800",
  style: "normal",
  display: "swap",
  variable: "--font-jetbrains-mono",
});
