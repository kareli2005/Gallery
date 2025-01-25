import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HeaderBtn = ({ path, fullwidth }) => {
  const [isActive, setIsActive] = useState(false)
  const [btnText, setBtnText] = useState('')

  const location = useLocation()

  const formatPathname = (pathname) => {
    const trimmedPath = pathname.slice(1)
    return trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1)
  }

  const getTextFromPathname = (pathname) => {
    if (!pathname) return
    if (pathname == '/') return 'Home'
    if (pathname.startsWith('/')) {
      return formatPathname(pathname)
    }
  }

  useEffect(() => {
    const text = getTextFromPathname(path)
    setBtnText(text)
  }, [location.pathname])

  useEffect(() => {
    if (path === location.pathname || location.pathname.startsWith('/profile') && path === '/profile') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [location.pathname])

  return btnText ? (
    <Link to={path} className={`${isActive ? 'bg-blue-600 text-white' : 'bg-white hover:text-white text-blue-600 hover:bg-blue-400'} ${fullwidth && 'w-full'} border-blue-600 border-solid border-2 p-2 sm:px-4 rounded-lg font-semibold duration-300`}>
      {btnText}
    </Link>
  ) : <></>
}

export default HeaderBtn
