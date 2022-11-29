import { useEffect } from 'react'
import { useDebounce } from './useDebounce'
import { useSearchText } from './useSearchText'

export interface UseSearchTextDebounceParams<T> {
  data: Array<T>
  onSearchFilter: (text: string) => Array<T>
}

export const useSearchTextDebounce = <T>({
  data,
  onSearchFilter,
}: UseSearchTextDebounceParams<T>) => {
  const resultUseSearchText = useSearchText({ data, onSearchFilter })
  const debouncedSearchText = useDebounce<string>(
    resultUseSearchText.searchText,
    500
  )

  useEffect(resultUseSearchText.onSearchInputClick, [debouncedSearchText])

  return {
    ...resultUseSearchText,
  }
}
