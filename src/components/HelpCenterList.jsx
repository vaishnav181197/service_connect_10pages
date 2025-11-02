import React, { useState } from 'react'
import FAQ from './FAQ'
import ContactUs from './ContactUs'
function HelpCenterList() {
    const [toggle, setToggle] = useState(false)


    return (
        <>
            <div className='w-full min-h-3/4'>
                <div className='w-full grid grid-cols-2'>
                    <div className={toggle ? 'text-center p-4 bg-white text-black' : 'text-center p-4 border-b-2 border-blue-500'} onClick={() => setToggle(false)}>
                        FAQ
                    </div>
                    <div className={!toggle ? 'text-center p-4 bg-white text-black' : 'text-center p-4 border-b-2 border-blue-500'} onClick={() => setToggle(true)}>
                        CONTACT US
                    </div>
                </div>
                {
                    toggle ?
                        <ContactUs />
                        :
                        <FAQ />

                }

            </div>
        </>
    )
}

export default HelpCenterList