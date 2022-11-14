import { FC } from 'react'
import { RiPriceTag3Line } from 'react-icons/ri'

import Link from 'next/link'

import { Post } from '@common/interfaces'
import Date from '@components/atoms/Date'
import Tag from '@components/atoms/Tag'
import { getSlug } from '@utils/doc'

interface Props {
  post: Post
  className?: string
}

const PostThumbnail: FC<Props> = ({ post, className }) => {
  return (
    <div className={`${className}`}>
      <Link href={`${getSlug(post.slug)}`}>
        <h2 className="cursor-pointer text-xl">{post.meta?.title}</h2>
      </Link>
      <div className="flex flex-row items-center">
        <Date className="mr-4" date={post.meta?.createdDate} />
        {post.meta?.tags?.map((tag, i) => (
          <div className="flex flex-row items-center" key={i}>
            {i === 0 && <RiPriceTag3Line />}
            <Tag name={tag} href={`/blog/tags/${tag}`} className="mx-1" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostThumbnail
