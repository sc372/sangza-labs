import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta, Post } from '@common/interfaces'
import MainLayout from '@components/layouts/main-layout'
import MdxProvider from '@components/organisms/mdx-provider'
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
      <MdxProvider
        slug={slug}
        frontMatter={frontMatter}
        mdxContent={mdxContent}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllProjectPosts()

  const paths = fpFunction.pipe(
    posts,
    fpArray.mapWithIndex((i, a) => ({
      params: {
        slug: getSlug(a.slug),
        title: a.meta.project,
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
  slug: string
  title: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, title } = params as Params
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
