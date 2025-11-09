import React from 'react'
import AppHeader from '../components/AppHeader'
import FranchiseDetails from '../components/service_flow/FranchiseDetails'
import App from '../App'

function Franchise() {
  return (
    <>
    <div className='w-full min-h-screen'>
        <AppHeader title={'FRANCHISE DETAILS'}/>
        <FranchiseDetails/>
    </div>
    </>
  )
}

export default Franchise