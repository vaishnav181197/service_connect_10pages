// 93
import React from 'react'

function InvoiceForm() {
  return (
    <>
        <div className='w-full py-2 px-10 md:px-20'>
            <h2 className='font-semibold'>Appoinment</h2>
            <div className='w-full grid grid-cols-2 gap-2'>
                <input type="date"  className='bg-white py-2 rounded-lg'/>
                <input type="time" className='bg-white py-2 rounded-lg'/>
            </div>
            <h2 className='font-semibold my-1'>Invoice</h2>
            <input type="text" placeholder='Description' className='bg-white py-2 rounded-lg mb-2 w-full' />
            <input type="number" placeholder='Qty' className='bg-white py-2 rounded-lg mb-2 w-full' />
            <input type="number" placeholder='Price' className='bg-white py-2 rounded-lg mb-2 w-full' />
            <div className='w-full flex justify-around'>
                <button className='bg-gray-600 text-white rounded-2xl px-2 md:w-1/3'> + Add Another</button>
                <button className='bg-green-900 text-white rounded-2xl px-2 md:w-1/3'> Done</button>
            </div>
            <textarea name="" placeholder='Terms & Conditions' id="" className='w-full bg-white mt-5 rounded-lg' rows={'6'}></textarea>
            <textarea name="" placeholder='Additional Requirements' id="" className='w-full bg-white mt-5 rounded-lg' rows={'6'}></textarea>
            <div className='w-full mt-2'>
                <button className='w-full py-2 text-white bg-black rounded-full relative'>
                    Confirm
                    <span className='bg-white px-1 py-2 text-black rounded-full text-center absolute top-0 right-1'>
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}

export default InvoiceForm