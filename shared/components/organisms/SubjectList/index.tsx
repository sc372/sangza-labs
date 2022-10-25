import { PAGE_SIZE } from '@common/constants'
import { Post } from '@common/interfaces'
import Pagination from '@components/molecules/Pagination'
import { usePaginationHelper } from '@hooks/usePagination'
import { FC } from 'react'

interface Props {
  posts: Array<Post>
}

const SubjectList: FC<Props> = ({ posts }) => {
  const { currentPage, totalCount, filteredPosts, onChange } =
    usePaginationHelper({ posts })

  return (
    <>
      <Pagination
        onChange={onChange}
        totalCount={totalCount}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
      />
    </>
  )
}
