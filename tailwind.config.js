const siteConfig = require('./site.config')

module.exports = {
  ...siteConfig.tailwind,
  // content: [
  //   './pages/**/**/*.{js,ts,jsx,tsx}',
  //   './components/**/**/*.{js,ts,jsx,tsx}',
  // ],
  // theme: {
  //   extend: {},
  //   colors: {
  //     transparent: 'transparent',
  //     primary: '#daa520',
  //     secondary: '#fbfbfb',
  //     tertiary: '#808080',
  //     divider: '#c8c8c8',
  //     success: '#595959',
  //     warning: '#ffc409',
  //     danger: '#eb445a',
  //     background: '#ffffff',
  //     backdrop: 'rgba(0, 0, 0, 0.5)',
  //   },
  // },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-text-fill'),
  ],
}
