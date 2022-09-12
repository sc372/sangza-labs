import MenuIconButton from "shared/components/atoms/MenuDrawerButton";
import Title from "shared/components/atoms/Title";
import { useIsOpenMenuDrawer } from "shared/modules/drawer/action";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawer();
  return (
    <>
      <div className="min-h-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <MenuIconButton onClick={toggleIsOpenMenuDrawer} />
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
