import siteConfig from '../../site.config'
import { Union } from './common-type'

export const projectType = {
  smartroConpay: 'smartro-conpay',
  cjOnePay: 'cj-one-pay',
  jtnetVanCms: 'jtnet-van-cms',
  alliexVan: 'allix-van',
  vCommerce: 'v-commerce',
  bglam: 'bglam',
  sangza: siteConfig.authors[0].id,
  makeBlog: 'make-blog',
} as const

export type ProjectType = Union<typeof projectType>
