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
    
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
