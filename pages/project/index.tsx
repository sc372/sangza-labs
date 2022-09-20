import Posts from "@components/organisms/Posts";
import { GetStaticProps, NextPage } from "next";
import { Post } from "shared/common/interfaces";
import MainLayout from "shared/components/layouts/MainLayout";
import { getAllProjectPosts } from "shared/utils/doc";

interface Props {
  posts: Array<Post>;
}

const ProjectPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getAllProjectPosts(),
    },
  };
};

export default ProjectPage;
// @ts-ignore
ProjectPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
