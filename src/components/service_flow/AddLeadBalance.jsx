//92
import React from 'react'

function AddLeadBalance() {
    return (
        <>
            <div className='mx-10 py-10 md:mx-20 bg-white rounded-2xl'>
                <h3 className='text-center text-2xl mb-10 font-semibold'>ADD LEAD BALANCE</h3>
                <div className=' w-full'>
                    <h2 className='text-center text-3xl font-bold'>50</h2>
                    <p className='text-center font-semibold'>Leads will be added to your account</p>
                    <h3 className='text-center text-2xl font-semibold'><i className="fa-solid fa-indian-rupee-sign"></i>300</h3>
                    <div className='text-center w-full'>
                        <button className=' w-3/4 py-2 bg-black text-center text-white rounded-lg'>Confirm & Pay</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddLeadBalance