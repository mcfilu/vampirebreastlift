import React, { useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { useEffect } from 'react'


const BookNow = () => {
    const [hov, setHove] = useState(false);
    // let hasRun = false;
    // const widthPercentage = 0;
    // function calculateViewportPercentage() {
    // if (hasRun) return;
    
    // const viewportWidth = window.innerWidth;
    // const viewportHeight = window.innerHeight;

    // const widthPercentage = viewportWidth * 0.6;
    // const heightPercentage = viewportHeight * 0.5;
    // widthPercentage = widthPercentage + "px";
    // heightPercentage = heightPercentage + "px";

    // console.log(`Width: ${widthPercentage}, Height: ${heightPercentage}`);
    
    // hasRun = true;
    // }


  return (
    
        <div className={`flex flex-row items-center justify-between bg-black bg-opacity-30 w-11/12 h-[70vh] rounded-[9px] p-[4vh] pb-[5vh] pt-[5vh] hover:bg-opacity-50 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`} >
            {/* <div className={`flex justify-center items-center w-[25vw] h-[68vh]`}>

            
                <div className={`  bg-black flex flex-col h-full justify-center items-left rounded-[8px] p-[1vh] bg-opacity-70`}>
                    <h1 className={`text-white font-poppins mt-8 text-[4vh] text-center`}>Book a Consultation</h1>
                    <h1 className={`text-white font-poppins mt-8 text-[2vh] text-center w-9/12 mx-auto`}>To request a consultation with Dr Sherif Wakil MD FACS please complete this form.</h1>
                </div>
            </div> */}
            {/* <div style={{position: "relative", minWidth: "1320px", minHeight: "750px"}} className={`flex`}>
            <iframe
                src="https://calendly.com/nikekarta2/30min"
                width="100%"
                height="100%"
                frameborder="0"
            ></iframe> */}
                <InlineWidget url="https://calendly.com/drswclinics/" 
                    utm={{
                    utmCampaign: 'Spring Sale 2019',
                    utmContent: 'Shoe and Shirts',
                    utmMedium: 'Ad',
                    utmSource: 'Facebook',
                    utmTerm: 'Spring'
                    }} 
                    styles={{
                        height: "69vh", width: "40vw",
                    }} 
                    pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '000000',
                    textColor: '000000'
                    }}
                />
                {/* <div
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/nikekarta2/30min"
                    style={{position: "relative", minWidth: "320px", height: "750px"}}
                    data-processed="true"
                /> */}
            {/* </div> */}
        </div>
    
  )
}

export default BookNow