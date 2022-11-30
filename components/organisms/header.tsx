import React from 'react'

import MenuIconButton from '@components/atoms/menu-drawer-button'
import Title from '@components/atoms/title'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

const Header = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <nav className="fixed z-50 flex h-[5.95rem] w-full flex-col justify-center bg-background px-14 py-2.5">
      <div className="flex flex-row items-center">
        <div className="mr-5 flex flex-col justify-center">
          <MenuIconButton
            onClick={toggleIsOpenMenuDrawer}
            height="100%"
            width="calc(0.7vw + 1rem)"
          />
        </div>
        <Title />
      </div>
    </nav>
  )
}

export default Header
