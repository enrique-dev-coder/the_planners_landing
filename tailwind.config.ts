import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xl: "1280px",
      },
      colors: {
        "dark-main-bg": "#000000",
        "dark-main-text": "#ffffff",
        "bright-yellow": "#FFDD00",
      },
      keyframes: {
        newBounce: {
          "0%, 100%": {
            transform: "translateY(-8%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        newBounceAnim: "newBounce 1.25s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
