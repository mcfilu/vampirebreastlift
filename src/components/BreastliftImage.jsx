import React from 'react'
import { boobs2 } from '../assets'

const BreastliftImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={boobs2}></img>
        <div className={`absolute left-[5vw] top-1/3`}>
            <h1 className={`text-gold1 font-poppins text-[6vh]`}>Vampire Breastlift</h1>
            <ul className={`text-white font-poppins text-[2.2vh] mt-[3vh]`}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Non-surgical breast lift using patient's own blood.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Improves skin tone, texture, and sensitivity.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>No implants or incisions, reducing complications and downtime.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Quick, minimally invasive, and customizable.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Natural-looking, long-lasting results.</li>
            </ul>
            
        </div>
        <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i>
    </div>
  )
}

export default BreastliftImage