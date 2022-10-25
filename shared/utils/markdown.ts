import { serialize } from 'next-mdx-remote/serialize'

export const markdownToHtml = async (markdown: string) => {
  return serialize(markdown)
}
