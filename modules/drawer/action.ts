import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isOpenDrawerMenuAtom } from "./atom";

export const useIsOpenDwawerMenu = () => {
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] =
    useRecoilState(isOpenDrawerMenuAtom);

  return {
    isOpenDrawerMenu,
    setIsOpenDrawerMenu,
  };
};
