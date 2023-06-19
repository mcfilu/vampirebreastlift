import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'
import ClinicReviews from '../components/ClinicReviews'

import FatBenefits from '../components/FatBenefits'
import FatCompare from '../components/FatCompare'
import FatDetails from '../components/FatDetails'
import FatFaqs from '../components/FatFaqs'
import FatImage from '../components/FatImage'
import FatOpening from '../components/FatOpening'
import FatServices from '../components/FatServices'
import FatSummary from '../components/FatSummary'
import FatTreated from '../components/FatTreated'
import FatVideo from '../components/FatVideo'
import YoutubeTestimonials from '../components/YoutubeTestimonials'

const Fat = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <FatImage/>

        </div>
        <div className="flex flex-col book2-gradient" >
        <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
              <div className={`flex  w-full h-[80vh] justify-center items-center mt-[20vh] `}>
                <FatOpening/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <FatDetails/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <FatBenefits/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center py-[10vh] `}>
                  <FatCompare/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center  py-[10vh]`}>
                  <FatFaqs/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <FatSummary/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center  justify-center `}>
                  <FatVideo/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <FatTreated/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ClinicReviews/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <FatServices/>
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

export default Fat