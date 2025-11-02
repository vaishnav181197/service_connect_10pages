import React from 'react'

function HeaderDropDown() {
  return (
    <>
        <div className='absolute right-5 top-10'>
            <ul className='w-3xs px-4 py-4 text-black text-end rounded-lg shadow-2xl h-fit flex flex-col justify-around bg-gray-400'>
                <li>Share <i className="fa-solid fa-paper-plane ms-2"></i></li>
                <li>Download <i className="fa-solid fa-download ms-2"></i></li>
                <li>Print <i className="fa-solid fa-print ms-2"></i></li>
            </ul>
        </div>
    </>
  )
}

export default HeaderDropDown