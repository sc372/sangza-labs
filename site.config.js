const dayjs = require('dayjs')
const colors = require('tailwindcss/colors')

const now = dayjs()

module.exports = {
  // export const siteConfig = {
  url: '',
  title: 'sangza | scientific thinking',
  description: 'sangza 의 기록',
  locale: 'ko_KR',
  pageSize: 8,
  menuDrawer: [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
  ],
  copyright: `&copy; ${now.format('YYYY')} sangza - All Right Reserved`,
  images: [
    {
      url: '',
    },
  ],
  authors: [
    {
      id: 'sangza',
      bio: 'software engineer',
      avatar: '/static/images/avatar/sangza.png',
      contacts: {
        email: '372lsc@gmail.com',
        github: 'https://github.com/sc372',
      },
    },
  ],
  tailwind: {
    content: [
      './pages/**/**/*.{js,ts,jsx,tsx}',
      './components/**/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
        primary: '#daa520',
        secondary: '#fbfbfb',
        tertiary: '#808080',
        divider: '#c8c8c8',
        success: '#595959',
        warning: '#ffc409',
        danger: '#eb445a',
        background: '#ffffff',
        backdrop: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
}
