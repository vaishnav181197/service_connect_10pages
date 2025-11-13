import React from 'react'

function ReviewItems() {
  return (
  <>
            <div className='w-full flex bg-white rounded-2xl shadow-2xl p-3 items-start gap-2 my-4'>
                <img src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" className='rounded-full' height={'100px'} width={'100px'} alt="" />
                <div>
                    <div className='w-full flex justify-between items-center'>
                        <h3 className='font-bold'>John Doe</h3>
                        <span className='px-2 bg-gray-500 rounded-full'><i className="fa-solid text-yellow-400 fa-star" ></i> 4.5</span>
                    </div>
                    <div className='mt-3'>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident hic nobis eos officia, ipsa harum doloremque delectus quaerat omnis dignissimos sunt quibusdam facere quia, ab cumque reiciendis veniam ducimus inventore?</p>
                        <div className='flex gap-10 font-bold'>
                            <span><i className="fa-solid fa-heart text-red-700"></i>578</span>
                            <span>2 weeks ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ReviewItems