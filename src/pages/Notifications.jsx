import React from 'react'
import AppHeader from '../components/AppHeader'
import NotificationItem from '../components/NotificationItem'

function Notifications() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200 pb-4'>
        <AppHeader title={'NOTIFICATIONS'}/>
        <div className='w-full px-10 md:px-20'>
            <h2 className='font-bold mt-10'>Today</h2>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <h2 className='font-bold mt-10'>Yesterday</h2>
            <NotificationItem/>
            <h2 className='font-bold mt-10'>Nov 20,2024</h2>
            <NotificationItem/>
        </div>
    </div>
    </>
  )
}

export default Notifications