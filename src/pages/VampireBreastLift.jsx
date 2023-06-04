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
              <div className={`flex  w-full h-[80vh] justify-center items-center mt-[20vh] `}>
                <BreastLiftOpening/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <BreastLiftDetails/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <BreastLiftBenefits/>
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
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <TreatmentSummary/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <BreastLiftVideo/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <BreastLiftTreated/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ClinicReviews/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <OtherServices/>
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