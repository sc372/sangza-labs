import { FC } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

import { themeType } from '@common/types/theme-type'
import FloatingButton from '@components/atoms/floating-button'
import { useThemeToggle } from '@hooks/useThemeToggle'

import NonSsrWrapper from './non-ssr-wrapper'

interface Props {
  className?: string
}

const ToggleThemeButton: FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useThemeToggle()

  return (
    <NonSsrWrapper>
      <FloatingButton
        onClick={toggleTheme}
        className={`${className} bg-opacity-50`}
      >
        {theme === themeType.dark ? <RiMoonFill /> : <RiSunFill />}
      </FloatingButton>
    </NonSsrWrapper>
  )
}

export default ToggleThemeButton
