/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans Variable", "sans-serif"],
    },
    extend: {
      colors: {
        purple: "#755cde",
        orange: "#f6a560",
        pink: "#f39e9e",
        red: "#eb7565",
        magenta: "#552049",
        black: "#030303",
        gray: "#7a746e",
        "light-cream": "#fff7f0",
        white: "#fff",
        typescript: "#3178c6",
        node: "#43853D",
        next: "#000000",
        tailwind: "#06B6D4",
        python: "#000000",
      },
      animation: {
        "fade-in-left": "fade-in-left 1s ease-in-out",
        "fade-in-right": "fade-in-right 1s ease-in-out",
        "fade-body": "fade-body 1s ease-in-out",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: "0.9",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0.9",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
