import { FC } from 'react'

interface Props {
  href?: string
  children: string
}

const A: FC<Props> = ({ children, href }) => (
  <a href={href} className="text-anchorText">
    {children}
  </a>
)

export default A
