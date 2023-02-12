import { FC } from 'react'
import { RiPriceTag3Line, RiTimerLine } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta, Post } from '@common/interfaces'
import MdxAnchor from '@components/atoms/mdx-anchor'
import MdxCodeBlock from '@components/atoms/mdx-code-block'
import {
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
} from '@components/atoms/mdx-heading'
import MdxLi from '@components/atoms/mdx-list'
import MdxP from '@components/atoms/mdx-paragraph'
import MdxStrong from '@components/atoms/mdx-strong'
import Tag from '@components/atoms/tag'
import CategoryListPane from '@components/molecules/category-list-pane'
import HashLinkPane from '@components/molecules/hash-link-pane'
import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
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
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  p: MdxP,
  a: MdxAnchor,
  li: MdxLi,
  strong: MdxStrong,
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
            <div className="mb-5 border-t-[0.5px] border-solid text-divider dark:text-darkDivider"></div>
          </div>
          <NonSsrWrapper>
            {categoryList !== undefined && !fpArray.isEmpty(categoryList) && (
              <CategoryListPane
                categoryList={categoryList}
                currentTitle={frontMatter.title}
              />
            )}
          </NonSsrWrapper>
          <div className="prose mt-5 min-w-full" ref={docRefForHashLink}>
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
