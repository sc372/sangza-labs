import { atom } from 'recoil'

import { IS_OPEN_SEARCH_INPUT_KEY } from './key'

export const isOpenSearchInputAtom = atom<boolean>({
  key: IS_OPEN_SEARCH_INPUT_KEY,
  default: false,
})
