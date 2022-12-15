import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta, Post } from '@common/interfaces'
import { envType } from '@common/types/env-type'
import MainLayout from '@components/layouts/main-layout'
import { PostSeo } from '@components/molecules/seo'
import MdxProvider from '@components/organisms/mdx-provider'
import { getAllProjectPosts, getPost } from '@utils/doc'
import { markdownToHtml } from '@utils/markdown'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
}

const ProjectPage: NextPage<Props> = ({ slug, frontMatter, mdxContent }) => {
  return (
    <>
      <PostSeo
        author={frontMatter.author}
        title={frontMatter.title}
        description={frontMatter.title}
        tags={frontMatter.tags}
        createdDate={frontMatter.createdDate}
        updatedDate={frontMatter.updatedDate}
        uri={`/blog/${slug}`}
      />
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
    fpArray.map((a) => ({
      params: {
        slug: a.slug,
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
  const makeFullPath = (a: Params) => {
    if (process.env.NODE_ENV === envType.development) {
      return `${process.cwd()}/data/project/${a.title}/${a.slug}/index.md`
    } else if (process.env.NODE_ENV === envType.production) {
      return a.slug
    } else {
      return ''
    }
  }
  const makeResult = async (a: Post) => ({
    slug: a.slug,
    frontMatter: a.meta,
    mdxContent: await markdownToHtml(a.content),
  })

  const props = await fpFunction.pipe(
    params as Params,
    makeFullPath,
    await getPost,
    await makeResult
  )

  return {
    props,
  }
}

export default ProjectPage
// @ts-ignore
ProjectPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
