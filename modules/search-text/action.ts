import { ChangeEvent, useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'

import { useDebounce } from '@hooks/useDebounce'

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

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value)

  const debouncedSearchText = useDebounce<string>(
    searchText,
    500
  )

  useEffect(() => {
    setFilteredData(onSearchFilter(searchText))
  }, [debouncedSearchText])


  return {
    searchText,
    filteredData,
    onSearchInputChange
  }
}
