import React from 'react'
import {  difference_icon, augmentation_icon2, aesthetic_icon } from '../assets'

const AugmentationTreated = () => {
  return (
        <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

        <p className={`text-[5vh] text-gold1 text-center md:mb-[5vh] font-header`}>Conditions Treated</p>
        
        <div className={`flex flex-col md:flex-row w-full items-center justify-center mt-[2vh]  `}>
        
            
            
            
            <div  className={`relative flex flex-col       mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500`}>
            
                <div className={`flex flex-col bg-black justify-center items-center`}>
                    <div className={`flex h-[15vh] `}>
                        <img src={augmentation_icon2} className={`w-full h-full object-cover`}></img>
                    </div>
                    
                    <h1 className={`text-gold1 text-[4vh] text-left font-main mt-[2vh]`}>Breast Size</h1>
                    {/* <h1 className={` text-gold2 text-[5.5vh] text-left`}>Size</h1> */}
                </div>
                
        
        
            </div>
        
            <div  className={`relative flex flex-col      mt-[5vh] md:mt-[0px] hover:bg-opacity-80 ] hover:ease-in-out duration-500 mx-[10vw]`}>
            
                <div className={`flex flex-col bg-black justify-center items-center`}>
                    <div className={`flex h-[15vh] `}>
                        <img src={aesthetic_icon} className={`w-full h-full object-cover`}></img>
                    </div>
                    
                    <h1 className={`text-gold1 text-[4vh] text-center font-main mt-[2vh]`}>Aesthetic Enhancement</h1>
                    {/* <h1 className={` text-white text-[5.5vh] text-left`}>Texture</h1> */}
                </div>
                
        
        
            </div>
            
        
            <div  className={`relative flex flex-col     mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500`}>
            
                <div className={`flex flex-col bg-black justify-center items-center`}>
                    <div className={`flex h-[15vh] `}>
                        <img src={difference_icon} className={`w-full h-full object-cover`}></img>
                    </div>
                    
                    <h1 className={`text-gold1 text-[4vh] text-left font-main mt-[2vh]`}>Breast Shape</h1>
                    {/* <h1 className={` text-gold2 text-[5.5vh] text-left`}>Rippling</h1> */}
                </div>
                
        
        
            </div>
            
        
            
        
            
        </div>
        
        
        </div>
  )
}

export default AugmentationTreated