import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta, Post } from '@common/interfaces'
import MainLayout from '@components/layouts/main-layout'
import {
  getAllProjectPosts,
  getSlug,
  getPost,
  getProjectPath,
} from '@utils/doc'
import { markdownToHtml } from '@utils/markdown'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
}

const ProjectPage: NextPage<Props> = ({ slug, frontMatter, mdxContent }) => {
  return (
    <>
      <MDXRemote {...mdxContent} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllProjectPosts()

  const paths = posts.map((post) => ({
    params: {
      slug: getSlug(post.slug),
      title: post.meta.project,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

interface Params {
  [key: string]: string | undefined
  slug: string
  title: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, title } = params as Params
  console.log(slug)
  console.log(title)
  const toResult = async (post: Post) => ({
    slug: post.slug,
    frontMatter: post.meta,
    mdxContent: await markdownToHtml(post.content),
  })

  const props = await fpFunction.pipe(
    getProjectPath(slug, title),
    await getPost,
    await toResult
  )

  return {
    props,
  }
}

export default ProjectPage
// @ts-ignore
ProjectPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
