import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'
import ClinicReviews from '../components/ClinicReviews'

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
import YoutubeTestimonials from '../components/YoutubeTestimonials'


const Reduction = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <ReductionImage/>

        </div>
        <div className="flex flex-col book2-gradient" >
        <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
              <div className={`flex  w-full h-[80vh] justify-center items-center mt-[20vh] `}>
                <ReductionOpening/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <ReductionDetails/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ReductionBenefits/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center py-[10vh] `}>
                  <ReductionCompare/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center  py-[10vh]`}>
                  <ReductionFaqs/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ReductionSummary/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center  justify-center `}>
                  <ReductionVideo/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ReductionTreated/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ClinicReviews/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ReductionServices/>
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

export default Reduction