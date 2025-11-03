import React from 'react'
import AppHeader from '../components/AppHeader'
import ServiceLeadDetails from '../components/service_flow/ServiceLeadDetails'
import AddLeadBalance from '../components/service_flow/AddLeadBalance'
import InvoiceForm from '../components/service_flow/InvoiceForm'
import ServiceDeclineForm from '../components/service_flow/ServiceDeclineForm'
import AccountDetails from '../components/service_flow/AccountDetails'
import TransactionList from '../components/service_flow/TransactionList'
import ActiveComplaints from '../components/service_flow/ActiveComplaints'
import FranchiseDetails from '../components/service_flow/FranchiseDetails'

function LeadGen() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200'>
        <AppHeader title={'LEADS'}/>
        <FranchiseDetails/>
        
    </div>
    </>
  )
}

export default LeadGen