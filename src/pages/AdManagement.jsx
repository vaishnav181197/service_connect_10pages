//p88
import React from 'react'
import AdsList101 from '../components/service_flow/AdsList101'
import AppHeader from '../components/AppHeader'
import ToolBar from '../components/ToolBar'

function AdManagement() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200'>
    <AppHeader title={'ADS MANAGEMENT'} settings={true} search={true}/>
    <AdsList101/>
    <ToolBar/>
    </div>
    </>
  )
}

export default AdManagement