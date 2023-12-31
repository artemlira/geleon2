/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      padding: "10px",
      center: true,
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        melancholy: ["Melancholy", "sans-serif"],
      },
      colors: {
        black: "#000000",
        blue: "#34B2DB",
        darkBlue: "#388ba7",
        white: "#ffffff",
        lightGrey: "#F8F8F8",
        grey: "#CBCACA",
      },
      screens: {
        sm: "500px",
        md: "788px",
        lg: "1044px",
        xl: "1300px",
        "2xl": "1460px",
        "3xl": "1556px",
        "4xl": "1684px",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "0.2s fade-in ease-in-out",
      },
    },
  },
  plugins: [],
};
