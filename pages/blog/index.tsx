import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/MainLayout'
import Posts from '@components/organisms/Posts'
import { getAllBlogPosts } from '@utils/doc'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: Array<Post>
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getAllBlogPosts(),
    },
  }
}

export default BlogPage
// @ts-ignore
BlogPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
