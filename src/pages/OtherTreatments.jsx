import React from 'react'
import OtherServices from '../components/OtherServices'
import OtherServices2 from '../components/OtherServices2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Media from '../components/Media'
import Awards from '../components/Awards'
import BookNow from '../components/BookNow'


const OtherTreatments = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>
            {/* <Contact2/> */}
        </div>
        <div className="flex flex-col book2-gradient py-[13vh]" >
            <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
              <div className={`flex flex-col w-full h-[85vh] justify-center items-center`} >
                <div className={`flex items-center justify-center w-[92%] h-[6vh] bg-black bg-opacity-80 rounded-[9px] mb-[2vh]`}>
                  <h1 className={`text-gold1 text-center text-[3vh]`}>Related Treatments:</h1>
                </div>
                
                  <OtherServices/>
              </div>
              <div className={`flex flex-col w-full h-[100vh] justify-center items-center`} >
                <div className={`flex items-center justify-center w-[92%] h-[6vh] bg-black bg-opacity-80 rounded-[9px] mb-[2vh]`}>
                  <h1 className={`text-gold1 text-center text-[3vh]`}>Other Dr Wakil Treatments:</h1>
                </div>
                  <OtherServices2/>
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

export default OtherTreatments