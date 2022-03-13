import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { RouteComponentProps, WindowLocation } from '@reach/router'
import {
  directoryCtimeQueryString_2,
  MarkdownRemark,
  MarkdownRemarkConnection,
  Site,
  sitePagePluginCreatorPackageJsonKeywordsQueryList,
} from '../types/graphql-types'
import { IMainLayoutProps, withMainLayout } from '@components/layout/main-layout'

interface IBlogPostProps extends IMainLayoutProps, RouteComponentProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
  }
  location: WindowLocation
}

const BlogPostPage: React.FC<IBlogPostProps> = ({ data, location }) => {
  console.log('BlogPostPage')
  return <div>BlogPostPage</div>
}

export default withMainLayout(BlogPostPage)

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site: site {
      siteMetadata {
        disqus
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      excerpt
      excerptAst
      timeToRead
      fields {
        slug
      }
      frontmatter {
        tags
        title
        createdDate(formatString: "YYYY-MM-DD")
      }
    }
    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___createdDate] }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            author {
              id
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(width: 36, height: 36) {
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
