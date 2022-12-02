import { GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/main-layout'
import MobilePosts from '@components/organisms/mobile-posts'
import Posts from '@components/organisms/posts'
import { useResponsive } from '@hooks/useResponsive'
import { getAllBlogPosts } from '@utils/doc'

interface Props {
  posts: Array<Post>
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  const { isMd } = useResponsive()

  return <>{isMd ? <MobilePosts posts={posts} /> : <Posts posts={posts} />}</>
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
