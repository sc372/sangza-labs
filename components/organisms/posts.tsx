import { FC } from 'react'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'

import { PAGE_SIZE } from '@common/constants'
import { Post } from '@common/interfaces'
import EmptyData from '@components/molecules/empty-data'
import Pagination from '@components/molecules/pagination'
import PostThumbnail from '@components/molecules/post-thumbnail'
import { usePagination } from '@hooks/usePagination'

interface Props {
  posts: Array<Post>
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
  })

  return (
    <>
      <div className="h-[67vh] overflow-y-auto pt-5">
        <div className="pb-16">
          {!fpArray.isEmpty(dataForPage) &&
            fpFunction.pipe(
              dataForPage,
              fpArray.mapWithIndex((i, a) => (
                <div key={i}>
                  <PostThumbnail post={a} className="pt-1 pb-4" />
                </div>
              ))
            )}
        </div>
        <Pagination
          className="fixed left-0 right-0 bottom-10 h-20 bg-background dark:bg-darkBackground"
          onPageChange={onPageChange}
          currentPage={currentPage}
          isPreview={isPreview}
          isNext={isNext}
          pageNumbers={pageNumbers}
        />
      </div>
      {fpArray.isEmpty(posts) && <EmptyData />}
    </>
  )
}

export default Posts
