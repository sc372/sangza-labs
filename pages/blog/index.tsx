import Posts from "@components/organisms/Posts";
import { GetStaticProps, NextPage } from "next";
import { Post } from "shared/common/interfaces";
import MainLayout from "shared/components/layouts/MainLayout";
import { getAllBlogPosts } from "shared/utils/doc";

interface Props {
  posts: Array<Post>;
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getAllBlogPosts(),
    },
  };
};

export default BlogPage;
// @ts-ignore
BlogPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
