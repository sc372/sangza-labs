import React, { FC } from 'react'

import siteConfig from '../../site.config'

interface Props {
  className?: string
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer
      className={`${className} fixed left-0 right-0 bottom-0 h-16 bg-background px-5 pt-2 sm:px-14`}
    >
      <div className="border-t-2 border-solid text-primary"></div>
      <div className="text-center">
        <small>&copy; {siteConfig.copyright}</small>
      </div>
    </footer>
  )
}

export default Footer
