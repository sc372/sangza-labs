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
      <span
        className={`${className} cursor-pointer rounded bg-secondary px-2 py-[0.1rem] text-sm ring-[0.5px] ring-tertiary hover:text-primary hover:ring-1 hover:ring-primary`}
      >
        {name}
      </span>
    </Link>
  )
}

export default Tag
