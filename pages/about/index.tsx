import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/MainLayout'
import SelfIIntro from '@components/molecules/SelfIntro'
import Timeline from '@components/molecules/Timeline'
import { getAllProjectPosts } from '@utils/doc'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: Array<Post>
}

const AboutPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      {/* <Posts posts={posts} /> */}
      <SelfIIntro />
      <Timeline />
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

export default AboutPage
// @ts-ignore
AboutPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
