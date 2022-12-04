import { ReactElement } from 'react'

import { Post } from '@common/interfaces'
import SearchInput from '@components/atoms/search-input'
import MainLayout from '@components/layouts/main-layout'
import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
import MobilePosts from '@components/organisms/mobile-posts'
import Posts from '@components/organisms/posts'
import { useResponsive } from '@hooks/useResponsive'
import { useSearchText } from '@hooks/useSearchText'
import { useIsOpenSearchInputAction } from '@modules/search/action'
import { getAllPosts } from '@utils/doc'

import type { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: Array<Post>
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  const { isMd } = useResponsive()
  const { isOpenSearchInput } = useIsOpenSearchInputAction()

  const onSearchFilter = (searchText: string): Array<Post> =>
    posts.filter(
      (post) =>
        post.content.includes(searchText) ||
        post.meta.title.includes(searchText)
    )

  const {
    filteredData,
    onSearchInputChange,
    onSearchInputClick,
    onSearchInputKeyDown,
  } = useSearchText({ data: posts, onSearchFilter })

  return (
    <>
      {isOpenSearchInput && (
        <div className="sticky z-[200]">
          <SearchInput
            onChange={onSearchInputChange}
            onClick={onSearchInputClick}
            onKeyDown={onSearchInputKeyDown}
            className="w-full max-w-[600px] bg-background"
          />
        </div>
      )}
      <NonSsrWrapper>
        {isMd ? (
          <MobilePosts posts={filteredData} />
        ) : (
          <Posts posts={filteredData} />
        )}
      </NonSsrWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context)
  return {
    props: {
      posts: await getAllPosts(),
    },
  }
}

export default IndexPage
// @ts-ignore
IndexPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
