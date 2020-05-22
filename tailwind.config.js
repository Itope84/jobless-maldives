const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: {
        default: "#929598",
        light: "#f2f1f1",
        dark: "#5e5e60",
      },
      red: {
        default: "#ee1c25",
        ...colors.red,
      },
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      orange: "#f5821f",
      teal: "#01bbb1",
      primary: "#01bbb1",
      font: { default: "#6d6e70", light: "#b8b7b7", white: "#e5e5e5" },
    },
  },
  variants: {},
  plugins: [],
};
