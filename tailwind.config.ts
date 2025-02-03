import type { Config } from "tailwindcss";
const {heroui} = require("@heroui/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js',
    "./node_modules/@heroui/theme/dist/components/button.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: "var(--color-main)",
        green: "var(--color-green)",
        gray: "var(--color-gray)",
        white: "var(--color-white)",
        graySecondary: "var(--color-secondary-gray)",
        purple: "var(--color-purple)",
        red: "var(--color-red)",
      },
      textColor: {
        white: "var(--color-white)",
        gray: "var(--color-text-gray)",
      },
      borderColor: {
        gray: "var(--color-border-gray)",
        garyInGreen: "var(--color-gray)",
      },

    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
