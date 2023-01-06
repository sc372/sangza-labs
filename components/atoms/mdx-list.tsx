import { HTMLProps } from 'react'

const MdxLi = ({ children }: HTMLProps<HTMLElement>) => (
  <li className="text-primaryText dark:text-darkPrimaryText">{children}</li>
)

export default MdxLi
