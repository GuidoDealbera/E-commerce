/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      screens: {
        "mg": {min: "370px"}
      },
    },
  },
  plugins: [],
}

