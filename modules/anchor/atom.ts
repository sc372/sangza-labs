import { atom } from 'recoil'

import { IS_OPEN_ANCHOR_KEY } from './key'

export const isOpenAnchorAtom = atom<boolean>({
  key: IS_OPEN_ANCHOR_KEY,
  default: false,
})
