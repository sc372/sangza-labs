import { FC } from "react";
import { WrapperComponentProps } from "shared/common/interfaces";
import Backdrop from "shared/components/atoms/Backdrop";
import Header from "shared/components/organisms/Header";
import MenuDrawer from "shared/components/organisms/MenuDrawer";
import { useIsOpenMenuDrawerAction } from "shared/modules/drawer/action";

const MainLayout: FC<WrapperComponentProps> = ({ children }) => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction();

  return (
    <>
      <main className="py-5 px-14">
        <Header />
        <MenuDrawer />
        {isOpenMenuDrawer && <Backdrop />}
        {children}
      </main>
    </>
  );
};

export default MainLayout;
