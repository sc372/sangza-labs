import siteConfig from "../site.config"
import { Project } from "./interfaces"
import { projectType } from "./types/project-type"

export const PAGE_SIZE = siteConfig.pageSize

export const PROJECT_LIST: Array<Project> = [
  {
    type: projectType.smartroConpay,
    title: "스마트로 선불 충전(White label) 시스템 구축",
    period: "2022.11 ~ 2022.12",
    descriptionList: [
      "Language: Vanilla Javascript",
      "Packaging: Flutter(IOS/Android) Webview",
      "Deploy: AWS Cloud front"
    ],
    roleList: ["SDK 프론트엔드(UI) 공통 개발"],
    projectPagePath: "",
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
      "Source management: SourceCommit(NCP) - Git Client",
      "CI / CD : SourceBuild / SourceDeploy / SourcePipeline(NCP)",
      "Contents Delivery : CDN+ (NCP)",
      "Storage : Object Storage (NCP) / NAS (NCP)",
      "Repository Manager(Dependency) : Nexus Repository",
      "Backend : Springboot(Tomcat)",
      "Batch Scheduler : Jenkins",
      "Language : JAVA(JDK11)",
    ],
    roleList: ["TA/AA", "DevOps"],
    projectPagePath: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.alliexVan,
    title: "Alliex 베트남 결제 중계 시스템 구축",
    period: "2020.02 ~ 2021.03",
    descriptionList: [
      "Infra: On - Premise(CentOS)",
      "DB : Oracle",
      "Source management: SVN",
      "CI / CD : Jenkins",
      "Web Server : Nginx(Websocket), WebToB",
      "Backend : Jeus(Springboot)",
      "Frontend : Vue.js",
      "Language : JAVA(JDK8), Javascript",
    ],
    roleList: ["API 서버/UI 공통"],
    projectPagePath: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.jtnetVanCms,
    title: "JTNET VAN CMS 시스템 구축",
    period: "2019.10 ~ 2020.02",
    descriptionList: [
      "Source management: SVN",
      "Frontend : Vue.js",
      "Language : Javascript",
    ],
    roleList: ["UI 개발"],
    projectPagePath: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.vCommerce,
    title: "롯데마트 마튜브 V-COMMERCE 구축",
    period: "2019.06 ~ 2019.09",
    descriptionList: [
      "Source management: SVN",
      "Backend : Weblogic(Spring)",
      "Language : JAVA(JDK8)",
    ],
    roleList: ["API 서버 개발"],
    projectPagePath: "",
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.bglam,
    title: "bGlam 스파/마사지 O2O 플랫폼 구축 및 운영",
    period: "2017.10 ~ 2019.04",
    descriptionList: [
      "Infra: AWS",
      "DB : Postgresql(RDS)",
      "VM : Ubuntu(EC2)",
      "Source management: Git(Github)",
      "CI / CD : CircleCI",
      "Web Server : Ngins(EC2)",
      "Backend : Node.js(EC2)",
      "Frontend : React.js",
    ],
    roleList: ["API 서버 / UI 개발 및 유지보수"],
    projectPagePath: `/project/${projectType.bglam}`,
    linkUrl: "",
    imageUrl: ""
  },
  {
    type: projectType.sangza,
    title: siteConfig.authors[0].id,
    period: "",
    descriptionList: ["개인 프로젝트"],
    roleList: [],
    projectPagePath: `/project/${projectType.sangza}`,
    linkUrl: "",
    imageUrl: ""
  },
]
