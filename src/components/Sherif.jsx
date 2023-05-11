import React from 'react'
import { sherif } from '../assets'

const Sherif = () => {
  return (
    <div className={`relative flex items-center justify-left mx-auto w-11/12 h-[600px] rounded-[9px] `}>
        <img src={sherif} className={`w-full h-full rounded-[9px]`}></img>
        <div className={`absolute flex flex-col w-4/12 ml-8 pr-4`}>
            <h1 className={`text-gold1 text-[50px] text-left pb-12 font-poppins`}>Dr Sherif Wakil</h1>
            <p className={`text-white text-[15px] pb-12`}>Dr Sherif el Wakil (also known as Dr Sherif Wakil) is the founder and medical director of DrSW Clinics and Royale Skin clinics. He has more than two decades of experience and has worked in a number of leading hospitals in the UK and Middle East, including The Royal London Hospital NHS Trust and is now based on London’s Harley Street.</p>
            <a className={`text-gold1 hover-underline-animation2 text-[20px] w-[120px]`}>READ MORE</a>
        </div>
    </div>
  )
}

export default Sherif