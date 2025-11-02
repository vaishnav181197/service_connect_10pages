import React from 'react'

function NotificationItem() {
    return (
        <>
            <div className='w-3/4 mx-auto flex gap-2 mb-5 justify-center bg-gray-50 h-fit rounded-lg shadow-lg shadow-black'>
                <div className='w-fit flex items-center'>
                    <span className='px-2 py-3 bg-white rounded-full shadow'>
                        <i className="fa-solid text-black text-2xl fa-table-cells-large"></i>
                    </span>
                </div>
                <div className='w-3/4 py-10'>
                    <h1 className='font-bold'>New Categroy Course!</h1>
                    <h4>New 3D Course Category is Available...</h4>
                </div>
            </div>
        </>
    )
}

export default NotificationItem