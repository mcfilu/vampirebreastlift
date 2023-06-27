import React from 'react'
import { boobs2, boobs1 } from '../assets'

const BreastliftImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={boobs1}></img>
        <div className={`absolute left-[1.5vw] top-[28%] md:w-[35%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    <h1 className={`text-gold1 text-[5vh] font-poppins mb-[3vh] mt-20 text-left`}>Vampire Breast Lift™ </h1>
                        <h1 className={`text-white text-[2.5vh] font-poppins mb-[3vh] text-justify p-[0.5vh]`}>Rediscover your feminine curves and boost your self-confidence with Vampire Breast Lift - the innovative procedure that uses your body's natural growth factors to enhance breast shape, size, and firmness.</h1>
                        <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh]  `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default BreastliftImage