import { FC } from 'react'
import { RiPriceTag3Line, RiTimerLine } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'

import { Meta, Post } from '@common/interfaces'
import A from '@components/atoms/mdx-anchor'
import MdxCodeBlock from '@components/atoms/mdx-code-block'
import { H1, H2, H3, H4, H5 } from '@components/atoms/mdx-heading'
import Li from '@components/atoms/mdx-list'
import P from '@components/atoms/mdx-paragraph'
import Pre from '@components/atoms/mdx-pre'
import Strong from '@components/atoms/mdx-strong'
import Tag from '@components/atoms/tag'
import CategoryListBox from '@components/molecules/category-list-box'
import HashLinkPane from '@components/molecules/hash-link-pane'
import { useHashLink } from '@hooks/useHashLink'
import { useReadingTime } from '@hooks/useReadingTime'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
  className?: string
  categoryList?: Array<Post>
}

const MDXComponents = {
  code: MdxCodeBlock,
  image: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  pre: Pre,
  a: A,
  li: Li,
  strong: Strong,
}

const MdxProvider: FC<Props> = ({
  slug,
  frontMatter,
  mdxContent,
  className,
  categoryList,
}) => {
  const { docRef, readingTime } = useReadingTime()
  const { docRef: docRefForHashLink, hashLinkElementList } = useHashLink()

  return (
    <div className={`${className} flex-wrap`}>
      <div className="xl:flex xl:flex-row">
        <div className="grow" ref={docRef}>
          <div>
            <div className="mb-5 text-3xl">{frontMatter.title}</div>
            <div className="mb-2 flex flex-col items-end text-tertiary dark:text-darkTertiary">
              <div>
                <span></span> create: {frontMatter.createdDate}
              </div>
              <div>update: {frontMatter.updatedDate}</div>
              <div className="flex items-center">
                <RiTimerLine />
                <div className="ml-2">{readingTime}</div>
              </div>
              <div className="mb-10 flex flex-row">
                {frontMatter.tags !== undefined &&
                  !fpArray.isEmpty(frontMatter.tags) &&
                  fpFunction.pipe(
                    frontMatter.tags,
                    fpArray.mapWithIndex((i, a) => (
                      <span className="flex items-center" key={i}>
                        {i === 0 && <RiPriceTag3Line />}
                        <Tag name={a} href={`/tags/${a}`} className="ml-2" />
                      </span>
                    ))
                  )}
              </div>
            </div>
            <div className="mb-10 border-t-[0.5px] border-solid text-divider dark:text-darkDivider"></div>
          </div>
          <div className="prose min-w-full" ref={docRefForHashLink}>
            {categoryList !== undefined && !fpArray.isEmpty(categoryList) && (
              <CategoryListBox categoryList={categoryList} />
            )}
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
