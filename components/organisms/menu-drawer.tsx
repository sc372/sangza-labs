import { FC } from 'react'
import { RiGithubFill, RiMailLine } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import Image from 'next/image'
import Link from 'next/link'

import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

import siteConfig from '../../site.config'

export interface Props {
  className?: string
}

const MenuDrawer: FC<Props> = ({ className }) => {
  const { isOpenMenuDrawer, closeIsOpenMenuDrawer } =
    useIsOpenMenuDrawerAction()
  return (
    <nav
      className={`fixed top-0 right-full h-full translate-x-0 bg-background  shadow-xl transition-all ${
        isOpenMenuDrawer && 'translate-x-full shadow-lg'
      } ${className}`}
    >
      <h2 className="mb-3 text-2xl font-bold">think</h2>
      <div className="dark:ring-darkDivider dark:bg-darkSecondary relative box-border ring-[0.5px] ring-divider">
        <Image
          src="/static/images/profile.jpg"
          alt="profile"
          width={450}
          height={500}
        />
        <div className="p-[1vw]">
          <h3 className="mb-[calc(0.5vw_+_5px)] text-base font-bold">
            {siteConfig.authors[0].id}
          </h3>
          <p className="dark:text-darkTertiary mb-[0.3vw] italic text-tertiary">
            {siteConfig.authors[0].bio}
          </p>
        </div>
        <div className="dark:text-darkTertiary flex justify-end py-[0.5vw] px-[0.2vw] text-tertiary">
          <Link href={siteConfig.authors[0].contacts.github} target="_blank">
            <button className="m-[1vw] hover:text-primary">
              <RiGithubFill size={30} />
            </button>
          </Link>
          <Link href={`mailto:${siteConfig.authors[0].contacts.email}`}>
            <button className="m-[1vw] hover:text-primary">
              <RiMailLine size={30} />
            </button>
          </Link>
        </div>
      </div>
      <div className="dark:text-darkTertiary mt-[calc(1vw_+_10px)] flex flex-col items-end text-lg text-tertiary">
        {fpFunction.pipe(
          siteConfig.menuDrawer,
          fpArray.mapWithIndex((i, a) => (
            <div
              key={i}
              className="my-[0.4vw] hover:text-primary"
              onClick={closeIsOpenMenuDrawer}
            >
              <Link href={a.path}>{a.name}</Link>
            </div>
          ))
        )}
      </div>
    </nav>
  )
}

export default MenuDrawer
