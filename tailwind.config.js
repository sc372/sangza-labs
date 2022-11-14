const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/**/*.{js,ts,jsx,tsx}',
    './shared/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
    transparent: 'transparent',
    primary: '#daa520',
    secondary: '#e9ecef',
    tertiary: '#808080',
    success: '#4bb543',
    warning: '#ffc409',
    danger: '#eb445a',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
