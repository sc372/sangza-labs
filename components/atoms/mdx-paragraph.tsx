import { HTMLProps } from 'react'

const MdxP = ({ children }: HTMLProps<HTMLElement>) => (
  <p className="text-primaryText dark:text-darkPrimaryText">{children}</p>
)

export default MdxP
