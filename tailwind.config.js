/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "390px" },
        sm: { max: "768px" },
        "3xl": { min: "2000px" },
      },
      colors: {
        lightblue: "rgba(3, 176, 255, 1)",
        bgwhite: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
