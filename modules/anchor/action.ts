import { useRecoilState } from 'recoil'

import { isOpenAnchorAtom } from './atom'

export const useIsOpenAnchorAction = () => {
  const [isOpenAnchor, setIsOpenAnchor] =
    useRecoilState(isOpenAnchorAtom)

  const toggleIsOpenAnchor = () => setIsOpenAnchor(!isOpenAnchor)
  const closeIsOpenAnchor = () => setIsOpenAnchor(false)

  return {
    isOpenAnchor,
    toggleIsOpenAnchor,
    closeIsOpenAnchor,
  }
}
