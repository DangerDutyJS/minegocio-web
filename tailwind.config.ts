import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warm: {
          DEFAULT: "#EDE8DF",
          muted: "#7A7068",
          dim: "#3A342C",
        },
        gold: {
          DEFAULT: "#C8911A",
          light: "#E8AE30",
        },
        surface: {
          DEFAULT: "#181410",
          alt: "#0F0D0A",
          border: "#252018",
        },
        // Legacy — used in comprar/page.tsx
        onyx: "#0F0F0F",
        obsidian: "#1A1A1A",
        coal: "#2B2B2B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
