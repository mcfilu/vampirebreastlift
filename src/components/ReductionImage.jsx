import React from 'react'
import { reduction} from '../assets'

const ReductionImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={reduction}></img>
        <div className={`absolute left-[5vw] top-1/3`}>
            <h1 className={`text-gold1 font-poppins text-[6vh]`}>Breast Reduction</h1>
            <ul className={`text-white font-poppins text-[2.2vh] mt-[3vh]`}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Surgical procedure that reduces breast size for improved comfort and aesthetics.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Helps reduce back, neck, and shoulder pain that large breasts can often cause.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Removes excess breast tissue, fat, and skin, reducing potential health complications.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Results are tailored to the individual's body shape and personal preference.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Natural-looking, long-lasting results.</li>
            </ul>
            
        </div>
        <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i>
    </div>
  )
}

export default ReductionImage