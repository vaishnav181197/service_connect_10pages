import React from 'react'
import AppHeader from '../components/AppHeader'
import ToolBar from '../components/ToolBar'
import UserProfileItem from '../components/UserProfileItem'
import JobList from '../components/JobList'

function Profile() {
  return (
    <>
        <div className='w-full min-h-screen bg-gray-200 '>
            <AppHeader title={'PROFILE'}/>
            <UserProfileItem/>
            <ToolBar/>
        </div>
    </>
  )
}

export default Profile