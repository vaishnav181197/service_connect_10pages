//98
import React,{useState} from 'react'
import ToolBar from '../ToolBar'
import ActiveComplaintItem from './ActiveComplaintItem'

function ActiveComplaints() {
    const bookings = [
        { id: 1, title: "Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Pending" },

    ]
    const [status, setStatus] = useState(false)
    return (
        <>
            <div className='w-full px-10 py-3 min-h-screen md:px-20'>
                <div className='w-full bg-gray-600 p-1 grid grid-cols-2 rounded-full my-3 md:w-3/4 md:mx-auto'>
                    <div className={status ? 'text-center py-3 rounded-full text-white' : 'text-center py-3 rounded-full text-black bg-white'} onClick={() => setStatus(false)}>
                        Active
                    </div>
                    <div className={status ? 'text-center py-3 rounded-full text-black bg-white' : 'text-center py-3 rounded-full text-white'} onClick={() => setStatus(true)}>
                        Completed
                    </div>
                </div>
                <div>
                    {
                        bookings.map((item) => (
                            <ActiveComplaintItem job={item} /> 
                        ))
                    }
                    
                </div>

            </div>
        </>
    )
}

export default ActiveComplaints