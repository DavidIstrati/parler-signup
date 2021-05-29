module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   parlerPurple: '#892E5E',
    //   parlerRed: '#D13E3F',
    //   extend: {},
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-glow")()],
};
