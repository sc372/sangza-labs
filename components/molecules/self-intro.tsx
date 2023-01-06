import { FC } from 'react'
import { IconContext } from 'react-icons/lib'
import { RiGithubFill, RiMailLine } from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

import siteConfig from '../../site.config'

interface Props {
  className?: string
}

const SelfIIntro: FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex flex-row items-center justify-start`}>
      <div className="h-[13vw] min-h-[100px] w-[13vw] min-w-[100px] overflow-hidden rounded-full">
        <Image
          src="/static/images/about.jpg"
          alt="profile"
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="pl-10">
        <h3 className="text-[calc(0.5vw_+_20px)] font-semibold">
          {siteConfig.authors[0].id}
        </h3>
        <p className="mb-[0.3vw] italic text-tertiary dark:text-darkTertiary">
          {siteConfig.authors[0].bio}
        </p>
        <div className="flex justify-start text-tertiary dark:text-darkTertiary">
          <Link href={siteConfig.authors[0].contacts.github} target="_blank">
            <button className="hover:text-primary">
              <IconContext.Provider
                value={{ className: 'text-[calc(0.5vw_+_1.5rem)]' }}
              >
                <RiGithubFill />
              </IconContext.Provider>
            </button>
          </Link>
          <Link href={`mailto:${siteConfig.authors[0].contacts.email}`}>
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
