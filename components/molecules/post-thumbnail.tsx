import { FC } from 'react'
import { RiPriceTag3Line } from 'react-icons/ri'

import Link from 'next/link'

import { Post } from '@common/interfaces'
import Date from '@components/atoms/date'
import Tag from '@components/atoms/tag'
import { getSlug } from '@utils/doc'

interface Props {
  post: Post
  className?: string
}

const PostThumbnail: FC<Props> = ({ post, className }) => {
  return (
    <div className={`${className}`}>
      <Link href={`${getSlug(post.slug)}`}>
        <div className="cursor-pointer hover:text-primary">
          {post.meta?.title}
        </div>
      </Link>
      <div className="flex flex-col md:flex-row md:items-center">
        <Date className="mr-4 text-tertiary" date={post.meta?.createdDate} />
        <div className="flex flex-row items-center">
          {post.meta?.tags?.map((tag, i) => (
            <span className="flex flex-row" key={i}>
              {i === 0 && (
                <span className="flex flex-row items-center">
                  <RiPriceTag3Line />
                </span>
              )}
              <Tag name={tag} href={`/blog/tags/${tag}`} className="ml-2" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostThumbnail
