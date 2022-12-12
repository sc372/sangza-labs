import { useRecoilState } from 'recoil'

import { isOpenHashLinkAtom } from './atom'

export const useIsOpenHashLinkAction = () => {
  const [isOpenHashLink, setIsOpenHashLink] =
    useRecoilState(isOpenHashLinkAtom)

  const toggleIsOpenHashLink = () => setIsOpenHashLink(!isOpenHashLink)
  const closeIsOpenHashLink = () => setIsOpenHashLink(false)

  return {
    isOpenHashLink,
    toggleIsOpenHashLink,
    closeIsOpenHashLink,
  }
}
