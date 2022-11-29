import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

const Backdrop = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <div
      className="fixed top-0 right-0 z-[100] h-full w-full bg-backdrop"
      onClick={toggleIsOpenMenuDrawer}
    ></div>
  )
}

export default Backdrop
