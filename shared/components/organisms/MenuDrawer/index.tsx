import { RiGithubFill, RiMailLine } from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

import styles from './styles.module.scss'

const MenuDrawer = () => {
  const { isOpenMenuDrawer, closeIsOpenMenuDrawer } =
    useIsOpenMenuDrawerAction()
  return (
    <nav
      className={`${styles['menu-drawer']} ${
        isOpenMenuDrawer && styles['menu-drawer__open']
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
        <div className={`${styles['menu-drawer__card__meta']}`}>
          <h3 className={`${styles['menu-drawer__card__meta__name']}`}>
            sangza
          </h3>
          <p className={`${styles['menu-drawer__card__meta__description']}`}>
            software engineer
          </p>
        </div>
        <div className={`${styles['menu-drawer__card__contact']}`}>
          <div>
            <RiGithubFill size={30} />
          </div>
          <div>
            <RiMailLine size={30} />
          </div>
        </div>
      </div>
      <div className={`${styles['menu-drawer__list']}`}>
        <div onClick={closeIsOpenMenuDrawer}>
          <Link href={'/'}>home</Link>
        </div>
        <div onClick={closeIsOpenMenuDrawer}>
          <Link href={'/about'}>about</Link>
        </div>
      </div>
    </nav>
  )
}

export default MenuDrawer
