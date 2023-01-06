import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from './useDebounce'

export interface UseSearchTextDebounceParams<T> {
  data: Array<T>
  onSearchFilter: (text: string) => Array<T>
}

export const useSearchTextDebounce = <T>({
  data,
  onSearchFilter,
}: UseSearchTextDebounceParams<T>) => {
  const [filteredData, setFilteredData] = useState<Array<T>>(data)
  const [searchText, setSearchText] = useState('')

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value)

  const debouncedSearchText = useDebounce<string>(searchText, 500)

  useEffect(() => {
    setFilteredData(onSearchFilter(searchText))
  }, [debouncedSearchText])

  return {
    filteredData,
    onSearchInputChange,
  }
}
