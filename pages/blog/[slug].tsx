import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta, Post } from '@common/interfaces'
import MainLayout from '@components/layouts/main-layout'
import { getAllBlogPosts, getBlogPath, getPost, getSlug } from '@utils/doc'
import { markdownToHtml } from '@utils/markdown'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
}

const BlogDetailPage: NextPage<Props> = ({ slug, frontMatter, mdxContent }) => {
  return (
    <>
      <MDXRemote {...mdxContent} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllBlogPosts()
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

  const props = await fpFunction.pipe(
    getBlogPath(slug),
    await getPost,
    await toResult
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
