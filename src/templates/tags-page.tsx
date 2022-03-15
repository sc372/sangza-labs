import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { withMainLayout, IMainLayoutProps } from '../components/layout/main-layout'
// import { MarkdownRemarkConnection } from '../types/graphql-types'
import { MarkdownRemarkConnection } from '@types/graphql-types'

interface ITagPageProps extends IMainLayoutProps {
  data: {
    tags: MarkdownRemarkConnection
    posts: MarkdownRemarkConnection
  }
  pageContext: {
    tag?: string // only set into `templates/tags-page-styles.tsx`
  }
}

const TagPage: React.FC<ITagPageProps> = ({ data, pageContext }) => {
  console.log('TagPage')
  return <div>TagPage</div>
}

export default withMainLayout(TagPage)

export const pageQuery = graphql`
  query TemplateTagPage($tag: String) {
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
      filter: { frontmatter: { draft: { ne: true }, tags: { in: [$tag] } }, fileAbsolutePath: { regex: "/blog/" } }
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
          }
        }
      }
    }
  }
`
