import { FC } from 'react'

import dynamic from 'next/dynamic'

import { WrapperComponentProps } from '@common/interfaces'

const NonSsrWrapper: FC<WrapperComponentProps> = ({ children }) => (
  <>{children}</>
)

export default dynamic(() => Promise.resolve(NonSsrWrapper), {
  ssr: false,
})
