import MenuIconButton from '@components/atoms/MenuDrawerButton'
import Title from '@components/atoms/Title'
import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

const Header = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <nav className="px-14 py-2.5 h-18 w-full z-50 fixed bg-gray-100">
      <div className="py-2.5">
        {/* <div className="flex items-center justify-between h-16"> */}
        <div className="flex">
          <div className="flex items-center mr-5">
            <MenuIconButton
              onClick={toggleIsOpenMenuDrawer}
              height="calc(0.7vw + 1rem)"
              width="calc(0.7vw + 1rem)"
            />
          </div>
          <div className="flex items-center">
            <Title fontSize="calc(0.7vw + 1.2rem)" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
