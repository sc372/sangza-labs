import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'
import Image from 'next/image'
import styles from './styles.module.css'

const MenuDrawer = () => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <nav
      className={`${styles['menu-drawer-wrapper']} ${
        isOpenMenuDrawer && styles['open']
      }`}
    >
      <h2 className={`${styles['profile-title']}`}>sangza</h2>
      <div className={`${styles['profile-card-container']}`}>
        <div className={`${styles['profile-card-image']}`}>
          <Image
            src="/static/images/profile.jpg"
            alt="profile"
            width={500}
            height={600}
          />
          <div className={`${styles['profile-meta-wrapper']}`}>
            <h3 className={`${styles['profile-meta-name']}`}>sangza</h3>
            <p className={`${styles['profile-meta-description']}`}>
              web engineer
            </p>
          </div>
          <div className={`${styles['profile-wrapper']}`}></div>
        </div>
      </div>
    </nav>
  )
}

export default MenuDrawer
