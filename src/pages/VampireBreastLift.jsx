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


const VampireBreastLift = () => {
  const [videoEnded, setVideoEnded] = useState(false);
    // var Speed = 50;
    const handleVideoEnd = () => {
        setVideoEnded(true);
    };
    
  return (
    <div className={`bg- w-full`}>
      <div className={` fixed z-20 `}>
            <video src={vampire_breastlift_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <BreastliftImage/>

        </div>
        <div className="flex flex-col bg-gold1" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div className={`flex  w-full  justify-center mt-20`}>
                <BreastLiftOpening/>
              </div>
              <div className={`flex  w-full  justify-center  mt-14`}>
                <BreastLiftDetails/>
              </div>
              <div className={`flex  w-full ] items-center mt-14`}>
                  <TreatmentSummary/>
              </div>
              <div className={`flex  w-full  items-center mt-14`}>
                  <BreastLiftBenefits/>
              </div>
              <div className={`flex flex-row w-full h-auto    mt-14 `}>
                <div className={`flex w-1/2 border-r-black border-r-2`}>
                  <BreastliftFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <BreastliftCompare/>
                </div>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-14 `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-14`}>
                <YoutubeTestimonials/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-14`}>
                  <BreastLiftVideo/>
              </div>
              <div className={`flex  w-full  items-center mt-14 `}>
                  <BreastLiftTreated/>
              </div>
              {/* <div className={`flex  w-full  items-center mt-14`}>
                  <ClinicReviews/>
              </div> */}
              <div className={`flex flex-col w-11/12 mx-auto  mt-14`}>
                  <TrustBox/>
              </div>
              
              <div className={`flex  w-full  items-center mt-14`}>
                  <OtherServices/>
              </div>
              <div className={`flex flex-col  justify-center mt-14 `}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[8vh]`}>
                        <Awards/>
                    </div>
                </div>
              <div className={`flex  w-full  justify-center items-center  my-14`}>
                  <BookNow/>
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