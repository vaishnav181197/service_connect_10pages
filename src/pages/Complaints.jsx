//p85
import React from 'react'
import AppHeader from '../components/AppHeader'
import ToolBar from '../components/ToolBar'
import ActiveComplaints from '../components/service_flow/ActiveComplaints'

function Complaints() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200'>
        <AppHeader title={'COMPLAINTS'} settings={true} search={true}/>
        <ActiveComplaints/>
        <ToolBar/>
    </div>
    </>
  )
}

export default Complaints