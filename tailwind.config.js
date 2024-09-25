/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "kalameh-black": "kalameh-black",
      "kalameh-bold": "kalameh-bold",
      "kalameh-regular": "kalameh-regular",
    },
    extend: {
      colors: {
        darker: "#232324",
        lighter: "#e5e7ed",
        darkBox: "#343539",
        darkBox2: "#535455",
        blueText: "#0d6efd",
      },

      screens: {
        300: "320px",
      },

      boxShadow : {
        settings : "0 0 5px 1px rgba(0, 0, 0, 0.1);"
      },

      animation: {
        "loader-left": "loader-left 1s forwards",
        "loader-right": "loader-right 1s forwards",
        "bg-loader": "bg-loader 0.7s forwards",
      },

      keyframes: {
        "bg-loader": {
          "0%": { display: "fixed" },
          "100%": { display: "none" },
        },

        "loader-left": {
          "0%": { height: "0%" },
          "70%": { height: "100%", width: "50%" },
          "99%": { width: "0" },
          "100%": { width: "0", display: "none" },
        },

        "loader-right": {
          "0%": { height: "0%" },
          "70%": { height: "100%", width: "50%" },
          "99%": { width: "0" },
          "100%": { width: "0", display: "none" },
        },
      },
    },
  },
  plugins: [],
};
