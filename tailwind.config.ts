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
        // Warm graphite base — neutral near-black, no blue cast
        ink: {
          950: "#08080a",
          900: "#0c0d10",
          800: "#131419",
          700: "#1c1e25",
          600: "#2b2e37",
        },
        // GitHub-green primary + lime; orange reserved for WIP/"en desarrollo".
        accent: {
          green: "#22c55e",
          emerald: "#10b981",
          lime: "#a3e635",
          mint: "#4ade80",
          orange: "#fb923c",
          amber: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-fraunces)", "ui-serif", "Georgia"],
        grotesk: ["var(--font-grotesk)", "ui-sans-serif", "system-ui"],
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
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(34,197,94,0.12), transparent 62%)",
      },
    },
  },
  plugins: [],
};

export default config;
