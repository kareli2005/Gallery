import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-16 h-16 border-4 border-t-transparent border-blue-600 border-solid rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
