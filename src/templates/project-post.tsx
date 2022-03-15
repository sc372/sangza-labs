import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { RouteComponentProps, WindowLocation } from '@reach/router'

// import { MarkdownRemark, MarkdownRemarkConnection, Site } from '../types/graphql-types'
import { withMainLayout, IMainLayoutProps } from '../components/layout/main-layout'

interface IProjectPostProps extends IMainLayoutProps, RouteComponentProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
  }
  location: WindowLocation
}

const ProjectPostPage: React.FC<IProjectPostProps> = ({ data, location }) => {
  console.log('ProjectPostPage')
  return <div>ProjectPostPage</div>
}

export default withMainLayout(ProjectPostPage)

export const pageQuery = graphql`
  query TemplateProjectPost($slug: String!) {
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
        project
        title
        createdDate(formatString: "YYYY-MM-DD")
      }
    }
  }
`
