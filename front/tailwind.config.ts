import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b28cb1",
        secundant: "#c5a5c5",
        tertiary: "#d9bed8",
        quarternary: "#ecd6ec"
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
  
};
export default config;
