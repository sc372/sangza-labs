import { useMediaQuery } from "react-responsive"

export interface UseResponsive {
  is2Xl: boolean
  isXl: boolean
  isLg: boolean
  isMd: boolean
  isSm: boolean
}

export const useResponsive = (): UseResponsive => {
  const is2Xl = useMediaQuery({ query: '(max-width: 1536px)' })
  const isXl = useMediaQuery({ query: '(max-width: 1280px)' })
  const isLg = useMediaQuery({
    query: '(max-width: 1024px)'
  })
  const isMd = useMediaQuery({ query: '(max-width: 768px)' })
  const isSm = useMediaQuery({ query: '(max-width: 640px)' })

  return {
    is2Xl,
    isXl,
    isLg,
    isMd,
    isSm,
  }
}
