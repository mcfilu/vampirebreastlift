import React from 'react'
import FaceLiftBenefits from '../components/FaceLiftBenefits'
import FaceLiftFaqs from '../components/FaceLiftFaqs'
import FaceLiftTreatmentSummary from '../components/FaceLiftTreatmentSummary'
import FaceLiftYouTube from '../components/FaceLiftYouTube'
import VampireBasics from '../components/VampireBasics'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BookNow from '../components/BookNow'
import FaceLiftImage from '../components/FaceLiftImage'
import FaceLiftCompare from '../components/FaceLiftCompare'
import FaceLiftBasics from '../components/FaceLiftBasics'


const VampireFaceLift = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <FaceLiftImage/>

        </div>
        <div className="flex flex-col book2-gradient" >
        <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
               <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <FaceLiftBasics/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <FaceLiftTreatmentSummary/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <FaceLiftBenefits/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center py-[10vh] `}>
                  <FaceLiftCompare/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center  py-[10vh]`}>
                  <FaceLiftFaqs/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <FaceLiftYouTube/>
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

export default VampireFaceLift