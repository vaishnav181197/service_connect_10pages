// 91
import React, { useState } from 'react'

function ServiceLeadDetails() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='w-full mt-10 '>
                <div className='w-full  border-b-2 border-b-white py-5 px-10 md:px-20'>
                    <div className='w-full flex flex-start gap-10'>
                        <div className='w-1/8 h-1/8'>
                            <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png" alt="pp" className='w-full h-full rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2>John Doe</h2>
                            <h6><i className="fa-solid fa-location-dot"></i>Palarivattom , Eranakulam</h6>
                        </div>
                    </div>
                </div>
                <div className='w-full py-3 px-10 md:px-20'>
                    <h2 className='text-gray-500'>Booking Id : 12c5455</h2>
                    <div className='bg-white py-3 rounded-2xl'>
                        <div className='w-full grid grid-cols-2 text-center border-b border-b-black'>
                            <div className={!toggle && 'border-b-2 border-b-blue'} onClick={() => setToggle(false)}>Request</div>
                            <div className={toggle && 'border-b-2 border-b-blue'} onClick={() => setToggle(true)}>Address</div>
                        </div>

                        {
                            toggle ?
                                <div className='w-full py-20 flex flex-col justify-between'>  {/* Address */}
                                    <h2 className='px-20'> Name : John Alex</h2>
                                    <h2 className='px-20'> Address : kjbscfkjbsfcsbjh</h2>
                                    <h2 className='px-20'>PIN : 656556</h2>
                                    <h2 className='px-20'>Phone : 9874561230</h2>
                                    <h2 className='px-20'>Email : jkbg@glk.com</h2>
                                </div>
                                :

                                <div className='w-full p-4 flex flex-col justify-between'>{/* Requests */}
                                    <h2 className='font-semibold'>Title</h2>
                                    <p className='ps-2 text-justify'>Bulb Change</p>
                                    <h2 className='font-semibold'>Description</h2>
                                    <p className='ps-2 text-justify'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quae est error sit earum culpa, vitae eius? Doloribus
                                        consectetur recusandae quos minus sint unde accusamus error repudiandae. Doloribus, et adipisci.
                                    </p>
                                    <h2 className='font-semibold mt-3'>Image & Videos</h2>
                                    <div className='flex justify-around mt-2'>
                                        <div className='w-1/8 h-1/8'>
                                            <img src="https://e7.pngegg.com/pngimages/146/778/png-clipart-camera-logo-graphy-grapher-computer-icons-graphy-free-icon-miscellaneous-rectangle.png" alt="" className='rounded-full w-full h-full' />
                                        </div>
                                        <div className='w-1/8 h-1/8'>
                                            <img src="https://e7.pngegg.com/pngimages/146/778/png-clipart-camera-logo-graphy-grapher-computer-icons-graphy-free-icon-miscellaneous-rectangle.png" alt="" className='rounded-full w-full h-full' />
                                        </div>
                                        <div className='w-1/9 h-1/9'>
                                            <img src="https://e7.pngegg.com/pngimages/146/778/png-clipart-camera-logo-graphy-grapher-computer-icons-graphy-free-icon-miscellaneous-rectangle.png" alt="" className='rounded-full w-full h-full' />
                                        </div>
                                    </div>
                                    <h2>Availability</h2>
                                    <div className='w-full px-20'>
                                        <h6>From</h6>
                                        <div className='w-full grid grid-cols-2 gap-3 text-center'>
                                            <div className='bg-gray-300 min-w-fit py-2 rounded-lg shadow shadow-black text-xs md:text-lg'>
                                                June 10,2025
                                            </div>
                                            <div className='bg-gray-300 min-w-fit py-2 rounded-lg shadow shadow-black text-xs md:text-lg'>
                                                09:41 AM
                                            </div>
                                        </div>
                                        <h6>To</h6>
                                        <div className='w-full grid grid-cols-2 gap-3 text-center'>
                                            <div className='bg-gray-300 min-w-fit py-2 rounded-lg shadow shadow-black text-xs md:text-lg'>
                                                June 10,2025
                                            </div>
                                            <div className='bg-gray-300 min-w-fit py-2 rounded-lg shadow shadow-black text-xs md:text-lg'>
                                                09:41 AM
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        }



                    </div>
                    <div className='w-full mt-10'>
                        {
                            !toggle ?
                                <button className='w-full text-center py-3 bg-amber-950 text-white rounded-full'>Declain</button>
                                :
                                <button className='w-full text-center py-3 bg-green-600 text-white rounded-full'>Call</button>
                       }

                    </div>

                </div>
            </div>

        </>
    )
}

export default ServiceLeadDetails