import { FC } from 'react'

import Link from 'next/link'

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
