import { FC } from 'react'

import Link from 'next/link'

interface Props {
  name: string
  href: string
  className?: string
}

const Tag: FC<Props> = ({ name, href, className }) => {
  return (
    <Link href={href}>
      <div
        className={`${className} cursor-pointer rounded bg-secondary py-[0.05rem] px-2 ring-1 ring-transparent hover:ring-primary`}
      >
        {name}
      </div>
    </Link>
  )
}

export default Tag
