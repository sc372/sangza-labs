import { useIsOpenMenuDrawerActions } from "shared/modules/drawer/action";
import styles from "./styles.module.css";

const MenuDrawer = () => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerActions();
  return (
    <nav className={`${styles.menuDrawer} ${isOpenMenuDrawer && styles.open}`}>
      <section>sldkfjl</section>
    </nav>
  );
};

export default MenuDrawer;
