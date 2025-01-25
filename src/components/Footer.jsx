import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='w-full min-h-20 text-sm csm:text-base sm:text-lg flex justify-center items-center bg-white font-semibold text-gray-700 duration-300 border-t border-blue-600'>
      All rights reserved @ {currentYear}
    </div>
  )
}

export default Footer