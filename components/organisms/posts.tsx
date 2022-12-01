import { FC } from 'react'

import { PAGE_SIZE } from '@common/constants'
import { Post } from '@common/interfaces'
import Pagination from '@components/molecules/pagination'
import PostThumbnail from '@components/molecules/post-thumbnail'
import { usePagination } from '@hooks/usePagination'
import { useResponsive } from '@hooks/useResponsive'

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
      <div className="pb-16">
        {dataForPage?.map((post: Post, i: number) => (
          <div key={i}>
            <PostThumbnail post={post} className="pt-1 pb-4" />
          </div>
        ))}
      </div>
      <Pagination
        className="fixed left-0 right-0 bottom-10 h-20 bg-background"
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
