import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { RouteComponentProps, WindowLocation } from '@reach/router'
// import {
//   directoryCtimeQueryString_2,
//   MarkdownRemark,
//   MarkdownRemarkConnection,
//   Site,
//   sitePagePluginCreatorPackageJsonKeywordsQueryList,
// } from '../types/graphql-types'
import { IMainLayoutProps, withMainLayout } from '@components/layout/main-layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site } from '@types/gatsby-graphql'
import _ from 'lodash'

import '@scss/blog-post.scss'

interface IBlogPostProps extends IMainLayoutProps, RouteComponentProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
  }
  location: WindowLocation
}

const BlogPostPage: React.FC<IBlogPostProps> = ({ data, location }) => {
  return (
    <div className="prose prose-a:text-blue-600 hover:prose-a:text-blue-500">
      <div className="blog-post-subject-wrapper w-screen">
        <h1>{data.post.frontmatter?.title}</h1>
        <div>{data.post.frontmatter?.createdDate}</div>
        {_.map(data.post.frontmatter?.tags, (a, i) => (
          <span key={i}>
            <Link to={`/blog/tags/${a}/`}>
              <div>{a}</div>
            </Link>
          </span>
        ))}
      </div>
      <div className="blog-post-min-read">{data.post.timeToRead} min read</div>
      <hr className="blog-post-hr" />
      <div className="w-full" dangerouslySetInnerHTML={{ __html: data.post.html! }} />
    </div>
  )
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
