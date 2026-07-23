import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light editorial base — warm paper + ink text scale
        paper: "#f3f1ea",
        card: "#fffdf8",
        ink: {
          950: "#0e0e08",
          900: "#18180f",
          800: "#26261a",
          700: "#45453a",
          600: "#5a5a4d",
          500: "#7a7a6c",
          400: "#9a9a8b",
          300: "#c2bfb2",
        },
        // Restrained forest-green accent; warm ember for WIP/"en desarrollo".
        accent: {
          green: "#1c5b3a",
          emerald: "#1c5b3a",
          lime: "#3f7a4a",
          mint: "#2e6b45",
          orange: "#b4531b",
          amber: "#b4531b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-fraunces)", "ui-serif", "Georgia"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "Menlo"],
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 40s linear infinite",
        "slow-spin": "spin 20s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { "background-position": "-1000px 0" },
          "100%": { "background-position": "1000px 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(24,24,15,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,15,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(28,91,58,0.06), transparent 62%)",
      },
    },
  },
  plugins: [],
};

export default config;
