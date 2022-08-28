import MenuDrawer from "@components/atoms/MenuDrawer";
import Header from "@components/ortanisms/Header";
import { IWrapperComponentProps } from "common/interfaces";
import { FC } from "react";

const MainLayout: FC<IWrapperComponentProps> = ({ children }) => {
  return (
    <>
      <main className="py-5 px-14">
        <Header />
        <MenuDrawer />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
