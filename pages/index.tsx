import { Post } from '@common/interfaces'
import SearchInput from '@components/atoms/SearchInput'
import MainLayout from '@components/layouts/MainLayout'
import Posts from '@components/organisms/Posts'
import { useSearchText } from '@hooks/useSearchText'
import { getAllPosts } from '@utils/doc'
import type { GetStaticProps, NextPage } from 'next'
import { ReactElement } from 'react'

interface Props {
  posts: Array<Post>
}

const IndexPage: NextPage<Props> = ({ posts }) => {
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
      <SearchInput
        onChange={onSearchInputChange}
        onClick={onSearchInputClick}
        onKeyDown={onSearchInputKeyDown}
      />
      <Posts posts={filteredData} />
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
