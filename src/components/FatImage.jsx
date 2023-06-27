import React from 'react'
import { boobs1, fat3 } from '../assets'

const FatImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={fat3}></img>
        <div className={`absolute left-[1.5vw] top-[28%] md:w-[35%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    <h1 className={`text-gold1 text-[5vh] font-poppins mb-[3vh] mt-20 text-left`}>Breast Fat Enlargement </h1>
                        <h1 className={`text-white text-[2.5vh] font-poppins mb-[3vh] text-justify`}>Experience a transformative journey towards fuller, more voluptuous breasts with Breast Fat Enlargement. This groundbreaking procedure harnesses the power of your own body's fat cells to enhance the size, shape, and firmness of your breasts, allowing you to embrace your femininity with renewed confidence. </h1>
                        <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh]  `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default FatImage