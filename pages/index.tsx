import { ReactElement } from 'react'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'

import { Post } from '@common/interfaces'
import SearchInput from '@components/atoms/search-input'
import MainLayout from '@components/layouts/main-layout'
import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
import MobilePosts from '@components/organisms/mobile-posts'
import Posts from '@components/organisms/posts'
import { useResponsive } from '@hooks/useResponsive'
import { useSearchTextDebounce } from '@hooks/useSearchTextDebounce'
import { getAllPosts } from '@utils/doc'

import type { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: Array<Post>
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  const { isMd } = useResponsive()

  const onSearchFilter = (searchText: string): Array<Post> =>
    fpFunction.pipe(
      posts,
      fpArray.filter(
        (a) =>
          a.content.includes(searchText) || a.meta.title.includes(searchText)
      )
    )

  const { filteredData, onSearchInputChange } = useSearchTextDebounce({
    data: posts,
    onSearchFilter,
  })

  return (
    <>
      <div>
        <SearchInput
          onChange={onSearchInputChange}
          className="w-full max-w-[600px]"
        />
      </div>
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
  return {
    props: {
      posts: await getAllPosts(),
    },
  }
}

export default IndexPage
// @ts-ignore
IndexPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
