import { FC } from 'react'
import { RiMenuFill } from 'react-icons/ri'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  height?: string
  width?: string
  color?: string
}

const MenuDrawerButton: FC<Props> = ({
  onClick,
  height = '1rem',
  width = '1rem',
  color,
}) => {
  return (
    <button onClick={onClick}>
      <RiMenuFill style={{ height, width, color }} />
    </button>
  )
}

export default MenuDrawerButton
