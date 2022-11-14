import { FC } from 'react'

import { PAGE_SIZE } from '@common/constants'
import { Post } from '@common/interfaces'
import Pagination from '@components/molecules/Pagination'
import PostThumbnail from '@components/molecules/PostThumbnail'
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
    <div className="pt-5">
      <div>
        {dataForPage?.map((post: Post, i: number) => (
          <PostThumbnail key={i} post={post} className="py-1" />
        ))}
      </div>
      <Pagination
        className="fixed left-0 right-0 bottom-20"
        onPageChange={onPageChange}
        currentPage={currentPage}
        isPreview={isPreview}
        isNext={isNext}
        pageNumbers={pageNumbers}
      />
    </div>
  )
}

export default Posts
