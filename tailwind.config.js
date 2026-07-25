module.exports = {
  content: [
    "./index.html", // Ensures Tailwind scans the index.html for classes
    "./src/**/*.{js,jsx,ts,tsx}" // Ensures Tailwind scans all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {}, // You can extend the default theme here if needed
  },
  plugins: [], // Add any plugins you need here
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
