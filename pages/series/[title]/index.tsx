import { RiBookFill } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import { docCategoryType } from '@common/types/doc-category-type'
import MainLayout from '@components/layouts/main-layout'
import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
import MobilePosts from '@components/organisms/mobile-posts'
import Posts from '@components/organisms/posts'
import { useResponsive } from '@hooks/useResponsive'
import {
  getFilteredPostsByTitleAndCategoryType,
  getSeriesTitle,
} from '@utils/doc'

interface Props {
  title: string
  posts: Array<Post>
}

const SeriesPage: NextPage<Props> = ({ title, posts }) => {
  const { isMd } = useResponsive()
  return (
    <>
      <div className="flex flex-row items-center">
        <div>
          <RiBookFill
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
    getSeriesTitle(),
    fpArray.map((a) => ({
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
      posts: await getFilteredPostsByTitleAndCategoryType(
        title,
        docCategoryType.series
      ),
    },
  }
}

export default SeriesPage
// @ts-ignore
SeriesPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
