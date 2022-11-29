import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'
import Link from 'next/link'

import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'

const Title: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Link href="/">
      <div className="cursor-point flex flex-row text-[calc(0.7vw_+_1.2rem)]">
        <NonSsrWrapper>
          {isTabletOrMobile ? (
            <div className="flex flex-col justify-center hover:animate-spin">
              <Image
                src="/static/images/logo.png"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
          ) : (
            <div className="flex flex-col justify-items-center">sangza</div>
          )}
        </NonSsrWrapper>
        <div className="flex items-center justify-center">
          <div>&nbsp;|&nbsp;scientific thinking</div>
        </div>
      </div>
    </Link>
  )
}

export default Title
