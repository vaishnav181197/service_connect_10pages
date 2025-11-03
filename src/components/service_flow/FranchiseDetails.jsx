//100
import React from 'react'

function FranchiseDetails() {
    return (
        <>
            <div className='w-full min-h-screen pb-1'>
                <div className='w-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPMGbp0NWaVJvY_-_YYIe92gxOEMJAixILw&s" alt="franchise" className='w-full ' style={{height:'300px'}} />
                </div>
                <div className='p-5'>
                    <h4>Franchise NAME</h4>
                    <div className='flex justify-between mt-5'>
                        <div className='flex justify-start items-center gap-2'>
                            <span className='px-4 py-2 bg-black text-white text-lg rounded-full'>T</span>
                            <span>Tom Jose</span>
                        </div>
                        <button className='px-2 py-1 bg-black text-white rounded-full'>Chat/Contact</button>
                    </div>
                </div>
                <div className='p-8 bg-white'>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio laborum nihil quam quidem hic vel dolorum labore corrupti recusandae tempora ipsam, expedita quae modi blanditiis reiciendis consectetur obcaecati illo deleniti?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolor enim explicabo, ea atque natus deserunt itaque ullam cum recusandae nam perferendis quisquam exercitationem similique minima dolores omnis! Ad, nobis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aspernatur eius quis, possimus necessitatibus veniam? Beatae numquam quos iusto et cum molestias sequi, amet aut deleniti veritatis, perspiciatis nulla excepturi?
                    </p>
                </div>
                <div className='p-8 bg-white mt-3'>
                    <h3 className='font-semibold'>Contact Info</h3>
                    <table className='w-full mt-4'>
                        <tr>
                            <td className='text-gray-600'>
                                Address
                            </td>
                            <td>
                                KK Building,Palarivattom,<br />
                                Ernakulam,Kerala <br />
                                Pin : 678957
                            </td>
                        </tr>
                        <tr>
                            <td className='text-gray-600'>
                                Email
                            </td>
                            <td>
                                axcr@gmil.com
                            </td>
                        </tr>
                        <tr>
                            <td className='text-gray-600'>
                                Phone
                            </td>
                            <td>
                                9874589665
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FranchiseDetails