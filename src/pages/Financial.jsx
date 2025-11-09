//p83
import React from 'react'
import AppHeader from '../components/AppHeader'
import AccountDetails from '../components/service_flow/AccountDetails'
import TransactionList from '../components/service_flow/TransactionList'
import ToolBar from '../components/ToolBar'

function Financial() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200'>
        <AppHeader title={'FINANCIAL'} settings={true} search={true}/>
        <AccountDetails/>
        <TransactionList/>
        <ToolBar/>
    </div>
    </>
  )
}

export default Financial