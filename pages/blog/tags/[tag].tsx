import { RiHashtag } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/main-layout'
import NonSsrWrapper from '@components/molecules/non-ssr-wrapper'
import MobilePosts from '@components/organisms/mobile-posts'
import Posts from '@components/organisms/posts'
import { useResponsive } from '@hooks/useResponsive'
import { getAllTags, getPostsByTag } from '@utils/doc'

interface Props {
  tag: string
  posts: Array<Post>
}

const TagPage: NextPage<Props> = ({ tag, posts }) => {
  const { isMd } = useResponsive()

  return (
    <>
      <div className="flex flex-row items-center">
        <div>
          <RiHashtag
            style={{
              height: '100%',
              width: 'calc(0.7vw + 1rem)',
              fontWeight: '600',
            }}
          />
        </div>
        <div className="ml-3 text-3xl font-semibold">{tag}</div>
      </div>
      <NonSsrWrapper>
        {isMd ? <MobilePosts posts={posts} /> : <Posts posts={posts} />}
      </NonSsrWrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getAllTags()
  const paths = fpFunction.pipe(
    tags,
    fpArray.mapWithIndex((i, a) => ({
      params: { tag: a },
    }))
  )

  return {
    paths,
    fallback: 'blocking',
  }
}

interface Params {
  [key: string]: string | undefined
  tag: string
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { tag } = params as Params
  return {
    props: {
      tag,
      posts: getPostsByTag(tag),
    },
  }
}

export default TagPage
// @ts-ignore
TagPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
