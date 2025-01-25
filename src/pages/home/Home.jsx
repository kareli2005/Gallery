import React from 'react'
import Hero from './components/Hero'
import Main from './components/Main'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify items-center p-2 sm:p-4">
      <Main />
      <Hero />
    </div>
  )
}

export default Home
