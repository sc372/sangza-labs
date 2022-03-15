import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { withMainLayout, IMainLayoutProps } from '../components/layout/main-layout'
// import { MarkdownRemarkConnection } from '../types/graphql-types'
import { MarkdownRemarkConnection } from '@types/gatsby-graphql'

interface IProjectPageProps extends IMainLayoutProps {
  data: {
    projects: MarkdownRemarkConnection
    posts: MarkdownRemarkConnection
  }
  pageContext: {
    project?: string
  }
}

const ProjectPage: React.FC<IProjectPageProps> = ({ data, pageContext }) => {
  console.log('ProjectPage')
  return <div>ProjectPage</div>
}

export default withMainLayout(ProjectPage)

export const pageQuery = graphql`
  query TemplateProjectPage($project: String) {
    # Get projects
    projects: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___project) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdDate] }
      filter: {
        frontmatter: { draft: { ne: true }, project: { in: [$project] } }
        fileAbsolutePath: { regex: "/project/" }
      }
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
            project
          }
        }
      }
    }
  }
`
