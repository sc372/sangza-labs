import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'
import Link from 'next/link'

import NonSSRWrapper from '@components/molecules/NonSSRWrapper'

import styles from './styles.module.css'

const Title: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Link href="/">
      <div className={`${styles['title']}`}>
        {isTabletOrMobile ? (
          <div className={`${styles['title__logo']}`}>
            <NonSSRWrapper>
              <Image
                src="/static/images/logo.png"
                alt="logo"
                width={40}
                height={40}
              />
            </NonSSRWrapper>
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
