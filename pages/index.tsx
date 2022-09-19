import { useDebounce } from "@hooks/useDebounce";
import { usePagination } from "@hooks/usePagination";
import type { GetStaticProps, NextPage } from "next";
import { ChangeEvent, ReactElement, useState } from "react";
import { PAGE_SIZE } from "shared/common/constants";
import { Post } from "shared/common/interfaces";
import SearchInput from "shared/components/atoms/SearchInput";
import MainLayout from "shared/components/layouts/MainLayout";
import Pagination from "shared/components/molecules/Pagination";
import PostThumbnail from "shared/components/molecules/PostThumbnail";
import { getAllPosts } from "shared/utils/doc";

interface Props {
  posts: Array<Post>;
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce<string>(searchText, 500);
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);
  // const onSearchClick = (searchText: string) =>
  // const onSearchClick = (searchText: string) =>
  //   posts.filter(
  //     (post) =>
  //       post.content.includes(searchText) ||
  //       post.meta.title.includes(searchText)
  //   );

  // useEffect(() =>
  // , [debouncedSearchText]);

  const {
    currentPage,
    isPreview,
    isNext,
    pageNumbers,
    totalCount,
    dataForPage,
    onPageChange,
  } = usePagination({
    data: posts,
    pageSize: PAGE_SIZE,
  });

  return (
    <>
      <SearchInput onChange={onSearchChange} onClick={onSearchClick} />
      {dataForPage?.map((post: Post, i: number) => (
        <PostThumbnail key={i} post={post} />
      ))}
      <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        isPreview={isPreview}
        isNext={isNext}
        pageNumbers={pageNumbers}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
};

export default IndexPage;
// @ts-ignore
IndexPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
