import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `sangza labs | scientific thinking`,
    description: `상자 입니다.`,
    author: `sangza`,
    siteUrl: `https://www.sangza.com/`,
    disqus: 'gatsby-typescript',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson`,
  },
  plugins: [
    `gatsby-plugin-tsconfig-paths`,
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.resolve(`data`),
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sangza labs | scientific thinking`,
        short_name: `sangza labs`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `data/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `.@types/gatsby-graphql.ts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
}

export default config

// /** @type {import('gatsby).GatsbyConfig} */
// module.exports = {
//   siteMetadata: {
//     title: `sangza labs | scientific thinking`,
//     description: `상자 입니다.`,
//     author: `@sangza`,
//     siteUrl: `https://www.sangza.com/`,
//   },
//   plugins: [
//     `gatsby-plugin-postcss`,
//     {
//       resolve: `gatsby-plugin-sass`,
//       options: {
//         postCssPlugins: [
//           require('tailwindcss'),
//           require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
//         ],
//       },
//     },
//     `gatsby-plugin-react-helmet`,
//     `gatsby-transformer-json`,
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//     {
//       resolve: `gatsby-plugin-google-analytics`,
//       options: {
//         trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
//         // Puts tracking script in the head instead of the body
//         head: false,
//         // Setting this parameter is optional
//         anonymize: true,
//         // Setting this parameter is also optional
//         respectDNT: true,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `sangza labs | scientific thinking`,
//         short_name: `sangza labs`,
//         start_url: `/`,
//         background_color: `#f7f7f7`,
//         theme_color: `#191919`,
//         display: `minimal-ui`,
//         icon: `data/images/logo.png`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-graphql-codegen`,
//       options: {
//         fileName: `.@types/gatsby-graphql.ts`,
//       },
//     },
//     {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//         plugins: [
//           `gatsby-remark-autolink-headers`,
//           `gatsby-remark-copy-linked-files`,
//           {
//             resolve: `gatsby-remark-images`,
//             options: {
//               maxWidth: 690,
//               backgroundColor: `#f7f0eb`,
//             },
//           },
//           {
//             resolve: `gatsby-remark-prismjs`,
//             options: {
//               // Class prefix for <pre> tags containing syntax highlighting;
//               // defaults to 'language-' (e.g. <pre class="language-js">).
//               // If your site loads Prism into the browser at runtime,
//               // (e.g. for use with libraries like react-live),
//               // you may use this to prevent Prism from re-processing syntax.
//               // This is an uncommon use-case though;
//               // If you're unsure, it's best to use the default value.
//               classPrefix: 'language-',
//               // This is used to allow setting a language for inline code
//               // (i.e. single backticks) by creating a separator.
//               // This separator is a string and will do no white-space
//               // stripping.
//               // A suggested value for English speakers is the non-ascii
//               // character '›'.
//               inlineCodeMarker: null,
//               // This lets you set up language aliases.  For example,
//               // setting this to '{ sh: "bash" }' will let you use
//               // the language "sh" which will highlight using the
//               // bash highlighter.
//               aliases: {},
//               // This toggles the display of line numbers globally alongside the code.
//               // To use it, add the following line in gatsby-browser.js
//               // right after importing the prism color scheme:
//               //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
//               // Defaults to false.
//               // If you wish to only show line numbers on certain code blocks,
//               // leave false and use the {numberLines: true} syntax below
//               showLineNumbers: false,
//               // If setting this to true, the parser won't handle and highlight inline
//               // code used in markdown i.e. single backtick code like `this`.
//               noInlineHighlight: false,
//               // This adds a new language definition to Prism or extend an already
//               // existing language definition. More details on this option can be
//               // found under the header "Add new language definition or extend an
//               // existing language" below.
//               languageExtensions: [
//                 {
//                   language: 'superscript',
//                   extend: 'javascript',
//                   definition: {
//                     superscript_types: /(SuperType)/,
//                   },
//                   insertBefore: {
//                     function: {
//                       superscript_keywords: /(superif|superelse)/,
//                     },
//                   },
//                 },
//               ],
//               // Customize the prompt used in shell output
//               // Values below are default
//               prompt: {
//                 user: 'root',
//                 host: 'localhost',
//                 global: false,
//               },
//               // By default the HTML entities <>&'" are escaped.
//               // Add additional HTML escapes by providing a mapping
//               // of HTML entities and their escape value IE: { '}': '&#123;' }
//               escapeEntities: {},
//             },
//           },
//         ],
//       },
//     },
//   ],
// }
