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


const VampireBreastLift = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <BreastliftImage/>

        </div>
        <div className="flex flex-col book2-gradient" >
        <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
               <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <VampireBasics/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <TreatmentSummary/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center py-[10vh] `}>
                  <BreastliftCompare/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center  py-[10vh]`}>
                  <BreastliftFaqs/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <YoutubeTestimonials/>
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

export default VampireBreastLift