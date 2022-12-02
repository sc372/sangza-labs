import { Union } from "./common-type"

export const projectType = {
  smartroConpay: "SMARTRO_CONPAY",
  cjOnePay: "CJ_ONE_PAY",
  jtnetVanCms: "JTNET_VAN_CMS",
  allixVan: "ALLIX_VAN",
  vCommerce: "V_COMMERCE",
  bglam: "BGLAM",
  sangza: "SANGZA",
} as const

export type ProjectType = Union<typeof projectType>