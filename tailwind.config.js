module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#DFD8CA",
      },
      secondary: {
        DEFAULT: "#B91646",
      },
    },
    fontFamily: {
      display: ["Monofett", "cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
