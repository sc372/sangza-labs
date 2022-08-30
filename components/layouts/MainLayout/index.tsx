import MenuDrawer from "@components/organisms/MenuDrawer";
import Header from "@components/organisms/Header";
import { IWrapperComponentProps } from "common/interfaces";
import { FC } from "react";
import Backdrop from "@components/atoms/Backdrop";
import { useIsOpenMenuDrawer } from "@modules/drawer/action";

const MainLayout: FC<IWrapperComponentProps> = ({ children }) => {
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
