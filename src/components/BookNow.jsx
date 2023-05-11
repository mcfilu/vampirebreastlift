import React from 'react'
import { InlineWidget } from 'react-calendly'
import { useEffect } from 'react'
import { useState } from 'react'

const BookNow = () => {
    

  return (
    
        <div className={`flex flex-row bg-black bg-opacity-30 rounded-[9px] ml-[4%] mr-[4%] pb-10`} >
        <div className={`flex justify-center items-center h-[660px] pt-[66px] pb-[30px]`}>

        
            <div className={`  bg-black flex flex-col h-full justify-center items-left ml-8 rounded-[8px] p-4 bg-opacity-70`}>
                <h1 className={`text-white font-poppins mt-8 text-[35px] text-center`}>Book a Consultation</h1>
                <h1 className={`text-white font-poppins mt-8 text-[20px] text-center w-9/12 mx-auto`}>To request a consultation with Dr Sherif Wakil MD FACS please complete this form.</h1>
            </div>
        </div>
        <div className={`flex `}>
            <InlineWidget url="https://calendly.com/nikekarta2/30min" 
                utm={{
                utmCampaign: 'Spring Sale 2019',
                utmContent: 'Shoe and Shirts',
                utmMedium: 'Ad',
                utmSource: 'Facebook',
                utmTerm: 'Spring'
                }} 
                styles={{
                    height: '660px', width: "1000px",
                }} 
                pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '000000',
                textColor: '000000'
                }}
            />
        </div>
        </div>
    
  )
}

export default BookNow