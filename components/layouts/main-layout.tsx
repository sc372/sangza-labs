import { FC } from 'react'

import { WrapperComponentProps } from '@common/interfaces'
import Backdrop from '@components/molecules/backdrop'
import Footer from '@components/organisms/footer'
import Header from '@components/organisms/header'
import MenuDrawer from '@components/organisms/menu-drawer'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

const MainLayout: FC<WrapperComponentProps> = ({ children }) => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction()

  return (
    <>
      <Header className="z-50 h-[5.95rem] bg-background px-5 md:px-14" />
      <MenuDrawer className="z-[200] w-[calc(10%_+_10rem)] py-[1vw] px-[2vw]" />
      {isOpenMenuDrawer && <Backdrop />}
      <main className="py-24 px-5 md:px-14">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
