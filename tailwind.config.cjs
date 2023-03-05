/** @type {import('tailwindcss').Config} */

// import { DefaultColors as colors } from 'tailwindcss/types/generated/colors';
const colors = require("tailwindcss/colors");

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
        secondary: colors.slate,
        ternary: colors.purple,
      },
    },
  },
  plugins: [],
};

module.exports = config;
