import { atom } from 'recoil'

import { CURRENT_PAGE_KEY } from './key'

export const currentPageAtom = atom<number>({
  key: CURRENT_PAGE_KEY,
  default: 1,
})
