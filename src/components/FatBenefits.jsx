import React from 'react'
import { breastliftvideo } from '../assets'

const FatBenefits = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[55vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`w-1/2 h-[100%] flex items-center`}>
            <video src={breastliftvideo} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
        </div>
        <div className={`flex flex-col w-[60%] p-[3vh] bg-black bg-opacity-70 rounded-[9px] ml-[0.8vw]`}>
            <h1 className={`text-gold1 text-[4vh] text-center font-poppins`}>Breast Fat Enlargement Benefits</h1>
            <p className={`text-white font-poppins text-[1.7vh] text-justify mt-[2.5vh] mb-[1vh]`}>The goal of Breast Enlargement with Fat is to enhance the size and shape of the breasts using the patient's own fat. It promotes a natural-looking enlargement while also refining the overall silhouette of the body. According to client reports, benefits of the procedure include:</p>
            <ul className={`text-white text-[1.7vh] font-poppins `}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Naturally fuller, proportionate breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Enhanced contour and cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Improved symmetry between breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Smoother skin texture over the breast area</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Utilization of body's own fat, offering a natural and organic solution</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Increased self-confidence and body image satisfaction</li>
            </ul>
        </div>
    
    </div>
  )
}

export default FatBenefits