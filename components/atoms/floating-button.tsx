import { FC } from 'react'

import { WrapperComponentProps } from '@common/interfaces'

interface Props {
  className?: string
  onClick?: () => void
}

type PropsType = Props & WrapperComponentProps

const FloatingButton: FC<PropsType> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed flex items-center justify-center rounded-full
      text-2xl drop-shadow-2xl duration-300 active:translate-y-2
      ${className}`}
    >
      {children}
    </button>
  )
}

export default FloatingButton
