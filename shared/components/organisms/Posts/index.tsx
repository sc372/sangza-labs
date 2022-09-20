import { PAGE_SIZE } from "@common/constants";
import { Post } from "@common/interfaces";
import Pagination from "@components/molecules/Pagination";
import PostThumbnail from "@components/molecules/PostThumbnail";
import { usePagination } from "@hooks/usePagination";
import { FC } from "react";

interface Props {
  posts: Array<Post>;
}

const Posts: FC<Props> = ({ posts }) => {
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

export default Posts;
