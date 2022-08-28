import MenuIcon from "@components/atoms/MenuIcon";
import Title from "@components/atoms/Title";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="min-h-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <MenuIcon />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Title />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
