import { ChangeEvent, useEffect, useState } from 'react'

import { useRecoilState, useResetRecoilState } from 'recoil'

import { useDebounce } from '@hooks/useDebounce'
import { currentPageAtom } from '@modules/current-page/atom'

import { searchTextAtom } from './atom'

export interface UseSearchTextDebounceParams<T> {
  data: Array<T>
  onSearchFilter: (text: string) => Array<T>
}

export const useSearchTextAction = <T>({
  data,
  onSearchFilter,
}: UseSearchTextDebounceParams<T>) => {
  const [filteredData, setFilteredData] = useState<Array<T>>(data)
  const [searchText, setSearchText] = useRecoilState(searchTextAtom)
  const resetCurrentPage = useResetRecoilState(currentPageAtom)

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value)

  const debouncedSearchText = useDebounce<string>(searchText, 500)

  useEffect(() => {
    resetCurrentPage()
    setFilteredData(onSearchFilter(searchText))
  }, [debouncedSearchText])

  return {
    searchText,
    filteredData,
    onSearchInputChange,
  }
}
