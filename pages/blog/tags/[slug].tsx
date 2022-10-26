import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/MainLayout'
import Posts from '@components/organisms/Posts'
import { getAllTags, getPostsByTag } from '@utils/doc'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = {
  slug: string
  posts: Array<Post>
}

const TagPage: NextPage<Props> = ({ slug, posts }) => {
  return (
    <>
      <div># {slug}</div>
      <Posts posts={posts} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getAllTags()
  const paths = tags.map((tag) => ({
    params: { slug: tag },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

interface Params {
  [key: string]: string | undefined
  slug: string
}

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const { slug } = params as Params
  return {
    props: {
      slug,
      posts: getPostsByTag(slug),
    },
  }
}

export default TagPage
// @ts-ignore
TagPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>