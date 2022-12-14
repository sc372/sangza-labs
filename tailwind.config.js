const siteConfig = require('./site.config')

module.exports = {
  ...siteConfig.tailwind,
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-text-fill'),
  ],
}
