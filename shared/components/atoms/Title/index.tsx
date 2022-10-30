import NonSSRWrapper from '@components/molecules/NonSSRWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useMediaQuery } from 'react-responsive'

interface Props {
  fontSize?: string
}

const Title: FC<Props> = ({ fontSize = '1rem' }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Link href="/">
      <a style={{ fontSize, verticalAlign: 'middle' }}>
        <NonSSRWrapper>
          {isTabletOrMobile ? (
            <Image
              src="/static/images/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
          ) : (
            'sangza'
          )}
        </NonSSRWrapper>
        <span className="">|</span> scientific thinking
      </a>
    </Link>
  )
}

export default Title
