import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { isPageLoadingAtom } from '@modules/drawer/atom'

export const useIsDwawer = () => {
  const [isPageLoading, setIsPageLoading] = useRecoilState(isPageLoadingAtom)

  useEffect(() => {
    setIsPageLoading(false)
  }, [])

  return {
    isPageLoading,
    setIsPageLoading,
  }
}
