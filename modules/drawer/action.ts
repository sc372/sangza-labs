import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isOpenMenuDrawerAtom } from "./atom";

export const useIsOpenMenuDrawer = () => {
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] =
    useRecoilState(isOpenMenuDrawerAtom);

  const toggleIsOpenMenuDrawer = () => setIsOpenMenuDrawer(!isOpenMenuDrawer);

  return {
    isOpenMenuDrawer,
    toggleIsOpenMenuDrawer,
  };
};
