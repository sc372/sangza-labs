import React from 'react'

import MenuIconButton from '@components/atoms/MenuDrawerButton'
import Title from '@components/atoms/Title'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

const Header = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <nav className="flex flex-col justify-center px-14 py-2.5 h-20 w-full z-50 fixed bg-white">
      <div className="flex flex-row items-center">
        <div className="flex flex-col justify-center mr-5">
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
