import React from "react";
import MainLayout from "shared/components/layouts/MainLayout";
import { getAllBlogPosts } from "shared/utils/doc";
import { GetStaticProps, NextPage } from "next";
import { Post } from "shared/common/interfaces";
import { usePaginationHelper } from "shared/hooks/usePagination";
import PostThumbnail from "shared/components/molecules/PostThumbnail";
import Pagination from "shared/components/molecules/Pagination";
import { PAGE_SIZE } from "shared/common/constants";

interface Props {
  posts: Array<Post>;
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  const { currentPage, totalCount, filteredPosts, onChange } =
    usePaginationHelper({
      posts,
    });

  console.log(filteredPosts);

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
      posts: await getAllBlogPosts(),
    },
  };
};

export default BlogPage;
// @ts-ignore
BlogPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
