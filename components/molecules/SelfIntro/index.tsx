import { FC } from 'react'

import Image from 'next/image'

const SelfIIntro: FC = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      <div className="h-[calc(15vw_+_20px)] w-[calc(15vw_+_20px)] overflow-hidden rounded-full">
        <Image
          src="/static/images/about.jpg"
          alt="profile"
          objectFit="cover"
          width={250}
          height={250}
        />
      </div>
      <div className="">
        slkjfdlsldkjflsdkjflkjsdlfjsdlkfjlskdjflkjdsljffffffffkds
        slkjfdlsldkjflsdkjflkjsdlfjsdlkfjlskdjflkjdsljffffffffkds
      </div>
    </div>
  )
}

export default SelfIIntro
