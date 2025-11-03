//94
import React from 'react'

function ServiceDeclineForm() {
    return (
        <>
            <div className='w-full px-10 md:px-20 flex flex-col gap-4 py-4'>
                <button className='py-2 text-center text-white bg-black rounded-full w-full'>Service Status</button>
                <button className='py-2 text-center text-white bg-black rounded-full w-full'>Payment Status</button>
                <input type="text" placeholder='Title' className='bg-white py-2 rounded-lg mb-2 w-full shadow shadow-black' />
                <textarea name="" placeholder='Description' id="" className='w-full bg-white shadow shadow-black rounded-lg' rows={'6'}></textarea>
                <input type="file" placeholder='Image & Videos' className='bg-white py-2 rounded-lg mb-2 w-full shadow shadow-black' />
                <button className='py-2 text-center text-white bg-amber-950 rounded-full w-full'>Decline</button>
            </div>
        </>
    )
}

export default ServiceDeclineForm