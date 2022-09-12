import { PAGE_SIZE } from "shared/common/constants";
import { Post } from "shared/common/interfaces";
import SearchInput from "shared/components/atoms/SearchInput";
import MainLayout from "shared/components/layouts/MainLayout";
import Pagination from "shared/components/molecules/Pagination";
import PostThumbnail from "shared/components/molecules/PostThumbnail";
import { usePaginationHelper } from "shared/hooks/usePagination";
import { getAllPosts } from "shared/utils/doc";
import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { ReactElement, useState } from "react";

interface Props {
  posts: Array<Post>;
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [filteredPosts, setFilteredPosts] = useState<Array<Post>>([]);
  // const totalCount = posts.length;
  // const onChange = (pageNum: number) => setCurrentPage(pageNum);

  // useEffect(() => {
  //   setFilteredPosts(posts.splice((currentPage - 1) * PAGE_SIZE, PAGE_SIZE));
  // }, [currentPage]);
  const { currentPage, totalCount, filteredPosts, onChange } =
    usePaginationHelper({
      posts,
    });

  return (
    <>
      <SearchInput />
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
      posts: await getAllPosts(),
    },
  };
};

export default IndexPage;
// @ts-ignore
IndexPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
