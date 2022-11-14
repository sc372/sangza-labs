import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

const Title: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Link href="/">
      <div className={`${styles['title']}`}>
        {isTabletOrMobile ? (
          <div className={`${styles['title__logo']}`}>
            <Image
              src="/static/images/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
        ) : (
          <div className={`${styles['title__text']}`}>sangza</div>
        )}
        <div className={`${styles['title__text']}`}>
          <div>&nbsp;|&nbsp;scientific thinking</div>
        </div>
      </div>
    </Link>
  )
}

export default Title
