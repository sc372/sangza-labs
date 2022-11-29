import { FC } from 'react'

import { WrapperComponentProps } from '@common/interfaces'
import Backdrop from '@components/atoms/Backdrop'
import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import MenuDrawer from '@components/organisms/MenuDrawer'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

const MainLayout: FC<WrapperComponentProps> = ({ children }) => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction()

  return (
    <>
      <Header />
      <MenuDrawer />
      {isOpenMenuDrawer && <Backdrop />}
      <main className="px-14 py-24">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
