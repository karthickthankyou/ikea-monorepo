const {
  keyframesConfig,
  animationConfig,
  colorsConfig,
  spacingConfig,
} = require('./src/styles/tailwindConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    colors: colorsConfig,
    extend: {
      spacing: spacingConfig,
      animation: animationConfig,
      keyframes: keyframesConfig,
    },
  },
  plugins: [],
}
