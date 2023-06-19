import React from 'react'
import { augmentation_vid } from '../assets'

const ReductionBenefits = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[55vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`w-1/2 h-[100%] flex items-center`}>
            <video src={augmentation_vid} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
        </div>
        <div className={`flex flex-col w-1/2 p-[3vh] bg-black bg-opacity-70 rounded-[9px] ml-[0.8vw]`}>
            <h1 className={`text-gold1 text-[4vh] text-center font-poppins`}>Breast Reduction Benefits</h1>
            <p className={`text-white font-poppins text-[1.7vh] text-justify mt-[2.5vh] mb-[1vh]`}>The aim of the Vampire Breast Lift is to lift the breasts; provide a fuller, more pronounced cleavage and provide a more youthful look by enhancing the chest area’s skin. According to client reports, benefits of the treatment include:</p>
            <ul className={`text-white text-[1.7vh] font-poppins `}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Balanced, well-proportioned breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Relief from physical discomfort</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Improved posture and reduction in skin irritations </li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Better fitting clothing and expanded wardrobe choices</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Enhanced self-esteem and confidence</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Increase in physical activity comfort and overall quality of life</li>
            </ul>
        </div>
    
    </div>
  )
}

export default ReductionBenefits