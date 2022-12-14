import { FC } from 'react'

interface Props {
  children: string
}

const Strong: FC<Props> = ({ children }) => (
  <strong className="text-primaryText dark:text-darkPrimaryText">
    {children}
  </strong>
)

export default Strong
