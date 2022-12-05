import { RiHashtag } from 'react-icons/ri'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/main-layout'
import Posts from '@components/organisms/posts'
import { getAllTags, getPostsByTag } from '@utils/doc'

interface Props {
  tag: string
  posts: Array<Post>
}

const TagPage: NextPage<Props> = ({ tag, posts }) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div>
          <RiHashtag style={{ height: '100%', width: 'calc(0.7vw + 1rem)' }} />
        </div>
        <div className="ml-3 text-3xl">{tag}</div>
      </div>
      <Posts posts={posts} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getAllTags()
  const paths = tags.map((tag) => ({
    params: { tag },
  }))

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
