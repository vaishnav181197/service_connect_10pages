//p86
import React from 'react'
import AppHeader from '../components/AppHeader'
import ReviewItems from '../components/service_flow/ReviewItems'

function ReviewList() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200 flex flex-col'>
        <AppHeader title={'REVIEWS'}/>
        <div className='w-full p-10'>
            <h1 className='text-center text-4xl font-bold'>4.8</h1>
            <div className='w-fit mx-auto'>
                <i className="fa-solid fa-star text-yellow-500" ></i>
                <i className="fa-solid fa-star text-yellow-500" ></i>
                <i className="fa-solid fa-star text-yellow-500" ></i>
                <i className="fa-solid fa-star text-yellow-500" ></i>
                <i className="fa-solid fa-star text-yellow-500" ></i>
               
            </div>
            <p className='text-center'>Based on 448 Review</p>
        </div>
        <div className='w-full px-10 flex justify-start gap-1 md:gap-8'>
            <span className='px-1  bg-white text-black rounded-full shadow hover:bg-black hover:text-white md:px-3'>Excellent</span>
            <span className='px-1  bg-white text-black rounded-full shadow hover:bg-black hover:text-white md:px-3'>Good</span>
            <span className='px-1  bg-white text-black rounded-full shadow hover:bg-black hover:text-white md:px-3'>Average</span>
            <span className='px-1  bg-white text-black rounded-full shadow hover:bg-black hover:text-white md:px-3'>Below Average</span>
            <span className='px-1  bg-white text-black rounded-full shadow hover:bg-black hover:text-white md:px-3'>Poor</span>
        </div>
        {/* Reviews */}
        <div className='w-full px-10 md:px-15'>
            <ReviewItems/>
            <ReviewItems/>
            <ReviewItems/>
            <ReviewItems/>
           
        </div>
        <button className='bg-black w-3/4 py-3 rounded-full mx-auto text-white sticky bottom-2 '>Write a Review</button>
    </div>
    </>
  )
}

export default ReviewList