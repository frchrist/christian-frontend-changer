const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      pink: colors.pink,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      sky: colors.sky,
      teal: colors.teal,
      purple: colors.violet,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
