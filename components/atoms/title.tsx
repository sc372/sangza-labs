import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
import { useResponsive } from '@hooks/useResponsive'

const Title: FC = () => {
  const { isLg } = useResponsive()

  return (
    <Link href="/">
      <div className="cursor-point flex flex-row text-[calc(0.7vw_+_1rem)]">
        <NonSsrWrapper>
          {isLg ? (
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
          <div>
            <span className="text-primary">&nbsp;|&nbsp;</span>scientific
            thinking
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Title
