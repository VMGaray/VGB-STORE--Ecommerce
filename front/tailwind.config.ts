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
        primary: "#b28cb1",
        secundant: "#c5a5c5",
        tertiary: "#d9bed8",
        quarternary: "#ecd6ec"
      },
    },
  },
  plugins: [],
};
export default config;
