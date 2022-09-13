import { useRecoilState } from "recoil";
import { isOpenMenuDrawerAtom } from "./atom";

export const useIsOpenMenuDrawerActions = () => {
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] =
    useRecoilState(isOpenMenuDrawerAtom);

  const toggleIsOpenMenuDrawer = () => setIsOpenMenuDrawer(!isOpenMenuDrawer);

  return {
    isOpenMenuDrawer,
    toggleIsOpenMenuDrawer,
  };
};
