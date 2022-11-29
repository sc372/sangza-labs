import { RiGithubFill, RiMailLine } from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

import { useIsOpenMenuDrawerAction } from '@modules/drawer/action'

const MenuDrawer = () => {
  const { isOpenMenuDrawer, closeIsOpenMenuDrawer } =
    useIsOpenMenuDrawerAction()
  return (
    <nav
      className={`fixed top-0 right-full z-[200] h-full w-[calc(10%_+_10rem)] translate-x-0 bg-background py-[1vw] px-[2vw] shadow-xl transition-all ${
        isOpenMenuDrawer && 'translate-x-full shadow-lg'
      }`}
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
            <div className="m-[1vw] cursor-pointer hover:text-primary">
              <RiGithubFill size={30} />
            </div>
          </Link>
          <Link href="mailto:372lsc@gmail.com">
            <div className="m-[1vw] cursor-pointer hover:text-primary">
              <RiMailLine size={30} />
            </div>
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
