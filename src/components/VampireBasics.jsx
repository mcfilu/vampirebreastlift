import React from 'react'
import { BloodCells } from '../assets'

const VampireBasics = () => {
  return (
    <div className={`flex flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[80vh] rounded-[9px] p-[1vh]`}>
        <div className={`flex flex-col w-1/2 p-[3vh] bg-black bg-opacity-70 rounded-[9px] mr-6`}>
            <h1 className={`text-gold1 text-[40px] text-center font-poppins`}>Vampire method basics</h1>
            <p className={`text-white font-poppins text-[15px] mt-16`}>Harnessing the body’s natural healing and rejuvenation powers by harvesting platelet rich plasma (PRP) packed with growth factors (cells that are responsible for the body’s ability to repair/rejuvenate itself) from a small sample of the client’s own blood (hence the name ‘Vampire’ treatments) the Vampire Breast Lift can be implemented to:</p>
            <ul className={`text-white text-[15px] font-poppins mt-6 mb-8 mb-6`}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Counteract sagging or/and loss of volume at the top of the breasts caused by breast feeding, weight loss or simple ageing</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Achieve a fuller, more pronounced cleavage</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Improve the texture of the chest’s skin</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px]`}></i>Target creased cleavage skin</li>
            </ul>
        </div>
        <div className={`w-1/2 flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px]`}></video>
        </div>
    </div>
  )
}

export default VampireBasics