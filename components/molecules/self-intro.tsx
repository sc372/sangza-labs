import { FC } from 'react'
import { IconContext } from 'react-icons/lib'
import { RiGithubFill, RiMailLine } from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
  className?: string
}

const SelfIIntro: FC<Props> = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-row flex-wrap items-center justify-start`}
    >
      <div className="h-[13vw] min-h-[100px] w-[13vw] min-w-[100px] overflow-hidden rounded-full">
        {/* <div className="h-20 w-20 overflow-hidden rounded-full"> */}
        <Image
          src="/static/images/about.jpg"
          alt="profile"
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="pl-10">
        <h3 className="text-[calc(0.5vw_+_20px)] font-semibold">sangza</h3>
        <p className="mb-[0.3vw] italic text-tertiary">software engineer</p>
        <div className="flex justify-start text-tertiary">
          <Link href="https://github.com/sc372" target="_blank">
            <button className="hover:text-primary">
              <IconContext.Provider
                value={{ className: 'text-[calc(0.5vw_+_1.5rem)]' }}
              >
                <RiGithubFill />
              </IconContext.Provider>
            </button>
          </Link>
          <Link href="mailto:372lsc@gmail.com">
            <button className="ml-[1vw] cursor-pointer hover:text-primary">
              <IconContext.Provider
                value={{ className: 'text-[calc(0.5vw_+_1.5rem)]' }}
              >
                <RiMailLine />
              </IconContext.Provider>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SelfIIntro
