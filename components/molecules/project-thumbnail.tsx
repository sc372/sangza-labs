import { FC } from 'react'
import { RiPriceTag3Line } from 'react-icons/ri'

import * as fpArray from 'fp-ts/array'
import * as fpFunction from 'fp-ts/function'
import * as fpString from 'fp-ts/string'
import Link from 'next/link'

import { Post } from '@common/interfaces'
import Date from '@components/atoms/date'
import Tag from '@components/atoms/tag'
import { getSlug } from '@utils/doc'

interface Props {
  project: Post
}

const ProjectThumbnail: FC<Props> = ({ post }) => {
  return (
    <div>
      <Link href={`${getSlug(post.slug)}`}>
        <h2 className="cursor-pointer">{post.meta.title}</h2>
        <div className="flex items-start">
          {!fpString.isEmpty(post.meta.updatedDate) && (
            <Date date={post.meta.updatedDate} />
          )}
          {!fpString.isEmpty(post.meta.createdDate) && (
            <Date date={post.meta.createdDate} />
          )}
          <RiPriceTag3Line />
          {post.meta.tags !== undefined &&
            !fpArray.isEmpty(post.meta.tags) &&
            fpFunction.pipe(
              post.meta.tags,
              fpArray.mapWithIndex((i, a: string) => (
                <Tag key={i} name={a} href={`/blog/tags/${a}`} />
              ))
            )}
        </div>
      </Link>
    </div>
  )
}

export default ProjectThumbnail
