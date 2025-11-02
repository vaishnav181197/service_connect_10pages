import React from 'react'

function ServiceItem({ rating }) {
    return (
        <div className='w-full rounded-2xl relative p-5 bg-white h-fit flex justify-start shadow-2xl mx-auto md:w-3/4'>
            <span className='p-3 rounded-full bg-green-700 absolute -top-5 right-5'>
                <span className='p-1 rounded-full shadow-2xl bg-white'>
                    <i className="fa-solid text-green-700 fa-check"></i>
                </span>
            </span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/250px-Black_colour.jpg" className='rounded-lg' style={{ height: '150px' }} alt="course" />
            <div className='p-4 flex flex-col justify-center gap-2'>
                <h4 className="font-bold text-orange-500">Graphic Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit sequi porro dolores ipsum magni,...</p>
                <div className='grid grid-cols-2'>
                    <h4 className='text-center border-e-2 border-e-black'><i className="fa-solid fa-star text-yellow-600"></i>{rating}</h4>
                    <h4 className='text-center'>2Hrs 30Mins</h4>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem