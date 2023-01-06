import { Union } from './common-type'

export const docCategoryType = {
  series: 'series',
  project: 'project',
  blog: 'blog',
} as const

export type DocCategoryType = Union<typeof docCategoryType>
