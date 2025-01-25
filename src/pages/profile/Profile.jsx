import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { username } = useParams()
  const [userName, setUserName] = useState('Tsotne Kareli')

  useEffect(() => {
    if (username) {
      setUserName(username)
    }
  }, [username])

  return (
    <div className='w-full h-full flex justify-center items-center text-base xs:text-lg md:text-2xl lg:text-3xl text-gray-600 cursor-default duration-300'>
      <p>Made By <span className='font-extrabold'>"{userName}"</span></p>
    </div>
  )
}

export default Profile
