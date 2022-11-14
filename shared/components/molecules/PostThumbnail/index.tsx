import { FC } from 'react'
import { RiPriceTag3Line } from 'react-icons/ri'

import Link from 'next/link'

import { Post } from '@common/interfaces'
import Date from '@components/atoms/Date'
import Tag from '@components/atoms/Tag'
import { getSlug } from '@utils/doc'

interface Props {
  post: Post
}

const PostThumbnail: FC<Props> = ({ post }) => {
  return (
    <div>
      <Link href={`${getSlug(post.slug)}`}>
        <h2 className="cursor-pointer text-xl">{post.meta?.title}</h2>
      </Link>
      <div className="flex items-start">
        <Date date={post.meta?.updatedDate} />
        <Date date={post.meta?.createdDate} />
        <RiPriceTag3Line />
        {post.meta?.tags?.map((tag, i) => (
          <Tag key={i} name={tag} href={`/blog/tags/${tag}`} />
        ))}
      </div>
    </div>
  )
}

export default PostThumbnail
