//p89
import React from 'react'
import AppHeader from '../components/AppHeader'
import ChooseAdType from '../components/service_flow/ChooseAdType'
import ToolBar from '../components/ToolBar'

function CreateAds() {
    return (
        <>
            <div className='w-full min-h-screen bg-gray-200'>
                <AppHeader title={'CREATE ADS'} settings={true} search={true}/>
                <ChooseAdType/>
                <ToolBar/>
            </div>
        </>
    )
}

export default CreateAds