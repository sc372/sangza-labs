import { PAGE_SIZE } from "shared/common/constants";
import { Post } from "shared/common/interfaces";
import Pagination from "shared/components/molecules/Pagination";
import { usePaginationHelper } from "shared/hooks/usePagination";
import React, { FC, useState } from "react";

interface Props {
  posts: Array<Post>;
}

const SubjectList: FC<Props> = ({ posts }) => {
  const { currentPage, totalCount, filteredPosts, onChange } =
    usePaginationHelper({ posts });

  return (
    <>
      <Pagination
        onChange={onChange}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
      />
    </>
  );
};
