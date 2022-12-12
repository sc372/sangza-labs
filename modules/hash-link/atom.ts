import { atom } from 'recoil'

import { IS_OPEN_ANCHOR_KEY } from './key'

export const isOpenHashLinkAtom = atom<boolean>({
  key: IS_OPEN_ANCHOR_KEY,
  default: false,
})
