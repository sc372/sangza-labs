import { HTMLProps } from 'react'

const MdxStrong = ({ children }: HTMLProps<HTMLElement>) => (
  <strong className="text-primaryText dark:text-darkPrimaryText">
    {children}
  </strong>
)

export default MdxStrong
