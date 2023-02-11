import { RefObject, useEffect, useRef, useState } from 'react'

interface useReadingTime {
  docRef: RefObject<HTMLDivElement>
  readingTime: string
}

export const useReadingTime = () => {
  const docRef = useRef<HTMLDivElement>(null)
  const [readingTime, setReadingTime] = useState('')

  const getRedingTime = (text: string): string => {
    const wpm = 125
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return `${time} min`
  }

  useEffect(() => {
    if (!docRef?.current) return
    setReadingTime(getRedingTime(docRef.current.innerText))
  }, [docRef])

  return { docRef, readingTime }
}
