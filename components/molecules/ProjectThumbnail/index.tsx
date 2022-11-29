import { FC } from 'react'
import { RiPriceTag3Line } from 'react-icons/ri'

import Link from 'next/link'

import { Post } from '@common/interfaces'
import Date from '@components/atoms/Date'
import Tag from '@components/atoms/Tag'
import { getSlug } from '@utils/doc'

interface Props {
  project: Post
}

const ProjectThumbnail: FC<Props> = ({ post }) => {
  return (
    <div>
      <Link href={`${getSlug(post.slug)}`}>
        <h2 className="cursor-pointer">{post.meta?.title}</h2>
        <div className="flex items-start">
          <Date date={post.meta?.updatedDate} />
          <Date date={post.meta?.createdDate} />
          <RiPriceTag3Line />
          {post.meta?.tags?.map((tag, i) => (
            <Tag key={i} name={tag} href={`/blog/tags/${tag}`} />
          ))}
        </div>
      </Link>
    </div>
  )
}

export default ProjectThumbnail
