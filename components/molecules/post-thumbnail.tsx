import { FC } from 'react'
import { RiPriceTag3Line } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import Link from 'next/link'

import { Post } from '@common/interfaces'
import Date from '@components/atoms/date'
import Tag from '@components/atoms/tag'
import { getUriByPost } from '@utils/doc'

interface Props {
  post: Post
  className?: string
}

const PostThumbnail: FC<Props> = ({ post, className }) => {
  return (
    <div className={`${className}`}>
      <Link href={`${getUriByPost(post)}`}>
        <div className="inline cursor-pointer hover:text-primary">
          {post.meta.title}
        </div>
      </Link>
      <div className="flex flex-col text-tertiary dark:text-darkTertiary md:flex-row md:items-center">
        <Date className="mr-4" date={post.meta.createdDate} />
        <div className="flex flex-row items-center">
          {post.meta.tags !== undefined &&
            !fpArray.isEmpty(post.meta.tags) &&
            fpFunction.pipe(
              post.meta.tags,
              fpArray.mapWithIndex((i, a) => (
                <span className="flex flex-row" key={i}>
                  {i === 0 && (
                    <span className="flex flex-row items-center">
                      <RiPriceTag3Line />
                    </span>
                  )}
                  <Tag name={a} href={`/tags/${a}`} className="ml-2" />
                </span>
              ))
            )}
        </div>
      </div>
    </div>
  )
}

export default PostThumbnail
