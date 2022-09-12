import { Post, Meta } from "shared/common/interfaces";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import fp from "lodash/fp";

const POSTS_PATH = `${process.cwd()}/data/**/*.md`;
const PROJECT = "project";
const BLOG = "blog";

export const getBlogPath = (slug: string) =>
  `${process.cwd()}/data/blog/${slug}/index.md`;

export const getSlug = (slug: string) =>
  slug.split("/data")[1].replace("/index.md", "");

export function getPost(slug: string): Post {
  const contents = fs.readFileSync(slug, "utf8");
  const { data, content } = matter(contents);
  const meta = data as Meta;

  return { slug, meta, content };
}

export function getAllPosts(): Array<Post> {
  const sortBy = (post: Post) => post.meta?.updatedDate?.replace("-", "");

  return fp.flow([fp.map(getPost), fp.sortBy(sortBy), fp.reverse])(
    sync(POSTS_PATH)
  );
}

export function getAllBlogPosts(): Array<Post> {
  const posts = getAllPosts();
  return posts.filter((post) => post.meta?.category === BLOG);
}

export function getAllProjectPosts(): Array<Post> {
  const posts = getAllPosts();
  return posts.filter((post) => post.meta?.category === PROJECT);
}
