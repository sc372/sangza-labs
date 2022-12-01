import { RefObject, useCallback, useEffect, useRef } from 'react'

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void

type UseIntersectType = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => RefObject<HTMLDivElement>

export const useIntersect: UseIntersectType = (onIntersect, options) => {
  const ref = useRef<HTMLDivElement>(null)
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer)
      })
    },
    [onIntersect]
  )

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options, callback])

  return ref
}
