import { FC } from 'react'
import { RiPriceTag3Line, RiTimerLine } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'

import { Meta } from '@common/interfaces'
import MdxCodeBlock from '@components/atoms/mdx-code-block'
import { H1, H2, H3, H4, H5 } from '@components/atoms/mdx-heading'
import Tag from '@components/atoms/tag'
import HashLinkPane from '@components/molecules/hash-link-pane'
import { useHashLink } from '@hooks/useHashLink'
import { useReadingTime } from '@hooks/useReadingTime'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
  className?: string
}

const MDXComponents = {
  code: MdxCodeBlock,
  image: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
}

const MdxProvider: FC<Props> = ({
  slug,
  frontMatter,
  mdxContent,
  className,
}) => {
  const { docRef, readingTime } = useReadingTime()
  const { docRef: docRefForHashLink, hashLinkElementList } = useHashLink()

  return (
    <div className={`${className} flex-wrap`}>
      <div className="xl:flex xl:flex-row">
        <div className="grow" ref={docRef}>
          <div>
            <div className="mb-5 text-3xl">{frontMatter.title}</div>
            <div className="dark:text-darkTertiary mb-2 flex flex-col items-end text-tertiary">
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
                {frontMatter.tags !== undefined &&
                  !fpArray.isEmpty(frontMatter.tags) &&
                  fpFunction.pipe(
                    frontMatter.tags,
                    fpArray.mapWithIndex((i, a) => (
                      <span className="flex items-center" key={i}>
                        {i === 0 && <RiPriceTag3Line />}
                        <Tag
                          name={a}
                          href={`/blog/tags/${a}`}
                          className="ml-2"
                        />
                      </span>
                    ))
                  )}
              </div>
            </div>
            <div className="dark:text-darkDivider mb-10 border-t-[0.5px] border-solid text-divider"></div>
          </div>
          <div className="prose min-w-full" ref={docRefForHashLink}>
            <MDXRemote {...mdxContent} components={MDXComponents} />
          </div>
        </div>
        <HashLinkPane
          hashLinkElementList={hashLinkElementList}
          frontMatter={frontMatter}
        />
      </div>
    </div>
  )
}

export default MdxProvider
