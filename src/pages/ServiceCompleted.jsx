import React from 'react'
import AppHeader from '../components/AppHeader'
import ToolBar from '../components/ToolBar'
import JobList from '../components/JobList'
function ServiceCompleted() {
  return (
    <>
     <div className='w-full min-h-screen bg-gray-200 flex flex-col'>
            <AppHeader title={'WORKS'} settings={true} search={true}/>
            <JobList/>
            <ToolBar/>
        </div>
    </>
  )
}

export default ServiceCompleted