import { useIsOpenMenuDrawer } from "@modules/drawer/action";

const MenuDrawer = () => {
  const { isOpenMenuDrawer, toggleIsOpenMenuDrawer } = useIsOpenMenuDrawer();
  return (
    <nav
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpenMenuDrawer
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpenMenuDrawer ? "translate-x-0" : "translate-x-full")
        }
      >
        sldkfjl
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={toggleIsOpenMenuDrawer}
      ></section>
    </nav>
  );
};

export default MenuDrawer;
