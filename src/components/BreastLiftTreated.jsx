import React from 'react'
import { breastlift_treated1, breastlift_treated2, breastlift_treated3 } from '../assets'

const BreastLiftTreated = () => {
  return (
    <div className={`flex flex-col items-center justify-center w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[50vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <p className={`text-gold1 text-[4.5vh] text-center mb-[2vh]`}>Conditions Treated</p>
        <div className={`flex flex-row justify-center w-full h-[80%]`}>
            <div className={`flex w-[30%] h-full`}>
                <div className={`flex flex-col w-full h-full`}>
                    <div className={`w-full h-[70%] bg-white rounded-[9px]`}><img src={breastlift_treated1} className={`w-full h-full rounded-[9px]`} ></img></div>
                    
                    <p className={`text-gold1 text-center mt-[2vh] text-[3.5vh]`}>Implant Rippling</p>
                </div>
            
            
            </div>
            <div className={`flex w-[30%] h-full mx-[4vh]`}>
                <div className={`flex flex-col w-full h-full`}>
                    <div className={`w-full h-[70%] bg-white rounded-[9px]`}><img src={breastlift_treated2} className={`w-full h-full object-cover rounded-[9px]`} ></img></div>
                    
                    <p className={`text-gold1 text-center mt-[2vh] text-[3.5vh]`}>Breast Size</p>
                </div>
            
            
            </div>
            <div className={`flex w-[30%] h-full `}>
                <div className={`flex flex-col w-full h-full`}>
                    <div className={`w-full h-[70%] bg-white rounded-[9px]`}><img src={breastlift_treated3} className={`w-full h-full object-cover rounded-[9px]`} ></img></div>
                    
                    <p className={`text-gold1 text-center mt-[2vh] text-[3.5vh]`}>Skin Texture</p>
                </div>
            
            
            </div>
        </div>
        
    </div>
  )
}

export default BreastLiftTreated