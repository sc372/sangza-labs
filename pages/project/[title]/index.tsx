import { RiFlashlightFill } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import { projectType } from '@common/types/project-type'
import MainLayout from '@components/layouts/main-layout'
import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
import MobilePosts from '@components/organisms/mobile-posts'
import Posts from '@components/organisms/posts'
import { useResponsive } from '@hooks/useResponsive'
import { getFilteredProjectPosts } from '@utils/doc'

interface Props {
  title: string
  posts: Array<Post>
}

const ProjectPage: NextPage<Props> = ({ title, posts }) => {
  const { isMd } = useResponsive()
  return (
    <>
      <div className="flex flex-row items-center">
        <div>
          <RiFlashlightFill
            style={{
              height: '100%',
              width: 'calc(0.7vw + 1rem)',
              fontWeight: '600',
            }}
          />
        </div>
        <div className="ml-3 text-3xl font-semibold">{title}</div>
      </div>
      <NonSsrWrapper>
        {isMd ? <MobilePosts posts={posts} /> : <Posts posts={posts} />}
      </NonSsrWrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fpFunction.pipe(
    Object.values(projectType),
    fpArray.mapWithIndex((i, a) => ({
      params: {
        title: a,
      },
    }))
  )

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
