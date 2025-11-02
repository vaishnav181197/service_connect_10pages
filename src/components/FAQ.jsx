import React from 'react'

function FAQ() {
  return (
    <>
      <div className='w-full py-2 h-fit'>
        <div className='flex gap-5 ps-10'>
          <span className='p-2 border font-bold bg-white rounded-2xl hover:bg-black hover:text-white'>General</span>
          <span className='p-2 border font-bold bg-white rounded-2xl hover:bg-black hover:text-white'>Account</span>
          <span className='p-2 border font-bold bg-white rounded-2xl hover:bg-black hover:text-white'>Payment</span>
          <span className='p-2 border font-bold bg-white rounded-2xl hover:bg-black hover:text-white'>Service</span>
        </div>
        <div className='flex flex-col justify-center gap-3 mt-10'>
          
          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className='flex justify-between mb-2 font-semibold'>How Do I Manage Notifications ? <span ><i className="fa-solid fa-angle-down"></i></span></h4>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facere. Praesentium, eum unde? Eligendi recusandae eaque officia non facere enim libero officiis quaerat quae explicabo, voluptas voluptatum qui at quibusdam.
            </p>
          </div>
          
          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className='flex justify-between mb-2 font-semibold'>How Do I Manage Notifications ? <span ><i className="fa-solid fa-angle-down"></i></span></h4>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facere. Praesentium, eum unde? Eligendi recusandae eaque officia non facere enim libero officiis quaerat quae explicabo, voluptas voluptatum qui at quibusdam.
            </p>
          </div>

          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className='flex justify-between mb-2 font-semibold'>How Do I Manage Notifications ? <span ><i className="fa-solid fa-angle-down"></i></span></h4>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facere. Praesentium, eum unde? Eligendi recusandae eaque officia non facere enim libero officiis quaerat quae explicabo, voluptas voluptatum qui at quibusdam.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default FAQ