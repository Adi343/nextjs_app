module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    // primary: {
    // DEFAULT: "#DFD8CA",
    // },
    // secondary: {
    // DEFAULT: "#B91646",
    // },
    // },
    fontFamily: {
      code: ["Source Code Pro", "monospace"],
      display: ["Monofett", "cursive"],
    },
    extend: {
      animation: {
        bounce: "bounce 0.90s ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
