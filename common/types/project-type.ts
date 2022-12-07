import { Union } from "./common-type"

export const projectType = {
  smartroConpay: "smartro-conpay",
  cjOnePay: "cj-one-pay",
  jtnetVanCms: "jtnet-van-cms",
  alliexVan: "allix-van",
  vCommerce: "v-commerce",
  bglam: "bglam",
  sangza: "sangza",
} as const

export type ProjectType = Union<typeof projectType>