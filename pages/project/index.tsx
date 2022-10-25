import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/MainLayout'
import Posts from '@components/organisms/Posts'
import { getAllProjectPosts } from '@utils/doc'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: Array<Post>
}

const ProjectPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getAllProjectPosts(),
    },
  }
}

export default ProjectPage
// @ts-ignore
ProjectPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
