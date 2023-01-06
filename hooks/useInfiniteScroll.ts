import { RefObject, useEffect, useRef, useState } from 'react'

import { splitAt } from 'fp-ts/Array'

import { useIntersect } from './useIntersect'

export interface UseInfiniteScrollParams<T> {
  data: Array<T>
  pageSize: number
}

export interface UseInfiniteScroll<T> {
  addedData: Array<T>
  partialRef: RefObject<HTMLDivElement>
  containerRef: RefObject<HTMLDivElement>
  containerScrollToUp: () => void
}

export const useInfiniteScroll = <T>({
  data,
  pageSize,
}: UseInfiniteScrollParams<T>): UseInfiniteScroll<T> => {
  const [initAddedData, initRestData] = splitAt(pageSize)(data)
  const [addedData, setAddedData] = useState<Array<T>>(initAddedData)
  const [restData, setRestData] = useState<Array<T>>(initRestData)
  const containerRef = useRef<HTMLDivElement>(null)

  const partialRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (restData.length > 0) {
      const [willAddData, willRestData] = splitAt(pageSize)(restData)

      setAddedData([...addedData, ...willAddData])
      setRestData(willRestData)
    }
  })

  const containerScrollToUp = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    setAddedData(initAddedData)
    setRestData(initRestData)
  }, [data])

  return {
    addedData,
    partialRef,
    containerRef,
    containerScrollToUp,
  }
}
