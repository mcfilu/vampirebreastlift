import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactMap from '../components/ContactMap'
import Contact2 from '../components/Contact2'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'

import WakilDetails from '../components/WakilDetails'
import WakilOpening from '../components/WakilOpening'
import WakilSummary from '../components/WakilSummary'
import WakilClinic from '../components/WakilClinic'
import WakilImage from '../components/WakilImage'

const DrWakil = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>
            <WakilImage></WakilImage>
        </div>
        <div className="flex flex-col book2-gradient pt-24 pb-24" >
            <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
            <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                  <WakilOpening/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                  <WakilDetails/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center`} >
                  <WakilClinic/>
              </div>
              
              
              <div className={`flex flex-col  h-[90vh] justify-center`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[8vh]`}>
                        <Awards/>
                    </div>
                </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center`} >
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

export default DrWakil