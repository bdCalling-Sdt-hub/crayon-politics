import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1420px",
      }
    },
    extend: {
      colors: {
        primary: "#EEEEEE",
        secondary: "#555555",
        base: "#F8F1E6",
        third: "#f97316 "
      }
    },
  },
  plugins: [],
};
export default config;
