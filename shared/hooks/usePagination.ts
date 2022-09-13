import fp from "lodash/fp";
import { useEffect, useState } from "react";
import { PAGE_SIZE } from "shared/common/constants";
import { Post } from "shared/common/interfaces";

export const DOTS = 0;

export interface UsePagination {
  isPreview: boolean;
  pageNumbers: number[];
  isNext: boolean;
}

export interface UsePaginationParams<T> {
  data: Array<T>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

const makeArray = (length: number, addLength = 0) =>
  Array.from({ length }, (_, i) => i + 1 + addLength);

type UsePaginationFunction = <T>(
  params: UsePaginationParams<T>
) => UsePagination;

export const usePagination: UsePaginationFunction = ({
  data,
  totalCount,
  pageSize,
  currentPage,
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const pageRangeCount = 3;
  const initTailPageRangeCount = 5;
  const result = {
    isPreview: currentPage !== 1,
    isNext: currentPage !== totalPageCount,
  };

  if (totalPageCount === 1)
    return { isPreview: false, isNext: false, pageNumbers: [totalPageCount] };

  if (currentPage > totalPageCount)
    return { isPreview: false, isNext: false, pageNumbers: [] };

  if (pageRangeCount + 3 >= totalPageCount)
    return { ...result, pageNumbers: makeArray(totalPageCount) };

  if (currentPage < initTailPageRangeCount)
    return {
      ...result,
      pageNumbers: [...makeArray(initTailPageRangeCount), DOTS, totalPageCount],
    };

  if (currentPage >= initTailPageRangeCount && currentPage < totalPageCount - 3)
    return {
      ...result,
      pageNumbers: [
        1,
        DOTS,
        ...makeArray(pageRangeCount, currentPage - 2),
        DOTS,
        totalPageCount,
      ],
    };

  return {
    ...result,
    pageNumbers: [
      1,
      DOTS,
      ...makeArray(initTailPageRangeCount + 2, totalPageCount - 5),
    ],
  };
};

interface UsePaginationHelperParams {
  posts: Array<Post>;
}

interface UsePaginationHelper {
  currentPage: number;
  totalCount: number;
  filteredPosts: Array<Post>;
  onChange: (pageNum: number) => void;
}

type UsePaginationHelperFunction = (
  params: UsePaginationHelperParams
) => UsePaginationHelper;

export const usePaginationHelper: UsePaginationHelperFunction = ({ posts }) => {
  const totalCount = posts.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [orgPosts] = useState<Array<Post>>(posts);
  const [filteredPosts, setFilteredPosts] = useState<Array<Post>>([]);
  const onChange = (pageNum: number) => setCurrentPage(pageNum);

  useEffect(() => {
    setFilteredPosts(
      fp.slice(
        (currentPage - 1) * PAGE_SIZE,
        PAGE_SIZE <= totalCount ? PAGE_SIZE * currentPage : totalCount
      )(orgPosts)
    );
  }, [currentPage]);

  return {
    currentPage,
    totalCount,
    filteredPosts,
    onChange,
  };
};
