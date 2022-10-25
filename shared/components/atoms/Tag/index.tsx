import Link from 'next/link'
import { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  name: string
  onClick: () => void
}

const Tag: FC<Props> = ({ name }) => {
  return (
    <Link href="/">
      <div className="cursor-pointer">{name}</div>
    </Link>
  )
}

export default Tag
