import { FC } from 'react'

import { Post } from '@common/interfaces'
import PostThumbnail from '@components/molecules/post-thumbnail'

interface Props {
  posts: Array<Post>
}

const MobilePosts: FC<Props> = ({ posts }) => {
  // const ref = useIntersect(async (entry, observer) => {
  //   observer.unobserve(entry.target)
  //   console.log(isNext)
  //   isNext &&
  // })

  return (
    <div className="pt-5">
      <div className="pb-16">
        {/* {dataForPage?.map((post: Post, i: number) => (
          <div key={i} ref={ref}>
            <PostThumbnail post={post} className="pt-1 pb-1" />
          </div>
        ))} */}
      </div>
      <div>위로가기 버튼</div>
    </div>
  )
}

export default MobilePosts
