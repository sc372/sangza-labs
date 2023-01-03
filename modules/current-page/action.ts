
import { useRecoilState } from 'recoil'

import { currentPageAtom } from './atom'

export const useCurrentPageAction = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom)

  const onCurrentPageChange = (page: number) => setCurrentPage(page)

  return {
    currentPage,
    onCurrentPageChange
  }
}
