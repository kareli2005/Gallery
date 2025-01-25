import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='w-full min-h-full flex flex-col justify-start bg-slate-200 overflow-y-auto scroll-container'>
      <Header />
      <main className='flex flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
