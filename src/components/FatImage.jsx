import React from 'react'
import { fat, fat2, fat3 } from '../assets'

const FatImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={fat3}></img>
        <div className={`absolute left-[5vw] top-1/3`}>
            <h1 className={`text-gold1 font-poppins text-[6vh]`}>Breast Fat Enlargement</h1>
            <ul className={`text-white font-poppins text-[2.2vh] mt-[3vh]`}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Natural breast enlargement using patient's own fat cells.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Enhances the shape, fullness, and symmetry of the breasts.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>No foreign implants, minimizing complications and risks.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Quick, minimally invasive, and customizable.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Natural-looking, lasting results that align with the body's proportion.</li>
            </ul>
            
        </div>
        <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i>
    </div>
  )
}

export default FatImage