import fs from 'fs'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import * as fpOrd from 'fp-ts/Ord'
import * as fpString from 'fp-ts/string'
import { sync } from 'glob'
import matter from 'gray-matter'

import { Meta, Post } from '@common/interfaces'

const POSTS_PATH = `${process.cwd()}/data/**/*.md`
const PROJECT = 'project'
const BLOG = 'blog'


export function getBlogPath(slug: string) {
  return `${process.cwd()}/data/blog/${slug}/index.md`
}

export function getProjectPath(slug: string, title: string) {
  return `${process.cwd()}/data/project/${title}/${slug}/index.md`
}

export function getSlug(slug: string) {
  return slug.split('/data')[1].replace('/index.md', '')
}

export function getProjectSlug(slug: string, projectTitle?: string) {
  return slug.split(`/data${projectTitle}`)[1].replace('/index.md', '')
}

export function getPost(slug: string): Post {
  const contents = fs.readFileSync(slug, 'utf8')
  const { data, content } = matter(contents)
  const meta = data as Meta

  return { slug, meta, content }
}

export function getAllPosts(): Array<Post> {
  const updateDate = fpFunction.pipe(fpString.Ord, fpOrd.contramap((post: Post) => post.meta.updatedDate?.replace('-', '')))
  const filteredNotDraft = (post: Post) => !post.meta.draft

  return fpFunction.pipe(sync(POSTS_PATH), fpArray.map(getPost), fpArray.filter(filteredNotDraft), fpArray.sortBy([updateDate]), fpArray.reverse)
}

export function getAllBlogPosts(): Array<Post> {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.filter((a) => a.meta.category === BLOG)
  )
}

export function getAllProjectPosts(): Array<Post> {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.filter((a) => a.meta.category === PROJECT)
  )
}

export function getFilteredProjectPosts(query: string): Array<Post> {
  return fpFunction.pipe(
    getAllProjectPosts(),
    fpArray.filter((a) => a.meta.project === query)
  )
}

export function getAllTags(): Array<string> {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.map((a) => a.meta.tags),
    fpArray.flatten,
    fpArray.filter((a) => a !== undefined)
  )
  // return getAllPosts()
  //   .flatMap((post) => post.meta.tags)
  //   .filter((tag) => tag !== undefined)
}

export function getPostsByTag(tag: string): Array<Post> {
  const posts = getAllPosts()
  return posts.filter((post) => post.meta.tags?.includes(tag))
}
