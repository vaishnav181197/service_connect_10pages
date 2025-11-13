//63
import React from 'react'

export const TransactionCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-3 flex items-center gap-3 mb-3">
      {/* left */}
      <div className="w-12 h-12 bg-gray-300 rounded-md overflow-hidden md:w-16 md:h-16">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/960px-Black_colour.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      {/* right */}
      <div className=" flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 md:text-lg">Build Personal Branding</h3>
        <p className="text-xs mb-1 text-gray-500">Web Designer</p>
        <span className="text-xs  hover:bg-green-700 bg-green-600  text-white px-4 py-1  font-medium w-fit md:text-sm">
        Paid
      </span>
      </div>

      
    </div>
  )
}