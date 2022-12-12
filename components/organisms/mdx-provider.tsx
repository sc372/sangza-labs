import { FC } from 'react'
import {
  RiCloseLine,
  RiLinksLine,
  RiPriceTag3Line,
  RiTimerLine,
} from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'

import { Meta } from '@common/interfaces'
import FloatingButton from '@components/atoms/floating-button'
import MdxCodeBlock from '@components/atoms/mdx-code-block'
import {
  getAnchorInnerComponent,
  H1,
  H2,
  H3,
  H4,
  H5,
} from '@components/atoms/mdx-heading'
import Tag from '@components/atoms/tag'
import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
import { AnchorElement, useAnchor } from '@hooks/useAnchor'
import { useReadingTime } from '@hooks/useReadingTime'
import { useResponsive } from '@hooks/useResponsive'
import { useIsOpenAnchorAction } from '@modules/anchor/action'

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
  const { isXl } = useResponsive()
  const { docRef, readingTime } = useReadingTime()
  const { docRef: docRefForAnchor, anchorElementList } = useAnchor()
  const { isOpenAnchor, toggleIsOpenAnchor } = useIsOpenAnchorAction()

  return (
    <div className={`${className} flex-wrap`}>
      <div className="xl:flex xl:flex-row">
        <div className="grow" ref={docRef}>
          <div>
            <div className="mb-5 text-3xl">{frontMatter.title}</div>
            <div className="mb-2 flex flex-col items-end text-tertiary">
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
            <div className="mb-10 border-t-[0.5px] border-solid text-divider"></div>
          </div>
          <div className="prose min-w-full" ref={docRefForAnchor}>
            <MDXRemote {...mdxContent} components={MDXComponents} />
          </div>
        </div>
        <NonSsrWrapper>
          {isXl ? (
            <div>
              <FloatingButton
                onClick={() => toggleIsOpenAnchor()}
                className="top-8 right-8 z-50 h-8 w-8 bg-primary"
              >
                {isOpenAnchor ? <RiCloseLine /> : <RiLinksLine />}
              </FloatingButton>
              {isOpenAnchor && (
                <div className="fixed top-20 right-8 z-50 h-10 w-64">
                  <div className="rounded-lg bg-secondary bg-opacity-90 px-6 py-2 ring-1 ring-primary">
                    <div className="mb-2 hover:text-primary">
                      {getAnchorInnerComponent({
                        children: frontMatter.title,
                        link: '#',
                        onClick: () => {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                          toggleIsOpenAnchor()
                        },
                      })}
                    </div>
                    {fpFunction.pipe(
                      anchorElementList,
                      fpArray.mapWithIndex((i: number, a: AnchorElement) => (
                        <div
                          key={i}
                          className="hover:text-primary"
                          onClick={() => toggleIsOpenAnchor()}
                        >
                          <span
                            dangerouslySetInnerHTML={{ __html: a[0] }}
                          ></span>
                          <span
                            dangerouslySetInnerHTML={{ __html: a[2] }}
                          ></span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="relative w-1/3 grow-0">
              <div className="absolute left-10 -ml-0.5 h-full w-0.5 bg-secondary"></div>
              <div className="sticky top-28 ml-16">
                <div className="mb-2 hover:text-primary">
                  {getAnchorInnerComponent({
                    children: frontMatter.title,
                    link: '#',
                    onClick: () =>
                      window.scrollTo({ top: 0, behavior: 'smooth' }),
                  })}
                </div>
                {fpFunction.pipe(
                  anchorElementList,
                  fpArray.mapWithIndex((i: number, a: AnchorElement) => (
                    <div key={i} className="hover:text-primary">
                      <span dangerouslySetInnerHTML={{ __html: a[0] }}></span>
                      <span dangerouslySetInnerHTML={{ __html: a[2] }}></span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </NonSsrWrapper>
      </div>
    </div>
  )
}

export default MdxProvider
