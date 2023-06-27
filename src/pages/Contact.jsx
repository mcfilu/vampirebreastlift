import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactMap from '../components/ContactMap'
import Contact2 from '../components/Contact2'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'

import WakilClinic from '../components/WakilClinic'

const Contact = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>
            {/* <Contact2/> */}
        </div>
        <div className="flex flex-col bg-black pt-[12vh] md:pt-[20vh]" >
            <div className={`flex flex-col justify-center `}>
              <div className={`flex  w-full justify-center items-center`} >
                  <ContactMap/>
              </div>
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <WakilClinic/>
              </div>
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <BookNow/>
              </div>
              <div className={`flex flex-col  justify-center mt-[8vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[8vh]`}>
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

export default Contact