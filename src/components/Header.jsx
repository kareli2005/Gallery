import React, { useState } from 'react'
import HeaderBtn from './HeaderBtn'
import routes from '../routes'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SideNav from './SideNav'

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <div className='w-full min-h-20 flex justify-center items-center text-gray-700 bg-white duration-300 border-b border-blue-600 sticky top-0 z-100'>
      <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} routes={routes} />
      <div className='w-full max-w-5xl flex items-center justify-between gap-4 h-full'>
        <div className='flex justify-start items-center h-full pl-4 lg:pl-0 duration-300'>
          <Link to={routes.home.path} className='h-12 w-12 '>
            <img src={Logo} alt='logo' className='w-full h-full' />
          </Link>
        </div>
        <div className='flex sm:hidden pr-4 h-full justify-center items-center'>
          <div onClick={() => setShowSideNav(true)} className={`${showSideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'} duration-300 sm:hidden cursor-pointer`}>
            <MenuRoundedIcon
              sx={{
                fontSize: 44,
                transition: 'color 0.3s',
              }}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            />
          </div>
        </div>
        <div className='hidden sm:flex h-full justify-end items-center gap-4 pr-4 lg:pr-0 duration-300'>
          {
            Object.values(routes).map((route, key) => (
              <HeaderBtn key={key} path={route.path} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header