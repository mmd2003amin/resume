/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darker: "#232324",
        lighter: "#e5e7ed",
        darkBox: "#343539",
        blueText: "#0d6efd",
      },

      screens: {
        300: "320px",
      },
    },
  },
  plugins: [],
};
