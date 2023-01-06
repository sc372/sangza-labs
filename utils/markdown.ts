import { serialize } from 'next-mdx-remote/serialize'

export const markdownToHtml = async (markdown: string) => {
  return serialize(markdown, {
    // made available to the arguments of any custom mdx component
    scope: {},
    // MDX's available options, see the MDX docs for more info.
    // https://mdxjs.com/packages/mdx/#compilefile-options
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'md',
    },
    // Indicates whether or not to parse the frontmatter from the mdx source
    parseFrontmatter: false,
  })
}
