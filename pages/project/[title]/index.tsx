import { RiFlashlightFill } from 'react-icons/ri'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import { projectType } from '@common/types/project-type'
import MainLayout from '@components/layouts/main-layout'
import Posts from '@components/organisms/posts'
import { getFilteredProjectPosts } from '@utils/doc'

interface Props {
  title: string
  posts: Array<Post>
}

const ProjectPage: NextPage<Props> = ({ title, posts }) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div>
          <RiFlashlightFill
            style={{ height: '100%', width: 'calc(0.7vw + 1rem)' }}
          />
        </div>
        <div className="ml-3 text-3xl">{title}</div>
      </div>
      <Posts posts={posts} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(projectType).map((a) => ({
    params: {
      title: a,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

interface Params {
  [key: string]: string | undefined
  title: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { title } = params as Params
  return {
    props: {
      title,
      posts: await getFilteredProjectPosts(title),
    },
  }
}

export default ProjectPage
// @ts-ignore
ProjectPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
