import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'
import ClinicReviews from '../components/ClinicReviews'
import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import Awards from '../components/Awards'
import Media from '../components/Media'

import ReductionBenefits from '../components/ReductionBenefits'
import ReductionCompare from '../components/ReductionCompare'
import ReductionDetails from '../components/ReductionDetails'
import ReductionFaqs from '../components/ReductionFaqs'
import ReductionImage from '../components/ReductionImage'
import ReductionOpening from '../components/ReductionOpening'
import ReductionServices from '../components/ReductionServices'
import ReductionSummary from '../components/ReductionSummary'
import ReductionTreated from '../components/ReductionTreated'
import ReductionVideo from '../components/ReductionVideo'



const Reduction = () => {
  return (
    <div className={`bg- w-full`}>
      {/* <div className={`hidden md:fixed fixed z-20 `}>
            <video src={vampire_Reduction_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <ReductionImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              {/* <div className={`flex  w-full  justify-center mt-20`}>
                <ReductionOpening/>
              </div> */}
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <ReductionDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ReductionBenefits/>
              </div>
              {/* <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <ReductionVideo/>
              </div> */}
              
              <div className={`flex  w-full bg-gold1  items-center mt-[7vh]`}>
                  <ReductionSummary/>
              </div>
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <ReductionCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <ReductionFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <ReductionFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <ReductionCompare/>
                </div>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center  my-14`}>
                  <BookNow/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <ReductionTreated/>
              </div>
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ReductionServices/>
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

export default Reduction