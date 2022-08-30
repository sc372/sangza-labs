import { useIsOpenMenuDrawer } from "@modules/drawer/action";
import styles from "./styles.module.css";

const Backdrop = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawer();
  return (
    <div
      className={`${styles.backdrop}`}
      onClick={toggleIsOpenMenuDrawer}
    ></div>
  );
};

export default Backdrop;
