const { default: daisyui } = require('daisyui');

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require(daisyui)],
  plugins: [require('@tailwindcss/forms')],
};
