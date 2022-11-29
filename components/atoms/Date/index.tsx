import { FC } from 'react'

interface Props {
  date: string
  className?: string
}

const Date: FC<Props> = ({ date, className }) => {
  return <div className={`${className}`}>{date}</div>
}

export default Date
