//p84
import React from 'react'
import AppHeader from '../components/AppHeader'
import PersonalBrandingCard from '../components/service_flow/PersonalBrandingCard'
import ToolBar from '../components/ToolBar'
import { TransactionCard } from '../components/service_flow/TransactionCard'

function Transactions() {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
        <AppHeader title={'TRANSACTIONS'} settings={true} search={true}/>
        <div className='flex flex-col gap-2 px-10 py-5 md:px-20'>
            <TransactionCard/>
            <TransactionCard/>
            <TransactionCard/>
            <TransactionCard/>
            <TransactionCard/>
        </div>
        <ToolBar/>
    </div>
  )
}

export default Transactions