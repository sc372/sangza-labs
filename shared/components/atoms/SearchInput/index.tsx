import { ChangeEvent, FC, KeyboardEvent } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

import styles from './styles.module.scss'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  onClick: () => void
}

const SearchInput: FC<Props> = ({ onChange, onClick, onKeyDown }) => {
  return (
    <div className={`${styles['search-input']}`}>
      <input
        placeholder="검색어를 입력하세요."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <RiSearch2Line
        className={`${styles['icon']}`}
        type="submit"
        onClick={onClick}
      />
    </div>
  )
}

export default SearchInput
