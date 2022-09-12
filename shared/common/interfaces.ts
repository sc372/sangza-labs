import { ReactNode } from "react";

export interface WrapperComponentProps {
  children: ReactNode;
}

export interface Meta {
  author: string;
  category: string;
  project?: string;
  createdDate: string;
  updatedDate: string;
  draft: boolean;
  tags: Array<string>;
  title: string;
}

export interface Post {
  meta: Meta;
  content: string;
  slug: string;
}
