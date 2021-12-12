const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["FC-Home", "sans-serif"],
      },
      width: {
        70: "65%",
        112: "28rem",
        120: "30rem",
        148: "37rem",

        216: "54rem",
        312: "78rem",
        320: "80rem",

        "30p": "30px",
        200: "200px",
      },
      height: {
        45: '45rem',
        43: '43rem',
        84: '21rem',
        100: '100rem',
        120: "30rem",
        140: "35rem",
        152: "38rem",
        148: "37rem",
        200: "50rem",
        208: "208px",
      },
      margin: {
        19: "4.1rem",
      },
      backgroundImage: () => ({
        'art-bg': "url('/images/art_lab/bg_art.svg')",
        'project-bg': "url('/images/art_lab/project.svg')",
        'school-bg': "url('/images/art_lab/school.svg')",
        'floor6-bg': "url('/images/icon/floor6.png')",
      }),
      borderRadius: {
        '5xl': '42px',
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
          400: "#c4c4c4",
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
