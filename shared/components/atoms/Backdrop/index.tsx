import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

import styles from './styles.module.scss'

const Backdrop = () => {
  const { toggleIsOpenMenuDrawer } = useIsOpenMenuDrawerAction()
  return (
    <div
      className={`${styles['backdrop']}`}
      onClick={toggleIsOpenMenuDrawer}
    ></div>
  )
}

export default Backdrop
