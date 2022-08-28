import { FC } from "react";
import { RiMenuFill } from "react-icons/ri";

const MenuIcon = () => {
  return (
    <button
      type="button"
      data-drawer-target="drawer-menu"
      data-drawer-show="drawer-menu"
      aria-controls="drawer-menu"
    >
      <RiMenuFill />
    </button>
  );
};

export default MenuIcon;
