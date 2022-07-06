import { IMainLayoutProps, withMainLayout } from '@components/layout/main-layout'
import React from 'react'
import { MarkdownRemarkConnection } from 'src/types/graphql-types'
import { graphql } from 'gatsby'

interface IIndexPageProps extends IMainLayoutProps {
  data: {
    tags: MarkdownRemarkConnection
    posts: MarkdownRemarkConnection
  }
  pageContext: {
    tag?: string // only set into `templates/tags-page-styles.tsx`
  }
}

// markup
const IndexPage: React.FC<IIndexPageProps> = ({ data, pageContext }) => {
  console.log(data)
  console.log(pageContext)
  return (
    <main>
      <title>Home Page</title>
    </main>
  )
}

export default withMainLayout(IndexPage)

export const pageQuery = graphql`
  query PageIndex {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdDate] }
      filter: { frontmatter: { draft: { ne: true }, category: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          internal {
            content
          }
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            createdDate(formatString: "YYYY-MM-DD")
            tags
            category
          }
          fileAbsolutePath
        }
      }
    }
  }
`
