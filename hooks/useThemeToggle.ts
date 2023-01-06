import { useEffect } from 'react'

import { useTheme } from 'next-themes'

import { themeType, THEME_TYPE_KEY } from '@common/types/theme-type'

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () =>
    setTheme(theme === themeType.dark ? themeType.light : themeType.dark)

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_TYPE_KEY)
    if (storedTheme === undefined || storedTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme(themeType.dark)
      }

      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
      ) {
        setTheme(themeType.light)
      }
    } else {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(THEME_TYPE_KEY, theme as string)
  }, [theme])

  return {
    theme,
    toggleTheme,
  }
}
