import { ChangeEvent, FC, KeyboardEvent } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClick?: () => void
  className?: string
}

const SearchInput: FC<Props> = ({
  onChange,
  onClick,
  onKeyDown,
  className,
}) => {
  return (
    <div className={`${className} relative mx-auto block`}>
      <input
        className=" dark:ring-darkDivider dark:bg-darkSecondary mx-auto my-0 h-10 w-full rounded bg-secondary p-4 outline-none ring-[0.5px] ring-divider focus:ring-primary dark:focus:ring-primary"
        placeholder="검색어를 입력하세요."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <RiSearch2Line
        className="absolute top-2 left-auto right-4 h-6 w-6 cursor-pointer dark:text-primary"
        type="submit"
        onClick={onClick}
      />
    </div>
  )
}

export default SearchInput
