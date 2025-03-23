/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'custom': '800px', 
        'custom-1600': '1600px',  
        'custom-400':"400px"
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        "mon-futuris": ["Roboto", "sans-serif"],
        "mon-university": ["Mon_University", "sans-serif"],
      },
    },
  },
  plugins: [],
};