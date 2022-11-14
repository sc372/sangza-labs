import { FC } from 'react'

import Link from 'next/link'

import styles from './styles.module.scss'

interface Props {
  name: string
  href: string
  className?: string
}

const Tag: FC<Props> = ({ name, href, className }) => {
  return (
    <Link href={href}>
      <div className={`${styles.tag} ${className}`}>{name}</div>
    </Link>
  )
}

export default Tag
