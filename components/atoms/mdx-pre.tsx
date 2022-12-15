import { FC } from 'react'

interface Props {
  children: string
}

const Pre: FC<Props> = ({ children }) => (
  <pre className="text-primaryText dark:text-darkPrimaryText">{children}</pre>
)

export default Pre
