import React from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import HeaderBtn from './HeaderBtn'

const SideNav = ({ showSideNav, setShowSideNav, routes }) => {

  return (
    <>
      {showSideNav && (
        <div className="sm:hidden w-full h-screen opacity-50 bg-black fixed top-20 left-0" />
      )}
      <div
        className={`${showSideNav ? 'right-0' : '-right-full'
          } duration-300 sm:hidden max-w-[200px] w-4/5 h-screen bg-white flex flex-col border-l border-blue-600 justify-start items-start p-4 gap-2 fixed top-20 text-customRed`}
      >
        <ClearRoundedIcon
          onClick={() => setShowSideNav(false)}
          sx={{
            fontSize: 30,
            transition: 'color 0.3s',
          }}
          className="cursor-pointer text-gray-700 hover:text-blue-600"
        />
        <div className="h-[2px] w-full bg-blue-600" />
        {
          Object.values(routes).map((route, key) => (
            <HeaderBtn key={key} path={route.path} fullwidth={true} />
          ))
        }
      </div>
    </>
  )
}

export default SideNav