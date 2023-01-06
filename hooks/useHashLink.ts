import { RefObject, useEffect, useRef, useState } from 'react'

import * as fpArray from 'fp-ts/Array'
import * as fpFunction from 'fp-ts/function'

const headingElementList = ['H1', 'H2', 'H3', 'H4', 'H5'] as const
type HeadingElement = typeof headingElementList[number]

const isHeadingElement = (a: HeadingElement) =>
  headingElementList.some((aa) => a === aa)
const getPrefix = (a: string) =>
  [...Array(parseInt(a) * 3)].reduce((aa, bb) => aa + '\u00A0', '')
const filteredHeadingElement = (a: Element) =>
  isHeadingElement(a.tagName as HeadingElement)
const getHashLinkElement = (a: Element) => [
  getPrefix(a.tagName.split('')[1]),
  a.tagName,
  a.innerHTML,
]

export type HashLinkElement = [prefix: string, element: string, title: string]

interface UseHashLink {
  docRef: RefObject<HTMLDivElement>
  hashLinkElementList: Array<HashLinkElement>
}

export const useHashLink = (): UseHashLink => {
  const docRef = useRef<HTMLDivElement>(null)
  const [hashLinkElementList, setHashLinkElementList] = useState<
    Array<HashLinkElement>
  >([])

  function makeHashLinkElementList(
    ref: HTMLDivElement
  ): Array<HashLinkElement> {
    return fpFunction.pipe(
      Array.from(ref.children),
      fpArray.filter(filteredHeadingElement),
      fpArray.map(getHashLinkElement)
    ) as Array<HashLinkElement>
  }

  useEffect(() => {
    if (!docRef?.current) return
    setHashLinkElementList(makeHashLinkElementList(docRef.current))
  }, [docRef])

  return { docRef, hashLinkElementList }
}
