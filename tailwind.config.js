const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
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
      background: '#ffffff',
      backdrop: 'rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-text-fill'),
  ],
}
