/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "800px",
        "custom-1600": "1600px",
        "custom-400": "400px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {transform: "translateX(0%)"},
          "100%": {transform: "translateX(-50%)"},
        },
      },
      fontFamily: {
        mon_futuris: ["Futuris", "sans-serif"],
        mon_university: ["Mon_University", "sans-serif"],
      },
      colors: {
        gradientStart: "rgba(56, 113, 139, 0.1)", // #38718B with 10% opacity
        gradientEnd: "rgba(15, 30, 37, 0.1)", // #0F1E25 with 10% opacity
      },
    },
  },
  plugins: [],
};
