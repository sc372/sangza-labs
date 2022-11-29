import React from 'react'

import dayjs from 'dayjs'

const Footer = () => {
  const now = dayjs()
  return (
    <footer className={`fixed left-0 right-0 bottom-0 h-14 px-14`}>
      <div className="border-solid border-t-2 text-primary"></div>
      <div className="text-center">
        <small>&copy; {now.format('YYYY')} sangza - All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
