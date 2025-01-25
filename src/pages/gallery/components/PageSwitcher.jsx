import React from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

const PageSwitcher = ({ page, setPage, itemsCount, quantity }) => {
  const totalPages = Math.ceil(itemsCount / quantity)

  const getPageNumbers = () => {
    const pageNumbers = []

    if (page > 2) {
      pageNumbers.push(1)
      if (page > 3) pageNumbers.push(<MoreHorizRoundedIcon />)
    }

    for (let i = Math.max(1, page - 1); i <= Math.min(totalPages, page + 1); i++) {
      pageNumbers.push(i)
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) pageNumbers.push(<MoreHorizRoundedIcon />)
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className='w-full max-w-5xl p-4 lg:px-0 flex justify-center items-center overflow-x-auto'>
      <div className='flex gap-1 sm:gap-2'>
        {pageNumbers.map((pageNum, index) =>
          typeof pageNum === 'number' ? (
            <button
              key={index}
              onClick={() => {
                setPage(pageNum)
              }}
              className={`${page === pageNum ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:text-white hover:bg-blue-400'} cursor-pointer border-2 border-blue-600 px-2 sm:px-3 sm:py-2 rounded-md text-sm font-semibold shadow-lg duration-300`}
            >
              {pageNum}
            </button>
          ) : (
            <span key={index} className='text-gray-500 py-1 sm:px-3 sm:py-2 text-sm font-semibold'>
              {pageNum}
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default PageSwitcher
