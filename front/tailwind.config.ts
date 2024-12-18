import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6482AD",
        secundant: "#7FA1C3",
        tertiary: "#E2DAD6",
        quarternary: "#F5EDED"
      },
    },
  },
  plugins: [],
};
export default config;
