import { HTMLProps } from 'react'

const MdxPre = ({ children }: HTMLProps<HTMLElement>) => (
  <pre className="text-primaryText dark:text-darkPrimaryText">{children}</pre>
)

export default MdxPre
