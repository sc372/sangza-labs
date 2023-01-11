import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta, Post } from '@common/interfaces'
import { docCategoryType } from '@common/types/doc-category-type'
import MainLayout from '@components/layouts/main-layout'
import { PostSeo } from '@components/molecules/seo'
import MdxProvider from '@components/organisms/mdx-provider'
import { getAllPosts, getPostBySlug, getPostsByCategoryType } from '@utils/doc'
import { markdownToHtml } from '@utils/markdown'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
}

const BlogDetailPage: NextPage<Props> = ({ slug, frontMatter, mdxContent }) => {
  return (
    <>
      <PostSeo
        author={frontMatter.author}
        title={frontMatter.title}
        description={frontMatter.description}
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
  const posts = await getPostsByCategoryType(docCategoryType.blog)

  const paths = fpFunction.pipe(
    posts,
    fpArray.map((a) => ({
      params: { slug: a.slug },
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
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params

  // const { slug } = params as Params
  // const makeFullPath = (a: string) => {
  //   if (process.env.NODE_ENV === envType.production) {
  //     return a
  //   } else {
  //     return `${process.cwd()}/data/blog/${a}/index.md`
  //   }
  // }
  const makeResult = async (a: Post) => ({
    slug: a.slug,
    frontMatter: a.meta,
    mdxContent: await markdownToHtml(a.content),
  })

  // const props = await fpFunction.pipe(
  //   slug,
  //   makeFullPath,
  //   await getPost,
  //   await makeResult
  // )
  const props = await fpFunction.pipe(
    getAllPosts,
    () => getPostBySlug(slug),
    // () => getPostBySlug(`blog/${slug}`),
    await makeResult
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
