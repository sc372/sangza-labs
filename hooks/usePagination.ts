import { useMemo, useState } from 'react'

import { PAGE_SIZE } from '@common/constants'

export const DOTS = 0
const PAGE_RANGE_COUNT = 3
const INIT_TAIL_PAGE_RANGE_COUNT = 5

export interface UsePaginationParams<T> {
  data: Array<T>
  pageSize: number
}

export interface UsePagination<T> {
  currentPage: number
  isPreview: boolean
  isNext: boolean
  pageNumbers: Array<number>
  totalCount: number
  dataForPage: Array<T>
  onPageChange: () => void
}

const makeArray = (length: number, addLength = 0) =>
  Array.from({ length }, (_, i) => i + 1 + addLength)

export const usePagination = <T>({
  data,
  pageSize,
}: UsePaginationParams<T>) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [orgData] = useState<Array<T>>(data)
  const onPageChange = (pageNum: number) => setCurrentPage(pageNum)
  const totalCount = data.length
  const totalPageCount = useMemo(() => {
    return Math.ceil(totalCount / pageSize)
  }, [totalCount, pageSize])

  const isPreviewNext = useMemo(() => {
    return {
      isPreview: currentPage !== 1,
      isNext: currentPage !== totalPageCount,
    }
  }, [currentPage, totalPageCount])

  const dataForPage = useMemo(() => {
    return orgData.slice(
      (currentPage - 1) * PAGE_SIZE,
      PAGE_SIZE <= totalCount ? PAGE_SIZE * currentPage : totalCount
    )
  }, [currentPage, data])

  if (totalPageCount === 1)
    return {
      currentPage,
      isPreview: false,
      isNext: false,
      pageNumbers: [totalPageCount],
      totalCount,
      dataForPage,
      onPageChange,
    }

  if (currentPage > totalPageCount)
    return {
      currentPage,
      isPreview: false,
      isNext: false,
      pageNumbers: [],
      totalCount,
      dataForPage,
      onPageChange,
    }

  if (PAGE_RANGE_COUNT + 3 >= totalPageCount)
    return {
      currentPage,
      ...isPreviewNext,
      pageNumbers: makeArray(totalPageCount),
      totalCount,
      dataForPage,
      onPageChange,
    }

  if (currentPage < INIT_TAIL_PAGE_RANGE_COUNT)
    return {
      currentPage,
      ...isPreviewNext,
      pageNumbers: [
        ...makeArray(INIT_TAIL_PAGE_RANGE_COUNT),
        DOTS,
        totalPageCount,
      ],
      totalCount,
      dataForPage,
      onPageChange,
    }

  if (
    currentPage >= INIT_TAIL_PAGE_RANGE_COUNT &&
    currentPage < totalPageCount - 3
  )
    return {
      currentPage,
      ...isPreviewNext,
      pageNumbers: [
        1,
        DOTS,
        ...makeArray(PAGE_RANGE_COUNT, currentPage - 2),
        DOTS,
        totalPageCount,
      ],
      totalCount,
      dataForPage,
      onPageChange,
    }

  return {
    currentPage,
    ...isPreviewNext,
    pageNumbers: [
      1,
      DOTS,
      ...makeArray(INIT_TAIL_PAGE_RANGE_COUNT + 2, totalPageCount - 5),
    ],
    totalCount,
    dataForPage,
    onPageChange,
  }
}
