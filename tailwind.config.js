const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/**/*.{js,ts,jsx,tsx}',
    './shared/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
