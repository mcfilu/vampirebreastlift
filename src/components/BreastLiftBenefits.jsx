import React from 'react'
import { breastliftvideo, sherif, sherif_blood, boobs5, boobs6, boobs2, boobs7, boobs8, boobs9, boobs10, boobs11} from '../assets'

const BreastLiftBenefits = () => {
  return (
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  `}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <img src={boobs10} className={`w-full h-full object-cover`}></img>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]   `}>
            <h1 className={`text-gold1 text-[5vh] text-center font-poppins`}>Vampire BreastLift Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh]`}>The aim of the Vampire Breast Lift is to lift the breasts; provide a fuller, more pronounced cleavage and provide a more youthful look by enhancing the chest area’s skin. According to client reports, benefits of the treatment include:</p>
            <ul className={`text-white text-[2.1vh] font-poppins `}>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Shapelier, firmer breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Achieve a fuller, more pronounced cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Perkier nipples</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Smoother skin</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Fill implant ‘rippling’</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Increased nipple sensitivity</li>
            </ul>
        </div>
        

      <div className={`md:hidden flex flex-col`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-poppins`}>Vampire BreastLift Benefits</h1>
      <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh]`}>The aim of the Vampire Breast Lift is to lift the breasts; provide a fuller, more pronounced cleavage and provide a more youthful look by enhancing the chest area’s skin. According to client reports, benefits of the treatment include:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Shapelier, firmer breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Achieve a fuller, more pronounced cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Perkier nipples</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Smoother skin</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Fill implant ‘rippling’</li>
                <li className={`flex items-center mt-[1vh]`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Increased nipple sensitivity</li>
            </ul>
      </div>
    
    </div>
  )
}

export default BreastLiftBenefits