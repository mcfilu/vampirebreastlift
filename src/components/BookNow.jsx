import React from 'react'
import { InlineWidget } from 'react-calendly'
import { useEffect } from 'react'
import { useState } from 'react'

const BookNow = () => {
    let hasRun = false;
    const widthPercentage = 0;
    function calculateViewportPercentage() {
    if (hasRun) return;
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const widthPercentage = viewportWidth * 0.6;
    const heightPercentage = viewportHeight * 0.5;
    widthPercentage = widthPercentage + "px";
    heightPercentage = heightPercentage + "px";

    // console.log(`Width: ${widthPercentage}, Height: ${heightPercentage}`);
    
    hasRun = true;
    }


  return (
    
        <div className={`flex flex-row bg-black bg-opacity-30 rounded-[9px] ml-[4%] mr-[4%] pb-[5vh] pt-[5vh]`} >
            <div className={`flex justify-center items-center w-[25vw] h-[68vh]`}>

            
                <div className={`  bg-black flex flex-col h-full justify-center items-left ml-8 rounded-[8px] p-[1vh] bg-opacity-70`}>
                    <h1 className={`text-white font-poppins mt-8 text-[4vh] text-center`}>Book a Consultation</h1>
                    <h1 className={`text-white font-poppins mt-8 text-[2vh] text-center w-9/12 mx-auto`}>To request a consultation with Dr Sherif Wakil MD FACS please complete this form.</h1>
                </div>
            </div>
            <div className={`h-[80vh] w-[50vw] `}>
            <iframe
                src="https://calendly.com/nikekarta2/30min"
                width="107%"
                height="100%"
                frameborder="0"
            ></iframe>
                {/* <InlineWidget url="https://calendly.com/nikekarta2/30min" 
                    utm={{
                    utmCampaign: 'Spring Sale 2019',
                    utmContent: 'Shoe and Shirts',
                    utmMedium: 'Ad',
                    utmSource: 'Facebook',
                    utmTerm: 'Spring'
                    }} 
                    styles={{
                        height: "70vh", width: "60vw",
                    }} 
                    pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '000000',
                    textColor: '000000'
                    }}
                /> */}
            </div>
        </div>
    
  )
}

export default BookNow