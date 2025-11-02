import React, { useState } from 'react'
import JobItem from './JobItem'
import ServiceItem from './ServiceItem'

function JobList() {
    const bookings = [
        { id: 1, title: "Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Active" },
        { id: 1, title: "Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Active" },
    ]

    const [jobstatus, setJobStatus] = useState(false)
    return (
        <>
            <div className='w-full min-h-screen'>

                <div className='w-full bg-gray-600 p-1 grid grid-cols-2 rounded-full my-3 md:w-3/4 md:mx-auto'>
                    <div className={jobstatus ? 'text-center py-3 rounded-full text-white' : 'text-center py-3 rounded-full text-black bg-white'} onClick={() => setJobStatus(false)}>
                        Ongoing
                    </div>
                    <div className={jobstatus ? 'text-center py-3 rounded-full text-black bg-white' : 'text-center py-3 rounded-full text-white'} onClick={() => setJobStatus(true)}>
                        Complete
                    </div>
                </div>
                {
                    jobstatus ?
                        <div className='w-full flex flex-col gap-6 p-4 min-h-3/4'>
                            <ServiceItem rating={4.3} />
                            <ServiceItem rating={4.2} />
                            <ServiceItem rating={4.1} />

                        </div>
                        :
                        <div className='w-full flex flex-col gap-3 p-4 min-h-3/4'>
                            {bookings.map((item) => (
                                <JobItem job={item} />

                            ))}
                        </div>

                }



            </div>
        </>
    )
}

export default JobList