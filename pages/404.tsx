import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import MainLayout from '@components/layouts/main-layout'

const NotFoundPage: NextPage = () => {
  return (
    <div className="h-[70vh]">
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col items-center">
          <div className="grayscale">
            <Image
              src="/static/images/logo.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col items-center text-3xl">
            <div className="my-3">404</div>
            <div className="my-3">페이지를 찾을 수 없습니다.</div>
          </div>
          <Link href="/">
            <button className="mt-5 text-3xl text-primary">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
// @ts-ignore
NotFoundPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
