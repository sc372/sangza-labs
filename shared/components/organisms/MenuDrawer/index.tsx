import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'
import Image from 'next/image'
import Link from 'next/link'
import { RiGithubFill, RiMailLine } from 'react-icons/ri'
import styles from './styles.module.css'

const MenuDrawer = () => {
  const { isOpenMenuDrawer, closeIsOpenMenuDrawer } =
    useIsOpenMenuDrawerAction()
  return (
    <nav
      className={`${styles['menu-drawer']} ${
        isOpenMenuDrawer && styles['open']
      }`}
    >
      <h2 className={`${styles['menu-drawer__title']}`}>think</h2>
      <div className={`${styles['menu-drawer__card']}`}>
        <Image
          src="/static/images/profile.jpg"
          alt="profile"
          width={450}
          height={500}
        />
        <div className={`${styles['menu-drawer__card--meta']}`}>
          <h3 className={`${styles['menu-drawer__card--meta-name']}`}>
            sangza
          </h3>
          <p className={`${styles['menu-drawer__card--meta-description']}`}>
            web engineer
          </p>
        </div>
        <div className={`${styles['menu-drawer__card--contact']}`}>
          <div>
            <RiGithubFill size={30} />
          </div>
          <div>
            <RiMailLine size={30} />
          </div>
        </div>
        <div className={`${styles['menu-drawer__list']}`}>
          <div onClick={closeIsOpenMenuDrawer}>
            <Link href={'/'}>home</Link>
          </div>
          <div onClick={closeIsOpenMenuDrawer}>
            <Link href={'/introduce'}>introduce</Link>
          </div>
          <div onClick={closeIsOpenMenuDrawer}>
            <Link href={'/project'}>project</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MenuDrawer
