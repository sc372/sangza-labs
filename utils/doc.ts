import fs from 'fs'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import * as fpOption from 'fp-ts/Option'
import * as fpOrd from 'fp-ts/Ord'
import * as fpString from 'fp-ts/string'
import { sync } from 'glob'
import matter from 'gray-matter'

import { Meta, Post } from '@common/interfaces'
import {
  DocCategoryType,
  docCategoryType,
} from '@common/types/doc-category-type'

const POSTS_PATTERN = `${process.cwd()}/data/**/*.md`
const SERIES_PATH = `${process.cwd()}/data/series/`

export const getTitleForPath = (post: Post) => {
  if (post.meta.category === docCategoryType.project) {
    return post.path
      .split(`/data/project/${post.meta.categoryTitle}`)[1]
      .replace('/index.md', '')
  } else if (post.meta.category === docCategoryType.series) {
    return post.path
      .split(`/data/series/${post.meta.categoryTitle}`)[1]
      .replace('/index.md', '')
  } else {
    return post.path.split(`/data/blog/`)[1].replace('/index.md', '')
  }
}

export const getUriByPost = (post: Post) => {
  if (post.meta.category === docCategoryType.project) {
    return `/project/${post.meta.categoryTitle}${getTitleForPath(post)}`
  } else if (post.meta.category === docCategoryType.series) {
    return `/series/${post.meta.categoryTitle}${getTitleForPath(post)}`
  } else {
    return `/blog/${getTitleForPath(post)}`
  }
}

export const getPost = (path: string): Post => {
  const contents = fs.readFileSync(path, 'utf8')
  const { data, content } = matter(contents)
  const meta = data as Meta
  const slug = path.split('/').reverse()[1]

  return { slug, meta, content, path }
}

export const getPostBySlug = (slug: string): Post | null => {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.findFirst((a) => a.slug === slug),
    fpOption.toNullable
  )
}

export const getAllPosts = (): Array<Post> => {
  const updateDate = fpFunction.pipe(
    fpString.Ord,
    fpOrd.contramap((post: Post) => post.meta.updatedDate?.replace('-', ''))
  )
  const filteredNotDraft = (post: Post) => !post.meta.draft

  const posts = fpFunction.pipe(
    sync(POSTS_PATTERN),
    fpArray.map(getPost),
    fpArray.filter(filteredNotDraft),
    fpArray.sortBy([updateDate]),
    fpArray.reverse
  )

  return posts
}

export const getPostsByCategoryType = (type: DocCategoryType): Array<Post> => {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.filter((a) => a.meta.category === type)
  )
}

export const getPostsByCategoryTitle = (
  categoryTitle?: string
): Array<Post> => {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.filter((a) => a.meta.categoryTitle === categoryTitle)
  )
}

export const getFilteredPostsByTitleAndCategoryType = (
  title: string,
  type: DocCategoryType
): Array<Post> => {
  return fpFunction.pipe(
    getPostsByCategoryType(type),
    fpArray.filter((a) => a.meta.categoryTitle === title)
  )
}

export const getAllTags = (): Array<string> => {
  return fpFunction.pipe(
    getAllPosts(),
    fpArray.map((a) => a.meta.tags),
    fpArray.flatten,
    fpArray.filter((a) => a !== undefined)
  )
}

export const getPostsByTag = (tag: string): Array<Post> => {
  const posts = getAllPosts()
  return posts.filter((post) => post.meta.tags?.includes(tag))
}

export const getSeriesTitle = () => {
  const seriesDirs = fs.readdirSync(SERIES_PATH)

  return seriesDirs
}
