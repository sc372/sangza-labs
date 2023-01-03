import fs from 'fs'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import * as fpOrd from 'fp-ts/Ord'
import * as fpString from 'fp-ts/string'
import { sync } from 'glob'
import matter from 'gray-matter'

import { Meta, Post } from '@common/interfaces'
import { DocCategoryType, docCategoryType } from '@common/types/doc-category-type'

const POSTS_PATH = `${process.cwd()}/data/**/*.md`

export function getTitleForPath(post: Post) {
  if (post.meta.category === docCategoryType.project) {
    return post.slug.split(`/data/project/${post.meta.categoryTitle}`)[1].replace('/index.md', '')
  } else if (post.meta.category === docCategoryType.blog) {
    return post.slug.split(`/data/blog/`)[1].replace('/index.md', '')
  }
}

export function getUriByPost(post: Post) {
  if (post.meta.category === docCategoryType.project) {
    return `/project/${post.meta.categoryTitle}${getTitleForPath(post)}`
  } else if (post.meta.category === docCategoryType.blog) {
    return `/blog/${getTitleForPath(post)}`
  }
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

export function getPostsByCategoryType(type: DocCategoryType): Array<Post> {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.filter((a) => a.meta.category === type)
  )
}

export function getPostsByCategoryTitle(categoryTitle?: string): Array<Post> {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.filter((a) => a.meta.categoryTitle === categoryTitle)
  )
}

export function getFilteredPostsByTitleAndCategoryType(title: string, type: DocCategoryType): Array<Post> {
  return fpFunction.pipe(
    getPostsByCategoryType(type),
    fpArray.filter((a) => a.meta.categoryTitle === title)
  )
}

export function getAllTags(): Array<string> {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.map((a) => a.meta.tags),
    fpArray.flatten,
    fpArray.filter((a) => a !== undefined)
  )
}

export function getPostsByTag(tag: string): Array<Post> {
  const posts = getAllPosts()
  return posts.filter((post) => post.meta.tags?.includes(tag))
}


