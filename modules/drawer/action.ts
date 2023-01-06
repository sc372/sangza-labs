import { useRecoilState } from 'recoil'

import { isOpenMenuDrawerAtom } from './atom'

export const useIsOpenMenuDrawerAction = () => {
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] =
    useRecoilState(isOpenMenuDrawerAtom)

  const toggleIsOpenMenuDrawer = () => setIsOpenMenuDrawer(!isOpenMenuDrawer)
  const closeIsOpenMenuDrawer = () => setIsOpenMenuDrawer(false)

  return {
    isOpenMenuDrawer,
    toggleIsOpenMenuDrawer,
    closeIsOpenMenuDrawer,
  }
}
