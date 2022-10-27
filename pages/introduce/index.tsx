import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/MainLayout'
import SelfIIntro from '@components/molecules/SelfIntro'
import Timeline from '@components/molecules/Timeline'
import { getAllProjectPosts } from '@utils/doc'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: Array<Post>
}

const IntroducePage: NextPage<Props> = ({ posts }) => {
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

export default IntroducePage
// @ts-ignore
IntroducePage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)
