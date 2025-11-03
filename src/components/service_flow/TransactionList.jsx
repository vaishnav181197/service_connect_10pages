//96
import React from 'react'

function TransactionList() {
  return (
    <div className='w-full px-10 py-10 md:px-20'>
        <div className='w-full flex justify-between items-center py-4'>
            <h2 className='font-semibold'>Transactions</h2>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className='mt-2 w-full flex flex-col gap-2'>
            {/* transaction item */}
            <div className='bg-white flex justify-between items-center rounded-lg p-2'>
                <div className='flex justify-start items-center gap-2'>
                    <span className='text-2xl text-sky-700 ps-1'>
                        <i className="fa-solid fa-shop"></i>
                    </span>
                    <div className='flex flex-col text-xl justify-center'>
                        <h4>Sri Rajan</h4>
                        <h4>22 Septemeber 2024</h4>
                    </div>
                </div>
                <span className='text-xl text-red-500'>
                    $22
                </span>
            </div>
            {/* transaction item */}
            <div className='bg-white flex justify-between items-center rounded-lg p-2'>
                <div className='flex justify-start items-center gap-2'>
                    <span className='text-2xl text-sky-700 ps-1'>
                        <i className="fa-solid fa-wifi"></i>
                    </span>
                    <div className='flex flex-col text-xl justify-center'>
                        <h4>Sri Rajan</h4>
                        <h4>22 Septemeber 2024</h4>
                    </div>
                </div>
                <span className='text-xl text-red-500'>
                    $22
                </span>
            </div>
        </div>
    </div>
  )
}

export default TransactionList