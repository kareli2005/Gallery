import React from 'react'
import heroImage from '../../../assets/heroImage.jpg'

const Hero = () => {
  return (
    <div
      className="w-full h-30 csm:h-40 sm:h-60 max-w-3xl relative bg-cover bg-center rounded-xl duration-300 box-border shadow-lg"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <p className='font-semibold text-sm csm:text-lg sm:text-2xl absolute pt-2 csm:bottom-2 left-2 sm:left-4 sm:bottom-4 text-gray-200 duration-300'>
        Get the images <br></br> You're looking for
      </p>
    </div>
  )
}

export default Hero