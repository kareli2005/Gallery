import React from 'react'

const Error = ({ errorText }) => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-center text-gray-600'>
      <p className='font-bold text-xl sm:text-3xl lg:text-5xl duration-300'>{errorText}</p>
    </div>
  )
}

export default Error