import { FC } from 'react'

interface Props {
  children: string
}

const P: FC<Props> = ({ children }) => (
  <p className="text-primaryText dark:text-darkPrimaryText">{children}</p>
)

export default P
