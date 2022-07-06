import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

interface IMeta {
  name: string
  content: string
}

interface ISeoProps {
  description: string
  lang: string
  metaList: IMeta[]
  title: string
}

const Seo: FC<ISeoProps> = ({ description, lang, metaList, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  console.log(metaDescription)
  console.log(metaDescription)
  console.log(metaDescription)
  console.log(metaDescription)
  console.log(defaultTitle)
  console.log(defaultTitle)
  console.log(defaultTitle)
  console.log(defaultTitle)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(metaList)}
    />
  )
}

export default Seo
