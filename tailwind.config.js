/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        tech: {
          dark: "#0f172a",
          light: "#1e293b",
          border: "#334155",
          accent: "#3b82f6",
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff",
          },
          "100%": {
            boxShadow: "0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff",
          },
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 243, 255, 0.5)",
        "glow-lg": "0 0 30px rgba(0, 243, 255, 0.7)",
        neon: "0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        cardHover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      backdropBlur: {
        tech: "20px",
      },
    },
  },
  plugins: [],
};
