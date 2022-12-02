import { Project } from "./interfaces"
import { projectType } from "./types/project-type"

export const PAGE_SIZE = 8

export const PROJECT_LIST: Array<Project> = [
  {
    type: projectType.smartroConpay,
    title: "스마트로 선불 충전 시스템 구축",
    period: "2022.11 ~ 2022.12",
    descriptionList: [],
    roleList: [],
    projectPageUrl: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.cjOnePay,
    title: "통합 온/오프라인 간편결제(CJ One Pay) 구축",
    period: "2022.02 ~ 2022.10",
    descriptionList: [
      "Infra: NCP(네이버클라우드플랫폼)",
      "Container : Kubernetes / Docker",
      "DB : CloudDB For MSSQL(NCP)",
      "Cache : CloudDB For REDIS(NCP)",
      "Source management: SourceCommit(NCP)",
      "CI / CD : SourceBuild / SourceDeploy / SourcePipeline(NCP)",
      "Contents Delivery : CDN+ (NCP)",
      "Storage : Object Storage / NAS",
      "Backend : Springboot(Tomcat)",
      "Batch Scheduler : Jenkins",
      "Language : JAVA(JDK11)",
    ],
    roleList: [],
    projectPageUrl: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.allixVan,
    title: "Allix 베트남 결제 중계 시스템 구축",
    period: "2020.02 ~ 2021.03",
    descriptionList: [],
    roleList: [],
    projectPageUrl: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.jtnetVanCms,
    title: "JTNET VAN CMS 시스템 구축",
    period: "2019.10 ~ 2020.02",
    descriptionList: [],
    roleList: [],
    projectPageUrl: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.vCommerce,
    title: "롯데마트 마튜브 V-COMMERCE 구축",
    period: "2019.06 ~ 2019.09",
    descriptionList: [],
    roleList: [],
    projectPageUrl: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.bglam,
    title: "bGlam 스파/마사지 O2O 플랫폼 구축 및 운영",
    period: "2017.10 ~ 2019.04",
    descriptionList: [],
    roleList: [],
    projectPageUrl: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.sangza,
    title: "sangza",
    period: "",
    descriptionList: [],
    roleList: [],
    projectPageUrl: "",
    linkUrl: "",
    imageUrl: ""
  },
]
