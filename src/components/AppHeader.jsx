import React, { useState } from 'react'
import HeaderDropDown from './HeaderDropDown'

function AppHeader({ title, menu, notific, profile, search, settings, whiteheader, option,call }) {
  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <header className={whiteheader ? "w-full flex justify-between items-center h-12 px-4" : "w-full flex justify-between items-center bg-black h-12 px-4"}>
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {!menu && (
          <span className={whiteheader ? "p-1" : "p-1 border border-white rounded-full"}>
            <i className={whiteheader ? "fa-solid fa-arrow-left text-black" : "fa-solid fa-arrow-left text-white"}></i>
          </span>
        )}

        {menu && <i className="fa-solid fa-bars text-white"></i>}

        <h1 className={whiteheader ? "text-black text-base sm:text-lg font-medium" : "text-white text-base sm:text-lg font-medium"}>
          {title}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 relative">
        {notific && <i className="fa-solid fa-bell text-white"></i>}
        {profile && <i className="fa-solid fa-user text-white"></i>}
        {search && <i className={whiteheader?"fa-solid fa-magnifying-glass text-black":"fa-solid fa-magnifying-glass text-white"}></i>}
        {call && <i className={whiteheader?"fa-solid fa-phone text-black":"fa-solid fa-phone text-white"}></i>}
        {settings && <i class="fa-solid text-white fa-sliders"></i>}
        {option && <i className="text-white fa-solid fa-ellipsis-vertical" onClick={toggleDropdown}></i>}
        {option &&
          <>
            {
              dropdown &&
              <HeaderDropDown />

            }
          </>
        }
      </div>
    </header>
  )
}

export default AppHeader
