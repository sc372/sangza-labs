import { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  date: string
}

const Date: FC<Props> = ({ date }) => {
  return <div>{date}</div>
}

export default Date
