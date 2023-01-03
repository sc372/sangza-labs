import { FC } from 'react'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'
import * as fpNumber from 'fp-ts/number'
import * as fpOrd from 'fp-ts/Ord'
import Link from 'next/link'

import { Post } from '@common/interfaces'
import { getUriByPost } from '@utils/doc'

interface Props {
  categoryList: Array<Post>
  currentTitle: string
}

const CategoryListPane: FC<Props> = ({ categoryList, currentTitle }) => {
  console.log(categoryList)
  const byCategoryOrder = fpFunction.pipe(
    fpNumber.Ord,
    fpOrd.contramap((a: Post) => a.meta.categoryOrder!)
  )
  const sortByCategoryOrder = fpArray.sortBy([byCategoryOrder])

  return (
    <div className="box-border rounded-lg p-[1vw] ring-[0.5px] ring-divider dark:bg-darkSecondary dark:ring-darkDivider">
      <div className="mb-3 text-lg">Related Post</div>
      {fpFunction.pipe(
        categoryList,
        sortByCategoryOrder,
        fpArray.mapWithIndex((i, a) =>
          currentTitle !== a.meta.title ? (
            <div key={i}>
              <Link
                className="inline text-tertiary no-underline hover:text-primary dark:text-darkTertiary dark:hover:text-primary"
                href={getUriByPost(a)}
              >
                {a.meta.categoryOrder! + 1}. {a.meta.title}
              </Link>
            </div>
          ) : (
            <div key={i} className="inline text-primary no-underline ">
              {a.meta.categoryOrder! + 1}. {a.meta.title}
            </div>
          )
        )
      )}
    </div>
  )
}

export default CategoryListPane
