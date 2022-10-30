import { WrapperComponentProps } from '@common/interfaces'
import Backdrop from '@components/atoms/Backdrop'
import Header from '@components/organisms/Header'
import MenuDrawer from '@components/organisms/MenuDrawer'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'
import { FC } from 'react'

const MainLayout: FC<WrapperComponentProps> = ({ children }) => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction()

  return (
    <>
      <Header />
      <MenuDrawer />
      {isOpenMenuDrawer && <Backdrop />}
      <main className="py-24 px-14">{children}</main>
    </>
  )
}

export default MainLayout
