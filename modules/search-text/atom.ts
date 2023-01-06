import { atom } from 'recoil'

import { SEARCH_TEXT_KEY } from './key'

export const searchTextAtom = atom<string>({
  key: SEARCH_TEXT_KEY,
  default: '',
})
