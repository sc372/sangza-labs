import { useIsOpenMenuDrawerActions } from "shared/modules/drawer/action";
import styles from "./styles.module.css";

const Backdrop = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerActions();
  return (
    <div
      className={`${styles.backdrop}`}
      onClick={toggleIsOpenMenuDrawer}
    ></div>
  );
};

export default Backdrop;
