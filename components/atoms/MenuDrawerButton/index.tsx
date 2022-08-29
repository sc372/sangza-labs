import { FC } from "react";
import { RiMenuFill } from "react-icons/ri";

const MenuDrawerButton: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <RiMenuFill />
    </button>
  );
};

export default MenuDrawerButton;
