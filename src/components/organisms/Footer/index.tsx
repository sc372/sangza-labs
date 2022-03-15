import React from 'react'
import dayjs from 'dayjs'

const Footer = () => {
  return (
    <div className="text-white text-sm w-full mt-auto font-light h-50 flex justify-center mb-10">
      {dayjs().format('YYYY')}@All rights reserved sangza
    </div>
  )
}

export default Footer
