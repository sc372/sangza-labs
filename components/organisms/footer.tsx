import React from 'react'

import dayjs from 'dayjs'

const Footer = () => {
  const now = dayjs()
  return (
    <footer
      className={`fixed left-0 right-0 bottom-0 h-16 bg-background px-5 pt-2 sm:px-14`}
    >
      <div className="border-t-2 border-solid text-primary"></div>
      <div className="text-center">
        <small>&copy; {now.format('YYYY')} sangza - All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
