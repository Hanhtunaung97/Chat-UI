/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0px 4px 6px rgba(0, 0, 0, 0.1)",
        "inset-lg": "inset 0px 8px 12px rgba(0, 0, 0, 0.15)", // Optional larger shadow
      },
      fontFamily: {
        headings: ["Rubik", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
