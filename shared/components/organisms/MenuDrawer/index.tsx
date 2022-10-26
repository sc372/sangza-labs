import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'
import Image from 'next/image'
import styles from './styles.module.css'

const MenuDrawer = () => {
  const { isOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <nav
      className={`${styles['menu-drawer']} ${
        isOpenMenuDrawer && styles['open']
      }`}
    >
      <h2 className={`${styles['menu-drawer__title']}`}>sangza</h2>
      <div className={`${styles['menu-drawer__card']}`}>
        <div className={`${styles['menu-drawer__card--image']}`}>
          <Image
            src="/static/images/profile.jpg"
            alt="profile"
            width={500}
            height={600}
          />
          <div className={`${styles['menu-drawer__card--meta']}`}>
            <h3 className={`${styles['menu-drawer__card--meta-name']}`}>
              sangza
            </h3>
            <p className={`${styles['menu-drawer__card--meta-description']}`}>
              web engineer
            </p>
          </div>
          {/* <div className={`${styles['profile-wrapper']}`}></div> */}
        </div>
      </div>
    </nav>
  )
}

export default MenuDrawer
