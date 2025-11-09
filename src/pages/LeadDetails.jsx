//82

import React from 'react'
import AppHeader from '../components/AppHeader'
import ServiceLeadDetails from '../components/service_flow/ServiceLeadDetails'

function LeadDetails() {
    return (
        <>

            <div className='w-full min-h-screen bg-gray-200 '>
                <AppHeader title={'LEAD DETAILS'}/>
                <ServiceLeadDetails/>
            </div>
        </>
    )
}

export default LeadDetails