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
        <div className="flex flex-col book2-gradient pt-24 pb-24" >
            <div className={`flex flex-col justify-center mx-auto max-w-[1800px]`}>
               <div className={`mt-20`}>
                <VampireBasics/>
              </div>
              <div className={`mt-20`}>
                  <TreatmentSummary/>
              </div>
              <div className={`mt-20`}>
                  <BreastliftCompare/>
              </div>
              <div className={`mt-20`}>
                  <BreastliftFaqs/>
              </div>
              <div className={`mt-20`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`mt-20`}>
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