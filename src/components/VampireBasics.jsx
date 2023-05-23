import React from 'react'
import { BloodCells } from '../assets'

const VampireBasics = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[55vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`flex flex-col w-1/2 p-[3vh] bg-black bg-opacity-70 rounded-[9px] mr-[0.8vw]`}>
            <h1 className={`text-gold1 text-[5vh] text-center font-poppins`}>Vampire method basics</h1>
            <p className={`text-white font-poppins text-[1.5vh] text-justify mt-[3.5vh] mb-[1.5vh]`}>Harnessing the body’s natural healing and rejuvenation powers by harvesting platelet rich plasma (PRP) packed with growth factors (cells that are responsible for the body’s ability to repair/rejuvenate itself) from a small sample of the client’s own blood (hence the name ‘Vampire’ treatments) the Vampire Breast Lift can be implemented to:</p>
            <ul className={`text-white text-[1.5vh] font-poppins `}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Counteract sagging or/and loss of volume at the top of the breasts caused by breast feeding, weight loss or simple ageing</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Achieve a fuller, more pronounced cleavage</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Improve the texture of the chest’s skin</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Target creased cleavage skin</li>
            </ul>
        </div>
        <div className={`w-1/2 h-[100%] flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
        </div>
    </div>
  )
}

export default VampireBasics