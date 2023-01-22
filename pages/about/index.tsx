import { GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import { docCategoryType } from '@common/types/doc-category-type'
import MainLayout from '@components/layouts/main-layout'
import SelfIIntro from '@components/molecules/self-intro'
import Timeline from '@components/molecules/timeline'
import { getPostsByCategoryType } from '@utils/doc'

interface Props {
  posts: Array<Post>
}

const AboutPage: NextPage<Props> = ({ posts }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center xl:flex-row">
      <div className="mx-5 flex justify-center md:mx-14 lg:mb-0">
        <SelfIIntro />
      </div>
      <div className="my-10 flex h-[50vh] justify-center overflow-y-auto px-5 md:px-14 xl:h-[70vh]">
        <Timeline list={posts} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getPostsByCategoryType(docCategoryType.project),
    },
  }
}

export default AboutPage
// @ts-ignore
AboutPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
