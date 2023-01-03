import React, { FC } from 'react'

import MenuIconButton from '@components/atoms/menu-drawer-button'
import Title from '@components/atoms/title'
import ToggleThemeButton from '@components/molecules/toggle-theme-button'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerAction()

  return (
    <nav className={`${className} fixed flex w-full flex-col justify-center`}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <div className="mr-5 flex flex-col justify-center">
            <MenuIconButton
              onClick={toggleIsOpenMenuDrawer}
              height="100%"
              width="calc(0.7vw + 1rem)"
            />
          </div>
          <div className="md:ml-5">
            <Title />
          </div>
        </div>
        <ToggleThemeButton className="top-8 right-6 z-50 h-8 w-8 text-tertiary dark:text-darkTertiary" />
      </div>
    </nav>
  )
}

export default Header
