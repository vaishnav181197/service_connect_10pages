import React from 'react'

function JobItem({ job }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-5 w-full max-w-sm mx-auto border border-gray-100">
      {/* Close Icon */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Title and View Link */}
      <div className="flex justify-start gap-3 items-center mb-2">
        <h2 className="text-lg font-bold text-gray-800">{job.title}</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View
        </a>
      </div>

      {/* User Info */}
      <div className="flex items-center mb-3">
        <div className="w-4 h-4 bg-purple-400 rounded-full mr-2"></div>
        <div>
          <p className="text-gray-700 font-medium text-sm">{job.provider}</p>
          <p className="text-gray-400 text-xs">{job.status}</p>
        </div>
      </div>

      {/* Date & Time */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-calendar-days"></i>
          <span>{job.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-clock"></i>
          <span>{job.timeslot}</span>
        </div>
      </div>

      {/* Scheduleddetails */}

      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-1">
          Amount :
          <span>{job.amount}/-</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid text-red-600 fa-circle-info"></i>
          <span className='text-red-600'>
            {job.additionalreq &&
              <>
                Additional Requirements
              </>
            }
          </span>
        </div>
      </div>



      {/* Status Bar */}
      {
        job.status == "Pending" ?
          <button class="w-full relative bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Chat / Call
            <span className='p-1 bg-white rounded-full absolute right-1 top-1'>
              <i className="fa-solid fa-arrow-right text-green-500"></i>
            </span>
          </button>
          :
          <button class="w-full relative bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Complete Payment
            <span className='p-1 bg-white rounded-full absolute right-1 top-1'>
              <i className="fa-solid fa-arrow-right text-green-500"></i>
            </span>
          </button>

      }




    </div>
  )
}

export default JobItem