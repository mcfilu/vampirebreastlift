import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BreastliftCompare from '../components/BreastliftCompare'
import BreastliftFaqs from '../components/BreastliftFaqs'
import TreatmentSummary from '../components/TreatmentSummary'
import BookNow from '../components/BookNow'
import BreastliftImage from '../components/BreastliftImage'
import VampireBasics from '../components/VampireBasics'
import YoutubeTestimonials from '../components/YoutubeTestimonials'
import BreastLiftBenefits from '../components/BreastLiftBenefits'
import BreastLiftOpening from '../components/BreastLiftOpening'
import BreastLiftDetails from '../components/BreastLiftDetails'
import OtherServices from '../components/OtherServices'
import BreastLiftVideo from '../components/BreastLiftVideo'
import BreastLiftTreated from '../components/BreastLiftTreated'
import ClinicReviews from '../components/ClinicReviews'
import { vampire_breastlift_new_intro } from '../assets'
import { useState } from 'react'
import { useEffect } from 'react'
import Media from '../components/Media'
import Awards from '../components/Awards'
import TrustBox from '../components/TrustBox'
import TrustPilotSlider from '../components/TrustPilotSlider'
import WakilSummary from '../components/WakilSummary'
import FooterBook from '../components/FooterBook'
import { Helmet } from 'react-helmet-async';


import YouTube from 'react-youtube'


const VampireBreastLift = () => {
  const [videoEnded, setVideoEnded] = useState(false);
    // var Speed = 50;
    const handleVideoEnd = () => {
        setVideoEnded(true);
    };
    const videoId = 'tbb0Gl7-QhQ'; // Replace this with your YouTube video ID
  const opts = {
    playerVars: {
      autoplay: 1, // Auto play the video
      controls: 0, // Hide YouTube controls (optional)
      modestbranding: 1,
    },
  };

  const onReady = (event) => {
    event.target.mute(); // Mute the video on load (optional)
  };
    
  return (
    <div className={`w-full`}>
      <Helmet>
        <title>Non Surgical Breast Lift in London | Vampire Breast Lift</title>
        <meta name='description' content="Get the best non-surgical breast lift in London at Vampire Breast Lift by Dr. Sherif Wakil. Call us at +44 (0)20 3006 8459 for a lift you'll love." />
      </Helmet>
      <div className={`hidden md:block fixed z-20`}>
            <video src={vampire_breastlift_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen h-screen object-cover`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
            {/* <YouTube videoId={videoId} opts={opts} onReady={onReady}/> */}
        </div>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <BreastliftImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="breastlift_opening" className={`flex  w-full  justify-center mt-20`}>
                <BreastLiftOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <BreastLiftDetails/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <BreastLiftBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <BreastLiftTreated/>
              </div>
             
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <BreastLiftVideo/>
              </div>
              
              <div className={`flex  w-full bg-black  items-center mt-[7vh]`}>
                  <TreatmentSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <BreastliftCompare/>
              </div>
              
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <BreastliftFaqs/>
              </div>

             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <BreastliftFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <BreastliftCompare/>
                </div>
              </div>

              
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center  `}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <OtherServices/>
              </div>
              <div className={`flex flex-col  justify-center  my-[7vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[2vh]`}>
                        <Awards/>
                    </div>
                </div>
              

          </div>
        </div>
        
        <div className={`relative z-0 ` }>
          <Footer/>
        </div>
    </div>
  )
}

export default VampireBreastLift