import React from 'react'
import AppHeader from '../components/AppHeader'
import BoostServiceForm from '../components/BoostServiceForm'

function BoostServices() {
  return (
    <>
    <div className='w-full  min-h-screen bg-gray-200'>
        <AppHeader title={'BOOST SERVICES'}/>
        <BoostServiceForm/>
    </div>
    </>
  )
}

export default BoostServices