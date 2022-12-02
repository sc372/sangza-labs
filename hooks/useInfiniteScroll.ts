import { RefObject, useEffect, useState } from 'react'

import { splitAt } from 'fp-ts/Array'

import { useIntersect } from './useIntersect'

export interface UseInfiniteScrollParams<T> {
  data: Array<T>
  pageSize: number
}

export interface UseInfiniteScroll<T> {
  addedData: Array<T>
  infiniteScrollRef: RefObject<HTMLDivElement>
}

export const useInfiniteScroll = <T>({
  data,
  pageSize,
}: UseInfiniteScrollParams<T>): UseInfiniteScroll<T> => {
  const [initAddedData, initRestData] = splitAt(pageSize)(data)
  const [addedData, setAddedData] = useState<Array<T>>(initAddedData)
  const [restData, setRestData] = useState<Array<T>>(initRestData)

  const infiniteScrollRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (restData.length > 0) {
      const [willAddData, willRestData] = splitAt(pageSize)(restData)

      setAddedData([...addedData, ...willAddData])
      setRestData(willRestData)
    }
  })

  useEffect(() => {
    setAddedData(initAddedData)
    setRestData(initRestData)
  }, [data])

  return {
    addedData,
    infiniteScrollRef
  }
}
