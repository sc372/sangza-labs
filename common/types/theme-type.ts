import { Union } from './common-type'

export const THEME_TYPE_KEY = 'THEME_TYPE_KEY'

export const themeType = {
  light: 'light',
  dark: 'dark',
} as const

export type ThemeType = Union<typeof themeType>
