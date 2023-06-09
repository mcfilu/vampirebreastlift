import React from 'react'
import { augmentation, augmentation2 } from '../assets'

const AugmentationImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={augmentation2}></img>
        <div className={`absolute left-[5vw] top-1/3`}>
            <h1 className={`text-gold1 font-poppins text-[6vh]`}>Breast Augmentation</h1>
            <ul className={`text-white font-poppins text-[2.2vh] mt-[3vh]`}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Surgical procedure for enhancing the size and shape of breasts.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Uses medical-grade implants for volume enhancement and contouring.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>A procedure tailored to individual patient's desires and body proportions.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Enhances body symmetry and improves self-confidence.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Natural-looking, long-lasting results.</li>
            </ul>
            
        </div>
        <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i>
    </div>
  )
}

export default AugmentationImage