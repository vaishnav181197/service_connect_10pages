import React from 'react'
// U-37


function UserProfileMenuBar() {
  return (
    <>
      <div className='w-1/2 h-3/4 flex flex-col bg-gray-600'>
        <div className='w-full relative p-2 flex items-start'>
          <span className='p-1 border-2 border-white rounded-circle absolute right-5 top-5 rounded-full'><i className="fa-solid text-white fa-xmark"></i></span>
          <div className='flex items-start gap-4 mt-10'>
            <div className='w-fit h-fit mx-auto relative'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&s" style={{ height: "100px" }} className='rounded-full border-3 border-green-800' alt="pp" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIwiKbRMRJkaJBTn7kU1Atnt_Qd6exNbacQ&s" className='rounded-xl border-3 border-green-800 absolute -bottom-2 right-0' style={{ height: '40px' }} alt="llogo" />
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='text-pink-700'>Stone Sellar</h1>
              <h4 className='text-yellow-600'>UID : HI670</h4>
              <h5 className='text-green-500'>Online</h5>

            </div>
          </div>
        </div>

        <ul className='mt-5 w-full px-10 py-2 flex flex-col gap-4'>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>My Profile</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Home</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Bookings</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Active Services</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Services</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Complaints</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Messages</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Settings</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Transactions</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>History</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Help Center</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>Terms & Conditions</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>About Us</li>
          <li className='text-white rounded-sm p-2 hover:bg-gray-400'>invite a Friend</li>
        </ul>
        <div className='mt-5 flex justify-center'>
          <span className='text-white rounded-sm p-2 hover:bg-gray-400'>Logout <i className="fa-solid text-white fa-arrow-right-from-bracket"></i></span>
        </div>
      </div>
    </>
  )
}

export default UserProfileMenuBar