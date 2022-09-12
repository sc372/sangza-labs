import React from "react";
import MainLayout from "shared/components/layouts/MainLayout";
import { getAllBlogPosts, getAllProjectPosts } from "shared/utils/doc";
import { GetStaticProps, NextPage } from "next";
import { Post } from "shared/common/interfaces";
import { usePaginationHelper } from "shared/hooks/usePagination";
import PostThumbnail from "shared/components/molecules/PostThumbnail";
import Pagination from "shared/components/molecules/Pagination";
import { PAGE_SIZE } from "shared/common/constants";

interface Props {
  posts: Array<Post>;
}

const ProjectPage: NextPage<Props> = ({ posts }) => {
  const { currentPage, totalCount, filteredPosts, onChange } =
    usePaginationHelper({
      posts,
    });

  return (
    <>
      {filteredPosts.map((post: Post, i: number) => (
        <PostThumbnail key={i} post={post} />
      ))}
      <Pagination
        onChange={onChange}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
      />
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
