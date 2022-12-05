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
  console.log(posts)
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="mx-5 flex justify-center pt-5 md:mx-14">
        <SelfIIntro />
      </div>
      <div className="mt-10 flex h-[55vh] justify-center overflow-y-auto px-5 md:px-14 xl:h-[75vh]">
        <Timeline list={posts}/>
      </div>
    </div>
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
