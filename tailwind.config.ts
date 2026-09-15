import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050714",
        nebula: "#100d2e",
        "nebula-light": "#1b1748",
        ink: "#0a0821",
        starlight: "#f4f2ff",
        mist: "#a9a4d4",
        teal: {
          DEFAULT: "#35e0b8",
          soft: "#8ff2d9",
        },
        violet: {
          DEFAULT: "#9d7bf0",
          soft: "#c6b4ff",
        },
        rose: {
          DEFAULT: "#f0699d",
          soft: "#ffa9c8",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        aurora:
          "radial-gradient(120% 90% at 15% 0%, rgba(157,123,240,0.28) 0%, rgba(157,123,240,0) 55%), radial-gradient(100% 80% at 85% 15%, rgba(53,224,184,0.22) 0%, rgba(53,224,184,0) 55%), radial-gradient(140% 100% at 50% 100%, rgba(240,105,157,0.16) 0%, rgba(240,105,157,0) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
