import React from 'react'
import { reduction} from '../assets'

const ReductionImage = () => {
  return (
    // <div className={`relative`}>
    //     <img className={`w-screen h-screen object-cover`} src={reduction}></img>
    //     <div className={`absolute left-[5vw] top-1/3`}>
    //         <h1 className={`text-gold1 font-poppins text-[6vh]`}>Breast Reduction</h1>
    //         <ul className={`text-white font-poppins text-[2.2vh] mt-[3vh]`}>
    //             <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Surgical procedure that reduces breast size for improved comfort and aesthetics.</li>
    //             <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Helps reduce back, neck, and shoulder pain that large breasts can often cause.</li>
    //             <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Removes excess breast tissue, fat, and skin, reducing potential health complications.</li>
    //             <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Results are tailored to the individual's body shape and personal preference.</li>
    //             <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Natural-looking, long-lasting results.</li>
    //         </ul>
            
    //     </div>
    //     <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i>
    // </div>
    // <div className={`relative`}>
    //     <img className={`w-screen h-screen object-cover`} src={reduction}></img>
    //     <div className={`absolute left-[1.5vw] top-[28%] md:w-[35%]`}>
    //     {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
    //                 <h1 className={`text-gold1 text-[5vh] font-poppins mb-[3vh] mt-20 text-left`}>Breast Reduction</h1>
    //                     <h1 className={`text-white text-[2.5vh] font-poppins mb-[3vh] text-justify`}>Regain comfort and embrace your desired silhouette with Breast Reduction, a transformative procedure designed to alleviate physical discomfort caused by large breasts. This surgical technique reduces breast size, providing relief from back, neck, and shoulder pain while enhancing your overall well-being.</h1>
    //                     <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh]  `}>READ MORE</a>
                       
    //                 {/* </div> */}
    //     </div>
    //     {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    // </div>
    <div className={`relative`}>
    <img className={`w-screen h-screen object-cover`} src={reduction}></img>
    <div className={`absolute left-[1.5vw] top-[28%] md:w-[45%]`}>
    {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                <h1 className={`text-gold1 text-[8vh] font-header md:mb-[3vh] mt-20 text-left`}>Breast Reduction </h1>
                    <h1 className={`text-white text-[2.2vh] md:text-[2.5vh] font-main mb-[3vh] text-left  md:w-[75%]`}>Regain comfort and embrace your desired silhouette with Breast Reduction, a transformative procedure designed to alleviate physical discomfort caused by large breasts. This surgical technique reduces breast size, providing relief from back, neck, and shoulder pain while enhancing your overall well-being.</h1>
                    <a href="reduction_opening" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                   
                {/* </div> */}
    </div>
    {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
</div>
  )
}

export default ReductionImage