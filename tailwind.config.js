const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Oxygen", "Noto Sans", "sans-serif"],
      },
      width: {
        120: "30rem",
        "30p": "30px",
      },
      height: {
        120: "30rem",
        152: "38rem",
        148: "37rem",
      },
      margin: {
        19: "4.95rem",
      },
    },
    colors: {
      ...colors,
      core: {
        black: {
          100: "#000000",
          200: "#111010",
        },
        white: {
          100: "#ffffff",
        },
        gray: {
          100: "#e7e7e7",
          200: "#4d4d4d",
          300: "#626262",
        },
        orange: {
          100: "#F1592A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
