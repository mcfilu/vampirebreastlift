import React from 'react'
import { breastliftvideo } from '../assets'

const BreastLiftBenefits = () => {
  return (
    <div className={`flex w-full flex-row  md:h-[55vh]   `}>
        
        <div className={`hidden md:flex flex flex-col w-1/2 p-[3vh]   ml-[0.8vw]`}>
            <h1 className={`text-gold1 text-[5vh] text-center font-poppins`}>Vampire BreastLift Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh]`}>The aim of the Vampire Breast Lift is to lift the breasts; provide a fuller, more pronounced cleavage and provide a more youthful look by enhancing the chest area’s skin. According to client reports, benefits of the treatment include:</p>
            <ul className={`text-white text-[2.1vh] font-poppins `}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Shapelier, firmer breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Achieve a fuller, more pronounced cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Perkier nipples</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Smoother skin</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Fill implant ‘rippling’</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Increased nipple sensitivity</li>
            </ul>
        </div>
        <div className={`hidden md:flex w-1/2 h-[100%] flex items-center pr-[0px]`}>
            <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video>
        </div>

      <div className={`md:hidden flex flex-col`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-poppins`}>Vampire BreastLift Benefits</h1>
      <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video>
      <p className={`text-white font-poppins text-[2.1vh] text-center p-[1v] mt-[3vh] mb-[2vh]`}>The aim of the Vampire Breast Lift is to lift the breasts; provide a fuller, more pronounced cleavage and provide a more youthful look by enhancing the chest area’s skin. According to client reports, benefits of the treatment include:</p>
            <ul className={`text-white text-[2.1vh] font-poppins `}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Shapelier, firmer breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Achieve a fuller, more pronounced cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Perkier nipples</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Smoother skin</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Fill implant ‘rippling’</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Increased nipple sensitivity</li>
            </ul>
      </div>
    
    </div>
  )
}

export default BreastLiftBenefits