import { Post } from '@common/interfaces'
import MainLayout from '@components/layouts/MainLayout'
import { getAllPosts, getBlogPath, getPost, getSlug } from '@utils/doc'
import { markdownToHtml } from '@utils/markdown'
import fp from 'lodash/fp'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from 'next-mdx-remote'

type Props = {
  slug: string
  mdxContent: MDXRemoteSerializeResult
} & MDXRemoteProps

const BlogDetailPage: NextPage<Props> = ({ slug, frontmatter, mdxContent }) => {
  console.log(mdxContent)
  return (
    <>
      <MDXRemote {...mdxContent} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts()
  const paths = posts.map((post) => ({
    params: { slug: getSlug(post.slug) },
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { slug } = params as Params
  const toResult = async (post: Post) => ({
    slug: post.slug,
    frontMatter: post.meta,
    mdxContent: await markdownToHtml(post.content),
  })
  const props = await fp.flow([await getPost, await toResult])(
    getBlogPath(slug)
  )

  return {
    props,
  }
}

export default BlogDetailPage
// @ts-ignore
BlogDetailPage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)
