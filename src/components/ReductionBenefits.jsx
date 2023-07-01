import React from 'react'
import { boobs10 } from '../assets'
import { NavLink } from 'react-router-dom'

const ReductionBenefits = () => {
  return (
    // <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[55vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
    //     <div className={`w-1/2 h-[100%] flex items-center`}>
    //         <video src={augmentation_vid} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
    //     </div>
    //     <div className={`flex flex-col w-1/2 p-[3vh] bg-black bg-opacity-70 rounded-[9px] ml-[0.8vw]`}>
    //         <h1 className={`text-gold1 text-[4vh] text-center font-main`}>Breast Reduction Benefits</h1>
    //         <p className={`text-white font-main text-[1.7vh] text-justify mt-[2.5vh] mb-[1vh]`}>The aim of the Vampire Breast Lift is to lift the breasts; provide a fuller, more pronounced cleavage and provide a more youthful look by enhancing the chest area’s skin. According to client reports, benefits of the treatment include:</p>
    //         <ul className={`text-white text-[1.7vh] font-main `}>
    //             <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Balanced, well-proportioned breasts</li>
    //             <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Relief from physical discomfort</li>
    //             <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved posture and reduction in skin irritations </li>
    //             <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Better fitting clothing and expanded wardrobe choices</li>
    //             <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enhanced self-esteem and confidence</li>
    //             <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Increase in physical activity comfort and overall quality of life</li>
    //         </ul>
    //     </div>
    
    // </div>
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  `}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <img src={boobs10} className={`w-full h-full object-cover`}></img>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh] items-center  `}>
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Reduction Benefits</h1>
            <p className={`text-white font-main text-[2.1vh] text-justify mt-[3vh] mb-[2vh]`}>
Experience a transformation with Breast Reduction, a surgical procedure designed to alleviate physical discomfort and enhance your natural contours. This innovative technique reduces breast size, relieving the strain on your back, neck, and shoulders while improving your overall body proportions. Benefit from a shapelier, more balanced silhouette and a newfound sense of confidence as you embrace a more comfortable and harmonious lifestyle. Discover the positive effects of this procedure as reported by our satisfied clients:</p>
            <ul className={`w-full text-white text-[2.1vh] font-main items-left`}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Balanced, well-proportioned breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Relief from physical discomfort</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved posture and reduction in skin irritations</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Better fitting clothing and expanded wardrobe choices</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enhanced self-esteem and confidence</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Increase in physical activity comfort and overall quality of life</li>
            </ul>
            <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></NavLink>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Reduction Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <img src={boobs10} className={`w-full h-full object-cover`}></img>
      <p className={`text-white font-main text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh]`}>
Experience a transformation with Breast Reduction, a surgical procedure designed to alleviate physical discomfort and enhance your natural contours. This innovative technique reduces breast size, relieving the strain on your back, neck, and shoulders while improving your overall body proportions. Benefit from a shapelier, more balanced silhouette and a newfound sense of confidence as you embrace a more comfortable and harmonious lifestyle. Discover the positive effects of this procedure as reported by our satisfied clients:</p>
            <ul className={`text-white text-[2.1vh] font-main pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Balanced, well-proportioned breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Relief from physical discomfort</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved posture and reduction in skin irritations</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Better fitting clothing and expanded wardrobe choices</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enhanced self-esteem and confidence</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Increase in physical activity comfort and overall quality of life</li>
            </ul>
            <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></NavLink>
      </div>
    
    </div>
  )
}

export default ReductionBenefits