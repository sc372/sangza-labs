import { RefObject, useEffect, useRef, useState } from 'react'


const headElementList = ["H1", "H2", "H3", "H4", "H5"] as const
type HeadElement = typeof headElementList[number]

const isHeadElement = (a: string) => headElementList.find(aa => a === aa);
const getPrefix = (a: string) => [...Array(parseInt(a) * 3)].reduce((aa, bb) => aa + "\u00A0", "")

export type AnchorElement = [
  prefix: string,
  element: string,
  title: string,
]

interface UseAnchor {
  docRef: RefObject<HTMLDivElement>
  anchorElementList: Array<AnchorElement>
}

export const useAnchor = (): UseAnchor => {
  const docRef = useRef<HTMLDivElement>(null)
  const [anchorElementList, setAnchorElementList] = useState<Array<AnchorElement>>([])

  function makeAnchorElementList(ref: HTMLDivElement): Array<AnchorElement> {
    return Array.from(ref.children)
      .filter(a => isHeadElement(a.tagName as HeadElement))
      .map(a => {
        console.log(a.tagName)
        console.log(a.getElementsByTagName('a'))
        a.getElementsByTagName('a').remove()
        return [getPrefix(a.tagName.split("")[1]), a.tagName, a.innerHTML]
      })
  }

  useEffect(() => {
    if (!docRef?.current) return
    setAnchorElementList(makeAnchorElementList(docRef.current))
  }, [docRef])

  return { docRef, anchorElementList }
}
