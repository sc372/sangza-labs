import { FC } from 'react'

interface Props {
  children: string
}

const Li: FC<Props> = ({ children }) => (
  <li className="text-primaryText dark:text-darkPrimaryText">{children}</li>
)

export default Li
