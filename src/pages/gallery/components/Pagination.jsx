import React, { useEffect, useState } from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Pagination = ({ quantity, setQuantity, page, fetchImages }) => {
  const [isOpenMap, setIsOpenMap] = useState(false)
  const [isOpenLimit, setIsOpenLimit] = useState(false)
  const [numbersToMap, setNumbersToMap] = useState([])
  const [fetchLimit, setFetchLimit] = useState(30)

  const showNumbers = [8, 16, 24]
  const limitNumbers = Array.from({ length: 10 }, (_, i) => (i + 1) * 10)

  useEffect(() => {
    const numbers = showNumbers.filter((number) => number != quantity)
    setNumbersToMap(numbers)
  }, [quantity])

  const toggleDropdownMap = () => {
    setIsOpenMap(!isOpenMap)
    setIsOpenLimit(false)
  }


  const toggleDropdownLimit = () => {
    setIsOpenLimit(!isOpenLimit)
    setIsOpenMap(false)
  }

  const handleQuantity = (number, e) => {
    e.stopPropagation()
    setQuantity(number)
  }

  const handleFetchLimit = (number, e) => {
    e.stopPropagation()
    if (number == fetchLimit) return
    setFetchLimit(number)
    fetchImages(number)
  }



  return (
    <div className='w-full max-w-5xl p-4 lg:px-0 flex justify-between xs:items-center flex-col-reverse xs:flex-row gap-2 items-start'>
      <div className='text-start border-2 bg-white border-blue-600 text-blue-600 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:font-bold cursor-default'>
        Page: {page}
      </div>
      <div className='flex flex-col w-full xs:flex-row xs:w-auto gap-2'>
        <div onClick={toggleDropdownMap} className={`${isOpenMap ? 'bg-blue-600 text-white z-50' : 'text-blue-600 bg-white hover:bg-blue-600 hover:text-white z-20'} shadow-lg flex gap-1 sm:gap-2 border-2 border-blue-600 duration-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg cursor-pointer sm:font-bold relative`}>
          {isOpenMap ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <p>Show: <span>{quantity}</span></p>
          {
            isOpenMap && <div className='absolute top-9 xs:top-12 right-0 rounded-lg bg-white border-2 border-blue-600 p-2 flex gap-2 flex-col shadow-lg'>
              {
                numbersToMap.map((number, key) => (
                  <p className='text-gray-600 hover:text-blue-600 duration-300' key={key} onClick={(e) => handleQuantity(number, e)}>Show {number}</p>
                ))
              }
            </div>
          }
        </div>
        <div onClick={toggleDropdownLimit} className={`${isOpenLimit ? 'bg-blue-600 text-white z-50' : 'text-blue-600 bg-white hover:bg-blue-600 hover:text-white z-20'} shadow-lg flex gap-1 sm:gap-2 border-2 border-blue-600 duration-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg cursor-pointer sm:font-bold relative`}>
          {isOpenLimit ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <p>Fetch limit: <span>{fetchLimit}</span></p>
          {
            isOpenLimit && <div className='absolute top-9 xs:top-12 right-0 rounded-lg bg-white border-2 border-blue-600 p-2 flex gap-2 flex-col shadow-lg max-h-32 overflow-y-auto'>
              {
                limitNumbers.map((number, key) => (
                  <p className='text-gray-600 hover:text-blue-600 duration-300' key={key} onClick={(e) => handleFetchLimit(number, e)}>Fetch {number}</p>
                ))
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Pagination