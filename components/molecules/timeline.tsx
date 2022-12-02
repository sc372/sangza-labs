import { FC } from 'react'
import { RiFlashlightFill } from 'react-icons/ri'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'

import { PROJECT_LIST } from '@common/constants'

interface Props {
  className?: string
}

const Timeline: FC<Props> = ({ className }) => {
  return (
    <ol className={`${className} relative border-l`}>
      {fpFunction.pipe(
        PROJECT_LIST,
        fpArray.map((a) => (
          <li key={a.type} className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-background">
              <RiFlashlightFill />
            </span>
            <h3 className="mb-1 flex items-center text-lg font-semibold">
              {a.title}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-tertiary">
              {a.period}
            </time>
            <p className="mb-4">
              {fpFunction.pipe(
                a.descriptionList,
                fpArray.mapWithIndex((i, b) => (
                  <>
                    <span> - {b}</span>
                    <br />
                  </>
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
