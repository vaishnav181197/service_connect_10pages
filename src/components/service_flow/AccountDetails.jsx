//95
import React from 'react'

function AccountDetails() {
    return (
        <>
            <div className='w-full px-10 md:px-20 py-4'>
                <div className='flex justify-start gap-3'>
                    <div className='w-1/4 h-1/4 md:w-1/8 md:h-1/8'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="pp" className='w-full h-full rounded-lg' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-xl'>Lasso Kayne</h2>
                        <h2 className='font-semibold text-xl'>Welcome Back</h2>
                    </div>
                </div>
                <div className='mt-5 grid grid-cols-2 gap-2 py-4'>
                    <div className='flex justify-start shadow shadow-purple-400 gap-10 bg-purple-500 p-2 rounded-lg'>
                        <span className='text-purple-500 text-2xl rounded-lg bg-white p-5'>
                            <i className="fa-solid fa-arrow-up"></i>
                        </span>
                        <span>
                            <h3 className='md:text-xl text-white'>Income</h3>
                            <h3 className='md:text-xl text-white'>$ 21,000</h3>
                        </span>
                    </div>
                    <div className='flex justify-start shadow shadow-pink-400 gap-10 bg-pink-500 p-2 rounded-lg'>
                        <span className='text-pink-500 text-2xl rounded-lg bg-white p-5'>
                            <i className="fa-solid fa-arrow-down"></i>
                        </span>
                        <span>
                            <h3 className='md:text-xl text-white'>Expenditure</h3>
                            <h3 className='md:text-xl text-white'>$ 11,000</h3>
                        </span>
                    </div>
                </div>
                <div className='mt-5 bg-gray-700 p-5 rounded-lg text-white flex flex-col gap-5 justify-between items-start h-1/3 shadow shadow-pink-600'>
                    <h2 className='text-lg'>Lasso Kayne</h2>
                    <h2 className='text-lg font-semibold'>4564 7894 1235</h2>
                    <div>
                        <h2>Account Balance</h2>
                        <h1>$ 121,000</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails