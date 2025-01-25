import React, { useState } from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import Loading from './Loading'
const FullImage = ({ handleDownload, imageData, setShow }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center z-50 px-4 lg:px-0'>
      <div className='bg-black opacity-30 w-full h-full absolute' />

      <div className='flex flex-col bg-white p-2 z-10 rounded-lg gap-2'>
        <div className='w-full py-2 md:py-4 px-2 flex items-center justify-between text-gray-600'>
          <p className='text-sm'>by <span className='font-bold'>{imageData.author}</span></p>
          <div onClick={handleClose} className='rounded-full bg-slate-200 hover:bg-gray-400 duration-300 p-1'>
            <ClearRoundedIcon />
          </div>
        </div>

        {isLoading && (
          <div className='w-full h-[60vh] aspect-[4/3] flex justify-center items-center'>
            <Loading />
          </div>
        )}

        <img
          src={imageData.url}
          alt={imageData.author}
          className={`max-w-full max-h-[60vh] object-contain rounded-lg ${isLoading ? 'hidden' : 'block'}`}
          onLoad={handleImageLoad}
        />

        <button onClick={handleDownload} className='font-bold bg-white border-2 border-solid border-blue-600 rounded-lg text-blue-600 p-2 lg:p-4 text-base md:text-xl flex gap-2 items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white duration-300'>
          <DownloadRoundedIcon />
          <p>Download</p>
        </button>
      </div>
    </div>
  )
}

export default FullImage
