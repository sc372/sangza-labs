import { atom } from "recoil";
import { IS_OPEN_DRAWER_MENU_KEY } from "shared/modules/drawer/key";

export const isOpenMenuDrawerAtom = atom<boolean>({
  key: IS_OPEN_DRAWER_MENU_KEY,
  default: false,
});
