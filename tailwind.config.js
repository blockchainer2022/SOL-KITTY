module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: () => ({
        primary: "#2AD3F2",
        secondary: "#007885",
      }),
      borderColor: {},
      textColor: {
        primary: "#002F34",
        secondary: "#007885",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: " ArcadeClassic",
        serif: "'Bangers', cursive",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
