import { useIsOpenMenuDrawer } from "@modules/drawer/action";
import styles from "./styles.module.css";

const MenuDrawer = () => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawer();
  return (
    <nav className={`${styles.menuDrawer} ${isOpenMenuDrawer && styles.open}`}>
      <section>sldkfjl</section>
    </nav>
  );
};

export default MenuDrawer;
