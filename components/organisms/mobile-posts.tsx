import { FC } from 'react'
import { RiArrowUpLine } from 'react-icons/ri'

import { PAGE_SIZE } from '@common/constants'
import { Post } from '@common/interfaces'
import FloatingButton from '@components/atoms/floating-button'
import PostThumbnail from '@components/molecules/post-thumbnail'
import { useInfiniteScroll } from '@hooks/useInfiniteScroll'

interface Props {
  posts: Array<Post>
}

const MobilePosts: FC<Props> = ({ posts }) => {
  const { addedData, infiniteScrollRef } = useInfiniteScroll({
    data: posts,
    pageSize: PAGE_SIZE,
  })

  return (
    <div className="pt-5">
      <div className="pb-16">
        {addedData?.map((post: Post, i: number) => (
          <div key={i} ref={infiniteScrollRef}>
            <PostThumbnail post={post} className="pt-1 pb-4" />
          </div>
        ))}
      </div>
      <FloatingButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bottom-16 right-8 z-50 h-10 w-10 bg-primary"
      >
        <RiArrowUpLine />
      </FloatingButton>
      <button></button>
    </div>
  )
}

export default MobilePosts
