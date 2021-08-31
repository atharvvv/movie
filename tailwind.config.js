module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      screens: {
        "3xl":"2000px",
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
