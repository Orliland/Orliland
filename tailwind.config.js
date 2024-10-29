/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      purple: "#755cde",
      orange: "#f6a560",
      pink: "#f39e9e",
      red: "#eb7565",
      green: "#61c4b7",
      magenta: "#552049",
      black: "#030303",
      gray: "#7a746e",
      "light-cream": "#fff7f0",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans Variable", "sans-serif"],
    },
    extend: {
      animation: {
        "fade-in-left": "fade-in-left 1s ease-in-out",
        "fade-in-right": "fade-in-right 1s ease-in-out",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
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
