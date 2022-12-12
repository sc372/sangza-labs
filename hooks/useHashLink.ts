import { RefObject, useEffect, useRef, useState } from 'react'


const headElementList = ["H1", "H2", "H3", "H4", "H5"] as const
type HeadElement = typeof headElementList[number]

const isHeadElement = (a: string) => headElementList.find(aa => a === aa);
const getPrefix = (a: string) => [...Array(parseInt(a) * 3)].reduce((aa, bb) => aa + "\u00A0", "")

export type HashLinkElement = [
  prefix: string,
  element: string,
  title: string,
]

interface UseHashLink {
  docRef: RefObject<HTMLDivElement>
  hashLinkElementList: Array<HashLinkElement>
}

export const useHashLink = (): UseHashLink => {
  const docRef = useRef<HTMLDivElement>(null)
  const [hashLinkElementList, setHashLinkElementList] = useState<Array<HashLinkElement>>([])

  function makeHashLinkElementList(ref: HTMLDivElement): Array<HashLinkElement> {
    return Array.from(ref.children)
      .filter(a => isHeadElement(a.tagName as HeadElement))
      .map(a => [getPrefix(a.tagName.split("")[1]), a.tagName, a.innerHTML])
  }

  useEffect(() => {
    if (!docRef?.current) return
    setHashLinkElementList(makeHashLinkElementList(docRef.current))
  }, [docRef])

  return { docRef, hashLinkElementList }
}
