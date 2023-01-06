import dayjs from 'dayjs'
import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import { GetServerSidePropsContext } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import { Post } from '@common/interfaces'
import { getAllPosts, getUriByPost } from '@utils/doc'
import siteConfig from 'site.config'

const SiteMapPage = () => {
  return
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const allPost = await getAllPosts()

  const makeLastmod = (a: string) => dayjs(a).toISOString()
  const makeUrl = (a: string | undefined) => siteConfig.url + a
  const makeField = (a: Post): ISitemapField => ({
    loc: fpFunction.pipe(a, getUriByPost, makeUrl),
    changefreq: 'daily',
    priority: 0.8,
    lastmod: makeLastmod(a.meta.createdDate),
  })

  const fields = fpFunction.pipe(allPost, fpArray.map(makeField))

  return getServerSideSitemap(ctx, fields)
}

export default SiteMapPage
