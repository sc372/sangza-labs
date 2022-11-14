import { FC } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

const SelfIIntro: FC = () => {
  return (
    <div className={`${styles['self-intro']}`}>
      <div className={`${styles['self-intro__image']}`}>
        <Image
          src="/static/images/about.jpg"
          alt="profile"
          objectFit="cover"
          width={250}
          height={250}
        />
      </div>
      <div className={`${styles['self-intro__description']}`}>
        slkjfdlsldkjflsdkjflkjsdlfjsdlkfjlskdjflkjdsljffffffffkds
        slkjfdlsldkjflsdkjflkjsdlfjsdlkfjlskdjflkjdsljffffffffkds
      </div>
    </div>
  )
}

export default SelfIIntro
