import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactMap from '../components/ContactMap'
import Contact2 from '../components/Contact2'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'

const Contact = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>
            {/* <Contact2/> */}
        </div>
        <div className="flex flex-col book2-gradient pt-24 pb-24" >
            <div className={`flex flex-col justify-center mx-auto max-w-[1400px]`}>
              <div className={`mt-20`}>
                  <ContactMap/>
              </div>
              <div className={`mt-20`}>
                  <Media/>
              </div>
              <div className={`mt-20`}>
                  <Awards/>
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

export default Contact