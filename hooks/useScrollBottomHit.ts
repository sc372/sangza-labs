import { useCallback, useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';


export interface UseBodyScrollBottomHitParams {
  onBodyBottomHit: () => void
  // onContainerBottomHit?: () => void
}

// export interface UseBodyScrollBottomHit {
// containerRef: LegacyRef<HTMLDivElement> | undefined
// }

type UseBodyScrollBottomHitType = (params: UseBodyScrollBottomHitParams) => void

export const useScrollBottomHit: UseBodyScrollBottomHitType = ({ onBodyBottomHit }) => {
  const [isBottom, setIsBottom] = useState(true);

  const handleOnDocumentBottom = useCallback(() => {
    if (isBottom) {
      onBodyBottomHit()
    }
  }, [isBottom]);

  // const handleContainerOnBottom = useCallback(() => {
  //   if (isBottom && onContainerBottomHit) {
  //     onContainerBottomHit();
  //   }
  // }, [isBottom]);

  /* This will trigger handleOnDocumentBottom when the body of the page hits the bottom */
  useBottomScrollListener(handleOnDocumentBottom);

  /* This will trigger handleOnContainerBottom when the container that is passed the ref hits the bottom */
  // const containerRef = useBottomScrollListener(handleContainerOnBottom) as LegacyRef<HTMLDivElement>;

  // return { containerRef }
}
