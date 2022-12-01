import { useState } from 'react'

import { splitAt } from 'fp-ts/Array'

import { useIntersect } from './useIntersect'

export interface UseInfiniteScrollParams<T> {
  data: Array<T>
  pageSize: number
}

export interface UseInfiniteScroll<T> {
  reduceData: Array<T>
  ref:
}

export const useInfiniteScroll = <T>({
  data,
  pageSize,
}: UseInfiniteScrollParams<T>): UseInfiniteScroll<T> => {
  const [reduceData, setReduceData] = useState<Array<T>>([])
  const [restData, setRestData] = useState<Array<T>>(data)

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (restData.length > 0) {
      // const willAddData = filterWithIndex((i, a) => i < pageSize)(restData)
      const [willAddData, willRestData] = splitAt(pageSize)(restData)
      console.log(willAddData)
      console.log(willRestData)
      setReduceData([...reduceData, ...willAddData])
      setRestData(willRestData)
    }
  })

  return {
    reduceData,
    ref
  }
}
