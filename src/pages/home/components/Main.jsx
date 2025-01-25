import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../routes'

const Main = () => {
  return (
    <div className='w-full max-w-3xl flex flex-col py-6 text-center duration-300 items-center'>
      <h1 className='text-xl xs:text-2xl lg:text-4xl font-bold text-gray-700 mb-4 duration-300'>
        Welcome to Our Gallery
      </h1>
      <p className='text-sm sm:text-lg text-gray-500 mb-6 px-4 duration-300'>
        Explore a curated collection of beautiful and inspiring images.
        Dive into the visual journey where creativity and art come together.
        Whether you're here for inspiration or just to admire, there's something for everyone.
        Click below to start your gallery experience.
      </p>
      <Link
        to={routes.gallery.path}
        className='bg-blue-600 hover:bg-blue-500 font-semibold text-white border-blue-600 border-solid border-2 p-2 sm:px-4 rounded-lg duration-300 my-2'
      >
        Go To Gallery
      </Link>
    </div>
  )
}

export default Main