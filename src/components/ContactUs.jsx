import React from 'react'

function ContactUs() {
  return (
    <>
    <div className='w-full h-fit'>
       <div className='flex flex-col justify-center gap-3 mt-10'>
          
          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className=' mb-2 font-semibold'><i className="fa-solid fa-xl fa-headphones me-3"></i>Customer Services</h4>
          </div>
          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className=' mb-2 font-semibold'><i className="fa-brands fa-xl fa-whatsapp me-3"></i>Whatsapp</h4>
          </div>
          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className=' mb-2 font-semibold'><i className="fa-brands fa-xl fa-facebook me-3"></i>Facebook</h4>
          </div>
          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className=' mb-2 font-semibold'><i className="fa-brands fa-xl fa-twitter me-3"></i>Twitter</h4>
          </div>
          <div className='w-3/4 bg-white p-4 mx-auto rounded-lg md:w-2/3'>
            <h4 className=' mb-2 font-semibold'><i className="fa-brands fa-xl fa-instagram me-3"></i>Instagram</h4>
          </div>
         

        </div>
    </div>
    </>
  )
}

export default ContactUs