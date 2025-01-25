import React, { useState, useEffect } from 'react'
import httpClient from '../../httpClient'
import Photo from './components/Photo'
import Pagination from './components/Pagination'
import PageSwitcher from './components/PageSwitcher'
import Loading from './components/Loading'

const Gallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(8)
  const [page, setPage] = useState(1)
  const [imagesCount, setImagesCount] = useState(0)



  const fetchImages = async (limit = 30) => {
    const fetchUrl = 'https://picsum.photos/v2/list?page=1&limit=' + limit
    try {
      const response = await httpClient.get(fetchUrl)
      const processedImages = response.data.map((image) => {
        const url = image.download_url
        const ext = url.split('.').pop().split('?')[0]

        if (!url || ext === '') {
          return url = 'https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image'
        }

        return {
          ...image,
          url,
          ext,
        }
      })
      setImages(processedImages)
      setImagesCount(processedImages.length)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])



  useEffect(() => {
    const scrollableContainer = document.querySelector('.scroll-container') || window
    scrollableContainer.scrollTo({ top: 0 })
  }, [page])


  const startIndex = (page - 1) * quantity
  const displayedImages = images.slice(startIndex, startIndex + quantity)

  if (loading) return <Loading />
  if (error) return <Error errorText={error} />

  return (
    <div className='w-full flex flex-grow flex-col justify-start items-center z-50'>
      <div className='flex w-full justify-center items-center'>
        <Pagination quantity={quantity} setQuantity={setQuantity} page={page} fetchImages={fetchImages} />
      </div>
      <div className='w-full p-4 lg:px-0 max-w-5xl gap-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {displayedImages.map((image, key) => (
          <Photo key={key} image={{ ...image, url: image.url, loading: 'lazy' }} />
        ))}
      </div>
      <div className='flex w-full justify-center items-center'>
        <PageSwitcher page={page} setPage={setPage} itemsCount={imagesCount} quantity={quantity} />
      </div>
    </div>
  )
}

export default Gallery
