import { GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/main-layout'
import SelfIIntro from '@components/molecules/self-intro'
import Timeline from '@components/molecules/timeline'
import { getAllProjectPosts } from '@utils/doc'

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
