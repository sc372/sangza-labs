import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta, Post } from '@common/interfaces'
import { docCategoryType } from '@common/types/doc-category-type'
import MainLayout from '@components/layouts/main-layout'
import { PostSeo } from '@components/molecules/seo'
import MdxProvider from '@components/organisms/mdx-provider'
import {
  getPostBySlug,
  getPostsByCategoryTitle,
  getPostsByCategoryType,
} from '@utils/doc'
import { markdownToHtml } from '@utils/markdown'

interface Props {
  slug: string
  frontMatter: Meta
  mdxContent: MDXRemoteSerializeResult
  categoryList: Array<Post>
}

const ProjectPage: NextPage<Props> = ({
  slug,
  frontMatter,
  mdxContent,
  categoryList,
}) => {
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
        categoryList={categoryList}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPostsByCategoryType(docCategoryType.project)

  const paths = fpFunction.pipe(
    posts,
    fpArray.map((a) => ({
      params: {
        slug: a.slug,
        title: a.meta.categoryTitle,
      },
    }))
  )

  console.log(paths)

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
  const { slug } = params as Params
  const post = getPostBySlug(slug)

  const makeResult = async (a: Post) => {
    return {
      slug: a.slug,
      frontMatter: a.meta,
      mdxContent: await markdownToHtml(a.content),
      categoryList: await getPostsByCategoryTitle(a.meta.categoryTitle),
    }
  }

  const props =
    post !== null ? await fpFunction.pipe(post, await makeResult) : []

  return {
    props,
  }
}

export default ProjectPage
// @ts-ignore
ProjectPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
