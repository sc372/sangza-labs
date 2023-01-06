import { HTMLProps } from 'react'

const MdxAnchor = ({ children, href }: HTMLProps<HTMLAnchorElement>) => (
  <a href={href} className="text-anchorText">
    {children}
  </a>
)

export default MdxAnchor
