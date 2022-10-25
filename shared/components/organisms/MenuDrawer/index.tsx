import { useIsOpenMenuDrawerAction } from 'shared/modules/drawer/action'
import styles from './styles.module.css'

const MenuDrawer = () => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <nav className={`${styles.menuDrawer} ${isOpenMenuDrawer && styles.open}`}>
      <section>sldkfjl</section>
    </nav>
  )
}

export default MenuDrawer
