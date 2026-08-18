const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f4f4f1",
      black: "#0a0a0a",
      purple: "#8b31ff",
      red: "#cf0000",
      green: "#c8f542",
      accent: "#c8f542",
      indigo: {
        light: "#d8ff6a",
        dark: "#c8f542",
      },
      gray: {
        light: {
          1: "#f4f4f1",
          2: "#d6d6d1",
          3: "#9a9a94",
          4: "#6f6f6a",
        },
        dark: {
          1: "#2a2a28",
          2: "#1c1c1a",
          3: "#161614",
          4: "#111110",
          5: "#0a0a0a",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-calibre)"],
      mono: ["var(--font-jetbrains-mono)"],
    },
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
