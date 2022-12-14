import { FC } from 'react'

import { ArticleJsonLd, DefaultSeo, NextSeo } from 'next-seo'

import siteConfig from '../../site.config'
// import tailwindConfig from '../../tailwind.config'

interface PostSeoProps {
  title: string
  description: string
  author: string
  uri: string
  createdDate: string
  updatedDate: string
  tags: Array<string>
  images?: Array<string>
}

export const PostSeo: FC<PostSeoProps> = ({
  title,
  description,
  author,
  uri,
  createdDate,
  updatedDate,
  tags,
  images = [],
}) => {
  return (
    <>
      <NextSeo
        title={`${title} – ${siteConfig.title}`}
        description={description}
        canonical={uri}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: createdDate,
            modifiedTime: updatedDate,
            authors: [`${siteConfig.url}/about`],
            tags,
          },
          url: `${siteConfig.url}${uri}`,
          title,
          description,
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={createdDate}
        datePublished={updatedDate}
        description={description}
        publisherName={author}
        title={title}
        url={`${siteConfig.url}${uri}`}
        images={images}
        publisherLogo={`${siteConfig.url}/static/logo.png`}
      />
    </>
  )
}

export const AppSeo = () => (
  <DefaultSeo
    title={siteConfig.title}
    description={siteConfig.description}
    openGraph={{
      type: 'website',
      url: siteConfig.url,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: siteConfig.images,
      locale: siteConfig.locale,
    }}
    themeColor={siteConfig.tailwind.theme.colors.primary}
    additionalMetaTags={[
      {
        property: 'dc:author',
        content: siteConfig.authors[0].id,
      },
    ]}
  />
)
