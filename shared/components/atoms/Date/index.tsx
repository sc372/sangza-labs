import { FC } from 'react'

interface Props {
  date: string
}

const Date: FC<Props> = ({ date }) => {
  return <div>{date}</div>
}

export default Date
