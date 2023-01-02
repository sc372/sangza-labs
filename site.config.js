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
  copyright: `${now.format('YYYY')} sangza - All Right Reserved`,
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
    content: {
      enabled: true,
      content: [
        './pages/**/**/*.{js,ts,jsx,tsx}',
        './components/**/**/*.{js,ts,jsx,tsx}',
      ],
      options: {
        safelist: ['dark'], //specific classes
      },
    },
    darkMode: 'class',
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
        primary: '#daa520',
        darkPrimary: '#daa520',
        secondary: '#fbfbfb',
        darkSecondary: '#282A3A',
        tertiary: '#808080',
        darkTertiary: '#a0a0a0',
        primaryText: '#393939',
        darkPrimaryText: '#d0d0d0',
        anchorText: '#3FA9FF',
        divider: '#c8c8c8',
        darkDivider: '#064663',
        success: '#595959',
        warning: '#ffc409',
        danger: '#eb445a',
        background: '#ffffff',
        darkBackground: '#041C32',
        backdrop: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
}
