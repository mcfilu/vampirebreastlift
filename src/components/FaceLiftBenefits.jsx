import React from 'react'
import { faceliftvideo } from '../assets'

const FaceLiftBenefits = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[55vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`w-1/2 h-[100%] flex items-center`}>
            <video src={faceliftvideo} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
        </div>
        <div className={`flex flex-col w-1/2 p-[3vh] bg-black bg-opacity-70 rounded-[9px] ml-[0.8vw]`}>
            <h1 className={`text-gold1 text-[4vh] text-center font-poppins`}>Vampire FaceLift Benefits</h1>
            <p className={`text-white font-poppins text-[1.5vh] text-justify mt-[3.5vh] mb-[1.5vh]`}>Patients report that their skin looks brighter, more hydrated and healthy, with an altogether more youthful glow. Offering natural looking, potentially outstanding results, the Vampire Face Lift will:</p>
            <ul className={`text-white text-[1.5vh] font-poppins `}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Make skin look firmer</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Visibly improve wrinkles and lines</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Improve skin texture and tone</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Provide a lifting effect by restoring volume</li>

            </ul>
        </div>
    
    </div>
  )
}

export default FaceLiftBenefits