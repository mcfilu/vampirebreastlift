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

import AugmentationBenefits from '../components/AugmentationBenefits'
import AugmentationCompare from '../components/AugmentationCompare'
import AugmentationDetails from '../components/AugmentationDetails'
import AugmentationFaqs from '../components/AugmentationFaqs'
import AugmentationImage from '../components/AugmentationImage'
import AugmentationOpening from '../components/AugmentationOpening'
import AugmentationServices from '../components/AugmentationServices'
import AugmentationSummary from '../components/AugmentationSummary'
import AugmentationTreated from '../components/AugmentationTreated'
import AugmentationVideo from '../components/AugmentationVideo'



const Augmentation = () => {
  return (
    <div className={`bg- w-full`}>
      {/* <div className={`hidden md:fixed fixed z-20 `}>
            <video src={vampire_Augmentation_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <AugmentationImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              {/* <div className={`flex  w-full  justify-center mt-20`}>
                <AugmentationOpening/>
              </div> */}
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <AugmentationDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <AugmentationBenefits/>
              </div>
              {/* <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <AugmentationVideo/>
              </div> */}
              
              <div className={`flex  w-full bg-gold1  items-center mt-[7vh]`}>
                  <AugmentationSummary/>
              </div>
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <AugmentationCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <AugmentationFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <AugmentationFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <AugmentationCompare/>
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
                  <AugmentationTreated/>
              </div>
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <AugmentationServices/>
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

export default Augmentation