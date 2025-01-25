import React, { useState } from 'react'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import Loading from './Loading'
import FullImage from './FullImage'

const Photo = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [shadowFullImage, setShowFullImage] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    console.log(link)
    link.href = image.url
    link.download = `image-${image.id}.${image.ext}`
    link.target = '_blank'
    link.click()
  }
  
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className='w-full bg-white p-2 rounded-lg flex flex-col gap-2 text-center group cursor-pointer'>
      {shadowFullImage && <FullImage handleDownload={handleDownload} imageData={image} setShow={setShowFullImage} />}

      <div className='w-full aspect-[10/7] rounded-lg overflow-hidden relative'>
        <DownloadRoundedIcon onClick={handleDownload} className='absolute top-2 left-2 z-10 text-white hover:text-blue-600 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-300' />

        {isLoading && (
          <div className='bg-gray-300 w-full h-full absolute flex justify-center items-center'>
            <Loading />
          </div>
        )}

        <img
          onClick={() => setShowFullImage(true)}
          src={image.url}
          alt={image.author}
          className={`${isLoading && 'hidden'} scale-110 group-hover:scale-100 h-full w-full object-cover transition-all duration-300`}
          onLoad={handleImageLoad}
        />

        <div className='pointer-events-none opacity-0 bg-black group-hover:opacity-40 z-50 w-full h-full absolute' />
      </div>
      <p className='text-gray-600 text-sm'>by <span className='font-bold'>{image.author}</span></p>
    </div>
  )
}

export default Photo
