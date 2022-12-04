import { useRecoilState } from 'recoil'

import { isOpenSearchInputAtom } from './atom'

export const useIsOpenSearchInputAction = () => {
  const [isOpenSearchInput, setIsOpenSearchInput] =
    useRecoilState(isOpenSearchInputAtom)

  const toggleIsOpenSearchInput = () => setIsOpenSearchInput(!isOpenSearchInput)
  const closeIsOpenSearchInput = () => setIsOpenSearchInput(false)

  return {
    isOpenSearchInput,
    toggleIsOpenSearchInput,
    closeIsOpenSearchInput,
  }
}
