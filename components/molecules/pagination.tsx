import { FC } from 'react'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'

interface Props {
  onPageChange: (pageNum: number) => void
  currentPage: number
  isPreview: boolean
  isNext: boolean
  pageNumbers: Array<number>
  className?: string
}

const itemClass = `mx-0.5 relative inline-flex cursor-pointer items-center justify-center
                   rounded border-0 bg-transparent h-10 w-10 outline-none transition-all
                   duration-300 hover:ring-1 hover:ring-tertiary`

const Pagination: FC<Props> = ({
  onPageChange,
  currentPage,
  isPreview,
  isNext,
  pageNumbers,
  className,
}) => {
  return (
    <div className={`${className} flex justify-center`}>
      <nav aria-label="Pagination">
        <ul className="list-style-none flex">
          <li
            onClick={() => isPreview && onPageChange(pageNumbers[0])}
            className={itemClass}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M16.79 5.23a.75.75 0 01-.02 1.06L12.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li
            onClick={() => isPreview && onPageChange(currentPage - 1)}
            className={itemClass}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          {fpFunction.pipe(
            pageNumbers,
            fpArray.mapWithIndex((i, a) => (
              <li onClick={() => onPageChange(a)} key={i}>
                <div
                  className={`
                ${
                  a === currentPage && 'text-primary ring-1 ring-tertiary'
                } ${itemClass}`}
                >
                  {a}
                </div>
              </li>
            ))
          )}
          <li
            onClick={() => isNext && onPageChange(currentPage + 1)}
            className={itemClass}
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li
            onClick={() =>
              isNext && onPageChange(pageNumbers[pageNumbers.length - 1])
            }
            className={itemClass}
          >
            <span className="sr-only">Double Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3.21 14.77a.75.75 0 01.02-1.06L7.168 10 3.23 6.29a.75.75 0 111.00-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
