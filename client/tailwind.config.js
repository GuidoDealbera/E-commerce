/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Hooks/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins, sans-serif",
        Jost: "Jost, sans-serif",
      },
      screens: {
        "md/lg": "920px",
        mg: "420px",
      },
    },
  },
  plugins: [],
};
