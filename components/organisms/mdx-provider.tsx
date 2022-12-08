import { FC } from 'react'
import { RiPriceTag3Line, RiTimerLine } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'

import { Meta } from '@common/interfaces'
import MdxCodeBlock from '@components/atoms/mdx-code-block'
import Tag from '@components/atoms/tag'
import { useReadingTime } from '@hooks/useReadingTime'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
}

const MDXComponents = {
  code: MdxCodeBlock,
  image: Image,
}

function getRedingTime(text: string): string {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  console.log('%cuseReadingTime.ts line:11 time', 'color: #007acc;', time)
  return `${time} min`
}

const MdxProvider: FC<Props> = ({ slug, frontMatter, mdxContent }) => {
  const { docRef, readingTime } = useReadingTime()

  return (
    <div className="lg:px-24 xl:px-48">
      <div className="mb-5 text-2xl">{frontMatter.title}</div>
      <div className="mb-2 flex flex-col items-end">
        <div>
          <span></span> create: {frontMatter.createdDate}
        </div>
        <div>update: {frontMatter.updatedDate}</div>
        <div className="flex items-center">
          <RiTimerLine />
          <div className="ml-2">{readingTime}</div>
        </div>
        {/* </div> */}
        <div className="mb-10 flex flex-row">
          {fpFunction.pipe(
            frontMatter.tags,
            fpArray.mapWithIndex((i, a) => (
              <span className="flex items-center" key={i}>
                {i === 0 && <RiPriceTag3Line />}
                <Tag name={a} href={`/blog/tags/${a}`} className="ml-2" />
              </span>
            ))
          )}
        </div>
      </div>
      <div className="mb-10 border-t-[0.5px] border-solid text-divider"></div>

      {/* <div className="prose"> */}
      <div className="prose min-w-full" ref={docRef}>
        <MDXRemote {...mdxContent} components={MDXComponents} />
      </div>
    </div>
  )
}

export default MdxProvider
