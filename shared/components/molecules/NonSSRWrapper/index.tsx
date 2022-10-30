import { WrapperComponentProps } from '@common/interfaces'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const NonSSRWrapper: FC<WrapperComponentProps> = ({ children }) => (
  <>{children}</>
)

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
})
