import { ReactNode } from 'react'

import { ProjectType } from './types/project-type'

export interface WrapperComponentProps {
  children: ReactNode
}

export interface Meta {
  author: string
  category: string
  project?: string
  createdDate: string
  updatedDate: string
  draft: boolean
  tags: Array<string>
  description: string
  title: string
}

export interface Post {
  meta: Meta
  content: string
  slug: string
}

export interface Project {
  type: ProjectType
  title: string
  period: string
  descriptionList: Array<string>
  roleList: Array<string>
  projectPagePath: string
  linkUrl: string
  imageUrl: string
}
