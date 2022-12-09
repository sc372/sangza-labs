import { FC } from 'react'
import { RiFlashlightFill } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'

import { PROJECT_LIST } from '@common/constants'
import { Post } from '@common/interfaces'
import Tag from '@components/atoms/tag'

interface Props {
  className?: string
  list: Array<Post>
}

const Timeline: FC<Props> = ({ className, list }) => {
  return (
    <ol className={`${className} relative`}>
      {fpFunction.pipe(
        PROJECT_LIST,
        fpArray.map((a) => (
          <li key={a.type} className="mb-10 pl-6 ">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-background">
              <RiFlashlightFill />
            </span>
            <div className="flex flex-row items-center">
              <h3 className="mb-1 flex items-center text-lg font-semibold">
                {a.title}
              </h3>
              {fpArray.some((aa: Post) => aa.meta.project === a.type)(list) && (
                <Tag name="more" href={a.projectPagePath} className="ml-3" />
              )}
            </div>
            <time className="mb-2 block text-sm font-normal leading-none text-tertiary">
              {a.period}
            </time>
            <p className="mb-4">
              {fpFunction.pipe(
                a.descriptionList,
                fpArray.mapWithIndex((i, b) => (
                  <span key={i}>
                    <span> - {b}</span>
                    <br />
                  </span>
                ))
              )}
            </p>
          </li>
        ))
      )}
    </ol>
  )
}

export default Timeline
