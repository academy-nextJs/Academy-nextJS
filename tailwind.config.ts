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
      colors:{
        grayBg: "var(--color-gray)",
      },
      backgroundColor: {
        base: "var(--color-main)",
        green: "var(--color-green)",
        gray: "var(--color-gray)",
        white: "var(--color-white)",
        graySecondary: "var(--color-secondary-gray)",
        purple: "var(--color-purple)",
        red: "var(--color-red)",
        black : "var(--color-Black)"
      },
      textColor: {
        white: "var(--color-white)",
        gray: "var(--color-text-gray)",
        purple: "var(--color-purple)",
        red: "var(--color-red)",
        green: "var(--color-green)",
        black : "var(--color-Black)"
      },
      borderColor: {
        gray: "var(--color-border-gray)",
        garyInGreen: "var(--color-gray)",
        white: "var(--color-white)",
        purple: "var(--color-purple)",
        red: "var(--color-red)",
        green: "var(--color-green)",
      },
      fontFamily: {
        "Peyda-100": "Peyda Thin",
        "Peyda-200": "Peyda ExtraLight",
        "Peyda-300": "Peyda Light",
        "Peyda-400": "Peyda Regular",
        "Peyda-500": "Peyda Medium",
        "Peyda-600": "Peyda DemiBold",
        "Peyda-700": "Peyda Bold",
        "Peyda-800": "Peyda ExtraBold",
        "Peyda-900": "Peyda black",
        "Peyda-Numeric": "Peyda Number" 
      },
      fontSize:{
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "44px",
        "8xl": "48px",
        "9xl": "52px",
        "10xl": "56px",
        "11xl": "60px",
        "12xl": "64px",
        "13xl": "68px",
        "14xl": "72px",
        "15xl": "76px",
        "16xl": "80px",
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
