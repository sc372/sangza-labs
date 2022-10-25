import { Post } from 'shared/common/interfaces'
import Date from 'shared/components/atoms/Date'
import Tag from 'shared/components/atoms/Tag'
import { getSlug } from 'shared/utils/doc'
import Link from 'next/link'
import { FC } from 'react'
import { RiPriceTag3Line } from 'react-icons/ri'

interface Props {
  post: Post
}

const PostThumbnail: FC<Props> = ({ post }) => {
  return (
    <div>
      <Link href={`${getSlug(post.slug)}`}>
        <h2 className="cursor-pointer">{post.meta?.title}</h2>
      </Link>
      <div className="flex items-start">
        <Date date={post.meta?.updatedDate} />
        <Date date={post.meta?.createdDate} />
        <RiPriceTag3Line />
        {post.meta?.tags?.map((tag, i) => (
          <Tag key={i} name={tag} onClick={() => {}} />
        ))}
      </div>
    </div>
  )
}

export default PostThumbnail
