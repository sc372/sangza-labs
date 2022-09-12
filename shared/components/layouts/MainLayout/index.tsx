import MenuDrawer from "shared/components/organisms/MenuDrawer";
import Header from "shared/components/organisms/Header";
import { WrapperComponentProps } from "shared/common/interfaces";
import { FC } from "react";
import Backdrop from "shared/components/atoms/Backdrop";
import { useIsOpenMenuDrawer } from "shared/modules/drawer/action";

const MainLayout: FC<WrapperComponentProps> = ({ children }) => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawer();

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
