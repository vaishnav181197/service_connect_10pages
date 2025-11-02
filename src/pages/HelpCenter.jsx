import React from 'react'
import AppHeader from '../components/AppHeader'
import HelpCenterList from '../components/HelpCenterList'

function HelpCenter() {
  return (
    <>
        <div className='w-full min-h-screen bg-gray-200'>
            <AppHeader title={'HELP CENTER'} settings={true} search={true}/>
            <HelpCenterList/>
        </div>
    </>
  )
}

export default HelpCenter