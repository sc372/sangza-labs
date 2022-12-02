import { FC } from 'react'
import { RiGithubFill, RiMailLine } from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

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
      <div className="relative box-border ring-1 ring-secondary">
        <Image
          src="/static/images/profile.jpg"
          alt="profile"
          width={450}
          height={500}
        />
        <div className="p-[1vw]">
          <h3 className="mb-[calc(0.5vw_+_5px)] text-base font-bold">sangza</h3>
          <p className="mb-[0.3vw] italic text-tertiary">software engineer</p>
        </div>
        <div className="flex justify-end py-[0.5vw] px-[0.2vw] text-tertiary">
          <Link href="https://github.com/sc372" target="_blank">
            <button className="m-[1vw] hover:text-primary">
              <RiGithubFill size={30} />
            </button>
          </Link>
          <Link href="mailto:372lsc@gmail.com">
            <button className="m-[1vw] hover:text-primary">
              <RiMailLine size={30} />
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-[calc(1vw_+_10px)] flex flex-col items-end text-tertiary">
        <div
          className="my-[0.3vw] hover:text-primary"
          onClick={closeIsOpenMenuDrawer}
        >
          <Link href={'/'}>home</Link>
        </div>
        <div
          className="my-[0.3vw] hover:text-primary"
          onClick={closeIsOpenMenuDrawer}
        >
          <Link href={'/about'}>about</Link>
        </div>
      </div>
    </nav>
  )
}

export default MenuDrawer
