import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'
import ClinicReviews from '../components/ClinicReviews'

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
import YoutubeTestimonials from '../components/YoutubeTestimonials'

const Augmentation = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <AugmentationImage/>

        </div>
        <div className="flex flex-col book2-gradient" >
        <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
              <div className={`flex  w-full h-[80vh] justify-center items-center mt-[20vh] `}>
                <AugmentationOpening/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <AugmentationDetails/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <AugmentationBenefits/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center py-[10vh] `}>
                  <AugmentationCompare/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center  py-[10vh]`}>
                  <AugmentationFaqs/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <AugmentationSummary/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center  justify-center `}>
                  <AugmentationVideo/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center  justify-center `}>
                  <AugmentationTreated/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ClinicReviews/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <AugmentationServices/>
              </div>
              
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
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

export default Augmentation