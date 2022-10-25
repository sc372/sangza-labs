import Link from 'next/link'
import { FC } from 'react'

interface Props {
  name: string
  href: string
}

const Tag: FC<Props> = ({ name, href }) => {
  return (
    <Link href={href}>
      <div className="cursor-pointer">{name}</div>
    </Link>
  )
}

export default Tag
