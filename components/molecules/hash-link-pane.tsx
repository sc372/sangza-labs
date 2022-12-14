import { FC } from 'react'
import { RiCloseLine, RiLinksLine } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'

import { Meta } from '@common/interfaces'
import FloatingButton from '@components/atoms/floating-button'
import { getHashLinkInnerComponent } from '@components/atoms/mdx-heading'
import { HashLinkElement } from '@hooks/useHashLink'
import { useResponsive } from '@hooks/useResponsive'
import { useIsOpenHashLinkAction } from '@modules/hash-link/action'

import NonSsrWrapper from './non-ssr-wrapper'

interface Props {
  frontMatter: Meta
  hashLinkElementList: Array<HashLinkElement>
}

const HashLinkPane: FC<Props> = ({ frontMatter, hashLinkElementList }) => {
  const { isXl } = useResponsive()
  const { isOpenHashLink, toggleIsOpenHashLink } = useIsOpenHashLinkAction()

  return (
    <NonSsrWrapper>
      {isXl ? (
        <div>
          <FloatingButton
            onClick={() => toggleIsOpenHashLink()}
            className="top-8 right-16 z-50 h-8 w-8 text-tertiary dark:text-darkTertiary"
          >
            {isOpenHashLink ? <RiCloseLine /> : <RiLinksLine />}
          </FloatingButton>
          {isOpenHashLink && (
            <div className="fixed top-20 right-8 z-50 h-10">
              <div className="rounded-lg bg-secondary bg-opacity-95 px-6 py-2 dark:bg-opacity-95">
                <div className="mb-2 hover:text-primary">
                  {getHashLinkInnerComponent({
                    children: frontMatter.title,
                    link: '#',
                    onClick: () => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      toggleIsOpenHashLink()
                    },
                  })}
                </div>
                {fpFunction.pipe(
                  hashLinkElementList,
                  fpArray.mapWithIndex((i: number, a: HashLinkElement) => (
                    <div
                      key={i}
                      className="hover:text-primary"
                      onClick={() => toggleIsOpenHashLink()}
                    >
                      <span dangerouslySetInnerHTML={{ __html: a[0] }}></span>
                      <span dangerouslySetInnerHTML={{ __html: a[2] }}></span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-1/3 grow-0">
          <div className="absolute left-10 -ml-0.5 h-full w-0.5 bg-divider dark:bg-darkDivider"></div>
          <div className="sticky top-28 ml-16">
            <div className="mb-2 hover:text-primary">
              {getHashLinkInnerComponent({
                children: frontMatter.title,
                link: '#',
                onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
              })}
            </div>
            {fpFunction.pipe(
              hashLinkElementList,
              fpArray.mapWithIndex((i: number, a: HashLinkElement) => (
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
  )
}

export default HashLinkPane
