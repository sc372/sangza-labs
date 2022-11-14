import React from 'react'

import dayjs from 'dayjs'

import styles from './styles.module.scss'

const Footer = () => {
  const now = dayjs()
  return (
    <footer
      className={`fixed left-0 right-0 bottom-0 h-14 px-14 ${styles.footer}`}
    >
      <hr className="divider" />
      <div className="text-center">
        <small>&copy; {now.format('YYYY')} sangza - All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
