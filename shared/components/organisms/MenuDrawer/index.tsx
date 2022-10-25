import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'
import Image from 'next/image'
import styles from './styles.module.css'

const MenuDrawer = () => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <nav className={`${styles.menuDrawer} ${isOpenMenuDrawer && styles.open}`}>
      <h2 className={`${styles.profileTitle}`}>sangza</h2>
      <div className={`${styles.profileCardContainer}`}>
        <div className={`${styles.profileCardImage}`}>
          <Image
            src="/static/images/profile.jpg"
            alt="profile"
            width={500}
            height={600}
          />
          <div className={`${styles.profileWrapper}`}>
            <h3 className={`${styles.profileTitle}`}>sangza</h3>
            <p className={`${styles.profileDescription}`}>web engineer</p>
          </div>
          <div className={`${styles.profileWrapper}`}></div>
        </div>
      </div>
    </nav>
  )
}

export default MenuDrawer
