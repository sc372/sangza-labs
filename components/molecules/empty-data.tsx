import Image from 'next/image'

const EmptyData = () => {
  return (
    <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col items-center">
        <div className="grayscale">
          <Image
            src="/static/images/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center text-3xl">
          <div className="my-3">검색된 데이터가 없습니다.</div>
        </div>
      </div>
    </div>
  )
}

export default EmptyData
