import React, { useState } from 'react'
import { sherif } from '../assets'

const Sherif = () => {
  const [hov, setHove] = useState(false);
  return (
    <div onMouseEnter={() => setHove(true)} onMouseLeave={() => {setHove(false)}} className={`overflow-hidden relative flex items-center justify-left mx-auto w-11/12 h-[65vh] rounded-[9px] hover:bg-opacity-75 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500 `}>
        <img src={sherif} className={`w-full h-full rounded-[9px] ${hov ? 'scale-110' : ''} ease-in-out duration-500`}></img>
        <div className={`absolute flex flex-col w-4/12 ml-8 pr-[1vh]`}>
            <h1 className={`text-gold1 text-[6vh] text-left pb-12 font-poppins`}>Dr Sherif Wakil</h1>
            <p className={`text-white text-[1.7vh] pb-12 text-justify`}>Dr Sherif el Wakil (also known as Dr Sherif Wakil) is the founder and medical director of DrSW Clinics and Royale Skin clinics. He has more than two decades of experience and has worked in a number of leading hospitals in the UK and Middle East, including The Royal London Hospital NHS Trust and is now based on London’s Harley Street.</p>
            <a className={`text-gold1 hover-underline-animation2 text-[2vh] pl-[2vh] pr-[2vh] mt-[3vh]`}>READ MORE</a>
        </div>
    </div>
  )
}

export default Sherif