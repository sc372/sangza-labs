import React, { FC } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

import MenuIconButton from '@components/atoms/menu-drawer-button'
import Title from '@components/atoms/title'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'
import { useIsOpenSearchInputAction } from '@modules/search/action'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  const { toggleIsOpenSearchInput } = useIsOpenSearchInputAction()
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
          <Title />
        </div>
        <div className="flex items-center">
          <RiSearch2Line
            onClick={toggleIsOpenSearchInput}
            width="calc(0.7vw + 1rem)"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
