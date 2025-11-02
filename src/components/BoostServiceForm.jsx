import React from 'react'

function BoostServiceForm() {
    return (
        <>
            <div className='py-10 w-full px-10 md:p-20'>
                <div className='w-full flex justify-start items-center gap-5 mb-10'>
                    <div className='w-1/10 h-1/10'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TPu3HoTZkTyxzVY6h3fuKo-nPU85G5u4Vw&s" alt="hh" className='w-full rounded-full shadow-2xl shadow-black' />
                    </div>
                    <h3 className='font-bold text-2xl'>House Electrical</h3>
                </div>
                <div className='w-full'>
                    <h6 className='ps-10 font-semibold mb-10'>Schedule</h6>
                    <h6>From</h6>
                    <div className='w-full grid grid-cols-2 gap-2'>
                        <input type="date" name="" className='bg-white rounded-lg shadow shadow-black p-5' id="" />
                        <input type="time" name="" className='bg-white rounded-lg shadow shadow-black p-5' id="" />
                    </div>
                </div>
                <div className='w-full'>
                    <h6>To</h6>
                    <div className='w-full grid grid-cols-2 gap-2'>
                        <input type="date" name="" className='bg-white rounded-lg shadow shadow-black p-5' id="" />
                        <input type="time" name="" className='bg-white rounded-lg shadow shadow-black p-5' id="" />
                    </div>
                </div>
                <div className='w-full my-5'>
                    <h6>Target Area</h6>
                    <input type="text" name="" className='bg-white rounded-lg shadow shadow-black p-5 w-full' id="" />
                </div>
                <div className='w-full'>
                    <h5>No of Days : 30</h5>
                    <h5>Esimated Price : RS 350/-</h5>
                </div>
                <div className='w-full mt-5'>
                    <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow shadow-black">
                        Confirm and Pay
                    </button>
                </div>
            </div >
        </>
    )
}

export default BoostServiceForm