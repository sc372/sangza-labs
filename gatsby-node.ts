import type { GatsbyNode } from 'gatsby'
import path from 'path'
import { slash } from 'gatsby-core-utils'
import { kebabCase, uniq, get, compact } from 'lodash'

// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `page-styles/blog.tsx:26`
// - `page-styles/blog.tsx:121`
const cleanArray = (arr) => compact(uniq(arr))

const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const [basePath, name] = fileNode.relativePath.split('/')
    createNodeField({ node, name: `slug`, value: `/${basePath}/${name}/` })
  }
  // let slug
  // switch (node.internal.type) {
  //   case `MarkdownRemark`:
  //     const fileNode = getNode(node.parent)
  //     const [basePath, name] = fileNode.relativePath.split('/')
  //     slug = `/${basePath}/${name}/`
  //     break
  // }
  // if (slug) {
  //   createNodeField({ node, name: `slug`, value: slug })
  // }
}

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create page-styles.
const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templates = ['blogPost', 'projectPost', 'tagsPage', 'projectsPage'].reduce((mem, templateName) => {
      return Object.assign({}, mem, {
        [templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`),
      })
    }, {})

    graphql(
      `
        {
          posts: allMarkdownRemark {
            edges {
              node {
                html
                fields {
                  slug
                }
                frontmatter {
                  tags
                  title
                  project
                }
              }
            }
          }
        }
      `
    ).then((result) => {
      if (result.errors) {
        return reject(result.errors)
      }
      const posts = result.data.posts.edges.map((p) => p.node)

      // Create blog page-styles
      posts
        .filter((post) => post.fields.slug.startsWith('/blog/'))
        .forEach((post) => {
          createPage({
            path: post.fields.slug,
            component: slash(templates.blogPost),
            context: {
              slug: post.fields.slug,
            },
          })
        })

      // Create project post page-styles
      posts
        .filter((post) => post.fields.slug.startsWith('/project/'))
        .forEach((post) => {
          createPage({
            path: post.fields.slug,
            component: slash(templates.projectPost),
            context: {
              slug: post.fields.slug,
            },
          })
        })

      // Create tags page-styles
      posts
        .reduce((mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.tags'))), [])
        .forEach((tag) => {
          createPage({
            path: `/blog/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag,
            },
          })
        })

      // Create project page-styles
      posts
        .reduce((mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.project'))), [])
        .forEach((project) => {
          createPage({
            path: `/projects/${kebabCase(project)}/`,
            component: slash(templates.projectsPage),
            context: {
              project,
            },
          })
        })

      resolve()
    })
  })
}

export { onCreateNode, createPages }

// const path = require('path')
// const slash = require('slash')
// const { kebabCase, uniq, get, compact } = require('lodash')

// // Don't forget to update hard code values into:
// // - `templates/blog-page.tsx:23`
// // - `page-styles/blog.tsx:26`
// // - `page-styles/blog.tsx:121`
// const cleanArray = (arr) => compact(uniq(arr))

// // Create slugs for files.
// // Slug will used for blog page path.
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   let slug
//   switch (node.internal.type) {
//     case `MarkdownRemark`:
//       const fileNode = getNode(node.parent)
//       const [basePath, name] = fileNode.relativePath.split('/')
//       slug = `/${basePath}/${name}/`
//       break
//   }
//   if (slug) {
//     createNodeField({ node, name: `slug`, value: slug })
//   }
// }

// // Implement the Gatsby API `createPages`.
// // This is called after the Gatsby bootstrap is finished
// // so you have access to any information necessary to
// // programatically create page-styles.
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const templates = ['blogPost', 'projectPost', 'tagsPage', 'projectsPage'].reduce((mem, templateName) => {
//       return Object.assign({}, mem, {
//         [templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`),
//       })
//     }, {})

//     graphql(
//       `
//         {
//           posts: allMarkdownRemark {
//             edges {
//               node {
//                 html
//                 fields {
//                   slug
//                 }
//                 frontmatter {
//                   tags
//                   title
//                   project
//                 }
//               }
//             }
//           }
//         }
//       `
//     ).then((result) => {
//       if (result.errors) {
//         return reject(result.errors)
//       }
//       const posts = result.data.posts.edges.map((p) => p.node)

//       // Create blog page-styles
//       posts
//         .filter((post) => post.fields.slug.startsWith('/blog/'))
//         .forEach((post) => {
//           createPage({
//             path: post.fields.slug,
//             component: slash(templates.blogPost),
//             context: {
//               slug: post.fields.slug,
//             },
//           })
//         })

//       // Create project post page-styles
//       posts
//         .filter((post) => post.fields.slug.startsWith('/project/'))
//         .forEach((post) => {
//           createPage({
//             path: post.fields.slug,
//             component: slash(templates.projectPost),
//             context: {
//               slug: post.fields.slug,
//             },
//           })
//         })

//       // Create tags page-styles
//       posts
//         .reduce((mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.tags'))), [])
//         .forEach((tag) => {
//           createPage({
//             path: `/blog/tags/${kebabCase(tag)}/`,
//             component: slash(templates.tagsPage),
//             context: {
//               tag,
//             },
//           })
//         })

//       // Create project page-styles
//       posts
//         .reduce((mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.project'))), [])
//         .forEach((project) => {
//           createPage({
//             path: `/projects/${kebabCase(project)}/`,
//             component: slash(templates.projectsPage),
//             context: {
//               project,
//             },
//           })
//         })

//       resolve()
//     })
//   })
// }
